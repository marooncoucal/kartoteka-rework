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
        custom: ['Helios', 'HeliosLight', 'HeliosThin', 'HeliosBlack', 'sans-serif']
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      screens: {
        'desktop': '1580px',
      },
    },
  },
  plugins: [],
};
