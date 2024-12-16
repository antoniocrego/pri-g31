# Makefile
SHELL := /bin/bash

.PHONY: help
help:
	@echo "Commands:"
	@echo "style      : runs style formatting."
	@echo "trec_eval  : download trec_eval source code and compile it."
	@echo "test       : run unit tests."

.PHONY: style
style:
	isort src test --atomic
	black -l 100 src test
	flake8 src test

.PHONY: trec_eval
trec_eval:
	git clone https://github.com/usnistgov/trec_eval.git src/trec_eval
	cd src/trec_eval && make
	cd ../..

.PHONY: test
test:
	python -m unittest discover -s test -p 'test_*.py'
