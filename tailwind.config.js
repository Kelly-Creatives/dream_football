/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ksa: {
          green: {
            50:  '#f0fdf1',
            100: '#e0fae2',
            200: '#bbf5bf',
            300: '#7dea85',
            400: '#2db836',
            500: '#22942a',
            600: '#1a6e1a',
            700: '#145214',
            800: '#0d3b0d',
            900: '#0a2a0a',
            950: '#050f05',
          },
          gold: {
            100: '#fff8e6',
            200: '#ffe8a8',
            300: '#ffd166',
            400: '#f5b833',
            500: '#f0a000',
            600: '#c07c00',
            700: '#8c5a00',
          },
          dark: {
            50:  '#f0f5f0',
            100: '#dce8dc',
            800: '#111811',
            900: '#0a100a',
            950: '#050a05',
          },
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'ksa-gradient':      'linear-gradient(135deg, #22942a, #2db836)',
        'gold-gradient':     'linear-gradient(135deg, #f0a000, #f5b833)',
        'dark-gradient':     'linear-gradient(135deg, #0a100a, #1a221a)',
        'hero-overlay':      'linear-gradient(135deg, rgba(5,10,5,0.88) 0%, rgba(10,40,10,0.72) 40%, rgba(5,10,5,0.6) 100%)',
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(45,184,54,0.35)',
        'glow-gold':  '0 0 30px rgba(245,184,51,0.35)',
        'card':       '0 6px 24px rgba(0,0,0,0.10)',
        'card-lg':    '0 16px 48px rgba(0,0,0,0.16)',
        'card-xl':    '0 32px 80px rgba(0,0,0,0.22)',
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        'blink':      'blink 1.5s ease-in-out infinite',
        'bounce-down':'bounceDown 1.5s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
        bounceDown: {
          '0%,100%': { transform: 'rotate(45deg) translateY(0)' },
          '50%':     { transform: 'rotate(45deg) translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
};
