const AboutUsPage = () => {
	return (
		<>
			{/* ===== HERO SECTION ===== */}
			<section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
				{/* Nebula glow */}
				<div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
				<div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

				{/* Orbital decoration */}
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
					<div className="w-[700px] h-[700px] border border-violet-500/60 rounded-full bg- animate-[spin_80s_linear_infinite]">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50" />
					</div>
					<div className="absolute w-[550px] h-[550px] border border-blue-500/60 rounded-full animate-[spin_70s_linear_infinite]">
						<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
					</div>
					<div className="absolute w-[300px] h-[300px] border border-cyan-500/60 rounded-full animate-[spin_55s_linear_infinite]">
						<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
					</div>
				</div>

				<div className="relative z-10 text-center max-w-4xl mx-auto">
					<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm mb-8 animate-[fadeInDown_0.8s_ease-out]">
						<span className="text-sm text-white/60 font-medium">Our Story &middot; Our Mission &middot; Our Crew</span>
					</div>

					<h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 animate-[fadeInUp_1s_ease-out]">
						<span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">We Chart the</span>
						<br />
						<span className="relative">
							<span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Course to</span>
						</span>
						<br />
						<span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Great Teams</span>
					</h1>

					<p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed mb-12 animate-[fadeInUp_1.2s_ease-out]">
						Make It! was founded on a simple belief: the right team can achieve anything. We are the navigators who connect brilliant minds across the cosmos of talent, assembling crews destined for
						extraordinary adventures.
					</p>
				</div>
			</section>

			<div className="container mx-auto p-8 text-justify">
				<h1 className="text-7xl mt-12 mb-20 text-center">About Us</h1>
				<p className="mb-4">
					At Make It, your confidence and security are our top priorities. We understand that working on collaborative projects requires a safe and trustworthy environment. That’s why we are committed
					to providing robust security measures and fostering a community where you can feel confident about your engagements.
				</p>
			</div>
		</>
	);
};
export default AboutUsPage;
