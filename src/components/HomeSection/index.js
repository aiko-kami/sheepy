import Link from "next/link";

const PAGE_PADDING = "mx-2 md:mx-10 lg:mx-36";

const HomeSection = ({ title, href, hrefLabel = "See more...", children, className = "", alternate = false }) => {
	return (
		<section className={`py-10 md:py-14 ${alternate ? "bg-base-600/50" : ""} ${className}`}>
			<div className={PAGE_PADDING}>
				{title && (
					<div className="flex items-baseline gap-3 mb-6">
						<h2 className="font-semibold text-2xl text-primary">{title}</h2>
						{href && (
							<Link href={href} className="text-xs text-secondary hover:text-primary hover:underline transition-colors">
								{hrefLabel}
							</Link>
						)}
					</div>
				)}
				{children}
			</div>
		</section>
	);
};

export default HomeSection;
