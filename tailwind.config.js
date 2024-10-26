/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FA7777",
                secondary: "#F0F5F7",
                white: "#ffffff",
                black: "#000000",
                warning: "#FFC400",
                mutedBlack: "#282828",
            },
        },
    },
    plugins: [],
};
