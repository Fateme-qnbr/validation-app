/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      // Add new colors
      colors:{
        'custom-orange':'#EDEBBF',
        'login-green':'#83A071',
        // first page background image color
        'img-green':'#A6CD8E',
        // see more colors- explore button color- text discover color- 
        'discogreenver-text':'#648052',
        // between explore button and discover color
        'small-text-green':'#83A071',
        // border image colors- product text color
        'product-green':'#1B5C2E',
        
      }
    },
  },
  plugins: [],
}

