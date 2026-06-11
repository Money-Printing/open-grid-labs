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

const STATS = [
	{ value: "2.8×", label: "Click-through rate improvement", accent: "from-amber-500 to-orange-600" },
	{ value: "61%", label: "Reduction in cost-per-click", accent: "from-yellow-500 to-amber-600" },
	{ value: "14", label: "Banner sizes across the campaign", accent: "from-orange-500 to-red-600" },
	{ value: "4 wk", label: "Brief to live campaign creative", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Banner creative adapted from website screenshots — not designed for the display advertising context" },
	{ text: "0.08% CTR — below display average despite strong targeting and audience data" },
	{ text: "No message hierarchy for the 1-second display context — multiple claims competing for the limited space" },
	{ text: "Static-only creative — no animated variants to test against or to take advantage of formats that support animation" },
	{ text: "14 required sizes each manually adapted rather than produced as a systematic variant suite" }
];

const SOLUTIONS = [
	{ text: "A creative concept designed specifically for the 1-second display advertising context" },
	{ text: "Single-message hierarchy: one claim, one visual, one CTA — nothing else" },
	{ text: "Animated variants for formats that support animation (GIF and HTML5) with message-reveal sequence" },
	{ text: "Static variants for all 14 sizes with consistent visual concept across sizes" },
	{ text: "A/B creative variants testing two visual approaches to identify the highest-performing creative" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Strategy", items: ["Creative brief", "Message hierarchy", "Single claim", "Visual concept", "CTA definition"], color: "hsl(45,100%,50%)" },
	{ title: "Design", items: ["Master concept design", "Message-reveal animation", "Static adaptation", "Size system"], color: "hsl(35,100%,50%)" },
	{ title: "Production", items: ["14 sizes: GIF/HTML5 animated", "Static PNG/JPG", "File size compliance"], color: "hsl(20,100%,50%)" },
	{ title: "Testing", items: ["A/B creative variants", "Performance tracking", "Iteration brief"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Creative Brief & Concept (Week 1)",
		desc: "OpenGridLabs wrote a creative brief reducing the campaign's value proposition to a single claim — the one thing the banner needed to communicate. Two visual concepts were developed, each interpreting that claim in a different visual approach. The concepts were evaluated as animated sequences (does the message-reveal work in 5 seconds?) before any production.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Production — Animated & Static (Weeks 2–3)",
		desc: "The two creative concepts were produced in all 14 sizes in both animated (GIF + HTML5) and static variants, within Google Display Network file size limits. An A/B test structure was set up to run both concepts simultaneously and identify the higher-performing creative within the first week of the campaign.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Campaign Launch & Iteration (Week 4)",
		desc: "Creative was launched with the A/B structure. Within 7 days the winning creative concept was identified. The lower-performing concept was replaced with a variant iteration of the winning creative, extending the test to inform the brief for the next campaign cycle.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Click-through rate", before: "0.08% (prior campaign)", after: "0.22%", change: "+2.8×" },
	{ metric: "Cost-per-click", before: "Baseline", after: "-61%", change: "-61%" },
	{ metric: "Impression-to-engagement conversion", before: "Below display avg", after: "Above display avg", change: "Above display avg" },
	{ metric: "Creative A/B winning concept ID", before: "—", after: "7 days", change: "7 days" },
	{ metric: "14-size production time vs. prior", before: "Ad hoc (no system)", after: "Systematic (variant suite)", change: "Systematic (variant suite)" },
	{ metric: "Next campaign brief quality", before: "Minimal data", after: "Informed by A/B results", change: "Informed by A/B results" }
];

const SUCCESS_FACTORS = [
	{
		title: "Display advertising is a 1-second brief",
		desc: "Every display creative decision should be evaluated in the context of one second of passive attention from someone who wasn't looking for the ad. A website screenshot adapted to banner size is designed for 10 seconds of active attention — the wrong context, producing the wrong result."
	},
	{
		title: "One message, not three",
		desc: "A display banner with three claims communicates zero claims in a 1-second context. A banner with one claim, communicated visually and typographically, communicates one claim clearly. The reduction in message complexity was the highest-impact single design decision."
	},
	{
		title: "Animation is a message-reveal tool",
		desc: "Animated banners that use motion purely decoratively produce no performance benefit. Animated banners that use the reveal sequence to tell a three-beat story — problem, solution, action — exploit the format's capability. The animation brief was written as a story structure before a single frame was designed."
	}
];

const FAQS = [
	{
		q: "What are the standard digital display banner sizes?",
		a: "The core Google Display Network sizes are: 300×250 (medium rectangle — highest volume), 728×90 (leaderboard), 160×600 (wide skyscraper), 300×600 (half page), 320×50 (mobile banner), and 320×100 (large mobile banner). A full campaign typically requires all six sizes plus their animated variants."
	},
	{
		q: "What is the file size limit for display banners?",
		a: "Google Display Network has a 150KB file size limit for static banners (JPG/PNG) and 150KB for GIF animations. HTML5 banners have a 150KB initial load limit with additional assets loading after. Keeping static banners under 100KB and animated GIFs under 120KB provides the best balance of quality and page load performance."
	}
];

export default function BannerDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Digital Banner Design Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned campaign banners across 14 sizes with animated and static variants, lifting click-through rates by 2.8×."
				canonical="/services/digital-experience/banner-design"
				keywords="Banner Design, Digital Banner, Display Advertising, HTML5 Banners, Animated Banners, CTR Improvement, Google Display, Programmatic Advertising, Ad Creative, Graphic Design"
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
					title="How Creative-Led Digital Banner Design Lifted Click-Through Rate 2.8× and Cut Cost-Per-Click 61%"
					description="A company running a display advertising campaign had optimised targeting, bidding, and audience segmentation and still couldn't move the click-through rate above a fraction of a percent. The targeting was finding the right people; the creative was not giving them a reason to click. OpenGridLabs redesigned the banner creative from scratch — 14 sizes, static and animated variants, message hierarchy built for the 1-second display context — and CTR increased 2.8× on the next campaign cycle."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS (anonymised)" },
						{ label: "Formats", value: "14 display sizes · static + animated" },
						{ label: "Timeline", value: "4 weeks" },
						{ label: "Platform", value: "Google Display Network · programmatic" }
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
						"Our client had invested significantly in display advertising — audience building, retargeting, lookalike modelling — and was achieving good impression volume at well-targeted audiences. The click-through rate was 0.08% — below the display average and dramatically below what the targeting investment warranted. Post-campaign analysis of comparable accounts showed that the primary variable explaining performance gaps was creative quality.",
						"The existing banner creative had been produced by adapting the website's static page screenshots into ad-sized formats. They were on-brand, accurate, and visually uninspiring. Display advertising is a 1-second communication context: the banner has one moment to make the viewer do something other than continue scrolling. The existing creative was not designed for that context — it was designed for a website, then shrunk down.",
						"Digital banner design is the creation of advertising creative for display networks — static and animated graphics in multiple sizes intended to appear alongside web content. Display banners have a 1-second communication context: they must earn a click from an audience that is not looking for them, on a surface where they compete with the content the audience came to see. Effective banner design requires a single, immediately graspable message, a strong visual anchor, and a clear call to action — all within the severe space constraints of a 300×250 or 728×90 format."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Digital Banner Design?"
					definitionText="Digital banner design is the creation of advertising creative for display networks — static and animated graphics in multiple sizes intended to appear alongside web content. Display banners have a 1-second communication context: they must earn a click from an audience that is not looking for them, on a surface where they compete with the content the audience came to see. Effective banner design requires a single, immediately graspable message, a strong visual anchor, and a clear call to action — all within the severe space constraints of a 300×250 or 728×90 format."
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
					description={"Solving low click-through rates by designing purpose-built banners for passive, fast-scrolling audiences."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Digital Banner Design Process"}
					description={"A systematic concept definition, static and animated adaptation, and A/B test pipeline."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Banner Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A rapid four-week design sprint from creative briefs and concepts to production and campaign iteration."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Measuring click-through improvements, cost-per-click reductions, and production speedups."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd spent six months improving the targeting and wondering why the CTR wasn't moving. Turns out we needed to fix the creative. The new banners are designed to work in a second — not a second glance, literally one second. That's what display needs."}
					author={"Performance Marketing Manager"}
					subtitle={"Confidential SaaS Company"}
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
					title={"Good targeting, poor creative, low CTR?"}
					description={"OpenGridLabs designs display banner campaigns — 1-second hierarchy, animated variants, and A/B creative testing — that give the right audience a reason to click."}
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
