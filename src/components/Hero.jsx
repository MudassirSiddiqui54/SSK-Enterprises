import heroImage from "@/assets/hero-datacenter.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";

const Hero = () => {
	return (
		<section id="home" className="relative min-h-[85vh] flex items-center">
			<div className="absolute inset-0">
				<img
					src={heroImage}
					alt="Data center infrastructure with server racks and precision cooling"
					className="w-full h-full object-cover"
					loading="eager"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
			</div>

			<div className="relative z-10 container-narrow mx-auto px-4 md:px-8 pt-20">
				<div className="max-w-2xl">
					<div className="inline-flex items-center gap-2 bg-highlight/20 border border-highlight/30 rounded-full px-4 py-1.5 mb-6">
						<span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
							Authorized Schneider Electric Vendor
						</span>
					</div>

					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
						Data Center & Cooling Infrastructure{" "}
						<span className="text-highlight">Specialists</span>
					</h1>

					<p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
						End-to-end engineering solutions for HVAC, Precision Air
						Conditioning, UPS systems, and turnkey data center
						projects across India.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 mb-10">
						<a
							href="#contact"
							className="inline-flex items-center justify-center gap-2 bg-highlight text-accent px-6 py-3 rounded font-semibold text-base hover:opacity-90 transition-opacity"
						>
							Request Technical Consultation
							<ArrowRight className="w-4 h-4" />
						</a>
						<a
							href="#services"
							className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded font-medium text-base hover:bg-white/10 transition-colors"
						>
							Our Services
						</a>
					</div>

					<div className="flex flex-wrap gap-x-6 gap-y-2">
						{[
							"23+ Years Experience",
							"Pan-India Operations",
							"IEEE & ASHRAE Compliant",
						].map((item) => (
							<div
								key={item}
								className="flex items-center gap-2 text-sm text-white/95"
							>
								<CheckCircle className="w-4 h-4 text-highlight" />
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
