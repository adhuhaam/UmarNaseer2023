/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"], darkMode: "class", theme: {
        extend: {
            colors: {
                "slate-800": "rgb(19,33,68)",
                "backgrount-input": "rgb(0,0,31)",
                "gray-dark": "rgba(74,198,247,.1)",
                "dark": "rgb(222, 31, 31)"
            }, boxShadow: {
                "3xl": "0px 5px 10px rgba(0, 0, 0, .2)"
            }
        }, fontFamily: {
            "Inter": '"Inter", sans-serif'
        },
    }, plugins: [],
}
