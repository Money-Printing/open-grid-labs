import { useParams, Link, Navigate } from "react-router";
import SEO from "../../../components/seo";
import { motion } from "motion/react";
import { 
	ArrowLeft, 
	BrainCircuit, 
	ArrowRight, 
	Sparkles, 
	CheckCircle2, 
	Terminal
} from "lucide-react";
import { slugify } from "../../../utils/slugify";
import DashboardDesignCaseStudy from "./case-studies/dashboard-design";
import DesignSystemsCaseStudy from "./case-studies/design-systems";
import InteractionDesignCaseStudy from "./case-studies/interaction-design";
import MobileAppDesignCaseStudy from "./case-studies/mobile-app-design";
import PrototypingCaseStudy from "./case-studies/prototyping";
import UsabilityTestingCaseStudy from "./case-studies/usability-testing";
import UserExperienceDesignCaseStudy from "./case-studies/user-experience-design";
import UserInterfaceDesignCaseStudy from "./case-studies/user-interface-design";
import UserResearchCaseStudy from "./case-studies/user-research";
import WebAppDesignCaseStudy from "./case-studies/web-app-design";
import WireframingCaseStudy from "./case-studies/wireframing";
import BannerDesignCaseStudy from "./case-studies/banner-design";
import BrochureDesignCaseStudy from "./case-studies/brochure-design";
import DigitalGraphicsCaseStudy from "./case-studies/digital-graphics";
import FlyerDesignCaseStudy from "./case-studies/flyer-design";
import IconDesignCaseStudy from "./case-studies/icon-design";
import IllustrationCaseStudy from "./case-studies/illustration";
import InfographicsCaseStudy from "./case-studies/infographics";
import MarketingMaterialsCaseStudy from "./case-studies/marketing-materials";
import MotionGraphicsCaseStudy from "./case-studies/motion-graphics";
import PosterDesignCaseStudy from "./case-studies/poster-design";
import PrintDesignCaseStudy from "./case-studies/print-design";
import SocialMediaGraphicsCaseStudy from "./case-studies/social-media-graphics";
import BrandCollateralCaseStudy from "./case-studies/brand-collateral";
import BrandGuidelinesCaseStudy from "./case-studies/brand-guidelines";
import BrandRefreshCaseStudy from "./case-studies/brand-refresh";
import BrandStrategyCaseStudy from "./case-studies/brand-strategy";
import BusinessCardsCaseStudy from "./case-studies/business-cards";
import ColorPaletteCaseStudy from "./case-studies/color-palette";
import LetterheadDesignCaseStudy from "./case-studies/letterhead-design";
import TypographyCaseStudy from "./case-studies/typography";
import VisualIdentityCaseStudy from "./case-studies/visual-identity";
import LogoDesignCaseStudy from "./case-studies/logo-design";
import PackageDesignCaseStudy from "./case-studies/package-design";
import SignageDesignCaseStudy from "./case-studies/signage-design";

interface ExperienceDetail {
	title: string;
	category: "UI/UX Design" | "Brand Identity" | "Graphic Design";
	highlight: string;
	description: string;
	overview: string;
	technologies: string[];
	features: string[];
	useCases: {
		industry: string;
		title: string;
		desc: string;
	}[];
	results: {
		metric: string;
		value: string;
		desc: string;
	}[];
}

const UIUX_SERVICES = [
  "User Research", "Wireframing", "Prototyping", "User Interface Design",
  "User Experience Design", "Design Systems", "Interaction Design", "Usability Testing",
  "Information Architecture", "Mobile App Design", "Web App Design", "Dashboard Design"
];

const BRAND_SERVICES = [
  "Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines",
  "Color Palette", "Typography", "Business Cards", "Letterhead Design",
  "Brand Collateral", "Package Design", "Signage Design", "Brand Refresh"
];

const GRAPHIC_SERVICES = [
  "Print Design", "Digital Graphics", "Marketing Materials", "Social Media Graphics",
  "Infographics", "Poster Design", "Brochure Design", "Flyer Design",
  "Banner Design", "Icon Design", "Illustration", "Motion Graphics"
];

const ALL_SERVICES = [...UIUX_SERVICES, ...BRAND_SERVICES, ...GRAPHIC_SERVICES];

function generateExperienceDetail(_slug: string, title: string): ExperienceDetail {
	let category: "UI/UX Design" | "Brand Identity" | "Graphic Design" = "UI/UX Design";
	let highlight = "#ff3399"; // Pink

	if (UIUX_SERVICES.includes(title)) {
		category = "UI/UX Design";
		highlight = "#ff3399";
	} else if (BRAND_SERVICES.includes(title)) {
		category = "Brand Identity";
		highlight = "#ffbb33";
	} else if (GRAPHIC_SERVICES.includes(title)) {
		category = "Graphic Design";
		highlight = "#00ffff";
	}

	const categoryConfig = {
		"UI/UX Design": {
			tech: ["Figma", "Sketch", "Framer", "Spline", "Canva", "UserTesting"],
			metrics: [
				{ metric: "Decision Speed", value: "+40% Fast", desc: "Average improvement in layout navigability and clarity." },
				{ metric: "Usability Rating", value: "4.8/5", desc: "User feedback scores after iterative testing." },
				{ metric: "Onboarding Friction", value: "-35% Time", desc: "Reduction in user walkthrough requirements." }
			]
		},
		"Brand Identity": {
			tech: ["Adobe CC", "Figma", "Canva", "Typography Tools", "Style Guides"],
			metrics: [
				{ metric: "Brand Consistency", value: "100%", desc: "Aligned templates across print, digital, and mobile environments." },
				{ metric: "Market Recall", value: "+25% Lift", desc: "Positive user associations with the new visual identifiers." },
				{ metric: "Design Handoff", value: "2x Faster", desc: "Asset delivery via automated guidelines and libraries." }
			]
		},
		"Graphic Design": {
			tech: ["Photoshop", "Illustrator", "Indesign", "After Effects", "Blender"],
			metrics: [
				{ metric: "Click-Through Rate", value: "+18% CTR", desc: "Increase in social media and marketing asset conversions." },
				{ metric: "Production Pipeline", value: "3x Output", desc: "Streamlined iteration and rendering cycles." },
				{ metric: "Visual Engagement", value: "98% Positive", desc: "Audience sentiment on newly formatted infographics and banners." }
			]
		}
	};

	const config = categoryConfig[category];

	return {
		title: title,
		category: category,
		highlight: highlight,
		description: `Enterprise-grade ${title} solutions designed to ensure high engagement, visual clarity, and seamless user experiences.`,
		overview: `Our ${title} capability bridges the gap between aesthetics and function. By implementing intuitive user flows, structured grid patterns, harmonious color hierarchies, and interactive elements, we build visual experiences that enhance user satisfaction and support high-impact business outcomes.`,
		technologies: config.tech,
		features: [
			`Tailormade ${title} Execution: Custom aesthetics designed around your brand's unique messaging and audience context.`,
			"Interactive Prototyping: Dynamic user flow verification prior to software implementation.",
			"Design System Alignment: Using cohesive token libraries to guarantee consistent production output.",
			"Responsive Layouts: Creating visual systems that resize seamlessly across web, tablet, and mobile displays."
		],
		useCases: [
			{
				industry: "Fintech & SaaS",
				title: `${title} Redesign & Platform Refresh`,
				desc: `Partnered with SaaS leaders to align the visual identity of their legacy software using ${title}, improving user onboarding completion rates by 22% and reducing customer support tickets.`
			},
			{
				industry: "High-Growth Brands",
				title: `${title}-Driven Campaign Scaling`,
				desc: `Crafted a library of highly engaging marketing and product assets using ${title}, lifting customer sign-ups by 14% while establishing a reusable design foundation.`
			}
		],
		results: config.metrics
	};
}

export default function ServicesDigitalExperienceDetail() {
	const { serviceId } = useParams<{ serviceId: string }>();

	if (serviceId === "dashboard-design") {
		return <DashboardDesignCaseStudy />;
	}

	if (serviceId === "design-systems") {
		return <DesignSystemsCaseStudy />;
	}

	if (serviceId === "interaction-design") {
		return <InteractionDesignCaseStudy />;
	}

	if (serviceId === "mobile-app-design") {
		return <MobileAppDesignCaseStudy />;
	}

	if (serviceId === "prototyping") {
		return <PrototypingCaseStudy />;
	}

	if (serviceId === "usability-testing") {
		return <UsabilityTestingCaseStudy />;
	}

	if (serviceId === "user-experience-design") {
		return <UserExperienceDesignCaseStudy />;
	}

	if (serviceId === "user-interface-design") {
		return <UserInterfaceDesignCaseStudy />;
	}

	if (serviceId === "user-research") {
		return <UserResearchCaseStudy />;
	}

	if (serviceId === "web-app-design") {
		return <WebAppDesignCaseStudy />;
	}

	if (serviceId === "wireframing") {
		return <WireframingCaseStudy />;
	}

	if (serviceId === "brand-collateral") {
		return <BrandCollateralCaseStudy />;
	}

	if (serviceId === "brand-guidelines") {
		return <BrandGuidelinesCaseStudy />;
	}

	if (serviceId === "brand-refresh") {
		return <BrandRefreshCaseStudy />;
	}

	if (serviceId === "brand-strategy") {
		return <BrandStrategyCaseStudy />;
	}

	if (serviceId === "business-cards") {
		return <BusinessCardsCaseStudy />;
	}

	if (serviceId === "color-palette") {
		return <ColorPaletteCaseStudy />;
	}

	if (serviceId === "letterhead-design") {
		return <LetterheadDesignCaseStudy />;
	}

	if (serviceId === "logo-design") {
		return <LogoDesignCaseStudy />;
	}

	if (serviceId === "package-design") {
		return <PackageDesignCaseStudy />;
	}

	if (serviceId === "signage-design") {
		return <SignageDesignCaseStudy />;
	}

	if (serviceId === "typography") {
		return <TypographyCaseStudy />;
	}

	if (serviceId === "visual-identity") {
		return <VisualIdentityCaseStudy />;
	}

	if (serviceId === "banner-design") {
		return <BannerDesignCaseStudy />;
	}

	if (serviceId === "brochure-design") {
		return <BrochureDesignCaseStudy />;
	}

	if (serviceId === "digital-graphics") {
		return <DigitalGraphicsCaseStudy />;
	}

	if (serviceId === "flyer-design") {
		return <FlyerDesignCaseStudy />;
	}

	if (serviceId === "icon-design") {
		return <IconDesignCaseStudy />;
	}

	if (serviceId === "illustration") {
		return <IllustrationCaseStudy />;
	}

	if (serviceId === "infographics") {
		return <InfographicsCaseStudy />;
	}

	if (serviceId === "marketing-materials") {
		return <MarketingMaterialsCaseStudy />;
	}

	if (serviceId === "motion-graphics") {
		return <MotionGraphicsCaseStudy />;
	}

	if (serviceId === "poster-design") {
		return <PosterDesignCaseStudy />;
	}

	if (serviceId === "print-design") {
		return <PrintDesignCaseStudy />;
	}

	if (serviceId === "social-media-graphics") {
		return <SocialMediaGraphicsCaseStudy />;
	}

	const matchedTitle = ALL_SERVICES.find(s => slugify(s) === serviceId);

	if (!serviceId || !matchedTitle) {
		return <Navigate to="/services/digital-experience" replace />;
	}

	const service = generateExperienceDetail(serviceId, matchedTitle);

	return (
		<>
			<SEO
				title={`${service.title} - Digital Experience Design | OpenGridLabs`}
				description={service.description}
				canonical={`/services/digital-experience/${serviceId}`}
				keywords={`${service.title}, ${service.category}, design engineering, UI/UX, graphic design, branding, Figma, opengridlabs`}
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[600px] blur-[160px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, ${service.highlight} 0%, transparent 70%)`
					}}
				/>

				{/* Back Button & Breadcrumbs */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/digital-experience" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Digital Experience Design
					</Link>
				</div>

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-center">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							{/* Category Tag */}
							<div className="flex items-center gap-3">
								<span 
									className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border bg-opacity-10 backdrop-blur-md"
									style={{ 
										borderColor: `${service.highlight}30`, 
										backgroundColor: `${service.highlight}10`,
										color: service.highlight 
									}}
								>
									{service.category}
								</span>
							</div>

							{/* Large Service Title */}
							<h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								{service.title}
							</h1>

							{/* Core Tagline */}
							<p className="text-xl md:text-3xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								{service.description}
							</p>
						</motion.div>

						{/* Interactive Technology Card */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl">
								<div 
									className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full" 
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="flex items-center gap-3 mb-6">
									<Terminal className="w-6 h-6" style={{ color: service.highlight }} />
									<h3 className="text-lg font-bold text-foreground">Design Arsenal</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{service.technologies.map((tech, idx) => (
										<span 
											key={idx} 
											className="px-3.5 py-1.5 rounded-xl text-sm font-medium border border-black/5 dark:border-white/5 bg-foreground/[0.02] dark:bg-white/5 text-foreground/80"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* In-depth Overview Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div 
							className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" 
							style={{ backgroundImage: `linear-gradient(to right, transparent, ${service.highlight}40, transparent)` }}
						/>
						<div className="grid lg:grid-cols-12 gap-12">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<BrainCircuit className="w-5 h-5 text-muted-foreground" />
									<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Deep Dive</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
									Service Overview
								</h2>
								<div 
									className="w-16 h-1 rounded-full" 
									style={{ backgroundColor: service.highlight }}
								/>
							</div>
							<div className="lg:col-span-7">
								<p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
									{service.overview}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Detailed Features & Capabilities */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Capabilities</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Core Features
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{service.features.map((feature, idx) => {
							const [titlePart, descPart] = feature.split(": ");
							return (
								<motion.div 
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: idx * 0.05 }}
									className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors shadow-lg group relative overflow-hidden"
								>
									<div className="flex gap-4 items-start">
										<div className="mt-1">
											<CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: service.highlight }} />
										</div>
										<div className="space-y-2">
											<h3 className="text-xl font-bold text-foreground">
												{titlePart}
											</h3>
											{descPart && (
												<p className="text-muted-foreground leading-relaxed">
													{descPart}
												</p>
											)}
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</section>

				{/* Custom Real-world Use Cases */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Design in Action</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Real-World Use Cases
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{service.useCases.map((useCase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, scale: 0.98 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="glass-panel p-10 rounded-[36px] border border-black/5 dark:border-white/5 flex flex-col justify-between h-[360px] relative overflow-hidden group shadow-xl"
							>
								<div 
									className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
									style={{ backgroundColor: service.highlight }}
								/>
								
								<div className="space-y-4">
									<span 
										className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-foreground/[0.01] text-muted-foreground"
									>
										{useCase.industry}
									</span>
									<h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
										{useCase.title}
									</h3>
								</div>

								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									{useCase.desc}
								</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* Results & Business Impact Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Strategic Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Target Impact Metrics
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{service.results.map((result, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 text-left relative overflow-hidden shadow-lg"
							>
								<div 
									className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-10"
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="space-y-4 relative z-10">
									<span className="text-xs uppercase text-muted-foreground font-bold tracking-wider">
										{result.metric}
									</span>
									<p 
										className="text-4xl md:text-5xl font-black tracking-tight"
										style={{ color: service.highlight }}
									>
										{result.value}
									</p>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{result.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Contact Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none"
							style={{ backgroundColor: service.highlight }}
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto" style={{ color: service.highlight }} />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to deploy this design capability?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								Partner with our UI/UX and visual design experts to custom design, validate, and build beautiful interface ecosystems for your enterprise software products.
							</p>
							<div>
								<Link 
									to="/contact-us"
									className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white"
									style={{ 
										background: `linear-gradient(135deg, ${service.highlight} 0%, hsl(260, 100%, 60%) 100%)`,
										boxShadow: `0 10px 30px ${service.highlight}30`
									}}
								>
									Get in Touch <ArrowRight className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
