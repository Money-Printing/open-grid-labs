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
import CaseStudyCarousel from "../../../../components/case-study-carousel";

const STATS = [
	{ value: "41%", label: "Reduction in annual market data cost", accent: "from-emerald-500 to-teal-600" },
	{ value: "<1ms", label: "Data distribution latency", accent: "from-emerald-500 to-teal-600" },
	{ value: "9 mo", label: "Platform live", accent: "from-emerald-500 to-teal-600" },
	{ value: "140", label: "Applications served from unified data layer", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "6 vendor feeds connecting directly to 140 applications — redundant data purchases and no consolidated view" },
	{ text: "No data quality monitoring — bad ticks and stale data propagating silently into pricing and risk systems" },
	{ text: "No entitlement management — data licences not tracked, compliance with vendor usage terms uncertain" },
	{ text: "£2.4M annual data spend with no visibility into utilisation or redundancy" },
	{ text: "Different data schemas from each vendor requiring application-level normalisation — inconsistent results" }
];

const SOLUTIONS = [
	{ text: "A centralised market data platform aggregating all 6 vendor feeds into a unified data layer" },
	{ text: "A common data model normalising all vendor data to a single schema consumed by all applications" },
	{ text: "Real-time data quality monitoring — outlier detection, staleness alerts, and comparison validation" },
	{ text: "Entitlement management system tracking all data licences, usage, and compliance obligations" },
	{ text: "A tiered distribution architecture — sub-millisecond for trading/pricing, near-real-time for risk/analytics" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Ingestion", items: ["Bloomberg B-PIPE", "Refinitiv TREP", "ICE", "Markit", "Morningstar", "Specialist feeds", "Normalisation"], color: "hsl(145,100%,40%)" },
	{ title: "Quality", items: ["Outlier detection", "Staleness monitoring", "Cross-vendor validation", "Quality score per data element"], color: "hsl(145,100%,40%)" },
	{ title: "Distribution", items: ["Sub-ms tier (trading/pricing)", "Near-real-time tier (risk/analytics)", "Batch tier (reporting)", "Entitlement enforcement"], color: "hsl(145,100%,40%)" },
	{ title: "Management", items: ["Entitlement registry", "Usage tracking", "Cost allocation", "Vendor performance", "Data lineage"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Ingestion and Normalisation (Months 1–3)",
		desc: "OpenGridLabs built the ingestion layer for all six vendor feeds and the normalisation framework mapping all vendor schemas to the common data model. The data quality monitoring engine was deployed, immediately identifying 14 recurring data quality issues — wrong prices, stale rates, missing corporate actions — that had been silently affecting downstream applications.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Distribution Layer and Entitlement Management (Months 4–7)",
		desc: "The tiered distribution architecture was built — sub-millisecond distribution using an in-memory data grid for latency-sensitive consumers, near-real-time for analytics, and batch for reporting. The entitlement management system was built and populated from vendor contracts, immediately identifying £980K in redundant data licences.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Cost Optimisation and Quality Governance (Months 8–9)",
		desc: "The identified redundant licences were renegotiated, reducing the annual data bill from £2.4M to £1.4M. Data quality governance procedures were established — SLAs per data element, vendor quality scorecards, and an incident response process for data quality failures. All 140 consuming applications were migrated to the platform.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Annual market data cost", before: "£2.4M", after: "£1.4M", change: "-41%" },
	{ metric: "Distribution latency (trading tier)", before: "Variable", after: "<1ms consistent", change: "Sub-millisecond" },
	{ metric: "Data quality incidents", before: "Recurring (unmonitored)", after: "Monitored and SLA-governed", change: "SLA-governed" },
	{ metric: "Bad data propagation to applications", before: "Undetected", after: "Caught at source", change: "Caught at source" },
	{ metric: "Redundant data licences identified", before: "£980K redundant", after: "Renegotiated", change: "Renegotiated" },
	{ metric: "Vendor entitlement compliance", before: "Uncertain", after: "Fully tracked", change: "Fully tracked" }
];

const SUCCESS_FACTORS = [
	{
		title: "A single source of truth for market data eliminates application-level inconsistency",
		desc: "When 140 applications each normalise vendor data independently, they produce 140 subtly different results from the same input. A common normalisation layer means every application consumes exactly the same data — the same price, at the same timestamp, from the same source — eliminating the class of discrepancies caused by inconsistent normalisation."
	},
	{
		title: "Quality monitoring at the source changes the incident response model",
		desc: "A bad tick that is detected at the data platform level — before it reaches any consuming application — is a data platform alert. The same bad tick detected in a pricing system failure is a trading incident. Detection at source converts trading incidents into data management incidents, which are dramatically cheaper to handle."
	},
	{
		title: "Entitlement management unlocks the hidden cost reduction",
		desc: "Market data licensing is complex, multi-layered, and rarely reviewed holistically. Most financial services firms over-buy data relative to actual usage because they lack the visibility to identify redundancy. An entitlement management system provides that visibility; the cost reduction from renegotiation typically pays for the platform implementation rapidly."
	}
];

const FAQS = [
	{
		q: "What is data normalisation in market data management?",
		a: "Data normalisation in market data is the process of mapping data from multiple vendors' proprietary schemas to a common internal data model — consistent field names, data types, timestamp formats, and identifier schemes (ISIN, FIGI, Bloomberg ticker). It allows consuming applications to access data from any vendor through a single consistent interface without vendor-specific integration code."
	},
	{
		q: "What is market data entitlement management?",
		a: "Market data entitlement management is the tracking and enforcement of the licences governing how a firm may use the market data it subscribes to — which applications can access which data elements, for which use cases, under which commercial terms. Vendor licence agreements typically restrict data usage to defined use cases and user counts; entitlement management ensures compliance and identifies over-purchasing."
	}
];

export default function MarketDataFeedsCaseStudy() {
	return (
		<>
			<SEO
				title="Market Data Management & Distribution Case Study | OpenGridLabs"
				description="How a Market Data Management Platform Reduced Data Costs 41% and Cut Distribution Latency to Sub-Millisecond."
				canonical="/services/bfsi/market-data-feeds"
				keywords="Market Data, Market Data Feeds, Data Normalisation, Data Quality, Entitlement Management, Bloomberg, Refinitiv, Low-Latency Data, Financial Data Platform, Financial Services, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Emerald Theme Ambient Glow */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700"
					style={{
						background: `radial-gradient(circle, hsl(145,100%,40%) 0%, hsl(155,100%,35%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Financial Services"
					title="How a Market Data Management Platform Reduced Data Costs 41% and Cut Distribution Latency to Sub-Millisecond"
					description="A financial services firm was managing market data from six vendors with no centralised management layer — different applications connecting directly to different vendor feeds, no normalisation, no quality monitoring, and no consolidated view of entitlement costs. The bill from data vendors was £2.4M annually with no visibility into what was being used. OpenGridLabs built a centralised market data platform: normalisation, quality monitoring, entitlement management, and low-latency distribution — reducing data costs 41% and eliminating the data quality incidents that had been causing downstream pricing failures."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Financial services firm (anonymised)" },
						{ label: "Scale", value: "6 data vendors, 140 consuming applications" },
						{ label: "Timeline", value: "9 months" },
						{ label: "Stack", value: "Data normalisation · Quality monitoring · Entitlement management · Low-latency distribution" }
					]}
				/>

				<CaseStudyCarousel
					slug="market-data-feeds"
					title="Market Data Feeds"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/market-data-feeds/1.jpg",
						"/images/case-studies/market-data-feeds/2.jpg"
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
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a financial services firm with 140 applications consuming market data — pricing engines, risk systems, analytics platforms, trading infrastructure, and reporting tools. Market data came from six vendors: Bloomberg, Refinitiv, ICE, Markit, Morningstar, and a specialist fixed income data provider. Each vendor had independent connections to consuming applications, meaning the same data was frequently purchased multiple times under different entitlement agreements, and there was no consolidated view of data usage, quality, or cost.",
						"The lack of a data management layer had created operational fragility: when a vendor experienced a data quality issue (wrong price, missing rate, stale tick), the error propagated silently into the consuming applications. Pricing failures caused by stale or incorrect market data required manual investigation to identify the source — a process that could take hours during which affected systems were operating on incorrect data. The £2.4M annual data bill had grown without review; an entitlement audit revealed significant redundancy.",
						"Market data management is the centralised acquisition, normalisation, quality control, entitlement management, and distribution of financial market data — prices, rates, indices, reference data, and corporate actions — from multiple vendors to the consuming applications that depend on it. A market data platform provides a single source of truth for market data within a firm, eliminating redundant vendor connections, normalising data to a common format, monitoring for quality issues, and distributing data to consumers with appropriate latency for their use cases."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Market Data Management?"
					definitionText="Market data management is the centralised acquisition, normalisation, quality control, entitlement management, and distribution of financial market data — prices, rates, indices, reference data, and corporate actions — from multiple vendors to the consuming applications that depend on it. A market data platform provides a single source of truth for market data within a firm, eliminating redundant vendor connections, normalising data to a common format, monitoring for quality issues, and distributing data to consumers with appropriate latency for their use cases."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-emerald-500/10"
					definitionIconBorderClass="border-emerald-500/20"
					definitionIconColorClass="text-emerald-400"
					glowColorClass="bg-emerald-400"
					gradientFromClass="from-emerald-950/10"
				/>

				<ChallengesSolutions
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Decentralising direct vendor links with unified ingestion layers, automated schema normalisation, and real-time validation checks."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Market Data Platform Architecture"}
					description={"Raw feed ingestion paired with real-time price validation checking pipelines, multi-tiered speed distributors, and licence compliance managers."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Regulatory & Data Governance Core"}
					alertText={"All financial services solutions are designed with regulatory compliance, data lineage, and audit-readiness as first-class requirements. Every data point is traceable to source, every calculation is reproducible, and every system is designed for examination by regulators and auditors."}
					rightColumnTitle={"Architecture Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 3-phase roadmap leading from initial ingestion layer setups to licensing audits and full consumer migration."}
					phaseColors={["hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)"]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Reducing annual spends, securing sub-millisecond speeds, and aligning fully with vendor entitlement rules."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"We didn't know what we were paying for. The entitlement audit showed us we were buying the same data multiple times under different agreements. The platform paid for itself in the first year from licence renegotiation alone — the quality improvements were a bonus."}
					author={"Head of Technology"}
					subtitle={"Confidential Financial Services Firm"}
					accentLineClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-500/10"}
				/>

				<CaseStudySuccessFactors
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
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
					title={"Paying for market data without knowing what you are buying?"}
					description={"OpenGridLabs builds market data platforms — multi-vendor normalisation, quality monitoring, entitlement management, and tiered distribution — that cut costs and eliminate silent data failures."}
					moreCaseStudiesLink={"/services/bfsi"}
					glowBgClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-400"}
					btnGradientClass={"from-emerald-400 to-indigo-500"}
					btnShadowColor={"16,185,129,0.2"}
				/>
			</div>
		</>
	);
}
