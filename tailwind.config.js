/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "primary": "#f48525",
                "primary-dark": "#d66a10",
                "background-light": "#f8f7f5",
                "background-dark": "#181411",
                "surface-dark": "#27211b",
                "border-dark": "#393028",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}