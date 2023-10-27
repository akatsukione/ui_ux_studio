/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "333333": "#333", // Replace with your desired color
        "C5C5C5": "#C5C5C5",
        "B8B8B8": "#B8B8B8",
        "575DFB": "#575DFB",
      },
      fontFamily:{
        poppins: ['Poppins']
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1440px",
          },
          "@screen xl": {
            maxWidth: "1920px",
          },
        },
      });
    },
  ],
};
