import Hero from "../../components/hero";
import SEO from "../../components/seo";
import HomeAbout from "./components/about";
import HomeFaq from "./components/faq";
import HomeMetric from "./components/metric";
import HomeServices from "./components/services";
import HomeTestimonials from "./components/testimonials";
import HomeWorkflow from "./components/workflow";

export default function Home() {
	return (
		<>
			<SEO
				title="OpenGridLabs - We Build and Scale High-Growth Startups"
				description="OpenGridLabs is a premier startup co-builder and growth partner. We turn early-stage ideas into validated MVPs and scale existing startups into market leaders with elite engineering."
				canonical="/"
				keywords="startup builder, startup growth, MVP development, venture studio, tech co-founder, software engineering, SaaS scale, fractional CTO, product development"
			/>
			<Hero />
			<HomeAbout />
			<HomeServices />
			<HomeWorkflow />
			<HomeMetric />
			<HomeTestimonials />
			<HomeFaq />
		</>
	)
}
