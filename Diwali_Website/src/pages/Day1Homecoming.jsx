import React, { useState } from 'react';
import { Train, CloudRain, Sparkles, Moon, ArrowRight, Utensils, Camera, Eye } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import PhotoLightbox from '../components/PhotoLightbox';

// Direct static imports to guarantee 100% Vite bundling
import flowerpotImg from '../assets/photos/flowerpot_fountain.jpg';
import goldenFountainImg from '../assets/photos/golden_fountain.jpg';
import sparklerBurstImg from '../assets/photos/sparkler_burst.jpg';
import trainImg from '../assets/photos/train_journey.jpg';
import sweetsImg from '../assets/photos/homemade_sweets.jpg';

export default function Day1Homecoming({ onNextPage, onGoToGallery }) {
  const [selectedSweet, setSelectedSweet] = useState(0);
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  const realPhotos = [
    {
      id: 'flowerpot-real',
      src: flowerpotImg,
      title: 'Courtyard Stone Platform Flower Pot Burst',
      tag: 'My Real Uploaded Photo • பூந்தொட்டி',
      time: 'Courtyard Night Fireworks',
      description: 'The real photo I took in our courtyard! Erupting with three intense fountain jets of fiery sparks and smoke against the night trees.',
      storyNote: 'Placed right on the stone steps platform in our native house courtyard. Akka ponnu and I cheered as it erupted!',
      badge: 'Real Photo #1'
    },
    {
      id: 'golden-fountain-real',
      src: goldenFountainImg,
      title: 'Rainy Night Golden Vertical Fountain Spire',
      tag: 'My Real Uploaded Photo • Rainy Cracker',
      time: 'Rainy Night • Damp Ground',
      description: 'The real photo showing the vertical fountain shooting fiery sparks high into the night. Look closely at the ground — it was damp and cool from the continuous rain!',
      storyNote: 'It was rainy outside! The rain made the cool courtyard smell like wet earth and fireworks.',
      badge: 'Real Photo #2 (Rainy Night)'
    },
    {
      id: 'sparkler-real',
      src: sparklerBurstImg,
      title: 'Handheld Sparkler (கம்பி மத்தாப்பு)',
      tag: 'My Real Uploaded Photo • Sparkler Stars',
      time: 'Night Before Diwali with Akka Ponnu',
      description: 'The real close-up photo of the glowing handheld sparkler bursting hundreds of radiant star rays into the night air.',
      storyNote: 'Holding this sparkler with my akka ponnu the night before Diwali, laughing and creating glowing patterns!',
      badge: 'Real Photo #3'
    }
  ];

  const homemadeSweets = [
    {
      name: 'Kai Murukku & Thenkuzhal',
      tamil: 'கை முறுக்கு & தேன்குழல்',
      icon: '🥨',
      flavor: 'Super Crunchy & Buttery',
      desc: 'Hand-pressed spirals made with roasted urad dal flour, rice flour, and fragrant cumin and asafoetida. Freshly deep-fried in hot oil by mom until crisp perfection.',
      anecdote: 'I couldn’t stop snacking on these crispy murukkus straight from the steel dabba as soon as I stepped inside the house!'
    },
    {
      name: 'Traditional Adhirasam',
      tamil: 'அதிரசம்',
      icon: '🥮',
      flavor: 'Jaggery & Cardamom Sweetness',
      desc: 'The queen of Tamil Diwali sweets made from fermented raw rice dough infused with deep country jaggery (vellam), crushed cardamom, and dry ginger.',
      anecdote: 'Soft on the inside with a subtle chewy crust, made with pure festive love by mom.'
    },
    {
      name: 'Melt-in-mouth Mysore Pak',
      tamil: 'நெய் மைசூர் பாக்',
      icon: '🧈',
      flavor: 'Rich Pure Ghee & Besan',
      desc: 'Cubes of roasted gram flour bathed in hot desi ghee and caramelized sugar syrup. Dissolves instantly on your tongue.',
      anecdote: 'The entire house was filled with the irresistible scent of boiling pure ghee and roasting besan.'
    },
    {
      name: 'Spicy Diwali Mixture',
      tamil: 'தீபாவளி கார மிக்சர்',
      icon: '🌶️',
      flavor: 'Spicy, Savory & Nutty',
      desc: 'Crisp sev, boondi, roasted peanuts, fried curry leaves, cashews, and garlic pods tossed in chili powder and sea salt.',
      anecdote: 'The perfect companion while having hot evening filter coffee on a rainy afternoon.'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Banner in Dark Jewel Rose Crimson */}
      <section
        className="relative rounded-3xl overflow-hidden border border-[var(--theme-border)] p-6 sm:p-10 md:p-14 shadow-2xl transition-all"
        style={{ backgroundColor: 'var(--theme-card)' }}
      >
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold">
            <Train className="w-4 h-4 text-[var(--theme-accent)]" />
            <span>Chapter 1 • Journey to Native Place & Homecoming</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[var(--theme-text)] tracking-tight leading-tight">
            The Train Journey & Mom’s Heavenly Kitchen
          </h1>

          <p className="text-base sm:text-lg text-[var(--theme-text-muted)] leading-relaxed font-light">
            Nothing matches the feeling of boarding the train to your native place for Diwali. Leaving the city rush behind, hearing the rhythmic tracks, smelling the countryside rain, and arriving at the doorstep to mom’s warm hugs and endless plates of homemade sweets.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => sound.playCrackerSound('sparkler')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Burst a Sparkle!</span>
            </button>
            <button
              onClick={onNextPage}
              className="px-5 py-3 rounded-2xl bg-black/40 hover:bg-black/60 text-[var(--theme-accent)] border border-[var(--theme-border)] font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Go to Day 2: Amavasai Feast</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* PROMINENT REAL PHOTOS SECTION */}
      <section
        className="p-6 sm:p-8 rounded-3xl border border-[var(--theme-border)] shadow-2xl relative space-y-6"
        style={{ backgroundColor: 'var(--theme-surface)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--theme-border)] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)]">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--theme-text)]">
                  My Real-Time Diwali Photos
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/40">
                  Uploaded By Me
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] mt-0.5">
                The actual live photographs I captured while bursting crackers with my akka ponnu!
              </p>
            </div>
          </div>
          <button
            onClick={onGoToGallery}
            className="px-4 py-2 rounded-xl bg-[var(--theme-accent-soft)] hover:opacity-90 text-[var(--theme-accent)] text-xs font-semibold border border-[var(--theme-border)] flex items-center gap-2 transition-all self-start sm:self-auto"
          >
            <span>Full HD Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Real Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {realPhotos.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                setActivePhotoModal(p);
                sound.playChime();
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-[var(--theme-border)] hover:border-[var(--theme-border-hover)] bg-black/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] bg-black overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-[var(--theme-accent)] flex items-center gap-1 shadow-md border border-[var(--theme-border)]">
                  <Sparkles className="w-3 h-3 text-[var(--theme-accent)]" />
                  <span>{p.badge}</span>
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[var(--theme-accent)] text-white font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Zoom</span>
                </div>
              </div>

              {/* Caption */}
              <div
                className="p-4 flex-1 flex flex-col justify-between"
                style={{ backgroundColor: 'var(--theme-card)' }}
              >
                <div>
                  <span className="text-[10px] font-semibold text-[var(--theme-accent)] uppercase tracking-wider block mb-1">
                    {p.time}
                  </span>
                  <h4 className="font-serif font-bold text-[var(--theme-text)] text-sm group-hover:text-[var(--theme-accent)] transition-colors line-clamp-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[var(--theme-text-muted)] mt-1 line-clamp-2 leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
                <div className="pt-2.5 mt-2 border-t border-[var(--theme-border)] text-[11px] text-[var(--theme-accent)] italic font-handwriting text-sm">
                  "{p.storyNote}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section 1: The Train Ride */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-medium">
            <Train className="w-3.5 h-3.5" />
            <span>The Nostalgic Express</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--theme-text)]">
            Window Seat, Rhythmic Rails & Hometown Anticipation
          </h2>
          <p className="text-[var(--theme-text-muted)] text-sm sm:text-base leading-relaxed font-light">
            I boarded the train heading back to my native town with a heart full of excitement. Gazing out of the train window, the scenery transformed into sprawling emerald green paddy fields, coconut groves swaying under the monsoon breeze, and gentle rain droplets tracing lines along the glass pane.
          </p>
          <p className="text-[var(--theme-text-muted)] text-sm sm:text-base leading-relaxed font-light">
            Every station brought the calls of hot tea vendors and passengers eagerly sharing festive greetings. That unique train vibe always feels like traveling back into pure childhood happiness.
          </p>

          <div
            className="p-4 rounded-2xl border border-[var(--theme-border)] flex items-center gap-3 shadow-md"
            style={{ backgroundColor: 'var(--theme-card)' }}
          >
            <CloudRain className="w-6 h-6 text-sky-400 shrink-0" />
            <p className="text-xs text-sky-200 font-light">
              <strong>Monsoon Arrival:</strong> It was raining softly throughout the day, cooling the village air and making the festival feel cozy and poetic.
            </p>
          </div>
        </div>

        {/* Visual Graphic Card: Train to Hometown with Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-[var(--theme-border)] bg-black/60 shadow-2xl aspect-[16/10] sm:aspect-[16/11]">
          <img
            src={trainImg}
            alt="Scenic Train Ride to Native Place"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-sky-500/80 text-white font-bold mb-1.5 inline-block shadow-sm">
              Monsoon Train View 🌧️
            </span>
            <h3 className="text-lg font-serif font-bold text-white">
              Heading to Native Place
            </h3>
            <p className="text-xs text-stone-300 font-light line-clamp-2">
              Lush green monsoon fields, mist and rain outside the window seat.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Mom's Delights & Homemade Sweets */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold">
            <Utensils className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            <span>Mom’s Special Handmade Platter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[var(--theme-text)]">
            Ate Lots of Homemade Sweets & Crispy Murukku
          </h2>
          <p className="text-sm text-[var(--theme-text-muted)] font-light">
            As soon as I reached home, the aroma of hot oil, jaggery, cardamom, and fresh ghee welcomed me. Mom had prepared steel containers full of festive savories and sweets! Click each to taste the memory:
          </p>
        </div>

        {/* Mom's Sweets Platter Photo Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[var(--theme-border)] aspect-[21/9] max-h-80 w-full shadow-2xl">
          <img
            src={sweetsImg}
            alt="Mom's Homemade Diwali Sweets and Murukku"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[var(--theme-accent)] text-white font-bold uppercase tracking-wider mb-1 inline-block shadow-sm">
                Fresh From Mom’s Kitchen
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Golden Kai Murukku, Adhirasam & Pure Ghee Mysore Pak
              </h3>
            </div>
            <span className="text-xs text-rose-200 font-handwriting text-base">
              "Endless dabbas of home made love!"
            </span>
          </div>
        </div>

        {/* Interactive Sweets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homemadeSweets.map((sweet, idx) => {
            const isSelected = selectedSweet === idx;
            return (
              <div
                key={sweet.name}
                onClick={() => {
                  setSelectedSweet(idx);
                  sound.playChime();
                }}
                className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${
                  isSelected
                    ? 'border-[var(--theme-accent)] shadow-xl scale-102 ring-1 ring-[var(--theme-accent)]'
                    : 'border-[var(--theme-border)] hover:border-[var(--theme-border-hover)]'
                }`}
                style={{ backgroundColor: 'var(--theme-card)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-2 rounded-xl bg-black/40 border border-[var(--theme-border)]">
                    {sweet.icon}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] font-semibold">
                    {sweet.flavor}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--theme-text)] text-base mb-0.5">
                  {sweet.name}
                </h3>
                <p className="text-xs text-[var(--theme-accent)] font-serif mb-2">
                  {sweet.tamil}
                </p>
                <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed mb-3 font-light">
                  {sweet.desc}
                </p>
                <div className="text-[11px] text-[var(--theme-accent)] italic font-handwriting text-sm pt-2 border-t border-[var(--theme-border)]">
                  "{sweet.anecdote}"
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Narrative Section 3 & 4: Rainy Sleep & Night-before Crackers with Akka Ponnu */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Rainy Sleep */}
        <div
          className="p-6 md:p-8 rounded-3xl border border-[var(--theme-border)] relative overflow-hidden space-y-4 shadow-xl"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold">
            <Moon className="w-4 h-4 text-sky-400" />
            <span>Cozy Rest & Rainy Ambiance</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--theme-text)]">
            Full Stomach, Rainy Drizzle & Heavenly Sleep
          </h3>
          <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
            After the tiring train travel and indulging in endless servings of mom's fresh hot food and sweets, I fell into the deepest, most relaxing afternoon sleep. Outside, the raindrops tapped gently against the windows and roof tiles. That peaceful sleep in your childhood bedroom is pure luxury!
          </p>
          <div className="flex items-center gap-2 text-xs text-sky-300 italic font-handwriting text-base">
            <span>🌧️ "Nothing beats falling asleep to the sound of rain after mom's food."</span>
          </div>
        </div>

        {/* Night Before Crackers with Akka Ponnu */}
        <div
          className="p-6 md:p-8 rounded-3xl border border-[var(--theme-border)] relative overflow-hidden space-y-4 shadow-xl"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="flex items-center gap-2 text-[var(--theme-accent)] text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Pre-Diwali Night Fun with Akka Ponnu</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--theme-text)]">
            Night Before: Bursting Crackers with Akka Ponnu
          </h3>
          <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] leading-relaxed font-light">
            We couldn't wait until Diwali morning! On the night before Diwali, my <strong className="text-[var(--theme-accent)]">akka ponnu (niece)</strong> and I opened up the first cracker boxes. We lit kambi mathappu (sparklers), spun ground chakkars in the courtyard, giggled, took photos, and shared so much joy!
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => sound.playCrackerSound('burst')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test Cracker Sound 💥</span>
            </button>
            <button
              onClick={onGoToGallery}
              className="px-4 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-[var(--theme-accent)] text-xs font-semibold border border-[var(--theme-border)] flex items-center gap-2 transition-all shadow-sm"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>See Our Cracker Photos</span>
            </button>
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
