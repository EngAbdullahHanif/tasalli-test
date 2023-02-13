/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custompink: "#F9B4F6",
        customblue: "#CDB7FC",
      },
    },
  },
  plugins: [require("daisyui")],
};
