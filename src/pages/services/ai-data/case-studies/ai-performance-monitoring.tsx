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
	{ value: "76%", label: "Faster incident detection & resolution", accent: "from-cyan-400 to-blue-500" },
	{ value: "Wks→hrs", label: "Time to notice model degradation", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "100%", label: "Production models under live monitoring", accent: "from-pink-500 to-rose-400" },
	{ value: "8 wk", label: "From blind spots to full observability", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Model accuracy could degrade silently for weeks with no alert—discovered only via complaints" },
	{ text: "Standard monitoring tracked uptime and errors but nothing about prediction quality" },
	{ text: "No detection of data drift or concept drift as real-world inputs shifted" },
	{ text: "No per-model visibility into latency, token cost, or output quality trends" },
	{ text: "Incidents took days to diagnose with no historical metrics to trace what changed" }
];

const SOLUTIONS = [
	{ text: "Live accuracy and quality tracking using ground-truth feedback and proxy signals" },
	{ text: "Continuous drift detection on inputs and predictions, alerting before accuracy visibly drops" },
	{ text: "Smart alerting with thresholds and anomaly detection routed to the right team" },
	{ text: "Per-model dashboards for latency, throughput, token cost, and error rates" },
	{ text: "Historical metrics and traces so any incident can be diagnosed and explained quickly" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Instrument", items: ["Prediction logging", "Input & output capture", "Latency & cost telemetry", "Ground-truth & feedback collection"], color: "hsl(180,100%,50%)" },
	{ title: "Metrics & Drift", items: ["Accuracy & quality metrics", "Data & concept drift detection", "Distribution tracking", "Cost & latency aggregation"], color: "hsl(210,100%,50%)" },
	{ title: "Alerting", items: ["Threshold & anomaly detection", "Smart routing", "Severity & deduplication", "Retrain / rollback triggers"], color: "hsl(280,100%,65%)" },
	{ title: "Dashboards", items: ["Per-model dashboards", "Historical trends & traces", "Incident timelines", "Reports & SLAs"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Instrumentation & Baselines (Weeks 1–3)",
		desc: "OpenGridLabs instrumented production models to log inputs, outputs, latency, and cost, and set up ground-truth and feedback collection where available. The team established performance baselines for each model, so 'normal' was defined precisely and any deviation could be detected against it.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Drift Detection & Alerting (Weeks 4–6)",
		desc: "Data and concept drift detection were added on inputs and predictions, alongside live accuracy and quality metrics. OpenGridLabs configured smart alerting—thresholds plus anomaly detection, with severity and deduplication—routed to the right team, so a drifting model now raises a timely, actionable alert instead of a silent decline.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Dashboards, Response & Enablement (Weeks 7–8)",
		desc: "Per-model dashboards with historical trends and incident timelines were finalised, giving the team one place to see model health and trace what changed. Retrain and rollback triggers were wired to the alerts, and OpenGridLabs trained the client's engineers to extend monitoring to new models themselves—making observability a default part of every deployment.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Time to detect model degradation", before: "Weeks", after: "Hours", change: "Drastically faster" },
	{ metric: "Incident detection & resolution time", before: "Baseline", after: "24% of baseline", change: "−76%" },
	{ metric: "Production models monitored", before: "Minimal", after: "100%", change: "Full coverage" },
	{ metric: "Drift detection", before: "None", after: "Continuous & alerted", change: "New capability" },
	{ metric: "Degradations found by customers", before: "Common", after: "Rare", change: "Caught earlier" },
	{ metric: "Per-model cost & latency visibility", before: "None", after: "Live dashboards", change: "New capability" },
	{ metric: "Incident root-cause analysis", before: "Days, guesswork", after: "Historical traces", change: "Explainable" }
];

const SUCCESS_FACTORS = [
	{
		title: "Monitor the model, not just the machine",
		desc: "Treating accuracy, drift, and output quality as first-class signals—on par with uptime—was the core shift. It closed the exact blind spot that let a model decay silently for weeks."
	},
	{
		title: "Baselines make deviation meaningful",
		desc: "Defining precisely what 'normal' looked like for each model meant alerts fired on real deviations, not noise—so the team learned to trust and act on them rather than tune them out."
	},
	{
		title: "Catch drift before accuracy drops",
		desc: "Watching input and prediction distributions surfaced trouble earlier than waiting for accuracy to visibly fall—turning many would-be incidents into routine, pre-emptive retrains."
	},
	{
		title: "From alert to action",
		desc: "Wiring alerts to retrain and rollback paths, with historical traces for root cause, meant detection led straight to a fast, confident response—shrinking resolution time instead of just raising the alarm sooner."
	}
];

const FAQS = [
	{
		q: "What is AI performance monitoring?",
		a: "AI performance monitoring continuously tracks how machine learning models behave in production—their accuracy, latency, cost, inputs, and outputs. Unlike traditional software monitoring, it watches for model-specific problems like data drift, concept drift, and silent accuracy degradation, alerting teams before these issues reach users so models can be retrained or rolled back in time."
	},
	{
		q: "What is model drift and why does it matter?",
		a: "Model drift is the gradual decline in a model's performance after deployment as the world changes. Data drift happens when incoming data differs from training data; concept drift happens when the relationship the model learned no longer holds. It matters because a model can keep running without errors while quietly making worse predictions—so without monitoring, the damage is often found only after it has affected users or revenue."
	}
];

export default function AIPerformanceMonitoringCaseStudy() {
	return (
		<>
			<SEO
				title="AI Performance Observability Case Study | OpenGridLabs"
				description="How OpenGridLabs built an AI performance monitoring and observability platform that tracks drift, accuracy, latency, and cost in real time, cutting incident resolution time by 76%."
				canonical="/services/ai-data/ai-performance-monitoring"
				keywords="ML Observability, AI Monitoring, Model Drift Detection, Data Drift, Concept Drift, MLOps, LLMOps, Model Degradation"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Artificial Intelligence"
					title="How AI Performance Monitoring Caught Silent Model Drift Before It Reached Users"
					description="A fast-scaling company was flying blind once its models hit production—accuracy could quietly decay for weeks before anyone noticed. OpenGridLabs built an AI performance monitoring and observability platform that tracks drift, accuracy, latency, and cost in real time, turning silent degradation into early alerts and cutting incident resolution time by 76%."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scope", value: "50+ models in production" },
						{ label: "Timeline", value: "8 weeks to production" },
						{ label: "Stack", value: "Drift Detection · Metrics · Alerting · Dashboards" }
					]}
				/>

				<CaseStudyCarousel
					slug="ai-performance-monitoring"
					title="AI Performance Monitoring"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/ai-performance-monitoring/1.jpg",
						"/images/case-studies/ai-performance-monitoring/2.jpg"
					]}
				/>

				

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-cyan-500/30"
					hoverTextClass="group-hover:text-cyan-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a venture-backed AI company running more than fifty models in production across its product. The team was strong at building and shipping models—but once a model went live, visibility largely stopped. They knew the servers were up and the API was responding, yet they had almost no insight into whether the models were still making good predictions.",
						"The wake-up call came when a key model's accuracy quietly declined for nearly three weeks before a customer complaint surfaced it. The infrastructure had been perfectly healthy the whole time; the model had simply drifted as real-world data shifted, and nothing was watching for it. Traditional application monitoring tracked uptime and errors but was blind to the metrics that actually matter for AI—accuracy, drift, and prediction quality. The company needed AI performance monitoring: observability built for models, not just servers, that would catch degradation before users ever felt it."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Is AI Performance Monitoring?"
					definitionText="AI performance monitoring continuously tracks how models behave in production—accuracy, latency, cost, inputs, and outputs. Unlike traditional software monitoring, it watches for model-specific failures like data drift, concept drift, and silent accuracy decay, alerting teams before these reach users so models can be retrained or rolled back in time. It's the observability layer that keeps deployed AI trustworthy."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-cyan-500/10"
					definitionIconBorderClass="border-cyan-500/20"
					definitionIconColorClass="text-cyan-400"
					glowColorClass="bg-cyan-400"
					gradientFromClass="from-cyan-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"Challenges & Solutions"}
					title={"Five Blind Spots Resolved"}
					description={"How OpenGridLabs deployed an observability layer built for machine learning models."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"AI Performance Monitoring Architecture"}
					description={"OpenGridLabs built a monitoring layer that instruments every model in production without changing how they serve predictions. It captures inputs, outputs, and metadata, computes model-specific metrics and drift signals, and surfaces everything through dashboards and alerts—so the team sees a model degrading in hours, not from a customer weeks later."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"A healthy server is not a healthy model"}
					alertText={"The most dangerous AI failures are silent: the system stays up, the API returns 200s, and the model quietly makes worse decisions. Traditional monitoring can't see this because it watches infrastructure, not intelligence. The shift that mattered here was treating model quality—accuracy, drift, output distribution—as a first-class signal to monitor and alert on, exactly like uptime or latency."}
					rightColumnTitle={"AI Performance Observability Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to get the highest-risk models monitored first, then extend coverage across the fleet. OpenGridLabs embedded a team of ML and platform engineers and an observability specialist alongside the client's ML team."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against the prior monitoring gap. The results showed that observability built for models—not just servers—turned silent, weeks-long degradations into fast, contained incidents."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We thought a green dashboard meant our AI was healthy. It only meant the servers were. Now we watch the things that actually matter—drift, accuracy, quality—and we catch a failing model in hours, before a single customer notices."}
					author={"Head of ML"}
					subtitle={"Confidential AI Company"}
					accentLineClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-cyan-500/20"}
					iconColorClass={"text-cyan-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-cyan-400"}
					activeChevronColorClass={"text-cyan-400"}
				/>

				<CaseStudyCta 
					title={"Ready to see what your models are really doing in production?"}
					description={"OpenGridLabs builds AI performance monitoring—drift detection, accuracy and quality tracking, alerting, and dashboards—so you catch model degradation in hours, not from your customers."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-400"}
					btnGradientClass={"from-cyan-400 to-purple-500"}
					btnShadowColor={"34,211,238,0.2"}
				/>
			</div>
		</>
	);
}
