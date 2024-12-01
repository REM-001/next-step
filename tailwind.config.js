/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins'],

    },
    colors: {
      transparent: 'transparent',
      'white': '#fefefefe',
      'black': '#0D0D0D',
      'gray': '#1E1E1E',
      'primary': '#FF5631',
      'primary-lighted': '#FF8970',
      'secondary': '#E5D4B8',
      'text': '#E3D1B4',
  },
  plugins: [],
}
}