"use client";

const Button = ({ children, btnProps }) => {
	const { type, btnSize, btnColor, btnRounded, action = () => {} } = btnProps;

	let size;
	switch (btnSize) {
		case "xs":
			size = "text-xs px-3.5 py-1.5";
			break;
		case "sm":
			size = "text-sm font-medium px-4 py-2";
			break;
		case "std":
			size = "text-base px-4 py-2";
			break;
		case "xl":
			size = "text-xl px-4 py-2.5";
			break;
		case "2xl":
			size = "text-2xl px-4 pb-3 pt-2.5";
			break;
		case "3xl":
			size = "text-3xl px-7 pb-5 pt-3 m-4";
			break;
		default:
			size = "text-base px-4 py-2";
	}

	let color;
	switch (btnColor) {
		case "gray":
			color = "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700";
			break;
		case "blue":
			color = "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
			break;
		case "green":
			color = "text-white bg-green-500 hover:bg-green-600 active:bg-green-700";
			break;
		case "grayBorder":
			color = "text-white border border-2 border-gray-600 hover:bg-gray-600 active:bg-gray-700";
			break;
		default:
			color = "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
	}

	let rounded;
	switch (btnRounded) {
		case "none":
			rounded = "rounded-none";
			break;
		case "sm":
			rounded = "rounded-sm";
			break;
		case "std":
			rounded = "rounded";
			break;
		case "lg":
			rounded = "rounded-lg";
			break;
		case "xl":
			rounded = "rounded-xl";
			break;
		case "full":
			rounded = "rounded-full";
			break;
		default:
			rounded = "rounded";
	}

	return (
		<button
			type={type}
			onClick={action}
			className={`leading-snug hover:shadow-lg transition duration-150 ease-in-out ${size} ${color} ${rounded}`}
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</button>
	);
};

const ButtonCircle = ({ children, btnProps }) => {
	const { btnSize, type, btnColor, action = () => {} } = btnProps;

	let size;
	switch (btnSize) {
		case "xs":
			size = "text-xs py-2.5 px-2.5";
			break;
		case "sm":
			size = "text-sm py-3 px-3";
			break;
		case "std":
			size = "text-base py-3 px-3";
			break;
		case "xl":
			size = "text-xl py-3 px-3";
			break;
		case "2xl":
			size = "text-2xl py-3 px-3";
			break;
		default:
			size = "text-base py-3 px-3";
	}

	let color;
	switch (btnColor) {
		case "gray":
			color = "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700";
			break;
		case "blue":
			color = "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
			break;
		case "green":
			color = "text-white bg-green-500 hover:bg-green-600 active:bg-green-700";
			break;
		default:
			color = "text-base";
	}

	return (
		<button
			type={type}
			onClick={action}
			className={`rounded-full leading-snug hover:shadow-lg transition duration-150 ease-in-out ${size} ${color}`}
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</button>
	);
};

export { Button, ButtonCircle };
