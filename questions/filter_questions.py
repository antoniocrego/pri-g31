import pandas as pd

questions = pd.read_csv('questions.csv')
answers = pd.read_csv('../answers/answers.csv')

# filter questions without answer

questions_with_answers_ids = set()

