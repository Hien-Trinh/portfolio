/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'selected-text': '#A3A3FF',
                'theme': '#3F3FFF',
                'nav': '#404053',
                'secondary': '#9191A4',
                'badge': '#3F3F51',
                'input-border': '#565666',
                'input': '#2A2A35'
            },
        },
    },
    plugins: [],
}
