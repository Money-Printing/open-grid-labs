import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap,
	PaintbrushIcon
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
	{ value: "3×", label: "Aided brand recognition post-launch", accent: "from-amber-500 to-orange-600" },
	{ value: "12", label: "Logo variants for every application context", accent: "from-yellow-500 to-amber-600" },
	{ value: "8 wk", label: "Strategy workshop to final master files", accent: "from-orange-500 to-red-600" },
	{ value: "100%", label: "Stakeholder approval — first presentation", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Existing wordmark was illegible at small sizes — useless as favicon or app icon" },
	{ text: "No mark variant — the logo could not be used anywhere a square or circular format was required" },
	{ text: "Performed poorly on dark backgrounds, limiting use in digital and print contexts" },
	{ text: "Communicated no differentiated positioning — indistinguishable from a thousand other tech wordmarks" },
	{ text: "No clear space or usage rules meant the logo was being stretched, recoloured, and misapplied internally" }
];

const SOLUTIONS = [
	{ text: "A custom logomark distilling the brand's core concept into a distinctive geometric symbol" },
	{ text: "A paired wordmark in a custom-modified typeface with proprietary letterform adjustments" },
	{ text: "12 official variants: horizontal, stacked, mark-only, wordmark-only, colour and monochrome" },
	{ text: "Dark-background-optimised reversed variant and transparent PNG suite" },
	{ text: "Minimum size specifications, clear space rules, and a misuse guide preventing future degradation" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Strategy", items: ["Brand positioning brief", "Personality attributes", "Competitive audit", "Concept territories"], color: "hsl(45,100%,50%)" },
	{ title: "Exploration", items: ["Sketch concepts (50+)", "3 territories presented", "Client direction", "Refinement"], color: "hsl(35,100%,50%)" },
	{ title: "Development", items: ["Vector refinement", "Proportions & spacing", "Colour application", "Typography pairing"], color: "hsl(20,100%,50%)" },
	{ title: "System", items: ["Full variant suite", "Master files (AI/EPS/SVG/PNG)", "Usage rules", "Handoff package"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Strategy & Concept Territories (Weeks 1–3)",
		desc: "OpenGridLabs ran a brand strategy workshop to establish the positioning, personality, and differentiation the logo needed to express. Three distinct concept territories were explored in sketch form — each based on a different interpretation of the brand's core idea — and presented to the leadership team with strategic rationale for each.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Development & Refinement (Weeks 4–6)",
		desc: "The chosen territory was developed in vector: proportions, spacing, curve tensions, and the relationship between mark and wordmark were refined through iteration. Colour was introduced after the form was resolved — ensuring the mark worked in monochrome first, which is the correct test of a logo's structural integrity.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "System Build & Handoff (Weeks 7–8)",
		desc: "The complete variant suite — 12 official files — was built across all required formats. A one-page usage summary and a misuse guide were prepared alongside the master files. The full logo handoff package was delivered to both the design team and the engineering team in their respective required formats.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Aided brand recognition", before: "Baseline", after: "3× baseline", change: "3× baseline" },
	{ metric: "Favicon/app icon legibility", before: "Unusable", after: "Clear at 16px", change: "Clear at 16px" },
	{ metric: "Dark background performance", before: "Poor", after: "Full suite available", change: "Full suite available" },
	{ metric: "Internal logo consistency", before: "Low (misapplied frequently)", after: "Rules enforced", change: "Rules enforced" },
	{ metric: "Enterprise perception (survey)", before: "Baseline", after: "+67%", change: "+67%" },
	{ metric: "Stakeholder approval rounds", before: "Expected 3+", after: "1 (first presentation)", change: "1 (first presentation)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Strategy before sketches",
		desc: "A logo designed without a positioning brief is decoration. Starting with a workshop that articulated the brand's differentiation, personality, and competitive context meant every design decision had a reason — and the rationale made stakeholder alignment fast."
	},
	{
		title: "Monochrome first is the correct test",
		desc: "A logo that only works in its full-colour version is not a logo — it's a colour scheme. Resolving the form entirely in black before introducing colour ensures the mark has structural integrity rather than colour-dependency."
	},
	{
		title: "Variants are part of the design, not afterthoughts",
		desc: "The app icon, the favicon, the reversed version, and the monochrome lockup are real deployment contexts. Designing them as first-class outputs rather than adaptations produced a system that worked everywhere from day one."
	}
];

const FAQS = [
	{
		q: "What is the difference between a logo mark and a wordmark?",
		a: "A wordmark is a typographic logo — the company name set in a distinctive typeface, with or without custom lettering. A logomark (or symbol) is an abstract or pictorial graphic representation without text. A combination mark uses both. Most mature brands have all three to use in different contexts."
	},
	{
		q: "Why does a logo need multiple variants?",
		a: "A single logo file cannot perform across all the contexts a brand appears in — a horizontal lockup that works on a website header breaks as a square app icon; a coloured version that looks great in print disappears on a dark digital background. A well-designed logo system provides the right variant for every context, with rules governing their use."
	}
];

export default function LogoDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Logo Design Case Study | OpenGridLabs"
				description="How OpenGridLabs replaced an inherited wordmark with a purposeful logo system — mark, wordmark, 12 variants, and usage rules — tripling brand recognition."
				canonical="/services/digital-experience/logo-design"
				keywords="Logo Design, Logomark, Wordmark, Brand Mark, Logo System, Brand Identity, Logo Variants, Vector Design, Monochrome Logo, Brand Strategy"
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
					title="How a Purposeful Logo Mark Replaced an Inherited Wordmark and Tripled Brand Recognition"
					description="A fast-scaling company had inherited its logo from its founding domain name — a wordmark chosen for availability, not meaning. Four years later the brand had outgrown it: the logo was illegible at small sizes, had no mark variant for app icons or favicons, and communicated nothing about what the company actually stood for. OpenGridLabs designed a complete logo system grounded in strategy — mark, wordmark, variants, and a monochrome suite that worked everywhere."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Deliverables", value: "Mark, wordmark, sub-brands, full variant suite" },
						{ label: "Timeline", value: "8 weeks" },
						{ label: "Tools", value: "Illustrator · Figma · Brand strategy workshop" }
					]}
				/>

				<CaseStudyCarousel
									slug="logo-design"
									title="How a Purposeful Logo Mark Replaced an Inherited Wordmark and Tripled Brand Recognition"
									accentColor="purple"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/logo-design/1.jpg",
										"/images/case-studies/logo-design/2.jpg"
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
					contextIcon={<PaintbrushIcon className="w-5 h-5" />}
					contextParagraphs={[
						"Our client was a four-year-old SaaS company preparing for a Series B raise and an enterprise sales push. The logo they had been using was a plain text wordmark in a generic sans-serif — chosen in the first week of the company's life because the founder could make it in Canva. It had served its purpose. It was no longer serving the brand.",
						"The specific failures were practical: at 16×16px as a favicon the wordmark was unreadable; at 32×32px as an app icon it collapsed to noise; on dark backgrounds it disappeared entirely. Beyond the technical failures, the wordmark communicated nothing about the company's positioning or character — it was a label, not an identity. The company was entering enterprise conversations where perception of maturity and credibility happened before the first meeting, and the logo was undermining both.",
						"Logo design is the creation of a visual mark — a symbol, wordmark, or combination of both — that represents a company, product, or service. A well-designed logo system includes multiple variants for different contexts: horizontal and stacked layouts, mark-only versions for small sizes and icons, colour and monochrome versions, and clear rules for minimum size and clear space. The logo is not the entire brand, but it is the most consistently deployed element of it."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Logo Design?"
					definitionText="Logo design is the creation of a visual mark — a symbol, wordmark, or combination of both — that represents a company, product, or service. A well-designed logo system includes multiple variants for different contexts: horizontal and stacked layouts, mark-only versions for small sizes and icons, colour and monochrome versions, and clear rules for minimum size and clear space. The logo is not the entire brand, but it is the most consistently deployed element of it."
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
					description={"Replacing an inherited, context-limited wordmark with a purposeful, system-complete logo that performed everywhere."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Logo Design Process"}
					description={"A strategy-first process ensuring every design decision has a rationale — and that rationale makes stakeholder alignment fast."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Logo Design Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"An eight-week strategy-led logo design process from workshop through variant suite and final handoff package."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="A strategy-grounded logo system tripled aided brand recognition and achieved stakeholder sign-off in a single presentation."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd been embarrassed by our logo in enterprise demos for a year. The new mark is the first thing we're proud to put on a slide. The recognition data was a bonus — we knew it felt right the moment we saw the strategy rationale."}
					author={"CEO"}
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
					title={"Using a logo chosen for availability, not meaning?"}
					description={"OpenGridLabs designs logo systems — mark, wordmark, variants, and usage rules — grounded in brand strategy and built to perform across every context."}
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
