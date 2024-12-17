#! /bin/bash

./scripts/query_solr.py --query config/query1.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query1_trec.txt
./scripts/query_solr.py --query config/query2.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query2_trec.txt
./scripts/query_solr.py --query config/query3.json --uri http://localhost:8983/solr --collection stackoverflow | ./scripts/solr2trec.py > results_query3_trec.txt

cat config/qrels1.txt | ./scripts/qrels2trec.py > qrels1_trec.txt
cat config/qrels2.txt | ./scripts/qrels2trec.py > qrels2_trec.txt
cat config/qrels3.txt | ./scripts/qrels2trec.py > qrels3_trec.txt

echo " --- Evaluating for Query 1 --- "
src/trec_eval/trec_eval qrels1_trec.txt results_query1_trec.txt > eval_query1.txt

echo " --- Evaluating for Query 2 --- "
src/trec_eval/trec_eval qrels2_trec.txt results_query2_trec.txt > eval_query2.txt

echo " --- Evaluating for Query 3 --- "
src/trec_eval/trec_eval qrels3_trec.txt results_query3_trec.txt > eval_query3.txt

cat results_query1_trec.txt | ./scripts/plot_pr.py --qrels qrels1_trec.txt --output prec_rec_query1.png

cat results_query2_trec.txt | ./scripts/plot_pr.py --qrels qrels2_trec.txt --output prec_rec_query2.png

cat results_query3_trec.txt | ./scripts/plot_pr.py --qrels qrels3_trec.txt --output prec_rec_query3.png

rm qrels1_trec.txt qrels2_trec.txt qrels3_trec.txt
rm results_query1_trec.txt results_query2_trec.txt results_query3_trec.txt
