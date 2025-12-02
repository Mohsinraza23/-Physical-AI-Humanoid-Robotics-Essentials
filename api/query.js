// Vercel Serverless Function for Chatbot
// This runs on Vercel - no external backend needed!

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  // Mock responses based on keywords
  const questionLower = question.toLowerCase();
  let answer = '';
  let sources = [];

  if (questionLower.includes('physical ai') || questionLower.includes('what is')) {
    answer = `Physical AI refers to artificial intelligence systems that interact directly with the physical world through robotic platforms. Unlike traditional AI that operates purely in software, Physical AI combines:

- **Perception**: Using sensors like cameras, LiDAR, and force sensors to understand the environment
- **Cognition**: AI models that process sensor data and make decisions in real-time
- **Action**: Actuators and motors that execute physical tasks

Physical AI is critical for humanoid robots, autonomous vehicles, and industrial automation systems.`;
    sources = [{
      chunk_id: 'ch1-intro-001',
      chapter_id: 1,
      section_id: '1.1',
      section_title: 'Introduction to Physical AI',
      preview_text: 'Physical AI represents a paradigm shift in artificial intelligence...',
      relevance_score: 0.95
    }];
  } else if (questionLower.includes('ros') || questionLower.includes('robot operating system')) {
    answer = `ROS 2 (Robot Operating System 2) is the industry-standard framework for robot software development. It provides:

- **Communication Infrastructure**: Nodes, topics, and services for inter-process communication
- **Hardware Abstraction**: Standardized interfaces for sensors and actuators
- **Tools and Libraries**: Visualization (RViz), simulation (Gazebo), and debugging tools
- **Distributed Computing**: Supports multi-robot and cloud-connected systems

ROS 2 improves upon ROS 1 with real-time capabilities, better security, and multi-platform support.`;
    sources = [{
      chunk_id: 'ch3-ros-001',
      chapter_id: 3,
      section_id: '3.1',
      section_title: 'ROS 2 Architecture',
      preview_text: 'ROS 2 is built on a distributed middleware called DDS...',
      relevance_score: 0.92
    }];
  } else if (questionLower.includes('humanoid') || questionLower.includes('robot')) {
    answer = `Humanoid robotics involves designing robots with human-like form and capabilities. Key components include:

- **Mechanical Design**: Joints, actuators, and structural elements that mimic human anatomy
- **Sensors**: Vision systems, tactile sensors, IMUs for balance and perception
- **Control Systems**: Real-time control loops for walking, manipulation, and interaction
- **AI Integration**: Vision-language-action models for understanding and responding to commands

Modern humanoid robots like Tesla Optimus and Boston Dynamics Atlas demonstrate advanced mobility and dexterity.`;
    sources = [{
      chunk_id: 'ch2-humanoid-001',
      chapter_id: 2,
      section_id: '2.1',
      section_title: 'Basics of Humanoid Robotics',
      preview_text: 'Humanoid robots are designed to replicate human form and function...',
      relevance_score: 0.89
    }];
  } else if (questionLower.includes('vla') || questionLower.includes('vision-language-action')) {
    answer = `Vision-Language-Action (VLA) systems are AI models that combine:

- **Vision**: Processing camera inputs to understand scenes and objects
- **Language**: Understanding natural language commands and providing explanations
- **Action**: Generating robot control commands to manipulate objects

VLA models like RT-2 from Google DeepMind enable robots to understand instructions like "pick up the red cup" and execute the corresponding actions.`;
    sources = [{
      chunk_id: 'ch5-vla-001',
      chapter_id: 5,
      section_id: '5.1',
      section_title: 'Vision-Language-Action Systems',
      preview_text: 'VLA systems represent the convergence of computer vision, NLP, and robotics...',
      relevance_score: 0.94
    }];
  } else {
    // Generic response
    answer = `I can help you understand concepts from the Physical AI and Humanoid Robotics textbook!

Your question: "${question}"

This textbook covers:
- Chapter 1: Introduction to Physical AI
- Chapter 2: Basics of Humanoid Robotics
- Chapter 3: ROS 2 Fundamentals
- Chapter 4: Digital Twin Simulation
- Chapter 5: Vision-Language-Action Systems
- Chapter 6: Capstone Project

Try asking about specific topics like "What is Physical AI?", "How does ROS 2 work?", or "Explain VLA systems".`;
    sources = [];
  }

  // Return response in expected format
  return res.status(200).json({
    answer,
    sources,
    query_time_ms: 45.2
  });
}
