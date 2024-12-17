#! /bin/bash

docker exec m3-solr-1 bin/solr delete -c stackoverflow
docker exec m3-solr-1 bin/solr create -c stackoverflow
curl -X POST -H 'Content-type:application/json' --data-binary '@dataset/schema.json' http://localhost:8983/solr/stackoverflow/schema

docker exec m3-solr-1 bin/solr post -c stackoverflow /data/questions_with_embeddings.json
# docker exec m3-solr-1 bin/post -c stackoverflow /data/answers.json

#curl -X POST -H 'Content-type:application/json' \
#--data-binary "@dataset/questions.json" \
#http://localhost:8983/solr/stackoverflow/update?commit=true

curl -X POST -H 'Content-type:application/json' \
--data-binary "@dataset/answers.json" \
http://localhost:8983/solr/stackoverflow/update?commit=true

curl -X POST -H 'Content-type:application/json' -d "@spell_check_config.json" "http://localhost:8983/solr/stackoverflow/config"

