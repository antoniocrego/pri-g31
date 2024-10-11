import pandas as pd

questions = pd.read_csv('questions/questions.csv')
answers = pd.read_csv('answers/answers.csv')

# delete questions without answer

questions_with_answers_ids = set(answers['ParentId'])

questions = questions.loc[questions['Id'].isin(questions_with_answers_ids)]

questions.to_csv('questions/questions.csv', index=False)
print('Deleted questions without answers')
