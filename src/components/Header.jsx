import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Services", href: "#services" },
	{ label: "Data Centers", href: "#datacenters" },
	{ label: "Projects", href: "#projects" },
	{ label: "Safety", href: "#safety" },
	{ label: "Contact", href: "#contact" },
];

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-surface-elevated/95 backdrop-blur border-b border-border mix-blend-difference text-white">
			<div className="container-narrow mx-auto flex items-center justify-between h-16 px-4 md:px-8">
				<a href="#home" className="flex items-center gap-2">
					<span className="text-xl font-bold tracking-tight text-inherit">
						SSK
					</span>
					<span className="text-sm font-medium text-inherit hidden sm:inline">
						ENTERPRISES
					</span>
				</a>

				<nav className="hidden lg:flex items-center gap-6">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-inherit hover:mix-blend-normal hover:text-inherit hover:underline underline-offset-4 transition-colors hover:opacity-90"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="hidden lg:flex items-center gap-3">
					<a
						href="tel:+919702870786"
						className="flex items-center gap-1.5 text-sm font-medium text-inherit hover:mix-blend-normal"
					>
						<Phone className="w-4 h-4" />
						+91-9702870786
					</a>
					<a
						href="#contact"
						className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity"
					>
						Get a Quote
					</a>
				</div>

				<button
					onClick={() => setOpen(!open)}
					className="lg:hidden text-inherit"
					aria-label="Toggle menu"
				>
					{open ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{open && (
				<div className="lg:hidden bg-surface-elevated border-b border-border">
					<div className="px-4 py-4 space-y-3">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="block text-sm font-medium text-inherit hover:mix-blend-normal hover:text-primary transition-colors"
							>
								{link.label}
							</a>
						))}
						<a
							href="#contact"
							onClick={() => setOpen(false)}
							className="block bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium text-center mt-4"
						>
							Request Consultation
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
