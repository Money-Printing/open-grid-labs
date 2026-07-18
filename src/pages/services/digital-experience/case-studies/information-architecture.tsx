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
	{ value: "52%", label: "Reduction in time-to-find on critical tasks", accent: "from-pink-500 to-rose-600" },
	{ value: "41→89%", label: "Task success on navigation-dependent paths", accent: "from-purple-500 to-indigo-600" },
	{ value: "38%", label: "Decrease in internal search usage", accent: "from-blue-500 to-cyan-600" },
	{ value: "14 wk", label: "Research to shipped navigation system", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Seventeen top-level navigation items with no clear categorisation logic" },
	{ text: "Settings split across three sections with overlapping and inconsistent taxonomy" },
	{ text: "Task success on critical navigation paths below 50% for new users" },
	{ text: "Internal search used as a workaround rather than a discovery tool — a sign of IA failure" },
	{ text: "Navigation structure reflected product build history, not user mental models" }
];

const SOLUTIONS = [
	{ text: "Card sorting study with 40 users establishing user-generated category groupings" },
	{ text: "Tree testing the proposed new structure with 60 users before any visual design" },
	{ text: "Navigation redesign from six top-level categories derived directly from the card sort data" },
	{ text: "Consistent settings architecture with a single, logically organised settings area" },
	{ text: "Progressive disclosure for advanced features, reducing cognitive load for common tasks" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Research", items: ["Card sorting (open + closed)", "Tree testing", "Navigation diary study", "Expert heuristic review"], color: "hsl(330,100%,60%)" },
	{ title: "Analysis", items: ["Category groupings from data", "Mental model mapping", "Labelling evaluation", "Competitor IA review"], color: "hsl(280,100%,65%)" },
	{ title: "Design", items: ["New IA proposal", "Navigation structure", "Settings architecture", "Search taxonomy"], color: "hsl(200,100%,50%)" },
	{ title: "Validate", items: ["Tree testing on proposed IA", "Task success benchmark", "Navigation prototype test", "Iteration"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Research: Card Sorting & Diary Study (Weeks 1–5)",
		desc: "OpenGridLabs ran an open card sort with 40 users to understand how they naturally grouped the product's content and features. A two-week navigation diary study asked 15 users to record every navigation failure. Both studies confirmed that the current structure matched the product's build history, not users' mental models.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "IA Design & Tree Testing (Weeks 6–10)",
		desc: "The new IA was designed around six top-level categories derived directly from card sort data. Before any visual design, tree testing with 60 users validated that the proposed structure allowed users to find items successfully. The structure was iterated twice based on tree test results.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Navigation Design & Rollout (Weeks 11–14)",
		desc: "The new navigation system was designed and implemented, with a transition plan for experienced users and contextual wayfinding to ease migration. Task success and time-to-find were benchmarked four weeks post-launch.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Time-to-find (critical tasks)", before: "Baseline", after: "-52%", change: "-52%" },
	{ metric: "Task success (navigation paths)", before: "41%", after: "89%", change: "89%" },
	{ metric: "Internal search usage", before: "Baseline", after: "-38%", change: "-38%" },
	{ metric: "New user navigation time in onboarding", before: "20–30% of session", after: "<10%", change: "<10%" },
	{ metric: "Top-level navigation items", before: "17", after: "6", change: "6" },
	{ metric: "Post-launch nav-related support tickets", before: "Baseline", after: "-61%", change: "-61%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Card sorting before designing",
		desc: "Navigation categories designed by the team reflect the team's mental model. Navigation categories derived from card sort data reflect users' mental models. The difference between the two is the gap between a structure that makes sense to the people who built the product and one that makes sense to the people who use it."
	},
	{
		title: "Tree test before visual design",
		desc: "Tree testing validates navigation structure with real users before any visual design is invested. It is the single highest-value research method for IA work — cheap to run, specific in its findings, and directly actionable."
	},
	{
		title: "Six items is a design decision",
		desc: "Reducing from seventeen to six top-level navigation items wasn't minimalism — it was the direct output of the card sort data, where users consistently grouped the product's features into six categories. The number came from the research, not from a design principle."
	}
];

const FAQS = [
	{
		q: "What is information architecture in UX?",
		a: "Information architecture is the practice of organising, structuring, and labelling a product's content and functionality so users can find what they need efficiently. It covers navigation design, taxonomy, labelling, and the relationships between content categories."
	},
	{
		q: "What is card sorting?",
		a: "Card sorting is a research method where users organise topics or features written on cards into groups that make sense to them. Open card sorting generates user-defined categories; closed card sorting tests a proposed structure. Both reveal how users mentally model a product's content and inform navigation design decisions."
	}
];

export default function InformationArchitectureCaseStudy() {
	return (
		<>
			<SEO
				title="Information Architecture UI/UX Case Study | OpenGridLabs"
				description="How Information Architecture Redesign Reduced Time-to-Find 52% Across a 400-Page Product and improved task success to 89%."
				canonical="/services/digital-experience/information-architecture"
				keywords="Information Architecture, IA Design, Navigation Design, Card Sorting, Tree Testing, Taxonomy, Findability, Wayfinding, Site Structure, UI/UX"
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
					title="How Information Architecture Redesign Reduced Time-to-Find 52% Across a 400-Page Product"
					description="A complex B2B product had accumulated four years of features, settings, and content organised in the order they were built rather than the order users needed them. Navigation required expert knowledge to traverse; new users were lost; even experienced users relied on search to find things they'd seen before. OpenGridLabs restructured the information architecture from the user's mental model outward — reducing time-to-find 52% and improving task success from 41% to 89%."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Enterprise B2B SaaS (anonymised)" },
						{ label: "Scope", value: "400-page product navigation redesign" },
						{ label: "Timeline", value: "14 weeks" },
						{ label: "Methods", value: "Card Sorting · Tree Testing · Navigation Design · Wayfinding" }
					]}
				/>

				<CaseStudyCarousel
					slug="information-architecture"
					title="How Information Architecture Redesign Reduced Time-to-Find 52% Across a 400-Page Product"
					accentColor="pink"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/information-architecture/1.jpg",
						"/images/case-studies/information-architecture/2.jpg"
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
						"Our client had a product that had grown from a focused tool into a comprehensive platform. Four years of feature additions had produced a navigation structure organised around when features were built, not how users thought about them. The main navigation had seventeen top-level items. Settings were split across three separate sections with no consistent logic. The help documentation had a different structure from the product itself.",
						"The consequence was a product that rewarded expertise and punished newcomers. New users in onboarding sessions spent 20–30% of their time searching for features rather than using them. Experienced users developed personal workarounds — bookmarks, search habits, and memorised paths — that indicated navigation failure rather than product mastery. The architecture needed to be rebuilt from the user's mental model, not the product's build history.",
						"Information architecture (IA) is the practice of organising, structuring, and labelling the content and functionality of a product so that users can find what they need efficiently and confidently. It encompasses navigation design, taxonomy, labelling systems, search, and the relationships between content categories. Good IA is invisible — users find what they need without noticing the structure. Poor IA is the cause of 'I know it's here somewhere'."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Information Architecture?"
					definitionText="Information architecture (IA) is the practice of organising, structuring, and labelling the content and functionality of a product so that users can find what they need efficiently and confidently. It encompasses navigation design, taxonomy, labelling systems, search, and the relationships between content categories. Good IA is invisible — users find what they need without noticing the structure. Poor IA is the cause of 'I know it's here somewhere'."
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
					tag={"IA Friction & Solutions"}
					title={"Challenges & Solutions"}
					description={"Restructuring complex product pathways to align features with user expectations and cognitive workflows."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Information Architecture Process"}
					description={"OpenGridLabs structured the redesign based on a rigorous cycle of open/closed card sorting, mental model mapping, taxonomy validation, and iterative tree testing."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"IA Process Steps"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A 14-week architecture and layout transformation program from card sorting analysis to navigation rollout."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Post-launch verification confirmed substantial improvements in user findability, task success, and onboarding times."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The old navigation was a timeline of our product decisions. The new one is a map of how our users think. The moment we tested the new structure with users before building it, we knew we had it right — they found things without hesitating."}
					author={"CPO"}
					subtitle={"Confidential Enterprise SaaS Company"}
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
					title={"Users searching for things they've already seen?"}
					description={"OpenGridLabs redesigns information architecture — card sorting, tree testing, and navigation design grounded in user mental models — so users find what they need without knowing how."}
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
