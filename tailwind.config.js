/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        intensePurple: "#7C5DFA",
        brillantPurple: "#9277FF",
        lightPurple: "#888EB0",
        darkBlue: "#1E2139",
        lightBlue: "#DFE3FA",
        palePurple: "#7E88C3",
        red: "#EC5757",
        paleRed: "#9277FF",
        paleGray: "#F8F8FB",
        black: "#0C0E16",
        deepBlue: "#252945",
        deepPurple: "#141625",
      },
      padding: {
        logo: "23px",
      },
    },
  },
  plugins: [],
};
