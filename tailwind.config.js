/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      //Giving custom screen width according to elements
      xl: { max: "1000px" },

      lg: { max: "820px" },

      md: { max: "660px" },

      sm: { max: "585px" },

      xm: { max: "485px" },

      xxm: { max: "380px" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
