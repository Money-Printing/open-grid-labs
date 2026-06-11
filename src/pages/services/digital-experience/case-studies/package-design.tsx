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

const STATS = [
	{ value: "67%", label: "Increase in shelf pickup rate", accent: "from-amber-500 to-orange-600" },
	{ value: "31%", label: "Reduction in returns (better expectation-setting)", accent: "from-yellow-500 to-amber-600" },
	{ value: "14 wk", label: "Design through production", accent: "from-orange-500 to-red-600" },
	{ value: "1", label: "Retail placement won after two prior rejections", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Packaging failing to communicate the product's premium quality at the shelf" },
	{ text: "Unclear information hierarchy — the product name, benefit claim, and usage instructions had equal prominence" },
	{ text: "Competitor packaging significantly more visually distinctive at the shelf" },
	{ text: "Retail buyers declining to stock the product, citing packaging that 'didn't reflect the product's quality'" },
	{ text: "High return rate attributed to post-purchase expectation mismatch — packaging over- and underpromised in the wrong places" }
];

const SOLUTIONS = [
	{ text: "A shelf-impact audit identifying the three changes with the highest visual differentiation potential" },
	{ text: "Premium board stock and a tactile matte lamination with spot UV on the brand mark" },
	{ text: "A clear information hierarchy: brand name first, benefit claim second, product details third" },
	{ text: "An unboxing reveal sequencing the key product claims at the moment of first use" },
	{ text: "Dieline redesign creating a distinctive structural form differentiating from commodity packaging" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Strategy", items: ["Category shelf audit", "Buyer brief analysis", "Brand positioning", "Target consumer", "Price point context"], color: "hsl(45,100%,50%)" },
	{ title: "Structural", items: ["Dieline design", "Material specification", "Structural differentiation", "Production constraints"], color: "hsl(35,100%,50%)" },
	{ title: "Graphic", items: ["Hierarchy design", "Typography & colour", "Imagery", "Finish specification"], color: "hsl(20,100%,50%)" },
	{ title: "Production", items: ["Print-ready files", "Pre-press", "Proof review", "Production oversight", "Delivery"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Shelf Audit & Strategy (Weeks 1–3)",
		desc: "OpenGridLabs conducted a physical shelf audit in three retail environments, photographing the competitive set and documenting the visual strategies in use. A packaging brief was written specifying the three design imperatives: premium quality communication, clear benefit hierarchy, and structural distinctiveness.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Structural & Graphic Design (Weeks 4–9)",
		desc: "The structural dieline was redesigned to create a distinctive form distinguishable at the shelf from the category's commodity packaging. The graphic design system was applied: brand hierarchy, premium typography, a refined colour application, and a spot UV finish on the brand mark. The unboxing sequence was designed as a deliberate reveal.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Production & Retail Launch (Weeks 10–14)",
		desc: "Print-ready files were produced and submitted to the production supplier with a full pre-press brief. Proofs were reviewed in physical context — on a mock shelf alongside competitive packaging — before sign-off. The redesigned packaging was presented to the retail buyer who had declined twice; the placement was confirmed.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Shelf pickup rate", before: "Baseline", after: "+67%", change: "+67%" },
	{ metric: "Product returns", before: "Baseline", after: "-31%", change: "-31%" },
	{ metric: "Retail buyer placement", before: "Declined twice", after: "Confirmed on first presentation", change: "Confirmed on first presentation" },
	{ metric: "Shopper premium perception", before: "Low", after: "High (post-shelf survey)", change: "High (post-shelf survey)" },
	{ metric: "Brand recognition at shelf", before: "Low", after: "Category-leading", change: "Category-leading" },
	{ metric: "Production cost vs. prior", before: "—", after: "8% premium (justified)", change: "8% premium (justified)" }
];

const SUCCESS_FACTORS = [
	{
		title: "The shelf is the first buyer",
		desc: "Before a shopper buys the product, a retail buyer decides whether to stock it. Before a shopper picks it up, the packaging must earn their attention. Package design solves two briefs simultaneously: the buyer's commercial brief and the shopper's decision brief."
	},
	{
		title: "Structure before surface",
		desc: "A distinctive structural form differentiates packaging at a level that graphic design cannot achieve in a commodity-format category. The dieline redesign was the intervention with the highest leverage — visible at distance, before typography or colour register."
	},
	{
		title: "Information hierarchy reduces returns",
		desc: "Returns in consumer products frequently result from post-purchase expectation mismatch — the packaging communicated one experience, the product delivered a different one. Redesigning the hierarchy to accurately set expectations reduced returns as significantly as the structural and visual changes improved sales."
	}
];

const FAQS = [
	{
		q: "What is a packaging dieline?",
		a: "A dieline is the flat, unfolded template for a piece of packaging — the structural blueprint showing where the packaging folds, glues, cuts, and connects. Designing a distinctive dieline can differentiate packaging at a structural level, creating a shelf presence that persists even if the graphic design is subsequently imitated."
	},
	{
		q: "How does packaging design affect retail placement?",
		a: "Retail buyers evaluate packaging on three criteria: shelf visibility (does it stand out in the competitive set?), brand communication (does it accurately represent the product and justify the price point?), and shopability (is the hierarchy clear enough for a shopper to understand the product in 3 seconds?). Packaging that scores well on all three increases the likelihood of placement and of premium fixture position."
	}
];

export default function PackageDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Package Design Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned consumer product packaging to lift shelf pickup rate 67%, reduce returns 31%, and win a retail placement after two prior rejections."
				canonical="/services/digital-experience/package-design"
				keywords="Package Design, Product Packaging, Retail Packaging, Brand Packaging, Shelf Presence, Unboxing Experience, Dieline Design, Consumer Brand, FMCG Packaging, Brand Identity"
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
					title="How New Packaging Lifted Shelf Pickup Rate 67%, Reduced Returns 31%, and Won a Retail Placement the Old Design Had Failed"
					description="A consumer brand with a genuinely superior product was losing at the shelf — shoppers were picking up the competitor's packaging, not theirs. A retail buyer had twice declined to stock the product, citing packaging that 'didn't communicate the product's quality'. OpenGridLabs redesigned the packaging from a retail and brand strategy perspective: shelf presence, hierarchy, material, and unboxing experience — producing packaging that made the product's quality visible before it was tried."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Consumer / FMCG (anonymised)" },
						{ label: "Scope", value: "Primary and secondary packaging redesign" },
						{ label: "Timeline", value: "14 weeks including production" },
						{ label: "Deliverables", value: "Structural brief · Dieline · Design · Print-ready files · Production oversight" }
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
						"Our client made a premium consumer product that outperformed its competitors in blind product tests. On the shelf, it underperformed. The packaging was functional — it protected the product and listed the required information — but it communicated nothing about the product's quality or the brand's character. The colour was undistinguished. The hierarchy of information was unclear. The typography was generic. On a shelf next to a competitor with stronger visual identity, it was invisible.",
						"Two retail buyer meetings had ended without placement. Both buyers cited the packaging in their rejections: 'the product seems good but the packaging doesn't reflect it'. One buyer said directly: 'I need my customers to understand why this costs more than the alternatives — your packaging doesn't help me make that case.' The redesign had a specific brief: make the product's quality visible, make the price premium defensible, and make the shelf presence strong enough to justify premium fixture placement.",
						"Package design is the creation of a product's physical and visual container — encompassing structural design (the shape and material of the packaging), graphic design (typography, colour, imagery, and hierarchy on the surface), and the unboxing experience (how the packaging opens and what it communicates in sequence). Good package design communicates brand positioning and product quality at the shelf, provides the right information at the right moment, and creates an experience of the brand that begins before the product is used."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Package Design?"
					definitionText="Package design is the creation of a product's physical and visual container — encompassing structural design (the shape and material of the packaging), graphic design (typography, colour, imagery, and hierarchy on the surface), and the unboxing experience (how the packaging opens and what it communicates in sequence). Good package design communicates brand positioning and product quality at the shelf, provides the right information at the right moment, and creates an experience of the brand that begins before the product is used."
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
					description={"Transforming packaging that failed at the shelf into a retail-winning, premium-communicating system that made the product's quality visible before it was tried."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Package Design Process"}
					description={"A strategy-first packaging process covering shelf audit, structural dieline, graphic design, premium finishes, and full production oversight."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Packaging Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A 14-week strategy-led packaging process from shelf audit through production sign-off and retail launch."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Premium packaging that communicated the product's quality before it was tried — unlocking shelf placement, driving pickup, and reducing returns."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The retail buyer had told us twice that our product didn't look like it was worth what we were charging. The new packaging made the argument for us before the buyer said a word. It was confirmed in the meeting. The product hadn't changed at all."}
					author={"CEO"}
					subtitle={"Confidential Consumer Brand"}
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
					title={"Product that outperforms but packaging that underdelivers?"}
					description={"OpenGridLabs designs product packaging — structural dieline, graphic design, premium finishes, and unboxing experience — that communicates your product's quality before it is tried."}
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
