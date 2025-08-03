import { IoArrowForwardOutline, IoRocketOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const StartProject = ({ goToStep }) => {
	return (
		<div className="flex items-center justify-center">
			<div className="max-w-4xl mx-auto text-center">
				{/* Hero Icon */}
				<div className="inline-flex items-center justify-center w-22 h-22 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-2xl shadow-blue-500/25">
					<IoRocketOutline className="h-11 w-11 text-white" />
				</div>

				{/* Main Content */}
				<div className="leading-[2.15]">
					<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 leading-[2.15] pt-4 pb-6">Start your journey</h1>

					<div className="max-w-3xl mx-auto mb-8">
						<p className="text-lg md:text-xl text-gray-300 leading-relaxed">
							During your project creation, you'll be guided through a series of steps to provide the necessary details about your project. Let's get started and bring your project to life!
						</p>
					</div>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
					{/* Step 1 */}
					<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
						<div className="flex items-center">
							<div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center mb-2 border border-blue-700">
								<span className="text-blue-400 text-xl font-bold">1</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-100 mb-2 grow px-1">Project Basics</h3>
						</div>
						<p className="text-gray-400 text-sm">Start by naming your project and how it fits within categories.</p>
					</div>

					{/* Step 2 */}
					<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
						<div className="flex items-center">
							<div className="w-10 h-10 bg-green-900/50 rounded-lg flex items-center justify-center mb-2 border border-green-700">
								<span className="text-green-400 text-xl font-bold">2</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-100 mb-2 grow px-1">Quick Overview</h3>
						</div>
						<p className="text-gray-400 text-sm">Craft a concise summary and define your main goal.</p>
					</div>

					{/* Step 3 */}
					<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
						<div className="flex items-center">
							<div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center mb-2 border border-purple-700">
								<span className="text-purple-400 text-xl font-bold">3</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-100 mb-2 grow px-1">Project Details</h3>
						</div>
						<p className="text-gray-400 text-sm">Give a precise decription of your project. What it is, how it works, and what makes it unique.</p>
					</div>

					{/* Step 4 */}
					<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
						<div className="flex items-center">
							<div className="w-10 h-10 bg-orange-900/50 rounded-lg flex items-center justify-center mb-2 border border-orange-700">
								<span className="text-orange-400 text-xl font-bold">4</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-100 mb-2 grow px-1">Purpose & Impact</h3>
						</div>
						<p className="text-gray-400 text-sm">Share your motivations and the impact you aim to create.</p>
					</div>

					{/* Step 5 */}
					<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
						<div className="flex items-center">
							<div className="w-10 h-10 bg-teal-900/50 rounded-lg flex items-center justify-center mb-2 border border-teal-700">
								<span className="text-teal-400 text-xl font-bold">5</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-100 mb-2 grow px-1">When And Where Do We Start ?</h3>
						</div>
						<p className="text-gray-400 text-sm">Set your project's start date and define where it will take place.</p>
					</div>

					{/* Step 6 */}
					<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
						<div className="flex items-center">
							<div className="w-10 h-10 bg-pink-900/50 rounded-lg flex items-center justify-center mb-2 border border-pink-700">
								<span className="text-pink-400 text-xl font-bold">6</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-100 mb-2 grow px-1">Assembling Your Dream Team</h3>
						</div>
						<p className="text-gray-400 text-sm">Find the right talents to collaborate on your project.</p>
					</div>
				</div>
				<div className="">
					<Button
						btnProps={{
							btnSize: "lg",
							type: "button",
							btnColor: "gradientBluePurple",
							btnRounded: "lg",
							action: () => goToStep(1),
						}}
					>
						<div className="flex items-center">
							Begin Step 1
							<IoArrowForwardOutline className="text-xl ml-3" />
						</div>
					</Button>
				</div>

				{/* Progress Hint */}
				<div className="pt-8 pb-3">
					<p className="text-sm text-gray-400">✨ You can save your progress at any time during the project creation.</p>
				</div>
			</div>
		</div>
	);
};

export default StartProject;
