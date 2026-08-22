/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fd',
          100: '#e0e9fa',
          200: '#c2d5f6',
          300: '#94b5f0',
          400: '#5e8de7',
          500: '#3866dc',
          600: '#254ac9',
          700: '#1a2b5f',
          800: '#132a65',
          900: '#0f172a',
          950: '#0a1020',
        },
        brand: {
          orange: '#ea580c',
          amber: '#f59e0b',
          gold: '#d97706',
          accent: '#e8920a',
          blue: '#0284c7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-display)', 'Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
