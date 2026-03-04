import { Target, Wrench, Users } from "lucide-react";

const partners = [
	{ name: "Schneider Electric", domain: "se.com" },
	{ name: "APC", domain: "apc.com" },
	{ name: "Uniflair", domain: "uniflair.com" },
	{ name: "FläktGroup", domain: "flaktgroup.com" },
	{ name: "Climaveneta", domain: "climaveneta.com" },
	{ name: "BlueBox", domain: "bluebox.it" },
	{ name: "Unitile", domain: "unitile.in" },
];

const About = () => {
	return (
		<section id="about" className="section-padding bg-surface-elevated">
			<div className="container-narrow mx-auto">
				<div className="mb-12">
					<p className="text-sm font-semibold tracking-wider uppercase text-highlight mb-2">
						About Us
					</p>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Engineering-Led. Quality-Driven.
					</h2>
					<div className="w-16 h-1 bg-highlight rounded" />
				</div>

				<div className="grid md:grid-cols-2 gap-12 mb-16">
					<div>
						<p className="text-muted-foreground leading-relaxed mb-4">
							SSK Enterprises is a specialized engineering firm
							addressing the growing demand for mission-critical
							infrastructure — from precision air conditioning and
							HVAC systems to complete turnkey data center builds.
							Founded by a technocrat with over 23 years of
							cooling industry experience, we combine deep
							technical knowledge with disciplined project
							execution.
						</p>
						<p className="text-muted-foreground leading-relaxed mb-4">
							Since 2014, SSK Enterprises has been an authorized
							vendor for Schneider Electric India Pvt Ltd and a
							sub-contractor for Unitile Raised Access Flooring.
							We are also certified partners of Uniflair, APC,
							FläktGroup, Climaveneta, and BlueBox.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Our core strength lies in initiating projects from
							the drawing board — conducting thorough heat load
							calculations and in-house system design using
							AutoCAD for duct design, ensuring every installation
							is engineered to precise specifications.
						</p>

						<div className="mt-6 pt-6 border-t border-border">
							<p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-4">
								Authorized Partners
							</p>
							<div className="flex flex-wrap items-center gap-6">
								{partners.map((p) => (
									<img
										key={p.name}
										src={`https://logo.clearbit.com/${p.domain}`}
										alt={p.name}
										title={p.name}
										className="h-6 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
										onError={(e) => {
											const target = e.currentTarget;
											const span =
												document.createElement("span");
											span.textContent = p.name;
											span.className =
												"text-xs font-medium text-muted-foreground";
											target.replaceWith(span);
										}}
									/>
								))}
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-foreground mb-4">
							Our Vision
						</h3>
						<p className="text-muted-foreground leading-relaxed mb-8 border-l-2 border-highlight pl-4 italic">
							"To establish ourselves as a leading cooling and
							infrastructure corporation in India, delivering
							reliable, comprehensive solutions across all market
							segments at the most efficient cost."
						</p>

						<h3 className="text-xl font-semibold text-foreground mb-4">
							Operational Reach
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							With a pan-India presence spanning Maharashtra,
							Delhi, Gujarat, Punjab, Rajasthan, Karnataka, West
							Bengal, Assam, and 15+ states, our field teams
							deliver consistent quality regardless of location.
						</p>
					</div>
				</div>

				<div className="grid sm:grid-cols-3 gap-6">
					{[
						{
							icon: Target,
							title: "Precision Engineering",
							desc: "Heat load estimation, AutoCAD duct design, and standards-compliant system architecture from day one.",
						},
						{
							icon: Wrench,
							title: "Turnkey Execution",
							desc: "End-to-end project delivery — from site assessment and design through installation, commissioning, and handover.",
						},
						{
							icon: Users,
							title: "23+ Years Expertise",
							desc: "Our founder's extensive cooling industry experience drives technical excellence across every project.",
						},
					].map((item) => (
						<div
							key={item.title}
							className="bg-background border border-border rounded-lg p-6 shadow-hard shadow-slate-500"
						>
							<item.icon className="w-8 h-8 text-highlight mb-4" />
							<h4 className="font-semibold text-foreground mb-2">
								{item.title}
							</h4>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
