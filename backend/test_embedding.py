from fastembed import TextEmbedding

model = TextEmbedding()

embeddings = list(model.embed(["Hello world"]))

print("Embedding dimensions:", len(embeddings[0]))