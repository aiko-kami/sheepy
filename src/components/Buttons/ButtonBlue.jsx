const ButtonBlue = ({ children, btnSize }) => {
	let textSizeClass;
	switch (btnSize) {
		case "xs":
			textSizeClass = "text-xs";
			break;
		case "sm":
			textSizeClass = "text-sm";
			break;
		case "std":
			textSizeClass = "text-base";
			break;
		case "xl":
			textSizeClass = "text-xl";
			break;
		default:
			textSizeClass = "text-base";
	}

	return (
		<button
			type="submit"
			className={`px-5 py-2 bg-blue-600 text-white ${textSizeClass} leading-snug rounded hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out`}
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</button>
	);
};
export default ButtonBlue;
