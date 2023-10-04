import openai
import os
import requests
from langchain.llms import OpenAI
from langchain.agents import load_tools
from langchain.agents import initialize_agent


os.environ["OPENAI_API_KEY"] = "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"
os.environ["SERPAPI_API_KEY"] = "d1f03a506e536cde04e69f11e1b879ce8ac85952937cb1f0344603321e6cd62e"


llm = OpenAI(temperature=0.8)
tool_name = ["serpapi"]
tools = load_tools(tool_name)
agent = initialize_agent(tools,llm,agent ="zero-shot-react-description", verbose = True)
agent.run("Who is the champion of NBA in 2022?")


