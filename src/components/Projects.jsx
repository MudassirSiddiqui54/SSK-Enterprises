import { Building2, MapPin } from "lucide-react";
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@/components/ui/tooltip";

const projects = [
	{
		title: "APC In-Row PAC Installation",
		client: "Gujarat Gas — Punjab & Maharashtra Sites",
		scope: "Installation and commissioning of APC brand in-row precision cooling units across multiple data center facilities.",
		type: "Precision Cooling",
		logos: [{ name: "APC", domain: "apc.com" }],
	},
	{
		title: "Huawei Rack PAC Installation",
		client: "Mahindra & Mahindra, Pune",
		scope: "Rack-level precision air conditioning deployment with Huawei equipment for enterprise server room cooling.",
		type: "Precision Cooling",
		logos: [
			{ name: "Huawei", domain: "huawei.com" },
			{ name: "Mahindra", domain: "mahindra.com" },
		],
	},
	{
		title: "Galaxy UPS Installation",
		client: "TIFR Mumbai, Colaba",
		scope: "Schneider Electric Galaxy 200 UPS system installation for Tata Institute of Fundamental Research — a critical research facility.",
		type: "Power Systems",
		logos: [
			{ name: "Schneider Electric", domain: "se.com" },
			{ name: "TIFR", domain: "tifr.res.in" },
		],
	},
	{
		title: "Chilled Water Piping",
		client: "Multiple Enterprise Sites",
		scope: "Flex, MS, and GI piping work for chilled water precision cooling systems in enterprise data center environments.",
		type: "HVAC Infrastructure",
		logos: [],
	},
];

const majorClients = [
	{ name: "Schneider Electric", domain: "se.com" },
	{ name: "Jio Digital", domain: "jio.com" },
	{ name: "Airtel", domain: "airtel.in" },
	{ name: "Tata Communications", domain: "tata.com" },
	{ name: "Vodafone", domain: "vodafone.com" },
	{ name: "Google", domain: "google.com" },
	{ name: "Amazon", domain: "amazon.com" },
	{ name: "Flipkart", domain: "flipkart.com" },
	{ name: "HDFC Bank", domain: "hdfcbank.com" },
	{ name: "SBI", domain: "sbi.co.in" },
	{ name: "ICICI Bank", domain: "icicibank.com" },
	{ name: "Kotak Mahindra Bank", domain: "kotak.com" },
	{ name: "Accenture", domain: "accenture.com" },
	{ name: "Deloitte", domain: "deloitte.com" },
	{ name: "NTT", domain: "ntt.com" },
	{ name: "Nxtra", domain: "nxtra.in" },
	{ name: "YOTTA", domain: "yotta.com" },
	{ name: "CtrlS", domain: "ctrls.in" },
	{ name: "Airports Authority of India", domain: "aai.aero" },
	{ name: "Max Life Insurance", domain: "maxlifeinsurance.com" },
	{ name: "Mahindra & Mahindra", domain: "mahindra.com" },
	{ name: "TIFR", domain: "tifr.res.in" },
];

const Projects = () => {
	return (
		<section id="projects" className="section-padding bg-surface-elevated">
			<div className="container-narrow mx-auto">
				<div className="mb-12">
					<p className="text-sm font-semibold tracking-wider uppercase text-highlight mb-2">
						Track Record
					</p>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Projects & Clients
					</h2>
					<div className="w-16 h-1 bg-highlight rounded" />
				</div>

				<div className="grid md:grid-cols-2 gap-6 mb-16">
					{projects.map((p) => (
						<div
							key={p.title}
							className="bg-background border-4 border-border rounded-lg p-6"
						>
							<div className="flex items-center justify-between mb-3">
								<span className="inline-block text-xs font-semibold text-highlight bg-highlight/10 px-2 py-1 rounded">
									{p.type}
								</span>
								{p.logos.length > 0 && (
									<div className="flex items-center gap-3">
										{p.logos.map((logo) => (
											<Tooltip key={logo.name}>
												<TooltipTrigger asChild>
													<img
														src={`https://img.logo.dev/${logo.domain}?token=pk_RLPv7P0_Ty6mCQ0Rp1l7WQ`}
														alt={logo.name}
														className="h-5 object-contain opacity-75 hover:opacity-100 transition-opacity duration-200 cursor-help"
														referrerPolicy="no-referrer"
														onError={(e) => {
															const target =
																e.currentTarget;
															const span =
																document.createElement(
																	"span",
																);
															span.textContent =
																logo.name;
															span.className =
																"text-xs font-medium text-muted-foreground";
															target.replaceWith(
																span,
															);
														}}
													/>
												</TooltipTrigger>

												<TooltipContent side="top">
													{logo.name}
												</TooltipContent>
											</Tooltip>
										))}
									</div>
								)}
							</div>
							<h3 className="font-semibold text-foreground mb-1">
								{p.title}
							</h3>
							<div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
								<Building2 className="w-3.5 h-3.5" />
								{p.client}
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{p.scope}
							</p>
						</div>
					))}
				</div>

				<div>
					<h3 className="text-xl font-semibold text-foreground mb-6">
						Trusted by Leading Organizations
					</h3>
					<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
						{majorClients.map((client) => (
							<Tooltip key={client.name}>
								<TooltipTrigger asChild>
									<img
										src={`https://img.logo.dev/${client.domain}?token=pk_RLPv7P0_Ty6mCQ0Rp1l7WQ`}
										alt={client.name}
										className="max-h-12 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-help"
										referrerPolicy="no-referrer"
										onError={(e) => {
											const target = e.currentTarget;
											const span =
												document.createElement("span");
											span.textContent = client.name;
											span.className =
												"text-xs font-medium text-muted-foreground";
											target.replaceWith(span);
										}}
									/>
								</TooltipTrigger>

								<TooltipContent side="top">
									{client.name}
								</TooltipContent>
							</Tooltip>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
