const ButtonBlue = ({ children, btnSize }) => {
	let textSizeClass;
	switch (btnSize) {
		case "xs":
			textSizeClass = "text-xs pb-2";
			break;
		case "sm":
			textSizeClass = "text-sm pb-2";
			break;
		case "std":
			textSizeClass = "text-base pb-2";
			break;
		case "xl":
			textSizeClass = "text-xl pb-2.5";
			break;
		default:
			textSizeClass = "text-base";
	}

	return (
		<button
			type="submit"
			className={`px-4 pt-2 bg-blue-600 text-white ${textSizeClass} leading-snug rounded hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out`}
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</button>
	);
};
export default ButtonBlue;
