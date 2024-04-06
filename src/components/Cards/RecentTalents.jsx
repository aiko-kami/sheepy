import Image from "next/image";
import Link from "next/link";
import TalentCard from "./TalentCard";

const RecentTalents = () => {
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				<TalentCard />
				<TalentCard />
				<TalentCard />
			</div>
		</>
	);
};

export default RecentTalents;
