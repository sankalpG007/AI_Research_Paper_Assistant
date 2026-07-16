from fastapi import FastAPI, UploadFile, File
from chunker import create_chunks
from embedding import generate_embeddings
import shutil
import os
import uuid
from prompt_builder import build_prompt
from generator import generate_answer
from vector_db import store_chunks
from loader import extract_text
from vector_db import total_chunks
from retriever import retrieve
from fastapi import Body
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(

    CORSMiddleware,

    allow_origins=["http://localhost:5173"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.post("/upload")

async def upload_pdf(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )
        print(file_path)
        print(os.path.getsize(file_path))

    text = extract_text(file_path)

    chunks = create_chunks(text)
    embeddings = generate_embeddings(chunks)


    store_chunks(
    chunks,
    embeddings,
    file.filename
    )

    return {

        "filename": file.filename,

        "characters": len(text),

        "chunks": len(chunks),

        "embedding_dimension": len(embeddings[0]),

        "database_records": total_chunks(),

        "model": "Gemini 2.5 Flash"

    }

class SearchRequest(BaseModel):
    question: str

@app.post("/search")
async def search(data: SearchRequest):

    results = retrieve(data.question)

    contexts = results["documents"][0]

    prompt = build_prompt(
        data.question,
        contexts
    )

    answer = generate_answer(prompt)

    print("=" * 60)
    print("QUESTION:")
    print(data.question)

    print("=" * 60)
    print("RETRIEVED CHUNKS:")

    for i, chunk in enumerate(contexts):
        print(f"\nChunk {i+1}\n")
        print(chunk[:250])

    print("=" * 60)

    return {
        "question": data.question,
        "answer": answer,
        "sources": results["metadatas"][0],
        "scores": results["distances"][0]
    }
    