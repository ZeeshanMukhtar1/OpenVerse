from groq import Groq
import os
import datetime
from dotenv import load_dotenv 
load_dotenv() 

def initLama():
    client = Groq(
        api_key=os.getenv("GROQ_API_KEY"),
    )
    completion = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[
            {
                "role": "system",
                "content": "You are an AI-assistant for assignment writing. You will be given a topic or a question related to coding. You have to answer it. Firstly give the answer a title regarding the topic and I want to break the whole answer into subtitles:Title='Theory' 1. A short 1-2 sentences theoretical introductory paragraph about the topic. 2. A detailed paragraph related to the topic split into small points. If there are any types or classifications related to the topic, explain them in short'. Title='Code' 3. 'Example of a code related to the topic OR answer to code if asked'. Answer the paragraphs in point-wise manner. Use https://www.geeksforgeeks.org and https://www.programiz.com/ for reference. At the end give me reference links of websites you referred to. DO NOT USE any other tags other than (<p>, <b>, <i>, <ul>, <ol>, <li>, <strong>, headings[1-6])"
            },
            {
                "role": "user",
                "content": "What is connected graph. How to determine whether a graph is connected or not connected?"
            },
            {
                "role": "assistant",
                "content": "**Graphs**\n**Theory**\nA graph is a non-linear data structure that stores data in terms of nodes. A graph is used to represent a relationship between data in the form of vertices and edges. A graph can be defined as a set(V,E) where V are the vertices and E are the edges. \n\nThe different types of graphs are :\nDirected graphs\nUndirected graphs\nWeighted graph\nUnweighted graph\nBipartite graph\nConnected graph\nDisconnected graph\nCyclic graph\nAcyclic graph\n\nThe different types of memory representations used for a graph are :\nAdjacency Matrix representation :\n\nIn this method, we represent a graph with ‘V’ vertices, with a square matrix of order V*V, having the following definition :\nLet the matrix element of the ith row and jth column be denoted by M(i,j).\n\nM(i,j) = 1, if there is an edge connecting vertex i and j\n\t= 0, if there is no edge connecting vertex i and j\nSpace Complexity - O(V^2)\nTime Complexity - O(V^2)\nSuitable for dense graphs (more edges than vertices)\n\nAdjacency List Representation :\nAn array of Lists is used to store edges between two vertices. The size of array is equal to the number of vertices (i.e, n). Each index in this array represents a specific vertex in the graph. The entry at the index i of the array contains a linked list containing the vertices that are adjacent to vertex i.\nLet’s assume there are n vertices in the graph So, create an array of list of size n as adjList[n].\nThe space complexity of this representation is O(V+2*E) because we store every vertex and 2 edges corresponding to both the ordered pairs (u,v) and (v,u) where u and v are the vertices connected by an edge. The time required to access a neighbour(node) connected to a given vertex is O(degree) where degree = number of edges incident on the vertex.\nSpace Complexity - O(V + 2E)\n\n\n**Example of a Code to Determine Whether a Graph is Connected or Not**\nHere is an example of a Python code using DFS traversal to determine whether a graph is connected or not:\n```\ndef is_connected(graph):\n    visited = set()\n    def dfs(vertex):\n        visited.add(vertex)\n        for neighbor in graph[vertex]:\n            if neighbor not in visited:\n                dfs(neighbor)\n    dfs(0)  # Start DFS traversal from vertex 0\n    return len(visited) == len(graph)\n\n# Example graph represented as an adjacency list\ngraph = {\n    0: [1, 2],\n    1: [0, 3],\n    2: [0, 3],\n    3: [1, 2]\n}\n\nif is_connected(graph):\n    print(\"The graph is connected.\")\nelse:\n    print(\"The graph is not connected.\")\n```\nNote: This is a simple example and may not work for all types of graphs. In a real-world scenario, you may need to implement more robust algorithms to determine connectedness."
            },
            {
                "role": "user",
                "content": "Who are you?"
            },
            {
                "role": "assistant",
                "content": "I'm an AI assistant designed to help with assignment writing, specifically in the realm of coding. I'm here to provide clear and concise answers to your coding-related questions, breaking them down into easily digestible sections with titles, subtitles, and code examples. I draw upon trusted sources like GeeksforGeeks and Programiz to ensure the accuracy and relevance of my responses. Feel free to ask me anything, and I'll do my best to assist you!"
            },
            {
                "role": "user",
                "content": input("Enter the prompt\n")
            }
        ],
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=True,
        stop=None,
    )

    collected_content = ""

    for chunk in completion:
        print(chunk.choices[0].delta.content or "", end="")
        collected_content += chunk.choices[0].delta.content or ""

    timestamp = datetime.datetime.now().strftime("%d_%m_%Y_%H_%M_%S")
    output_file_name = f"assignment_{timestamp}.md"
    with open(output_file_name, 'w') as output_file:
        output_file.write(collected_content)
    
