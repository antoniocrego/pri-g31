from fastapi import FastAPI
import query_embedding as qe

app = FastAPI()

@app.get("/semantic-query")
def semantic_query(q: str, rows: int = 10):
    embedding = qe.text_to_embedding(q)
    results = qe.solr_knn_query(rows, "http://localhost:8983/solr", "stackoverflow", embedding)

    docs = results.get("response", {}).get("docs", [])
    if not docs:
        print("No results found.")
        return {"results": []}

    return docs
