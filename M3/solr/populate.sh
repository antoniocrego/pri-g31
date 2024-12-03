#! /bin/bash

docker exec m3-solr-1 bin/solr delete -c stackoverflow
docker exec m3-solr-1 bin/solr create -c stackoverflow
curl -X POST -H 'Content-type:application/json' --data-binary '@dataset/schema.json' http://localhost:8983/solr/stackoverflow/schema
docker exec m3-solr-1 bin/post -c stackoverflow /data/questions.json
docker exec m3-solr-1 bin/post -c stackoverflow /data/answers.json
