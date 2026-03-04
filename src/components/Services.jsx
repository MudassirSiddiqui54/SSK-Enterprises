import {
	Thermometer,
	Server,
	Zap,
	LayoutGrid,
	Layers,
	Flame,
	Eye,
	Bug,
} from "lucide-react";

const services = [
	{
		icon: Thermometer,
		title: "HVAC & Precision Cooling",
		desc: "DX and chilled water Precision Air Conditioning (PAC) systems, including in-row cooling units, high-density XD solutions, and comprehensive HVAC installations for critical environments.",
	},
	{
		icon: Server,
		title: "Data Center Solutions",
		desc: "Complete data center build-outs — from rack-level server rooms to 1000+ sq. ft. enterprise facilities. Includes rack systems, cable management, monitoring software, and environmental controls.",
	},
	{
		icon: Zap,
		title: "Power Systems",
		desc: "UPS installation and commissioning (APC Galaxy series), DG set integration, and power distribution for uninterrupted critical operations.",
	},
	{
		icon: LayoutGrid,
		title: "Containment Solutions",
		desc: 'Hot Aisle and Cold Aisle containment systems with recommended 48" cold aisle and 36" hot aisle widths. Optimized airflow management to prevent thermal mixing.',
	},
	{
		icon: Layers,
		title: "False Flooring & Ducting",
		desc: "Unitile raised access floor panel installation, GI/MS ducting fabrication and installation, sub-floor insulation, and sealed perimeter construction for optimal airflow.",
	},
	{
		icon: Flame,
		title: "Fire Detection & Suppression",
		desc: "FM200 fire suppression systems, fire alarm panels, smoke detection, and integrated suppression solutions for sensitive equipment environments.",
	},
	{
		icon: Eye,
		title: "Security & Monitoring",
		desc: "CCTV surveillance systems, Building Management Systems (BMS), rack-level access control, and integrated security infrastructure.",
	},
	{
		icon: Bug,
		title: "Rodent Repellent & Environmental Protection",
		desc: "Ultrasonic and electronic pest repellent systems protecting critical cabling and infrastructure from rodents, insects, and environmental threats.",
	},
];

const Services = () => {
	return (
		<section id="services" className="section-padding bg-background">
			<div className="container-narrow mx-auto">
				<div className="text-center mb-12">
					<p className="text-sm font-semibold tracking-wider uppercase text-highlight mb-2">
						What We Do
					</p>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Comprehensive Infrastructure Services
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						From precision cooling to complete data center builds,
						we deliver engineered solutions that meet the highest
						standards of reliability and performance.
					</p>
					<div className="w-16 h-1 bg-highlight rounded mx-auto mt-4" />
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((s) => (
						<div
							key={s.title}
							className="group bg-surface-elevated border border-border rounded-lg p-6 hover:border-highlight/40 transition-colors shadow-hard-sm shadow-slate-600"
						>
							<div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-4">
								<s.icon className="w-5 h-5 text-primary" />
							</div>
							<h3 className="font-semibold text-foreground mb-2 text-sm">
								{s.title}
							</h3>
							<p className="text-xs text-muted-foreground leading-relaxed">
								{s.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
