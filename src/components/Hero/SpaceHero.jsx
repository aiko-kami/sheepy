import Link from "next/link";

const SpaceHero = () => {
	return (
		<>
			<div className="text-white relative">
				<section className="relative min-h-140 lg:min-h-210 flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:pt-20 overflow-hidden">
					{/* Orbital rings */}
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<div
							className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] border border-violet-500/10 rounded-full
					animate-[spin_60s_linear_infinite,radarPulse_4s_ease-out_infinite] overflow-hidden"
						/>
						<div
							className="absolute w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] border border-cyan-500/10 rounded-full
					animate-[spin_45s_linear_infinite_reverse,radarPulse_3.5s_ease-out_infinite] overflow-hidden"
						/>
						<div
							className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] border border-purple-500/15 rounded-full
					animate-[spin_30s_linear_infinite,radarPulse_3s_ease-out_infinite]"
						/>
					</div>

					{/* Glowing orb */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-violet-600/20 to-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

					<div className="relative z-10 text-center max-w-5xl mx-auto">
						<h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight mb-10">
							<span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">Launch Your Projects</span>
							<br />
							<span className="bg-gradient-to-l from-violet-300 to-pink-300 bg-clip-text text-transparent">Beyond the Stars</span>
						</h1>

						<p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto mb-12 leading-relaxed">
							<span className="text-white font-oldenburg">Make It!</span> connects visionary&nbsp;
							<span className="font-oldenburg font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-700 bg-clip-text text-transparent">projects</span> with extraordinary&nbsp;
							<span className="font-oldenburg font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-700 bg-clip-text text-transparent">talents</span> across a galaxy of skills.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								href="/start-my-project"
								className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500" />
								<div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<span className="relative flex items-center gap-2">Start my project</span>
							</Link>
							<Link
								href="/projects/join-a-project"
								className="px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:scale-105"
							>
								Explore Projects ✨
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default SpaceHero;
