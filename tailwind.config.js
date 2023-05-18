/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      // padding: "3rem",

      padding: {
        // DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      transparent: "transparent",
      heading: "#1B1C57",
      "p-text": "#626687",
    },
  },
  plugins: [],
};
