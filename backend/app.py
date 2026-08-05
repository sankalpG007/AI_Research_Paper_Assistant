from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, UploadFile, File
from chunker import create_chunks
from embedding import generate_embeddings
import shutil
import os
from prompt_builder import build_prompt
from generator import generate_answer
from loader import extract_text
from retriever import retrieve
from fastapi import Body
from pydantic import BaseModel
from typing import Optional
from vector_db import (
    store_chunks,
    total_chunks,
    save_paper_metadata,
    get_all_papers,
    delete_paper
)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "https://ai-research-paper-assistant-eta.vercel.app",
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.get("/")
async def root():
    return {
        "status": "running",
        "message": "AI Research Assistant Backend"
    }

@app.get("/papers")
async def papers():
    return get_all_papers()


import traceback

from fastapi import UploadFile, File

@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "size": file.size if hasattr(file, "size") else "unknown"
    }
class SearchRequest(BaseModel):
    question: str
    paper: Optional[str] = None

@app.post("/search")
async def search(data: SearchRequest):

    results = retrieve(

    data.question,

    paper=data.paper

)

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

    citations = []

    for i in range(len(results["documents"][0])):

        citations.append({

    "text": results["documents"][0][i][:250],

    "source": results["metadatas"][0][i]["source"],

    "chunk": results["metadatas"][0][i]["chunk"],

    "score": round(
        (1-results["distances"][0][i])*100,
        1
    )

})

    return {

        "question": data.question,

        "answer": answer,

        "citations": citations

    }

class DeletePaperRequest(BaseModel):
    filename: str


@app.delete("/paper")
async def delete_uploaded_paper(data: DeletePaperRequest):

    delete_paper(data.filename)

    return {
        "success": True,
        "message": f"{data.filename} deleted successfully."
    } 
        