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
	{ value: "9", label: "Sequence models deployed for forecasting and risk", accent: "from-emerald-400 to-teal-500" },
	{ value: "-16%", label: "Improvement in forecast error on priority segments", accent: "from-cyan-400 to-blue-500" },
	{ value: "37%", label: "Earlier identification of high-risk sequences", accent: "from-purple-500 to-indigo-500" },
	{ value: "12 wk", label: "From static features to sequence modeling workflow", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "Training data was fragmented, inconsistently labeled, and difficult to reuse across experiments" },
	{ text: "Prototype models performed well in demos but lacked production-grade evaluation and monitoring" },
	{ text: "Manual review slowed workflows and made quality difficult to measure consistently" },
	{ text: "Deployment required engineering handoffs, model packaging, and integration with existing systems" },
	{ text: "Teams needed confidence scores, auditability, and fallback paths for uncertain predictions" }
];

const SOLUTIONS = [
	{ text: "A deep learning pipeline for data intake, labeling, training, evaluation, deployment, and monitoring" },
	{ text: "Production evaluation sets, quality thresholds, and review workflows matched to business risk" },
	{ text: "Model serving APIs and batch workflows integrated into existing tools and operations" },
	{ text: "Dashboards for volume, accuracy, latency, drift, exception rates, data quality, and user adoption" },
	{ text: "Human-in-the-loop review and rollback paths for uncertain, sensitive, or high-impact outputs" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Source data", "Labels", "Metadata", "Quality checks", "Training snapshots"], color: "hsl(180,100%,50%)" },
	{ title: "Train", items: ["Preprocessing", "Model training", "Experiment tracking", "Tuning", "Artifact packaging"], color: "hsl(210,100%,50%)" },
	{ title: "Evaluate", items: ["Validation sets", "Error analysis", "Confidence scoring", "Bias checks", "Approval gates"], color: "hsl(280,100%,65%)" },
	{ title: "Operate", items: ["API serving", "Batch scoring", "Dashboards", "Human review", "Drift alerts"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Readiness & Model Design (Weeks 1-3)",
		desc: "OpenGridLabs audited available data, labeling quality, workflow requirements, and business success metrics. The team created representative training and evaluation sets that captured real-world variation, edge cases, and operational constraints.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Training, Evaluation & Workflow Integration (Weeks 4-8)",
		desc: "The team built the model workflow with preprocessing, training, experiment tracking, evaluation, confidence scoring, and review queues. Outputs were tested against baseline processes and refined with business users before production rollout.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Deployment, Monitoring & Enablement (Weeks 9-12)",
		desc: "The final phase connected the model to production systems, dashboards, alerts, and runbooks. Client teams were trained to review outputs, monitor model quality, retrain safely, and extend the pattern to future deep learning use cases.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Sequence models deployed", before: "0", after: "9 models", change: "New capability" },
	{ metric: "Forecast error", before: "Baseline", after: "84% of baseline", change: "-16%" },
	{ metric: "Risk signal timing", before: "Late-stage alerts", after: "37% earlier signal", change: "Improved" },
	{ metric: "Feature approach", before: "Static snapshots", after: "Temporal sequences", change: "Richer" },
	{ metric: "Retraining workflow", before: "Manual", after: "Scheduled pipeline", change: "Scalable" }
];

const SUCCESS_FACTORS = [
	{
		title: "Representative data first",
		desc: "The team built training and evaluation sets from real production examples, which made model performance meaningful for actual workflows."
	},
	{
		title: "Evaluation beyond aggregate accuracy",
		desc: "Error analysis, segment checks, confidence thresholds, and operational guardrails helped teams understand where the model should and should not be trusted."
	},
	{
		title: "Workflow-native delivery",
		desc: "Model outputs were delivered into the tools and queues teams already used, reducing friction and improving adoption."
	},
	{
		title: "Monitoring after release",
		desc: "Accuracy proxies, drift, latency, exceptions, and review feedback were tracked continuously so the system could improve after launch."
	}
];

const FAQS = [
	{
		q: "What are RNN/LSTM models?",
		a: "RNN/LSTM is a deep learning capability that uses neural models to learn patterns from complex data such as images, video, text, sequences, or structured events. It can support recognition, prediction, generation, automation, and decision support depending on the business workflow."
	},
	{
		q: "Why do companies use RNN/LSTM?",
		a: "Companies use RNN/LSTM to automate complex analysis, improve decision speed, reduce manual review, and unlock value from data that is difficult to process with rules alone. Production success depends on data quality, evaluation, integration, monitoring, and governance."
	}
];

export default function RNNLSTMCaseStudy() {
	return (
		<>
			<SEO
				title="RNN/LSTM Case Study | OpenGridLabs"
				description="How OpenGridLabs built an RNN/LSTM workflow deploying 9 sequence models, cutting forecast error by 16% and identifying high-risk sequences 37% earlier."
				canonical="/services/ai-data/rnn-lstm"
				keywords="RNN/LSTM, Recurrent Neural Networks, LSTM Models, Sequence Modeling, Time Series AI, Forecasting Models, Risk Prediction, Deep Learning Forecasting"
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
					categoryTag="Case Study · Deep Learning"
					title="How RNN/LSTM Modeled Sequential Patterns for Forecasting and Risk Signals"
					description="A forecasting team needed to understand time-dependent behavior across usage events, account activity, and operational sequences. OpenGridLabs built RNN/LSTM workflows that modeled sequence patterns, improved forecast stability, and exposed risk signals earlier."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Forecasting and customer intelligence (anonymised)" },
						{ label: "Scope", value: "9 sequence models deployed" },
						{ label: "Timeline", value: "12 weeks to production" },
						{ label: "Stack", value: "RNN · LSTM · Sequence Modeling · Forecasting" }
					]}
				/>

				<CaseStudyCarousel
					slug="rnn-lstm"
					title="RNN/LSTM"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/rnn-lstm/1.jpg",
						"/images/case-studies/rnn-lstm/2.jpg"
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
						"The client had growing volumes of data that were too complex for rules-based automation alone: images, video, documents, sequences, product events, and customer interactions. Teams had promising experiments, but moving them into reliable production workflows required stronger data pipelines, evaluation standards, deployment controls, and monitoring.",
						"The company needed RNN/LSTM that could move beyond a promising prototype and operate reliably in a production environment. OpenGridLabs designed the deep learning workflow, data pipelines, evaluation process, deployment pattern, and monitoring needed to make the capability dependable at scale.",
						"RNN/LSTM uses deep learning models to learn patterns from complex data and support prediction, recognition, generation, classification, or automation. In production, it requires curated data, model evaluation, deployment infrastructure, monitoring, and governance so outputs remain reliable over time."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Are RNN/LSTM Models?"
					definitionText="RNN/LSTM uses deep learning models to learn patterns from complex data and support prediction, recognition, generation, classification, or automation. In production, it requires curated data, model evaluation, deployment infrastructure, monitoring, and governance so outputs remain reliable over time."
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
					title={"Five Practical Gaps Resolved"}
					description={"How OpenGridLabs turned promising prototypes into an enterprise-grade prediction workflow."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a deep learning architecture that connected data intake, model training, evaluation, serving, monitoring, and human review. The system was built for repeatable releases, traceable outputs, and practical operations rather than one-off experimentation."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Production deep learning is an operating system, not just a model"}
					alertText={"The implementation focused on the whole lifecycle: data quality, reproducible training, model validation, deployment, monitoring, and human review. That made the model useful after launch, not only impressive during testing."}
					rightColumnTitle={"RNN/LSTM Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over twelve weeks, moving from data and model readiness into production deployment and long-term monitoring."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after deployment against the client's pre-engagement baseline. The strongest gains came from productionizing model workflows, improving review consistency, and connecting outputs to operational systems."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The biggest shift was that rnn/lstm became something we could operate, not just test. We can see quality, handle edge cases, and improve the model without rebuilding the workflow every time."}
					author={"Director of AI Products"}
					subtitle={"Confidential Client"}
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
					title={"Ready to build production-ready sequence models?"}
					description={"OpenGridLabs designs deep learning systems for rnn/lstm, including data pipelines, model training, evaluation, deployment, monitoring, human review, and integration with your existing workflows."}
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
