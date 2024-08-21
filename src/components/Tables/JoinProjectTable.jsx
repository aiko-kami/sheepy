import JoinProjectRow from "@/components/Tables/JoinProjectRow";

const JoinProjectTable = ({ joinProjects, type }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-2xl text-gray-300">
				<thead className="uppercase bg-gray-700 text-gray-200">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Project title
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 hidden md:table-cell">
							Category
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 hidden md:table-cell">
							Talent
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 hidden md:table-cell">
							Message
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Status
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{joinProjects.map((joinProject, index) => {
						return <JoinProjectRow key={index} joinProject={joinProject} type={type} />;
					})}
				</tbody>
			</table>
		</>
	);
};

export default JoinProjectTable;
