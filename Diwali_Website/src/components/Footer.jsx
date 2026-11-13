import React from 'react';
import { Heart, Sparkles, Flame } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Footer({ setActivePage }) {
  return (
    <footer
      className="relative border-t border-[var(--theme-border)] pt-14 pb-12 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-text-muted)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[var(--theme-border)]">
          {/* Col 1: About the Celebration */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-[var(--theme-accent)] animate-flame-flicker" />
              <h4 className="text-lg font-serif font-bold text-[var(--theme-text)]">
                தீபாவளி நல்வாழ்த்துகள்
              </h4>
            </div>
            <p className="text-xs leading-relaxed font-light opacity-90">
              A personal digital memory book honoring hometown warmth: the train travel, mom's handmade sweets and murukku, pure vegetarian Amavasai feast on a banana leaf, rain on the roof, and fireworks with family & akka ponnu.
            </p>
          </div>

          {/* Col 2: Quick Jump */}
          <div className="space-y-2">
            <h5 className="text-xs uppercase font-semibold tracking-wider text-[var(--theme-accent)] mb-3">
              Diwali Chapters
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActivePage('day1');
                    sound.playChime();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[var(--theme-accent)] transition-colors flex items-center gap-1.5 opacity-85 hover:opacity-100"
                >
                  <span>🚂</span> Day 1: Train Ride, Mom’s Cooking & Rain
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('day2');
                    sound.playChime();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[var(--theme-accent)] transition-colors flex items-center gap-1.5 opacity-85 hover:opacity-100"
                >
                  <span>🌿</span> Day 2: Ganga Snanam & Amavasai Banana Leaf Feast
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('day3');
                    sound.playChime();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[var(--theme-accent)] transition-colors flex items-center gap-1.5 opacity-85 hover:opacity-100"
                >
                  <span>✨</span> Day 3: Fireworks with Akka Ponnu & Real Photos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('playground');
                    sound.playChime();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[var(--theme-accent)] transition-colors flex items-center gap-1.5 opacity-85 hover:opacity-100"
                >
                  <span>💥</span> Interactive Cracker Bursting Zone
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Traditional Blessing */}
          <div className="p-4 rounded-2xl border border-[var(--theme-border)] text-center flex flex-col items-center justify-center shadow-md bg-black/20">
            <Sparkles className="w-6 h-6 text-[var(--theme-accent)] mb-2" />
            <p className="text-sm font-serif font-bold text-[var(--theme-text)]">
              "இனிய தீபாவளி நல்வாழ்த்துகள்"
            </p>
            <p className="text-xs mt-1 font-light opacity-90">
              May the divine light of Diwali bring immense joy, good health, and sweetest blessings to everyone!
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs opacity-75 gap-3">
          <p>© 2026 My Personal Diwali Celebration Archive.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & fond memories of native place
          </p>
        </div>
      </div>
    </footer>
  );
}
