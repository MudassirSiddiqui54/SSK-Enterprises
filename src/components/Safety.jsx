import { HardHat, ShieldCheck, Wrench } from "lucide-react";

const Safety = () => {
	return (
		<section id="safety" className="section-padding bg-background">
			<div className="container-narrow mx-auto">
				<div className="mb-12">
					<p className="text-sm font-semibold tracking-wider uppercase text-highlight mb-2">
						Standards
					</p>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Safety & Quality
					</h2>
					<div className="w-16 h-1 bg-highlight rounded" />
				</div>

				<div className="grid sm:grid-cols-3 gap-8">
					{[
						{
							icon: HardHat,
							title: "Site Safety Standards",
							items: [
								"Full PPE compliance for all on-site personnel",
								"Safety harnesses, helmets, and goggles standard issue",
								"Certified scaffolding with safety nets for elevated work",
							],
						},
						{
							icon: ShieldCheck,
							title: "Quality Assurance",
							items: [
								"Heat load calculations before every installation",
								"AutoCAD-based duct design for precision airflow",
								"Post-installation commissioning and testing",
							],
						},
						{
							icon: Wrench,
							title: "Professional Execution",
							items: [
								"Dedicated project management for every deployment",
								"Trained and certified installation teams",
								"Structured cable management and documentation",
							],
						},
					].map((s) => (
						<div
							key={s.title}
							className="border border-border rounded-lg p-6 bg-surface-elevated shadow-hard shadow-slate-500"
						>
							<s.icon className="w-8 h-8 text-primary mb-4" />
							<h3 className="font-semibold text-foreground mb-4">
								{s.title}
							</h3>
							<ul className="space-y-2">
								{s.items.map((item) => (
									<li
										key={item}
										className="text-sm text-muted-foreground flex items-start gap-2"
									>
										<span className="w-1.5 h-1.5 bg-highlight rounded-full mt-1.5 flex-shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Safety;
