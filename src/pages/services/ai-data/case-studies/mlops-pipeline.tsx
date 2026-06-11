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
	{ value: "73%", label: "Reduction in manual model release steps", accent: "from-purple-500 to-indigo-500" },
	{ value: "8", label: "Production models onboarded to pipeline", accent: "from-cyan-400 to-blue-500" },
	{ value: "-45%", label: "Faster model validation & deployment cycles", accent: "from-pink-500 to-rose-400" },
	{ value: "12 wk", label: "From manual handoffs to governed pipeline", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Training, validation, and deployment steps were manually coordinated across data science and engineering" },
	{ text: "Model artifacts, datasets, parameters, and evaluation results were not consistently versioned together" },
	{ text: "Production releases lacked automated gates for data quality, model quality, latency, and rollback readiness" },
	{ text: "Drift and performance decay were discovered late, often after business users reported issues" },
	{ text: "Retraining was manual, reactive, and difficult to reproduce with confidence" }
];

const SOLUTIONS = [
	{ text: "An end-to-end MLOps pipeline for data validation, training, testing, registration, and deployment" },
	{ text: "A model registry with versioned artifacts, metadata, approval status, lineage, and rollback references" },
	{ text: "Automated release gates covering data checks, performance thresholds, explainability, and serving health" },
	{ text: "Monitoring dashboards for prediction quality, drift, latency, data freshness, and business KPIs" },
	{ text: "Retraining triggers and runbooks that turned model maintenance into a controlled workflow" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Source systems", "Feature pipelines", "Data validation", "Dataset versioning", "Training snapshots"], color: "hsl(180,100%,50%)" },
	{ title: "Train & Test", items: ["Training jobs", "Experiment tracking", "Evaluation suites", "Bias checks", "Performance gates"], color: "hsl(210,100%,50%)" },
	{ title: "Registry", items: ["Model artifacts", "Lineage", "Approval status", "Deployment metadata", "Rollback versions"], color: "hsl(280,100%,65%)" },
	{ title: "Operate", items: ["Batch scoring", "API inference", "Monitoring", "Drift alerts", "Retraining workflows"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Pipeline Blueprint & Release Standards (Weeks 1-3)",
		desc: "The team mapped the existing model lifecycle, identified manual handoffs, and defined release standards for datasets, feature logic, training runs, metrics, model artifacts, approvals, and rollback requirements. Priority models were grouped by serving pattern: batch scoring, scheduled forecasting, and real-time inference.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Automation, Registry & Deployment Gates (Weeks 4-8)",
		desc: "OpenGridLabs built automated workflows for data validation, model training, evaluation, artifact packaging, registry registration, and deployment. Release gates checked data quality, model performance, latency, explainability, and rollback readiness before a model could move from candidate to approved production version.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Monitoring, Drift Detection & Retraining (Weeks 9-12)",
		desc: "The final phase added live monitoring for model quality, input drift, prediction drift, data freshness, service latency, and business KPIs. Retraining triggers and incident runbooks were created so model degradation could be handled as a controlled operational workflow instead of an emergency investigation.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Manual release steps", before: "Baseline", after: "27% of baseline", change: "-73%" },
	{ metric: "Models onboarded to pipeline", before: "0", after: "8 production models", change: "Governed" },
	{ metric: "Validation-to-deployment cycle time", before: "Baseline", after: "55% of baseline", change: "-45%" },
	{ metric: "Model artifact traceability", before: "Partial", after: "Registry-backed lineage", change: "Auditable" },
	{ metric: "Drift detection", before: "Manual review", after: "Automated alerts", change: "Earlier signal" },
	{ metric: "Rollback readiness", before: "Ad hoc", after: "Versioned rollback path", change: "Safer release" },
	{ metric: "Retraining process", before: "Reactive", after: "Trigger-based workflow", change: "Operationalized" }
];

const SUCCESS_FACTORS = [
	{
		title: "Version everything that affects a prediction",
		desc: "Datasets, feature code, training parameters, model artifacts, evaluation results, and deployment metadata were captured together, making releases reproducible."
	},
	{
		title: "Use gates before production, not just dashboards after launch",
		desc: "Automated checks blocked weak or risky candidates before deployment, reducing incidents and review burden."
	},
	{
		title: "Monitor model behavior and business outcomes together",
		desc: "The pipeline tracked drift and latency alongside conversion, retention, forecasting error, and operational KPIs, so teams could see whether technical changes mattered."
	},
	{
		title: "Make retraining a workflow, not a scramble",
		desc: "Drift alerts connected to runbooks and retraining triggers, giving teams a repeatable response when models aged out of current data."
	}
];

const FAQS = [
	{
		q: "What is an MLOps pipeline?",
		a: "An MLOps pipeline is an automated workflow for moving machine learning models from development to production and maintaining them after launch. It usually includes data validation, training, testing, model registry approval, deployment, monitoring, drift detection, and retraining."
	},
	{
		q: "Why do production ML teams need MLOps pipelines?",
		a: "Production ML teams need MLOps pipelines because models depend on changing data and changing user behavior. A pipeline makes releases reproducible, reduces deployment risk, monitors live model health, detects drift, and creates a controlled path for retraining and rollback."
	}
];

export default function MLOpsPipelineCaseStudy() {
	return (
		<>
			<SEO
				title="MLOps Pipeline Case Study | OpenGridLabs"
				description="How OpenGridLabs designed an automated MLOps pipeline for data validation, training, registration, and deployment to cut manual steps by 73%."
				canonical="/services/ai-data/mlops-pipeline"
				keywords="MLOps Pipeline, Machine Learning Operations, ML CI/CD, Model Registry, Model Monitoring, Drift Detection, Automated Retraining"
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
					categoryTag="Case Study · MLOps Pipeline"
					title="How an MLOps Pipeline Turned Fragile Model Releases Into Reliable Production ML"
					description="An enterprise team partnered with OpenGridLabs to build an automated, governed MLOps pipeline—reducing manual release tasks by 73%, shortening cycles by 45%, and introducing drift-triggered self-healing loops."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Enterprise SaaS and analytics (anonymised)" },
						{ label: "Scope", value: "8 production models onboarded" },
						{ label: "Timeline", value: "12 weeks to governed rollout" },
						{ label: "Stack", value: "ML CI/CD · Registry · Monitoring · Retraining" }
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
						"Our client operated several machine learning models across churn prediction, account scoring, recommendations, and forecasting. The models created value, but the operational process around them was fragile. Training happened in notebooks, deployment required engineering handoffs, model versions were hard to trace, and production monitoring was spread across logs, dashboards, and manual checks.",
						"As model usage grew, those manual practices became a risk. The company needed an MLOps pipeline: a repeatable production workflow that could validate data, train models, test artifacts, register approved versions, deploy safely, monitor live performance, detect drift, and trigger retraining when conditions changed.",
						"An MLOps pipeline is the automated workflow that connects model development to reliable operations. It brings together data validation, training, evaluation, registry approval, deployment, monitoring, drift detection, and retraining so machine learning systems can be released and maintained with the discipline expected from production software."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is an MLOps Pipeline?"
					definitionText="An MLOps pipeline is the automated workflow that connects model development to reliable operations. It brings together data validation, training, evaluation, registry approval, deployment, monitoring, drift detection, and retraining so machine learning systems can be released and maintained with the discipline expected from production software."
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
					title={"Five MLOps Gaps Closed"}
					description={"How OpenGridLabs built a controlled, scalable release pipeline to replace manual model handoffs."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Pipeline Architecture"}
					description={"OpenGridLabs designed a production ML pipeline that linked data sources, feature generation, training jobs, validation gates, model registry approvals, deployment targets, and monitoring feedback loops. The architecture made each release reproducible and every production model observable."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Make every model release reproducible, observable, and reversible"}
					alertText={"The core principle was simple: no model should reach production unless the team can explain what data trained it, what tests it passed, who approved it, where it is running, how it is performing, and how to roll it back if needed."}
					rightColumnTitle={"MLOps Pipeline Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over twelve weeks, establishing a repeatable MLOps pipeline to make model releases traceably secure. OpenGridLabs embedded standard operating frameworks alongside the client's platform team."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured across the first 90 days after the MLOps pipeline went live, comparing deployment safety, traceabilities, and retraining loops against former baselines."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Before the pipeline, model releases felt like a project every time. Now we have a controlled path from training to production, and the monitoring tells us when a model needs attention before users feel the impact."}
					author={"Head of Data Platform"}
					subtitle={"Confidential SaaS Company"}
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
					title={"Ready to make your ML releases production-ready?"}
					description={"OpenGridLabs builds MLOps pipelines for automated training, validation, registry approval, deployment, monitoring, drift detection, and retraining so models stay reliable after launch."}
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
