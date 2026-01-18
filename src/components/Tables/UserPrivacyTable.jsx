const UserPrivacyTable = ({ formInputs, onChange }) => {
	const inputValues = ["private", "friends", "public"];
	const inputLabels = ["Only me", "My Friends", "Everyone"];
	const fields = [
		{
			fieldLabelName: "Your profile picture",
			inputName: "privacyProfilePicture",
		},
		{
			fieldLabelName: "Your background picture",
			inputName: "privacyBackgroundPicture",
		},
		{
			fieldLabelName: "Your bio",
			inputName: "privacyBio",
		},
		{
			fieldLabelName: "Your city",
			inputName: "privacyLocationCity",
		},
		{
			fieldLabelName: "Your country",
			inputName: "privacyLocationCountry",
		},
		{
			fieldLabelName: "Your company",
			inputName: "privacyCompany",
		},
		{
			fieldLabelName: "Your languages",
			inputName: "privacyLanguages",
		},
		{
			fieldLabelName: "Your website",
			inputName: "privacyWebsite",
		},
		{
			fieldLabelName: "Projects you like",
			inputName: "privacyProjectLike",
		},
	];

	return (
		<>
			<table className="w-full shadow-lg">
				<thead className="uppercase text-sm sm:text-base bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-12 md:py-3">
							Information
						</th>
						{inputLabels.map((label, index) => (
							<th key={index} scope="col" className="text-center p-2 md:px-4 md:py-3">
								{label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{fields.map((field, index) => {
						return (
							<tr key={index} className="text-sm border-b bg-gray-800 border-gray-700">
								<td scope="row" className="px-2 md:px-12 py-2">
									<div className="sm:whitespace-nowrap">
										<p>{field.fieldLabelName}</p>
									</div>
								</td>
								{inputValues.map((inputValue, index) => {
									return (
										<td key={index} className="md:px-4 py-2">
											<div className="text-center">
												<input type="radio" value={inputValue} name={field.inputName} checked={formInputs[field.inputName] === inputValue} onChange={onChange} className="w-4 h-4 cursor-pointer" />
											</div>
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default UserPrivacyTable;
