import requests
from sentence_transformers import SentenceTransformer

def text_to_embedding(text):
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embedding = model.encode(text, convert_to_tensor=False).tolist()
    
    # Convert the embedding to the expected format
    embedding_str = "[" + ",".join(map(str, embedding)) + "]"
    return embedding_str

def solr_knn_query(rows, endpoint, collection, embedding):
    url = f"{endpoint}/{collection}/knn"

    data = {
        "q": f"{{!knn f=vector topK=10}}{embedding}",
        "fl": "Id,Title,Body,score",
        "rows": rows,
        "wt": "json"
    }
    
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    
    response = requests.post(url, data=data, headers=headers)
    response.raise_for_status()
    return response.json()

def display_results(results):
    docs = results.get("response", {}).get("docs", [])
    if not docs:
        print("No results found.")
        return

    for doc in docs:
        print(f"* {doc.get('Id')} {doc.get('Title')} [score: {doc.get('score'):.2f}]")

def main():
    solr_endpoint = "http://localhost:8983/solr"
    collection = "stackoverflow"
    
    query_text = input("Enter your query: ")
    embedding = text_to_embedding(query_text)

    try:
        results = solr_knn_query(10, solr_endpoint, collection, embedding)
        display_results(results)
    except requests.HTTPError as e:
        print(f"Error {e.response.status_code}: {e.response.text}")

if __name__ == "__main__":
    main()