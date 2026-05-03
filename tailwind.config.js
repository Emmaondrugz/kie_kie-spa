/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "marquee-left": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "marquee-right": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                "marquee-left": "marquee-left 40s linear infinite",
                "marquee-right": "marquee-right 36s linear infinite",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
                hedvig: ["var(--font-hedvig)", "serif"],
            },
            colors: {
                brand: {
                    orange: "#f97316",
                    "orange-light": "#fed7aa",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            spacing: {
                18: "4.5rem",
                22: "5.5rem",
                30: "7.5rem",
            },
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
            },
            screens: {
                xs: "480px",
            },
        },
    },
    plugins: [],
};