/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        lightning: "lightning 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
