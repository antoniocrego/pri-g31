#! /bin/bash

docker container start solr

fastapi run api.py

echo "CAUTION: please wait ~1min before running populate script"
