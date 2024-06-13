const ButtonLargeGreen = ({ children, btnProps }) => {
	const { classes, type } = btnProps;

	return (
		<button type={type} className={`text-white bg-green-500 hover:bg-green-600 active:bg-green-900 transition duration-300 font-medium text-center absolute left-1/2 -translate-x-1/2 ${classes}`}>
			{children}
		</button>
	);
};
export default ButtonLargeGreen;
