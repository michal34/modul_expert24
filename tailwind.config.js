/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F4A57",     // ciemny niebieski
        secondary: "#A7C7D7",   // jasny niebieski
        accent: "#F4A261",      // pomarańczowy
        lightbg: "#F5F5F5",     // jasne tło
      },
      borderRadius: {
        xl2: "24px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};