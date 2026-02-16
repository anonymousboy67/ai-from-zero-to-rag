export interface Chapter {
  id: number
  title: string
  subtitle: string
  eli5: string
  analogy: string
  technical: string
  keyPoints: string[]
  codeExample?: {
    language: string
    code: string
    description: string
  }
  diagramType: 'flow' | 'mermaid' | 'both'
  icon: string
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: 'What is AI?',
    subtitle: 'Understanding Artificial Intelligence',
    eli5: 'AI is like having a super smart robot friend that can learn from examples and help you solve problems. Just like you learn from your teacher, AI learns from data!',
    analogy: 'Imagine teaching a puppy tricks. You show it what to do many times, and eventually it learns. AI works the same way - we show it lots of examples, and it learns patterns.',
    technical: 'Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (acquiring information and rules), reasoning (using rules to reach conclusions), and self-correction. Modern AI, particularly Machine Learning and Deep Learning, uses statistical techniques to enable computers to improve at tasks with experience.',
    keyPoints: [
      'AI learns from data and patterns',
      'Machine Learning is a subset of AI',
      'Deep Learning uses neural networks',
      'AI can make predictions and decisions',
      'Modern AI powers chatbots, recommendations, and more',
    ],
    codeExample: {
      language: 'python',
      code: `# Simple AI concept: Pattern Learning
import numpy as np

# Training data: hours studied vs exam score
hours = [1, 2, 3, 4, 5, 6]
scores = [50, 55, 65, 70, 80, 85]

# AI learns the pattern
# More hours → Higher score
def predict_score(study_hours):
    # Learned pattern: ~10 points per hour + base 40
    return 40 + (study_hours * 10)

print(predict_score(7))  # Predicts: 110`,
      description: 'This simple example shows how AI learns patterns from data',
    },
    diagramType: 'mermaid',
    icon: '🤖',
  },
  {
    id: 2,
    title: 'What is an LLM?',
    subtitle: 'Large Language Models Explained',
    eli5: 'An LLM is like a super smart parrot that has read every book in the world! It can talk about anything because it learned from reading so much text.',
    analogy: 'Think of an LLM as a giant library with a librarian who has memorized every book. When you ask a question, the librarian instantly knows which books have the answer and can summarize them for you.',
    technical: 'Large Language Models (LLMs) are neural networks trained on massive text datasets (hundreds of billions of words) to understand and generate human-like text. They use the Transformer architecture with attention mechanisms to process context. Examples include OpenAI GPT-4 (1.76 trillion parameters), Anthropic Claude (unknown parameters, but similar scale), and Google Gemini. These models predict the next word in a sequence based on all previous words, enabling coherent text generation.',
    keyPoints: [
      'Trained on billions of text documents',
      'GPT-4, Claude, Gemini are leading LLMs',
      'Use Transformer architecture with attention',
      'Can generate, summarize, translate, and answer questions',
      'Measured in billions of parameters (weights)',
    ],
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI

# Initialize LLM client
client = OpenAI(api_key="your-api-key")

# Send a prompt to the LLM
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful AI assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms"}
    ],
    temperature=0.7,
    max_tokens=200
)

print(response.choices[0].message.content)`,
      description: 'Basic LLM API call using OpenAI',
    },
    diagramType: 'flow',
    icon: '🧠',
  },
  {
    id: 3,
    title: 'Context Window & Tokens',
    subtitle: 'How LLMs Read and Remember',
    eli5: 'Imagine your brain can only remember the last 10 things someone told you. The context window is like that memory limit for AI. Tokens are like the individual words or pieces it remembers.',
    analogy: 'Think of tokens as LEGO blocks and the context window as your LEGO table. You can only fit a certain number of blocks on your table at once. If you want to add more blocks, you need to remove some old ones.',
    technical: 'The context window is the maximum amount of text (measured in tokens) that an LLM can process at once. A token is roughly 4 characters or 0.75 words. Modern context windows: GPT-4 Turbo (128K tokens ≈ 96K words), Claude 3 (200K tokens ≈ 150K words), Gemini 1.5 Pro (1M tokens ≈ 750K words). Everything you send (system prompt + conversation history + user input) and receive (response) counts toward this limit.',
    keyPoints: [
      '1 token ≈ 4 characters or 0.75 words',
      'GPT-4 Turbo: 128K tokens context',
      'Claude 3: 200K tokens context',
      'Gemini 1.5 Pro: 1M tokens context',
      'Both input AND output count against the limit',
      'Longer context = more expensive API calls',
    ],
    codeExample: {
      language: 'python',
      code: `import tiktoken

# Count tokens for GPT models
encoding = tiktoken.encoding_for_model("gpt-4")

text = "Hello, how are you doing today?"
tokens = encoding.encode(text)

print(f"Text: {text}")
print(f"Tokens: {tokens}")
print(f"Token count: {len(tokens)}")
# Output: Token count: 8

# Cost calculation
# GPT-4: $0.03 per 1K input tokens
cost = (len(tokens) / 1000) * 0.03
print(f"Cost: $\{cost:.6f\}")`,
      description: 'Counting tokens and calculating API costs',
    },
    diagramType: 'mermaid',
    icon: '🎫',
  },
  {
    id: 4,
    title: 'Embeddings',
    subtitle: 'Meaning as Numbers',
    eli5: 'Embeddings turn words into special numbers that capture their meaning. Words with similar meanings get similar numbers, like how "cat" and "kitten" are both about small furry animals.',
    analogy: 'Imagine every word has a secret address in a huge city. Words that mean similar things live in the same neighborhood. "Happy" and "joyful" live next door to each other, while "sad" lives far away.',
    technical: 'Embeddings are vector representations of text in high-dimensional space (typically 1536 dimensions for OpenAI, 768 for open-source models). Each dimension captures a semantic feature. Similar concepts cluster together in vector space, enabling mathematical operations on meaning. Created by specialized models like OpenAI text-embedding-3-small or sentence-transformers. Embeddings enable semantic search, clustering, and similarity comparisons.',
    keyPoints: [
      'Convert text to numerical vectors (arrays of numbers)',
      'OpenAI embeddings: 1536 dimensions',
      'Similar meanings → similar vectors',
      'Enable semantic search and comparison',
      'Foundation for RAG systems',
      'Measured by cosine similarity (0 to 1)',
    ],
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import numpy as np

client = OpenAI(api_key="your-api-key")

# Generate embeddings
def get_embedding(text):
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding

# Compare similarity
text1 = "I love pizza"
text2 = "Pizza is my favorite food"
text3 = "The weather is nice today"

emb1 = np.array(get_embedding(text1))
emb2 = np.array(get_embedding(text2))
emb3 = np.array(get_embedding(text3))

# Cosine similarity
def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

print(f"Pizza vs Pizza: {cosine_similarity(emb1, emb2):.3f}")  # High: ~0.85
print(f"Pizza vs Weather: {cosine_similarity(emb1, emb3):.3f}")  # Low: ~0.45`,
      description: 'Creating and comparing embeddings for semantic similarity',
    },
    diagramType: 'both',
    icon: '🔢',
  },
  {
    id: 5,
    title: 'Vector Databases',
    subtitle: 'Storing and Searching Meaning',
    eli5: 'A vector database is like a magical library where books are organized by what they mean, not by their titles. You can ask "books about friendship" and it finds all books about friends, even if they never use that word!',
    analogy: 'Traditional database: filing cabinet organized alphabetically. Vector database: a room where similar items magnetically attract and cluster together. Want to find something? Walk toward the "meaning neighborhood" you\'re looking for.',
    technical: 'Vector databases (Pinecone, Chroma, Weaviate, Qdrant) are specialized databases optimized for storing and querying high-dimensional vectors. They use approximate nearest neighbor (ANN) algorithms like HNSW (Hierarchical Navigable Small World) or IVF (Inverted File Index) for fast similarity search. Instead of exact matches (SQL: WHERE name = "John"), they find semantic similarity (cosine distance < 0.2). Essential for RAG systems, recommendation engines, and semantic search at scale.',
    keyPoints: [
      'Store embeddings (vectors) efficiently',
      'Fast similarity search using ANN algorithms',
      'Popular options: Pinecone, Chroma, Weaviate, Qdrant',
      'Query by semantic meaning, not keywords',
      'Return top-K most similar results',
      'Support metadata filtering',
    ],
    codeExample: {
      language: 'python',
      code: `import chromadb
from chromadb.config import Settings

# Initialize Chroma vector database
client = chromadb.Client(Settings(
    chroma_db_impl="duckdb+parquet",
    persist_directory="./chroma_db"
))

# Create a collection
collection = client.create_collection(
    name="my_documents",
    metadata={"description": "My knowledge base"}
)

# Add documents (automatically creates embeddings)
collection.add(
    documents=[
        "Python is a programming language",
        "JavaScript is used for web development",
        "Machine learning uses Python extensively"
    ],
    ids=["doc1", "doc2", "doc3"],
    metadatas=[
        {"category": "programming"},
        {"category": "web"},
        {"category": "AI"}
    ]
)

# Semantic search
results = collection.query(
    query_texts=["Tell me about AI programming"],
    n_results=2
)

print(results['documents'])
# Returns: ["Machine learning uses Python extensively",
#           "Python is a programming language"]`,
      description: 'Using ChromaDB for semantic search',
    },
    diagramType: 'flow',
    icon: '🗄️',
  },
  {
    id: 6,
    title: 'Semantic Search',
    subtitle: 'Understanding Intent, Not Just Keywords',
    eli5: 'Regular search is like looking for exact words. Semantic search understands what you mean! If you search "happy dog," it can also find "joyful puppy" because it knows they mean similar things.',
    analogy: 'Keyword search: Finding "apple" in a book by looking for those exact letters. Semantic search: Understanding you want information about fruit, and finding "apple," "fruit," "orchard," even if "apple" isn\'t mentioned.',
    technical: 'Semantic search uses embeddings to find results based on meaning rather than keyword matching. Process: 1) User query → embedding, 2) Compare query embedding to document embeddings, 3) Rank by cosine similarity, 4) Return top matches. Advantages over keyword search: handles synonyms, understands context, finds conceptually similar content, language-agnostic (with multilingual models). Used in RAG, enterprise search, recommendation systems.',
    keyPoints: [
      'Searches by meaning, not just keywords',
      'Handles synonyms and related concepts',
      'More accurate than keyword matching',
      'Powers modern search experiences',
      'Foundation of RAG retrieval step',
      'Works across languages with multilingual embeddings',
    ],
    codeExample: {
      language: 'python',
      code: `from sentence_transformers import SentenceTransformer
import numpy as np

# Load semantic search model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Document corpus
documents = [
    "The cat is sleeping on the couch",
    "A dog is playing in the garden",
    "The weather is sunny today",
    "Cats and dogs are popular pets"
]

# Create embeddings
doc_embeddings = model.encode(documents)

# User query
query = "Tell me about felines resting"
query_embedding = model.encode([query])[0]

# Calculate similarities
similarities = np.dot(doc_embeddings, query_embedding)

# Rank results
ranked_indices = np.argsort(similarities)[::-1]

print("Search results for:", query)
for idx in ranked_indices[:3]:
    print(f"  {similarities[idx]:.3f}: {documents[idx]}")

# Output shows "The cat is sleeping" ranks highest
# even though it doesn't contain "feline" or "resting"`,
      description: 'Semantic search finds meaning-based matches',
    },
    diagramType: 'mermaid',
    icon: '🔍',
  },
  {
    id: 7,
    title: 'RAG',
    subtitle: 'Retrieval Augmented Generation',
    eli5: 'RAG is like giving the AI a cheat sheet before it answers your question! First, it looks up relevant information in its notes, then it uses what it found to give you a better answer.',
    analogy: 'Imagine taking an open-book exam. Instead of relying only on memory, you can look up facts in your textbook (retrieval), then write your answer using both your knowledge and what you found (generation).',
    technical: 'RAG combines information retrieval with LLM generation to provide accurate, up-to-date responses grounded in specific data. Process: 1) User query → embedding, 2) Semantic search in vector DB retrieves relevant chunks, 3) Chunks + query inserted into LLM prompt, 4) LLM generates response using retrieved context. Benefits: reduces hallucination, adds domain knowledge, enables citing sources, avoids fine-tuning costs, keeps information current. Essential for chatbots, Q&A systems, documentation assistants.',
    keyPoints: [
      'Retrieval: Find relevant information',
      'Augmentation: Add info to LLM context',
      'Generation: LLM produces informed response',
      'Reduces hallucinations by grounding in facts',
      'Cheaper than fine-tuning custom models',
      'Enables source citations and fact-checking',
    ],
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import chromadb

# Setup
client_llm = OpenAI(api_key="your-key")
client_db = chromadb.Client()
collection = client_db.create_collection("docs")

# Add knowledge base
collection.add(
    documents=[
        "The company was founded in 2020",
        "We have offices in SF, NYC, and London",
        "Our main product is an AI assistant"
    ],
    ids=["doc1", "doc2", "doc3"]
)

def rag_query(question):
    # 1. RETRIEVE relevant docs
    results = collection.query(
        query_texts=[question],
        n_results=2
    )
    context = "\\n".join(results['documents'][0])

    # 2. AUGMENT prompt with context
    # 3. GENERATE response
    response = client_llm.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"Use this context: {context}"},
            {"role": "user", "content": question}
        ]
    )

    return response.choices[0].message.content

answer = rag_query("Where are your offices located?")
print(answer)
# "We have offices in San Francisco, New York City, and London."`,
      description: 'Complete RAG pipeline with retrieval and generation',
    },
    diagramType: 'flow',
    icon: '📚',
  },
  {
    id: 8,
    title: 'LangChain',
    subtitle: 'The Abstraction Layer for LLMs',
    eli5: 'LangChain is like a toolbox that makes building AI apps easier. Instead of writing lots of complicated code, you can use ready-made tools that connect different AI pieces together.',
    analogy: 'Building with LEGO vs carving wood. LangChain provides pre-made blocks (LEGO) that snap together easily, instead of having to craft each piece from scratch (carving wood).',
    technical: 'LangChain is a framework for developing LLM applications. It provides abstractions and composable components: Models (LLM wrappers), Prompts (template management), Chains (sequential operations), Agents (dynamic tool use), Memory (conversation state), Indexes (document loading and retrieval). Simplifies common patterns: RAG, chat bots, agents, summarization. Supports multiple LLM providers (OpenAI, Anthropic, HuggingFace) and vector stores. Reduces boilerplate code and standardizes LLM application architecture.',
    keyPoints: [
      'Framework for building LLM applications',
      'Provides reusable components and patterns',
      'Simplifies RAG, agents, chains',
      'Multi-provider support (OpenAI, Anthropic, etc.)',
      'Includes prompt templates and memory',
      'Active community and ecosystem',
    ],
    codeExample: {
      language: 'python',
      code: `from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import RunnablePassthrough
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings

# Setup components
llm = ChatOpenAI(model="gpt-4", temperature=0)
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_texts(
    ["Company founded in 2020", "Offices in SF and NYC"],
    embeddings
)

# Create RAG chain
retriever = vectorstore.as_retriever()
prompt = ChatPromptTemplate.from_template(
    "Context: {context}\\n\\nQuestion: {question}\\n\\nAnswer:"
)

# Chain components together
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

# Use the chain
answer = chain.invoke("When was the company founded?")
print(answer)  # "The company was founded in 2020."`,
      description: 'LangChain RAG implementation with minimal code',
    },
    diagramType: 'flow',
    icon: '🔗',
  },
  {
    id: 9,
    title: 'Agents vs LLM',
    subtitle: 'Static vs Dynamic Intelligence',
    eli5: 'An LLM is like answering a test question from memory. An agent is like being allowed to use a calculator, dictionary, and ask friends for help - it can use tools to give you better answers!',
    analogy: 'LLM: A knowledgeable person answering questions from memory. Agent: A detective who can look up files, make phone calls, search databases, and gather information before answering.',
    technical: 'LLMs generate text based on trained knowledge (static). Agents are LLMs that can dynamically use external tools and make decisions. Agent loop: 1) Receive task, 2) Reason about next action, 3) Use tool (search, calculator, API, database), 4) Observe result, 5) Repeat until done. Frameworks: LangChain Agents, AutoGPT, BabyAGI. Tools can include: web search, Python REPL, SQL databases, APIs, file systems. Enables autonomous task completion, real-time information access, and complex workflows.',
    keyPoints: [
      'LLM: Static knowledge, one-shot responses',
      'Agent: Dynamic tool use, multi-step reasoning',
      'Agents can search web, run code, call APIs',
      'ReAct pattern: Reasoning + Acting',
      'Can chain multiple actions to complete tasks',
      'Examples: AutoGPT, LangChain Agents',
    ],
    codeExample: {
      language: 'python',
      code: `from langchain.agents import initialize_agent, Tool
from langchain.agents import AgentType
from langchain.chat_models import ChatOpenAI
from langchain.tools import DuckDuckGoSearchRun
from langchain.utilities import PythonREPL

# Initialize LLM
llm = ChatOpenAI(model="gpt-4", temperature=0)

# Define tools the agent can use
search = DuckDuckGoSearchRun()
python_repl = PythonREPL()

tools = [
    Tool(
        name="Web Search",
        func=search.run,
        description="Search the web for current information"
    ),
    Tool(
        name="Python REPL",
        func=python_repl.run,
        description="Run Python code for calculations"
    )
]

# Create agent
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Agent can use multiple tools to complete task
result = agent.run(
    "What is the current stock price of Apple, "
    "and what is 15% of that price?"
)
print(result)

# Agent thinks:
# 1. Use Web Search to find Apple stock price
# 2. Use Python REPL to calculate 15%
# 3. Provide final answer`,
      description: 'Agent that can search web and run calculations',
    },
    diagramType: 'flow',
    icon: '🤖',
  },
  {
    id: 10,
    title: 'Prompt Engineering',
    subtitle: 'The Art of Talking to AI',
    eli5: 'Prompt engineering is learning how to ask AI questions in the best way. Like asking your friend clearly vs confusingly - the clearer you ask, the better answer you get!',
    analogy: 'Like giving directions to a taxi driver. Bad: "Go there." Good: "Drive to 123 Main Street, take the highway, arrive by 3pm." Clear instructions get better results.',
    technical: 'Prompt engineering is the practice of designing inputs to elicit desired outputs from LLMs. Techniques: Zero-shot (no examples), One-shot (1 example), Few-shot (multiple examples), Chain-of-Thought (step-by-step reasoning), Tree-of-Thoughts (exploring multiple reasoning paths), ReAct (reason and act), Role prompting (persona definition), System messages (behavior instructions). Variables: temperature (creativity), top_p (nucleus sampling), max_tokens (length), presence/frequency penalties (repetition control).',
    keyPoints: [
      'Zero-shot: Direct instruction, no examples',
      'Few-shot: Provide example inputs/outputs',
      'Chain-of-thought: "Let\'s think step by step"',
      'System prompts define AI personality/rules',
      'Temperature: 0 (focused) to 1 (creative)',
      'Clear, specific prompts yield better results',
    ],
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI

client = OpenAI(api_key="your-key")

# ❌ Zero-shot (no guidance)
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Analyze this sentiment: I love it!"}]
)

# ✅ Few-shot (with examples)
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "Classify sentiment as Positive, Negative, or Neutral."},
        {"role": "user", "content": "I love it!"},
        {"role": "assistant", "content": "Positive"},
        {"role": "user", "content": "This is terrible."},
        {"role": "assistant", "content": "Negative"},
        {"role": "user", "content": "It's okay."},
        {"role": "assistant", "content": "Neutral"},
        {"role": "user", "content": "Amazing product!"}
    ]
)
print(response.choices[0].message.content)  # "Positive"

# ✅ Chain-of-Thought
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{
        "role": "user",
        "content": "Solve step by step: If 5 apples cost $10, how much do 8 apples cost?"
    }]
)
# LLM reasons through steps before answering`,
      description: 'Prompt engineering techniques for better results',
    },
    diagramType: 'mermaid',
    icon: '💬',
  },
  {
    id: 11,
    title: 'LangGraph',
    subtitle: 'Workflows with Nodes and Edges',
    eli5: 'LangGraph is like creating a flowchart for AI. You draw boxes (nodes) for different tasks and arrows (edges) showing which task to do next. The AI follows your flowchart!',
    analogy: 'Like a choose-your-own-adventure book. Each page (node) is a decision point, and arrows (edges) lead to the next page based on what you choose. LangGraph creates these adventure paths for AI.',
    technical: 'LangGraph is a library for building stateful, multi-actor applications with LLMs using graph structures. Define nodes (functions/LLMs), edges (transitions), and conditional routing. Enables complex workflows: human-in-the-loop, multi-agent collaboration, branching logic, cycles, memory. Built on LangChain. Use cases: customer support (escalation paths), research assistants (iterative refinement), validation pipelines (verify → fix → verify). Compiles to executable graph, supports persistence, and enables visualization.',
    keyPoints: [
      'Define workflows as graphs (nodes + edges)',
      'Nodes: LLM calls, tools, human input',
      'Edges: Conditional routing between nodes',
      'Supports cycles and complex branching',
      'Built-in state management',
      'Enables multi-agent systems',
    ],
    codeExample: {
      language: 'python',
      code: `from langgraph.graph import Graph, END
from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(model="gpt-4")

# Define nodes (steps in workflow)
def research_node(state):
    """Research information"""
    result = llm.predict(f"Research: {state['query']}")
    return {"research": result}

def verify_node(state):
    """Verify accuracy"""
    result = llm.predict(f"Verify: {state['research']}")
    return {"verified": result}

def write_node(state):
    """Write final answer"""
    result = llm.predict(f"Write answer: {state['verified']}")
    return {"answer": result}

# Build graph
workflow = Graph()

# Add nodes
workflow.add_node("research", research_node)
workflow.add_node("verify", verify_node)
workflow.add_node("write", write_node)

# Add edges (flow)
workflow.add_edge("research", "verify")
workflow.add_edge("verify", "write")
workflow.add_edge("write", END)

# Set entry point
workflow.set_entry_point("research")

# Compile and run
app = workflow.compile()
result = app.invoke({"query": "What is quantum computing?"})

print(result["answer"])
# Follows: Research → Verify → Write → Answer`,
      description: 'LangGraph workflow with sequential nodes',
    },
    diagramType: 'flow',
    icon: '🕸️',
  },
  {
    id: 12,
    title: 'MCP',
    subtitle: 'Model Context Protocol',
    eli5: 'MCP is like giving AI a backpack full of tools it can use. Need to check the weather? There\'s a tool for that. Need to search files? There\'s a tool for that too! MCP organizes all these tools.',
    analogy: 'Like a universal remote control. Instead of having separate remotes for TV, sound system, and lights, MCP is one remote that can control everything - the AI just needs to press the right buttons.',
    technical: 'Model Context Protocol (MCP) is an open standard for connecting LLMs to external tools and data sources. Standardizes: tool schemas, authentication, data exchange formats. Components: MCP Servers (provide tools/resources), MCP Clients (LLMs that consume tools), Protocol (JSON-RPC communication). Benefits: reusable tools across applications, standardized security, vendor-neutral, hot-reload capabilities. Example servers: filesystem access, database queries, API integrations, web scraping. Supported by Anthropic Claude Desktop, IDEs, custom applications.',
    keyPoints: [
      'Standard protocol for LLM tool integration',
      'MCP Servers expose tools and resources',
      'Clients (LLMs) consume tools via protocol',
      'Vendor-neutral, works across AI providers',
      'JSON-RPC based communication',
      'Enables file access, APIs, databases, etc.',
    ],
    codeExample: {
      language: 'python',
      code: `# MCP Server Example
from mcp.server import Server, Tool
from mcp.types import TextContent

server = Server("my-tools")

@server.tool()
async def search_docs(query: str) -> str:
    """Search documentation"""
    # Your search logic here
    results = perform_search(query)
    return f"Found {len(results)} results for: {query}"

@server.tool()
async def calculate(expression: str) -> str:
    """Calculate mathematical expression"""
    result = eval(expression)  # Use safe eval in production!
    return f"{expression} = {result}"

# Start MCP server
if __name__ == "__main__":
    server.run()

# Client usage (in Claude Desktop or custom app)
# The LLM can now call these tools:
# - search_docs("API authentication")
# - calculate("123 * 456")

# MCP handles:
# - Tool discovery
# - Schema validation
# - Authentication
# - Result formatting`,
      description: 'MCP server exposing tools to LLMs',
    },
    diagramType: 'flow',
    icon: '🔌',
  },
  {
    id: 13,
    title: 'Full System Architecture',
    subtitle: 'Putting It All Together',
    eli5: 'Now we connect all the pieces! User asks question → AI thinks → Looks up information → Uses tools → Gives smart answer. Like a super helper that can think, remember, and use tools all at once!',
    analogy: 'Like a restaurant: Customer orders (User) → Waiter takes order (Interface) → Chef cooks (LLM) → Checks recipe book (Vector DB/RAG) → Uses special tools (MCP) → Serves perfect dish (Response).',
    technical: 'Complete production AI system architecture: 1) User Interface (web/mobile/CLI), 2) API Gateway (rate limiting, auth), 3) Orchestration Layer (LangChain/LangGraph), 4) LLM Provider (OpenAI/Anthropic/Gemini), 5) Vector Database (Pinecone/Chroma), 6) MCP Servers (tools/integrations), 7) Caching Layer (Redis), 8) Monitoring (logging, metrics, costs), 9) Security (API keys, input validation, PII detection). Data flow: Query → Embedding → Retrieval → Context Assembly → LLM Call → Tool Use (if needed) → Response → Logging.',
    keyPoints: [
      'User → Interface → Orchestration → LLM',
      'RAG: Query → Vector DB → Context → LLM',
      'Agents: LLM → Tool Selection → MCP → Result',
      'Add caching for speed and cost savings',
      'Monitor tokens, costs, latencies',
      'Implement security at every layer',
      'Scale horizontally with load balancers',
    ],
    codeExample: {
      language: 'python',
      code: `# Complete Production System
from fastapi import FastAPI, HTTPException
from langchain.chat_models import ChatOpenAI
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.agents import initialize_agent
import redis

app = FastAPI()
cache = redis.Redis()

# Initialize components
llm = ChatOpenAI(model="gpt-4")
embeddings = OpenAIEmbeddings()
vectorstore = Chroma(embedding_function=embeddings)
agent = initialize_agent(tools=mcp_tools, llm=llm)

@app.post("/query")
async def query(question: str, user_id: str):
    # 1. Check cache
    cached = cache.get(f"query:{question}")
    if cached:
        return {"answer": cached, "cached": True}

    # 2. RAG: Retrieve relevant docs
    docs = vectorstore.similarity_search(question, k=3)
    context = "\\n".join([doc.page_content for doc in docs])

    # 3. Agent: Use tools if needed
    response = agent.run(f"Context: {context}\\n\\nQuestion: {question}")

    # 4. Cache result
    cache.setex(f"query:{question}", 3600, response)

    # 5. Log for monitoring
    log_query(user_id, question, response, tokens_used)

    return {
        "answer": response,
        "sources": [doc.metadata for doc in docs],
        "cached": False
    }

# Run: uvicorn main:app --reload`,
      description: 'Production-ready AI system with all components',
    },
    diagramType: 'flow',
    icon: '🏗️',
  },
]
