import React, { useState } from 'react';
import { Sparkles, Sun, Droplets, Tv, ArrowRight, Heart, Camera, Eye } from 'lucide-react';
import BananaLeafFeast from '../components/BananaLeafFeast';
import PhotoLightbox from '../components/PhotoLightbox';
import { sound } from '../utils/soundEffects';

// Direct static imports to guarantee 100% Vite bundling
import goldenFountainImg from '../assets/photos/golden_fountain.jpg';
import bananaLeafImg from '../assets/photos/banana_leaf_feast.jpg';

export default function Day2Amavasai({ onNextPage, onGoToGallery }) {
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  const realFountainPhoto = {
    id: 'golden-fountain',
    src: goldenFountainImg,
    title: 'Rainy Night Vertical Fountain Spire',
    tag: 'My Real Uploaded Photo • Rainy Cracker',
    time: 'Rainy Outdoor Yard • Diwali Cracker Burst',
    description: 'A dazzling vertical fountain cracker erupting tall into the cloudy night sky. Look at the ground: it was damp and cool from the continuous rain earlier! The glittering embers danced against the damp sand, creating a breathtaking luminous glow.',
    storyNote: 'It was rainy on Diwali day! But the rain didn’t stop us — the damp courtyard made the cracker reflections even more stunning!',
    badge: 'Real Rainy Day Cracker'
  };

  const morningRituals = [
    {
      title: 'Traditional Ganga Snanam (கங்கா ஸ்நானம்)',
      time: '4:30 AM — Before Sunrise',
      icon: '🌿',
      tag: 'Sacred Head Bath',
      desc: 'Waking up early in the cool dawn air. Mom and elders applied warm sesame oil (nallennai) infused with peppercorns and herbs onto the crown of our heads, followed by a steaming hot water herbal bath. It revitalized our entire spirit!'
    },
    {
      title: 'Wearing New Festival Dresses (புத்தாடை)',
      time: '6:00 AM — Morning Freshness',
      icon: '✨',
      tag: 'Pattu & New Outfits',
      desc: 'Dressing in pristine new clothes placed with flowers and turmeric before the family shrine. Everyone took blessings from elders, exchanged sweet smiles, and felt the true celebratory pride of Diwali morning.'
    },
    {
      title: 'Morning Crackers & Joyful Laughter',
      time: '6:30 AM — Dawn Crackers',
      icon: '🧨',
      tag: 'Festive Sparkles',
      desc: 'Stepping out into the chilly, misty morning yard to light the first long red crackers (ladi), bijili crackers, and flower pots. The smoke mingling with morning fog was magical!'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header Banner in Dark Jewel Glow */}
      <section
        className="relative rounded-3xl overflow-hidden border border-[var(--theme-border)] p-6 sm:p-10 md:p-14 shadow-2xl transition-all"
        style={{ backgroundColor: 'var(--theme-card)' }}
      >
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold">
            <Sun className="w-4 h-4 text-[var(--theme-accent)]" />
            <span>Chapter 2 • Auspicious Diwali Day & Amavasai</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[var(--theme-text)] tracking-tight leading-tight">
            Head Bath, Pure Veg Feast & TV Movie Marathon
          </h1>

          <p className="text-base sm:text-lg text-[var(--theme-text-muted)] leading-relaxed font-light">
            Diwali morning began with the sacred Ganga Snanam oil head bath and crisp new festive dresses. Since it coincided with <strong className="text-[var(--theme-accent)] font-semibold">Amavasai</strong>, our home strictly prepared an authentic, mouth-watering 100% vegetarian feast on fresh plantain leaves — followed by an afternoon of new movies on TV!
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => sound.playCrackerSound('burst')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Burst Morning Cracker!</span>
            </button>
            <button
              onClick={onNextPage}
              className="px-5 py-3 rounded-2xl bg-black/40 hover:bg-black/60 text-[var(--theme-accent)] border border-[var(--theme-border)] font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Go to Day 3: Night Fireworks Photos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Morning Ritual Cards */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold">
            <Droplets className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            <span>Sacred Dawn Traditions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[var(--theme-text)]">
            Early Morning Ganga Snanam & New Outfits
          </h2>
          <p className="text-sm text-[var(--theme-text-muted)] font-light">
            "கங்கா ஸ்நானம் ஆச்சா?" — The traditional Diwali greeting echoed through the house early at dawn!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {morningRituals.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl p-6 border border-[var(--theme-border)] hover:border-[var(--theme-border-hover)] transition-all space-y-4 hover:-translate-y-1 shadow-xl"
              style={{ backgroundColor: 'var(--theme-card)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl p-2.5 rounded-2xl bg-black/40 border border-[var(--theme-border)]">
                  {r.icon}
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-black/40 text-[var(--theme-accent)] font-medium border border-[var(--theme-border)]">
                  {r.time}
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--theme-accent)] uppercase tracking-wider block mb-1">
                  {r.tag}
                </span>
                <h3 className="font-serif font-bold text-[var(--theme-text)] text-lg">
                  {r.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Photo Spotlight: Rainy Weather & Vertical Fountain Cracker */}
      <section
        className="p-6 md:p-8 rounded-3xl border border-[var(--theme-border)] shadow-2xl relative space-y-6"
        style={{ backgroundColor: 'var(--theme-surface)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold">
              <Camera className="w-4 h-4 text-sky-400" />
              <span>Real Uploaded Photo • Rainy Day Fireworks</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--theme-text)]">
              Rain & Crackers: Fiery Sparks on Damp Ground
            </h3>
            <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
              It was rainy during our Diwali celebrations! In this real photo I captured, look at the soil beneath the fiery fountain — it was cool, dark, and damp from the continuous rain earlier.
            </p>
            <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
              The crackling sounds echoed crisply through the cool moisture in the night air, and the glittering embers sprayed upwards like a tree of pure light!
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => {
                  setActivePhotoModal(realFountainPhoto);
                  sound.playChime();
                }}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs shadow-md flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Zoom This Real Photo</span>
              </button>
              <button
                onClick={onGoToGallery}
                className="px-4 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-[var(--theme-accent)] text-xs font-semibold border border-[var(--theme-border)] flex items-center gap-2"
              >
                <span>View Full Photo Album</span>
              </button>
            </div>
          </div>

          {/* Real Photo Card */}
          <div
            onClick={() => {
              setActivePhotoModal(realFountainPhoto);
              sound.playChime();
            }}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-[var(--theme-border)] hover:border-[var(--theme-border-hover)] bg-black aspect-[3/4] max-h-96 w-full mx-auto relative shadow-2xl transition-all hover:scale-[1.01]"
          >
            <img
              src={realFountainPhoto.src}
              alt={realFountainPhoto.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85" />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[var(--theme-accent)] font-bold text-xs flex items-center gap-1.5 shadow-md border border-[var(--theme-border)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              <span>Real Photo Capture</span>
            </div>
            <div className="absolute bottom-3 left-4 right-4 text-left">
              <h4 className="font-serif font-bold text-white text-base">
                {realFountainPhoto.title}
              </h4>
              <p className="text-xs text-sky-200 mt-0.5">
                Notice the rain-dampened courtyard ground! 🌧️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Central Highlight: Amavasai Banana Leaf Feast */}
      <section className="space-y-6">
        {/* Feast Hero Photo Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[var(--theme-border)] aspect-[21/9] max-h-80 w-full shadow-2xl">
          <img
            src={bananaLeafImg}
            alt="Amavasai Traditional Pure Vegetarian Banana Leaf Feast"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-bold uppercase tracking-wider mb-1 inline-block shadow-sm">
                100% Pure Vegetarian Amavasai Feast
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Hot Steaming Rice, Sambar, Vadai, Appalam & Semiya Payasam
              </h3>
            </div>
            <span className="text-xs text-emerald-200 font-handwriting text-base">
              "No non-veg on Amavasai — pure festive perfection!"
            </span>
          </div>
        </div>

        <BananaLeafFeast />
      </section>

      {/* Afternoon: Watching Movies on TV & Rainy Snacking */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div
          className="lg:col-span-2 p-6 sm:p-8 rounded-3xl border border-[var(--theme-border)] space-y-4 shadow-xl"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--theme-accent)]">
            <Tv className="w-4 h-4 text-[var(--theme-accent)]" />
            <span>Afternoon Entertainment Tradition</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--theme-text)]">
            Diwali Special Movies on TV with Non-stop Murukku Snacking
          </h3>
          <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
            After the hearty Amavasai feast, the entire family relaxed in the hall. It was raining outside, creating the most comfortable atmosphere to watch newly released blockbuster Diwali special movies on TV!
          </p>
          <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
            With cups of tea and mom's endless supply of homemade murukku, adhirasam, and savory mixture circulating between everyone, we spent hours enjoying movies and laughing together.
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--theme-accent)] italic font-handwriting text-base pt-2">
            <Heart className="w-4 h-4 text-rose-500 shrink-0" />
            <span>"Rain tapping on the roof, TV on, murukku in hand — pure bliss!"</span>
          </div>
        </div>

        {/* TV Graphic Box */}
        <div
          className="p-6 rounded-3xl border border-[var(--theme-border)] text-center space-y-3 shadow-xl"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-black/40 border border-[var(--theme-border)] flex items-center justify-center text-3xl">
            📺
          </div>
          <h4 className="font-bold text-[var(--theme-text)] text-base">
            Diwali Special TV Premiere
          </h4>
          <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-light">
            Special festive release films, celebrity interviews, comedy tracks, and family celebrations broadcast all afternoon!
          </p>
          <div className="pt-2">
            <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
              Cozy Family Bonding 🍿
            </span>
          </div>
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
