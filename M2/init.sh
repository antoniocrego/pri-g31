#! /bin/bash

docker run -p 8983:8983 --name solr -v ${PWD}/dataset:/data -d solr:9 solr-precreate stackoverflow

curl -X POST -H 'Content-type:application/json' --data-binary dataset/schema.json http://localhost:8983/solr/stackoverflow/schema

docker exec solr bin/post -c stackoverflow /data/questions.json

docker exec solr bin/post -c stackoverflow /data/answers.json
