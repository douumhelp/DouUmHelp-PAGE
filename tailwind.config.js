/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        "yellow-douhelp": "#FACC15",
        "yellow-douhelp-light": "#FDE018",
        "gray-input": "#6b7280",
        "gray-input-secondary": "#D1D5DB",
        "border-gray": "#D1D5DB", 
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
