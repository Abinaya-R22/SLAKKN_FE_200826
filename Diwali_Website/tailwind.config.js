/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          bg: '#130914',
          surface: '#1E0E21',
          card: '#27122B',
          cardHover: '#331838',
          border: 'rgba(245, 158, 11, 0.22)',
          accent: '#F59E0B',
          rose: '#E11D48',
        },
        emeraldDeep: {
          bg: '#071514',
          surface: '#0C2120',
          card: '#12302E',
          cardHover: '#183F3C',
          border: 'rgba(52, 211, 153, 0.22)',
          accent: '#FCD34D',
          mint: '#10B981',
        },
        twilightDeep: {
          bg: '#0B0F1F',
          surface: '#121933',
          card: '#1A2448',
          cardHover: '#233060',
          border: 'rgba(192, 132, 252, 0.22)',
          accent: '#FBBF24',
          indigo: '#818CF8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive', 'sans-serif'],
      },
      animation: {
        'flame-flicker': 'flicker 1.8s ease-in-out infinite alternate',
        'sparkle-float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.6))' },
          '50%': { transform: 'scale(1.08) rotate(2deg)', filter: 'drop-shadow(0 0 15px rgba(234, 88, 12, 0.7))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      boxShadow: {
        'jewel-soft': '0 8px 30px rgba(0, 0, 0, 0.45)',
        'jewel-glow': '0 0 25px rgba(245, 158, 11, 0.2)',
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.2)',
      }
    },
  },
  plugins: [],
}
