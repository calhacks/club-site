"use client";

import Logo from "@/assets/images/logo.png";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
	const router = useRouter();
	return (
		<>
			<motion.nav
				initial={{ width: 150 }}
				animate={{ width: 425 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 15,
				}}
				className="z-50 absolute left-1/2 top-5 hidden h-fit -translate-x-1/2 items-center justify-between rounded-full bg-white/10 shadow-[0px_4px_12px_0px_#0000000D] backdrop-blur-sm md:flex"
			>
				<Image
					alt="Hackathons @ Berkeley Logo"
					src={Logo}
					className="aspect-auto w-[150px] px-8 py-4 cursor-pointer"
					onClick={() => router.push("/")}
				/>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ visualDuration: 0.3, delay: 0.3 }}
					className="pr-8"
				>
					<Button
						variant="secondary"
						onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeFfkYExW4MRIRs3TlC5oNFJFkg4igKRJtloh-3BWI2u5a_WA/viewform", "_blank")}
						className="rounded-full bg-white text-black hover:bg-white/90"
					>
						Mentor & Judge Form
					</Button>
				</motion.div>
			</motion.nav>

			<nav className="absolute left-1/2 top-3 sm:top-5 flex h-fit w-11/12 max-w-sm sm:max-w-md -translate-x-1/2 items-center justify-between rounded-full border border-custom-white bg-custom-white/30 shadow-[0px_4px_12px_0px_#0000000D] backdrop-blur-sm md:hidden">
				<Image
					alt="Hackathons @ Berkeley Logo"
					src={Logo}
					className="aspect-auto w-[100px] xs:w-[130px] sm:w-[150px] px-4 xs:px-6 sm:px-8 py-3 sm:py-4"
					onClick={() => router.push("/")}
				/>

				<div className="pr-3 xs:pr-4 sm:pr-8">
					<Button
						variant="secondary"
						onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeFfkYExW4MRIRs3TlC5oNFJFkg4igKRJtloh-3BWI2u5a_WA/viewform", "_blank")}
						className="rounded-full bg-white text-black hover:bg-white/90 px-3 py-2 text-xs xs:px-4 xs:py-2 xs:text-sm sm:px-4 sm:py-2 sm:text-base min-h-[36px] xs:min-h-[40px] sm:min-h-[44px]"
					>
						<span className="hidden xs:inline">Mentor & Judge Form</span>
						<span className="xs:hidden">Form</span>
					</Button>
				</div>
			</nav>
		</>
	);
}
