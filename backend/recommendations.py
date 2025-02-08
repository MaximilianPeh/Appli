import os
import pandas as pd

from groq import Groq

client = Groq(api_key="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",)
completion = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[
        {
            "role": "system",
            "content": "You are a recommendation system for what items a user should borrow based on users' previous borrowing history. Your input will be a .csv file with a user's previous borrowing history of items (like skis, kitchen appliances, etc) and a list of all items listed in our app that a user can borrow. You will then output a .csv list of five items that you would recommend to the user based on their interests. Do not give me any other information."
        },
        {
            "role": "user",
            "content": pd.read_csv("backend/recs.csv").to_string()
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

# for chunk in completion:
#     print(chunk.choices[0].delta.content or "", end="")
