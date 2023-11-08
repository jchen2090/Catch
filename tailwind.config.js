/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fade_in: "fade_in 1000ms ease-in ",
      },
      keyframes: {
        fade_in: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
