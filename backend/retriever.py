from embedding import model
from vector_db import search_chunks
import numpy as np


def retrieve(query, paper=None):
    # FastEmbed returns a generator
    query_embedding = list(model.embed([query]))[0]

    query_embedding = np.array(query_embedding)

    return search_chunks(
        query_embedding,
        paper
    )