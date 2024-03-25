/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		screens: {
			tn: "350px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			tn: "350px",
		},
		extend: {
			colors: {
				base: {
					100: "#ffffff",
					200: "#bcbec5",
					300: "#7e818d",
					400: "#38BDF8",
					450: "#38BDF8",
					500: "#0f172a",
					550: "#0C1322",
					600: "#0e1321",
					700: "#0a0e19",
					800: "#05070f",
					900: "#000000",
				},
				bg: "#1E293B", // Background color
				text: "#0F172A", // Text color
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
