/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {
      spacing: {
        864: "54rem",
      },
    },
  },
  plugins: [],
};
