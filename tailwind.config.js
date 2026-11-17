/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#06152F',
        'navy-soft': '#0B2350',
        'deep-blue': '#073B8C',
        'brand-blue': '#0866E8',
        'brand-cyan': '#08B8E8',
        surface: '#F4F6FA',
        ink: '#172033',
        muted: '#647084',
      },
      fontFamily: {
        sans: ['Montserrat', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 30px -18px rgba(6, 21, 47, 0.35)',
      },
    },
  },
  plugins: [],
}