/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'main': '#F9F7F5',
        'button-blue': '#66C2C7',
        'button-blue-darker': '#4BB8BD',
        'button-pink': '#EE9FBC',
        'button-pink-darker': '#EA80A7',
        'button-yellow': '#EDAE3A',
        'button-yellow-darker': '#EDAE3A',
        'error-red': '#EF4444',
        'card': '#EFEAE6',
        'content': '#291334',
        'shadow': '#000000'
      },
    extend: {},
  },
  plugins: [],
}

