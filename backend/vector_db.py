import uuid

import chromadb

client = chromadb.PersistentClient(
    path="chroma_db"
)

collection = client.get_or_create_collection(
    name="research_papers"
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

def total_chunks():
    return collection.count()