# M3

> CAUTION: Be sure that ```questions_with_embeddings.json``` is present under ```solr/dataset/```.

## Run

### First of all: Solr

Navigate to ```solr/```.

#### First time

Run ```source init.sh```, ```source populate.sh```.

#### Following times

Run ```source start.sh```.

### Semantic search API

Navigate to ```solr/api``` and run:

```python3 -m venv venv```

```source venv/bin/activate```

```pip install -r requirements.txt```

```uvicorn api:app --host 0.0.0.0 --port 8080```

### Next.js Frontend

Navigate to ```frontend/pri-31``` and run:

```npm install```

```npm run build```

```npm run start```
