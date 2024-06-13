const ButtonRoundGray = ({ children, btnSize }) => {
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
			className={`px-3 pt-2 rounded-full text-white ${textSizeClass} leading-snug bg-gray-600 hover:bg-gray-700 hover:shadow-lg active:bg-gray-800 transition duration-150 ease-in-out`}
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</button>
	);
};
export default ButtonRoundGray;
