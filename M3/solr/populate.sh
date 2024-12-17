#! /bin/bash

docker exec solr bin/solr delete -c stackoverflow
docker exec solr bin/solr create -c stackoverflow
curl -X POST -H 'Content-type:application/json' --data-binary '@dataset/schema.json' http://localhost:8983/solr/stackoverflow/schema

docker exec solr bin/solr post -c stackoverflow /data/questions_with_embeddings.json
docker exec solr bin/solr post -c stackoverflow /data/answers.json

# curl -X POST -H 'Content-type:application/json' \
# --data-binary "@dataset/questions.json" \
# http://localhost:8983/solr/stackoverflow/update?commit=true

# curl -X POST -H 'Content-type:application/json' \
# --data-binary "@dataset/answers.json" \
# http://localhost:8983/solr/stackoverflow/update?commit=true

curl -X POST -H 'Content-type:application/json' -d "@dataset/spell_check_config.json" "http://localhost:8983/solr/stackoverflow/config"

