/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        coal: "#0a0a0a",
        bone: "#ffffff",
        mist: "#e0e0e0"
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["Inter", "DM Sans", "sans-serif"]
      },
      letterSpacing: {
        widebrand: "0.28em"
      },
      screens: {
        xs: "360px",
        "3xl": "1920px"
      },
      boxShadow: {
        line: "inset 0 0 0 1px rgba(255,255,255,0.14)"
      }
    }
  },
  plugins: []
};
