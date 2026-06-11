import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database,
	ShieldAlert
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
	{ value: "4.7×", label: "More fraud caught vs. rule-based", accent: "from-cyan-400 to-blue-500" },
	{ value: "−62%", label: "Fewer false positives bothering customers", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "<80ms", label: "Median scoring latency on live events", accent: "from-pink-500 to-rose-400" },
	{ value: "11 wk", label: "From brittle rules to live detection", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Anomalies were less than 1% of events—extreme class imbalance broke naive models" },
	{ text: "Brittle hand-tuned rules missed novel fraud and over-flagged legitimate customers" },
	{ text: "Few confirmed labels: most 'bad' events were never investigated or labelled" },
	{ text: "Decisions had to happen in milliseconds, on a 12M-events-per-day stream" },
	{ text: "Patterns shifted constantly as fraudsters adapted—yesterday's signals quietly stopped working" }
];

const SOLUTIONS = [
	{ text: "Unsupervised anomaly models (isolation forest, autoencoders) learning what normal looks like" },
	{ text: "A supervised model trained on the small set of confirmed labels, layered on top" },
	{ text: "Combined risk score blending unsupervised and supervised signals into one number" },
	{ text: "Real-time stream processing scoring every event in under 80 milliseconds" },
	{ text: "Investigation feedback loop turning analyst decisions into fresh labels and retraining" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Stream", items: ["Event ingestion", "Real-time feature computation", "Entity profiles & history", "Context enrichment"], color: "hsl(180,100%,50%)" },
	{ title: "Detection", items: ["Isolation forest", "Autoencoder reconstruction", "Time-series anomaly checks", "Supervised classifier on confirmed labels"], color: "hsl(210,100%,50%)" },
	{ title: "Decision", items: ["Combined risk score", "Allow / challenge / block thresholds", "Reason codes", "Analyst review queue"], color: "hsl(280,100%,65%)" },
	{ title: "Feedback", items: ["Analyst decisions captured", "New labels for retraining", "Drift & performance monitoring", "Threshold tuning"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Stream & Unsupervised Models (Weeks 1–4)",
		desc: "OpenGridLabs built the event ingestion and real-time feature pipeline, including entity profiles that capture each user's recent behaviour. Unsupervised anomaly models—isolation forest and an autoencoder—were trained on historical normal data, with explicit handling of the extreme class imbalance, so the system could flag novel deviations even without any labels.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Supervised Layer & Calibration (Weeks 5–8)",
		desc: "Using the small but trusted set of confirmed-fraud labels, a supervised classifier was trained to recognise known patterns, with techniques suited to severe imbalance. Outputs from the unsupervised and supervised models were blended into a single risk score, and thresholds were tuned per decision tier against the dollar cost of false positives versus missed fraud—rather than a single aggregate metric.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Real-Time Decisioning & Feedback (Weeks 9–11)",
		desc: "The full pipeline was deployed for real-time scoring with reason codes, allow/challenge/block decisioning, and an analyst review queue for ambiguous cases. Analyst decisions were captured as fresh labels feeding retraining, drift monitoring watched for shifting fraud patterns, and OpenGridLabs trained the client's risk and engineering teams to operate, tune, and extend the system independently.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Fraud caught (recall)", before: "Baseline", after: "4.7× baseline", change: "+370%" },
	{ metric: "False positives on real customers", before: "Baseline", after: "38% of baseline", change: "−62%" },
	{ metric: "Novel fraud patterns surfaced", before: "None until a rule was written", after: "Flagged on first appearance", change: "New capability" },
	{ metric: "Real-time scoring latency", before: "Rule scan (variable)", after: "<80 ms median", change: "Production-ready" },
	{ metric: "Analyst time on false alarms", before: "Majority of workload", after: "Sharply reduced", change: "Focus restored" },
	{ metric: "Adaptation to shifting patterns", before: "Manual rule edits", after: "Feedback loop & retraining", change: "Self-improving" },
	{ metric: "Combined fraud + friction cost", before: "—", after: "Materially lower", change: "ROI positive" }
];

const SUCCESS_FACTORS = [
	{
		title: "Unsupervised plus supervised, not one or the other",
		desc: "Unsupervised models caught what had never been seen; the supervised layer recognised what had. Combining them into a single risk score was what allowed the system to handle both known and emerging fraud—something neither approach delivers alone."
	},
	{
		title: "Cost-aware thresholds, not vanity metrics",
		desc: "Modelling the dollar cost of false positives and missed fraud—and tuning thresholds to minimise total loss—mattered more than chasing a high overall score. It is the difference between a metric that looks good and an outcome that is good."
	},
	{
		title: "Real-time was non-negotiable",
		desc: "Fraud decisions made in batches lose most of their value. Building for sub-100ms scoring on a streaming pipeline meant the system could allow, challenge, or block at the moment that matters, not after the fact."
	},
	{
		title: "Analyst feedback as the engine",
		desc: "The investigation queue did double duty—handling ambiguous cases and producing fresh labels that fed retraining. As fraudsters adapted, so did the system, turning a one-shot deployment into a self-improving capability."
	}
];

const FAQS = [
	{
		q: "What is anomaly detection?",
		a: "Anomaly detection is a machine learning approach that identifies data points, events, or behaviour that deviate significantly from normal patterns. It's used to spot fraud, security intrusions, equipment failures, and other rare but high-impact events. Unlike classification, which needs many examples of every category, anomaly detection typically learns what 'normal' looks like and flags whatever doesn't fit—making it well suited to problems where the unusual is rare and constantly evolving."
	},
	{
		q: "What is the difference between anomaly detection and classification?",
		a: "Classification assigns items to predefined categories using many labelled examples of each. Anomaly detection focuses on rare, unusual cases where labels are scarce and the patterns keep changing. It learns what normal looks like and flags deviations, often combining unsupervised methods with supervised models trained on the small set of confirmed anomalies—so it can catch new fraud or failures that no classifier has ever seen before."
	}
];

export default function AnomalyDetectionCaseStudy() {
	return (
		<>
			<SEO
				title="Real-Time Anomaly Detection Case Study | OpenGridLabs"
				description="How OpenGridLabs built a real-time anomaly detection system combining unsupervised and supervised models — catching 4.7x more fraud and cutting false positives by 62%."
				canonical="/services/ai-data/anomaly-detection"
				keywords="Anomaly Detection, Outlier Detection, Fraud Detection, Real-Time Monitoring, Isolation Forest, Autoencoders, Time Series Anomaly, Novelty Detection, Class Imbalance, Stream Processing, Intrusion Detection"
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
					categoryTag="Case Study · Data Science & AI"
					title="How Real-Time Anomaly Detection Caught 4.7× More Fraud and Stopped Pestering Real Customers"
					description="A fast-scaling company's brittle fraud rules were doing the worst of both worlds: missing real fraud while flagging legitimate customers. OpenGridLabs built a real-time anomaly detection system combining unsupervised models, supervised learning, and stream processing—catching 4.7× more fraud, cutting false alarms 62%, and making each decision in milliseconds."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Fintech / SaaS (anonymised)" },
						{ label: "Scale", value: "12M+ events / day" },
						{ label: "Timeline", value: "11 weeks to production" },
						{ label: "Stack", value: "Unsupervised · Supervised · Streaming · Real-time" }
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
						"Our client is a venture-backed fintech-adjacent company processing more than twelve million events a day—each one a potential opportunity, and each one a potential attack vector. Fraud was a real and growing problem: the small fraction of events that mattered most were rare, costly, and constantly shape-shifting. The defence in place was a tangle of hand-tuned rules built up over years, layered with one-off thresholds added every time a new fraud pattern surfaced.",
						"The rules did the worst of both worlds. They missed most genuinely new fraud because nobody had written a rule for it yet, and they flagged a large volume of perfectly legitimate customers whose only sin was looking slightly unusual. Operations spent its time chasing false alarms while real losses kept leaking through, and every false flag pushed away a good customer. The team didn't need another rule. They needed a system designed for the actual problem: anomaly detection—learning what normal looks like and catching what doesn't fit, even patterns no one has seen before.",
						"Anomaly detection identifies data points, events, or behaviour that deviate significantly from normal patterns. It is used to spot fraud, security intrusions, equipment failures, and other rare but high-impact events. Unlike classification, which needs many examples of every category, anomaly detection typically learns what \"normal\" looks like and flags whatever doesn't fit—making it well suited to problems where the unusual is rare, costly, and constantly evolving."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Is Anomaly Detection?"
					definitionText={"Anomaly detection identifies data points, events, or behaviour that deviate significantly from normal patterns. It is used to spot fraud, security intrusions, equipment failures, and other rare but high-impact events. Unlike classification, which needs many examples of every category, anomaly detection typically learns what \"normal\" looks like and flags whatever doesn't fit—making it well suited to problems where the unusual is rare, costly, and constantly evolving."}
					definitionIcon={<ShieldAlert className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-cyan-500/10"
					definitionIconBorderClass="border-cyan-500/20"
					definitionIconColorClass="text-cyan-400"
					glowColorClass="bg-cyan-400"
					gradientFromClass="from-cyan-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Anomaly Detection Gaps Resolved"}
					description={"How OpenGridLabs built real-time anomaly detection combining unsupervised and supervised learning."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs built a real-time anomaly detection pipeline that ingests every event, scores it against models of normal and known-bad behaviour, and decides in milliseconds whether to allow, challenge, or block."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Both false alarms and missed fraud cost real money"}
					alertText={"The classic anomaly-detection mistake is optimising for one error at the expense of the other—catching more fraud while annoying customers into leaving, or smoothing the experience while losses bleed through. The design centred the trade-off explicitly: tuned thresholds per decision tier (allow, challenge, block), modelled the dollar cost of each error type, and chose operating points that minimised total loss rather than maximising a single statistic."}
					rightColumnTitle={"Anomaly Detection Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to put a usable signal in front of analysts early, then sharpen it with their feedback. OpenGridLabs embedded a team of ML and streaming engineers and a fraud-analytics specialist alongside the client's risk team."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 90-day window against the prior rule-based system, using analyst-confirmed labels as the ground truth for fraud and a controlled comparison for customer impact."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our old system caught the easy stuff and made enemies of our best customers. Now the model flags real fraud—including patterns we'd never seen before—and waves our genuine users through. The analysts finally spend their day on cases that actually matter."}
					author={"Head of Risk"}
					subtitle={"Confidential Fintech-Adjacent Company"}
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
					title={"Looking for the needle in your event stream?"}
					description={"OpenGridLabs builds real-time anomaly detection—unsupervised plus supervised models, stream processing, cost-aware decisioning, and a feedback loop—so you catch what matters and leave the rest alone."}
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
