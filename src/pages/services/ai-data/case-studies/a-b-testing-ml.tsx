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
	{ value: "14", label: "ML-backed tests launched with consistent governance", accent: "from-purple-500 to-indigo-500" },
	{ value: "11%", label: "Incremental lift on winning recommendation variant", accent: "from-cyan-400 to-blue-500" },
	{ value: "-31%", label: "Reduction in inconclusive or underpowered tests", accent: "from-pink-500 to-rose-400" },
	{ value: "9 wk", label: "From ad hoc tests to controlled ML experiments", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Offline validation metrics did not reliably predict conversion, retention, or revenue impact" },
	{ text: "Experiments used inconsistent traffic splits, success metrics, and minimum sample sizes" },
	{ text: "Guardrail metrics such as latency, support tickets, fairness, and refund rate were not monitored together" },
	{ text: "Teams peeked at early results and stopped tests too soon, creating false confidence" },
	{ text: "Rollout decisions were manual, slow, and difficult to audit after launch" }
];

const SOLUTIONS = [
	{ text: "A controlled experimentation framework for model variants, ranking policies, and targeting rules" },
	{ text: "Standard experiment templates covering hypotheses, power checks, allocation, and success metrics" },
	{ text: "Guardrail dashboards for business impact, user experience, latency, fairness, and model stability" },
	{ text: "Sequential monitoring rules to reduce premature decisions and false-positive launches" },
	{ text: "Rollout gates that moved winners from limited traffic to broader release with traceable approvals" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Setup", items: ["Hypothesis", "Primary metric", "Guardrails", "Power analysis", "Variant definitions"], color: "hsl(180,100%,50%)" },
	{ title: "Allocation", items: ["Traffic splitting", "Cohort assignment", "Eligibility rules", "Model variant routing", "Exposure logging"], color: "hsl(210,100%,50%)" },
	{ title: "Measurement", items: ["Uplift analysis", "Sequential checks", "Segment cuts", "Guardrail monitoring", "Confidence reporting"], color: "hsl(280,100%,65%)" },
	{ title: "Rollout", items: ["Approval gates", "Gradual release", "Kill switches", "Post-launch monitoring", "Experiment archive"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Experiment Design & Metrics Framework (Weeks 1-3)",
		desc: "The team defined experiment templates for recommendation, pricing, and personalization models. Each template included a hypothesis, primary metric, guardrails, eligibility rules, minimum detectable effect, sample-size guidance, and pre-agreed decision criteria so teams could avoid moving goalposts mid-test.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Traffic Allocation & Measurement Pipeline (Weeks 4-7)",
		desc: "OpenGridLabs built controlled traffic allocation, stable cohort assignment, model-variant routing, exposure logging, and outcome joins. Dashboards showed uplift, confidence intervals, segment-level effects, and guardrail health so teams could understand both performance and risk in one place.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Rollout Governance & Monitoring (Weeks 8-9)",
		desc: "The final phase added launch gates, staged rollout controls, kill switches, and post-launch monitoring. Winning variants could move from 5% to 25% to full traffic only after meeting success and guardrail criteria, with every decision captured for later review.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "ML-backed experiments launched", before: "Ad hoc pilots", after: "14 governed tests", change: "Standardized" },
	{ metric: "Winning recommendation variant lift", before: "Baseline control", after: "1.11x baseline", change: "+11%" },
	{ metric: "Inconclusive or underpowered tests", before: "Baseline", after: "69% of baseline", change: "-31%" },
	{ metric: "Guardrail metric coverage", before: "Partial", after: "Full dashboard coverage", change: "Protected" },
	{ metric: "Premature experiment stops", before: "Common", after: "Reduced with monitoring rules", change: "More reliable" },
	{ metric: "Rollout decision traceability", before: "Manual notes", after: "Archived approvals and metrics", change: "Auditable" },
	{ metric: "Time to decide after test completion", before: "Several days", after: "Same-day review", change: "Faster decisions" }
];

const SUCCESS_FACTORS = [
	{
		title: "Pre-registered success criteria",
		desc: "Teams agreed on primary metrics, guardrails, sample sizes, and decision rules before launch, which reduced interpretation disputes after results arrived."
	},
	{
		title: "Exposure logging, not just event tracking",
		desc: "The system recorded who actually saw which model variant, making uplift analysis cleaner and preventing mismatches between assignment and experience."
	},
	{
		title: "Guardrails beside growth metrics",
		desc: "Every experiment measured user experience, latency, fairness, operational load, and revenue risk alongside the primary business metric."
	},
	{
		title: "Gradual rollout after a win",
		desc: "A winning test did not immediately become a full launch. Staged release controls let the team confirm stability at increasing traffic levels before scaling."
	}
];

const FAQS = [
	{
		q: "What is A/B testing for machine learning?",
		a: "A/B testing for machine learning compares a model variant, ranking algorithm, recommendation strategy, or decision policy against a control group in live production traffic. It measures whether the ML change improves real outcomes while tracking guardrails such as latency, fairness, stability, user experience, and revenue risk."
	},
	{
		q: "Why is A/B testing important for ML models?",
		a: "Offline validation cannot fully predict how a model will affect users, revenue, or operations. A/B testing lets teams measure true incremental lift, detect unintended harms, and make rollout decisions based on production evidence rather than model scores alone."
	}
];

export default function ABTestingMLCaseStudy() {
	return (
		<>
			<SEO
				title="A/B Testing ML Case Study | OpenGridLabs"
				description="How OpenGridLabs built a controlled ML experimentation framework to test model variants in live traffic, measure lift, and monitor guardrails."
				canonical="/services/ai-data/a-b-testing-ml"
				keywords="A/B Testing ML, Machine Learning Experimentation, Uplift Modeling, Experiment Design, Sequential Testing, Model Rollout, ML Evaluation"
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
					categoryTag="Case Study · A/B Testing ML"
					title="How A/B Testing ML Turned Offline Model Scores Into Confident Production Decisions"
					description="A product team partnered with OpenGridLabs to build a disciplined ML experimentation framework—testing model variants in live traffic, measuring incremental lift, and tracking business guardrails for gradual, data-driven model rollouts."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Consumer SaaS and marketplace (anonymised)" },
						{ label: "Scope", value: "14 ML experiments launched" },
						{ label: "Timeline", value: "9 weeks end-to-end" },
						{ label: "Stack", value: "Experiment Design · Uplift · Guardrails · Rollouts" }
					]}
				/>

				<CaseStudyCarousel
					slug="a-b-testing-ml"
					title="A/B Testing ML"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/a-b-testing-ml/1.jpg",
						"/images/case-studies/a-b-testing-ml/2.jpg"
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
						"The client had built machine learning models for recommendations, pricing prompts, onboarding personalization, and churn intervention. Offline metrics looked strong, but production impact was unpredictable. Some models improved one metric while quietly hurting another, and teams often disagreed about whether a model was ready to launch.",
						"The missing capability was structured A/B testing ML: a disciplined way to expose model variants to live users, assign traffic fairly, measure true incremental lift, protect guardrail metrics, and roll out winners gradually. OpenGridLabs was asked to design the experiment layer between model development and product release.",
						"A/B testing ML compares a machine learning model, ranking algorithm, recommendation strategy, or decision policy against a control group in production traffic. It measures whether the model creates real-world lift while monitoring guardrails such as latency, fairness, user experience, revenue risk, and operational stability."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is A/B Testing ML?"
					definitionText="A/B testing ML compares a machine learning model, ranking algorithm, recommendation strategy, or decision policy against a control group in production traffic. It measures whether the model creates real-world lift while monitoring guardrails such as latency, fairness, user experience, revenue risk, and operational stability."
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
					title={"Five Experimentation Bottlenecks Overcome"}
					description={"How OpenGridLabs built a controlled experimentation framework to replace ad hoc rollouts."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Experimentation Architecture"}
					description={"OpenGridLabs designed an experimentation layer that sits between ML model serving and product experiences. The system assigns users to variants, records exposure events, joins outcomes back to experiment cohorts, and gives product, data, and engineering teams one shared view of lift, risk, and rollout status."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Treat model launches as measured product experiments"}
					alertText={"The key shift was moving from \"the model scores better offline\" to \"the model improves real outcomes without harming guardrails.\" That required strong experiment design, clean exposure logging, consistent analysis rules, and staged rollout controls."}
					rightColumnTitle={"A/B Testing ML Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over nine weeks, standardizing how ML changes were tested, measured, approved, and rolled out. OpenGridLabs worked with data science, product, engineering, and analytics teams to establish this capability."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured across the first 14 ML-backed experiments after launch. The framework improved decision quality by making every model rollout measurable, comparable, and safer to scale."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Before this, model launches were debates about offline metrics. Now every rollout has a hypothesis, a clean control, guardrails, and a decision record. It made our ML work much easier to trust."}
					author={"VP of Product"}
					subtitle={"Confidential Marketplace Platform"}
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
					title={"Ready to test ML models with confidence?"}
					description={"OpenGridLabs designs A/B testing ML frameworks with experiment templates, allocation logic, uplift analysis, guardrail monitoring, and staged rollout controls for safer product decisions."}
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
