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

const STATS = [
	{ value: "64%", label: "Reduction in model experimentation cycle time", accent: "from-purple-500 to-indigo-500" },
	{ value: "38%", label: "More candidate models evaluated per sprint", accent: "from-cyan-400 to-blue-500" },
	{ value: "6", label: "Priority model families automated and governed", accent: "from-pink-500 to-rose-400" },
	{ value: "10 wk", label: "From manual experiments to production AutoML", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Model experiments were rebuilt manually for every use case, slowing delivery and duplicating work" },
	{ text: "Candidate models were compared with inconsistent metrics, splits, and validation methods" },
	{ text: "Hyperparameter tuning consumed engineering time without a reliable search strategy" },
	{ text: "Production packaging was separate from experimentation, causing delays after model selection" },
	{ text: "Business teams could not see why a model won or whether it met approval criteria" }
];

const SOLUTIONS = [
	{ text: "A reusable AutoML workflow for classification, regression, forecasting, and ranking models" },
	{ text: "Standard evaluation templates with approved metrics, time splits, holdouts, and fairness checks" },
	{ text: "Automated hyperparameter tuning with bounded search spaces and resource controls" },
	{ text: "Model packaging, registry, and deployment hooks built into the experimentation workflow" },
	{ text: "Readable experiment reports showing model performance, tradeoffs, and approval status" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Inputs", items: ["Feature tables", "Training datasets", "Business constraints", "Target definitions", "Evaluation windows"], color: "hsl(180,100%,50%)" },
	{ title: "AutoML Engine", items: ["Algorithm search", "Hyperparameter tuning", "Cross-validation", "Resource limits", "Experiment tracking"], color: "hsl(210,100%,50%)" },
	{ title: "Governance", items: ["Metric scorecards", "Explainability", "Bias checks", "Approval gates", "Model registry"], color: "hsl(280,100%,65%)" },
	{ title: "Production", items: ["Batch scoring", "API inference", "Monitoring", "Drift alerts", "Retraining triggers"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Use Case Mapping & Evaluation Design (Weeks 1-3)",
		desc: "The team mapped the highest-value model use cases, grouped them by model family, and defined standard evaluation templates. Each template included approved metrics, train-test split rules, leakage checks, minimum performance thresholds, and the business constraints that every candidate model had to satisfy before review.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "AutoML Workflow & Tuning Automation (Weeks 4-7)",
		desc: "OpenGridLabs built the AutoML workflow: dataset intake, feature checks, algorithm search, bounded hyperparameter tuning, experiment tracking, and model comparison reports. Resource controls were added so large searches could run predictably without overwhelming shared infrastructure.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Registry, Deployment & Monitoring (Weeks 8-10)",
		desc: "The final phase connected approved models to the registry, deployment pipelines, batch scoring jobs, API inference endpoints, and monitoring dashboards. Retraining triggers were added for data drift and performance decay, giving the client a repeatable loop from new data to refreshed production models.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Experimentation cycle time", before: "Baseline", after: "36% of baseline", change: "-64%" },
	{ metric: "Candidate models evaluated per sprint", before: "Baseline", after: "1.38x baseline", change: "+38%" },
	{ metric: "Automated model families", before: "0", after: "6", change: "New capability" },
	{ metric: "Evaluation consistency", before: "Manual and varied", after: "Standard scorecards", change: "Governed" },
	{ metric: "Time from selected model to deployment", before: "Several weeks", after: "Several days", change: "Faster release" },
	{ metric: "Experiment traceability", before: "Notebook history", after: "Tracked runs and registry", change: "Auditable" },
	{ metric: "Retraining readiness", before: "Manual review", after: "Drift-based triggers", change: "Scalable" }
];

const SUCCESS_FACTORS = [
	{
		title: "Clear evaluation templates",
		desc: "Every model family had approved metrics, holdout rules, threshold criteria, and risk checks, so model comparisons were fair and repeatable."
	},
	{
		title: "Bounded automation",
		desc: "Search spaces, compute budgets, and runtime limits kept experimentation efficient and prevented runaway tuning jobs from overwhelming infrastructure."
	},
	{
		title: "Production built into the workflow",
		desc: "Winning models were already connected to packaging, registry, deployment, and monitoring steps, which removed the handoff gap between experimentation and release."
	},
	{
		title: "Human approval at the right moments",
		desc: "Automation generated candidates and evidence, but data scientists and business owners still approved models based on accuracy, interpretability, stability, and operational impact."
	}
];

const FAQS = [
	{
		q: "What are AutoML solutions?",
		a: "AutoML solutions automate major parts of machine learning development, including data checks, feature preparation, algorithm selection, hyperparameter tuning, model evaluation, packaging, deployment, and monitoring. They help teams move faster while keeping experiments reproducible and production-ready."
	},
	{
		q: "Why do companies use AutoML solutions?",
		a: "Companies use AutoML solutions to reduce repetitive manual experimentation, evaluate more model candidates, standardize model comparison, and make machine learning delivery more scalable. AutoML is especially useful when many teams need reliable baseline models or when data scientists are blocked by repeated setup and tuning work."
	}
];

export default function AutoMLSolutionsCaseStudy() {
	return (
		<>
			<SEO
				title="AutoML Solutions Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a governed AutoML platform that automated model selection, tuning, evaluation, and deployment to cut cycle times by 64%."
				canonical="/services/ai-data/automl-solutions"
				keywords="AutoML, Automated Machine Learning, Model Selection Automation, Hyperparameter Tuning, MLOps, AI Governance"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(280,100%,65%) 0%, hsl(220,100%,50%) 50%, transparent 100%)`
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
					categoryTag="Case Study · AutoML Solutions"
					title="How AutoML Solutions Took Model Development From Slow Experiments to Repeatable Production Delivery"
					description="A fast-growing company partnered with OpenGridLabs to build a governed AutoML workflow—automating model selection, hyperparameter tuning, validation, and deployment—slashing development cycles by 64% while maintaining absolute production reliability."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Growth-stage SaaS and analytics (anonymised)" },
						{ label: "Scope", value: "6 model families automated" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "AutoML · Tuning · Evaluation · Deployment" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-purple-500/30"
					hoverTextClass="group-hover:text-purple-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a small data science team supporting a long queue of machine learning requests: churn prediction, sales lead scoring, demand forecasting, pricing optimization, support triage, and account risk scoring. Each project started from scratch, with manual model selection, repeated notebook work, inconsistent validation, and long waits before a useful model reached production.",
						"The team did not need AutoML as a black box. They needed AutoML solutions that could standardize repeatable work while preserving expert review, business constraints, and production controls. OpenGridLabs was asked to design a workflow that could automate exploration and tuning, compare models consistently, package winning candidates, and make deployment repeatable.",
						"AutoML solutions automate parts of the machine learning lifecycle: feature preparation, algorithm selection, hyperparameter tuning, model comparison, validation, packaging, and deployment. The best implementations are not uncontrolled black boxes; they combine automation with governance, explainability, monitoring, and human approval where business risk requires it."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Are AutoML Solutions?"
					definitionText="AutoML solutions automate parts of the machine learning lifecycle: feature preparation, algorithm selection, hyperparameter tuning, model comparison, validation, packaging, and deployment. The best implementations are not uncontrolled black boxes; they combine automation with governance, explainability, monitoring, and human approval where business risk requires it."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-purple-500/10"
					definitionIconBorderClass="border-purple-500/20"
					definitionIconColorClass="text-purple-400"
					glowColorClass="bg-purple-400"
					gradientFromClass="from-purple-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five AutoML Bottlenecks Overcome"}
					description={"How OpenGridLabs built a controlled automated experimentation pipeline with built-in governance."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed an AutoML layer that connected prepared datasets to automated experimentation, controlled tuning, model evaluation, registry approval, and production deployment. The architecture gave data scientists leverage without removing their judgment from high-impact decisions."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Automate the repeatable work, keep humans in the decisions"}
					alertText={"The goal was not to let automation silently choose models. The workflow automated the expensive search and comparison work, then surfaced clear scorecards so data scientists and business owners could approve models based on accuracy, stability, interpretability, and operational risk."}
					rightColumnTitle={"AutoML Solutions Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over ten weeks. OpenGridLabs worked with data science, analytics engineering, and platform teams to turn recurring model development steps into reusable automation."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured across three production launches and several follow-on experiments. The biggest impact came from eliminating repeated setup work and giving every model candidate the same evaluation and deployment path."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"AutoML did not replace our data scientists. It gave them a better engine. We can explore more options, compare them consistently, and get approved models into production without rebuilding the same workflow every time."}
					author={"Director of Analytics"}
					subtitle={"Confidential SaaS Platform"}
					accentLineClass={"bg-purple-400"}
					iconColorClass={"text-purple-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-purple-500/20"}
					iconColorClass={"text-purple-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-purple-400"}
					activeChevronColorClass={"text-purple-400"}
				/>

				<CaseStudyCta 
					title={"Ready to scale machine learning with governed AutoML?"}
					description={"OpenGridLabs builds AutoML solutions that automate experimentation, tuning, evaluation, deployment, and monitoring while keeping expert review and production governance in the loop."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-purple-400"}
					iconColorClass={"text-purple-400"}
					btnGradientClass={"from-purple-400 to-cyan-500"}
					btnShadowColor={"168,85,247,0.2"}
				/>
			</div>
		</>
	);
}
