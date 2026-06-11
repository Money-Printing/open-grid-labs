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
	{ value: "41%", label: "Lift in primary conversion rate", accent: "from-pink-500 to-rose-600" },
	{ value: "38%", label: "Fewer support contacts on redesigned flows", accent: "from-purple-500 to-indigo-600" },
	{ value: "320", label: "Design tokens defined and documented", accent: "from-blue-500 to-cyan-600" },
	{ value: "14 wk", label: "From audit to fully shipped redesign", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Inconsistent visual hierarchy — primary and secondary actions styled similarly, users unsure what to do" },
	{ text: "Low contrast in key areas failing accessibility standards and reducing scannability" },
	{ text: "Ambiguous affordances — interactive elements not visually distinct from static content" },
	{ text: "Component library built ad hoc per screen with no shared definitions, producing near-consistency" },
	{ text: "No design token system — spacing, colour, and typography varied without systematic rules" }
];

const SOLUTIONS = [
	{ text: "A full typographic scale with clear hierarchy levels from display to caption" },
	{ text: "A semantic colour system — action, status, feedback, and neutral — applied consistently" },
	{ text: "A spacing scale and layout grid applied uniformly across all screens" },
	{ text: "A redesigned component library with explicit states (default, hover, active, disabled, error)" },
	{ text: "A design token layer making the system codeable and maintainable by engineering" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Foundations", items: ["Typography scale", "Colour system (semantic tokens)", "Spacing scale", "Grid system"], color: "hsl(330,100%,60%)" },
	{ title: "Components", items: ["Button variants", "Form elements", "Cards", "Navigation", "Modals", "Status indicators"], color: "hsl(280,100%,65%)" },
	{ title: "Patterns", items: ["Page templates", "Empty states", "Error states", "Loading states", "Responsive behaviour"], color: "hsl(200,100%,50%)" },
	{ title: "Handoff", items: ["Design tokens → code variables", "Component specs", "Interaction notes", "A/B test plan"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit & Foundation Design (Weeks 1–5)",
		desc: "OpenGridLabs conducted a systematic UI audit documenting every inconsistency across 140 screens. The foundational design system was established: typographic scale, semantic colour system, spacing tokens, and grid. All foundation decisions were validated against WCAG AA accessibility standards.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Component Library & Screen Redesign (Weeks 6–10)",
		desc: "The component library was rebuilt from the foundations with explicit state design for every interactive component. All 140 screens were redesigned applying the system, with annotated specifications for engineering implementation.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Implementation Support & A/B Testing (Weeks 11–14)",
		desc: "OpenGridLabs worked alongside engineering during implementation, answering design questions and maintaining the Figma source of truth. A/B tests were configured for the four highest-traffic flows, with the redesigned variant launched to 50% of traffic before full rollout.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Primary conversion rate", before: "Baseline", after: "+41%", change: "+41%" },
	{ metric: "Support contacts on key flows", before: "Baseline", after: "-38%", change: "-38%" },
	{ metric: "WCAG AA contrast compliance", before: "64% of screens", after: "100%", change: "100%" },
	{ metric: "Component state coverage", before: "~30% (no system)", after: "100% (all states)", change: "100% (all states)" },
	{ metric: "Design token coverage", before: "0%", after: "100% (fully tokenised)", change: "100% (fully tokenised)" },
	{ metric: "A/B test win rate", before: "—", after: "4/4 flows improved", change: "4/4 flows improved" }
];

const SUCCESS_FACTORS = [
	{
		title: "Hierarchy is a communication tool",
		desc: "Visual hierarchy tells users what to do next without using words. When primary and secondary actions look similar, users spend cognitive budget deciding rather than acting. The redesign made the right action visually obvious — and completion rates followed."
	},
	{
		title: "Consistency is trust",
		desc: "A product that looks almost consistent but never quite is creates a low-grade sense of unease that users can't articulate. A systematically consistent product feels stable, which is the precondition for users to invest effort in it."
	},
	{
		title: "Design tokens bridge design and engineering",
		desc: "A Figma component library without tokens is documentation for designers. A token layer turns design decisions into code variables that engineering can implement once and maintain everywhere — making the system durable rather than aspirational."
	}
];

const FAQS = [
	{
		q: "What is UI design?",
		a: "UI design is the practice of designing the visual and interactive layer of a product — typography, colour, spacing, components, and layout. Good UI communicates hierarchy, affords actions clearly, and reduces cognitive load, making the right thing to do visually obvious."
	},
	{
		q: "What is a design token?",
		a: "A design token is a named variable that stores a design decision — a colour value, a spacing unit, a font size — in a format that both design tools and code can reference. Tokens make a design system maintainable: changing one token updates the value everywhere it is used."
	}
];

export default function UserInterfaceDesignCaseStudy() {
	return (
		<>
			<SEO
				title="User Interface Design UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned B2B e-commerce and SaaS user interfaces, increasing conversion rate 41% with typographic scaling, semantic colors, and design tokens."
				canonical="/services/digital-experience/user-interface-design"
				keywords="User Interface Design, UI Design, Visual Design, Design System, Typography, Colour System, Component Library, Design Tokens, Figma, Accessibility, UI/UX"
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
					title="How a Principled UI Redesign Lifted Conversion 41% by Fixing What Users Actually Saw"
					description="A company with a functionally sound product was seeing conversion and engagement numbers that didn't match its customer satisfaction scores — users liked the product in conversation but weren't completing key flows. OpenGridLabs diagnosed the cause as a visual design layer that was actively working against users: inconsistent hierarchy, poor contrast, ambiguous affordances, and a component library that had never been designed as a system."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "E-commerce / SaaS (anonymised)" },
						{ label: "Scope", value: "Full product UI redesign" },
						{ label: "Timeline", value: "14 weeks" },
						{ label: "Tools", value: "Figma · Design tokens · Component library · A/B testing" }
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
						"Our client had a product that users described positively in interviews — the core functionality was genuinely useful and well thought-through. But the product's analytics told a different story: high drop-off at specific steps, low completion on flows users said they wanted to complete, and support volumes disproportionate to the product's complexity. The gap between how users described the product and how they actually used it pointed to a presentation layer problem.",
						"A systematic UI audit identified the causes. Visual hierarchy was inconsistent across the product — primary, secondary, and tertiary actions were styled similarly, leaving users scanning rather than acting. Colour was used decoratively rather than communicatively. Typography lacked the scale and contrast needed for scannability. And the component library had been built screen by screen without shared definitions, producing a product that looked almost consistent but never quite was. The functional logic was good; the visual execution was undermining it.",
						"User interface design is the practice of designing the visual and interactive layer of a product — the elements users see and touch. It encompasses typography, colour, spacing, layout, iconography, and component design. Good UI design communicates hierarchy, affords actions, reduces cognitive load, and makes the right thing to do visually obvious. It is not decoration; it is the part of the product that communicates meaning without words."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is User Interface Design?"
					definitionText="User interface design is the practice of designing the visual and interactive layer of a product — the elements users see and touch. It encompasses typography, colour, spacing, layout, iconography, and component design. Good UI design communicates hierarchy, affords actions, reduces cognitive load, and makes the right thing to do visually obvious. It is not decoration; it is the part of the product that communicates meaning without words."
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
					description={"Rebuilding visual architectures systematically to align functional potential with conversion success."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"UI Design System"}
					description={"A componentized UI architecture mapping foundational design tokens to structured elements, reusable layout grids, and automated design-to-code variables."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"UI Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A robust 14-week visual overhaul establishing semantic structures, code variables, and A/B test rolling."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Deploying semantic variables and accessibility scales generated key conversion wins and reduced customer support requests."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The product always worked. It just didn't look like it worked. The redesign didn't add new features — it made the existing ones visible. The conversion lift was a direct consequence of users finally seeing what they could do."}
					author={"VP of Product"}
					subtitle={"Confidential E-commerce Company"}
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
					title={"A product that works but doesn't convert?"}
					description={"OpenGridLabs designs user interfaces — typographic systems, semantic colour, component libraries, and design tokens — that communicate meaning clearly and make the right action visually obvious."}
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
