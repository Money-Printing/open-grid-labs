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
	{ value: "61%", label: "Reduction in campaign asset production time", accent: "from-amber-500 to-orange-600" },
	{ value: "47", label: "Asset sizes from a single master artwork", accent: "from-yellow-500 to-amber-600" },
	{ value: "8", label: "Digital channels covered by the system", accent: "from-orange-500 to-red-600" },
	{ value: "5 wk", label: "Brief to live production system", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "47 asset sizes produced individually per campaign — 3–4 days of repetitive production work" },
	{ text: "No master artwork system — each size was a separate, independent file that drifted from the others" },
	{ text: "Late message changes requiring 47 individual file updates, each a potential error" },
	{ text: "Channel formats not covered because there was insufficient time to produce them" },
	{ text: "Inconsistent visual quality across sizes from manual reformatting" }
];

const SOLUTIONS = [
	{ text: "A master artwork system in Figma with a single source-of-truth design per campaign" },
	{ text: "Automated multi-format exports generating all 47 sizes from the master artwork" },
	{ text: "Channel-specific safe-zone templates preventing key elements from being cropped on any platform" },
	{ text: "A file-naming convention and folder structure enabling asset management at scale" },
	{ text: "A 48-hour campaign asset delivery SLA down from 3–4 days" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Master", items: ["Master artwork", "Brand system", "Copy sign-off", "Safe zone check"], color: "hsl(45,100%,50%)" },
	{ title: "Adapt", items: ["Template overlays", "Text reflow", "Visual hierarchy", "Quality check"], color: "hsl(35,100%,50%)" },
	{ title: "Export", items: ["Automated export", "Correct format", "Size optimisation"], color: "hsl(20,100%,50%)" },
	{ title: "Deliver", items: ["Asset library", "Channel folders", "Spec sheets", "Version control"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "System Design & Templates (Weeks 1–2)",
		desc: "OpenGridLabs designed the master artwork system: a Figma component structure that held the campaign concept in a single master and propagated changes to all size variants automatically. Channel templates were built for all 8 channels with safe zones, recommended text areas, and format-specific constraints documented.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Production Workflow & Automation (Weeks 3–4)",
		desc: "The export workflow was built and tested: automated exports from Figma generating all 47 sizes in the correct file formats and at the correct file sizes per channel. A naming convention and folder structure were established and documented for the internal team.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Handoff & Campaign Delivery (Week 5)",
		desc: "The system was handed to the internal team with a workflow documentation guide. OpenGridLabs ran the first two live campaigns through the new system, demonstrating the complete workflow and achieving the 48-hour SLA target on both.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Campaign asset production time", before: "3–4 days", after: "<8 hours", change: "-61%" },
	{ metric: "Asset sizes covered per campaign", before: "~32 (time-constrained)", after: "47 (full coverage)", change: "47 (full coverage)" },
	{ metric: "Late change update time", before: "3–4 days (redo all)", after: "<2 hours (master update)", change: "<2 hours (master update)" },
	{ metric: "Visual consistency across sizes", before: "Inconsistent (manual)", after: "Consistent (system-driven)", change: "Consistent (system-driven)" },
	{ metric: "New channel addition time", before: "Days (new workflow)", after: "Hours (new template)", change: "Hours (new template)" },
	{ metric: "Marketing team capacity", before: "Bottlenecked on production", after: "Freed for strategy", change: "Freed for strategy" }
];

const SUCCESS_FACTORS = [
	{
		title: "One master, infinite formats",
		desc: "The master artwork is the design. Every size variant is a format adaptation of that design. When the master is structured correctly, reformatting is systematic rather than creative — and automation can do most of it."
	},
	{
		title: "Safe zones are the platform interface",
		desc: "Every digital platform has areas where its own interface overlaps with the ad creative — where a profile picture covers the corner, where a 'Learn More' button obscures the bottom. Safe zone templates prevent brand and message from being hidden by platform UI."
	},
	{
		title: "Naming conventions are findable assets",
		desc: "An asset library with 47 files named 'Final_v3_FINAL.png' is not a library — it is a pile. A standardised naming convention means the right file can be found in seconds, not minutes, by anyone on the team."
	}
];

const FAQS = [
	{
		q: "What are the standard sizes for digital advertising graphics?",
		a: "Digital advertising requires multiple sizes across channels: social media (1080×1080 square, 1080×1920 story/reel, 1200×628 link preview), display advertising (300×250 medium rectangle, 728×90 leaderboard, 160×600 wide skyscraper, 300×600 half page), and email (600px wide header). Each channel has additional format-specific requirements."
	},
	{
		q: "What file format should I use for digital graphics?",
		a: "PNG is preferred for graphics requiring transparency or sharp edges. JPG is preferred for photographic images where file size is a priority. WebP is the modern web format combining PNG quality with JPG file sizes but not universally supported. GIF and HTML5 are used for animated digital ads. SVG is used for scalable vector graphics on websites."
	}
];

export default function DigitalGraphicsCaseStudy() {
	return (
		<>
			<SEO
				title="Digital Graphics System Case Study | OpenGridLabs"
				description="How OpenGridLabs built a multi-format digital graphics system that reduced campaign asset production time by 61% across 8 channels and 47 sizes."
				canonical="/services/digital-experience/digital-graphics"
				keywords="Digital Graphics, Multi-Format Assets, Digital Marketing Graphics, Web Graphics, Social Media Graphics, Display Advertising, Asset Production, Figma, Automated Exports, Graphic Design"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Amber Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(45,100%,50%) 0%, hsl(35,100%,45%) 50%, transparent 100%)`
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
					title="How a Multi-Format Digital Graphics System Reduced Campaign Asset Production Time 61% Across 8 Channels"
					description="A company's marketing team was spending three to four days producing the graphics for every campaign — the same design painstakingly resized, reformatted, and adjusted for each of 8 digital channels and 47 required asset sizes. OpenGridLabs built a master-artwork-led production system that generated all 47 sizes from a single master, slashing production time from days to hours without compromising visual quality."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "E-commerce / Consumer (anonymised)" },
						{ label: "Channels", value: "8 digital channels, 47 asset sizes" },
						{ label: "Timeline", value: "5 weeks to production system" },
						{ label: "Tools", value: "Figma · Automated exports · Asset management" }
					]}
				/>

					<CaseStudyCarousel
									slug="digital-graphics"
									title="How a Multi-Format Digital Graphics System Reduced Campaign Asset Production Time 61% Across 8 Channels"
									accentColor="amber"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/digital-graphics/1.jpg",
										"/images/case-studies/digital-graphics/2.jpg"
									]}
								/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-amber-500/30"
					hoverTextClass="group-hover:text-amber-500"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Paintbrush className="w-5 h-5" />}
					contextParagraphs={[
						"Our client's marketing team ran 4–6 digital campaigns per month across paid social, display advertising, email, website, and app. Every campaign required 47 individual graphic assets covering eight channels — each with its own dimensions, safe zones, and file format requirements. The team had been producing each asset individually: opening a blank canvas, setting the dimensions, recreating the design, exporting. Three to four days, every campaign.",
						"The waste was compounding. Tight campaign timelines meant assets were often rushed, producing quality inconsistencies. New channel formats were simply not served because there wasn't time to add them. When a campaign needed a late message change, 47 files needed updating individually. OpenGridLabs built a system that eliminated the repetition: master artworks designed once, formatted correctly for every channel from a single source.",
						"Digital graphics are visual assets designed for display on screens — websites, social media platforms, display advertising networks, email clients, and apps. Unlike print design, digital graphics must account for screen resolution variability, platform-specific dimensions and safe zones, file size constraints, animation capabilities, and the different contexts in which they appear (feed, story, banner, email header). A production system manages the complexity of serving many formats from a consistent visual concept."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Are Digital Graphics?"
					definitionText="Digital graphics are visual assets designed for display on screens — websites, social media platforms, display advertising networks, email clients, and apps. Unlike print design, digital graphics must account for screen resolution variability, platform-specific dimensions and safe zones, file size constraints, animation capabilities, and the different contexts in which they appear (feed, story, banner, email header). A production system manages the complexity of serving many formats from a consistent visual concept."
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
					description={"Resolving visual drift and high layout repetition times by using an automated component system."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Digital Graphics Production Pipeline"}
					description={"A systematic approach across master design structures, multi-format exports, and asset library delivery."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Graphics Production Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A five-week design timeline from component design and system mapping to export automation and workflow handoffs."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Deploying Figma component variants and automated exports reduced turnaround and freed team capacity."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Four days of the same thing, every campaign. The system made it eight hours of creative work. The team stopped dreading campaign launch week and started thinking about what to put in the assets instead of how to make them."}
					author={"Head of Marketing"}
					subtitle={"Confidential E-commerce Company"}
					accentLineClass={"bg-amber-500"}
					iconColorClass={"text-amber-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-amber-500/20"}
					iconColorClass={"text-amber-500"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-amber-500"}
					activeChevronColorClass={"text-amber-500"}
				/>

				<CaseStudyCta 
					title={"Spending four days producing the same campaign 47 times?"}
					description={"OpenGridLabs designs digital graphics production systems — master artworks, automated exports, and channel templates — that deliver all your campaign assets in hours, not days."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-amber-400"}
					iconColorClass={"text-amber-500"}
					btnGradientClass={"from-amber-500 to-orange-500"}
					btnShadowColor={"245,158,11,0.2"}
				/>
			</div>
		</>
	);
}
