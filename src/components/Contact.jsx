import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";

const Contact = () => {
	const whatsappNumber = "919702870786";
	const whatsappMessage = encodeURIComponent(
		"Hello, I'd like to enquire about your data center services.",
	);
	const emailAddress = "md.mushtaq@sskep.net.in";
	const subject = encodeURIComponent("Project Enquiry — SSKEP Enterprises");
	const body = encodeURIComponent(
		"Hello,\n\nI would like to enquire about your data center services.\n\nRegards,",
	);

	return (
		<section id="contact" className="section-padding bg-surface-elevated">
			<div className="container-narrow mx-auto">
				<div className="mb-12">
					<p className="text-sm font-semibold tracking-wider uppercase text-highlight mb-2">
						Get in Touch
					</p>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Contact Us
					</h2>
					<div className="w-16 h-1 bg-highlight rounded" />
				</div>

				<div className="grid lg:grid-cols-5 gap-12">
					<div className="lg:col-span-2 space-y-8">
						<div>
							<h3 className="font-semibold text-foreground mb-1">
								Mohammad Mushtaq
							</h3>
							<p className="text-sm text-muted-foreground">
								Founder & Proprietor
							</p>
						</div>

						<div className="space-y-4">
							{[
								{
									icon: Phone,
									label: "+91-9702870786 / +91-9699391938",
								},
								{
									icon: Mail,
									label: "md.mushtaq@sskep.net.in",
								},
								{
									icon: Mail,
									label: "sskep.enterprises@gmail.com",
								},
								{ icon: Globe, label: "www.sskep.in" },
							].map((item, i) => (
								<div
									key={i}
									className="flex items-center gap-3 text-sm text-muted-foreground"
								>
									<item.icon className="w-4 h-4 text-primary flex-shrink-0" />
									{item.label}
								</div>
							))}
						</div>

						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
								<div>
									<p className="text-sm font-medium text-foreground">
										Head Office
									</p>
									<p className="text-sm text-muted-foreground">
										Shop No. 14/B, Salim Complex, Opp
										Burhani National English High School,
										Deodi Bazar, Aurangabad – 431001,
										Maharashtra
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
								<div>
									<p className="text-sm font-medium text-foreground">
										Branch Office
									</p>
									<p className="text-sm text-muted-foreground">
										03, A Wing, Gulmohar Apt, Mittal Ground,
										Mumbra, Thane – 400 612
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:col-span-3 flex flex-col items-center justify-center bg-background border border-border rounded-lg p-8 md:p-12 text-center space-y-6">
						<h3 className="font-semibold text-foreground text-xl">
							Ready to discuss your project?
						</h3>
						<p className="text-sm text-muted-foreground max-w-md">
							Reach out directly for a technical consultation on
							data center cooling, power systems, or HVAC
							infrastructure.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
							<a
								href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#1da851] transition-colors"
							>
								<MessageCircle className="w-5 h-5" />
								WhatsApp Us
							</a>
							<a
								href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
							>
								<Mail className="w-5 h-5" />
								Email Us (Gmail)
							</a>
						</div>

						<a
							href="tel:+919702870786"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							<Phone className="w-4 h-4" />
							Or call: +91-9702870786
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
