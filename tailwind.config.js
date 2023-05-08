/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark_blue: '#111827',
        purple: '#7c3aed',
      },
    },
  },
  plugins: [require('daisyui')],
};
