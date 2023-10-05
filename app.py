# import openai
# import os
# import requests
# from langchain.llms import OpenAI
# from langchain.agents import load_tools
# from langchain.agents import initialize_agent
# from langchain.tools import AIPluginTool


# os.environ["OPENAI_API_KEY"] = "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"
# os.environ["SERPAPI_API_KEY"] = "d1f03a506e536cde04e69f11e1b879ce8ac85952937cb1f0344603321e6cd62e"


# llm = OpenAI(temperature=0.8,model_name ="gpt-3.5-turbo")
# tool_name = ["serpapi"]
# tools = load_tools(tool_name)
# agent = initialize_agent(tools,llm,agent ="zero-shot-react-description", verbose = True)
# agent.run("what relationship is between moon and tide")


from flask import Flask, request, jsonify
import os
from langchain.llms import OpenAI
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.tools import AIPluginTool
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://127.0.0.1:64583")

# Set environment variables
os.environ["OPENAI_API_KEY"] = "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"
os.environ["SERPAPI_API_KEY"] = "d1f03a506e536cde04e69f11e1b879ce8ac85952937cb1f0344603321e6cd62e"

# Initialize OpenAI and tools
llm = OpenAI(temperature=0.8, model_name="gpt-3.5-turbo")
tool_name = ["serpapi"]
tools = load_tools(tool_name)
agent = initialize_agent(tools, llm, agent="zero-shot-react-description", verbose=True)

@app.route('/app/', methods=['GET','POST'])
def ask_question():
    try:
        # Get the question from the request
        question = request.json.get('question')
        # Generate a response to the question
        response = agent.run(question)

        # Return the response as JSON
        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
