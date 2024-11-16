#! /bin/bash

./evaluate.sh

cat config/qrels1.txt | ./scripts/qrels2trec.py > qrels1_trec.txt
cat config/qrels2.txt | ./scripts/qrels2trec.py > qrels2_trec.txt
cat config/qrels3.txt | ./scripts/qrels2trec.py > qrels3_trec.txt

echo " --- Evaluating for Query 1 --- "
trec_eval qrels1_trec.txt results_query1_schema_trec.txt
echo " --- Evaluating for Query 2 --- "
trec_eval qrels2_trec.txt results_query2_schema_trec.txt
echo " --- Evaluating for Query 3 --- "
trec_eval qrels3_trec.txt results_query3_schema_trec.txt
