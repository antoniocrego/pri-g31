#! /bin/bash

docker run -p 8983:8983 --name solr -v ${PWD}/dataset:/data -d solr:9

fastapi run api.py

echo "CAUTION: please wait ~1min time before running populate script"
