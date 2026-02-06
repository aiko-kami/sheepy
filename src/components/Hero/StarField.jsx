const STARS = [
	{ top: "7rem", left: "7.5rem" },
	{ bottom: "7rem", left: "8rem" },
	{ bottom: "18rem", left: "20rem" },
	{ top: "9.5rem", left: "33%", transform: "translateX(-12rem)" },
	{ top: "15rem", left: "33%", transform: "translateX(-5.5rem)" },
	{ top: "21rem", left: "33%", transform: "translateX(-5rem)" },
	{ bottom: "16.5rem", left: "33%", transform: "translateX(-3.5rem)" },
	{ bottom: "12rem", left: "33%", transform: "translateX(-7rem)" },
	{ bottom: "5.5rem", left: "33%", transform: "translateX(5.5rem)" },
	{ bottom: "3rem", left: "33%", transform: "translateX(-0.5rem)" },
	{ top: "7rem", left: "33%" },
	{ top: "4rem", left: "50%", transform: "translateX(5rem)" },
	{ top: "9.5rem", left: "60%" },
	{ top: "11.5rem", left: "50%", transform: "translateX(16.5rem)" },
	{ top: "14rem", right: "20.5rem" },
	{ top: "22.5rem", right: "8rem" },
	{ bottom: "5.5rem", right: "25%", transform: "translateX(9.5rem)" },
	{ bottom: "3.5rem", right: "25%", transform: "translateX(1.5rem)" },
	{ bottom: "11rem", right: "25%", transform: "translateX(0.5rem)" },
	{ bottom: "13.5rem", right: "25%", transform: "translateX(-5rem)" },
	{ bottom: "21.5rem", right: "25%", transform: "translateX(-6.5rem)" },
];

const StarField = () => {
	return (
		<>
			{STARS.map((style, i) => (
				<div
					key={i}
					className="bg-base-100 w-1 h-1 rounded-full absolute"
					style={style}
					aria-hidden="true"
				/>
			))}
		</>
	);
};

export default StarField;
