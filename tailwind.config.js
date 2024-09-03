/** @type {import('tailwindcss').Config} */
export default {
  content: [
      '.index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            primary: '#1A202C',
            secondary: '#4A5568',
            accent: '#2D3748',
            background: '#EDF2F7',
            white: '#FFFFFF',
            datalumni: '#F7B601',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

