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
      boxShadow: {
        "3xl": "30px -30px 60px -35px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "bg-colorfull": "url('/seemles1.gif')",
        "bg-colorler": "url('/Comp-1.gif')",
      },
    },
  },
  plugins: [],
};
