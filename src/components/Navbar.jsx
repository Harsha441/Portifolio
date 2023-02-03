import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../../public/assets/logo.png"

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false)
	const [navBg, setNavBg] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState("#1f2937")

	const handleNav = () => {
		setNav(!nav);
	};
	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow)
		// window.scroll({ behavior: "smooth" })
	}, [])
	return (
		<div style={{ backgroundColor: `${navBg}` }} className={shadow ? "fixed  w-full shadow-xl h-20 z-[100]" : "fixed  w-full h-20 z-[100]"}>
			<div className="flex justify-between items-center px-10 w-full h-full">
				<Image
					src={logo}
					width={100}
					height={50}
					alt="/"
				/>
				<div>
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<Link href="/#home" scroll={false}>
							<li className="ml-10 text-md uppercase hover:border-b font-semibold">Home</li>
						</Link>
						<Link href="/#about" scroll={false}>
							<li className="ml-10 text-md uppercase hover:border-b font-semibold">About</li>
						</Link>
						<Link href="/#skills" scroll={false}>
							<li className="ml-10 text-md uppercase hover:border-b font-semibold">Skills</li>
						</Link>
						<Link href="/#contact" scroll={false}>
							<li className="ml-10 text-md uppercase hover:border-b font-semibold">
								Contact
							</li>
						</Link>
					</ul>
					<div className="md:hidden" onClick={handleNav}>
						<RxHamburgerMenu size={30} />
					</div>
				</div>
			</div>
			<div
				className={
					nav ? "md:hidden fixed top-0 left-0 h-screen w-full bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? "md:hidden fixed top-0 left-0 w-[75%] h-screen md:w-[60%] xl:w-[45%] bg-white p-10 ease-in-out duration-500"
							: "fixed top-0 left-[-100%] w-[75%] h-screen md:w-[60%] xl:w-[45%] bg-white p-10 ease-in-out duration-500"
					}
				>
					<div className="flex justify-between items-center">
						<Image
							src={logo}
							width={100}
							height={25}
							alt="/"
						/>
						<div
							className="rounded-full p-3 shadow-xl shadow-gray-300"
							onClick={handleNav}
						>
							<RxCross2 />
						</div>
					</div>
					<div className="md:mt-10 border-b-2 border-gray-700 ">
						<p className="py-4 w-3/4">Want to build something with me.</p>
					</div>
					<div className="py-4 flex flex-col ">
						<ul className="uppercase">
							<Link href="/#home">
								<li onClick={() => setNav(false)} className="py-4 text-sm font-semibold">Home</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="py-4 text-sm font-semibold">About</li>
							</Link>
							<Link href="/#skills">
								<li onClick={() => setNav(false)} className="py-4 text-sm font-semibold">Skills</li>
							</Link>
							<Link href="/#contact">
								<li onClick={() => setNav(false)} className="py-4 text-sm font-semibold">Contact</li>
							</Link>
						</ul>
						<div className="md:pt-40">
							<p className="uppercase tracking-widest text-blue-400 font-semibold">
								Let's Connect
							</p>
							<div className="flex justify-between items-center w-full my-4">
								<a href="https://www.linkedin.com/in/harshavardhan-kasa-882157136/" target="_blank">

									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
										<FaLinkedinIn size={20} />
									</div>
								</a>
								<a href='https://github.com/Harsha441' target="_blank">

									<div className="rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 cursor-pointer">
										<FaGithub size={20} />
									</div>
								</a>
								<a href="mailto:harshavardhanb22@gmail.com">

									<div className="rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 cursor-pointer">
										<FiMail size={20} />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
