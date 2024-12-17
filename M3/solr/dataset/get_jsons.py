import pandas as pd

def link_answers_to_questions(questions, answers):
    questions['Answers'] = questions['Id'].apply(lambda x: answers.loc[answers['ParentId'] == x, 'Id'].tolist())
    return questions

questions = pd.read_csv('../../M1/questions/questions.csv')
answers = pd.read_csv('../../M1/answers/answers.csv')

questions = link_answers_to_questions(questions, answers)

questions.to_json('./questions.json', orient='records')
answers.to_json('./answers.json', orient='records')
