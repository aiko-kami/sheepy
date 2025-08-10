"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { IoArrowForwardOutline, IoRocketOutline, IoHeartOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import Triforce from "@/components/Loaders/Triforce";

import { useAuth } from "@/contexts/AuthContext";

const StepStartProject = ({ goToStep }) => {
	const { user } = useAuth();
	const router = useRouter();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			<div className="flex items-center justify-center">
				{/* Overlay when loading */}
				{loading ? (
					<div className="flex items-center justify-center z-10">
						<Triforce />
					</div>
				) : (
					<div className="max-w-4xl mx-auto text-center">
						{/* Hero Icon */}
						<div className="inline-flex items-center justify-center w-22 h-22 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-2xl shadow-blue-500/25">
							{user ? <IoRocketOutline className="h-11 w-11 text-white" /> : <IoHeartOutline className="h-11 w-11 text-white" />}
						</div>

						{/* Title */}
						{user ? (
							<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 leading-[2.15] pt-4 pb-6 drop-shadow-md">
								Start your journey
							</h1>
						) : (
							<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 leading-[2.15] pt-4 pb-6 drop-shadow-md">
								Join Our Community
							</h1>
						)}

						{/* Main content when user logged */}
						{user ? (
							<>
								<div className="max-w-3xl mx-auto mb-8">
									<p className="text-lg md:text-xl text-gray-300 leading-relaxed">
										During your project creation, you'll be guided through a series of steps to provide the necessary details about your project. Let's get started and bring your project to life!
									</p>
								</div>
								{/* Features Grid */}
								<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
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
								{/* Progress Hint */}
								<div className="pt-8 pb-3">
									<p className="text-sm text-gray-400">✨ You can save your progress at any time during the project creation.</p>
								</div>
							</>
						) : (
							<>
								{/* Main content when user is not logged */}
								<div className="max-w-3xl mx-auto mb-8">
									<p className="text-lg md:text-xl text-gray-300 leading-relaxed">Create your free account to start building your first project.</p>
								</div>
								<div className="flex items-center justify-around gap-4 max-w-md mx-auto mb-10">
									<button
										onClick={() => router.push("/sign-up")}
										className="leading-snug shadow-lg transition duration-150 ease-in-out text-base px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										Register
									</button>
									<div className="flex items-center space-x-3 text-gray-400 mx-3">
										<div className="h-px w-8 bg-gray-600"></div>
										<span className="text-lg">or</span>
										<div className="h-px w-8 bg-gray-600"></div>
									</div>
									<button
										onClick={() => router.push("/login")}
										className="leading-snug shadow-lg transition duration-150 ease-in-out text-base px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg"
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										Login
									</button>
								</div>
							</>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default StepStartProject;
