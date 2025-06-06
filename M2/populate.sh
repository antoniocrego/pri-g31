#! /bin/bash

docker exec solr bin/solr delete -c stackoverflow
docker exec solr bin/solr create -c stackoverflow
curl -X POST -H 'Content-type:application/json' --data-binary '@dataset/schema.json' http://localhost:8983/solr/stackoverflow/schema
docker exec solr bin/post -c stackoverflow /data/questions.json
docker exec solr bin/post -c stackoverflow /data/answers.json


docker exec solr bin/solr delete -c stackoverflow_schemaless
docker exec solr bin/solr create -c stackoverflow_schemaless
docker exec solr bin/post -c stackoverflow_schemaless /data/questions.json
docker exec solr bin/post -c stackoverflow_schemaless /data/answers.json
