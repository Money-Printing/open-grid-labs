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
	{ value: "78%", label: "Reduction in report preparation time", accent: "from-emerald-500 to-teal-600" },
	{ value: "0", label: "Regulatory findings in 24 months post-launch", accent: "from-emerald-500 to-teal-600" },
	{ value: "9 mo", label: "All 4 regimes automated", accent: "from-emerald-500 to-teal-600" },
	{ value: "3.4 FTE", label: "Compliance capacity returned to higher-value work", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "3.4 FTEs consumed by data extraction, reconciliation, and manual filing across 4 regimes" },
	{ text: "Recurring submission errors — format failures, late reports, rejected submissions" },
	{ text: "No systematic data quality monitoring — errors discovered at submission, not at source" },
	{ text: "Different data formats required by each trade repository and regulator" },
	{ text: "Back-reporting required when data quality issues discovered retrospectively" }
];

const SOLUTIONS = [
	{ text: "Automated data extraction from OMS, portfolio system, and counterparty systems for all 4 regimes" },
	{ text: "A validation engine applying regulatory rules and schema validation before submission" },
	{ text: "Direct API integration with trade repositories (DTCC, Unavista, REGIS-TR) eliminating manual file upload" },
	{ text: "Data quality monitoring framework — reconciliation checks running daily, not at submission" },
	{ text: "An exception management workflow for data quality issues with full audit trail and resolution tracking" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Extraction", items: ["OMS", "Portfolio system", "Counterparty confirmations", "Reference data", "Trade lifecycle events"], color: "hsl(145,100%,40%)" },
	{ title: "Validation", items: ["Regulatory schema validation", "Business rule checks", "Data quality reconciliation", "Error flagging"], color: "hsl(145,100%,40%)" },
	{ title: "Submission", items: ["Trade repository APIs (DTCC/Unavista/REGIS-TR)", "Regulatory portals", "Acknowledgement processing"], color: "hsl(145,100%,40%)" },
	{ title: "Monitoring", items: ["Daily reconciliation", "Rejection tracking", "Late report alerting", "Regulatory change management"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Foundation & MiFID II Automation (Months 1–3)",
		desc: "OpenGridLabs built the data extraction layer and automated the MiFID II transaction reporting pipeline — the highest-volume regime. The validation engine was built applying the full set of ESMA validation rules before submission, reducing rejection rates from 4.2% to near-zero.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "EMIR, SFTR & Trade Repository Integration (Months 4–7)",
		desc: "EMIR and SFTR reporting were automated, with direct API integration to the three trade repositories the firm used. The data quality monitoring framework was deployed — daily reconciliation checks identifying discrepancies at source rather than at submission.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "AIFMD & Exception Management (Months 8–9)",
		desc: "AIFMD reporting was automated and the exception management workflow was built. A regulatory change management process was implemented — tracking regulatory updates across all four regimes and managing the platform changes required to maintain compliance.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Report preparation time", before: "Baseline", after: "-78%", change: "-78%" },
	{ metric: "Regulatory findings", before: "2 informal observations in 18 months", after: "0 in 24 months post-launch", change: "Zero findings" },
	{ metric: "Submission rejection rate", before: "4.2% (MiFID II)", after: "<0.1%", change: "<0.1%" },
	{ metric: "Back-reporting incidents", before: "Recurring", after: "Zero", change: "Zero incidents" },
	{ metric: "Compliance FTE on data handling", before: "3.4 FTE", after: "<0.5 FTE", change: "<0.5 FTE" },
	{ metric: "Data quality issue detection", before: "At submission", after: "At source (daily monitoring)", change: "At source" }
];

const SUCCESS_FACTORS = [
	{
		title: "Data quality monitoring at source, not at submission",
		desc: "The most common regulatory reporting failure is not format error — it is data quality error discovered at the point of submission, requiring rushed correction under time pressure. A monitoring framework that identifies data quality issues daily, rather than at the submission deadline, transforms the exception handling process from a crisis to a managed workflow."
	},
	{
		title: "Validation before submission eliminates rejection-rework cycles",
		desc: "A regulatory submission that is rejected by the trade repository requires correction, resubmission, and potentially back-reporting. Applying the full regulatory validation rules at the pre-submission stage — before the file leaves the firm — eliminates the rejection cycle entirely."
	},
	{
		title: "Automation returns capacity to compliance",
		desc: "A compliance professional extracting data from three systems and reconciling in Excel is not doing compliance work. Automation that eliminates the data handling returns that capacity to the analysis, interpretation, and advisory work that requires expertise and cannot be automated."
	}
];

const FAQS = [
	{
		q: "What is MiFID II transaction reporting?",
		a: "MiFID II (Markets in Financial Instruments Directive II) requires investment firms to report all executed transactions in financial instruments to their national competent authority (e.g. the FCA in the UK). Reports must be submitted by close of business on the next trading day and include counterparty identification, instrument details, price, quantity, and venue."
	},
	{
		q: "What is EMIR trade reporting?",
		a: "EMIR (European Market Infrastructure Regulation) requires financial counterparties and non-financial counterparties above clearing thresholds to report all derivative contracts to authorised trade repositories. Reports cover trade details, lifecycle events, and collateral, and must be submitted the next working day after execution or modification."
	}
];

export default function RegulatoryReportingCaseStudy() {
	return (
		<>
			<SEO
				title="Regulatory Reporting Automation Case Study | OpenGridLabs"
				description="How Regulatory Reporting Automation Eliminated Manual Errors and Achieved Zero Regulatory Findings for 24 Months."
				canonical="/services/bfsi/regulatory-reporting"
				keywords="Regulatory Reporting, MiFID II, EMIR, SFTR, AIFMD, RegTech, Trade Repository, Compliance Automation, FCA Reporting, Financial Services, OpenGridLabs"
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
					title="How Regulatory Reporting Automation Eliminated Manual Errors and Achieved Zero Regulatory Findings for 24 Months"
					description="An asset manager subject to MiFID II transaction reporting, EMIR trade reporting, SFTR, and AIFMD was managing its regulatory filings through a semi-manual process — compliance analysts extracting data from multiple systems, reconciling in spreadsheets, and submitting files to trade repositories and regulators. The process was consuming 3.4 FTEs, generating recurring errors, and producing late submissions. OpenGridLabs automated the full reporting pipeline, eliminating errors and achieving zero regulatory findings for 24 consecutive months."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Asset manager (anonymised)" },
						{ label: "Scope", value: "MiFID II · EMIR · SFTR · AIFMD" },
						{ label: "Timeline", value: "9 months" },
						{ label: "Stack", value: "Data extraction · Validation · Trade repository APIs · Regulatory submission" }
					]}
				/>

				<CaseStudyCarousel
					slug="regulatory-reporting"
					title="Regulatory Reporting"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/regulatory-reporting/1.jpg",
						"/images/case-studies/regulatory-reporting/2.jpg"
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
						"Our client is a mid-sized asset manager subject to four regulatory reporting regimes: MiFID II transaction reporting (ESMA), EMIR trade reporting (FCA/ESMA), SFTR (Securities Financing Transaction Regulation), and AIFMD reporting. The compliance team was managing all four using a combination of manual data extraction from the OMS, portfolio system, and counterparty confirmations, Excel-based reconciliation, and manual submission of reporting files to trade repositories.",
						"The process was consuming 3.4 FTEs and generating a recurring pattern of errors: late reports due to data reconciliation delays, rejected submissions due to format or validation failures, and periodic late-discovery data quality issues requiring back-reporting. The FCA had issued two informal observations about reporting quality in the prior 18 months. The compliance team was highly skilled but was spending most of its capacity on data handling rather than on the compliance analysis that required their expertise.",
						"Regulatory reporting in financial services refers to the mandatory submissions that regulated firms must make to regulators and trade repositories — transaction reports under MiFID II, derivative trade reports under EMIR, securities financing transaction reports under SFTR, and fund reports under AIFMD. Each regime has specific data requirements, validation rules, submission deadlines, and error-handling procedures. Automation eliminates the manual data extraction, reconciliation, and format conversion steps that make manual processes error-prone and resource-intensive."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Regulatory Reporting?"
					definitionText="Regulatory reporting in financial services refers to the mandatory submissions that regulated firms must make to regulators and trade repositories — transaction reports under MiFID II, derivative trade reports under EMIR, securities financing transaction reports under SFTR, and fund reports under AIFMD. Each regime has specific data requirements, validation rules, submission deadlines, and error-handling procedures. Automation eliminates the manual data extraction, reconciliation, and format conversion steps that make manual processes error-prone and resource-intensive."
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
					description={"Replacing manual data assembly with automatic format checking, pre-submission rule checks, and repository API uploads."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Regulatory Reporting Automation Architecture"}
					description={"OMS and portfolio database links feeding into pre-flight business rule check scripts, trade repository API routes, and daily status monitors."}
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
					description={"A systematic 3-phase roadmap starting from basic data frameworks to trade repository endpoints and final AIFMD rule packages."}
					phaseColors={["hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)"]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Minimizing report preparation time, lowering submission reject rates, and maintaining zero regulatory observations."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"Our compliance team was three-quarters data handlers and one-quarter compliance professionals. The automation inverted that. They now spend most of their time on actual compliance — reviewing exceptions, monitoring regulatory developments, advising the business. The data handling is done."}
					author={"Head of Compliance"}
					subtitle={"Confidential Asset Manager"}
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
					title={"Compliance team spending 3 FTEs on regulatory data handling?"}
					description={"OpenGridLabs automates regulatory reporting — MiFID II, EMIR, SFTR, AIFMD — with data quality monitoring at source and direct trade repository API submission that eliminates errors."}
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
