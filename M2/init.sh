#! /bin/bash

docker run -p 8983:8983 --name solr -v ${PWD}/dataset:/data -d solr:9 solr-precreate stackoverflow

docker exec solr bin/post -c stackoverflow /data/questions.json

docker exec solr bin/post -c stackoverflow /data/answers.json
