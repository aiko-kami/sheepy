import { Button } from "@/components/Buttons/Buttons";

import GlobalRightsDetails from "@/components/ProjectEdit/RightsTab/GlobalRightsDetails";
import GeneralRightsDetails from "@/components/ProjectEdit/RightsTab/GeneralRightsDetails";
import MembersRightsDetails from "@/components/ProjectEdit/RightsTab/MembersRightsDetails";
import AttachmentsRightsDetails from "@/components/ProjectEdit/RightsTab/AttachmentsRightsDetails";

const Rights = ({ formState, project, onChange }) => {
	return (
		<>
			{/* Users project rights */}
			<div className="mb-8 lg:mb-14">
				<GlobalRightsDetails formState={formState} project={project} onChange={onChange} />
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Update rights
					</Button>
				</div>
			</div>
			{/* General rights */}
			<div className="mb-8 lg:mb-14">
				<GeneralRightsDetails formState={formState} project={project} onChange={onChange} />
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Update rights
					</Button>
				</div>
			</div>
			{/* Members rights */}
			<div className="mb-8 lg:mb-14">
				<MembersRightsDetails formState={formState} project={project} onChange={onChange} />
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Update rights
					</Button>
				</div>
			</div>
			{/* Attachments rights */}
			<div className="mb-8 lg:mb-14">
				<AttachmentsRightsDetails formState={formState} project={project} onChange={onChange} />
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Update rights
					</Button>
				</div>
			</div>
		</>
	);
};
export default Rights;
