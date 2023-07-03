/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-colorfull": "url('/seemles1.gif')",
        "bg-colorler": "url('/Comp-1.gif')",
      },
    },
  },
  plugins: [],
};
