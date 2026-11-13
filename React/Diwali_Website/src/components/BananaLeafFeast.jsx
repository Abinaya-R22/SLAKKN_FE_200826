import React, { useState } from 'react';
import { Utensils, Heart } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function BananaLeafFeast() {
  const [activeItem, setActiveItem] = useState(0);

  const feastItems = [
    {
      id: 'sambar',
      name: 'Amavasai Murungakkai Sambar',
      tamil: 'முருங்கைக்காய் சாம்பார்',
      category: 'Main Dish',
      icon: '🍲',
      badge: '100% Pure Veg',
      desc: 'Authentic festival-style drumstick & shallot sambar simmered in freshly ground roasted spices, toor dal, and coconut paste. Thick, piping hot, and full of hometown aroma!',
      memory: 'Because it was Amavasai, our home strictly prepared pure vegetarian food. Nothing compares to mom’s freshly simmered sambar poured generously over steaming hot rice!'
    },
    {
      id: 'rice-ghee',
      name: 'Steaming Rice & Paruppu Ghee',
      tamil: 'சுடச்சுட சாதம் & பருப்பு நெய்',
      category: 'First Course',
      icon: '🍚',
      badge: 'Hometown Ghee',
      desc: 'Fluffy ponni rice served right on the center of the fresh green banana leaf, topped with thick mashed dal and homemade melted golden cow ghee.',
      memory: 'The first mouthful of hot rice, mashed dal, and dripping homemade ghee on a banana leaf was pure comfort after traveling on the train.'
    },
    {
      id: 'vadai',
      name: 'Crispy Medu / Paruppu Vadai',
      tamil: 'மொறு மொறு பருப்பு வடை',
      category: 'Festive Snack',
      icon: '🧆',
      badge: 'Freshly Fried',
      desc: 'Golden-brown, crunchy on the outside and soft inside with chopped green chillies, curry leaves, and ginger.',
      memory: 'Mom made a mountain of vadai fresh from the iron kadai while it was gently drizzling outside.'
    },
    {
      id: 'poriyal',
      name: 'Vazhaikkai & Urulaikizhangu Varuval',
      tamil: 'வாழைக்காய் & உருளைக்கிழங்கு வறுவல்',
      category: 'Side Delicacy',
      icon: '🥔',
      badge: 'Traditional Amavasai',
      desc: 'Traditional plantain (vazhaikkai) fry and spiced crispy potato roast seasoned with mustard seeds, curry leaves, and roasted red chillies.',
      memory: 'Vazhaikkai is an essential Amavasai traditional vegetable, paired with crispy potato fry that we kept asking for second servings of!'
    },
    {
      id: 'rasam',
      name: 'Milagu Jeera Festive Rasam',
      tamil: 'மிளகு சீரக ரசம்',
      category: 'Digestive Elixir',
      icon: '🥣',
      badge: 'Aromatic & Soothing',
      desc: 'Pungent black pepper, roasted cumin seeds, garlic, crushed country tomatoes, and fresh coriander leaves.',
      memory: 'Hot, tangy, and peppery — perfect comfort for a rainy festival afternoon.'
    },
    {
      id: 'payasam',
      name: 'Semiya & Javvarisi Paal Payasam',
      tamil: 'சேமியா பால் பாயாசம்',
      category: 'Sweet Finale',
      icon: '🍨',
      badge: 'Cardamom & Cashew',
      desc: 'Rich, creamy milk pudding slow-cooked with vermicelli, sago pearls, golden fried cashews, raisins, and aromatic green cardamom.',
      memory: 'Sipping warm payasam off the tip of the banana leaf was the sweetest ending to the grand Diwali Amavasai lunch.'
    },
    {
      id: 'appalam',
      name: 'Crunchy Urad Appalam',
      tamil: 'உளுந்து அப்பளம்',
      category: 'Crunch Companion',
      icon: '🍘',
      badge: 'Extra Crispy',
      desc: 'Puffed, giant golden papad crushed over sambar rice for that essential crunchy symphony with every bite.',
      memory: 'Crushing the appalam over the sambar rice with laughter around the family dining table.'
    }
  ];

  return (
    <div
      className="rounded-3xl p-6 md:p-8 border border-[var(--theme-border)] shadow-2xl relative overflow-hidden transition-colors"
      style={{ backgroundColor: 'var(--theme-surface)' }}
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-accent-soft)] text-[var(--theme-accent)] border border-[var(--theme-border)] text-xs font-semibold mb-3">
          <Utensils className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
          <span>Amavasai Special Tradition • 100% Pure Vegetarian</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--theme-text)]">
          The Grand Banana Leaf Feast (தலைவாழை இலை விருந்து)
        </h3>
        <p className="text-sm text-[var(--theme-text-muted)] mt-2 leading-relaxed font-light">
          On Diwali day, because it fell on auspicious <strong className="text-[var(--theme-accent)] font-semibold">Amavasai</strong>, no non-vegetarian dishes were cooked. Mom prepared an extraordinary traditional vegetarian banquet served on fresh banana leaves. Click on any dish to explore!
        </p>
      </div>

      {/* Interactive Banana Leaf Representation */}
      <div className="relative bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-800 rounded-2xl p-5 md:p-8 border-2 border-emerald-500/40 shadow-inner my-6">
        {/* Leaf central stem vein */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-900/60 -translate-y-1/2 pointer-events-none" />

        {/* Dish selector chips on leaf */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
          {feastItems.map((item, idx) => {
            const isSelected = activeItem === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(idx);
                  sound.playChime();
                }}
                className={`group flex flex-col items-center text-center p-3 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-white text-emerald-900 font-bold scale-105 shadow-lg shadow-white/30 ring-2 ring-rose-400'
                    : 'bg-emerald-950/70 hover:bg-emerald-900/90 text-emerald-100 border border-emerald-500/30'
                }`}
              >
                <span className="text-2xl mb-1 group-hover:scale-125 transition-transform">
                  {item.icon}
                </span>
                <span className="text-xs font-semibold line-clamp-1">
                  {item.name.split(' ')[0]}
                </span>
                <span className={`text-[10px] mt-0.5 line-clamp-1 ${isSelected ? 'text-emerald-700' : 'text-emerald-300/80'}`}>
                  {item.tamil.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Item Detail Card */}
      {feastItems[activeItem] && (
        <div
          className="border border-[var(--theme-border)] rounded-2xl p-5 md:p-6 shadow-xl transition-all"
          style={{ backgroundColor: 'var(--theme-card)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 border-b border-[var(--theme-border)] pb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 rounded-xl bg-black/40 border border-[var(--theme-border)]">
                {feastItems[activeItem].icon}
              </span>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-[var(--theme-text)]">
                  {feastItems[activeItem].name}
                </h4>
                <p className="text-xs text-[var(--theme-accent)] font-medium font-serif">
                  {feastItems[activeItem].tamil}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {feastItems[activeItem].badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs bg-black/40 text-stone-300 border border-[var(--theme-border)]">
                {feastItems[activeItem].category}
              </span>
            </div>
          </div>

          <p className="text-sm text-[var(--theme-text-muted)] mb-4 leading-relaxed font-light">
            {feastItems[activeItem].desc}
          </p>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/30 border border-[var(--theme-border)]">
            <Heart className="w-5 h-5 text-[var(--theme-accent)] shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-[var(--theme-accent)] italic font-handwriting text-base">
              "{feastItems[activeItem].memory}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
