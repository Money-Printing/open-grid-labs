import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap,
	Paintbrush
} from "lucide-react";
import SEO from "../../../../components/seo";
import MeasurableResults from "../../../../components/measurable-results";
import StatsGrid from "../../../../components/stats-grid";
import CaseStudyHero from "../../../../components/case-study-hero";
import ChallengesSolutions from "../../../../components/challenges-solutions";
import CaseStudyTimeline from "../../../../components/case-study-timeline";
import CaseStudyArchitecture from "../../../../components/case-study-architecture";
import CaseStudyBackground from "../../../../components/case-study-background";
import CaseStudyQuote from "../../../../components/case-study-quote";
import CaseStudySuccessFactors from "../../../../components/case-study-success-factors";
import CaseStudyFaq from "../../../../components/case-study-faq";
import CaseStudyCta from "../../../../components/case-study-cta";
import CaseStudyCarousel from "../../../../components/case-study-carousel";

const STATS = [
	{ value: "3×", label: "Posting frequency with same design headcount", accent: "from-cyan-500 to-blue-600" },
	{ value: "58%", label: "Lift in average post engagement rate", accent: "from-teal-500 to-cyan-600" },
	{ value: "72", label: "Branded templates across all platforms", accent: "from-blue-500 to-cyan-600" },
	{ value: "6 wk", label: "Brief to live template system", accent: "from-cyan-400 to-blue-500" }
];

const CHALLENGES = [
	{ text: "Every social post requiring a designer, limiting frequency to 6–8 posts per month" },
	{ text: "No visual consistency between posts — different team members using different approaches" },
	{ text: "Platform specifications (correct sizes, safe zones) not known to the marketing team" },
	{ text: "Engagement low partly because inconsistent design prevented brand recognition across the feed" },
	{ text: "No scalable system for seasonal content, product launches, and campaign adaptations" }
];

const SOLUTIONS = [
	{ text: "72 branded Figma templates covering 8 content types across 4 platforms and 3 format sizes" },
	{ text: "Locked brand elements (logo, colours, typefaces) with clearly labelled editable content zones" },
	{ text: "Platform size guide and safe zone documentation for the marketing team" },
	{ text: "Seasonal template packs for the top 6 annual campaign moments" },
	{ text: "A 30-minute onboarding workshop enabling the team to use the full system independently" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Foundation", items: ["Platform colour system", "Typography at social scale", "Logo lockup variants", "Photography style"], color: "hsl(180,100%,50%)" },
	{ title: "Architecture", items: ["Content type taxonomy", "Format per platform", "Locked vs editable zones", "Grid system"], color: "hsl(195,100%,50%)" },
	{ title: "Production", items: ["72 Figma templates", "Platform-specific testing", "Accessibility-checked contrast"], color: "hsl(210,100%,50%)" },
	{ title: "Handoff", items: ["Team onboarding", "Usage guide", "Seasonal packs", "Expansion framework"], color: "hsl(225,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit, Architecture & Brand Application (Weeks 1–2)",
		desc: "OpenGridLabs audited all existing social content, interviewed the marketing team about their most common content types, and designed the template architecture: 8 content categories (announcement, thought leadership, product, event, stat, quote, team, seasonal) × 3 platform formats × 4 platforms. The brand system was adapted for social scale — font sizes that work at mobile thumbnail, colours that pop in a crowded feed.",
		accent: "from-cyan-500 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Template Production (Weeks 3–5)",
		desc: "All 72 templates were produced in Figma with locked brand elements, clearly labelled editable zones, and placeholder content demonstrating how each template should be used. Every template was exported at the correct dimensions for its platform and verified on the actual platform interface.",
		accent: "from-blue-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Onboarding, Seasonal Packs & Handoff (Week 6)",
		desc: "A 30-minute Figma onboarding workshop walked the marketing team through the full system. Seasonal template packs for the next six campaign moments were delivered at launch. An expansion framework documented how to add new content types to the system as needs evolved.",
		accent: "from-teal-500 to-cyan-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Posting frequency", before: "6–8 / month", after: "20+ / month", change: "3× more" },
	{ metric: "Average engagement rate", before: "Baseline", after: "+58%", change: "+58%" },
	{ metric: "Post production time", before: "45–60 min (designer)", after: "<15 min (self-service)", change: "<15 min" },
	{ metric: "Brand consistency across posts", before: "Low", after: "High (template-enforced)", change: "High (template-enforced)" },
	{ metric: "Design team time on social", before: "~30% of capacity", after: "<5%", change: "<5%" },
	{ metric: "New post type production time", before: "Days (new brief)", after: "Hours (new template)", change: "Hours (new template)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Template design is system design",
		desc: "Designing 72 templates is not 72 individual design tasks — it is one design task repeated with systematic variation. The investment is in the system architecture and the brand application at social scale; each template is an instance of that system."
	},
	{
		title: "Locked elements protect the brand",
		desc: "A template where the logo can be moved, the colours can be changed, or the font can be swapped is not a branded template — it's a blank canvas with brand assets nearby. Locking brand elements while exposing content zones makes on-brand production structurally guaranteed."
	},
	{
		title: "Fifteen minutes changes the behaviour",
		desc: "A post that takes 45 minutes to produce through a design brief happens occasionally. A post that takes 15 minutes with a template happens routinely. The speed improvement is not just efficiency — it is the behaviour change that enables a three-times increase in posting frequency."
	}
];

const FAQS = [
	{
		q: "What size should social media graphics be?",
		a: "Key sizes: Instagram feed 1080×1080px (square) or 1080×1350px (portrait); Instagram/Facebook stories 1080×1920px; LinkedIn feed 1200×627px; LinkedIn stories 1080×1920px; Facebook feed 1200×630px; X (Twitter) 1600×900px. All platforms support additional formats — always check the current platform documentation as requirements change."
	},
	{
		q: "Should social media graphics be designed in Figma or Canva?",
		a: "Figma is preferred for template systems used by teams with design access and higher brand fidelity requirements — locked components and design system integration make it more robust. Canva is preferred when the content team has no design access and needs a more accessible tool — the trade-off is less precise brand control. Both can deliver good results with the right system design."
	}
];

export default function SocialMediaGraphicsCaseStudy() {
	return (
		<>
			<SEO
				title="Social Media Graphics Template System Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a complete social media graphics template system that tripled posting frequency and lifted engagement 58%."
				canonical="/services/digital-experience/social-media-graphics"
				keywords="Social Media Graphics, Figma Templates, Social Media Design, Brand Templates, LinkedIn Graphics, Instagram Design, Template System, Graphic Design"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Cyan Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(200,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/digital-experience" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Digital Experience Design
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Graphic Design"
					title="How a Social Media Graphics Template System Tripled Posting Frequency and Lifted Engagement 58%"
					description="A company wanted to increase its social media presence significantly but couldn't afford to send every post to a designer. Posting frequency was being throttled by design bandwidth. OpenGridLabs designed a complete branded template system — Figma templates for every post format across every platform the company used — that enabled the marketing team to produce on-brand, visually consistent social content independently, tripling posting frequency and lifting engagement 58%."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS (anonymised)" },
						{ label: "Platforms", value: "LinkedIn · Instagram · X · Facebook" },
						{ label: "Timeline", value: "6 weeks" },
						{ label: "Templates", value: "72 branded templates across all platforms" }
					]}
				/>

					<CaseStudyCarousel
																	slug="social-media-graphics"
																	title="How a Social Media Graphics Template System Tripled Posting Frequency and Lifted Engagement 58%"
																	accentColor="cyan"
																	aspectRatioClass="aspect-[3/2]"
																	images={[
																		"/images/case-studies/social-media-graphics/1.jpg",
																		"/images/case-studies/social-media-graphics/2.jpg"
																	]}
																/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-cyan-500/30"
					hoverTextClass="group-hover:text-cyan-500"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Paintbrush className="w-5 h-5" />}
					contextParagraphs={[
						"Our client's marketing team wanted to post 5 times per week across four social platforms. Their actual posting frequency was 6–8 times per month — not for lack of content ideas or distribution strategy, but because every post required a designer, and the designer's time was limited. Each post meant a brief, a design round, a review, and a delivery. Most posts didn't get made.",
						"The answer was not more designers — it was a template system that moved the design work from per-post production to system design. OpenGridLabs designed the system: 72 branded templates covering every post format and content type the marketing team regularly needed, built in Figma with locked brand elements and editable content zones. The team could produce any post in under 15 minutes without opening a design brief.",
						"Social media graphics templates are pre-designed, branded frames for social media posts that maintain visual consistency while allowing content to be customised by non-designers. A well-designed template system locks brand elements — logo placement, colour application, typography — while exposing editable text and image zones. The result is on-brand social content produced at the speed of content writing rather than the speed of design."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Are Social Media Graphics Templates?"
					definitionText="Social media graphics templates are pre-designed, branded frames for social media posts that maintain visual consistency while allowing content to be customised by non-designers. A well-designed template system locks brand elements — logo placement, colour application, typography — while exposing editable text and image zones. The result is on-brand social content produced at the speed of content writing rather than the speed of design."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-indigo-500/10"
					definitionIconBorderClass="border-indigo-500/20"
					definitionIconColorClass="text-indigo-400"
					glowColorClass="bg-indigo-400"
					gradientFromClass="from-indigo-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Challenges & Solutions"}
					description={"Resolving bottlenecked postings and lack of visual alignment by implementing a secure components framework."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Social Media Template System"}
					description={"A four-stage system designed to take the team from foundational brand specs to onboarding and expansion."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Template Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A six-week design timeline structured into strategic phases of audit, production, and handoff."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(200,100%,50%)", "hsl(220,100%,50%)" ]}
					axisGradientClass={"from-cyan-500 via-blue-500 to-teal-500"}
					badgeColorClass={"text-cyan-500 bg-cyan-500/10 border-cyan-500/20"}
				/>

				<MeasurableResults 
					description="Deploying templates allowed the team to post three times more frequently while lowering production overheads."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We had content to post and no way to post it without waiting three days for a design. The templates changed the maths entirely. Now posting is a fifteen-minute task for the writer. The design is already done."}
					author={"Content Marketing Manager"}
					subtitle={"Confidential SaaS Company"}
					accentLineClass={"bg-cyan-500"}
					iconColorClass={"text-cyan-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-cyan-500/20"}
					iconColorClass={"text-cyan-500"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-cyan-500"}
					activeChevronColorClass={"text-cyan-500"}
				/>

				<CaseStudyCta 
					title={"Designer bottleneck limiting your posting frequency?"}
					description={"OpenGridLabs builds social media graphics template systems — 72 branded templates, locked brand elements, and editable content zones — that let your team post on-brand in 15 minutes."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-500"}
					btnGradientClass={"from-cyan-500 to-blue-500"}
					btnShadowColor={"6,182,212,0.2"}
				/>
			</div>
		</>
	);
}
