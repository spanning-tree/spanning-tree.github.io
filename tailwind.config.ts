import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "terminal-green": "#00ff00",
                "terminal-black": "#0c0c0c",
                "terminal-dim": "#003300",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                mono: ["var(--font-geist-mono)", "monospace"], // Use geist mono if available or fallback
            },
            animation: {
                "typing": "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
            },
            keyframes: {
                typing: {
                    "from": { width: "0" },
                    "to": { width: "100%" },
                },
                "blink-caret": {
                    "from, to": { borderColor: "transparent" },
                    "50%": { borderColor: "#00ff00" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
