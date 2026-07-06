import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Sparkles,
	Database
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
	{ value: "64%", label: "Reduction in malformed outputs", accent: "from-cyan-400 to-blue-500" },
	{ value: "41%", label: "Lower token cost per request", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "3.5×", label: "Faster prompt iteration cycle", accent: "from-pink-500 to-rose-400" },
	{ value: "9 wk", label: "From ad hoc to managed practice", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Prompts hard-coded and duplicated across features, with the same task written inconsistently" },
	{ text: "No versioning—nobody could tell which prompt was live or what had changed when quality dropped" },
	{ text: "Edits made by intuition with no way to test whether a change helped or quietly broke something" },
	{ text: "Bloated, verbose prompts inflating token costs on every single request" },
	{ text: "Frequent malformed outputs breaking downstream parsing and frustrating users" }
];

const SOLUTIONS = [
	{ text: "A library of reusable, parameterised prompt templates replacing scattered hard-coded strings" },
	{ text: "Version control for prompts with change history, rollback, and a clear record of what's live" },
	{ text: "An automated evaluation harness scoring every prompt change against golden test sets" },
	{ text: "Few-shot and chain-of-thought optimization tuned per task for accuracy and consistency" },
	{ text: "Prompt compression and structured-output formatting to cut tokens and stop parsing failures" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Templates", items: ["Reusable prompt library", "Parameterised variables", "Role & format specs", "Shared components"], color: "hsl(180,100%,50%)" },
	{ title: "Composition", items: ["Few-shot selection", "Chain-of-thought scaffolding", "Prompt compression", "Structured schemas"], color: "hsl(210,100%,50%)" },
	{ title: "Eval & Versions", items: ["Golden test sets", "Automated scoring", "A/B comparison", "Version control & rollback"], color: "hsl(280,100%,65%)" },
	{ title: "Delivery", items: ["Runtime prompt serving", "Token & cost telemetry", "Output-quality monitoring", "Regression alerts"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit & Evaluation Baseline (Weeks 1–3)",
		desc: "OpenGridLabs inventoried every prompt across the product, identified duplication and inconsistency, and built golden test sets of representative inputs with expected outputs. This made prompt quality measurable for the first time, exposing which prompts were failing most often and which were quietly burning tokens.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Templates, Optimization & Versioning (Weeks 4–7)",
		desc: "The team refactored scattered prompts into a reusable, parameterised template library under version control. Each high-impact prompt was systematically optimized—clearer instructions, well-chosen few-shot examples, chain-of-thought where it helped, and structured-output schemas—with every change validated against the eval harness before shipping. Prompt compression trimmed tokens without losing quality.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Delivery, Monitoring & Enablement (Weeks 8–9)",
		desc: "A runtime layer served versioned prompts with token, cost, and output-quality telemetry and regression alerts. OpenGridLabs documented prompt-engineering standards and trained the client's engineers to write, test, and ship prompts through the new workflow—so the discipline would hold and improve long after the engagement ended.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Malformed / off-task outputs", before: "Baseline", after: "36% of baseline", change: "−64%" },
	{ metric: "Token cost per request", before: "Baseline", after: "59% of baseline", change: "−41%" },
	{ metric: "Output accuracy (eval set)", before: "72%", after: "91%", change: "+26%" },
	{ metric: "Prompt iteration cycle time", before: "~2 days", after: "~3 hours", change: "3.5× faster" },
	{ metric: "Duplicate prompts across features", before: "Widespread", after: "Consolidated", change: "Single source" },
	{ metric: "Prompt version tracking", before: "None", after: "Full history & rollback", change: "New capability" },
	{ metric: "Silent regressions on prompt edits", before: "Common", after: "Caught by eval gate", change: "Prevented" }
];

const SUCCESS_FACTORS = [
	{
		title: "Evaluation made quality measurable",
		desc: "Golden test sets turned 'this prompt feels better' into a score. Every change was judged on evidence, which is what let the team optimize aggressively without fear of silent regressions."
	},
	{
		title: "Prompts treated as code",
		desc: "Versioning, rollback, and a single source of truth brought software discipline to what had been loose strings—ending duplication and making it safe to change a prompt that multiple features depended on."
	},
	{
		title: "The right technique per task",
		desc: "Few-shot examples, chain-of-thought, and structured output were applied where each actually helped, rather than blanket-applied—improving accuracy on hard tasks while keeping simple prompts lean and cheap."
	},
	{
		title: "Cost and quality optimized together",
		desc: "Prompt compression and format discipline cut tokens while reducing malformed output—proving that leaner prompts and better results are not opposing goals when the changes are measured."
	}
];

const FAQS = [
	{
		q: "What is prompt engineering?",
		a: "Prompt engineering is the practice of designing, testing, and refining the instructions given to a large language model so it produces reliable, accurate, well-formatted output. It includes clear instructions, few-shot examples, chain-of-thought reasoning, role and format specification, and structured output—turning unpredictable model behaviour into consistent, production-grade results."
	},
	{
		q: "What is the difference between few-shot and chain-of-thought prompting?",
		a: "Few-shot prompting gives the model a handful of worked examples so it learns the desired pattern and format from demonstrations. Chain-of-thought prompting asks the model to reason step by step before answering, improving accuracy on complex tasks. They are complementary: few-shot examples can demonstrate the reasoning style, while chain-of-thought encourages the model to apply it to new inputs."
	}
];

export default function PromptEngineeringCaseStudy() {
	return (
		<>
			<SEO
				title="Prompt Engineering Case Study | OpenGridLabs"
				description="How systematic prompt engineering cut output errors 64% and reduced token cost by 41% for a high-growth AI company."
				canonical="/services/ai-data/prompt-engineering"
				keywords="Prompt Engineering, Prompt Templates, Prompt Optimization, Few-Shot, Chain-of-Thought, token cost reduction"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(150,100%,45%) 0%, hsl(180,100%,50%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Prompt Engineering"
					title="How Systematic Prompt Engineering Cut Output Errors 64% for a High-Growth AI Company"
					description="A fast-scaling AI company partnered with OpenGridLabs to turn ad hoc, copy-pasted prompts into a disciplined engineering practice—reusable templates, versioning, automated evaluation, and few-shot optimization that made LLM output reliable, consistent, and far cheaper at scale."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scope", value: "70+ prompts across 9 features" },
						{ label: "Timeline", value: "9 weeks to production" },
						{ label: "Stack", value: "Prompt Templates · Versioning · Eval · Few-shot" }
					]}
				/>

				<CaseStudyCarousel
					slug="prompt-engineering"
					title="Prompt Engineering"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/prompt-engineering/1.jpg",
						"/images/case-studies/prompt-engineering/2.jpg"
					]}
				/>

				

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-emerald-500/30"
					hoverTextClass="group-hover:text-emerald-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a venture-backed AI company whose product relies on large language models for everything from summarization and extraction to classification and drafting. Early on, prompts were written by whoever built each feature—pasted directly into code, tuned by trial and error, and rarely documented. That worked when the product had a handful of features and one or two engineers touching the models.",
						"As the team and feature set grew, the cracks showed. The same task was prompted three different ways in three places. A tweak that fixed one feature silently broke another. Nobody could say which prompt version was live, why output quality dipped one week, or how much each verbose prompt was costing in tokens. Prompts had quietly become critical product logic—yet they were managed with less rigour than any other part of the codebase. The company needed to treat prompt engineering as a real engineering discipline: tested, versioned, measured, and reusable.",
						"Prompt engineering is the practice of designing, testing, and refining the instructions given to a large language model so it produces reliable, accurate, well-formatted output. It spans clear instructions, few-shot examples, chain-of-thought reasoning, role and format specification, and structured output—turning unpredictable model behaviour into consistent, production-grade results."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Prompt Engineering?"
					definitionText="Prompt engineering is the practice of designing, testing, and refining the instructions given to a large language model so it produces reliable, accurate, well-formatted output. It spans clear instructions, few-shot examples, chain-of-thought reasoning, role and format specification, and structured output—turning unpredictable model behaviour into consistent, production-grade results."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-emerald-500/10"
					definitionIconBorderClass="border-emerald-500/20"
					definitionIconColorClass="text-emerald-400"
					glowColorClass="bg-emerald-400"
					gradientFromClass="from-emerald-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Maintenance Gaps Overcome"}
					description={"How OpenGridLabs replaced scattered string variables with structured templates, evaluations, and optimizations."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Prompt Engineering Platform Architecture"}
					description={"OpenGridLabs designed a prompt-management layer that sits between the client's application and the underlying models. It centralises prompts as versioned, testable assets—separating prompt logic from application code—so changes can be evaluated, shipped, and rolled back with the same discipline as any other software release."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Portable across models"}
					alertText={"Because prompts live as versioned, evaluated assets rather than buried in code, they can be re-tested and re-tuned when a new model is released—turning a model upgrade from a risky rewrite into a measured migration. The same evaluation harness that proves a prompt works today also de-risks moving it to a better or cheaper model tomorrow."}
					rightColumnTitle={"Prompt Management Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to deliver reliability gains on the worst-performing prompts first while building toward a durable practice. OpenGridLabs embedded a team of prompt and ML engineers and an evaluation specialist alongside the client's product engineers."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, using the same golden test sets throughout. The results showed that treating prompts as engineered assets improves quality, consistency, and cost at the same time."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Prompts went from a folder of mystery strings to something we version, test, and trust like real code. Our output is more reliable, our token bill dropped, and we can finally change a prompt without holding our breath."}
					author={"Lead AI Engineer"}
					subtitle={"Confidential AI Company"}
					accentLineClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-emerald-500/20"}
					iconColorClass={"text-emerald-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-emerald-400"}
					activeChevronColorClass={"text-emerald-400"}
				/>

				<CaseStudyCta 
					title={"Ready to turn prompting into a real engineering discipline?"}
					description={"OpenGridLabs builds systematic prompt-engineering practices—templates, versioning, evaluation, and optimization—so your LLM output is reliable, consistent, and cost-efficient at scale."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-400"}
					btnGradientClass={"from-emerald-400 to-purple-500"}
					btnShadowColor={"16,185,129,0.2"}
				/>
			</div>
		</>
	);
}
