module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'header-blue': '#37527E',
                'white': '#ffffff',
                'link-blue': '#2297C7'
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ['emerald']
    }
}
