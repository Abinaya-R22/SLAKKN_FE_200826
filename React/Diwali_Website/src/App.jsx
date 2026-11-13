import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Day1Homecoming from './pages/Day1Homecoming';
import Day2Amavasai from './pages/Day2Amavasai';
import Day3Fireworks from './pages/Day3Fireworks';
import Playground from './pages/Playground';
import { Sparkles, Camera } from 'lucide-react';
import { sound } from './utils/soundEffects';

export default function App() {
  const [activePage, setActivePage] = useState('day1');
  const [currentTheme, setCurrentTheme] = useState('wine'); // 'wine' (Royal Velvet Maroon), 'emerald' (Midnight Emerald), 'twilight' (Deep Sapphire)
  const [isRainActive, setIsRainActive] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // Generate rain drops
  const rainDrops = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: `${(i * 2.2 + 1) % 100}%`,
      animationDuration: `${0.8 + ((i * 37) % 70) / 100}s`,
      animationDelay: `${((i * 43) % 180) / 100}s`,
      opacity: 0.25 + ((i * 17) % 45) / 100,
      height: `${14 + ((i * 23) % 18)}px`,
      width: `${1 + ((i * 11) % 15) / 10}px`
    }));
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sound.playChime();
  };

  return (
    <div
      data-theme={currentTheme}
      className="min-h-screen flex flex-col relative transition-colors duration-500"
      style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}
    >
      {/* Falling Rain Particle Overlay */}
      {isRainActive && (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
          {rainDrops.map((d) => (
            <div
              key={d.id}
              className="rain-drop"
              style={{
                left: d.left,
                animationDuration: d.animationDuration,
                animationDelay: d.animationDelay,
                opacity: d.opacity,
                height: d.height,
                width: d.width
              }}
            />
          ))}
        </div>
      )}

      {/* Top Festive Announcement Banner */}
      <div
        className="text-xs py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2 border-b border-[var(--theme-border)] shadow-md transition-colors"
        style={{ background: 'var(--theme-banner)', color: 'var(--theme-text)' }}
      >
        <Sparkles className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
        <span className="font-medium">
          Happy Diwali! Welcome to my hometown celebration: train ride, mom's food, rain, pure veg feast & fireworks!
        </span>
        <button
          onClick={() => handlePageChange('day3')}
          className="ml-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 hover:bg-black/60 text-[var(--theme-accent)] border border-[var(--theme-border)] text-[11px] font-bold transition-all"
        >
          <Camera className="w-3 h-3" />
          <span>Real Photos</span>
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        isRainActive={isRainActive}
        setIsRainActive={setIsRainActive}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />

      {/* Page Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {activePage === 'day1' && (
          <Day1Homecoming
            onNextPage={() => handlePageChange('day2')}
            onGoToGallery={() => handlePageChange('day3')}
          />
        )}
        {activePage === 'day2' && (
          <Day2Amavasai
            onNextPage={() => handlePageChange('day3')}
            onGoToGallery={() => handlePageChange('day3')}
          />
        )}
        {activePage === 'day3' && (
          <Day3Fireworks onGoToPlayground={() => handlePageChange('playground')} />
        )}
        {activePage === 'playground' && <Playground />}
      </main>

      {/* Festive Footer */}
      <Footer setActivePage={handlePageChange} />
    </div>
  );
}
