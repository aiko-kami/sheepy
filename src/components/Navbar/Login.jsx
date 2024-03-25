import Image from "next/image";
import Link from "next/link";

const Login = () => {
	const session = false;
	return (
		<>
			<div className="flex h-full m-auto">
				{!session && (
					<>
						<Link href="/sign-up" className="inline-flex items-center duration-200 active:text-base-450 px-2 py-1.5 tn:m-2">
							Register
						</Link>
						<Link href="/login" className="inline-flex items-center duration-200 active:text-base-450 px-2 py-1.5 tn:m-2">
							Login
						</Link>
					</>
				)}

				{session && (
					<>
						{/* <!-- Dropdown Avatar button --> */}
						<div className="inline-flex items-center sm:px-2">
							<button
								id="dropdownUserAvatarButton"
								data-dropdown-toggle="dropdownUserAvatar"
								data-dropdown-offset-distance="10"
								data-dropdown-offset-skidding="-60"
								className="flex text-sm bg-gray-800 rounded-full w-12 md:me-0 hover:ring-2 hover:ring-gray-300 duration-200 active:ring-base-450"
								type="button"
							>
								<span className="sr-only">Open user menu</span>
								<img className="rounded-full" src="/android-chrome-512x512.png" alt="user photo" />
							</button>
							{/* <!-- Dropdown menu --> */}
							<div id="dropdownUserAvatar" className="z-10 hidden bg-white divide-y text-sm text-center divide-gray-300 rounded-lg shadow w-36 tn:w-44">
								<div className="py-1 text-gray-900">
									<div className="font-semibold truncate py-2">Shippy001</div>
								</div>
								<ul className="py-1 text-gray-700" aria-labelledby="dropdownUserAvatarButton">
									<li>
										<Link href="#" className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
											My profile
										</Link>
									</li>
									<li>
										<Link href="#" className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
											My projects
										</Link>
									</li>
									<li>
										<Link href="#" className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
											Settings
										</Link>
									</li>
									<li>
										<Link href="#" className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
											Help
										</Link>
									</li>
								</ul>
								<div className="py-1">
									<Link href="#" className="block py-2 text-gray-700 hover:bg-gray-200 duration-200 active:text-base-450">
										Sign out
									</Link>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};
export default Login;
