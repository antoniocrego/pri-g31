import pandas as pd

questions = pd.read_csv('questions/questions.csv')
answers = pd.read_csv('answers/answers.csv')

print(f'Questions: {questions.shape}')
print(f'Answers: {answers.shape}')
