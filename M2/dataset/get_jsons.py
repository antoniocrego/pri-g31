import pandas as pd

questions = pd.read_csv('../M1/questions/questions.csv')
answers = pd.read_csv('../M1/answers/answers.csv')

questions.to_json('../M2/questions.json', orient='records')
answers.to_json('../M2/answers.json', orient='records')
