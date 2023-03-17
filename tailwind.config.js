/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1370px'
      }
    },
    extend: {
      backgroundImage: {
        'home' : 'linear-gradient(to right, white 70%, #A6BCFA 30%)',
        'home-profile' : 'linear-gradient(146.64deg, rgba(255, 255, 255, 0.5) -6.76%, rgba(0, 71, 255, 0.05) 102.96%)',
        'elips' : 'linear-gradient(180deg, #A6BCFA 0%, #2157F2 100%)',
        'profile' : 'linear-gradient(146.64deg, rgba(255, 255, 255, 0.5) -6.76%, rgba(0, 71, 255, 0.05) 102.96%)'
      }
    }
  },
  plugins: [],
}
