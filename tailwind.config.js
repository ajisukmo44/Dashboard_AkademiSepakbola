module.exports = {
  
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
    ],
    safelist: ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'Sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin'), require('@tailwindcss/forms')],
}
