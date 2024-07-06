/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '5vh': '5vh',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      width: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '35vw': '35vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',
      },
      colors: {
        gray : '#202124',
        hover : '#2D2E31',
        border : '#5C6065',
        icon : '#9AA0A6',
        secondary : '#303134',
        bordersec : '#5F6368',
        text : '#BFBFBF',
        button : '#99C3FF',
        backbot : '#171717',
      },
      padding: {
        '15': '15px',
        '14': '14px',
      },
    },
  },
  plugins: [],
}