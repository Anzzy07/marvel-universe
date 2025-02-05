/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marvel-dark-grey": "#111111",
        "marvel-red": "#E30022",
      },
    },
  },
  plugins: [],
};
