#! /bin/bash

./scripts/query_solr.py --query config/query1.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query1_schema_trec.txt
./scripts/query_solr.py --query config/query2.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query2_schema_trec.txt
# ./scripts/query_solr.py --query config/query3.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query3_schema_trec.txt

./scripts/query_solr.py --query config/query1.json --uri http://localhost:8983/solr --collection stackoverflow_schemaless | ./scripts/solr2trec.py > results_query1_schemaless_trec.txt
./scripts/query_solr.py --query config/query2.json --uri http://localhost:8983/solr --collection stackoverflow_schemaless | ./scripts/solr2trec.py > results_query2_schemaless_trec.txt
# ./scripts/query_solr.py --query config/query3.json --uri http://localhost:8983/solr --collection stackoverflow_schemaless | ./scripts/solr2trec.py > results_query3_schemaless_trec.txt

cat config/qrels1.txt | ./scripts/qrels2trec.py > qrels1_trec.txt
cat config/qrels2.txt | ./scripts/qrels2trec.py > qrels2_trec.txt
# cat config/qrels3.txt | ./scripts/qrels2trec.py > qrels3_trec.txt

echo " --- Evaluating for Query 1 (Schema version) --- "
src/trec_eval/trec_eval qrels1_trec.txt results_query1_schema_trec.txt > eval_query1_schema.txt
echo " --- Evaluating for Query 1 (Schemaless version) --- "
src/trec_eval/trec_eval qrels1_trec.txt results_query1_schemaless_trec.txt > eval_query1_schemaless.txt

echo " --- Evaluating for Query 2 (Schema version) --- "
src/trec_eval/trec_eval qrels2_trec.txt results_query2_schema_trec.txt > eval_query2_schema.txt
echo " --- Evaluating for Query 2 (Schemaless version) --- "
src/trec_eval/trec_eval qrels2_trec.txt results_query2_schemaless_trec.txt > eval_query2_schemaless.txt

# echo " --- Evaluating for Query 3 (Schema version) --- "
# src/trec_eval/trec_eval qrels3_trec.txt results_query3_schema_trec.txt > eval_query3_schema.txt
# echo " --- Evaluating for Query 3 (Schemaless version) --- "
# src/trec_eval/trec_eval qrels3_trec.txt results_query3_schemaless_trec.txt > eval_query3_schemaless.txt

cat results_query1_schema_trec.txt | ./scripts/plot_pr.py --qrels qrels1_trec.txt --output prec_rec_query1_schema.png
cat results_query1_schemaless_trec.txt | ./scripts/plot_pr.py --qrels qrels1_trec.txt --output prec_rec_query1_schemaless.png

cat results_query2_schema_trec.txt | ./scripts/plot_pr.py --qrels qrels2_trec.txt --output prec_rec_query2_schema.png
cat results_query2_schemaless_trec.txt | ./scripts/plot_pr.py --qrels qrels2_trec.txt --output prec_rec_query2_schemaless.png

# cat results_query3_schema_trec.txt | ./scripts/plot_pr.py --qrels qrels3_trec.txt --output prec_rec_query3_schema.png
# cat results_query3_schemaless_trec.txt | ./scripts/plot_pr.py --qrels qrels3_trec.txt --output prec_rec_query3_schemaless.png

rm qrels1_trec.txt qrels2_trec.txt qrels3_trec.txt
rm results_query1_schema_trec.txt results_query2_schema_trec.txt results_query3_schema_trec.txt
rm results_query1_schemaless_trec.txt results_query2_schemaless_trec.txt results_query3_schemaless_trec.txt
