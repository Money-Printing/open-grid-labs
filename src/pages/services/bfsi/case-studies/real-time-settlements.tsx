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
	{ value: "91%", label: "Reduction in settlement failures", accent: "from-emerald-500 to-teal-600" },
	{ value: "24/7", label: "Real-time settlement capability", accent: "from-amber-500 to-yellow-600" },
	{ value: "16 mo", label: "Full ISO 20022 migration", accent: "from-blue-500 to-cyan-600" },
	{ value: "£14B", label: "Annual settlement volume", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "Legacy SWIFT MT format with no ISO 20022 MX capability — compliance deadline approaching" },
	{ text: "No Faster Payments connectivity — sterling instant payments requiring correspondent bank arrangement" },
	{ text: "No TARGET2 Instant connectivity — euro instant payments not offered to commercial clients" },
	{ text: "Settlement failure rate of 1.4% — primarily from format and data quality issues in MT messages" },
	{ text: "Manual reconciliation of settlement fails consuming significant operations team capacity" }
];

const SOLUTIONS = [
	{ text: "Full ISO 20022 MX implementation covering pacs.008 (customer credit transfer) and pacs.009 (financial institution transfer)" },
	{ text: "Direct Faster Payments Scheme connectivity — sterling instant payment capability" },
	{ text: "TARGET2 Instant integration — euro instant payment capability in the TARGET2 TIPS system" },
	{ text: "Data quality engine validating ISO 20022 messages before submission — preventing format-related failures" },
	{ text: "Automated settlement fail management with structured investigation and resolution workflow" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Message Layer", items: ["ISO 20022 MX generation", "Validation & Translation", "Data Quality Engine", "SWIFT MX connectivity"], color: "hsl(38,100%,50%)" },
	{ title: "Payment Rails", items: ["CHAPS (high-value)", "Faster Payments (instant)", "TARGET2 TIPS (euro)", "SEPA CT"], color: "hsl(145,100%,45%)" },
	{ title: "Settlement Engine", items: ["Real-time positions", "Liquidity monitoring", "Fail management", "Reconciliation Engine"], color: "hsl(200,100%,50%)" },
	{ title: "Reporting", items: ["Settlement reporting", "Regulatory feeds", "Correspondent statements", "Intraday notifications"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "ISO 20022 Foundation & SWIFT MX (Months 1–6)",
		desc: "OpenGridLabs built the ISO 20022 message generation and validation layer, covering all payment message types in scope. The data quality engine was built to validate structured data completeness before submission. SWIFT MX connectivity was established with full coexistence mode operation, allowing MT and MX messages to run simultaneously during the transition period.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Faster Payments & TARGET2 Instant (Months 7–12)",
		desc: "Direct Faster Payments Scheme membership and connectivity were implemented — the bank previously relying on a correspondent arrangement with associated costs and latency. TARGET2 Instant (TIPS) integration was built, enabling euro instant payments for the commercial client base.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "24/7 Operations & Fail Management (Months 13–16)",
		desc: "The operations model was updated for 24/7 settlement capability — Faster Payments and TARGET2 Instant operate around the clock. An automated settlement fail management workflow was implemented, reducing manual intervention for standard fail types to a structured review process.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Settlement failure rate", before: "1.4%", after: "0.12%", change: "-91%" },
	{ metric: "Real-time settlement capability", before: "Business hours only", after: "24/7/365", change: "24/7/365" },
	{ metric: "Sterling instant payment cost", before: "Correspondent arrangement", after: "Direct connectivity", change: "Lower cost" },
	{ metric: "Euro instant payment capability", before: "Not offered", after: "Available to all", change: "Commercial access" },
	{ metric: "Manual settlement fail resolution", before: "High volume", after: "Structured automation", change: "Structured automation" },
	{ metric: "ISO 20022 compliance", before: "Non-compliant", after: "Fully compliant", change: "Fully compliant" }
];

const SUCCESS_FACTORS = [
	{
		title: "ISO 20022 data quality reduces failures at the source",
		desc: "Most SWIFT MT settlement failures are caused by data quality issues — missing fields, incorrect formats, or insufficient beneficiary information. ISO 20022 structured data requirements, enforced at the point of message creation, prevent these failures from reaching the settlement layer rather than discovering them after submission."
	},
	{
		title: "Direct rail connectivity eliminates correspondent arrangement risk and cost",
		desc: "A bank dependent on a correspondent arrangement for Faster Payments or instant euro payments is dependent on that correspondent's performance, pricing, and availability. Direct connectivity removes the intermediary, reduces cost, and enables the bank to offer instant payment services under its own SLA rather than its correspondent's."
	},
	{
		title: "24/7 operations requires 24/7 capability",
		desc: "A bank whose customers initiate payments at 11pm on a Sunday and whose settlement capability only operates weekday business hours will generate settlement failures every weekend. Instant payment rails operate around the clock; the operational model must match the infrastructure."
	}
];

const FAQS = [
	{
		q: "What is the difference between Faster Payments and CHAPS?",
		a: "Faster Payments is the UK's instant payment scheme — processing payments 24/7/365 with typical delivery within seconds for amounts up to £1M. CHAPS (Clearing House Automated Payment System) is the UK's same-day high-value settlement system, settling during business hours for large-value transactions with no upper limit. Different use cases — high-volume retail and SME payments use Faster Payments; large commercial settlements use CHAPS."
	},
	{
		q: "What is TARGET2 Instant (TIPS)?",
		a: "TIPS (TARGET Instant Payment Settlement) is the European Central Bank's 24/7 instant euro payment service, providing settlement in under 10 seconds for SEPA Instant Credit Transfers up to €100,000. It operates around the clock including weekends and holidays, settling in central bank money."
	}
];

export default function RealTimeSettlementsCaseStudy() {
	return (
		<>
			<SEO
				title="ISO 20022 Migration & Real-time Settlements Case Study | OpenGridLabs"
				description="How ISO 20022 Migration and Instant Payment Rails Reduced Settlement Failures 91% and Enabled 24/7 Real-Time Settlement."
				canonical="/services/bfsi/real-time-settlements"
				keywords="ISO 20022, SWIFT MX, Faster Payments, TARGET2, Real-time settlement, SEPA Instant, Payment Rails, Banking Technology, OpenGridLabs"
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
					categoryTag="Case Study · Banking & Financial Technology"
					title="How ISO 20022 Migration and Instant Payment Rails Reduced Settlement Failures 91% and Enabled 24/7 Real-Time Settlement"
					description="A commercial bank was operating on legacy SWIFT MT message formats, disconnected from instant payment rails, and experiencing settlement failure rates that generated significant operational costs. OpenGridLabs led the ISO 20022 migration — converting the bank's entire payment messaging infrastructure to the richer MX format — and implemented connectivity to Faster Payments and TARGET2 Instant, enabling round-the-clock real-time settlement for the first time."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Commercial bank (anonymised)" },
						{ label: "Scale", value: "£14B annual settlement volume" },
						{ label: "Timeline", value: "16 months" },
						{ label: "Stack", value: "ISO 20022 · SWIFT MX · Faster Payments · TARGET2 · Real-time settlement engine" }
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
						"Our client is a commercial bank with £14 billion in annual settlement volume across domestic and international payment flows. The payment messaging infrastructure was based on legacy SWIFT MT message formats — MT103 for customer credit transfers, MT202 for interbank transfers — with connectivity to CHAPS for same-day high-value sterling payments but no direct connection to Faster Payments for instant sterling transfers or to TARGET2 Instant for euro instant payments. Settlement failures were running at 1.4% of transactions.",
						"The SWIFT network's migration to ISO 20022 MX messages — mandatory by November 2025 — created the deadline, but the bank's leadership saw the migration as an opportunity rather than just a compliance task. ISO 20022 messages carry significantly richer data than MT messages — enabling straight-through reconciliation, richer remittance information, and the structured data required for SEPA instant and TARGET2 instant payment rails. The migration was designed to unlock capability, not just maintain compliance.",
						"ISO 20022 is an international standard for financial messaging that replaces legacy SWIFT MT formats with richer XML-based MX messages. It provides a common data dictionary for financial transactions, enabling significantly more structured and complete information in payment messages — including full originator and beneficiary details, purpose codes, and remittance information. The global financial infrastructure is migrating to ISO 20022 with mandatory adoption across SWIFT, TARGET2, and major payment systems."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is ISO 20022?"
					definitionText="ISO 20022 is an international standard for financial messaging that replaces legacy SWIFT MT formats with richer XML-based MX messages. It provides a common data dictionary for financial transactions, enabling significantly more structured and complete information in payment messages — including full originator and beneficiary details, purpose codes, and remittance information. The global financial infrastructure is migrating to ISO 20022 with mandatory adoption across SWIFT, TARGET2, and major payment systems."
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
					description={"Resolving legacy MT message formats, connecting to Faster Payments and TARGET2, and reducing settlement failures."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Real-time Settlement Architecture"}
					description={"A modern event-driven messaging layer utilizing rich ISO 20022 MX formatting to power direct instant payment rail settlement."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout every engagement, not afterthoughts addressed at review."}
					rightColumnTitle={"Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 3-phase roadmap leading from initial ISO 20022 message engine foundation to full live production support."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Transforming compliance migration overhead into high-performance strategic infrastructure upgrades."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We were mandated to migrate to ISO 20022. We chose to use that mandate to also get direct Faster Payments connectivity and TARGET2 Instant. The compliance cost became an infrastructure investment. The settlement failure reduction was a bonus we weren't expecting to be that large."}
					author={"Head of Payment Operations"}
					subtitle={"Confidential Commercial Bank"}
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
					title={"Operating on legacy MT messages with a mandatory MX migration deadline?"}
					description={"OpenGridLabs leads ISO 20022 migrations and instant payment rail implementations — turning compliance deadlines into infrastructure upgrades that reduce failures and enable 24/7 settlement."}
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
