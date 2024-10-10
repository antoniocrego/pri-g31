import pandas as pd

beginning = 0
end = 58

questions = pd.DataFrame(pd.read_csv('../questions/questions.csv'))
questions_ids = set(questions.iloc[:, 0])
del questions


def get_answers(posts):
    # PostTypeId only 2 (answers)
    posts = posts.loc[posts['PostTypeId'] == 2]

    posts = posts.loc[posts['ParentId'].isin(questions_ids)]

    #print(posts.head())
    
    return posts

for i in range(beginning, end + 1):
    if i == 8:
        continue

    path = f'../dataset/stackoverflow-posts-{i:05}-of-00058.parquet'
    print(f'Reading parquet {i}...')
    temp = pd.read_parquet(path, engine='pyarrow')

    # Remove columns 'ContentLicense', 'FavoriteCount', 'LastEditorUserId', 'OwnerUserId', 'ViewCount'
    temp = temp.drop(columns=['ContentLicense', 'FavoriteCount', 'LastEditorUserId', 'OwnerUserId', 'ViewCount'])

    print(f'Getting answers of parquet no {i}...')
    
    temp = get_answers(temp)

    print(f'Finished getting answers of parquet {i}')
    
    temp.to_csv(f'answers.csv', index=False, mode='a')
    print(f'Appended answers of parquet {i}\n')

    # write last parquet no to last.txt
    with open('last.txt', 'w') as f:
        f.write(str(i))
    
    del temp

#print(questions)
