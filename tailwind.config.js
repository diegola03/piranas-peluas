/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Gold-on-black "legendary" palette
        obsidian: "#0a0a0b",
        ink: "#111012",
        coal: "#1a1719",
        gold: "#d4af37",
        "gold-bright": "#f2cf63",
        "gold-deep": "#9a7b1f",
        bone: "#f4efe3",
        ember: "#b5452f",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 40px -8px rgba(212, 175, 55, 0.45)",
        "gold-edge": "0 1px 0 0 rgba(212, 175, 55, 0.35)",
      },
      letterSpacing: {
        widest2: "0.32em",
      },
    },
  },
  plugins: [],
};
