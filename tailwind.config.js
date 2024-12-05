/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Thêm tất cả file JS, JSX, TS, TSX trong src
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
