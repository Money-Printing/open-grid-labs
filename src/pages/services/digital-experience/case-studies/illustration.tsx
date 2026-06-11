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
	{ value: "63%", label: "Lift in brand distinctiveness scores", accent: "from-amber-500 to-orange-600" },
	{ value: "60+", label: "Illustrations produced in the initial system", accent: "from-yellow-500 to-amber-600" },
	{ value: "14 wk", label: "Style development to full library delivery", accent: "from-orange-500 to-red-600" },
	{ value: "0", label: "Stock photography on the website post-launch", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Visually indistinguishable from competitors using the same stock photography sources" },
	{ text: "No distinctive visual brand element beyond the logo and colour palette" },
	{ text: "Stock photography communicating generic professionalism rather than the brand's specific character" },
	{ text: "No scalable visual solution for abstract concepts (processes, benefits, integrations) stock photography can't show" },
	{ text: "Illustration attempts made individually without a consistent style guide, producing incompatible results" }
];

const SOLUTIONS = [
	{ text: "A custom illustration style guide defining line weight, colour palette, character proportions, and visual grammar" },
	{ text: "A character system — diverse, stylised human figures in the brand's specific visual language" },
	{ text: "20 full scene illustrations for website, marketing, and content use" },
	{ text: "30 spot illustrations for product UI, email, and micro-content contexts" },
	{ text: "A Figma component library enabling the internal team and future illustrators to extend the system" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Style", items: ["Visual direction", "Character proportions", "Line weight", "Colour palette", "Grammar document"], color: "hsl(45,100%,50%)" },
	{ title: "Characters", items: ["Character template", "Diversity considerations", "Pose library", "Expression range"], color: "hsl(35,100%,50%)" },
	{ title: "Production", items: ["20 scenes + 30 spots", "Review per batch", "Consistent grammar", "Figma library"], color: "hsl(20,100%,50%)" },
	{ title: "Extension", items: ["Style guide for freelancers", "Animation brief", "Future expansion framework"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Style Development (Weeks 1–4)",
		desc: "OpenGridLabs developed three illustration style directions — each interpreting the brand's personality through a different visual lens — and presented them as small sample sets of characters and scenes. The chosen style was developed into a comprehensive style guide specifying every construction rule: line weight, colour palette (a subset of the brand palette adapted for illustration), character proportions, perspective, and spatial grammar.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Character System & Production (Weeks 5–11)",
		desc: "The character system was built: a diverse set of base characters that could be adapted in pose, expression, and context. All 60 illustrations were produced in batches, with the style guide as the quality standard for each. Every illustration was reviewed against the guide before acceptance.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Library, Handoff & Extension Brief (Weeks 12–14)",
		desc: "The Figma illustration library was structured for internal team use and for briefing freelance illustrators to extend the system. A style guide for external use was written. An animation brief was produced specifying how existing illustrations could be animated for web and social use.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Brand distinctiveness score", before: "Baseline", after: "+63%", change: "+63%" },
	{ metric: "Visual differentiation from competitors", before: "Low (same stock)", after: "High (proprietary system)", change: "High (proprietary system)" },
	{ metric: "Stock photography on website", before: "100% (stock-only)", after: "0% (illustration-replaced)", change: "0% (illustration-replaced)" },
	{ metric: "Abstract concept communication", before: "Not possible (stock)", after: "Fully illustrated", change: "Fully illustrated" },
	{ metric: "Illustration consistency (QA)", before: "Ad hoc (no guide)", after: "Style guide enforced", change: "Style guide enforced" },
	{ metric: "Internal illustration production time", before: "Outsourced per request", after: "Same-day (library-based)", change: "Same-day (library-based)" }
];

const SUCCESS_FACTORS = [
	{
		title: "The style guide is the proprietary asset",
		desc: "Any illustrator can draw a scene. An illustrator working from a detailed style guide draws a scene that is unmistakably part of a specific visual language. The style guide is what makes a custom illustration system proprietary and consistent — it is the thing that can't be copied."
	},
	{
		title: "Character systems enable human representation at scale",
		desc: "A brand that needs to show people consistently across 60 illustrations needs a character system, not 60 independent character designs. A character template with adaptation rules allows diverse representation while maintaining visual coherence."
	},
	{
		title: "Stock photography is a category equaliser",
		desc: "Stock photography makes every company in a category equally visual and equally generic. Custom illustration is a category differentiator that compounds: the more illustrations a brand has, the more distinctive it becomes, and the harder it is for competitors to match without building their own system."
	}
];

const FAQS = [
	{
		q: "How much does a custom illustration system cost?",
		a: "Custom illustration system costs vary by scope, style complexity, and number of illustrations. A foundational system — style guide, character system, and 20–30 illustrations — typically represents a significant investment with ongoing extension. The correct comparison is against the long-term cost of stock photography subscriptions, the creative limitations of stock, and the competitive advantage of a proprietary visual system."
	},
	{
		q: "How long does it take to develop a brand illustration style?",
		a: "Style development — exploring directions, selecting and developing a style guide — typically takes 3–4 weeks. Production of a library of 60 illustrations takes 8–10 additional weeks. The style guide is produced once; illustrations extend indefinitely."
	}
];

export default function IllustrationCaseStudy() {
	return (
		<>
			<SEO
				title="Brand Illustration System Case Study | OpenGridLabs"
				description="How OpenGridLabs developed a custom illustration system, replacing stock photography entirely and lifting brand distinctiveness scores by 63%."
				canonical="/services/digital-experience/illustration"
				keywords="Illustration, Brand Illustration, Custom Illustration, Character Design, UI Illustration, Spot Illustration, Illustration System, B2B Illustration, Figma Illustration, Graphic Design"
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
					title="How a Custom Illustration Language Made a B2B Brand Visually Distinctive in a Category Where Every Competitor Used the Same Stock Photos"
					description="A B2B SaaS company operating in a category where every competitor used the same business-people-at-laptops stock photography decided to be visually different. OpenGridLabs developed a custom illustration language — character system, scene illustrations, UI spot illustrations, and an icon extension — that replaced stock photography entirely and gave the brand a visual identity that no competitor could replicate."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS (anonymised)" },
						{ label: "Scope", value: "Full illustration system — characters, scenes, spots" },
						{ label: "Timeline", value: "14 weeks" },
						{ label: "Deliverables", value: "Style guide · 60+ illustrations · Figma library · Animation brief" }
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
						"Our client operates in a B2B SaaS category where every competitor uses the same visual approach: high-quality stock photography of diverse professional teams, clean product screenshots, and the occasional abstract technology graphic. The visual category was interchangeable. A prospect could swap competitors' websites and not notice — the photography would be the same. Our client wanted to be the brand you'd recognise at a glance.",
						"Custom illustration is the answer to visual category homogeneity that stock photography cannot solve — because stock photography is, by definition, available to everyone. A custom illustration system, designed with a distinctive visual voice and a coherent visual grammar, is proprietary. No competitor can use it. It compounds over time: each new illustration extends the library, deepens the brand personality, and increases recognition. The investment is in the style guide — the proprietary visual language — as much as in the individual illustrations.",
						"Brand illustration is the creation of a custom visual language — a distinctive drawing style, character system, and scene vocabulary — that represents a brand across its marketing, product, and communication materials. Unlike stock photography, custom illustration is proprietary and reflects the brand's specific personality, values, and visual point of view. A brand illustration system includes a style guide defining the visual grammar, a character library enabling consistent human representation, and an expanding library of scenes and spot illustrations."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Brand Illustration?"
					definitionText="Brand illustration is the creation of a custom visual language — a distinctive drawing style, character system, and scene vocabulary — that represents a brand across its marketing, product, and communication materials. Unlike stock photography, custom illustration is proprietary and reflects the brand's specific personality, values, and visual point of view. A brand illustration system includes a style guide defining the visual grammar, a character library enabling consistent human representation, and an expanding library of scenes and spot illustrations."
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
					description={"Overcoming generic photography conventions by creating an ownable vector illustration package."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Illustration System Development Process"}
					description={"A systematic approach across style definition, character systems, batch production, and library extensions."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Illustration Production Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A structured 14-week timeline from style guide workshops to character design and library handoff."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Establishing a custom visual language boosted distinctiveness and cut downstream production times."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Every competitor in our space looks the same. The moment we launched with illustrations, people were commenting on it — not because it was unusual in the world, but because it was unusual for our category. That's exactly the kind of visibility money can't easily buy."}
					author={"VP of Marketing"}
					subtitle={"Confidential B2B SaaS Company"}
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
					title={"Every competitor using the same stock photography as you?"}
					description={"OpenGridLabs develops custom illustration systems — distinctive style guides, character libraries, and scene illustrations — that give your brand a proprietary visual language no competitor can replicate."}
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
