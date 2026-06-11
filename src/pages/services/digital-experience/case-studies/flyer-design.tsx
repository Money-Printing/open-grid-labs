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
	{ value: "3.2×", label: "Response rate increase on same audience", accent: "from-amber-500 to-orange-600" },
	{ value: "50K", label: "Flyers per quarter — production-efficient spec", accent: "from-yellow-500 to-amber-600" },
	{ value: "3 wk", label: "Brief to print-ready delivery", accent: "from-orange-500 to-red-600" },
	{ value: "38%", label: "Reduction in design and print cost per response", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Six visual elements competing for the reader's attention with no clear hierarchy" },
	{ text: "Logo and brand name as the largest element — already known to the recipient and least decision-relevant" },
	{ text: "QR code and website URL smaller than decorative elements — the action buried by the aesthetics" },
	{ text: "Terms and conditions in unreadable 6pt type taking up 20% of the flyer's surface" },
	{ text: "No visual distinction between the offer and the action — both communicated in the same size type" }
];

const SOLUTIONS = [
	{ text: "A three-element hierarchy: action (largest) → offer summary (medium) → brand + details (small)" },
	{ text: "QR code at the largest practically useful size — 25mm × 25mm minimum — central to the design" },
	{ text: "Offer summary in a single sentence supporting the action without competing with it" },
	{ text: "Brand mark at confidence-building scale — present but not dominant" },
	{ text: "A production-efficient specification reducing unit print cost by 22% through paper weight optimisation" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Brief", items: ["CTA definition", "Offer hierarchy", "Audience context", "Distribution channel"], color: "hsl(45,100%,50%)" },
	{ title: "Hierarchy", items: ["3-element hierarchy", "CTA size & placement", "QR code sizing", "Information sequence"], color: "hsl(35,100%,50%)" },
	{ title: "Design", items: ["Visual execution", "Typography", "Colour contrast", "CMYK production spec"], color: "hsl(20,100%,50%)" },
	{ title: "Production", items: ["Print-ready PDF", "Preflight", "Print liaison", "QC on delivery"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Hierarchy Brief & Concept (Week 1)",
		desc: "OpenGridLabs wrote a hierarchy brief before opening a design file: what is the one thing this flyer must communicate? What is the second? What is the third? Everything else was classified as supporting detail. The hierarchy decision was agreed with the client before design began — preventing the most common flyer design failure of trying to communicate too much.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design & Refinement (Week 2)",
		desc: "Two design approaches were developed and presented: both built around the agreed hierarchy, each with a distinct visual character. The chosen direction was refined — typography, colour, QR code sizing, white space — with a specific check that the most important element remained most prominent at arm's length distance.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Production & Delivery (Week 3)",
		desc: "The print specification was reviewed: paper weight (130gsm silk rather than the prior 170gsm — adequate for distribution, lower cost per unit), CMYK colour management, and bleed. Press-ready PDFs were delivered and print-managed by OpenGridLabs.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Campaign response rate", before: "Baseline", after: "3.2× baseline", change: "3.2× baseline" },
	{ metric: "Cost per response", before: "Baseline", after: "-38%", change: "-38%" },
	{ metric: "QR code scan-through rate", before: "Baseline", after: "+2.9×", change: "+2.9×" },
	{ metric: "Recipient action within 24h", before: "Low", after: "Measurably higher", change: "Measurably higher" },
	{ metric: "Design elements competing for attention", before: "6 (undifferentiated)", after: "3 (clear hierarchy)", change: "3 (clear hierarchy)" },
	{ metric: "Print cost per unit", before: "Baseline", after: "-22% (paper optimisation)", change: "-22% (paper optimisation)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Hierarchy is the brief",
		desc: "Before opening a design file, agreeing the hierarchy in writing — 'the most important element is the action, the second is the offer, the third is the brand' — is the single most valuable thing in flyer design. A hierarchy agreed before design begins produces better results than any design choice made during it."
	},
	{
		title: "The QR code is the product",
		desc: "If the flyer's goal is to get a QR code scanned, the QR code should be the most visually prominent interactive element on the flyer. Decorating around a small QR code signals that the design was led by aesthetics rather than function."
	},
	{
		title: "3 seconds is the creative brief",
		desc: "Every flyer design decision should be evaluated at arm's length for 3 seconds. If the most important element has not communicated in that time, the hierarchy is wrong. This is a simple test that eliminates the most common flyer design failures before they go to print."
	}
];

const FAQS = [
	{
		q: "What size should a promotional flyer be?",
		a: "A5 (148×210mm) is the most common promotional flyer size — large enough for visual impact, small enough for easy distribution and handling. DL (99×210mm) is preferred for door-drop distribution and fits standard letter boxes. A4 (210×297mm) is used when more information is genuinely needed. Larger flyers are used for posters and point-of-sale displays."
	},
	{
		q: "How many elements should a flyer have?",
		a: "A maximum of three primary elements: the offer or action (the reason to respond), the benefit or incentive (the reason to act), and the brand (the source). Supporting details (terms, dates, URL) can be present but should be clearly secondary in visual hierarchy. Flyers with more than three primary elements typically produce poor response rates."
	}
];

export default function FlyerDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Promotional Flyer Design Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned a promotional flyer with a CTA-led hierarchy, lifting response rates by 3.2× on the same audience."
				canonical="/services/digital-experience/flyer-design"
				keywords="Flyer Design, Promotional Flyer, Print Flyer, CTA Design, Response Rate, A5 Flyer, QR Code Design, Marketing Flyer, Direct Mail Design, Graphic Design"
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
					title="How a CTA-Led Flyer Redesign Increased Campaign Response Rate 3.2× on the Same Audience Without Changing the Offer"
					description="A company distributing 50,000 promotional flyers per quarter was getting a response rate that barely justified the print and distribution spend. The flyer had a clear design, a reasonable offer, and a complete set of information. What it lacked was a hierarchy that made the call to action — the one thing it needed the reader to do — visually dominant. OpenGridLabs redesigned the flyer around the CTA as the primary visual element, and response rate tripled on the next run."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Retail / Consumer Services (anonymised)" },
						{ label: "Scope", value: "Quarterly promotional flyer redesign" },
						{ label: "Print Volume", value: "50,000 per quarter" },
						{ label: "Timeline", value: "3 weeks design + production" }
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
						"Our client distributes 50,000 A5 promotional flyers per quarter in a retail setting. The flyer communicates a promotional offer and asks the recipient to take a specific action — scan a QR code, visit a website, or call a number. The previous design was typical of its type: logo at the top, offer description in the middle, terms and conditions at the bottom, and a QR code somewhere in between. Professional, clear, and ineffective.",
						"A flyer has approximately 3 seconds to communicate one thing. The prior design was attempting to communicate six. The hierarchy placed the logo — which the recipient already knew — at the largest size, and the call to action — the one thing the flyer needed them to do — at the smallest. OpenGridLabs redesigned the hierarchy in the opposite direction: the action first, the offer supporting it, the brand confirming it, the details below that.",
						"Flyer design is the creation of a single-sheet printed promotional communication — typically A5, A4, or DL format — designed to generate a specific response (visit, call, scan, redeem) from a recipient who has not sought out the communication. Because flyer recipients are typically in motion and not actively reading, effective flyer design operates on a 3-second hierarchy: the most important element (the action or the benefit) must communicate before anything else. A flyer that requires reading to understand is a flyer that doesn't work."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Flyer Design?"
					definitionText="Flyer design is the creation of a single-sheet printed promotional communication — typically A5, A4, or DL format — designed to generate a specific response (visit, call, scan, redeem) from a recipient who has not sought out the communication. Because flyer recipients are typically in motion and not actively reading, effective flyer design operates on a 3-second hierarchy: the most important element (the action or the benefit) must communicate before anything else. A flyer that requires reading to understand is a flyer that doesn't work."
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
					description={"Improving flyer response rates by shifting visual emphasis from the logo to the QR code and call-to-action."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Flyer Design Process"}
					description={"A strategic approach across hierarchy briefs, CTA sizing, color contrast, and print validation checks."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Flyer Production Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A rapid three-week timeline from hierarchy briefs to final design refinement and print-ready delivery."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Measuring response rate uplifts, cost reductions, scan metrics, and print efficiency."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We changed nothing except the design and got three times the response. Same offer, same audience, same distribution. The hierarchy was the whole answer — the old flyer wasn't bad, it just wasn't asking anyone to do anything clearly."}
					author={"Marketing Director"}
					subtitle={"Confidential Retail Company"}
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
					title={"50,000 flyers with a response rate that barely pays for itself?"}
					description={"OpenGridLabs designs flyers — CTA-led hierarchy, production-efficient specifications, and 3-second impact — that give your audience one clear thing to do and make it obvious."}
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
