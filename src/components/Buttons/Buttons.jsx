"use client";

const Button = ({ children, btnProps }) => {
	const { type, btnSize, wFull = false, btnColor, btnRounded, action = () => {}, name, value, disabled = false } = btnProps;

	let size;
	switch (btnSize) {
		case "xs":
			size = "text-xs px-3.5 py-1.5";
			break;
		case "sm":
			size = "text-sm font-medium px-3 py-2";
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
		case "lg":
			size = "text-lg px-12 py-4 font-semibold";
			break;
		default:
			size = "text-base px-4 py-2";
	}

	let color;
	const isDisabled = btnProps?.disabled;

	switch (btnColor) {
		case "gray":
			color = isDisabled ? "text-white bg-gray-500 opacity-40" : "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-800";
			break;
		case "blue":
			color = isDisabled ? "text-white bg-blue-600 opacity-40" : "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
			break;
		case "green":
			color = isDisabled ? "text-white bg-green-600 opacity-40" : "text-white bg-green-600 hover:bg-green-700 active:bg-green-800";
			break;
		case "red":
			color = isDisabled ? "text-white bg-red-600 opacity-40" : "text-white bg-red-600 hover:bg-red-700 active:bg-red-800";
			break;
		case "pink":
			color = isDisabled ? "text-white bg-pink-400 opacity-40" : "text-white bg-pink-400 hover:bg-pink-500 active:bg-pink-700";
			break;
		case "orange":
			color = isDisabled ? "text-white bg-orange-600 opacity-40" : "text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800";
			break;
		case "yellow":
			color = isDisabled ? "text-white bg-yellow-600 opacity-40" : "text-white bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800";
			break;
		case "gradientBluePurple":
			color = isDisabled
				? "text-white bg-indigo-600 opacity-40"
				: "text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 shadow-2xl shadow-blue-500/25";
			break;
		case "grayBorder":
			color = isDisabled
				? "text-white border border-2 box-border border-slate-300 bg-slate-200 opacity-40"
				: "text-white border border-2 box-border bg-slate-700 border-slate-600 hover:bg-slate-600 active:bg-slate-700";
			break;
		default:
			color = isDisabled ? "text-white bg-blue-300 opacity-40" : "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
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
			name={name}
			value={value}
			disabled={disabled}
			className={`leading-snug shadow-lg transition duration-150 ease-in-out ${size} ${color} ${rounded} ${wFull ? "w-full" : ""}`}
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</button>
	);
};

const ButtonCircle = ({ children, btnProps }) => {
	const { btnSize, type, btnColor, action = () => {}, name, value, disabled = false } = btnProps;

	let size;
	switch (btnSize) {
		case "xs":
			size = "text-xs py-2.5 px-2.5";
			break;
		case "sm":
			size = "text-sm py-2 px-2";
			break;
		case "std":
			size = "text-base py-2 px-2";
			break;
		case "xl":
			size = "text-xl py-2 px-2";
			break;
		case "2xl":
			size = "text-2xl py-2 px-2";
			break;
		default:
			size = "text-base py-2 px-2";
	}

	let color;
	switch (btnColor) {
		case "gray":
			color = "text-white bg-gray-600 hover:bg-gray-700 active:bg-gray-800";
			break;
		case "blue":
			color = "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
			break;
		case "green":
			color = "text-white bg-green-600 hover:bg-green-700 active:bg-green-800";
			break;
		case "grayBorder":
			color = "text-white border border-2 box-border border-gray-600 hover:bg-gray-600 active:bg-gray-700";
			break;
		default:
			color = "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
	}

	return (
		<button
			type={type}
			onClick={action}
			name={name}
			value={value}
			disabled={disabled}
			className={`rounded-full leading-snug hover:shadow-lg transition duration-150 ease-in-out ${size} ${color}`}
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</button>
	);
};

export { Button, ButtonCircle };
