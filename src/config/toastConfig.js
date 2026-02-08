export const toastOptions = {
	position: "top-right",
	reverseOrder: false,
	toastOptions: {
		duration: 5000,
		className: "toast-enter",
		style: {
			borderRadius: "12px",
			background: "#333",
			color: "#fff",
			fontSize: "16px",
			"z-index": 1000000000000,
		},
		success: {
			style: {
				background: "#dcfce7",
				color: "#166534",
				"z-index": 1000000000000,
			},
		},
		error: {
			style: {
				background: "#fee2e2",
				color: "#7f1d1d",
				"z-index": 100000000000,
			},
		},
	},
};
