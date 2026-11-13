import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function CrackerSimulator({ height = "h-96" }) {
  const canvasRef = useRef(null);
  const [selectedType, setSelectedType] = useState('flowerpot');
  const [activeItemName, setActiveItemName] = useState('Flower Pot (பூந்தொட்டி / Anaar)');
  const particlesRef = useRef([]);
  const animFrameId = useRef(null);

  const crackerTypes = [
    { id: 'flowerpot', name: 'Flower Pot (பூந்தொட்டி)', sound: 'flowerpot', desc: 'Upward shooting fountain of brilliant sparks, inspired by my photo!' },
    { id: 'sparkler', name: 'Kambi Mathappu (கம்பி மத்தாப்பு)', sound: 'sparkler', desc: 'Radiant handheld sparkler that follows your touch/cursor' },
    { id: 'chakkar', name: 'Ground Chakkar (தரை சக்கரம்)', sound: 'sparkler', desc: 'Spinning vortex of fiery rings' },
    { id: 'skyshot', name: 'Sky Shot Rocket (வான வெடி)', sound: 'burst', desc: 'Ascending rocket with loud colorful aerial burst' }
  ];

  // Helper to spawn particles (No Yellow!)
  const spawnParticles = (x, y, type) => {
    sound.playCrackerSound(type === 'skyshot' ? 'burst' : type === 'flowerpot' ? 'flowerpot' : 'sparkler');

    const particles = particlesRef.current;

    if (type === 'flowerpot') {
      for (let i = 0; i < 90; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.8;
        const speed = 7 + Math.random() * 9;
        particles.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.015 + Math.random() * 0.02,
          size: 2 + Math.random() * 3,
          color: Math.random() > 0.3 ? '#F43F5E' : Math.random() > 0.5 ? '#FDA4AF' : '#FFFFFF',
          gravity: 0.18,
          trail: []
        });
      }
    } else if (type === 'sparkler') {
      for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 6;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.03 + Math.random() * 0.04,
          size: 1.5 + Math.random() * 2.5,
          color: Math.random() > 0.2 ? '#FDA4AF' : '#FB7185',
          gravity: 0.05,
          trail: []
        });
      }
    } else if (type === 'chakkar') {
      for (let i = 0; i < 80; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 5;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.02 + Math.random() * 0.02,
          size: 2 + Math.random() * 2.5,
          color: Math.random() > 0.4 ? '#E11D48' : '#38BDF8',
          gravity: 0.08,
          trail: []
        });
      }
    } else if (type === 'skyshot') {
      const colors = ['#F43F5E', '#38BDF8', '#00E5FF', '#A855F7', '#EC4899'];
      const chosenColor = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 110; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 7;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.012 + Math.random() * 0.018,
          size: 2 + Math.random() * 3,
          color: Math.random() > 0.3 ? chosenColor : '#FFFFFF',
          gravity: 0.1,
          trail: []
        });
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 380;
    };
    resize();
    window.addEventListener('resize', resize);

    const timer = setTimeout(() => {
      spawnParticles(canvas.width / 2, canvas.height - 40, 'flowerpot');
    }, 600);

    const render = () => {
      ctx.fillStyle = 'rgba(10, 13, 26, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (selectedType === 'flowerpot' || selectedType === 'chakkar') {
      spawnParticles(x, Math.max(y, canvas.height - 70), selectedType);
    } else {
      spawnParticles(x, y, selectedType);
    }
  };

  const handleMouseMove = (e) => {
    if (selectedType !== 'sparkler') return;
    if (Math.random() > 0.4) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnParticles(x, y, 'sparkler');
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-[var(--theme-border)] bg-[#070913] shadow-2xl">
      {/* Top Controls Bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-[var(--theme-border)] backdrop-blur-md"
        style={{ backgroundColor: 'var(--theme-surface)' }}
      >
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-[var(--theme-accent-soft)] text-[var(--theme-accent)]">
            <Flame className="w-4 h-4 animate-flame-flicker" />
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wide text-[var(--theme-text)]">
            Interactive Cracker Burst Zone
          </span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {crackerTypes.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedType(c.id);
                setActiveItemName(c.name);
                sound.playChime();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedType === c.id
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold shadow-md scale-105'
                  : 'bg-black/40 hover:bg-black/60 text-stone-300 border border-[var(--theme-border)]'
              }`}
            >
              {c.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Canvas */}
      <div className={`relative ${height} w-full cursor-crosshair overflow-hidden`}>
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onMouseMove={handleMouseMove}
          className="w-full h-full block"
        />

        {/* Ambient Overlay Hint */}
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-rose-200/90 bg-black/70 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-[var(--theme-border)]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--theme-accent)] animate-spin" style={{ animationDuration: '6s' }} />
            <span>
              <strong>Click anywhere</strong> to light <span className="text-[var(--theme-accent)] underline font-semibold">{activeItemName}</span>!
            </span>
          </div>
          <span className="hidden sm:inline text-stone-400 text-[11px]">
            {selectedType === 'sparkler' ? 'Drag mouse for continuous sparkle!' : 'Real sound effects enabled 🔊'}
          </span>
        </div>
      </div>
    </div>
  );
}
