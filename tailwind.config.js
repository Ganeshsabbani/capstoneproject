/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    screens: {
       'xl':{'max' : '1000px'},

      'lg': {'max': '780px'},
     

      'md': {'max': '660px'},
     

      'sm': { 'max': '585px'},

      'xm': { 'max': '485px'}
     
       
  
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
}

}
