import { IoHappy } from "react-icons/io5";

import { Badge } from "@/components/Badges/Badges";

const CommentReplyForm = ({ displayReply, handleReplySubmit }) => {
	const onSubmit = (event) => {
		event.preventDefault();
		handleReplySubmit();
	};
	return (
		<>
			{displayReply && (
				<div className="px-4">
					<form onSubmit={onSubmit}>
						<div className="w-full mb-4 border rounded-lg bg-gray-700 border-gray-600">
							<div className="bg-gray-800 rounded-t-lg ">
								<label htmlFor="comment" className="sr-only">
									Your comment
								</label>
								<textarea
									id="comment"
									rows="4"
									className="w-full resize-none rounded-t-lg p-2 text-sm bg-gray-800 border-0 focus:ring-0 placeholder-gray-400"
									placeholder="Write a comment..."
									required
								></textarea>
							</div>
							<div className="flex items-center justify-between px-2 py-2 border-t border-gray-600">
								<div className="flex">
									<button type="button" className="inline-flex justify-center items-center p-2 text-gray-400 rounded hover:text-white hover:bg-gray-600">
										<IoHappy className="w-5 h-5 text-gray-400" />
										<span class="sr-only">Add emoji</span>
									</button>
								</div>
								<button
									type="submit"
									className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
								>
									Post comment
								</button>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	);
};
export default CommentReplyForm;
