/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			keyframes: {
				moveLeftContinuous: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" },
				},
				oscillateGently: {
					"0%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(20px)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				moveLeftContinuous: "moveLeftContinuous var(--duration) linear infinite",
				oscillateGently: "oscillateGently 14s ease-in-out infinite"
			},
		},
	},
	plugins: [],
};
