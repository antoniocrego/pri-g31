# M3

## Run

### First of all: Solr

Run ```docker compose up [-d]```.

If necessary, go to ```solr/``` and run ```source populate.sh```.

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
