import { Link } from "react-router";

import {
	ArrowLeft,
	Layers,
	Cpu,
	Activity,
	Database,
	Zap,
	Shapes
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
	{ value: "300", label: "Icons in the unified system", accent: "from-amber-500 to-orange-600" },
	{ value: "41%", label: "Improvement in UI icon clarity scores", accent: "from-yellow-500 to-amber-600" },
	{ value: "14 wk", label: "Design and production of complete system", accent: "from-orange-500 to-red-600" },
	{ value: "4", label: "Scale sizes: 16 · 20 · 24 · 32px", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Icons from four different sources with incompatible visual styles appearing on the same screens" },
	{ text: "Three different stroke weights, two different corner radius treatments, and inconsistent optical sizing" },
	{ text: "Custom developer-created icons with no design quality control mixed into the library" },
	{ text: "No single Figma source — icons scattered across multiple files and external libraries" },
	{ text: "Engineering using multiple icon implementation methods causing performance inconsistencies" }
];

const SOLUTIONS = [
	{ text: "A 300-icon bespoke system designed to a single visual grammar document" },
	{ text: "Consistent 1.5px stroke weight, 2px corner radius, optical sizing within a 24px canvas across all icons" },
	{ text: "Icons designed at 24px base and optimised variants at 16px, 20px, and 32px" },
	{ text: "Delivered as a Figma component library, SVG exports, and a React icon component package" },
	{ text: "A naming taxonomy mapped to existing engineering usage to minimise migration effort" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Visual Grammar", items: ["Stroke weight", "Corner radius", "Optical sizing", "Canvas grid", "Perspective rules"], color: "hsl(45,100%,50%)" },
	{ title: "Icon Production", items: ["300 icons in batches", "Peer review per batch", "Pixel-perfect QC at sizes"], color: "hsl(35,100%,50%)" },
	{ title: "Technical Delivery", items: ["Figma components", "SVG export", "Icon font", "React components"], color: "hsl(20,100%,50%)" },
	{ title: "Migration", items: ["Naming taxonomy", "Migration guide", "Engineering handoff", "Deprecation plan"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Visual Grammar & Pilot Batch (Weeks 1–3)",
		desc: "OpenGridLabs established the icon system's visual grammar — the rules governing every construction decision — and produced a pilot batch of 30 icons covering the most common use cases. The pilot was reviewed by the design team, the engineering team, and a sample of users before the grammar was finalised. Changes at this stage cost hours; changes after 300 icons are produced cost weeks.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Full Production (Weeks 4–11)",
		desc: "The 300 icons were produced in priority batches — highest-frequency use cases first — with a peer review QC process on every batch. Each icon was checked at all four scale sizes: correct construction at 24px base, manually optimised at 16px for pixel crispness, confirmed at 20px and 32px.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Technical Delivery & Migration (Weeks 12–14)",
		desc: "The complete icon system was delivered in all required engineering formats. A migration guide mapped every existing icon to its replacement in the new system. The Figma component library was published and the React package was integrated into the product's component storybook.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "UI icon consistency", before: "4 visual sources", after: "1 unified system", change: "1 unified system" },
	{ metric: "Icon clarity score (user testing)", before: "Baseline", after: "+41%", change: "+41%" },
	{ metric: "Engineering icon implementation methods", before: "3 methods", after: "1 (React component)", change: "1 (React component)" },
	{ metric: "Figma icon source of truth", before: "Multiple files", after: "1 component library", change: "1 component library" },
	{ metric: "Icon-related UI tickets", before: "Baseline", after: "-63%", change: "-63%" },
	{ metric: "New icon production time (ongoing)", before: "Days (per icon)", after: "Hours (grammar-guided)", change: "Hours (grammar-guided)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Grammar before icons",
		desc: "The visual grammar — stroke weight, corner radius, optical sizing rules — is the system. Every icon is an instance of that system. Agreeing the grammar before producing any icons ensures that all 300 icons are coherent instances of the same language rather than 300 individual design decisions."
	},
	{
		title: "Pixel perfection at small sizes",
		desc: "An icon that is constructed correctly at 24px but not optimised at 16px will produce blurry results on standard-resolution displays. Manual optimisation at 16px — adjusting anchor points to align with the pixel grid — is the step that separates a functional icon from a polished one."
	},
	{
		title: "The pilot batch is the investment protection",
		desc: "Producing 30 icons before committing to 300 allowed the visual grammar to be tested, challenged, and refined by real use cases. The alternative — producing 300 icons before discovering a grammar problem — is the most expensive mistake in icon system design."
	}
];

const FAQS = [
	{
		q: "What is a visual grammar in icon design?",
		a: "A visual grammar is the set of construction rules that govern how every icon in a system is drawn — stroke weight, corner radius, optical sizing, perspective (flat vs. isometric), fill vs. outline style, and canvas grid. When all icons follow the same grammar, the system reads as a coherent visual language. When icons mix grammars, the system reads as a collection."
	},
	{
		q: "What formats should icons be delivered in?",
		a: "Professional icon systems are typically delivered in: SVG (scalable vector, the primary web format), PNG (raster exports at each required size for contexts that don't support SVG), icon font (for CSS-based implementation), and as design tool components (Figma library, Sketch symbols). React and other framework component packages are increasingly the preferred engineering delivery format."
	}
];

export default function IconDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Bespoke Icon System Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a bespoke 300-icon system with a single visual grammar, improving UI icon clarity scores by 41%."
				canonical="/services/digital-experience/icon-design"
				keywords="Icon Design, Icon System, UI Icons, Custom Icon Set, Figma Icon Library, SVG Icons, Product Design, Visual Grammar, Pixel Perfect, Graphic Design"
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
					title="How a Consistent 300-Icon System Replaced a Fragmented Library and Improved UI Clarity Scores 41%"
					description="A product company had accumulated icons from four different sources over five years — three commercial icon libraries, custom-made additions, and icons inherited from an acquired product. The result was a product UI where the same visual concept could appear in three different styles on the same screen. OpenGridLabs designed a bespoke 300-icon system with a single consistent visual voice, pixel-perfect at 16px, 24px, and 32px, and delivered as a Figma component library ready for engineering handoff."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B Software (anonymised)" },
						{ label: "Scope", value: "300-icon system across full product suite" },
						{ label: "Timeline", value: "14 weeks" },
						{ label: "Delivery", value: "Figma component library · SVG · Icon font · React components" }
					]}
				/>

				<CaseStudyCarousel
					slug="icon-design"
					title="How a Consistent 300-Icon System Replaced a Fragmented Library and Improved UI Clarity Scores 41%"
					accentColor="amber"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/icon-design/1.jpg",
						"/images/case-studies/icon-design/2.jpg"
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
					contextIcon={<Shapes className="w-5 h-5" />}
					contextParagraphs={[
						"Our client's product had been built over five years across three engineering teams, each using different icon sources. The main product used a commercial icon library. A secondary product used a different library. Icons for custom concepts had been created by developers, not designers. An acquired product came with its own icon set. On any given screen, a user might encounter icons in different stroke weights, different corner radii, different optical weights, and fundamentally different visual styles.",
						"The visual inconsistency was more than aesthetic. User testing flagged icon clarity as a recurring issue — users couldn't predict from an icon's appearance which family it belonged to or how it related to other icons. The inconsistency created a low-level cognitive cost that accumulated across a session. OpenGridLabs' task was to design a single, coherent icon system with 300 icons — a significant production undertaking — that could replace all existing sources simultaneously.",
						"Icon design is the creation of simplified visual symbols that communicate actions, objects, or concepts in a product interface or graphic design context. A well-designed icon is immediately recognisable at its intended display size, consistent with the other icons in its system (same stroke weight, corner radius, optical weight, and visual grammar), and distinctive enough to be unambiguous. Icon design at product scale requires a rigorous visual system as well as individual craftsmanship — the system governing the rules, the craft executing each icon within them."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Icon Design?"
					definitionText="Icon design is the creation of simplified visual symbols that communicate actions, objects, or concepts in a product interface or graphic design context. A well-designed icon is immediately recognisable at its intended display size, consistent with the other icons in its system (same stroke weight, corner radius, optical weight, and visual grammar), and distinctive enough to be unambiguous. Icon design at product scale requires a rigorous visual system as well as individual craftsmanship — the system governing the rules, the craft executing each icon within them."
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
					description={"Reconciling multiple conflicting icon libraries and formats to build a unified custom SVG icon package."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Icon System Design Process"}
					description={"A thorough design strategy establishing stroke grammar, grid metrics, scale variants, and migration guide roadmaps."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Icon Production Pipeline Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A 14-week visual system mapping timeline from initial grammars and pilot batches to full production and code handoff."}
					phaseColors={["hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)"]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults
					description="Deploying a unified icon library reduced layout support issues and improved UI clarity metrics."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"Icons should be invisible — you should just understand them without noticing them. Ours weren't invisible; they were confusing. The new system fixed that. Users stopped mentioning icons in feedback, which means they're working."}
					author={"Head of Design"}
					subtitle={"Confidential B2B Software Company"}
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
					title={"Product UI with icons from five different sources?"}
					description={"OpenGridLabs designs bespoke icon systems — a consistent visual grammar, 300+ icons at multiple scales, and Figma/SVG/React delivery — that make every screen legible and every icon coherent."}
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
