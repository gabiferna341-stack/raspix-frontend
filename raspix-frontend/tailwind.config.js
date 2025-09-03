/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        neonPink: "#ec4899",
        neonBlue: "#3b82f6",
        neonPurple: "#8b5cf6",
      },
      boxShadow: {
        neon: "0 0 5px #ec4899, 0 0 10px #8b5cf6, 0 0 20px #3b82f6",
      },
    },
  },
  plugins: [],
};
