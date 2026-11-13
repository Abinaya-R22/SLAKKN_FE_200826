import React, { useState } from 'react';
import { Volume2, VolumeX, CloudRain, Menu, X, Flame, Camera, Palette } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Navbar({
  activePage,
  setActivePage,
  currentTheme,
  setCurrentTheme,
  isRainActive,
  setIsRainActive,
  isMuted,
  setIsMuted
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'day1', label: 'Day 1: Homecoming', sub: 'Train & Mom’s Food' },
    { id: 'day2', label: 'Day 2: Amavasai Feast', sub: 'Pure Veg & TV Movies' },
    { id: 'day3', label: '📸 Real Photo Album', sub: 'My Actual Night Photos' },
    { id: 'playground', label: 'Cracker Playground', sub: 'Interactive Zone' }
  ];

  const themeOptions = [
    { id: 'wine', name: 'Velvet Rose Crimson', icon: '🌹', desc: 'Deep warm maroon & rose gold' },
    { id: 'emerald', name: 'Midnight Emerald', icon: '🌲', desc: 'Calm deep forest & mint' },
    { id: 'twilight', name: 'Starry Twilight', icon: '🌌', desc: 'Deep royal sapphire & violet' }
  ];

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.isMuted = nextMuted;
    if (nextMuted) {
      sound.toggleRain(false);
    } else {
      sound.playChime();
      if (isRainActive) sound.toggleRain(true);
    }
  };

  const toggleRain = () => {
    const nextRain = !isRainActive;
    setIsRainActive(nextRain);
    sound.toggleRain(nextRain && !isMuted);
    if (nextRain) sound.playChime();
  };

  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-[var(--theme-border)] shadow-xl transition-colors duration-300"
      style={{ backgroundColor: 'var(--theme-nav)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand / Title */}
        <button
          onClick={() => {
            setActivePage('day1');
            sound.playChime();
          }}
          className="flex items-center gap-3 group text-left"
        >
          {/* Animated Diya Lamp Icon (Ruby Rose Flame) */}
          <div className="relative w-11 h-11 flex items-center justify-center rounded-2xl bg-black/40 border border-[var(--theme-border)] shadow-md group-hover:scale-105 transition-transform">
            <div className="w-5 h-5 relative">
              <div className="w-3.5 h-4 bg-gradient-to-t from-rose-600 via-pink-500 to-rose-200 rounded-full mx-auto animate-flame-flicker" />
              <div className="w-6 h-2.5 bg-gradient-to-r from-stone-700 to-stone-900 rounded-b-full -mt-1 mx-auto border-t border-rose-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg md:text-xl text-[var(--theme-text)] tracking-wide">
                தீபாவளி திருநாள்
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] font-semibold border border-[var(--theme-border)]">
                Memories
              </span>
            </div>
            <p className="text-[11px] text-[var(--theme-text-muted)] font-medium hidden sm:block">
              My Hometown Celebration Journey & Real Photos
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-black/35 p-1.5 rounded-2xl border border-[var(--theme-border)]">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  sound.playChime();
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold shadow-md scale-102'
                    : link.id === 'day3'
                    ? 'text-[var(--theme-accent)] bg-black/25 hover:bg-black/50 border border-[var(--theme-border)] font-semibold'
                    : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] hover:bg-white/5'
                }`}
              >
                <div>{link.label}</div>
                <div className={`text-[10px] ${isActive ? 'text-white/90' : 'opacity-70'}`}>
                  {link.sub}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Global Action Toggles (Theme Switcher, Sound & Rain) */}
        <div className="flex items-center gap-2">
          {/* Quick Theme Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              title="Change Dark Palette"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-black/40 border border-[var(--theme-border)] text-[var(--theme-text)] hover:border-[var(--theme-border-hover)] transition-all shadow-sm"
            >
              <Palette className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              <span className="hidden md:inline capitalize">{currentTheme}</span>
            </button>

            {themeDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-52 rounded-2xl border border-[var(--theme-border)] p-2 shadow-2xl z-50 space-y-1 backdrop-blur-xl"
                style={{ backgroundColor: 'var(--theme-surface)' }}
              >
                <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--theme-accent)]">
                  Select Dark Palette:
                </div>
                {themeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setCurrentTheme(opt.id);
                      setThemeDropdownOpen(false);
                      sound.playChime();
                    }}
                    className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-xs text-left transition-all ${
                      currentTheme === opt.id
                        ? 'bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] font-bold'
                        : 'text-stone-300 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-base">{opt.icon}</span>
                    <div>
                      <div className="font-semibold">{opt.name}</div>
                      <div className="text-[10px] text-stone-400">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Direct Button to Real Photos */}
          <button
            onClick={() => {
              setActivePage('day3');
              sound.playChime();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] hover:scale-102 transition-all shadow-sm"
          >
            <Camera className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            <span>My Real Photos</span>
          </button>

          {/* Rain Ambience Toggle */}
          <button
            onClick={toggleRain}
            title={isRainActive ? 'Rain effect ON (Click to turn off)' : 'Rain effect OFF (Click to turn on)'}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
              isRainActive
                ? 'bg-sky-500/20 border-sky-400/50 text-sky-200 shadow-sm'
                : 'bg-black/30 border-[var(--theme-border)] text-stone-400 hover:text-stone-200'
            }`}
          >
            <CloudRain className={`w-4 h-4 ${isRainActive ? 'text-sky-300 animate-bounce' : ''}`} />
            <span className="hidden md:inline">{isRainActive ? 'Rain: On' : 'Rain'}</span>
          </button>

          {/* Sound Mute/Unmute Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? 'Audio Muted' : 'Audio Active'}
            className={`p-2.5 rounded-xl border text-xs font-semibold transition-all ${
              !isMuted
                ? 'bg-[var(--theme-accent-soft)] border-[var(--theme-border)] text-[var(--theme-accent)] shadow-sm'
                : 'bg-black/30 border-[var(--theme-border)] text-stone-500 hover:text-stone-300'
            }`}
          >
            {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-black/40 border border-[var(--theme-border)] text-stone-300 hover:text-[var(--theme-accent)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-b border-[var(--theme-border)] px-4 pt-3 pb-5 space-y-2 shadow-2xl"
          style={{ backgroundColor: 'var(--theme-nav)' }}
        >
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setMobileMenuOpen(false);
                  sound.playChime();
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold'
                    : 'bg-black/30 text-stone-200 border border-[var(--theme-border)]'
                }`}
              >
                <div>
                  <div className="font-semibold">{link.label}</div>
                  <div className={`text-xs ${isActive ? 'text-white/90' : 'text-stone-400'}`}>
                    {link.sub}
                  </div>
                </div>
                <Flame className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[var(--theme-accent)]'}`} />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
