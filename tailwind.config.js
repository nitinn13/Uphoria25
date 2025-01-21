/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-condensed': ['"IBM Plex Sans Condensed"', 'sans-serif'],
      },
      backgroundImage: {
        // 'uphoria': "url('/Uphoriabg.svg')",
        'uphoria': "url('/bgpng.png')",
      },
    },
  },
  plugins: [],
}