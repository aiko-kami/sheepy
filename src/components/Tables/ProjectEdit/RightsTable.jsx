import MemberUserCell from "@/components/Tables/ProjectEdit/MemberUserCell";

const RightsTable = ({ members, formState, onChange, onSelectAll, headers }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="bg-gray-700 text-gray-300">
					<tr>
						<th rowSpan="2" scope="col" className="text-center align-bottom p-2 md:px-4 md:py-3 uppercase">
							User
						</th>
						<th colSpan={headers.labels.length + 1} scope="col" className="font-normal text-center md:px-4 py-1">
							Can update {headers.type}...
						</th>
					</tr>
					<tr>
						{headers.labels.map((header, index) => (
							<th key={index} scope="col" className="font-normal text-center p-2 md:pb-3 md:px-3 text-xs">
								<p
									style={{
										hyphens: "manual",
									}}
									className="first-letter:uppercase"
								>
									{header.label}
								</p>
							</th>
						))}
						<th rowSpan="2" scope="col" className="font-normal fotext-center align-bottom p-2 md:px-4 md:py-3">
							Select all
						</th>
					</tr>
				</thead>
				<tbody>
					{members.map((member, memberIndex) => {
						const memberState = formState.find((m) => m.userId === member.user.userId);

						return (
							<tr key={memberIndex} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<MemberUserCell user={member.user} />
								</td>
								{/* Individual Rights Checkboxes */}
								{headers.labels.map((header, index) => {
									const isChecked = memberState?.permissions[header.right] ?? false;
									return (
										<td key={index} scope="row" className="p-2 md:px-4 md:py-2 text-center">
											<div className="flex items-center justify-center">
												<input
													id={`checkbox-${member.user.userId}-${header.right}`}
													type="checkbox"
													className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
													checked={!!isChecked}
													onChange={() => onChange(member.user.userId, header.right)}
												/>
											</div>
										</td>
									);
								})}
								{/* Select All Checkbox */}
								<td className="p-2 md:px-4 md:py-2 text-center">
									<div className="flex items-center justify-center">
										<input
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
											onChange={() => onSelectAll(member.user.userId)}
											checked={false} // Checked if all rights are true
										/>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default RightsTable;
