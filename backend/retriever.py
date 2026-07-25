from embedding import model
from vector_db import search_chunks


def retrieve(query, paper=None, n_results=3):

    query_embedding = model.encode(query)

    results = search_chunks(

        query_embedding,

        paper=paper,

        n_results=n_results

    )

    return results