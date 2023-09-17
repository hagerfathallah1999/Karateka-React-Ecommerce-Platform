/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px", // mobile
      },
      height: {
        4.5: "18rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
