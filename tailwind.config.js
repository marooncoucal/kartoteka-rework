/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#111111',
        'dark-grey': '#666666',
        'custom-white': '#f0f0f0',
      },
      fontFamily: {
        custom: ['Helios', 'sans-serif']
      },
      screens: {
        'desktop': '1580px',
      },
    },
  },
  plugins: [],
};
