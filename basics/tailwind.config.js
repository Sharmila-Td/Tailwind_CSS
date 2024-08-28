/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'pure-pink':'#ff5689',
        'dark-blue':'#0206A5'
      },
      fontWeight:{
        'bold500' : 500
      }
    },
    fontFamily:{
      Mate:["Matemasie", "sans-serif"]
    },
    screens:{
      'tablet':'640px', //@media (min-width: 640px)
      'laptop': '1024px', //@media (min-width: 1024px)
      'desktop': '1280px'
    }
  },
  plugins: [],
  darkMode:"selector"
}

