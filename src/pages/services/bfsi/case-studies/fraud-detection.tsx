import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	ShieldCheck, 
	Cpu, 
	Database,
	Zap,
	Shield
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
	{ value: "4.1×", label: "More fraud detected vs. rules system", accent: "from-emerald-500 to-teal-600" },
	{ value: "64%", label: "Reduction in customer false declines", accent: "from-amber-500 to-yellow-600" },
	{ value: "<80ms", label: "Fraud scoring latency per transaction", accent: "from-blue-500 to-cyan-600" },
	{ value: "11 mo", label: "From rules system to live ML", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "Rules-based system with 2.1% false decline rate — blocking legitimate transactions and generating complaints" },
	{ text: "Fraud catch rate declining as fraudsters adapted to known rule thresholds" },
	{ text: "Real-time decision required but commercial fraud product running in batch mode (not real-time)" },
	{ text: "No behavioural or device intelligence signals — decision based on transaction characteristics only" },
	{ text: "Fraud team spending significant time managing rule tuning rather than investigating fraud" }
];

const SOLUTIONS = [
	{ text: "Real-time ML transaction scoring using 200+ features per transaction" },
	{ text: "Behavioural biometrics — typing rhythm, swipe patterns, device interaction — as fraud signals" },
	{ text: "Device intelligence — device fingerprinting, location, new device detection — integrated into scoring" },
	{ text: "Ensemble model combining supervised and unsupervised components for known and novel fraud patterns" },
	{ text: "A feedback loop incorporating confirmed fraud and false positive outcomes into model retraining" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Signals", items: ["Transaction data", "Behavioural biometrics", "Device intelligence", "Historical patterns", "Velocity checks"], color: "hsl(38,100%,50%)" },
	{ title: "Scoring", items: ["Feature extraction", "Ensemble ML model", "Risk score generation", "Confidence bands"], color: "hsl(145,100%,45%)" },
	{ title: "Decision", items: ["Score thresholds", "Step-up auth trigger", "Block trigger", "Contextual rule overlay"], color: "hsl(200,100%,50%)" },
	{ title: "Learning", items: ["Confirmed fraud labels", "False positive feedback", "Model retraining", "Performance monitoring"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "ML Infrastructure & Feature Pipeline (Months 1–4)",
		desc: "OpenGridLabs built the real-time feature extraction pipeline and ML scoring infrastructure. The ensemble model was trained on 24 months of transaction and confirmed fraud data. Behavioural biometrics were instrumented in the mobile app and web portal. The system ran in shadow mode — scoring every transaction without influencing decisions — to validate accuracy.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Gradual Migration from Rules to ML (Months 5–8)",
		desc: "Traffic was gradually shifted from the rules system to the ML system, starting with low-risk transaction types. A comparison framework tracked false positive and true positive rates for rules vs. ML on the same transactions, providing the evidence needed to accelerate the migration.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Full Cutover & Feedback Loop (Months 9–11)",
		desc: "The rules system was retired for real-time decisioning and the ML system operated as the primary fraud control. The feedback loop incorporating confirmed fraud investigations and false positive resolutions was implemented, enabling continuous model improvement. The fraud team shifted from rule tuning to model monitoring and investigation.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Fraud detection rate", before: "Baseline", after: "4.1× baseline", change: "4.1× baseline" },
	{ metric: "False decline rate", before: "2.1%", after: "0.76%", change: "-64%" },
	{ metric: "Fraud scoring latency", before: "Batch (not real-time)", after: "<80ms real-time", change: "<80ms real-time" },
	{ metric: "Confirmed fraud losses", before: "Baseline", after: "-61%", change: "-61%" },
	{ metric: "Customer complaints (false declines)", before: "Baseline", after: "-71%", change: "-71%" },
	{ metric: "Fraud team time on rule tuning", before: "~60% of capacity", after: "<10%", change: "<10%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Behavioural baseline per customer, not threshold per rule",
		desc: "A customer who normally spends £50 at local shops executing a £2,000 luxury goods transaction in a foreign country is a different risk signal from a customer who travels frequently and regularly makes high-value purchases. ML models personalize the fraud threshold to the individual; rules cannot."
	},
	{
		title: "Behavioural biometrics adds a signal layer that transaction data lacks",
		desc: "How a person types their PIN, swipes their screen, or holds their phone is a consistent behavioural signature. When these signals change — a different device interaction pattern, unusual hesitation, copy-paste into a payment field — they provide fraud signals that transaction characteristics alone cannot reveal."
	},
	{
		title: "Shadow mode before cutover eliminates deployment risk",
		desc: "Running the ML model in parallel with the rules system — scoring every transaction but not acting on the scores — for four months produced a performance comparison with statistical confidence. The decision to cut over was made on evidence, not optimism."
	}
];

const FAQS = [
	{
		q: "What is the difference between rules-based and ML-based fraud detection?",
		a: "Rules-based fraud detection applies predefined thresholds and conditions to each transaction. ML-based fraud detection learns patterns from historical fraud and normal transaction data, building personalised behavioural baselines per customer. ML systems are generally more accurate than rules-based systems, but require more data, more engineering infrastructure, and ongoing model maintenance."
	},
	{
		q: "What are behavioural biometrics in banking?",
		a: "Behavioural biometrics are measurements of how a person interacts with a digital interface — typing rhythm, swipe dynamics, mouse movement, device orientation, and app interaction patterns. These signals form a consistent individual signature that can be used as an additional fraud detection signal, complementing transaction-based signals."
	}
];

export default function FraudDetectionCaseStudy() {
	return (
		<>
			<SEO
				title="Real-Time ML Fraud Detection Case Study | OpenGridLabs"
				description="How Real-Time ML Fraud Detection Caught 4.1x More Fraud and reduced false decline rate by 64% using behavioural biometrics."
				canonical="/services/bfsi/fraud-detection"
				keywords="Fraud Detection, ML Fraud Detection, Real-Time Fraud, Behavioural Biometrics, Device Intelligence, False Positive Reduction, Transaction Scoring, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Amber Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(38,100%,50%) 0%, hsl(28,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/bfsi" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to BFSI & Fintech
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Fraud Detection"
					title="How Real-Time ML Fraud Detection Caught 4.1× More Fraud While Reducing Customer False Declines 64%"
					description="A retail bank's fraud detection system was a set of static rules written over a decade — catching some fraud but blocking a significant number of legitimate transactions, generating customer complaints and call centre volume. OpenGridLabs replaced the rules-based system with real-time ML transaction scoring, behavioural biometrics, and device intelligence — catching 4.1 times more fraud while reducing the false decline rate by 64% and making each decision in under 80 milliseconds."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Retail bank (anonymised)" },
						{ label: "Scale", value: "1.8M customers, 340M transactions/year" },
						{ label: "Timeline", value: "11 months" },
						{ label: "Stack", value: "Real-time ML · Behavioural biometrics · Device intelligence · Stream processing" }
					]}
				/>

				<CaseStudyCarousel
									slug="fraud-detection"
									title="ML-Based Fraud Detection"
									accentColor="pink"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/fraud-detection/1.jpg",
										"/images/case-studies/fraud-detection/2.jpg"
									]}
								/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-amber-500/30"
					hoverTextClass="group-hover:text-amber-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Shield className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a retail bank with 1.8 million customers executing 340 million transactions per year across current accounts, credit cards, and debit cards. Their fraud detection system was rules-based — a set of approximately 200 threshold rules built by a fraud analyst team over a decade, supplemented by a commercial fraud scoring product applied at batch rather than real-time. The false decline rate — legitimate transactions blocked by fraud rules — was 2.1% of card transactions, generating customer complaints and a significant call centre volume. The fraud catch rate had been declining as fraudsters adapted to known rules.",
						"The fundamental limitation of rules-based fraud detection is that rules are visible to the people trying to circumvent them. A rule that declines transactions above £500 from new devices can be circumvented by keeping transactions below £500. A machine learning model detecting anomalies against a customer's specific behavioural baseline — without publishing its decision logic — is structurally harder to circumvent. OpenGridLabs designed a system that combined ML transaction scoring with behavioural biometrics (how a user interacts with the app) and device intelligence to create a multi-signal fraud detection layer that caught more fraud and bothered fewer legitimate customers.",
						"Real-time banking fraud detection evaluates each transaction against a set of signals — transaction characteristics, customer behaviour, device identity, and historical patterns — and returns a risk score within milliseconds, allowing a bank to approve, block, or step-up authenticate the transaction before it completes. ML-based systems learn individual customer behavioural baselines, making them significantly more accurate than static threshold rules that apply the same logic to all customers regardless of their normal behaviour."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is Real-Time Banking Fraud Detection?"
					definitionText="Real-time banking fraud detection evaluates each transaction against a set of signals — transaction characteristics, customer behaviour, device identity, and historical patterns — and returns a risk score within milliseconds, allowing a bank to approve, block, or step-up authenticate the transaction before it completes. ML-based systems learn individual customer behavioural baselines, making them significantly more accurate than static threshold rules that apply the same logic to all customers regardless of their normal behaviour."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-amber-500/10"
					definitionIconBorderClass="border-amber-500/20"
					definitionIconColorClass="text-amber-400"
					glowColorClass="bg-amber-400"
					gradientFromClass="from-amber-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Replacing static threshold systems with multi-signal intelligence layers."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, ShieldCheck, Database]}
					tag={"Technical Design"}
					title={"Fraud Detection System Architecture"}
					description={"A secure, multi-stage real-time execution engine incorporating behavioural baseline signals and machine learning score Retraining loops."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout the engagement."}
					rightColumnTitle={"Decision Engine Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"An 11-month deployment lifecycle transitioning from threshold rules to dynamic ML baselines."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Deploying behavioural signals and real-time transaction scoring caught 4.1× more fraud while dramatically lowering false declines."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Rules tell fraudsters exactly what to do to avoid detection. A model doesn't. The moment we shifted to ML, the fraudsters who had calibrated their attacks to stay below our rule thresholds started getting caught — because the threshold they thought they knew didn't exist anymore."}
					author={"Head of Fraud"}
					subtitle={"Confidential Retail Bank"}
					accentLineClass={"bg-amber-400"}
					iconColorClass={"text-amber-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-amber-500/20"}
					iconColorClass={"text-amber-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-amber-400"}
					activeChevronColorClass={"text-amber-400"}
				/>

				<CaseStudyCta 
					title={"Rules-based fraud detection blocking customers while missing fraud?"}
					description={"OpenGridLabs builds real-time ML fraud detection — transaction scoring, behavioural biometrics, and device intelligence — that catches more fraud and blocks fewer legitimate customers."}
					moreCaseStudiesLink={"/services/bfsi"}
					glowBgClass={"bg-amber-400"}
					iconColorClass={"text-amber-400"}
					btnGradientClass={"from-amber-400 to-indigo-500"}
					btnShadowColor={"245,158,11,0.2"}
				/>
			</div>
		</>
	);
}
