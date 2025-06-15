import { toast } from "react-hot-toast";
import { IoClose } from "react-icons/io5";

export const showSuccessToast = (message = "Success!") => {
	toast.success((t) => (
		<div className="flex items-center align-bottom">
			{message}
			<button type="button" className="ml-2 text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => toast.dismiss(t.id)}>
				<IoClose className="text-xl align-bottom" title="Close toast" />
			</button>
		</div>
	));
};

export const showErrorToast = (message = "Something went wrong") => {
	toast.error((t) => (
		<div className="flex items-center align-bottom">
			{message}
			<button type="button" className="ml-2 text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => toast.dismiss(t.id)}>
				<IoClose className="text-xl align-bottom" title="Close toast" />
			</button>
		</div>
	));
};
