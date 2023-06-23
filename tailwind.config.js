/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "460px" },
      },
    },
  },
  daisyui: {
    themes: [
      {
        pandatheme: {
          primary: "#4A3956",

          accent: "#A07D37",

          background: "#2A2230",

          info: "#f9eee9",

          success: "#d1fae5",

          warning: "#fef08a",

          error: "#fda4af",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
