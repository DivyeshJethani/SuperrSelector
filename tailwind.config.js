/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rr: {
          navy: '#1E3A8A',
          'navy-deep': '#090D16',
          'navy-surface': '#0F172A',
          'navy-card': '#131D36',
          'navy-light': '#2563EB',
          'navy-border': '#1E293B',
          pink: '#E11D48',
          'pink-hover': '#BE123C',
          'pink-light': '#FB7185',
          'pink-glow': '#F43F5E',
          gold: '#F59E0B',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'rr-pink-glow': '0 0 25px -5px rgba(225, 29, 72, 0.45)',
        'rr-navy-glow': '0 0 25px -5px rgba(30, 58, 138, 0.55)',
      }
    },
  },
  plugins: [],
}
