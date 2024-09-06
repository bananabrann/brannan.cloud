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
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(20px)" },
					"100%": { transform: "translateY(0)" },
				},
				twinkle: {
					"0%": { opacity: "0.25" },
					"50%": { opacity: "1.00" },
					"100%": { opacity: "0.25" },
				},
			},
			animation: {
				moveLeftContinuous: "moveLeftContinuous var(--duration) linear infinite",
				oscillateGently: "oscillateGently 14s ease-in-out infinite",
				twinkle: "twinkle 4s ease-in-out infinite",
			},
		},
		fontFamily: {
			// sans: [],
			// seif: []
		}
	},
	plugins: [],
};
