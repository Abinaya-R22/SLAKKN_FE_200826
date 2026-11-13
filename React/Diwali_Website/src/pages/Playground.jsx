import React, { useState, useEffect } from 'react';
import { Zap, Play, Pause, Sparkles } from 'lucide-react';
import CrackerSimulator from '../components/CrackerSimulator';
import { sound } from '../utils/soundEffects';

export default function Playground() {
  const [autoShow, setAutoShow] = useState(false);

  useEffect(() => {
    let interval = null;
    if (autoShow) {
      interval = setInterval(() => {
        const types = ['burst', 'flowerpot', 'sparkler'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        sound.playCrackerSound(randomType);
      }, 1400);
    }
    return () => clearInterval(interval);
  }, [autoShow]);

  return (
    <div className="space-y-10 py-8">
      {/* Hero header in Dark Jewel Tone */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold">
          <Zap className="w-4 h-4 text-[var(--theme-accent)]" />
          <span>Interactive Cracker Playground • Safe & Eco-friendly</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[var(--theme-text)] tracking-tight">
          Virtual Diwali Firecracker Arena
        </h1>

        <p className="text-sm sm:text-base text-[var(--theme-text-muted)] leading-relaxed font-light">
          Burst flowerpots inspired by our real photos, ignite radiant handheld sparklers, spin whirling ground chakkars, and launch colorful sky shots. No smoke, no pollution — 100% festive thrill!
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              setAutoShow(!autoShow);
              sound.playChime();
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border shadow-lg ${
              autoShow
                ? 'bg-rose-600 text-white border-rose-500'
                : 'bg-gradient-to-r from-rose-500 to-pink-600 text-white border-rose-400 hover:scale-105'
            }`}
          >
            {autoShow ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{autoShow ? 'Pause Automatic Show' : 'Start Auto Firework Show'}</span>
          </button>

          <button
            onClick={() => sound.playCrackerSound('burst')}
            className="px-4 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold transition-all flex items-center gap-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Quick Sky Burst 💥</span>
          </button>
        </div>
      </div>

      {/* Simulator canvas */}
      <CrackerSimulator height="h-[520px]" />

      {/* Cracker guide and nostalgic facts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className="p-4 rounded-2xl border border-[var(--theme-border)] shadow-xl space-y-2"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="text-2xl">🌋</div>
          <h4 className="font-bold text-[var(--theme-text)] text-sm">Flower Pot (Anaar / பூந்தொட்டி)</h4>
          <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-light">
            Erupts into high-reaching fountains just like the courtyard photo on our website.
          </p>
        </div>

        <div
          className="p-4 rounded-2xl border border-[var(--theme-border)] shadow-xl space-y-2"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="text-2xl">✨</div>
          <h4 className="font-bold text-[var(--theme-text)] text-sm">Kambi Mathappu (கம்பி மத்தாப்பு)</h4>
          <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-light">
            The beloved sparkler we burst with akka ponnu, tracing circles in the night air.
          </p>
        </div>

        <div
          className="p-4 rounded-2xl border border-[var(--theme-border)] shadow-xl space-y-2"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="text-2xl">🌀</div>
          <h4 className="font-bold text-[var(--theme-text)] text-sm">Zameen Chakkar (தரை சக்கரம்)</h4>
          <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-light">
            Spins on the ground tossing sparks in a hypnotic whirling circle of fiery light.
          </p>
        </div>

        <div
          className="p-4 rounded-2xl border border-[var(--theme-border)] shadow-xl space-y-2"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="text-2xl">🚀</div>
          <h4 className="font-bold text-[var(--theme-text)] text-sm">Sky Shot (வான வெடி)</h4>
          <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-light">
            Shoots straight up into the clouds and bursts into colorful glittering stars!
          </p>
        </div>
      </div>
    </div>
  );
}
