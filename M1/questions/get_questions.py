import pandas as pd

beginning = 0
end = 58

def get_questions(posts):
    # PostTypeId only 1 (questions)
    posts = posts.loc[posts['PostTypeId'] == 1]

    # Only questions with last activity date greater than 2023-01-01
    posts = posts.loc[(posts['LastActivityDate'] >= '2023-01-01') & (posts['LastActivityDate'] < '2023-02-01')]

    #print(posts.head())
    
    return posts

if __name__ == '__main__':
    for i in range(beginning, end + 1):
        if i == 8:
            continue

        path = f'dataset/stackoverflow-posts-{i:05}-of-00058.parquet'
        print(f'Reading parquet {i}...')
        temp = pd.read_parquet(path, engine='pyarrow')

        # Remove columns 'ContentLicense', 'FavoriteCount', 'LastEditorUserId', 'OwnerUserId', 'ViewCount'
        temp = temp.drop(columns=['ContentLicense', 'FavoriteCount', 'LastEditorUserId', 'OwnerUserId', 'ViewCount'])

        print(f'Getting questions of parquet no {i}...')
        
        temp = get_questions(temp)

        print(f'Finished getting questions of parquet {i}')
        
        if i == 0:
            temp.to_csv(f'questions/questions.csv', index=False)
        else:
            temp.to_csv(f'questions/questions.csv', index=False, mode='a', header=False)
        
        print(f'Appended questions of parquet {i}\n')

        # write last parquet no to last.txt
        with open('questions/last.txt', 'w') as f:
            f.write(str(i))
        
        del temp
