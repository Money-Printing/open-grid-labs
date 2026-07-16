import { Link } from "react-router";

import {
	ArrowLeft,
	Layers,
	Cpu,
	Activity,
	Database,
	Zap,
	Eye
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
	{ value: "58%", label: "Lift in brand perception scores", accent: "from-amber-500 to-orange-600" },
	{ value: "16 wk", label: "From fragmented brand to cohesive system", accent: "from-yellow-500 to-amber-600" },
	{ value: "7", label: "Visual identity pillars defined and codified", accent: "from-orange-500 to-red-600" },
	{ value: "94%", label: "Brand consistency score 6 months post-launch", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Website, product, sales materials, and events all using different visual languages" },
	{ text: "No agreed colour system — seven different blues appeared across materials" },
	{ text: "Typography inconsistent across digital and print, with three different typeface families in active use" },
	{ text: "No imagery guidelines — photography, illustration, and icons mixed without coherent style" },
	{ text: "Internal design requests slow because every question required a decision rather than a lookup" }
];

const SOLUTIONS = [
	{ text: "Complete visual identity system across logo, colour, typography, imagery, icons, and motion" },
	{ text: "A semantic colour system with primary, secondary, functional, and neutral palettes" },
	{ text: "A two-typeface typographic system with clear hierarchy levels from display to caption" },
	{ text: "An imagery art direction guide defining photographic style, composition, and subject matter" },
	{ text: "An iconography system of 80 icons in a consistent visual language with usage guidelines" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Logo", items: ["Logomark", "Wordmark", "Combination", "Variants", "Clear space", "Misuse"], color: "hsl(45,100%,50%)" },
	{ title: "Foundations", items: ["Colour system (semantic tokens)", "Typography scale", "Spacing", "Grid"], color: "hsl(35,100%,50%)" },
	{ title: "Expression", items: ["Imagery art direction", "Iconography", "Illustration style", "Motion principles"], color: "hsl(20,100%,50%)" },
	{ title: "Application", items: ["Digital templates", "Print templates", "Guidelines doc", "Brand portal"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit, Strategy & Direction (Weeks 1–4)",
		desc: "OpenGridLabs audited all existing brand materials, documented every visual inconsistency, and ran a brand personality workshop to establish the visual direction. Three distinct visual territories were explored — each interpreting the brand's personality through a different lens — before the direction was chosen.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "System Design (Weeks 5–12)",
		desc: "Each pillar of the visual identity was designed: logo system, colour tokens, typographic scale, imagery art direction, iconography system, and motion principles. Every decision was cross-referenced to the brand personality attributes established in Phase 1.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Guidelines, Templates & Launch (Weeks 13–16)",
		desc: "The complete brand guidelines document was written and designed. Core templates — pitch deck, email signature, social media, print materials — were produced as branded starting points. An internal brand portal was built for self-service access to all assets and guidelines.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Brand perception score (survey)", before: "Baseline", after: "+58%", change: "+58%" },
	{ metric: "Brand consistency audit (6 mo post)", before: "Low", after: "94%", change: "94%" },
	{ metric: "Internal design request turnaround", before: "3–5 days", after: "Same day (guidelines)", change: "Same day (guidelines)" },
	{ metric: "Typeface families in use", before: "3 competing", after: "1 system", change: "1 system" },
	{ metric: "Colour values in use", before: "7 blues", after: "1 defined system", change: "1 defined system" },
	{ metric: "Conference/event brand recall", before: "Low", after: "Measurably higher", change: "Measurably higher" }
];

const SUCCESS_FACTORS = [
	{
		title: "Systems replace decisions",
		desc: "The purpose of a visual identity system is to make routine design decisions in advance, so the team spends creative effort on original work rather than re-deciding what colour to use. Every hour spent building the system saves ten hours over the following year."
	},
	{
		title: "Cross-pillar consistency is the deliverable",
		desc: "A logo that doesn't relate to the colour palette, or a colour palette that contradicts the typography choices, produces a system that looks assembled rather than designed. Designing all pillars simultaneously — not sequentially — produces coherence."
	},
	{
		title: "A brand portal turns guidelines into behaviour",
		desc: "A guidelines PDF is documentation. A self-service brand portal with downloadable assets, approved templates, and searchable guidance changes how teams interact with the brand in daily work. The format of the deliverable determines whether it is used."
	}
];

const FAQS = [
	{
		q: "What is the difference between a visual identity and a logo?",
		a: "A logo is one element of a visual identity. A visual identity is the complete set of visual elements — logo, colour, typography, imagery, iconography, motion — that together form a recognisable visual language. Many companies have a logo but not a visual identity system."
	},
	{
		q: "What is a brand guidelines document?",
		a: "A brand guidelines document (also called a brand book or brand standards) is the reference guide that specifies how the visual identity should be applied — the correct logo variants and sizes, the exact colour values, the typography hierarchy, the imagery style, and the rules governing every application. It makes consistency possible at scale."
	}
];

export default function VisualIdentityCaseStudy() {
	return (
		<>
			<SEO
				title="Visual Identity System Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a complete visual identity system, aligning logo, colour, type, imagery, icons, and motion to boost perception scores by 58%."
				canonical="/services/digital-experience/visual-identity"
				keywords="Visual Identity, Brand Identity System, Colour System, Typography, Brand Guidelines, Imagery Art Direction, Iconography, Motion Design, Brand Design, OpenGridLabs"
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
					categoryTag="Case Study · Brand Identity"
					title="How a Cohesive Visual Identity System Made a Company Look Like the Category Leader It Was Becoming"
					description="A company that had grown rapidly through product excellence had neglected its visual identity — each team had made independent design decisions, producing a fragmented brand that looked different on the website, in the product, in sales materials, and at events. OpenGridLabs designed a complete, cohesive visual identity: logo, colour, typography, imagery style, iconography, and motion principles — unified into a system the company could maintain at scale."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / Growth-stage (anonymised)" },
						{ label: "Scope", value: "Complete visual identity system" },
						{ label: "Timeline", value: "16 weeks" },
						{ label: "Deliverables", value: "Logo · Colour · Type · Imagery · Icons · Motion · Guidelines" }
					]}
				/>

				<CaseStudyCarousel
					slug="visual-identity"
					title="How a Cohesive Visual Identity System Made a Company Look Like the Category Leader It Was Becoming"
					accentColor="purple"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/visual-identity/1.jpg",
						"/images/case-studies/visual-identity/2.jpg"
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
					contextIcon={<Eye className="w-5 h-5" />}
					contextParagraphs={[
						"Our client had grown from 10 to 150 people in three years, and the brand had grown around them — or rather, hadn't. The website had been redesigned twice by different agencies. The product had its own design language. Sales used a pitch deck template from year one. Investor materials looked like a different company entirely. There was no single visual language that connected these touchpoints into something recognisable as one brand.",
						"The fragmentation had a practical cost. At industry conferences, the company's booth looked inconsistent with its website. Prospects who visited the website and then saw a sales deck sometimes asked if they were the same company. Internal design requests took longer because there were no agreed answers to basic visual questions — what blue? which typeface? The company needed to define what it looked like before it could communicate consistently.",
						"Visual identity is the complete set of visual elements that represent a brand — logo, colour palette, typography, imagery style, iconography, illustration style, and motion principles. Together they form a visual language that makes a brand recognisable across all its touchpoints, from a business card to a billboard to a product UI. A visual identity system is different from a logo: the logo is one element of the system, not the system itself."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Visual Identity?"
					definitionText="Visual identity is the complete set of visual elements that represent a brand — logo, colour palette, typography, imagery style, iconography, illustration style, and motion principles. Together they form a visual language that makes a brand recognisable across all its touchpoints, from a business card to a billboard to a product UI. A visual identity system is different from a logo: the logo is one element of the system, not the system itself."
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
					description={"Reconciling multiple conflicting visual styles to establish a singular brand presence."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Visual Identity System Process"}
					description={"A systematic approach across brand foundations, digital assets, and guideline documentation."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Visual Identity Pipeline Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A structured 16-week timeline from design strategy and workshops to system design and portal launch."}
					phaseColors={["hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)"]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults
					description="Codifying design pillars and establishing self-service templates cut request turnaround and boosted recognition."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"The moment the brand guidelines landed, the team stopped asking 'which blue?' The system made every individual design decision faster because most of them had already been made. The brand started looking like itself — consistently, everywhere."}
					author={"Head of Marketing"}
					subtitle={"Confidential Technology Company"}
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
					title={"Every team using a different visual language?"}
					description={"OpenGridLabs designs complete visual identity systems — logo, colour, typography, imagery, and iconography — unified into a brand that looks like itself everywhere it appears."}
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
