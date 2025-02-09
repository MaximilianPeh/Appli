import os
import pandas as pd

from groq import Groq

def get_recommendations(user_history):

    client = Groq(api_key=os.environ.get("GROQ_API_KEY"),)
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "What items should a user borrow based on previous borrowing history? Don't include instructions in your output. Input will be a .csv file with a user's previous borrowing history and all items listed in our app that a user can borrow. Ouput a .csv of five items that you would recommend to the user based on their interests. Do not give me any other information."
            },
            {
                "role": "user",
                "content": pd.read_csv(user_history).to_string()
            },
        ],
        temperature=0.2,
        max_completion_tokens=1024,
        top_p=1,
        stream=False,
        stop=None,
    )

    output = completion.choices[0].message.content
    print(output)

get_recommendations(user_history)

# for chunk in completion:
#     print(chunk.choices[0].delta.content or "", end="")
