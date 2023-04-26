/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontSize: {
        'tipSize':'0.6rem'
       }
    },
  },
  plugins: [],
}

