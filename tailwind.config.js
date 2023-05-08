/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'backgroundImage':{
        'landing': "url('./assets/images/background_image.webp')"
      },
      boxShadow: {
        'bottom': '0 20px 20px -20px #e97b22',
        'top-sm': '0 10px 15px -5px #e97b22'
      }
    },
    colors: {
      'background-primary': '#031022',
      'background-secondary': '#202443',
      'orange-primary': '#D26E1D',
      'orange-light': '#e97b22',
      'brown': '#5D2700',
      'purple': '#20161B',
      'white': '#ffffff'
    },
  },
  plugins: [],
}

