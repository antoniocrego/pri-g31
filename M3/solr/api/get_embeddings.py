import sys
import json
from sentence_transformers import SentenceTransformer

# Load the SentenceTransformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

def get_embedding(text):
    # The model.encode() method already returns a list of floats
    return model.encode(text, convert_to_tensor=False).tolist()

if __name__ == "__main__":
    # Read JSON from STDIN
    questions_path = "dataset/questions.json"
    json_file = open(questions_path, "r", encoding="utf-8")
    output_path = "dataset/questions_with_embeddings_with_body.json"
    
    print("Start reading questions")
    data = json.load(json_file)
    print("Questions read")

    # Update each document in the JSON data
    print("Start embedding")
    for document in data:
        # Extract fields if they exist, otherwise default to empty strings
        title = document.get("Title", "")
        tags = document.get("Tags", "")
        learning_outcomes = document.get("Body", "")

        combined_text = title + " " + tags + " " + learning_outcomes
        document["vector"] = get_embedding(combined_text)
    print("Embedding done")

    # Output updated JSON to STDOUT
    print("Start writing to file")
    output_file = open(output_path, "w", encoding="utf-8")
    json.dump(data, output_file, indent=4, ensure_ascii=False)
    print("Writing done")