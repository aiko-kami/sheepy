"use client";

const Comments = ({ comments = [] }) => {
	return (
		<>
			{comments.length === 0 ? (
				<p className="py-8 text-center">Currently, no questions have been posted. Be the first to ask!</p>
			) : (
				<ul className="grid sm:grid-cols-2 gap-4">
					{comments.map((comment, index) => (
						<li key={index}>{`${comment}`}</li>
					))}
				</ul>
			)}
		</>
	);
};
export default Comments;
