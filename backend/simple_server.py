"""
Simple FastAPI server for testing the chatbot without database dependencies.
This provides mock responses so you can test the chatbot UI.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Physical AI Textbook API (Mock)")

# Enable CORS - allow all origins for deployment
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change to specific domain in production)
    allow_credentials=False,  # Set to False when using wildcard origins
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    question: str
    top_k: int = 5

class SourceCitation(BaseModel):
    chunk_id: str
    chapter_id: int
    section_id: str
    section_title: str
    preview_text: str
    relevance_score: float

class QueryResponse(BaseModel):
    answer: str
    sources: List[SourceCitation]
    query_time_ms: float

@app.get("/")
async def root():
    return {
        "name": "Physical AI Textbook API (Mock Mode)",
        "version": "1.0.0",
        "status": "running",
        "mode": "mock",
        "message": "This is a mock server for testing. Set up Qdrant and Neon for full functionality."
    }

@app.get("/health")
async def health():
    return {"status": "healthy", "mode": "mock"}

@app.post("/api/query", response_model=QueryResponse)
async def query(request: QueryRequest):
    """
    Mock query endpoint that returns sample responses.
    """
    # Mock responses based on keywords
    question_lower = request.question.lower()

    if "physical ai" in question_lower or "what is" in question_lower:
        answer = """Physical AI refers to artificial intelligence systems that interact directly with the physical world through robotic platforms. Unlike traditional AI that operates purely in software, Physical AI combines:

- **Perception**: Using sensors like cameras, LiDAR, and force sensors to understand the environment
- **Cognition**: AI models that process sensor data and make decisions in real-time
- **Action**: Actuators and motors that execute physical tasks

Physical AI is critical for humanoid robots, autonomous vehicles, and industrial automation systems."""
        sources = [
            SourceCitation(
                chunk_id="ch1-intro-001",
                chapter_id=1,
                section_id="1.1",
                section_title="Introduction to Physical AI",
                preview_text="Physical AI represents a paradigm shift in artificial intelligence...",
                relevance_score=0.95
            )
        ]

    elif "ros" in question_lower or "robot operating system" in question_lower:
        answer = """ROS 2 (Robot Operating System 2) is the industry-standard framework for robot software development. It provides:

- **Communication Infrastructure**: Nodes, topics, and services for inter-process communication
- **Hardware Abstraction**: Standardized interfaces for sensors and actuators
- **Tools and Libraries**: Visualization (RViz), simulation (Gazebo), and debugging tools
- **Distributed Computing**: Supports multi-robot and cloud-connected systems

ROS 2 improves upon ROS 1 with real-time capabilities, better security, and multi-platform support."""
        sources = [
            SourceCitation(
                chunk_id="ch3-ros-001",
                chapter_id=3,
                section_id="3.1",
                section_title="ROS 2 Architecture",
                preview_text="ROS 2 is built on a distributed middleware called DDS...",
                relevance_score=0.92
            )
        ]

    elif "humanoid" in question_lower or "robot" in question_lower:
        answer = """Humanoid robotics involves designing robots with human-like form and capabilities. Key components include:

- **Mechanical Design**: Joints, actuators, and structural elements that mimic human anatomy
- **Sensors**: Vision systems, tactile sensors, IMUs for balance and perception
- **Control Systems**: Real-time control loops for walking, manipulation, and interaction
- **AI Integration**: Vision-language-action models for understanding and responding to commands

Modern humanoid robots like Tesla Optimus and Boston Dynamics Atlas demonstrate advanced mobility and dexterity."""
        sources = [
            SourceCitation(
                chunk_id="ch2-humanoid-001",
                chapter_id=2,
                section_id="2.1",
                section_title="Basics of Humanoid Robotics",
                preview_text="Humanoid robots are designed to replicate human form and function...",
                relevance_score=0.89
            )
        ]

    elif "vla" in question_lower or "vision-language-action" in question_lower:
        answer = """Vision-Language-Action (VLA) systems are AI models that combine:

- **Vision**: Processing camera inputs to understand scenes and objects
- **Language**: Understanding natural language commands and providing explanations
- **Action**: Generating robot control commands to manipulate objects

VLA models like RT-2 from Google DeepMind enable robots to understand instructions like "pick up the red cup" and execute the corresponding actions. These systems bridge the gap between human intent and robot execution."""
        sources = [
            SourceCitation(
                chunk_id="ch5-vla-001",
                chapter_id=5,
                section_id="5.1",
                section_title="Vision-Language-Action Systems",
                preview_text="VLA systems represent the convergence of computer vision, NLP, and robotics...",
                relevance_score=0.94
            )
        ]

    else:
        # Generic response
        answer = f"""I can help you understand concepts from the Physical AI and Humanoid Robotics textbook!

Your question: "{request.question}"

This textbook covers:
- Chapter 1: Introduction to Physical AI
- Chapter 2: Basics of Humanoid Robotics
- Chapter 3: ROS 2 Fundamentals
- Chapter 4: Digital Twin Simulation
- Chapter 5: Vision-Language-Action Systems
- Chapter 6: Capstone Project

Try asking about specific topics like "What is Physical AI?", "How does ROS 2 work?", or "Explain VLA systems"."""
        sources = []

    return QueryResponse(
        answer=answer,
        sources=sources,
        query_time_ms=45.2
    )

if __name__ == "__main__":
    import uvicorn
    print("🚀 Starting Mock Physical AI Textbook API...")
    print("📚 This server provides sample responses for testing the chatbot UI")
    print("🔗 API running at: http://localhost:8000")
    print("📖 Docs available at: http://localhost:8000/docs")
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="info")
