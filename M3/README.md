# M3

## Run

### First of all: Solr

Run ```docker compose up [-d]```.

### Semantic search API

Navigate to ```solr/api``` and run:

```python3 -m venv venv/```

```source venv/bin/activate.sh```

```pip install -r requirements.txt```

```uvicorn api:app --host 0.0.0.0 -- port 8080```

### Next.js Frontend

Navigate to ```frontend/pri-31``` and run:

```npm install```

```npm run build```

```npm run start```
