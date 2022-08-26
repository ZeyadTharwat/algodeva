/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    maxWidth: {
      '80': '80%',
      '75': '75%',
      '60': '60%',
      '100': '100%',
    },
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1120px",
      }
    },

    extend: {
      fontSize: {
        '32px': '2rem',

    },


      padding: {
        '30px': '30px',
        '10px': '10px',
        '25px':'25px',
        '33px':'33px',
      },

      fontFamily: {
        prodisplay: ['SF Pro Display'],
      },
      colors: {
        main:'#F9F9F9',
        primary:'#4981DA',
        secondary:'#1B314B',
        tertiary:'#7F93B2',
        quaternary:'#BBC5D5'
      },  


    },
  },
  plugins: [],
}
