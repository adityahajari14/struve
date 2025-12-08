import Image from "next/image";

export default function ServicesPage() {
	return (
		<main className="w-full bg-white pt-24" id="services">
			{/* Section 1: How We Operate */}
			<section className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0">
				{/* Text Column */}
				<div className="px-16 py-14 lg:py-20 flex flex-col gap-7 lg:gap-9 justify-center max-w-4xl mx-auto">
					<h1 className="text-[40px] lg:text-[50px] font-bold leading-tight text-[#444444]">
						How
						<br />
						We Operate
					</h1>

					<div className="space-y-4 lg:space-y-5 text-[#444444]">
						<p className="text-base lg:text-lg leading-[1.3] text-left">
							<span className="font-semibold text-[#444444]">
								We understand that suggesting changes to other consultant's design can be a sensituve issue.
								therefore, we have devised the following 3 methods of operation so the client can choose which best fits his needs:
							</span>
						</p>

						<p className="text-sm lg:text-base leading-[1.35] text-left">
							<span className="font-bold text-[#E68126]">REPORT</span>
							<span className="text-[#444444]"> we will report our findings to our clients and they will manage their consultants in implementing these changes. </span>
						</p>

						<p className="text-sm lg:text-base leading-[1.35] text-left">
							<span className="font-bold text-[#E68126]">REPORT &amp; MANAGE</span>
							<span className="text-[#444444]"> we will report our findings to the client and we will manage the consultants in implementing these changes. Client support would be required in this option. Another branch office within the consultant's team may be required to do the changes. </span>
						</p>

						<p className="text-sm lg:text-base leading-[1.35] text-left">
							<span className="font-bold text-[#E68126]">TAKE OVER THE DESIGN</span>
							<span className="text-[#444444]"> through our international consultant, we will do the complete redesign and authority approval and hand over the Issued For Construction documents to the client.</span>
						</p>
					</div>
				</div>

				{/* Image Column */}
				<div className="relative h-[360px] sm:h-[480px] lg:h-[720px] overflow-hidden">
					<Image
						src="/services1.webp"
						alt="How we operate"
						fill
						priority
						className="object-cover"
					/>
				</div>
			</section>

			{/* Section 2: Benefits */}
			<section className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0">
				{/* Image Column */}
				<div className="relative h-[360px] sm:h-[480px] lg:h-[640px] overflow-hidden">
					<Image
						src="/services2.webp"
						alt="Your benefits"
						fill
						priority
						className="object-cover"
					/>
				</div>

				{/* Text Column */}
				<div className="px-16 py-14 lg:py-20 flex flex-col gap-6 lg:gap-8 justify-center text-left">
					<h2 className="text-[40px] lg:text-[50px] font-bold leading-tight text-[#444444]">
						What Are
						<br />
						Your benefits?
					</h2>

					<p className="text-base lg:text-lg leading-[1.3] text-left text-[#444444] font-semibold max-w-2xl">
						Our value engineering services have no extra cost, as we are compensated based on a percentage of the savings we achieve.
					</p>

					<p className="text-sm lg:text-base leading-[1.35] text-left text-[#444444] max-w-2xl">
						In addition, our clients get the following extra benefits:
					</p>

					<ul className="space-y-4 text-sm lg:text-base leading-relaxed text-[#444444] max-w-2xl">
						<li className="flex gap-3 items-start">
							<span className="text-[#E68126] text-base lg:text-lg leading-none flex-shrink-0">•</span>
							<span>Free structural design review and reporting of any risks or deficiencies.</span>
						</li>
						<li className="flex gap-3 items-start">
							<span className="text-[#E68126] text-base lg:text-lg leading-none flex-shrink-0">•</span>
							<span>Free logistic and constructability analysis.</span>
						</li>
						<li className="flex gap-3 items-start">
							<span className="text-[#E68126] text-base lg:text-lg leading-none flex-shrink-0">•</span>
							<span>Enhancement to construction schedule in most proposed alternatives.</span>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
