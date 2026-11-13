import React, { useEffect } from 'react';
import { X, Sparkles, Heart } from 'lucide-react';

export default function PhotoLightbox({ photo, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0D1122] rounded-3xl overflow-hidden border border-[var(--theme-border)] shadow-2xl shadow-[var(--theme-glow)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-[var(--theme-accent)] hover:text-white border border-[var(--theme-border)] transition-all"
          aria-label="Close photo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-auto max-h-[70vh] object-contain select-none"
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[var(--theme-accent)] text-white font-bold text-xs tracking-wide shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Memory Capture</span>
          </div>
        </div>

        {/* Photo Story Caption */}
        <div className="p-6 bg-gradient-to-t from-[#090C19] to-[#0D1122] border-t border-[var(--theme-border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold font-serif text-[var(--theme-text)]">
              {photo.title}
            </h3>
            <span className="text-xs px-3 py-1 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] w-fit">
              {photo.time || 'Diwali Night Celebration'}
            </span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-3">
            {photo.description}
          </p>
          {photo.storyNote && (
            <div className="flex items-center gap-2 text-xs text-[var(--theme-accent)] font-handwriting text-base">
              <Heart className="w-4 h-4 text-rose-400 shrink-0" />
              <span>"{photo.storyNote}"</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
