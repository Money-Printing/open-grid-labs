import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Database,
	Zap,
	Server
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
	{ value: "87%", label: "Reduction in settlement failures", accent: "from-emerald-500 to-teal-600" },
	{ value: "<1s", label: "Payment processing latency", accent: "from-amber-500 to-yellow-600" },
	{ value: "12×", label: "Peak volume handled without degradation", accent: "from-blue-500 to-cyan-600" },
	{ value: "10 mo", label: "Architecture to production", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "Six independently integrated payment rails with inconsistent error handling and retry logic" },
	{ text: "Settlement failure rate of 2.8% — commercially significant at 4.2M transactions/month" },
	{ text: "Nightly reconciliation batches — failures undetected for up to 18 hours" },
	{ text: "Peak volume events causing processing backlogs visible to customers" },
	{ text: "No idempotency controls — failed payments occasionally double-processed on retry" }
];

const SOLUTIONS = [
	{ text: "A unified payment hub with a single API abstracting all six payment rails" },
	{ text: "Intelligent routing selecting the optimal rail based on payment type, amount, urgency, and rail availability" },
	{ text: "Idempotent payment processing preventing double-processing on retry" },
	{ text: "Real-time reconciliation comparing expected vs. actual settlement state continuously" },
	{ text: "A circuit-breaker pattern for individual rail failures preventing cascading failures to other rails" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Ingestion", items: ["Payment API", "Idempotency key validation", "Schema validation", "Duplicate detection"], color: "hsl(38,100%,50%)" },
	{ title: "Routing", items: ["Rail selection engine", "Amount/type/SLA routing rules", "Fallback routing", "Load balancing"], color: "hsl(145,100%,45%)" },
	{ title: "Processing", items: ["Rail adapters (FPS, SEPA, SWIFT, card, OB, DD)", "Retry with backoff", "Circuit breaker"], color: "hsl(200,100%,50%)" },
	{ title: "Reconciliation", items: ["Real-time state machine", "Settlement confirmation", "Failure alerting", "Reporting dashboard"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Hub Foundation & Routing Engine (Months 1–4)",
		desc: "OpenGridLabs built the payment hub core: the API layer, idempotency framework, event streaming backbone, and routing engine. The Faster Payments rail was migrated first — highest volume, most operationally visible — with a 60-day parallel run validating hub processing against direct integration before traffic was switched.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Rail Migration & Real-time Reconciliation (Months 5–8)",
		desc: "The remaining five rails were migrated sequentially, each with a parallel validation period. Real-time reconciliation was built and calibrated against the settlement SLAs of each rail. Circuit breaker thresholds were tuned under load testing before production exposure.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Peak Load Testing & Production Hardening (Months 9–10)",
		desc: "Chaos engineering was used to validate the hub's behaviour under individual rail failures, network partitions, and 12× normal load — simulating the payroll run scenarios that had previously caused cascading failures. All failure modes were resolved before the hard cutover.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Settlement failure rate", before: "2.8%", after: "0.37%", change: "-87%" },
	{ metric: "Processing latency (P95)", before: "3.2 seconds", after: "0.8 seconds", change: "0.8 seconds" },
	{ metric: "Peak volume handling", before: "Degraded above 4× normal", after: "12× without degradation", change: "12× without degradation" },
	{ metric: "Reconciliation lag", before: "Up to 18 hours", after: "<60 seconds", change: "<60 seconds" },
	{ metric: "Double-processing incidents", before: "Occurring monthly", after: "Eliminated", change: "Eliminated" },
	{ metric: "Rail failure isolation", before: "Cascading", after: "Circuit-broken", change: "Circuit-broken" }
];

const SUCCESS_FACTORS = [
	{
		title: "Idempotency is the foundation of reliable payment processing",
		desc: "A payment system that retries failures without idempotency controls will eventually double-process a transaction. Building idempotency as a first-class architectural concern — not a per-integration afterthought — made the hub's retry logic safe from day one."
	},
	{
		title: "Real-time reconciliation changes the operations model",
		desc: "Nightly reconciliation means failures discovered at 8am affect customers who transacted the previous afternoon. Real-time reconciliation means failures are detected and acted on within 60 seconds — before they compound into the kind of backlog that requires manual resolution."
	},
	{
		title: "Circuit breakers prevent blast radius expansion",
		desc: "A single payment rail experiencing issues should affect that rail's transactions, not all transactions. Circuit-breaking individual rails from the shared processing infrastructure prevented the cascading failures that had made peak events so operationally costly."
	}
];

const FAQS = [
	{
		q: "What is idempotency in payment processing?",
		a: "Idempotency in payment processing means that submitting the same payment request multiple times — including on retry after a failure — produces the same outcome as submitting it once. It prevents double-processing by associating each payment with a unique idempotency key that the system uses to identify and deduplicate repeated submissions."
	},
	{
		q: "What is a payment rail?",
		a: "A payment rail is a network or infrastructure through which payments are routed and settled — such as Faster Payments, SEPA Credit Transfer, SWIFT, card networks, or direct debit schemes. Different rails have different speed, cost, geographic coverage, and message format characteristics, making intelligent rail selection an important capability for high-volume payment processors."
	}
];

export default function PaymentProcessingCaseStudy() {
	return (
		<>
			<SEO
				title="Payment Processing Hub Case Study | OpenGridLabs"
				description="How a Payment Processing Hub Reduced Settlement Failures 87% and Cut Latency to Sub-Second at 12× Peak Volume."
				canonical="/services/bfsi/payment-processing"
				keywords="Payment Processing, Payment Hub, Payment Rails, Settlement, Reconciliation, Idempotence, Faster Payments, SEPA, SWIFT, FinTech, OpenGridLabs"
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
					categoryTag="Case Study · Payment Processing Hub"
					title="How a Payment Processing Hub Reduced Settlement Failures 87% and Cut Latency to Sub-Second at 12× Peak Volume"
					description="A fintech company processing payments across six payment rails was managing the complexity with a patchwork of separate integrations — each with different error handling, different retry logic, and different reconciliation approaches. Settlement failures were high, latency was inconsistent, and peak-volume events caused cascading failures. OpenGridLabs built a unified payment hub: intelligent routing, idempotent processing, and real-time reconciliation that handled twelve times peak volume without failure."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Fintech / Payment Services (anonymised)" },
						{ label: "Scale", value: "4.2M transactions/month, 6 payment rails" },
						{ label: "Timeline", value: "10 months" },
						{ label: "Stack", value: "Event-driven · Kafka · Idempotent APIs · ISO 20022 · Real-time reconciliation" }
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
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a fintech company processing 4.2 million payment transactions per month across six rails — Faster Payments, SEPA, SWIFT, card acquiring, open banking payment initiation, and direct debit. Each rail had been integrated independently as the business grew, producing six separate integration codebases with different error handling conventions, different reconciliation frequencies, and no shared transaction state. Settlement failure rates ran at 2.8% — commercially significant at this volume — and peak events (payroll runs, month-end) caused processing backlogs that rippled into customer-visible delays.",
						"The fragmentation was the problem. A payment that failed on one rail had no consistent handling — some retried automatically (occasionally double-processing), some failed silently, some generated customer-visible errors. Reconciliation ran in nightly batches, meaning failures weren't detected for up to 18 hours. OpenGridLabs designed a unified payment hub: a single processing layer that abstracted all six rails behind a consistent interface, with idempotent processing, real-time failure detection, and intelligent routing that selected the optimal rail for each payment type.",
						"A payment hub is a centralised payment processing layer that abstracts multiple payment rails behind a single interface — handling routing, retry logic, idempotency, reconciliation, and reporting for all payment types. Rather than integrating each payment rail directly into business applications, a payment hub provides a consistent API that routes transactions to the appropriate rail, manages failures intelligently, and produces a unified view of payment state across all channels."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is a Payment Hub?"
					definitionText="A payment hub is a centralised payment processing layer that abstracts multiple payment rails behind a single interface — handling routing, retry logic, idempotency, reconciliation, and reporting for all payment types. Rather than integrating each payment rail directly into business applications, a payment hub provides a consistent API that routes transactions to the appropriate rail, manages failures intelligently, and produces a unified view of payment state across all channels."
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
					description={"Resolving integration fragmentation, lack of idempotency, and slow nightly reconciliation cycles."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Payment Hub Architecture"}
					description={"An idempotent ingestion pipeline connected to routing engines, individual rail adapters, and real-time reconciliation state machines."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout the engagement."}
					rightColumnTitle={"Payment Hub Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A phased 10-month migration lifecycle delivering core frameworks before sequentially migrating individual rails."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Intelligent routing and circuit breakers isolated individual rail issues, reducing settlement failures dramatically."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Payment failures used to be a daily operations conversation. After the hub, they're a weekly exception report. The circuit breaker pattern alone — stopping one rail's problems from becoming everyone's problems — was worth the whole project."}
					author={"Head of Payments Engineering"}
					subtitle={"Confidential Fintech Company"}
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
					title={"Payment failures costing you 2–3% of transaction volume?"}
					description={"OpenGridLabs builds payment hubs — intelligent routing, idempotent processing, real-time reconciliation, and circuit-breaking — that handle peak volume without failure."}
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
