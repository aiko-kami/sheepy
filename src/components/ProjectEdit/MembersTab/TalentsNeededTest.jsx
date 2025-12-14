"use client";

import { useState, useRef } from "react";

import { IoPersonAdd } from "react-icons/io5";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

import TalentInputForm from "@/components/Forms/TalentNeededInputForm/TalentInputForm";

const TalentsNeededTest = ({ projectId, talentsNeeded, userPermissions }) => {
	return (
		<>
			{/* Project members */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4 text-red-400">
				<IoPersonAdd className="mr-2 text-2xl" />
				Talents needed TEST
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project talents */}
				{!userPermissions.canEditTalentsNeeded && (
					<div className="mb-4">
						<PermissionsErrorPane message={ERRORS.PROJECT_EDIT.EDIT_TALENTS_NEEDED} />
					</div>
				)}
				<div className="w-full sm:w-100 xl:w-150 mb-8">
					<TalentInputForm projectId={projectId} talentsNeeded={talentsNeeded} disabled={!userPermissions.canEditTalentsNeeded} />
				</div>
			</div>
		</>
	);
};
export default TalentsNeededTest;
