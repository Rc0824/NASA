from flask import Flask, request, jsonify
import os
from langchain.llms import OpenAI
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.tools import AIPluginTool
from langchain.chat_models import ChatOpenAI
from flask_cors import CORS
from langchain.memory import ConversationBufferMemory

app = Flask(__name__)
CORS(app, origins="http://127.0.0.1:5500")

# Set environment variables
os.environ["OPENAI_API_KEY"] = "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"
os.environ["SERPAPI_API_KEY"] = "d1f03a506e536cde04e69f11e1b879ce8ac85952937cb1f0344603321e6cd62e"

# Initialize OpenAI and tools
llm = ChatOpenAI(temperature=0.8,model="gpt-3.5-turbo",max_tokens=2000)
tool_name = ["serpapi"]
tools = load_tools(tool_name)
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
agent = initialize_agent(tools, llm, agent="chat-conversational-react-description", verbose=True, memory=memory)

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
