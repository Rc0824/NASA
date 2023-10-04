import openai
import os
import requests
from langchain.llms import OpenAI
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.utilities import GoogleSearchAPIWrapper
import response

# api_key = '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'


# prompt = "who is the champion of NBA in 2022?"

# response = requests.post(
#     'https://api.openai.com/v1/chat/completions',
#     headers = {
#         'Content-Type': 'application/json',
#         'Authorization': f'Bearer {api_key}'
#     },
#     json = {
#         'model': 'gpt-3.5-turbo', 
#         'messages' : [{"role": "user", "content": prompt}]
#     })


# json = response.json()
# print(json)

os.environ["OPENAI_API_KEY"] = "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"
os.environ["SERPAPI_API_KEY"] = "d1f03a506e536cde04e69f11e1b879ce8ac85952937cb1f0344603321e6cd62e"


llm = OpenAI(temperature=0.6)
tool_name = ["serpapi"]
tools = load_tools(tool_name)
agent = initialize_agent(tools,llm,agent ="zero-shot-react-description", verbose = True)
agent.run("Who is the champion of NBA in 2022?")
new_sentence = f"{response}"

# 打印新句子
print(new_sentence)
