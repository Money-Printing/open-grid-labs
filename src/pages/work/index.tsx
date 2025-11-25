import PageHeading from "../../components/page-heading";
import PageTitle from "../../components/page-title";
import { ProjectsGrid } from "./components/projects-grid";

const projects = [
	{
		title: "Frontend Microscopic Scanner",
		description:
			"A highly intuitive frontend microscopic scanner that streamlines workflows and improves accuracy.",
		href: "/work/frontend-microscopic-scanner",
	},
	{
		title: "Cloud Frontend/Backend for Medical Devices",
		description:
			"A reliable cloud platform for managing and analyzing medical device data efficiently.",
		href: "/work/cloud-medical-devices",
	},
	{
		title: "AirTrader – Trading Simulator Application",
		description:
			"A robust and user-friendly trading simulator for strategy testing and decision-making.",
		href: "/work/airtrader-trading-simulator",
	},
	{
		title: "Crypto Analytical Tools",
		description:
			"Comprehensive crypto analysis tools providing actionable insights for investments.",
		href: "/work/crypto-analytical-tools",
	},
	{
		title: "Tread Pattern Monitoring System POC & Analytical Dashboard",
		description:
			"Advanced monitoring system and analytics dashboard to simplify complex data and enhance efficiency.",
		href: "/work/tread-pattern-dashboard",
	},
];


export default function Work() {
	return (
		<>
			<PageTitle
				label="Our Works"
				mainTitle="Featured"
				subTitle="Projects"
				description="Explore our diverse portfolio showcasing innovative, user-centric digital solutions crafted with creativity, precision, and modern technologies tailored to drive real business impact."
			/>

			<div>
				<PageHeading
					preTitle="Our"
					mainTitle="Creative"
					postTitle="Works"
				/>
				<ProjectsGrid projects={projects} />
			</div>
		</>
	)
}