const Notification = ({ value, size, notifColor, ringMode }) => {
	let textSize;
	switch (size) {
		case "xs":
			textSize = "text-[10px] px-2 min-h-[16px] min-w-[16px]";
			break;
		case "sm":
			textSize = "text-[12px] px-2 pb-0.5 h-6";
			break;
		case "std":
			textSize = "text-sm px-2 py-3 h-6";

			break;
		case "xl":
			textSize = "text-lg";
			break;
		default:
			textSize = "text-sm px-2 pb-0.5 h-7";
	}

	let color;
	switch (notifColor) {
		case "gray":
			color = "text-white bg-gray-600";
			break;
		case "pink":
			color = "text-white bg-pink-600 ";
			break;
		case "blue":
			color = "text-white bg-blue-600 ";
			break;
		case "red":
			color = "text-white bg-red-600 ";
			break;
		case "green":
			color = "text-white bg-green-600";
			break;
		case "grayOutline":
			color = "text-gray-600 border border-2 box-border border-gray-600";
			break;
		default:
			color = "text-white bg-gray-600";
	}

	let ring;
	switch (ringMode) {
		case "home":
			ring = "ring-4 ring-custom-gradiant-dark";
			break;
		case "std":
			ring = "ring-4 ring-custom-gradiant-light";
			break;
		default:
			ring = "";
	}

	return <span className={`inline-flex items-center justify-center font-bold rounded-full ${textSize} ${color} ${ring}`}>{value}</span>;
};

export default Notification;
