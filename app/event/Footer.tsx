export default function Footer() {
	return (
		<footer className="absolute bottom-0 flex h-fit w-full justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 ">
			<span className="px-4 sm:px-6 md:px-8 text-center font-neue text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-normal text-white leading-relaxed">
				Interested in joining Anthropic & Windsurf and sponsoring Cal Hacks? Reach out at{" "}
				<a
					href="mailto:sponsorship@hackberkeley.org"
					className="underline decoration-white decoration-1 sm:decoration-2 underline-offset-2 hover:opacity-80 transition-opacity"
				>
					sponsorship@hackberkeley.org
				</a>
				. For all other inquiries, contact us at{" "}
				<a
					href="mailto:team@hackberkeley.org"
					className="underline decoration-white decoration-1 sm:decoration-2 underline-offset-2 hover:opacity-80 transition-opacity"
				>
					team@hackberkeley.org
				</a>
				.
			</span>
		</footer>
	);
}
