/**
 * AI MULTIVERSE — Full-Stack Node.js / Express Server
 * Serves the static website and provides mock REST API endpoints.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Mock Data
const clonesData = [
  {
    id: 'clone-01',
    name: 'Clone 01: Without AI',
    subtitle: 'The Traditional Path',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'SQL', 'Git'],
    description: 'You continue developing with traditional tools and workflows while using little or no AI assistance.'
  },
  {
    id: 'clone-02',
    name: 'Clone 02: With AI',
    subtitle: 'The AI-Assisted Path',
    skills: ['Modern Programming', 'AI-Assisted Coding', 'APIs', 'Prompting', 'Automation', 'AI Tools'],
    description: 'You use AI as a development partner to improve productivity, debugging, research and implementation.'
  },
  {
    id: 'clone-03',
    name: 'Clone 03: Building AI',
    subtitle: 'The AI Builder Path',
    skills: ['Python', 'LLMs', 'AI APIs', 'RAG', 'AI Agents', 'Cloud GPU Clusters'],
    description: 'You learn how AI systems work and build applications powered by AI.'
  }
];

// --- REST API Endpoints ---

// Get all clones
app.get('/api/clones', (req, res) => {
  res.json({ success: true, data: clonesData });
});

// Calculate user decision and return 2030 profile
app.post('/api/decision', (req, res) => {
  const { q1, q2, q3 } = req.body;
  if (!q1 || !q2 || !q3) {
    return res.status(400).json({ success: false, message: 'All 3 questions are required.' });
  }

  const score = parseInt(q1) + parseInt(q2) + parseInt(q3);
  let profile = {};

  if (score <= 4) {
    profile = {
      type: 'TRADITIONAL DEVELOPER',
      universe: 'Universe 01',
      universeCode: 'universe-01',
      description: 'You explored the Traditional Developer universe. You master core algorithms and deterministic codebases.',
      focus: 'Deterministic Systems, Resilient Architecture & Fundamental Mastery'
    };
  } else if (score <= 7) {
    profile = {
      type: 'AI-ASSISTED DEVELOPER',
      universe: 'Universe 02',
      universeCode: 'universe-02',
      description: 'You explored the AI-Assisted Developer universe. You leverage AI to ship products at 5x velocity.',
      focus: 'High-Velocity Shipping, Automated Pipelines & AI Tool Synthesis'
    };
  } else {
    profile = {
      type: 'AI SYSTEMS BUILDER',
      universe: 'Universe 03',
      universeCode: 'universe-03',
      description: 'You explored the AI Builder universe. You engineer models, RAG vectors, and autonomous agent swarms.',
      focus: 'Autonomous Agents, Custom Models & Frontier AI Architecture'
    };
  }

  res.json({ success: true, score, profile });
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🌌 AI MULTIVERSE Full-Stack Server Running!`);
  console.log(`🚀 Access at: http://localhost:${PORT}`);
  console.log(`===============================================`);
});
