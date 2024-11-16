#! /bin/bash

./scripts/query_solr.py --query config/query1.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query1_schema_trec.txt
./scripts/query_solr.py --query config/query2.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query2_schema_trec.txt
./scripts/query_solr.py --query config/query3.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query3_schema_trec.txt

./scripts/query_solr.py --query config/query1.json --uri http://localhost:8983/solr --collection stackoverflow_schemaless | ./scripts/solr2trec.py > results_query1_schemaless_trec.txt
./scripts/query_solr.py --query config/query2.json --uri http://localhost:8983/solr --collection stackoverflow_schemaless | ./scripts/solr2trec.py > results_query2_schemaless_trec.txt
./scripts/query_solr.py --query config/query3.json --uri http://localhost:8983/solr --collection stackoverflow_schemaless | ./scripts/solr2trec.py > results_query3_schemaless_trec.txt

