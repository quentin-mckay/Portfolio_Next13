/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './sections/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-bg': {
                    //   DEFAULT: 'rgb(36 36 36)'
                    // DEFAULT: '#0a192f', // slate blue
                    DEFAULT: '#1d1d1d', // 1st portfolio bg color
                },
                'primary-text': {
                    DEFAULT: '#ccd6f6', // whitish
                },
                'secondary-text': {
                    DEFAULT: '#8892b0', // grayish
                },
                // 'custom': colors.purple[200],
                accent: {
                    DEFAULT: '#64ffda', // light green
                },
            },
            boxShadow: {
                '3xl': '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
}
