from fastembed import TextEmbedding
import numpy as np

# Load embedding model once
model = TextEmbedding()

def generate_embeddings(chunks):
    embeddings = list(model.embed(chunks))
    return np.array(embeddings)