/**
 * AI MULTIVERSE — CLONE YOURSELF
 * Core Interactive JavaScript Engine
 */

// Global State
const MultiverseState = {
  activeUniverse: 'universe-02',
  selectedTimelineClone: 'all',
  soundEnabled: localStorage.getItem('ai_multiverse_sound') === 'true',
  userProfile: JSON.parse(localStorage.getItem('ai_multiverse_profile') || 'null'),
  quizAnswers: { q1: null, q2: null, q3: null }
};

// --- Web Audio API Sci-Fi Sound Synthesizer ---
class SoundFxEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.05) {
    if (!MultiverseState.soundEnabled) return;
    try {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Ignore audio context autoplay restrictions
    }
  }

  blip() {
    this.playTone(800, 'sine', 0.08, 0.04);
  }

  confirm() {
    if (!MultiverseState.soundEnabled) return;
    this.playTone(440, 'triangle', 0.1, 0.05);
    setTimeout(() => this.playTone(880, 'sine', 0.18, 0.06), 90);
  }

  warp() {
    if (!MultiverseState.soundEnabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {}
  }
}

const sfx = new SoundFxEngine();

// --- Sound Toggle Button Setup ---
function setupSoundToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  if (!soundBtn) return;

  const updateIcon = () => {
    if (MultiverseState.soundEnabled) {
      soundBtn.classList.add('text-cyan-400');
      soundBtn.classList.remove('text-slate-400');
      soundIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"/>
      `;
    } else {
      soundBtn.classList.remove('text-cyan-400');
      soundBtn.classList.add('text-slate-400');
      soundIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      `;
    }
  };

  updateIcon();

  soundBtn.addEventListener('click', () => {
    MultiverseState.soundEnabled = !MultiverseState.soundEnabled;
    localStorage.setItem('ai_multiverse_sound', MultiverseState.soundEnabled);
    updateIcon();
    if (MultiverseState.soundEnabled) {
      sfx.confirm();
    }
  });
}

// --- Mobile Navigation Toggle ---
function setupMobileNav() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    sfx.blip();
  });
}

// --- Dynamic Particle Starfield Engine ---
function initStarfield(canvasId = 'starfieldCanvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, stars = [];
  const starCount = window.innerWidth < 768 ? 60 : 130;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Star {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.7 + 0.3;
      const colors = ['#06b6d4', '#a855f7', '#3b82f6', '#ffffff'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(star => {
      star.update();
      star.draw();
    });

    // Draw connecting faint universe lines
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.08)';
    ctx.lineWidth = 0.7;
    for (let i = 0; i < stars.length; i += 4) {
      for (let j = i + 1; j < stars.length; j += 7) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// --- Cinematic Entrance Branching Canvas (index.html) ---
function initBranchingPortal() {
  const canvas = document.getElementById('branchingCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 360;
  }
  window.addEventListener('resize', resize);
  resize();

  let offset = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const startX = canvas.width / 2;
    const startY = 40;
    const endY = canvas.height - 40;
    const leftX = canvas.width * 0.18;
    const midX = canvas.width * 0.5;
    const rightX = canvas.width * 0.82;

    offset += 0.03;

    // Center Origin Node
    ctx.beginPath();
    ctx.arc(startX, startY, 9, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#0284c7';
    ctx.fill();

    // 3 Paths configs
    const paths = [
      { endX: leftX, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)', label: 'UNIVERSE 01: WITHOUT AI' },
      { endX: midX, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)', label: 'UNIVERSE 02: WITH AI' },
      { endX: rightX, color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)', label: 'UNIVERSE 03: BUILDING AI' }
    ];

    paths.forEach((p, idx) => {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      // Bezier curve to destination
      ctx.bezierCurveTo(
        startX, startY + 120,
        p.endX, startY + 80,
        p.endX, endY
      );
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;
      ctx.stroke();

      // Flowing particle pulses along the line
      const pulseT = ((offset + idx * 0.33) % 1);
      const cp1x = startX, cp1y = startY + 120;
      const cp2x = p.endX, cp2y = startY + 80;
      const t = pulseT;
      const px = Math.pow(1 - t, 3) * startX + 3 * Math.pow(1 - t, 2) * t * cp1x + 3 * (1 - t) * Math.pow(t, 2) * cp2x + Math.pow(t, 3) * p.endX;
      const py = Math.pow(1 - t, 3) * startY + 3 * Math.pow(1 - t, 2) * t * cp1y + 3 * (1 - t) * Math.pow(t, 2) * cp2y + Math.pow(t, 3) * endY;

      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 16;
      ctx.shadowColor = p.color;
      ctx.fill();

      // Destination 2030 Node
      ctx.beginPath();
      ctx.arc(p.endX, endY, 8, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// --- Universe Experience Switcher (multiverse.html) ---
const UniverseData = {
  'universe-01': {
    code: '01',
    title: 'YOU IN UNIVERSE 01',
    subtitle: 'THE TRADITIONAL DEVELOPER',
    theme: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    description: 'You continue developing with conventional tools, relying on manual mastery of algorithms, syntax, and architecture without automated generative AI assistance.',
    timeline: [
      { year: '2026', title: 'Foundations & Principles', text: 'Mastering core algorithms, data structures, HTML5, CSS3, ES6+, and foundational software architecture patterns from scratch.' },
      { year: '2027', title: 'Conventional Workflows', text: 'Constructing robust full-stack applications with standard IDEs, manual unit tests, and rigorous git revision cycles.' },
      { year: '2028', title: 'System Hardening', text: 'Architecting distributed databases, microservices, and deep memory optimization via traditional engineering frameworks.' },
      { year: '2029', title: 'Core Engineering Leadership', text: 'Developing specialized expertise in complex software infrastructure, resilient legacy integration, and deep deterministic codebases.' },
      { year: '2030', title: 'The Master Craftsman', text: 'A distinguished software engineer possessing profound algorithmic comprehension and pristine manual debugging capability.' }
    ],
    profile: {
      skills: ['Programming (95%)', 'Web Development (92%)', 'Databases & SQL (90%)', 'Software Architecture (88%)', 'Manual Debugging (96%)'],
      challenges: 'Keeping pace with the accelerating velocity of automated generative developer tooling.',
      fictionalTag: 'FICTIONAL FUTURE SCENARIO'
    }
  },
  'universe-02': {
    code: '02',
    title: 'YOU IN UNIVERSE 02',
    subtitle: 'THE AI-ASSISTED DEVELOPER',
    theme: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    description: 'You adopt AI as an indispensable development companion, boosting implementation speed, rapid prototyping, code refactoring, and automated testing.',
    timeline: [
      { year: '2026', title: 'Symbiotic Workflow Integration', text: 'Learning modern full-stack web fundamentals while utilizing AI code completion and interactive pair-programming.' },
      { year: '2027', title: 'Multi-Task Acceleration', text: 'Deploying AI for instant boilerplate generation, documentation synthesis, edge-case unit test writing, and bug hunting.' },
      { year: '2028', title: 'Hyper-Productive Prototyping', text: 'Shipping end-to-end full-stack SaaS apps 5x faster through AI-assisted scaffolding, API wiring, and instant refactoring.' },
      { year: '2029', title: 'Orchestrated Automation', text: 'Designing multi-modal developer pipelines, automated code reviews, self-healing test suites, and automated CI/CD workflows.' },
      { year: '2030', title: 'System Architect & Conductor', text: 'A 10x architect who directs automated code engines, synthesizes complex business requirements, and delivers at unprecedented scale.' }
    ],
    profile: {
      skills: ['AI-Assisted Coding (98%)', 'Full-Stack Web Dev (94%)', 'Prompt Engineering (92%)', 'CI/CD Automation (89%)', 'System Thinking (91%)'],
      challenges: 'Balancing reliance on automated suggestions with continuous deep understanding of fundamental execution layers.',
      fictionalTag: 'FICTIONAL FUTURE SCENARIO'
    }
  },
  'universe-03': {
    code: '03',
    title: 'YOU IN UNIVERSE 03',
    subtitle: 'THE AI BUILDER',
    theme: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    description: 'You move beyond consuming AI tools into building intelligent systems, training custom models, RAG vector architectures, and autonomous multi-agent swarms.',
    timeline: [
      { year: '2026', title: 'Machine Learning & Python Ramp-up', text: 'Mastering Python, tensor algebra, neural network primitives, API integrations, and prompt tokenization architectures.' },
      { year: '2027', title: 'RAG & Vector Pipelines', text: 'Building real-time retrieval-augmented generation systems, embedding spaces, Pinecone/Chroma vector search, and custom fine-tuning.' },
      { year: '2028', title: 'AI-Native Product Creation', text: 'Launching AI-first web applications with adaptive interfaces, intelligent voice/vision interfaces, and personalized generative pipelines.' },
      { year: '2029', title: 'Autonomous Multi-Agent Networks', text: 'Engineering collaborative autonomous AI agent ecosystems that plan, write code, run tests, and execute complex workflows.' },
      { year: '2030', title: 'Frontier AI Systems Architect', text: 'A leading builder shaping the frontier of intelligent agents, model orchestration, synthetic intelligence, and autonomous software platforms.' }
    ],
    profile: {
      skills: ['Python & PyTorch (96%)', 'LLM & Model Tuning (94%)', 'RAG & Vector DBs (95%)', 'Autonomous Agents (93%)', 'Cloud & GPU Clusters (90%)'],
      challenges: 'Managing rapid model obsolescence, GPU infrastructure scaling, and non-deterministic agent safety guardrails.',
      fictionalTag: 'FICTIONAL FUTURE SCENARIO'
    }
  }
};

function setupUniverseExplorer() {
  const container = document.getElementById('universeDetailView');
  if (!container) return;

  // Check URL query param e.g. ?universe=universe-03
  const urlParams = new URLSearchParams(window.location.search);
  const requestedUniverse = urlParams.get('universe');
  if (requestedUniverse && UniverseData[requestedUniverse]) {
    MultiverseState.activeUniverse = requestedUniverse;
  }

  function renderUniverse(uniKey) {
    const data = UniverseData[uniKey];
    if (!data) return;

    // Highlight active card
    document.querySelectorAll('.universe-selector-card').forEach(card => {
      if (card.dataset.universe === uniKey) {
        card.classList.add('ring-2', 'ring-purple-400', 'scale-[1.02]');
        card.classList.remove('opacity-75');
      } else {
        card.classList.remove('ring-2', 'ring-purple-400', 'scale-[1.02]');
        card.classList.add('opacity-75');
      }
    });

    let timelineHtml = data.timeline.map((item, idx) => `
      <div class="relative pl-8 pb-8 border-l border-slate-700 last:border-0 last:pb-0">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-[0_0_10px_#06b6d4]"></div>
        <div class="inline-block px-2.5 py-0.5 mb-1.5 rounded-full text-xs font-orbitron font-bold ${data.theme}">
          ${item.year}
        </div>
        <h4 class="text-lg font-bold text-white mb-1 font-space">${item.title}</h4>
        <p class="text-slate-300 text-sm leading-relaxed">${item.text}</p>
      </div>
    `).join('');

    let skillsHtml = data.profile.skills.map(skill => `
      <div class="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800">
        <span class="text-sm text-slate-200">${skill.split('(')[0]}</span>
        <span class="text-xs font-orbitron font-bold text-cyan-400">${skill.split('(')[1]?.replace(')', '') || ''}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-3 py-0.5 rounded text-xs font-orbitron font-bold ${data.theme}">
                UNIVERSE ${data.code}
              </span>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                ${data.profile.fictionalTag}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-orbitron font-bold text-white tracking-wide">${data.title}</h2>
            <p class="text-sm font-space text-cyan-300">${data.subtitle}</p>
          </div>
          <a href="timeline.html?clone=clone-0${parseInt(data.code)}" class="btn-futuristic px-5 py-2.5 rounded-xl text-sm font-orbitron font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg flex items-center gap-2">
            <span>Explore Timeline</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <p class="text-slate-300 text-base leading-relaxed mb-8 max-w-3xl">${data.description}</p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Timeline Progression -->
          <div class="lg:col-span-2">
            <h3 class="text-lg font-orbitron font-bold text-white mb-6 flex items-center gap-2">
              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Multiverse Trajectory: 2026 → 2030
            </h3>
            <div class="pl-2">
              ${timelineHtml}
            </div>
          </div>

          <!-- 2030 Profile Summary -->
          <div class="glass-panel p-6 rounded-xl border border-slate-700/60 flex flex-col justify-between">
            <div>
              <h3 class="text-base font-orbitron font-bold text-purple-300 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                Hypothetical 2030 Profile
              </h3>
              <div class="space-y-2.5 mb-6">
                ${skillsHtml}
              </div>
            </div>

            <div class="pt-4 border-t border-slate-800">
              <span class="text-xs font-semibold text-rose-400 uppercase tracking-wider block mb-1">Key Reality Challenge</span>
              <p class="text-xs text-slate-400 leading-relaxed">${data.profile.challenges}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Initial render
  renderUniverse(MultiverseState.activeUniverse);

  // Click listeners for Universe selector buttons
  document.querySelectorAll('.universe-selector-card').forEach(card => {
    card.addEventListener('click', () => {
      const uniKey = card.dataset.universe;
      if (uniKey) {
        MultiverseState.activeUniverse = uniKey;
        sfx.warp();
        renderUniverse(uniKey);
      }
    });
  });
}

// --- Dynamic Timeline Scrubber (timeline.html) ---
const TimelineData = {
  years: ['2026', '2027', '2028', '2029', '2030'],
  clones: {
    'clone-01': {
      name: 'Clone 01: Without AI',
      color: 'from-blue-500 to-indigo-600',
      badge: 'Traditional Path',
      milestones: [
        { stage: 'Learn', title: 'Language Fundamentals', desc: 'Writing pure JavaScript, mastering CSS layout engines, exploring algorithms in Python.' },
        { stage: 'Experiment', title: 'Full-Stack Construction', desc: 'Creating multi-tier web platforms with SQL schemas and standard REST APIs.' },
        { stage: 'Build', title: 'System Hardening', desc: 'Scaling multi-user architectures and standardizing microservices without AI assistance.' },
        { stage: 'Scale', title: 'Performance Optimization', desc: 'Fine-tuning memory footprints, database query analyzers, and network latency.' },
        { stage: 'Mastery', title: 'Software Craftsman', desc: 'Elite manual problem-solving and foundational software engineering mastery.' }
      ]
    },
    'clone-02': {
      name: 'Clone 02: With AI',
      color: 'from-purple-500 to-pink-600',
      badge: 'AI-Assisted Path',
      milestones: [
        { stage: 'Pair', title: 'AI Copilot Integration', desc: 'Adopting AI code completion, automated inline documentation, and terminal assistants.' },
        { stage: 'Accelerate', title: 'Autonomous Debugging', desc: 'Using AI to synthesize end-to-end test suites, triage bugs, and translate specs to code.' },
        { stage: 'Compound', title: 'Rapid Prototyping', desc: 'Shipping full applications in days, deploying instant mock data, and integrating APIs.' },
        { stage: 'Orchestrate', title: 'Developer Workflows', desc: 'Constructing automated code review bots and smart pipeline automation.' },
        { stage: 'Synergy', title: '10x Systems Architect', desc: 'Multiplying individual output by directing generative pipelines and engineering systems.' }
      ]
    },
    'clone-03': {
      name: 'Clone 03: Building AI',
      color: 'from-cyan-500 to-emerald-600',
      badge: 'AI Builder Path',
      milestones: [
        { stage: 'Foundations', title: 'Neural Systems & Math', desc: 'Studying transformer models, embedding matrices, vector spaces, and Python ML frameworks.' },
        { stage: 'Pipelines', title: 'RAG Architectures', desc: 'Building vector search systems, contextual retrieval, and fine-tuning open-source LLMs.' },
        { stage: 'Products', title: 'Intelligent Applications', desc: 'Launching applications that reason, self-correct, and autonomously process structured data.' },
        { stage: 'Swarms', title: 'Autonomous Agent Networks', desc: 'Creating multi-agent systems where AI instances collaborate on complex tasks.' },
        { stage: 'Pioneering', title: 'Frontier AI Architect', desc: 'Engineering next-generation AI platforms, custom models, and autonomous software systems.' }
      ]
    }
  }
};

function setupTimelinePage() {
  const container = document.getElementById('timelineCardsGrid');
  if (!container) return;

  const buttons = document.querySelectorAll('.timeline-clone-filter');
  const urlParams = new URLSearchParams(window.location.search);
  const requestedClone = urlParams.get('clone');
  let currentSelection = requestedClone || 'all';

  function renderTimeline(selected) {
    buttons.forEach(b => {
      if (b.dataset.filter === selected) {
        b.classList.add('bg-purple-600', 'text-white', 'shadow-[0_0_15px_rgba(168,85,247,0.5)]');
        b.classList.remove('bg-slate-800', 'text-slate-300');
      } else {
        b.classList.remove('bg-purple-600', 'text-white', 'shadow-[0_0_15px_rgba(168,85,247,0.5)]');
        b.classList.add('bg-slate-800', 'text-slate-300');
      }
    });

    const activeKeys = selected === 'all' ? ['clone-01', 'clone-02', 'clone-03'] : [selected];

    let html = '';
    TimelineData.years.forEach((year, yIdx) => {
      html += `
        <div class="mb-12 relative">
          <!-- Year Marker -->
          <div class="flex items-center gap-4 mb-6">
            <span class="w-12 h-12 rounded-xl flex items-center justify-center font-orbitron font-black text-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              ${year}
            </span>
            <div class="h-0.5 flex-1 bg-gradient-to-r from-cyan-500/40 via-purple-500/30 to-transparent"></div>
          </div>

          <!-- Cards for the year -->
          <div class="grid grid-cols-1 ${activeKeys.length > 1 ? 'md:grid-cols-3' : 'md:grid-cols-1 max-w-xl'} gap-6">
      `;

      activeKeys.forEach(k => {
        const cData = TimelineData.clones[k];
        const m = cData.milestones[yIdx];
        html += `
          <div class="glass-panel p-5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-[1.01]">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-orbitron font-bold px-2.5 py-0.5 rounded bg-gradient-to-r ${cData.color} text-white">
                ${cData.name.split(':')[0]}
              </span>
              <span class="text-xs font-space text-slate-400 uppercase tracking-wide">
                Stage: ${m.stage}
              </span>
            </div>
            <h4 class="text-base font-bold text-white mb-2 font-space">${m.title}</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${m.desc}</p>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  renderTimeline(currentSelection);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentSelection = btn.dataset.filter;
      sfx.confirm();
      renderTimeline(currentSelection);
    });
  });
}

// --- Comparison Table Filtering (compare.html) ---
function setupComparisonTable() {
  const searchInput = document.getElementById('compareSearch');
  const toggleBtn = document.getElementById('toggleAllRows');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll('.compare-row').forEach(row => {
      const text = row.innerText.toLowerCase();
      if (text.includes(val)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });

  if (toggleBtn) {
    let collapsed = false;
    toggleBtn.addEventListener('click', () => {
      collapsed = !collapsed;
      document.querySelectorAll('.compare-details').forEach(el => {
        el.classList.toggle('hidden', collapsed);
      });
      toggleBtn.innerText = collapsed ? 'Expand Details' : 'Compact View';
      sfx.blip();
    });
  }
}

// --- Interactive Decision Engine & Profile Generation (future.html) ---
function setupDecisionQuiz() {
  const quizForm = document.getElementById('decisionQuiz');
  const profileContainer = document.getElementById('profileResultContainer');
  if (!quizForm || !profileContainer) return;

  const quizOptions = document.querySelectorAll('.quiz-option');

  quizOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const q = opt.dataset.question;
      const val = parseInt(opt.dataset.value);

      // Deselect sibling options
      document.querySelectorAll(`.quiz-option[data-question="${q}"]`).forEach(sibling => {
        sibling.classList.remove('bg-purple-600', 'border-purple-400', 'text-white', 'shadow-[0_0_15px_rgba(168,85,247,0.5)]');
        sibling.classList.add('bg-slate-900/60', 'border-slate-700', 'text-slate-300');
      });

      // Select clicked option
      opt.classList.remove('bg-slate-900/60', 'border-slate-700', 'text-slate-300');
      opt.classList.add('bg-purple-600', 'border-purple-400', 'text-white', 'shadow-[0_0_15px_rgba(168,85,247,0.5)]');

      MultiverseState.quizAnswers[q] = val;
      sfx.confirm();
      checkQuizCompletion();
    });
  });

  function checkQuizCompletion() {
    const { q1, q2, q3 } = MultiverseState.quizAnswers;
    const submitBtn = document.getElementById('calculateResultBtn');
    if (q1 !== null && q2 !== null && q3 !== null) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-40', 'cursor-not-allowed');
      submitBtn.classList.add('hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]');
    }
  }

  const submitBtn = document.getElementById('calculateResultBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const { q1, q2, q3 } = MultiverseState.quizAnswers;
      if (q1 === null || q2 === null || q3 === null) return;

      sfx.warp();
      const totalScore = q1 + q2 + q3;

      let resultProfile = {};
      if (totalScore <= 4) {
        resultProfile = {
          type: 'TRADITIONAL DEVELOPER',
          universe: 'Universe 01',
          universeCode: 'universe-01',
          color: 'text-blue-400',
          gradient: 'from-blue-600 to-indigo-700',
          description: 'You explored the Traditional Developer universe. You believe in rock-solid foundational principles, pristine algorithmic design, and full ownership of your code execution layer.',
          skills: [
            { name: 'Core Programming', pct: 95 },
            { name: 'Data Structures & Algorithms', pct: 92 },
            { name: 'Database Optimization', pct: 88 },
            { name: 'Manual Debugging & Architecture', pct: 94 }
          ],
          focus: 'Deterministic Systems, Resilient Architecture & Fundamental Mastery',
          tools: 'VS Code, Git, Docker, Postgres, Node/Go/Rust'
        };
      } else if (totalScore <= 7) {
        resultProfile = {
          type: 'AI-ASSISTED DEVELOPER',
          universe: 'Universe 02',
          universeCode: 'universe-02',
          color: 'text-purple-400',
          gradient: 'from-purple-600 to-pink-600',
          description: 'You explored the AI-Assisted Developer universe. You leverage AI as your ultimate pair-programmer, accelerating your workflow, rapid prototyping, and automated software delivery.',
          skills: [
            { name: 'AI-Assisted Workflow', pct: 98 },
            { name: 'Prompt & Context Engineering', pct: 92 },
            { name: 'Full-Stack Speed Deployment', pct: 95 },
            { name: 'System Thinking & Integration', pct: 89 }
          ],
          focus: 'High-Velocity Shipping, Automated Pipelines & AI Tool Synthesis',
          tools: 'AI IDEs, Cursor/Copilot, LangChain, Tailwind CSS, Next.js, Vercel'
        };
      } else {
        resultProfile = {
          type: 'AI SYSTEMS BUILDER',
          universe: 'Universe 03',
          universeCode: 'universe-03',
          color: 'text-cyan-400',
          gradient: 'from-cyan-500 to-emerald-600',
          description: 'You explored the AI Builder universe. You are driven to create the frontier: intelligent multi-agent networks, specialized fine-tuned models, and next-generation cognitive systems.',
          skills: [
            { name: 'Python & LLM Orchestration', pct: 96 },
            { name: 'RAG & Vector Embeddings', pct: 94 },
            { name: 'Autonomous Agent Networks', pct: 93 },
            { name: 'Distributed Cloud Architecture', pct: 90 }
          ],
          focus: 'Autonomous Agents, Custom Models & Frontier AI Architecture',
          tools: 'PyTorch, HuggingFace, Pinecone, LangGraph, OpenAI/Anthropic APIs, Cloud GPU Clusters'
        };
      }

      // Save to localStorage
      MultiverseState.userProfile = resultProfile;
      localStorage.setItem('ai_multiverse_profile', JSON.stringify(resultProfile));

      renderProfile(resultProfile);
    });
  }

  function renderProfile(profile) {
    profileContainer.classList.remove('hidden');
    profileContainer.scrollIntoView({ behavior: 'smooth' });

    const skillsHtml = profile.skills.map(s => `
      <div class="space-y-1.5">
        <div class="flex justify-between text-xs">
          <span class="text-slate-300 font-medium">${s.name}</span>
          <span class="font-orbitron font-bold ${profile.color}">${s.pct}%</span>
        </div>
        <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
          <div class="h-full bg-gradient-to-r ${profile.gradient} transition-all duration-1000" style="width: ${s.pct}%"></div>
        </div>
      </div>
    `).join('');

    profileContainer.innerHTML = `
      <div class="hologram-card p-6 sm:p-10 border border-purple-500/40 relative overflow-hidden">
        <!-- Hologram Badge Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-700/60 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-3 py-0.5 rounded text-xs font-orbitron font-bold bg-slate-900 border border-slate-700 text-slate-300">
                IDENT: ${Math.floor(100000 + Math.random() * 900000)}
              </span>
              <span class="px-2.5 py-0.5 rounded text-xs font-orbitron font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                PROJECTION: 2030
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-orbitron font-black text-white tracking-wider">${profile.type}</h3>
          </div>
          <a href="multiverse.html?universe=${profile.universeCode}" class="btn-futuristic px-4 py-2 rounded-lg text-xs font-orbitron font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 flex items-center gap-2">
            <span>View Universe Details</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">${profile.description}</p>
        </div>

        <!-- Skills Progress Bars -->
        <div class="mb-8">
          <h4 class="text-sm font-orbitron font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            2030 Skill Index
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${skillsHtml}
          </div>
        </div>

        <!-- Focus and Tools -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <span class="text-xs font-orbitron text-purple-400 uppercase tracking-wide block mb-1">Core Focus</span>
            <p class="text-sm text-slate-200">${profile.focus}</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <span class="text-xs font-orbitron text-cyan-400 uppercase tracking-wide block mb-1">Primary Tools</span>
            <p class="text-sm text-slate-200">${profile.tools}</p>
          </div>
        </div>

        <!-- Notice -->
        <div class="text-center pt-4 border-t border-slate-800/80">
          <p class="text-xs font-space text-amber-400/90 italic">
            “This profile is a fictional scenario generated from your choices.”
          </p>
        </div>
      </div>
    `;
  }

  // Load existing profile if already saved
  if (MultiverseState.userProfile) {
    renderProfile(MultiverseState.userProfile);
  }
}

// --- Multiverse Lab Connected Lines Canvas (future.html) ---
function initMultiverseLabCanvas() {
  const canvas = document.getElementById('labMultiverseCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 360;
  }
  window.addEventListener('resize', resize);
  resize();

  let t = 0;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    t += 0.02;

    const nodes = [
      { angle: 0 + t * 0.4, dist: 120, label: 'WITHOUT AI', icon: '🧑', color: '#38bdf8' },
      { angle: (2 * Math.PI / 3) + t * 0.4, dist: 120, label: 'WITH AI', icon: '🤖', color: '#a855f7' },
      { angle: (4 * Math.PI / 3) + t * 0.4, dist: 120, label: 'BUILDING AI', icon: '🧠', color: '#06b6d4' }
    ];

    // Animated connecting lines
    nodes.forEach(node => {
      const nx = centerX + Math.cos(node.angle) * node.dist;
      const ny = centerY + Math.sin(node.angle) * (node.dist * 0.7);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = node.color;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 12;
      ctx.shadowColor = node.color;
      ctx.stroke();

      // Node
      ctx.beginPath();
      ctx.arc(nx, ny, 16, 0, Math.PI * 2);
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = node.color;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.icon, nx, ny);

      // Label text
      ctx.font = '10px Orbitron, sans-serif';
      ctx.fillStyle = '#e2e8f0';
      ctx.fillText(node.label, nx, ny + 26);
    });

    // Center "YOU" Node
    ctx.beginPath();
    ctx.arc(centerX, centerY, 24, 0, Math.PI * 2);
    ctx.fillStyle = '#1e1b4b';
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#c084fc';
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 11px Orbitron, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('YOU', centerX, centerY);

    requestAnimationFrame(render);
  }

  render();
}

// Global initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupSoundToggle();
  setupMobileNav();
  initStarfield();
  initBranchingPortal();
  setupUniverseExplorer();
  setupTimelinePage();
  setupComparisonTable();
  setupDecisionQuiz();
  initMultiverseLabCanvas();
});
