import Image from "next/image";
import Link from "next/link";

const UserCard = () => {
	return (
		<>
			<div className="rounded-lg max-w-66 shadow-2xl bg-blue-900">
				<div className="flex flex-col items-center p-4">
					<Link href="/users/01">
						<Image src="https://picsum.photos/id/64/300/300" className="rounded-full" alt="Card" width={300} height={200} />
					</Link>
				</div>
				<div className="p-4 text-center">
					<Link href="/users/01">
						<h2 className="font-semibold text-xl py-1">Marine</h2>
						<p className="py-1">Hello! I am web designer ready to help you with your project ideas.</p>
					</Link>
					<div className="py-2 flex flex-wrap justify-end">
						<Link href="/tags/ocean">
							<div className="inline-flex items-center bg-blue-300 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Dev</div>
						</Link>
						<Link href="/tags/mecanics">
							<div className="inline-flex items-center bg-orange-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Web</div>
						</Link>
						<Link href="/tags/exploration">
							<div className="inline-flex items-center bg-green-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Frontend</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserCard;
