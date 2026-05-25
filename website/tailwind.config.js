/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./schemas/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        10: "10",
        12: "12",
        20: "20",
      },
      fontFamily: {
        // You can name these whatever you prefer
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        lavishly: ['"Lavishly Yours"', "cursive"],
        playfair: ['"Playfair Display"', "serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

