/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the FURCIL logo
        gold: {
          DEFAULT: '#bf924d',  // logo gold ring / leaf
          light: '#d9b878',
          dark: '#8a6531',
        },
        // `ink` is the primary dark/brand colour — the logo's forest green
        ink: {
          DEFAULT: '#1c3025',  // logo forest-green field
          soft: '#264234',
          line: '#33513f',
        },
        forest: {
          DEFAULT: '#1c3025',
          light: '#264234',
          deep: '#132219',
        },
        sage: '#939f7d',       // logo wave
        cream: '#f9f0e3',      // logo letterform
        // Luxury landing palette (editorial / light theme)
        luxe: {
          bg: '#f7efe9',      // logo paper backdrop
          ink: '#1c3025',     // primary text = forest green
          gold: '#bf924d',    // accent = logo gold
          bronze: '#8a6531',  // secondary
          line: '#e7e1d8',    // hairline dividers
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.18)',
        glow: '0 0 30px rgba(191,146,77,0.30)',
        luxe: '0 24px 60px -20px rgba(17,17,17,0.22)',
        'luxe-sm': '0 12px 30px -12px rgba(17,17,17,0.18)',
      },
      borderRadius: {
        luxe: '24px',
        'luxe-lg': '30px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg,#132219 0%,#1c3025 55%,#264234 100%)',
        'gold-sheen': 'linear-gradient(120deg,#bf924d 0%,#d9b878 45%,#8a6531 100%)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.5s infinite',
        blob: 'blob 18s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
        'scale-in': 'scaleIn 0.4s ease-out both',
        'slide-in-right': 'slideInRight 0.4s ease-out both',
        'count-up': 'countUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
