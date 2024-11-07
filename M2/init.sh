#! /bin/bash

docker run -p 8983:8983 --name solr -v ${PWD}/dataset:/data -d solr:9 #solr-precreate stackoverflow
