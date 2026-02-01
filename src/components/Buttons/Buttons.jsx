"use client";

function getButtonClasses(color, variant = "solid", disabled = false) {
	const COLORS = {
		gray: {
			text: "text-white",
			base: "bg-gray-500",
			hover: "hover:bg-gray-600",
			active: "active:bg-gray-800",
			disabled: {
				base: "bg-gray-500 opacity-40",
			},
		},
		blue: {
			text: "text-white",
			base: "bg-blue-600",
			hover: "hover:bg-blue-700",
			active: "active:bg-blue-800",
			disabled: {
				base: "bg-blue-600 opacity-40",
			},
		},
		green: {
			text: "text-white",
			base: "bg-green-600",
			hover: "hover:bg-green-700",
			active: "active:bg-green-800",
			disabled: {
				base: "bg-green-600 opacity-40",
			},
		},
		red: {
			text: "text-white",
			base: "bg-red-600",
			hover: "hover:bg-red-700",
			active: "active:bg-red-800",
			disabled: {
				base: "bg-red-600 opacity-40",
			},
		},
		pink: {
			text: "text-white",
			base: "bg-pink-400",
			hover: "hover:bg-pink-500",
			active: "active:bg-pink-700",
			disabled: {
				base: "bg-pink-400 opacity-40",
			},
		},
		orange: {
			text: "text-white",
			base: "bg-orange-600",
			hover: "hover:bg-orange-700",
			active: "active:bg-orange-800",
			disabled: {
				base: "bg-orange-600 opacity-40",
			},
		},
		yellow: {
			text: "text-white",
			base: "bg-yellow-500",
			hover: "hover:bg-yellow-600",
			active: "active:bg-yellow-700",
			disabled: {
				base: "bg-yellow-500 opacity-40",
			},
		},
		gradientBluePurple: {
			text: "text-white",
			base: "bg-gradient-to-r from-blue-600 to-indigo-600",
			hover: "hover:from-blue-700 hover:to-indigo-700",
			active: "active:from-blue-800 active:to-indigo-800",
			disabled: {
				base: "bg-indigo-600 opacity-40",
			},
			shadow: "shadow-2xl shadow-blue-500/25",
		},
		gradientPurplePink: {
			text: "text-white",
			base: "bg-gradient-to-r from-purple-600 to-pink-600",
			hover: "hover:from-purple-700 hover:to-pink-700",
			active: "active:from-purple-800 active:to-pink-800",
			disabled: {
				base: "bg-pink-600 opacity-40",
			},
			shadow: "shadow-2xl shadow-purple-500/25",
		},
		grayOutline: {
			text: "text-white",
			base: "",
			hover: "hover:bg-slate-600",
			active: "active:bg-slate-700",
			border: "border border-2 box-border border-slate-600",
			disabled: {
				text: "text-gray-900",
				base: "bg-slate-200 opacity-40",
				border: "border border-2 box-border border-slate-300",
			},
		},
	};

	const c = COLORS[color] || COLORS.blue;

	if (disabled) {
		return [c.disabled?.text ?? c.text, c.disabled?.base ?? c.base, c.disabled?.border ?? c.border, "opacity-40 cursor-not-allowed"].filter(Boolean).join(" ");
	}

	return [c.text, c.base, c.border, c.hover, c.active, c.shadow].filter(Boolean).join(" ");
}

const Button = ({ children, btnProps }) => {
	const { type, btnSize, wFull = false, btnColor, btnRounded, action = () => {}, name, value, disabled = false } = btnProps;

	let size;
	switch (btnSize) {
		case "xs":
			size = "text-xs px-3 py-1.5";
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
		case "sm-std":
			size = "text-sm font-medium px-3 py-2 md:text-base md:px-4";
			break;
		default:
			size = "text-base px-4 py-2";
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

	const colorClasses = getButtonClasses(btnColor, disabled);

	return (
		<button
			type={type}
			onClick={action}
			name={name}
			value={value}
			disabled={disabled}
			className={`leading-snug text-nowrap shadow-lg transition-all duration-150 ease-in-out ${size} ${rounded} ${wFull ? "w-full" : ""} ${colorClasses}`}
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
		case "std-xl":
			size = "text-base sm:text-xl py-2 px-2";
			break;
		default:
			size = "text-base py-2 px-2";
	}

	const colorClasses = getButtonClasses(btnColor, disabled);

	return (
		<button
			type={type}
			onClick={action}
			name={name}
			value={value}
			disabled={disabled}
			className={`rounded-full leading-snug hover:shadow-lg transition duration-150 ease-in-out ${size} ${colorClasses}`}
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</button>
	);
};

export { Button, ButtonCircle };
