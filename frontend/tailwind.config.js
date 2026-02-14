/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We are defining 'dark' as a brand color here
        primary: '#00f2ea',
        secondary: '#ff0055',
        dark: '#0f172a', 
        card: '#1e293b'
      },
    },
  },
  plugins: [],
}