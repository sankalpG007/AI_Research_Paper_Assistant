import uuid
from datetime import datetime

import chromadb

client = chromadb.PersistentClient(
    path="chroma_db"
)

# -----------------------------
# Collection for chunks
# -----------------------------

collection = client.get_or_create_collection(
    name="research_papers"
)

# -----------------------------
# Collection for uploaded papers
# -----------------------------

papers_collection = client.get_or_create_collection(
    name="papers"
)


def store_chunks(chunks, embeddings, filename):

    ids = []

    metadatas = []

    for i in range(len(chunks)):

        ids.append(str(uuid.uuid4()))

        metadatas.append({

            "source": filename,

            "chunk": i

        })

    collection.add(

        ids=ids,

        documents=chunks,

        embeddings=embeddings.tolist(),

        metadatas=metadatas

    )


def save_paper_metadata(
    filename,
    characters,
    chunks,
    embedding_dimension,
    model
):

    papers_collection.add(
    ids=[str(uuid.uuid4())],
    documents=["paper_metadata"],
    embeddings=[[0.0] * 384],
    metadatas=[{
        "filename": filename,
        "characters": characters,
        "chunks": chunks,
        "embedding_dimension": embedding_dimension,
        "model": model,
        "uploaded_at": datetime.now().strftime("%d %b %Y %H:%M")
    }]
)


def get_all_papers():

    return papers_collection.get()


def total_chunks():

    return collection.count()

def search_chunks(query_embedding, paper=None, n_results=5):

    if paper:

        return collection.query(

            query_embeddings=[query_embedding.tolist()],

            n_results=n_results,

            where={

                "source": paper

            }

        )

    return collection.query(

        query_embeddings=[query_embedding.tolist()],

        n_results=n_results

    )

def delete_paper(filename):

    # Delete metadata
    metadata = papers_collection.get(
        where={"filename": filename}
    )

    if metadata["ids"]:
        papers_collection.delete(
            ids=metadata["ids"]
        )

    # Delete all chunks
    chunks = collection.get(
        where={"source": filename}
    )

    if chunks["ids"]:
        collection.delete(
            ids=chunks["ids"]
        )

    return True