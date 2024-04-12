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
			spacing: {
				2: "0.5rem",
				4: "1rem",
				6: "1.5rem",
				8: "2rem",
				10: "2.5rem",
				12: "3rem",
				14: "3.5rem",
				16: "4rem",
				18: "4.5rem",
				20: "5rem",
				22: "5.5rem",
				24: "6rem",
				26: "6.5rem",
				28: "7rem",
				30: "7.5rem",
				32: "8rem",
				34: "8.5rem",
				36: "9rem",
				38: "9.5rem",
				39: "9.75rem",
				40: "10rem",
				41: "10.25rem",
				42: "10.5rem",
				44: "11rem",
				46: "11.5rem",
				48: "12rem",
				49: "12.25rem",
				50: "12.5rem",
				52: "13rem",
				54: "13.5rem",
				56: "14rem",
				58: "14.5rem",
				60: "15rem",
				62: "15.5rem",
				64: "16rem",
				66: "16.5rem",
				68: "17rem",
				70: "17.5rem",
				72: "18rem",
				74: "18.5rem",
				76: "19rem",
				78: "19.5rem",
				80: "20rem",
				82: "20.5rem",
				84: "21rem",
				86: "21.5rem",
				88: "22rem",
				90: "22.5rem",
				92: "23rem",
				94: "23.5rem",
				96: "24rem",
				98: "24.5rem",
				100: "25rem",
				110: "27.5rem",
				120: "30rem",
				130: "32.5rem",
				140: "35rem",
				150: "37.5rem",
				160: "40rem",
				"1/2": "50%",
				"1/3": "33.333333%",
				"2/3": "66.666667%",
				"1/4": "25%",
				"3/4": "75%",
				"1/5": "20%",
				"2/5": "40%",
				"3/5": "60%",
				"4/5": "80%",
				"1/6": "16.666667%",
				"5/6": "83.333333%",
				"1/7": "14.285714%",
				"2/7": "28.571429%",
				"3/7": "42.857143%",
				"4/7": "57.142857%",
				"5/7": "71.428571%",
				"6/7": "85.714286%",
				"1/8": "12.5%",
				"3/8": "37.5%",
				"5/8": "62.5%",
				"7/8": "87.5%",
				"1/9": "11.111111%",
				"2/9": "22.222222%",
				"4/9": "44.444444%",
				"5/9": "55.555556%",
				"7/9": "77.777778%",
				"8/9": "88.888889%",
				"1/10": "10%",
				"3/10": "30%",
				"7/10": "70%",
				"9/10": "90%",
			},
			inset: (theme) => ({
				...theme("spacing"),
			}),
			colors: {
				base: {
					100: "#ffffff",
					200: "#bcbec5",
					300: "#7e818d",
					400: "#38BDF8",
					450: "#071e34",
					500: "#002464",
					550: "#0C1322",
					600: "#111646",
					700: "#0a0e19",
					800: "#05070f",
					900: "#000000",
				},
				bg: "#1E293B", // Background color
				text: "#0F172A", // Text color
				"custom-blue-dark": "#111646",
				"custom-blue-light": "#002464",
			},
			backgroundOpacity: {
				10: "0.1",
				20: "0.2",
				95: "0.95",
				99: "0.99",
			},
			maxWidth: {
				"8xl": "88rem",
			},
			width: {
				"90vh": "90vh",
				100: "25rem",
				110: "27.5rem",
				120: "30rem",
				130: "32.5rem",
				140: "35rem",
				150: "37.5rem",
				160: "40rem",
				170: "42.5rem",
				180: "45rem",
				190: "47.5rem",
				200: "50rem",
				"1/2": "50%",
				"1/3": "33.333333%",
				"2/3": "66.666667%",
				"1/4": "25%",
				"3/4": "75%",
				"1/5": "20%",
				"2/5": "40%",
				"3/5": "60%",
				"4/5": "80%",
				"1/6": "16.666667%",
				"5/6": "83.333333%",
				"1/7": "14.285714%",
				"2/7": "28.571429%",
				"3/7": "42.857143%",
				"4/7": "57.142857%",
				"5/7": "71.428571%",
				"6/7": "85.714286%",
				"1/8": "12.5%",
				"3/8": "37.5%",
				"5/8": "62.5%",
				"7/8": "87.5%",
				"1/9": "11.111111%",
				"2/9": "22.222222%",
				"4/9": "44.444444%",
				"5/9": "55.555556%",
				"7/9": "77.777778%",
				"8/9": "88.888889%",
				"1/10": "10%",
				"3/10": "30%",
				"7/10": "70%",
				"9/10": "90%",
			},
			height: {
				"90vh": "90vh",
				100: "25rem",
				110: "27.5rem",
				120: "30rem",
				130: "32.5rem",
				140: "35rem",
				150: "37.5rem",
				160: "40rem",
				170: "42.5rem",
				180: "45rem",
				190: "47.5rem",
				200: "50rem",
				"1/2": "50%",
				"1/3": "33.333333%",
				"2/3": "66.666667%",
				"1/4": "25%",
				"3/4": "75%",
				"1/5": "20%",
				"2/5": "40%",
				"3/5": "60%",
				"4/5": "80%",
				"1/6": "16.666667%",
				"5/6": "83.333333%",
				"1/7": "14.285714%",
				"2/7": "28.571429%",
				"3/7": "42.857143%",
				"4/7": "57.142857%",
				"5/7": "71.428571%",
				"6/7": "85.714286%",
				"1/8": "12.5%",
				"3/8": "37.5%",
				"5/8": "62.5%",
				"7/8": "87.5%",
				"1/9": "11.111111%",
				"2/9": "22.222222%",
				"4/9": "44.444444%",
				"5/9": "55.555556%",
				"7/9": "77.777778%",
				"8/9": "88.888889%",
				"1/10": "10%",
				"3/10": "30%",
				"7/10": "70%",
				"9/10": "90%",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				oldenburg: ["Oldenburg", "sans-serif"],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
