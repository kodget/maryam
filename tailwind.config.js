/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-mocha': '#5A2A1E',
        'warm-beige': '#F3E1C8',
        'muted-rosewood': '#B27A5C',
        'soft-gold': '#D4AF37',
        'cream-white': '#FAF6F2',
        'dark-brown': '#3C2E28',
      },
      fontFamily: {
        'display': ['Yeseva One', 'Lora', 'serif'],
        'feature': ['Cooper Hewitt', 'Abril Fatface', 'serif'],
        'body': ['Cormorant Garamond', 'Libre Baskerville', 'serif'],
        'script': ['Great Vibes', 'Alex Brush', 'cursive'],
      },
      spacing: {
        'section': '3rem',
        'section-lg': '4rem',
        'inner': '2.5rem',
        'footer': '2rem',
      },
      lineHeight: {
        'elegant': '1.5',
      },
    },
  },
  plugins: [],
}