const IconButton = ({ children, btnColor, action = () => {} }) => {
	let color;
	switch (btnColor) {
		case "green":
			color = "hover:bg-green-700/20 hover:text-green-400";
			break;
		case "red":
			color = "hover:bg-red-700/20 hover:text-red-400";
			break;
		case "blue":
			color = "hover:bg-blue-700/20 hover:text-blue-400";
			break;
		case "yellow":
			color = "hover:bg-yellow-700/20 hover:text-yellow-400";
			break;
		case "amber":
			color = "hover:bg-amber-700/20 hover:text-amber-400";
			break;
		case "lime":
			color = "hover:bg-lime-700/20 hover:text-lime-400";
			break;
		case "emerald":
			color = "hover:bg-emerald-700/20 hover:text-emerald-400";
			break;
		case "teal":
			color = "hover:bg-teal-700/20 hover:text-teal-400";
			break;
		case "cyan":
			color = "hover:bg-cyan-700/20 hover:text-cyan-400";
			break;
		case "sky":
			color = "hover:bg-sky-700/20 hover:text-sky-400";
			break;
		case "indigo":
			color = "hover:bg-indigo-700/20 hover:text-indigo-400";
			break;
		case "violet":
			color = "hover:bg-violet-700/20 hover:text-violet-400";
			break;
		case "purple":
			color = "hover:bg-purple-700/20 hover:text-purple-400";
			break;
		case "fuchsia":
			color = "hover:bg-fuchsia-700/20 hover:text-fuchsia-400";
			break;
		case "pink":
			color = "hover:bg-pink-700/20 hover:text-pink-400";
			break;
		default:
			color = "hover:bg-blue-700/20 hover:text-blue-400";
	}

	return (
		<>
			<button type="button" onClick={action} className={`rounded-md mx-0.5 p-1.5 duration-100 transition ease-in-out ${color}`}>
				{children}
			</button>
		</>
	);
};

export default IconButton;
