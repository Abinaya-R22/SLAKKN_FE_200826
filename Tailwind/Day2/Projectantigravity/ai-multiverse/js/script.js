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
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      } catch (e) {
        console.warn('AudioContext not supported');
      }
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.05) {
    if (!MultiverseState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
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
    } catch (e) {}
  }

  blip() {
    this.playTone(800, 'sine', 0.08, 0.03);
  }

  confirm() {
    if (!MultiverseState.soundEnabled) return;
    this.playTone(440, 'triangle', 0.09, 0.04);
    setTimeout(() => this.playTone(880, 'sine', 0.16, 0.05), 80);
  }

  warp() {
    if (!MultiverseState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }
}

const sfx = new SoundFxEngine();

// --- Sound Toggle Button Setup ---
function setupSoundToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  if (!soundBtn || !soundIcon) return;

  const updateIcon = () => {
    if (MultiverseState.soundEnabled) {
      soundBtn.classList.add('text-cyan-400');
      soundBtn.classList.remove('text-slate-400');
      soundIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"/>
      `;
      soundBtn.title = "Sound Effects: ON (Click to Mute)";
    } else {
      soundBtn.classList.remove('text-cyan-400');
      soundBtn.classList.add('text-slate-400');
      soundIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      `;
      soundBtn.title = "Sound Effects: MUTED (Click to Enable)";
    }
  };

  updateIcon();

  soundBtn.addEventListener('click', () => {
    MultiverseState.soundEnabled = !MultiverseState.soundEnabled;
    localStorage.setItem('ai_multiverse_sound', MultiverseState.soundEnabled);
    updateIcon();
    if (MultiverseState.soundEnabled) {
      sfx.init();
      sfx.confirm();
    }
  });

  // Enable audio context on first user click anywhere if sound is active
  window.addEventListener('click', () => {
    if (MultiverseState.soundEnabled) sfx.init();
  }, { once: true });
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
  const starCount = window.innerWidth < 768 ? 50 : 100;

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
      this.size = Math.random() * 1.8 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.speedY = (Math.random() - 0.5) * 0.25;
      this.opacity = Math.random() * 0.6 + 0.25;
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
      ctx.shadowBlur = 6;
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

    // Reset alpha for lines
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.07)';
    ctx.lineWidth = 0.8;
    ctx.shadowBlur = 0;

    for (let i = 0; i < stars.length; i += 3) {
      for (let j = i + 1; j < stars.length; j += 5) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
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

// --- Cinematic Entrance Branching Canvas with Human Silhouette (index.html) ---
function initBranchingPortal() {
  const canvas = document.getElementById('branchingCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const parentW = canvas.parentElement ? canvas.parentElement.clientWidth : 800;
    canvas.width = Math.max(parentW, 320);
    canvas.height = 360;
  }
  window.addEventListener('resize', resize);
  resize();

  let offset = 0;

  // Draw silhouette helper
  function drawDeveloperSilhouette(x, y) {
    // Head
    ctx.beginPath();
    ctx.arc(x, y - 16, 9, 0, Math.PI * 2);
    ctx.fillStyle = '#06b6d4';
    ctx.shadowBlur = 12;
    ctx.shadowColor = '#06b6d4';
    ctx.fill();

    // Body / shoulders
    ctx.beginPath();
    ctx.ellipse(x, y + 2, 16, 9, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.fill();

    // Laptop screen
    ctx.beginPath();
    ctx.rect(x - 12, y + 6, 24, 7);
    ctx.fillStyle = '#1e1b4b';
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();

    // Label: YOU — 2026
    ctx.font = 'bold 11px Orbitron, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#38bdf8';
    ctx.fillText('YOU — 2026', x, y - 32);

    // Glowing circle halo around origin
    ctx.beginPath();
    ctx.arc(x, y - 6, 30, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const startX = canvas.width / 2;
    const startY = 60;
    const endY = canvas.height - 50;
    const leftX = canvas.width * 0.18;
    const midX = canvas.width * 0.5;
    const rightX = canvas.width * 0.82;

    offset += 0.025;

    // Draw Central Silhouette
    drawDeveloperSilhouette(startX, startY);

    // 3 Paths
    const paths = [
      { endX: leftX, color: '#3b82f6', label: 'WITHOUT AI', dest: '2030' },
      { endX: midX, color: '#a855f7', label: 'WITH AI', dest: '2030' },
      { endX: rightX, color: '#06b6d4', label: 'BUILDING AI', dest: '2030' }
    ];

    paths.forEach((p, idx) => {
      // Curve from developer to destination
      ctx.beginPath();
      ctx.moveTo(startX, startY + 24);
      ctx.bezierCurveTo(
        startX, startY + 120,
        p.endX, startY + 100,
        p.endX, endY - 24
      );
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;
      ctx.stroke();

      // Flowing energy pulses
      const pulseT = ((offset + idx * 0.33) % 1);
      const cp1x = startX, cp1y = startY + 120;
      const cp2x = p.endX, cp2y = startY + 100;
      const t = pulseT;
      const px = Math.pow(1 - t, 3) * startX + 3 * Math.pow(1 - t, 2) * t * cp1x + 3 * (1 - t) * Math.pow(t, 2) * cp2x + Math.pow(t, 3) * p.endX;
      const py = Math.pow(1 - t, 3) * (startY + 24) + 3 * Math.pow(1 - t, 2) * t * cp1y + 3 * (1 - t) * Math.pow(t, 2) * cp2y + Math.pow(t, 3) * (endY - 24);

      ctx.beginPath();
      ctx.arc(px, py, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 16;
      ctx.shadowColor = p.color;
      ctx.fill();

      // Destination 2030 Node
      ctx.beginPath();
      ctx.arc(p.endX, endY - 24, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 15;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.stroke();

      // Node label
      ctx.font = 'bold 10px Orbitron, sans-serif';
      ctx.fillStyle = p.color;
      ctx.textAlign = 'center';
      ctx.fillText(p.label, p.endX, endY - 4);
      ctx.font = '9px Space Grotesk, sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('→ ' + p.dest, p.endX, endY + 12);
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// --- Universe Experience Data & Switcher (multiverse.html) ---
const UniverseData = {
  'universe-01': {
    code: '01',
    title: 'YOU IN UNIVERSE 01',
    subtitle: 'THE TRADITIONAL DEVELOPER',
    theme: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    description: 'A developer who continues developing mainly through traditional methods and uses minimal AI assistance.',
    timeline: [
      { year: '2026', title: 'Fundamentals & Web Development', text: 'Learning web development and programming fundamentals from scratch.' },
      { year: '2027', title: 'Conventional Workflows', text: 'Building websites and applications using conventional development workflows.' },
      { year: '2028', title: 'Complex Software Systems', text: 'Working on increasingly complex software projects with standard engineering patterns.' },
      { year: '2029', title: 'Software Engineering Expertise', text: 'Developing stronger expertise in software engineering, architecture, and reliability.' },
      { year: '2030', title: 'Hypothetical Developer Profile', text: 'A master software engineer with deep algorithmic and foundational mastery.' }
    ],
    profile: {
      type: 'TRADITIONAL DEVELOPER',
      skills: [
        { name: 'Programming', level: '█████████░ 90%' },
        { name: 'Web Development', level: '█████████░ 88%' },
        { name: 'Databases', level: '████████░░ 85%' },
        { name: 'Software Engineering', level: '█████████░ 92%' }
      ],
      challenges: 'Keeping up with rapidly changing development tools.',
      fictionalTag: 'FICTIONAL FUTURE SCENARIO'
    }
  },
  'universe-02': {
    code: '02',
    title: 'YOU IN UNIVERSE 02',
    subtitle: 'THE AI-ASSISTED DEVELOPER',
    theme: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    description: 'A developer who uses AI as a daily development assistant.',
    timeline: [
      { year: '2026', title: 'Fundamentals + AI Assistant', text: 'Learning development fundamentals while using AI as an assistant.' },
      { year: '2027', title: 'Full AI-Assisted Tooling', text: 'Using AI for Code generation, Debugging, Documentation, Research, and Testing.' },
      { year: '2028', title: 'High-Velocity Shipping', text: 'Building applications faster with AI-assisted workflows and rapid iterations.' },
      { year: '2029', title: 'Automated Development Chains', text: 'Working with AI-powered development tools, testing bots, and automation.' },
      { year: '2030', title: 'Hypothetical Developer Profile', text: 'A 10x architect conducting automated pipelines and complex system design.' }
    ],
    profile: {
      type: 'AI-ASSISTED DEVELOPER',
      skills: [
        { name: 'Programming', level: '█████████░ 90%' },
        { name: 'AI-assisted development', level: '██████████ 98%' },
        { name: 'Automation', level: '█████████░ 92%' },
        { name: 'APIs', level: '████████░░ 88%' },
        { name: 'System thinking', level: '█████████░ 91%' }
      ],
      challenges: 'Maintaining deep foundational retention while directing high-speed AI tools.',
      fictionalTag: 'FICTIONAL FUTURE SCENARIO'
    }
  },
  'universe-03': {
    code: '03',
    title: 'YOU IN UNIVERSE 03',
    subtitle: 'THE AI BUILDER',
    theme: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    description: 'A developer who learns AI technologies and builds AI-powered products and systems.',
    timeline: [
      { year: '2026', title: 'Programming & AI Fundamentals', text: 'Learning programming and foundational AI concepts in Python.' },
      { year: '2027', title: 'Core AI Stack', text: 'Learning: LLMs, AI APIs, Prompt Engineering, and RAG architectures.' },
      { year: '2028', title: 'AI-Powered Applications', text: 'Building AI-powered applications, semantic search engines, and generative platforms.' },
      { year: '2029', title: 'Intelligent Autonomous Agents', text: 'Building autonomous AI agents and intelligent workflow automation.' },
      { year: '2030', title: 'Hypothetical Developer Profile', text: 'A frontier AI systems architect authoring intelligent multi-agent networks.' }
    ],
    profile: {
      type: 'THE AI BUILDER',
      skills: [
        { name: 'Python', level: '█████████░ 95%' },
        { name: 'AI APIs', level: '██████████ 96%' },
        { name: 'LLMs', level: '█████████░ 94%' },
        { name: 'RAG', level: '█████████░ 93%' },
        { name: 'AI Agents', level: '█████████░ 95%' },
        { name: 'Cloud & Systems', level: '████████░░ 89%' }
      ],
      challenges: 'Navigating evolving model updates, GPU scalability, and agent alignment.',
      fictionalTag: 'FICTIONAL FUTURE SCENARIO'
    }
  }
};

function setupUniverseExplorer() {
  const container = document.getElementById('universeDetailView');
  if (!container) return;

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

    const timelineHtml = data.timeline.map((item) => `
      <div class="relative pl-8 pb-8 border-l border-slate-700 last:border-0 last:pb-0">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-[0_0_10px_#06b6d4]"></div>
        <div class="inline-block px-2.5 py-0.5 mb-1.5 rounded-full text-xs font-orbitron font-bold ${data.theme}">
          ${item.year}
        </div>
        <h4 class="text-base sm:text-lg font-bold text-white mb-1 font-space">${item.title}</h4>
        <p class="text-slate-300 text-sm leading-relaxed">${item.text}</p>
      </div>
    `).join('');

    const skillsHtml = data.profile.skills.map(s => `
      <div class="p-2.5 rounded bg-slate-900/70 border border-slate-800">
        <div class="flex justify-between text-xs font-space mb-1">
          <span class="text-slate-200 font-medium">${s.name}</span>
          <span class="font-mono text-cyan-400">${s.level.split(' ')[1] || ''}</span>
        </div>
        <div class="text-[11px] font-mono text-cyan-400 tracking-wider">${s.level.split(' ')[0]}</div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-0.5 rounded text-xs font-orbitron font-bold ${data.theme}">
                UNIVERSE ${data.code}
              </span>
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                ${data.profile.fictionalTag}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-orbitron font-bold text-white tracking-wide">${data.title}</h2>
            <p class="text-sm font-space text-cyan-300 font-semibold">${data.subtitle}</p>
          </div>
          <a href="timeline.html?clone=clone-0${parseInt(data.code)}" class="btn-futuristic px-5 py-2.5 rounded-xl text-xs font-orbitron font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg flex items-center gap-2">
            <span>Explore Timeline</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <p class="text-slate-300 text-base leading-relaxed mb-8 max-w-3xl">“${data.description}”</p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Timeline Progression -->
          <div class="lg:col-span-2">
            <h3 class="text-base font-orbitron font-bold text-white mb-6 flex items-center gap-2">
              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Evolution Path: 2026 → 2027 → 2028 → 2029 → 2030
            </h3>
            <div class="pl-2">
              ${timelineHtml}
            </div>
          </div>

          <!-- 2030 Hypothetical Profile -->
          <div class="glass-panel p-6 rounded-xl border border-slate-700/60 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                <h3 class="text-sm font-orbitron font-bold text-purple-300 flex items-center gap-2">
                  <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  2030 Profile
                </h3>
                <span class="text-[10px] font-mono text-slate-400">STATUS: PROJECTED</span>
              </div>
              <div class="space-y-2 mb-6">
                ${skillsHtml}
              </div>
            </div>

            <div class="pt-4 border-t border-slate-800">
              <span class="text-xs font-semibold text-rose-400 uppercase tracking-wider block mb-1">Reality Challenge</span>
              <p class="text-xs text-slate-400 leading-relaxed">${data.profile.challenges}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderUniverse(MultiverseState.activeUniverse);

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
      badge: 'The Traditional Path',
      milestones: [
        { stage: 'Learn', year: '2026', title: 'Web Development & Programming Fundamentals', desc: 'Learning web development and programming fundamentals through manual coding and core principles.' },
        { stage: 'Experiment', year: '2027', title: 'Conventional Workflows', desc: 'Building websites and applications using conventional development workflows, manual unit tests, and git.' },
        { stage: 'Build', year: '2028', title: 'Complex Software Projects', desc: 'Working on increasingly complex software projects, distributed systems, and relational databases.' },
        { stage: 'Scale', year: '2029', title: 'Deep Software Engineering', desc: 'Developing stronger expertise in software engineering, memory management, and deterministic architectures.' },
        { stage: 'Software Craftsman', year: '2030', title: 'The Traditional Master', desc: 'Show a hypothetical developer profile: Deep mastery of Programming, Web Development, Databases, and Software Engineering.' }
      ]
    },
    'clone-02': {
      name: 'Clone 02: With AI',
      color: 'from-purple-500 to-pink-600',
      badge: 'The AI-Assisted Path',
      milestones: [
        { stage: 'Learn', year: '2026', title: 'Fundamentals + AI Pair-Programming', desc: 'Learning development fundamentals while using AI as a real-time coding assistant.' },
        { stage: 'Experiment', year: '2027', title: 'Multi-Task AI Capabilities', desc: 'Using AI for Code generation, Debugging, Documentation, Research, and Testing.' },
        { stage: 'Build', year: '2028', title: 'Accelerated Product Delivery', desc: 'Building applications faster with AI-assisted workflows and rapid prototyping cycles.' },
        { stage: 'Scale', year: '2029', title: 'AI-Powered Automation', desc: 'Working with AI-powered development tools, automated pipelines, and intelligent testing.' },
        { stage: '10x Architect', year: '2030', title: 'The AI-Assisted Developer', desc: 'Show a hypothetical developer profile: Advanced skills in Programming, AI-assisted development, Automation, APIs, and System thinking.' }
      ]
    },
    'clone-03': {
      name: 'Clone 03: Building AI',
      color: 'from-cyan-500 to-emerald-600',
      badge: 'The AI Builder Path',
      milestones: [
        { stage: 'Learn', year: '2026', title: 'Programming & AI Primitives', desc: 'Learning programming and AI fundamentals with Python and machine learning basics.' },
        { stage: 'Experiment', year: '2027', title: 'LLMs, APIs & RAG', desc: 'Learning: LLMs, AI APIs, Prompt Engineering, and RAG architectures.' },
        { stage: 'Build', year: '2028', title: 'AI-Powered Applications', desc: 'Building AI-powered applications, generative search, and semantic knowledge systems.' },
        { stage: 'Scale', year: '2029', title: 'Autonomous AI Agents', desc: 'Building AI agents and intelligent automation with multi-agent orchestration.' },
        { stage: 'AI Builder', year: '2030', title: 'The Frontier AI Systems Architect', desc: 'Show a hypothetical developer profile: Mastery of Python, AI APIs, LLMs, RAG, AI Agents, Cloud, and System Architecture.' }
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
  let currentSelection = (requestedClone && TimelineData.clones[requestedClone]) ? requestedClone : 'all';

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

    if (selected === 'all') {
      // Show side-by-side comparison across all 3 clones
      let html = '';
      TimelineData.years.forEach((year, yIdx) => {
        html += `
          <div class="mb-12 relative">
            <div class="flex items-center gap-4 mb-6">
              <span class="w-12 h-12 rounded-xl flex items-center justify-center font-orbitron font-black text-lg bg-slate-900 border border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                ${year}
              </span>
              <div class="h-0.5 flex-1 bg-gradient-to-r from-cyan-500/40 via-purple-500/30 to-transparent"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        `;

        ['clone-01', 'clone-02', 'clone-03'].forEach(k => {
          const cData = TimelineData.clones[k];
          const m = cData.milestones[yIdx];
          html += `
            <div class="glass-panel p-5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-orbitron font-bold px-2.5 py-0.5 rounded bg-gradient-to-r ${cData.color} text-white">
                  ${cData.name.split(':')[0]}
                </span>
                <span class="text-xs font-space text-cyan-400 font-semibold uppercase">
                  → ${m.stage}
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
    } else {
      // Single clone vertical progression view with connected arrows
      const cData = TimelineData.clones[selected];
      let html = `
        <div class="max-w-2xl mx-auto space-y-6">
          <div class="text-center mb-8 p-4 rounded-xl glass-panel border border-purple-500/30">
            <span class="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-gradient-to-r ${cData.color} text-white">
              ${cData.name}
            </span>
            <h3 class="text-xl font-orbitron font-bold text-white mt-2">${cData.badge}</h3>
            <p class="text-xs font-space text-slate-400 mt-1">2026 → 2027 → 2028 → 2029 → 2030</p>
          </div>
      `;

      cData.milestones.forEach((m, idx) => {
        html += `
          <div class="relative glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all">
            <div class="flex items-center justify-between mb-3">
              <span class="text-lg font-orbitron font-black text-cyan-400">${m.year}</span>
              <span class="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-slate-900 border border-slate-700 text-purple-300">
                STAGE: ${m.stage.toUpperCase()}
              </span>
            </div>
            <h4 class="text-lg font-bold text-white mb-2 font-space">${m.title}</h4>
            <p class="text-sm text-slate-300 font-space leading-relaxed">${m.desc}</p>
          </div>
        `;

        if (idx < cData.milestones.length - 1) {
          html += `
            <div class="flex justify-center my-1">
              <div class="w-8 h-8 rounded-full bg-slate-900 border border-purple-500/40 flex items-center justify-center text-purple-400 text-sm shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                ↓
              </div>
            </div>
          `;
        }
      });

      html += `</div>`;
      container.innerHTML = html;
    }
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

// --- Comparison Table Filtering & View Toggle (compare.html) ---
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
    let isCompact = false;
    toggleBtn.addEventListener('click', () => {
      isCompact = !isCompact;
      document.querySelectorAll('.compare-row td:not(:first-child)').forEach(el => {
        el.classList.toggle('text-xs', isCompact);
        el.classList.toggle('p-3', isCompact);
        el.classList.toggle('p-6', !isCompact);
      });
      toggleBtn.innerText = isCompact ? 'EXPAND MATRIX' : 'COMPARE TOGGLE';
      sfx.blip();
    });
  }
}

// --- Decision Engine & 2030 Profile Generation (future.html) ---
const ProfileModels = {
  traditional: {
    type: 'TRADITIONAL DEVELOPER',
    universe: 'Universe 01',
    universeCode: 'universe-01',
    color: 'text-blue-400',
    gradient: 'from-blue-600 to-indigo-700',
    explorationMessage: 'You explored the Traditional Developer universe.',
    description: 'You believe in fundamental mastery, deterministic logic, and complete ownership of your code execution without external AI dependencies.',
    skills: [
      { name: 'Programming', blocks: '█████████░', pct: 90 },
      { name: 'Web Development', blocks: '█████████░', pct: 88 },
      { name: 'Databases', blocks: '████████░░', pct: 85 },
      { name: 'Software Engineering', blocks: '█████████░', pct: 92 }
    ],
    tools: 'Vim / VS Code, PostgreSQL, Git CLI, Docker, Linux, C/Rust/Go',
    projects: 'Mission-critical systems, deterministic databases, low-latency infrastructure',
    learningAreas: 'Operating system kernels, compiler design, protocol specifications',
    focus: 'Deterministic Systems, Resilient Architecture & Foundational Mastery'
  },
  aiAssisted: {
    type: 'AI-ASSISTED DEVELOPER',
    universe: 'Universe 02',
    universeCode: 'universe-02',
    color: 'text-purple-400',
    gradient: 'from-purple-600 to-pink-600',
    explorationMessage: 'You explored the AI-Assisted Developer universe.',
    description: 'You harness AI as your continuous development companion to maximize shipping speed, automate testing, and deliver production web applications.',
    skills: [
      { name: 'Programming', blocks: '█████████░', pct: 90 },
      { name: 'AI Tools & Copilots', blocks: '██████████', pct: 98 },
      { name: 'APIs & Integration', blocks: '████████░░', pct: 88 },
      { name: 'System Thinking', blocks: '█████████░', pct: 91 }
    ],
    tools: 'AI-powered IDEs, GitHub Copilot, ChatGPT, Claude Code, Vercel, Next.js',
    projects: 'High-velocity full-stack SaaS platforms, automated pipelines, e-commerce suites',
    learningAreas: 'Context window management, prompt architectures, automated CI/CD bot pipelines',
    focus: 'AI + Web Development, 5x Velocity Shipping & Multi-Tool Orchestration'
  },
  aiBuilder: {
    type: 'THE AI BUILDER',
    universe: 'Universe 03',
    universeCode: 'universe-03',
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-emerald-600',
    explorationMessage: 'You explored the AI Builder universe.',
    description: 'You design, train, and orchestrate intelligent AI systems, RAG retrieval pipelines, and autonomous multi-agent swarms.',
    skills: [
      { name: 'Python & PyTorch', blocks: '█████████░', pct: 95 },
      { name: 'AI APIs & LLMs', blocks: '██████████', pct: 96 },
      { name: 'RAG Architectures', blocks: '█████████░', pct: 93 },
      { name: 'AI Agents', blocks: '█████████░', pct: 95 }
    ],
    tools: 'Python, PyTorch, LangChain, Pinecone, Chroma, OpenAI/Anthropic APIs, GPU Clusters',
    projects: 'Autonomous multi-agent workflows, vector search engines, multimodal AI products',
    learningAreas: 'Transformer scaling laws, fine-tuning techniques, multi-agent consensus protocols',
    focus: 'Autonomous Agents, Custom Cognitive Systems & Frontier AI Architecture'
  }
};

function setupDecisionQuiz() {
  const quizSection = document.getElementById('decisionQuiz');
  const profileContainer = document.getElementById('profileResultContainer');
  if (!quizSection || !profileContainer) return;

  const quizOptions = document.querySelectorAll('.quiz-option');

  quizOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const q = opt.dataset.question;
      const val = parseInt(opt.dataset.value);

      document.querySelectorAll(`.quiz-option[data-question="${q}"]`).forEach(sibling => {
        sibling.classList.remove('bg-purple-600', 'border-purple-400', 'text-white', 'shadow-[0_0_15px_rgba(168,85,247,0.5)]');
        sibling.classList.add('bg-slate-900/60', 'border-slate-700', 'text-slate-300');
      });

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
    if (submitBtn && q1 !== null && q2 !== null && q3 !== null) {
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

      let resultProfile = ProfileModels.aiAssisted;
      if (totalScore <= 4) {
        resultProfile = ProfileModels.traditional;
      } else if (totalScore <= 7) {
        resultProfile = ProfileModels.aiAssisted;
      } else {
        resultProfile = ProfileModels.aiBuilder;
      }

      MultiverseState.userProfile = resultProfile;
      localStorage.setItem('ai_multiverse_profile', JSON.stringify(resultProfile));

      renderProfile(resultProfile, true);
    });
  }

  function renderProfile(profile, shouldScroll = false) {
    profileContainer.classList.remove('hidden');

    const skillsBlockHtml = profile.skills.map(s => `
      <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
        <div class="flex justify-between items-center text-xs font-space mb-1">
          <span class="text-slate-200 font-medium">${s.name}</span>
          <span class="font-mono text-cyan-400 font-bold">${s.pct}%</span>
        </div>
        <div class="text-xs font-mono tracking-widest text-cyan-400">${s.blocks}</div>
      </div>
    `).join('');

    profileContainer.innerHTML = `
      <div class="hologram-card p-6 sm:p-10 border border-purple-500/40 relative overflow-hidden">
        
        <!-- Header Banner: YOUR EXPLORATION PATH -->
        <div class="mb-6 p-4 rounded-xl bg-purple-950/40 border border-purple-500/30">
          <span class="text-xs font-orbitron font-bold text-purple-300 uppercase tracking-widest block mb-1">
            YOUR EXPLORATION PATH
          </span>
          <p class="text-lg sm:text-xl font-space font-bold text-white">
            “${profile.explorationMessage}”
          </p>
          <span class="text-xs text-slate-400 font-space block mt-1">
            * This exploration path is calculated directly from your choices above.
          </span>
        </div>

        <!-- Hologram ID Profile Card (PAGE 8) -->
        <div class="border border-cyan-500/40 rounded-xl p-6 bg-slate-950/80 mb-8">
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div>
              <span class="text-xs font-orbitron text-slate-400 block mb-1">PAGE 8 // SPECIFICATION</span>
              <h3 class="text-2xl sm:text-3xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                YOUR POSSIBLE 2030
              </h3>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-slate-900 border border-slate-700 text-cyan-400">
              DEVELOPER TYPE: ${profile.type}
            </span>
          </div>

          <!-- Description -->
          <p class="text-slate-300 text-sm leading-relaxed mb-6 font-space">
            ${profile.description}
          </p>

          <!-- Skills with ASCII meters -->
          <div class="mb-6">
            <h4 class="text-xs font-orbitron font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Core Skills Index
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${skillsBlockHtml}
            </div>
          </div>

          <!-- Tools, Projects & Learning Areas -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span class="text-xs font-orbitron text-purple-400 uppercase tracking-wide block mb-1">Tools</span>
              <p class="text-xs text-slate-200 font-space leading-relaxed">${profile.tools}</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span class="text-xs font-orbitron text-cyan-400 uppercase tracking-wide block mb-1">Projects</span>
              <p class="text-xs text-slate-200 font-space leading-relaxed">${profile.projects}</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span class="text-xs font-orbitron text-emerald-400 uppercase tracking-wide block mb-1">Learning Areas</span>
              <p class="text-xs text-slate-200 font-space leading-relaxed">${profile.learningAreas}</p>
            </div>
          </div>

          <!-- Focus -->
          <div class="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-center">
            <span class="text-xs font-orbitron text-purple-300 uppercase tracking-wide block mb-0.5">Focus</span>
            <p class="text-sm font-space font-bold text-white">${profile.focus}</p>
          </div>
        </div>

        <!-- Important Disclaimer -->
        <div class="text-center pt-2">
          <p class="text-xs font-space text-amber-400 font-semibold italic">
            “This profile is a fictional scenario generated from your choices.”
          </p>
        </div>
      </div>
    `;

    if (shouldScroll) {
      profileContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Initial render: show default preview if none exists, or user's saved profile
  const initial = MultiverseState.userProfile || ProfileModels.aiAssisted;
  renderProfile(initial, false);
}

// --- Multiverse Lab Connected Lines Canvas (future.html) ---
function initMultiverseLabCanvas() {
  const canvas = document.getElementById('labMultiverseCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  function resize() {
    const pW = canvas.parentElement ? canvas.parentElement.clientWidth : 800;
    canvas.width = Math.max(pW, 320);
    canvas.height = 360;
  }
  window.addEventListener('resize', resize);
  resize();

  let t = 0;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    t += 0.015;

    const radius = Math.min(canvas.width * 0.35, 130);

    const nodes = [
      { angle: 0 + t * 0.4, dist: radius, label: 'WITHOUT AI', icon: '🧑', color: '#38bdf8' },
      { angle: (2 * Math.PI / 3) + t * 0.4, dist: radius, label: 'WITH AI', icon: '🤖', color: '#a855f7' },
      { angle: (4 * Math.PI / 3) + t * 0.4, dist: radius, label: 'BUILDING AI', icon: '🧠', color: '#06b6d4' }
    ];

    // Connecting Lines
    nodes.forEach(node => {
      const nx = centerX + Math.cos(node.angle) * node.dist;
      const ny = centerY + Math.sin(node.angle) * (node.dist * 0.75);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = node.color;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = node.color;
      ctx.stroke();

      // Node Circle
      ctx.beginPath();
      ctx.arc(nx, ny, 18, 0, Math.PI * 2);
      ctx.fillStyle = '#090d1f';
      ctx.strokeStyle = node.color;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      ctx.font = '15px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.icon, nx, ny);

      // Label Text
      ctx.font = 'bold 10px Orbitron, sans-serif';
      ctx.fillStyle = '#e2e8f0';
      ctx.shadowBlur = 0;
      ctx.fillText(node.label, nx, ny + 28);
    });

    // Center "YOU" Node
    ctx.beginPath();
    ctx.arc(centerX, centerY, 26, 0, Math.PI * 2);
    ctx.fillStyle = '#1e1b4b';
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 18;
    ctx.shadowColor = '#c084fc';
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 12px Orbitron, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowBlur = 0;
    ctx.fillText('YOU', centerX, centerY);

    requestAnimationFrame(render);
  }

  render();
}

// Global initialization
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
