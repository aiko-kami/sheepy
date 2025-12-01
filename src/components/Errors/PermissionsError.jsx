import { IoEye } from "react-icons/io5";

const PermissionsErrorPane = ({ message, messages }) => {
	const messageList = [...(messages ? (Array.isArray(messages) ? messages : [messages]) : []), ...(message ? [message] : [])];
	return (
		<>
			<div className="p-3 flex items-center gap-4 bg-pink-800/30 border border-pink-700 rounded-md">
				<IoEye className="w-7 h-7 bg-pink-500/40 rounded-full p-1 text-pink-200" />
				<div>
					<h3 className="mb-1 text-sm text-pink-50">Read only access</h3>
					{messageList.map((msg, index) => (
						<p key={index} className="text-xs italic text-pink-700 mb-1 last:mb-0">
							{msg}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

const PermissionsErrorText = ({ message }) => {
	return (
		<>
			<p className="text-xs italic text-pink-700">{message}</p>
		</>
	);
};

export { PermissionsErrorPane, PermissionsErrorText };
