#! /bin/bash

docker exec solr bin/solr delete -c stackoverflow
docker exec solr bin/solr create -c stackoverflow
curl -X POST -H 'Content-type:application/json' --data-binary '@dataset/schema.json' http://localhost:8983/solr/stackoverflow/schema
docker exec solr bin/post -c stackoverflow /data/questions_with_embeddings.json
# docker exec solr bin/post -c stackoverflow /data/answers.json
