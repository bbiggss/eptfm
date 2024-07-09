/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        sm: { max: '768px' },
        md: { min: '768px', max: '990px' },
        lg: { min: '990px' },
      },
    },
  },
  plugins: [],
};
