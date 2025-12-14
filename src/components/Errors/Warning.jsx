import { IoAlertCircleOutline } from "react-icons/io5";

const Warning = ({ warningInputs }) => {
	const { title, message } = warningInputs;

	return (
		<div className="flex items-start gap-3 p-4 bg-red-950/30 border border-red-900/50 rounded-lg max-w-120 mx-auto">
			<IoAlertCircleOutline className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
			<div>
				<p className="text-sm text-red-200 leading-relaxed font-semibold">{title}</p>
				<p className="text-sm text-red-200 leading-relaxed">{message}</p>
			</div>
		</div>
	);
};

export default Warning;
