import openai
import os
import requests
from langchain.llms import OpenAI
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.utilities import GoogleSearchAPIWrapper
from langchain.utilities import SerpAPIWrapper

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


# api_key = os.environ["GOOGLE_API_KEY"]
os.environ["OPENAI_API_KEY"] = "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"

# search = GoogleSearchAPIWrapper()
# tools = [
#     load_tools (
#         name = 'search' ,
#         func = search.run,
#         description ="search your answer on google"
#     ),
# ] 111

llm =  OpenAI(tempature=0.7)
tools = load_tools(["serpapi"], llm=llm)
agent = initialize_agent(tools,llm,agent ="chat-conversational-react-description", verbose = True)
agent.run("Who is the champion of NBA in 2022?")
