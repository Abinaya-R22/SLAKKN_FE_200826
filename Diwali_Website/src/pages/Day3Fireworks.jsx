import React, { useState } from 'react';
import { Sparkles, Flame, Eye, Heart, Camera, ArrowRight } from 'lucide-react';
import CrackerSimulator from '../components/CrackerSimulator';
import PhotoLightbox from '../components/PhotoLightbox';
import { sound } from '../utils/soundEffects';

// Direct static imports to guarantee 100% Vite bundling
import flowerpotImg from '../assets/photos/flowerpot_fountain.jpg';
import goldenFountainImg from '../assets/photos/golden_fountain.jpg';
import sparklerBurstImg from '../assets/photos/sparkler_burst.jpg';

export default function Day3Fireworks({ onGoToPlayground }) {
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  const realPhotos = [
    {
      id: 'flowerpot-fountain',
      src: flowerpotImg,
      title: 'Grand Flower Pot Burst on the Courtyard Platform',
      tag: 'My Real Uploaded Photo • பூந்தொட்டி (Anaar)',
      time: 'Diwali Night • Hometown Courtyard',
      description: 'The real photograph I captured in our courtyard! A spectacular flower pot placed on our stone platform in the courtyard at night. As soon as the wick ignited, it erupted into 3 vibrant fiery fountains spraying sparkling embers high into the air, surrounded by dramatic smoke and festive illumination.',
      storyNote: 'Akka ponnu and I cheered so loudly when this three-way fountain ignited! It illuminated our entire backyard beautifully.',
      badge: 'Real Photo #1'
    },
    {
      id: 'golden-fountain',
      src: goldenFountainImg,
      title: 'Towering Vertical Fountain Spire',
      tag: 'My Real Uploaded Photo • Rainy Cracker',
      time: 'Diwali Night • Cool Damp Soil',
      description: 'The real photograph of an intense, soaring pillar of fiery sparks bursting upward towards the night sky. The sheer brightness lit up the damp soil beneath, creating a dazzling rain of molten sparks.',
      storyNote: 'The air was moist from the rain earlier, making the crackling sound and reflections against the ground even more mesmerizing!',
      badge: 'Real Photo #2 (Rainy Night)'
    },
    {
      id: 'sparkler-burst',
      src: sparklerBurstImg,
      title: 'Handheld Sparkler (கம்பி மத்தாப்பு)',
      tag: 'My Real Uploaded Photo • Kambi Mathappu',
      time: 'Diwali Night with Akka Ponnu',
      description: 'The real close-up snapshot of a burning handheld sparkler firing hundreds of multi-directional stars and trails. Holding these sparklers with my akka ponnu brought back the purest childhood smiles and joy.',
      storyNote: 'We waved the sparklers in circles to write glowing shapes in the dark air. Truly unforgettable family memories!',
      badge: 'Real Photo #3'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header Banner in Dark Jewel Elegance */}
      <section
        className="relative rounded-3xl overflow-hidden border border-[var(--theme-border)] p-6 sm:p-10 md:p-14 shadow-2xl transition-all"
        style={{ backgroundColor: 'var(--theme-card)' }}
      >
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold">
            <Flame className="w-4 h-4 text-[var(--theme-accent)]" />
            <span>Chapter 3 • Night Fireworks & Cherished Memories</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[var(--theme-text)] tracking-tight leading-tight">
            Dazzling Night Crackers with Akka Ponnu
          </h1>

          <p className="text-base sm:text-lg text-[var(--theme-text-muted)] leading-relaxed font-light">
            When night fell, the courtyard turned into a glowing wonderland! Bursting flower pots and sparklers together with my <strong className="text-[var(--theme-accent)] font-semibold">akka ponnu</strong> was the absolute highlight of the celebration. Here are the authentic real-time photographs I uploaded from our celebration!
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => sound.playCrackerSound('flowerpot')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Simulate Flowerpot Sound 💥</span>
            </button>
            <button
              onClick={onGoToPlayground}
              className="px-5 py-3 rounded-2xl bg-black/40 hover:bg-black/60 text-[var(--theme-accent)] border border-[var(--theme-border)] font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Full Cracker Playground</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Real Photos Gallery Showcase */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold">
            <Camera className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            <span>My Real Photo Album</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[var(--theme-text)]">
            Real Fireworks Captured in My Courtyard
          </h2>
          <p className="text-sm text-[var(--theme-text-muted)] font-light">
            These are my actual photographs uploaded from Diwali night — click on any photo to zoom in to full resolution!
          </p>
        </div>

        {/* 3 Real Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => {
                setActivePhotoModal(photo);
                sound.playChime();
              }}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-[var(--theme-border)] hover:border-[var(--theme-border-hover)] transition-all duration-300 hover:-translate-y-2 shadow-2xl flex flex-col"
              style={{ backgroundColor: 'var(--theme-card)' }}
            >
              {/* Photo Image with overlay */}
              <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-black">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85" />

                {/* Badge top */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-[var(--theme-accent)] flex items-center gap-1.5 shadow-md border border-[var(--theme-border)]">
                  <Sparkles className="w-3 h-3 text-[var(--theme-accent)]" />
                  <span>{photo.badge}</span>
                </div>

                {/* Click to zoom hint */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[var(--theme-accent)] text-white font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Zoom Full Res</span>
                </div>
              </div>

              {/* Text info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[11px] font-semibold text-[var(--theme-accent)] uppercase tracking-wider block mb-1">
                    {photo.tag}
                  </span>
                  <h3 className="font-serif font-bold text-[var(--theme-text)] text-base group-hover:text-[var(--theme-accent)] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[var(--theme-text-muted)] mt-2 line-clamp-3 leading-relaxed font-light">
                    {photo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--theme-border)] text-xs text-[var(--theme-accent)] font-handwriting text-base">
                  "{photo.storyNote}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Cracker Burst Simulator */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            <span>Interactive Recreation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[var(--theme-text)]">
            Relive the Cracker Bursting Fun Right Here!
          </h2>
          <p className="text-sm text-[var(--theme-text-muted)] font-light">
            Click or tap anywhere on the canvas below to burst your own Flower Pots (just like in my photo), handheld sparklers, or spinning chakkars!
          </p>
        </div>

        <CrackerSimulator height="h-[420px]" />
      </section>

      {/* Heartwarming Wrap-up Reflection */}
      <section
        className="p-8 sm:p-10 rounded-3xl border border-[var(--theme-border)] text-center max-w-3xl mx-auto space-y-4 shadow-2xl"
        style={{ backgroundColor: 'var(--theme-card)' }}
      >
        <Heart className="w-8 h-8 text-rose-500 mx-auto animate-pulse" />
        <h3 className="text-2xl font-serif font-bold text-[var(--theme-text)]">
          Cherished Diwali Memories That Last a Lifetime
        </h3>
        <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
          From the train ride to my native place, mom’s lovingly prepared sweets and murukku, the rainy afternoons, the traditional head bath, the banana leaf Amavasai feast, watching movie releases on TV, to lighting fireworks with akka ponnu — this Diwali was a celebration of family, gratitude, and timeless traditions.
        </p>
        <div className="pt-2">
          <span className="font-handwriting text-xl text-[var(--theme-accent)]">
            ~ Forever etched in my heart! 🪔✨
          </span>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhotoModal && (
        <PhotoLightbox
          photo={activePhotoModal}
          onClose={() => setActivePhotoModal(null)}
        />
      )}
    </div>
  );
}
