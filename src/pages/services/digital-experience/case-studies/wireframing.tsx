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
	{ value: "11", label: "Critical flow problems caught in wireframes", accent: "from-pink-500 to-rose-600" },
	{ value: "8 wk", label: "Estimated dev rework avoided", accent: "from-purple-500 to-indigo-600" },
	{ value: "3 wk", label: "From blank page to validated structure", accent: "from-blue-500 to-cyan-600" },
	{ value: "87%", label: "Stakeholder alignment score post-wireframe review", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Spec described individual screens but left the flow between them undefined" },
	{ text: "11 edge cases and branching states unspecified — each a potential dead end for users" },
	{ text: "No shared visual reference meant stakeholders were imagining different products" },
	{ text: "Previous build had required 6 weeks of rework due to structural changes in development" },
	{ text: "Engineering team estimated 2-week impact for every structural change caught after sprint start" }
];

const SOLUTIONS = [
	{ text: "Complete low-fidelity wireframe set covering all screens, states, and flow branches" },
	{ text: "Annotated wireframes documenting decisions, constraints, and open questions per screen" },
	{ text: "Click-through prototype for stakeholder review without requiring a developer" },
	{ text: "Systematic edge-case mapping ensuring every branch had a defined resolution" },
	{ text: "Structured review sessions resolving all 11 identified issues before sign-off" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Sketch", items: ["Flow mapping", "Screen inventory", "User journey tracing", "Paper sketches of key moments"], color: "hsl(330,100%,60%)" },
	{ title: "Structure", items: ["Figma low-fi frames", "Layout hierarchy", "Navigation patterns", "State inventory"], color: "hsl(280,100%,65%)" },
	{ title: "Annotate", items: ["Decision documentation", "Edge cases", "Open questions", "Dev handoff notes"], color: "hsl(200,100%,50%)" },
	{ title: "Validate", items: ["Click-through prototype", "Stakeholder review", "Issue resolution", "Sign-off for dev"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Flow Mapping & Sketching (Week 1)",
		desc: "OpenGridLabs mapped every screen, state, branch, and edge case from the specification onto a flow diagram, identifying gaps immediately. Paper sketches explored structural approaches before committing to digital wireframes, keeping iteration speed high.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Wireframe Build & Annotation (Week 2)",
		desc: "Figma low-fidelity wireframes were built for all screens including edge cases, error states, and empty states — the states most commonly omitted from specs. Each screen was annotated with decisions, constraints, and open questions flagged for resolution.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Review, Issue Resolution & Handoff (Week 3)",
		desc: "A click-through prototype was shared with stakeholders for review. Eleven issues were identified, discussed, and resolved in two structured sessions. The final annotated wireframe set was handed to engineering as the structural specification for development.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Structural issues caught before dev", before: "0 (unspecced)", after: "11 resolved", change: "11 resolved" },
	{ metric: "Estimated rework avoided", before: "—", after: "8 weeks", change: "8 weeks" },
	{ metric: "Stakeholder alignment", before: "Low (imagined different things)", after: "87% alignment score", change: "87% alignment score" },
	{ metric: "Dev start confidence", before: "Low", after: "High (all states specified)", change: "High (all states specified)" },
	{ metric: "Time to validated structure", before: "—", after: "3 weeks", change: "3 weeks" },
	{ metric: "Edge cases specified", before: "~40%", after: "100%", change: "100%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Low fidelity is the right fidelity for structure",
		desc: "Detailed visual design in a wireframe is a false economy — it slows iteration and anchors reviewers on aesthetics rather than flow. Grey boxes focus feedback on what matters at this stage: does the structure work?"
	},
	{
		title: "Every edge case is a user experience",
		desc: "The screens designed last — empty states, error states, loading states — are the ones users see when things go wrong. Mapping them in wireframes rather than leaving them to developers produces a better product and fewer surprises."
	},
	{
		title: "A click-through prototype enables real feedback",
		desc: "Stakeholders reading a spec are imagining a product. Stakeholders navigating a click-through prototype are experiencing one. The quality of feedback improves dramatically when reviewers are reacting to a flow they can walk through."
	}
];

const FAQS = [
	{
		q: "What is wireframing in UX design?",
		a: "Wireframing creates low-fidelity structural representations of screens and flows — defining layout, hierarchy, and navigation without visual design. Because wireframes are fast and cheap to change, they are the right moment to validate structure before development."
	},
	{
		q: "What is the difference between a wireframe and a prototype?",
		a: "A wireframe is a static structural representation of one or more screens. A prototype links wireframes or higher-fidelity designs together so users or stakeholders can navigate through a flow. Click-through wireframe prototypes let you test flow logic without full visual design."
	}
];

export default function WireframingCaseStudy() {
	return (
		<>
			<SEO
				title="Wireframing UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs wireframed Fintech onboarding flows, identifying 11 structural flow issues in 3 weeks and preventing 8 weeks of development rework."
				canonical="/services/digital-experience/wireframing"
				keywords="Wireframing, UX Wireframes, Low-Fidelity Design, Flow Design, Figma, Prototyping, UX Process, Information Architecture, Stakeholder Alignment, UI/UX"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Pink/Rose Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(330,100%,50%) 0%, hsl(320,100%,45%) 50%, transparent 100%)`
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
					categoryTag="Case Study · UI/UX Design"
					title="How Low-Fidelity Wireframes Caught 11 Critical Flow Problems Before a Single Line of Code Was Written"
					description="A company was about to begin development on a new onboarding flow when OpenGridLabs wireframed it first. Eleven structural problems were identified and resolved in low-fidelity in three weeks — issues that, had they reached development, would have required an estimated eight weeks of rework. Wireframing didn't slow the project down; it dramatically accelerated it."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "FinTech / SaaS (anonymised)" },
						{ label: "Scope", value: "New onboarding and core workflow" },
						{ label: "Timeline", value: "3 weeks wireframing" },
						{ label: "Tools", value: "Figma · Paper sketches · Click-through prototype" }
					]}
				/>

				<CaseStudyCarousel
									slug="wireframing"
									title="How Low-Fidelity Wireframes Caught 11 Critical Flow Problems Before a Single Line of Code Was Written"
									accentColor="pink"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/wireframing/1.jpg",
										"/images/case-studies/wireframing/2.jpg"
									]}
								/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-pink-500/30"
					hoverTextClass="group-hover:text-pink-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Paintbrush className="w-5 h-5" />}
					contextParagraphs={[
						"Our client was preparing to build a new onboarding flow for a complex B2B product. The product manager had written a detailed specification, the engineering team had estimated the build, and development was a week away from starting. A design review flagged that the spec described individual screens but didn't fully specify the flow between them — the decisions, branches, and edge cases that make a spec into a working product.",
						"OpenGridLabs proposed three weeks of intensive wireframing before any code was written: low-fidelity enough to be fast, high-fidelity enough to evaluate the actual user journey. The process uncovered eleven structural problems — missing states, dead-end branches, contradictory calls to action, and an assumed user behaviour that research had already disproven — all resolved before a developer wrote a line.",
						"Wireframing is the practice of creating low-fidelity structural representations of screens and flows — defining layout, hierarchy, and navigation without visual design or production polish. Because wireframes are fast to produce and cheap to change, they are the right moment to evaluate flow logic, screen structure, and user decisions before those choices become expensive to alter in development."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Wireframing?"
					definitionText="Wireframing is the practice of creating low-fidelity structural representations of screens and flows — defining layout, hierarchy, and navigation without visual design or production polish. Because wireframes are fast to produce and cheap to change, they are the right moment to evaluate flow logic, screen structure, and user decisions before those choices become expensive to alter in development."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-pink-500/10"
					definitionIconBorderClass="border-pink-500/20"
					definitionIconColorClass="text-pink-400"
					glowColorClass="bg-pink-400"
					gradientFromClass="from-pink-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Challenges & Solutions"}
					description={"De-risking sprint cycles by documenting user decision logic and mapping system branches in low fidelity."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Wireframing Process"}
					description={"A schematic workflow that defines page layout structures, navigation trees, and click-through validation prototypes."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Wireframing Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"An intensive 3-week sprint cycle focusing on paper sketching, low-fi digital wireframes, and clickable flow review."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Mapping application edge cases and low-fidelity branches aligned stakeholder opinions and avoided development rework."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The wireframe review was the first time everyone in the room was looking at the same thing. We found problems we didn't know we had — and fixed them in two hours rather than two sprints."}
					author={"Product Manager"}
					subtitle={"Confidential FinTech Company"}
					accentLineClass={"bg-pink-400"}
					iconColorClass={"text-pink-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-pink-500/20"}
					iconColorClass={"text-pink-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-pink-400"}
					activeChevronColorClass={"text-pink-400"}
				/>

				<CaseStudyCta 
					title={"Starting development before the structure is validated?"}
					description={"OpenGridLabs wireframes complex flows — complete screen inventories, edge cases, annotations, and click-through prototypes — so structural problems are caught before they become development rework."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-pink-400"}
					iconColorClass={"text-pink-400"}
					btnGradientClass={"from-pink-400 to-indigo-500"}
					btnShadowColor={"236,72,153,0.2"}
				/>
			</div>
		</>
	);
}
