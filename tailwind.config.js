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
        charm: ['"Charm"', 'cursive'],
      },
      backgroundImage: {
        // 'uphoria': "url('/Uphoriabg.svg')",
        'uphoria': "url('/bgpng.png')",
        'bgwebsite' : "url('/bgred.png')",
      },
    },
  },
  plugins: [],
}