/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eniac-black': '#0a0f0a',
        'eniac-green': '#10B981',
        'eniac-amber': '#F59E0B',
        'eniac-white': '#E5E7EB',
        'eniac-dark': '#0f1410',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 0.1s linear infinite',
        'flicker': 'flicker 0.15s infinite linear',
        'breathe': 'breathe 1.2s ease-in-out infinite',
        'tube-warmup': 'tube-warmup 3s ease-in-out',
        'tokenization': 'tokenization 2s ease-in-out',
        'parameter-shuffle': 'parameter-shuffle 2.5s ease-in-out',
        'attention-routing': 'attention-routing 2s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #10B981, 0 0 10px #10B981, 0 0 15px #10B981' },
          '100%': { boxShadow: '0 0 10px #10B981, 0 0 20px #10B981, 0 0 30px #10B981' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'tube-warmup': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'tokenization': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'parameter-shuffle': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'attention-routing': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
