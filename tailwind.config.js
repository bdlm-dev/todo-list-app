/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}", 
    "./components/**/*.js",
    "./components/home/*.{js,jsx,ts,tsx}", 
    "./todo-list-app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

// the "./components/**/*.{js,jsx,ts,tsx}" selector doesn't work for some reason
// will have to specify subdirectories