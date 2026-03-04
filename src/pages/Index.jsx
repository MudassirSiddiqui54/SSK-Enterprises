import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import DataCenterExpertise from "@/components/DataCenterExpertise";
import Projects from "@/components/Projects";
import Safety from "@/components/Safety";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
	TooltipProvider,
} from "@/components/ui/tooltip";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<DataCenterExpertise />
				<TooltipProvider>
					<Projects />
				</TooltipProvider>
				<Safety />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
