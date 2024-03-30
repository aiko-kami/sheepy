/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "superawesomevectors.com",
			},
		],
	},
};

export default nextConfig;
