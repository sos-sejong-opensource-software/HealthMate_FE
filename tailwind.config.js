/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                manrope: ["Manrope"],
            },
            colors: {
                blue: "#4d77ff",
                blues: "#0078f0",
            },
        },
    },
    plugins: [],
};
