import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Printer
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
	{ value: "34%", label: "Reduction in press costs through correct files", accent: "from-cyan-500 to-blue-600" },
	{ value: "0", label: "Reprints required on the campaign", accent: "from-blue-500 to-indigo-600" },
	{ value: "180K", label: "Units printed across 14 item types", accent: "from-indigo-500 to-purple-600" },
	{ value: "6 wk", label: "Brief to print-ready delivery", accent: "from-cyan-400 to-indigo-500" }
];

const CHALLENGES = [
	{ text: "RGB files submitted to CMYK presses producing significant colour shifts at print" },
	{ text: "Missing bleed on materials appearing at the press with white edges" },
	{ text: "Fonts not embedded or outlined causing font substitution and layout reflows" },
	{ text: "Images below 300dpi producing visible pixellation at A3 and above" },
	{ text: "No consistent file format or specification across 14 different material types" }
];

const SOLUTIONS = [
	{ text: "CMYK-managed design workflow with soft-proofing against press profiles throughout" },
	{ text: "Correct bleed (3mm offset, 5mm large format) on all artwork from the first file" },
	{ text: "All fonts converted to outlines or embedded in final PDFs as standard" },
	{ text: "Image quality audit on all supplied assets with upsampling or reshooting as required" },
	{ text: "A standardised press-ready PDF specification for each print process used in the campaign" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Brief", items: ["Print specification", "Quantity & budget", "Print process select", "Colour profile target", "Size with bleed"], color: "hsl(180,100%,50%)" },
	{ title: "Design", items: ["CMYK workspace", "Brand application", "Artwork creation", "Soft proof review"], color: "hsl(195,100%,45%)" },
	{ title: "Prepress", items: ["Bleed & safe zone check", "Font outlining", "Image resolution audit", "Colour profile embed", "PDF export check"], color: "hsl(210,100%,40%)" },
	{ title: "Delivery", items: ["Press-ready PDFs", "Preflight report", "Proof sign-off", "Print supplier liaison", "QC on delivery"], color: "hsl(225,100%,35%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Specification & Setup (Week 1)",
		desc: "OpenGridLabs established the complete print specification for all 14 item types — size with bleed, colour profile, resolution requirement, PDF standard — and set up a CMYK-managed design environment. Supplied brand assets were audited for print suitability and several images were flagged for reshooting or replacement at the brief stage.",
		accent: "from-cyan-500 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Design & Artwork Production (Weeks 2–5)",
		desc: "All 14 materials were designed and produced in CMYK-managed workspaces with correct bleed, safe zones, and resolution from the first file. Soft proofs were reviewed against the press profile before any file was submitted. Fonts were outlined as a standard step in the production process.",
		accent: "from-blue-500 to-indigo-500"
	},
	{
		number: "Phase 3",
		title: "Prepress, Delivery & QC (Week 6)",
		desc: "A structured prepress checklist was run on every file before delivery — bleed, trim, font outline, resolution, colour profile, overprint settings, and PDF standard. Press-ready PDFs were submitted with a specification sheet per item. On-press QC was conducted on the first run of each item type.",
		accent: "from-indigo-500 to-purple-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Reprints required", before: "2–3 per campaign", after: "Zero", change: "Zero" },
	{ metric: "Press amendment fees", before: "Regular", after: "Eliminated", change: "Eliminated" },
	{ metric: "Campaign launch delay (print-related)", before: "3–7 days typical", after: "Zero", change: "Zero" },
	{ metric: "Colour accuracy (screen vs. print)", before: "Poor (RGB submitted)", after: "Accurate (CMYK managed)", change: "Accurate (CMYK managed)" },
	{ metric: "File queries from press", before: "High", after: "Zero", change: "Zero" },
	{ metric: "Total press cost vs. prior campaign", before: "Baseline", after: "-34%", change: "-34%" }
];

const SUCCESS_FACTORS = [
	{
		title: "CMYK from the first pixel",
		desc: "Designing in RGB and converting to CMYK at export produces colour shifts that are often significant and always unpredictable. Designing in a CMYK-managed environment with soft-proofing against the press profile produces what you see."
	},
	{
		title: "Bleed is not optional",
		desc: "A design without bleed is a design that will have white edges when trimmed. Setting bleed as a default specification — never as an afterthought — eliminated the most common and most embarrassing print failure in the previous workflow."
	},
	{
		title: "Prepress checklists are production insurance",
		desc: "A structured preflight check on every file before submission is the step that costs 20 minutes and saves two weeks of reprint delay. It is the single most reliable intervention in print production quality."
	}
];

const FAQS = [
	{
		q: "What is bleed in print design?",
		a: "Bleed is the area of a design that extends beyond the trim edge — typically 3mm for standard print, 5mm for large format. It ensures that when the printed material is cut to size, background colours and images that reach the edge of the design do not leave an unintended white border. All background colours and images that touch the edge of a design should extend to the bleed boundary."
	},
	{
		q: "What is the difference between CMYK and RGB?",
		a: "RGB is an additive colour model used by screens — mixing red, green, and blue light. CMYK is a subtractive colour model used by print — mixing cyan, magenta, yellow, and key (black) inks. The two colour spaces have different gamuts: some RGB colours cannot be reproduced in CMYK. Designing in CMYK from the start ensures colours behave as expected in print."
	}
];

export default function PrintDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Production-Ready Print Design Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned a print production workflow with CMYK management and strict preflight checks, cutting press costs by 34%."
				canonical="/services/digital-experience/print-design"
				keywords="Print Design, CMYK Design, Prepress, Print Production, Bleed and Trim, Offset Print, Large Format Print, Press-Ready Files, Print Specification, Graphic Design"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Cyan Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(205,100%,45%) 50%, transparent 100%)`
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
					title="How Production-Ready Print Design Eliminated Costly Reprints and Cut Press Costs 34% on a High-Volume Campaign"
					description="A company had spent three years producing print materials that routinely came back from the press needing correction — wrong colour profiles, missing bleeds, fonts not embedded, images below resolution threshold. Every reprint cost money and delayed campaigns. OpenGridLabs redesigned the print workflow from the ground up: CMYK colour management, correct prepress specifications, and production-ready file delivery that the press could run without a single query."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Retail / Events (anonymised)" },
						{ label: "Scope", value: "Campaign print materials — 14 item types" },
						{ label: "Timeline", value: "6 weeks" },
						{ label: "Print Volume", value: "180,000 units across offset and large format" }
					]}
				/>

				<CaseStudyCarousel
													slug="print-design"
													title="How Production-Ready Print Design Eliminated Costly Reprints and Cut Press Costs 34% on a High-Volume Campaign"
													accentColor="cyan"
													aspectRatioClass="aspect-[3/2]"
													images={[
														"/images/case-studies/print-design/1.jpg",
														"/images/case-studies/print-design/2.jpg"
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
					contextIcon={<Printer className="w-5 h-5" />}
					contextParagraphs={[
						"Our client runs large-scale retail promotions requiring 14 types of print material — from A6 flyers to 6-metre outdoor banners — produced in quantities reaching 180,000 units. Their internal design team produced visually competent work, but print-production knowledge was thin: files arrived at the press with RGB colour profiles, fonts not outlined, missing bleeds, and image resolutions that failed at large format sizes. Every campaign required at least one reprint, and the presses were charging amendment fees on top.",
						"The cost was direct and measurable: reprint costs, amendment fees, delayed campaign launches, and the time the internal team spent managing corrections rather than creating. OpenGridLabs took over the print design and production workflow — establishing CMYK colour management from brief to delivery, standardising file specifications per print process, and building a prepress checklist that made press-ready files the default output rather than the optimistic exception.",
						"Print design is the creation of visual materials intended for physical production — offset printing, digital printing, large format, screen printing, and specialty print processes. It requires specific technical knowledge beyond screen design: CMYK colour management (print uses different primaries from screens), bleed and trim specifications, resolution requirements for different print sizes, font embedding and outlining, and the differences in behaviour between print processes."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Print Design?"
					definitionText="Print design is the creation of visual materials intended for physical production — offset printing, digital printing, large format, screen printing, and specialty print processes. It requires specific technical knowledge beyond screen design: CMYK colour management (print uses different primaries from screens), bleed and trim specifications, resolution requirements for different print sizes, font embedding and outlining, and the differences in behaviour between print processes."
					definitionIcon={<Printer className="w-6 h-6 animate-pulse" />}
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
					description={"Standardizing prepress specifications to streamline press runs and eliminate amendment fees."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Print Production Workflow"}
					description={"A standardized layout pipeline spanning workspace setups, soft-proofing checks, preflight checklists, and press liaisons."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Print Production pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A six-week structured print validation and layout production roadmap from setup to delivery check."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(195,100%,45%)", "hsl(210,100%,40%)" ]}
					axisGradientClass={"from-cyan-500 via-blue-500 to-indigo-500"}
					badgeColorClass={"text-cyan-500 bg-cyan-500/10 border-cyan-500/20"}
				/>

				<MeasurableResults 
					description="Transitioning to prepress outline validation checks completely eliminated reprints and delayed launches."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd been paying reprint costs on every single campaign for three years. We just accepted it as normal. The first campaign with OpenGridLabs: zero reprints, zero queries from the press, zero amendment fees. We didn't know it could be that way."}
					author={"Marketing Manager"}
					subtitle={"Confidential Retail Company"}
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
					title={"Paying reprint costs on every campaign?"}
					description={"OpenGridLabs delivers production-ready print design — CMYK colour management, correct prepress specifications, and structured preflight — so files run first time, every time."}
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
