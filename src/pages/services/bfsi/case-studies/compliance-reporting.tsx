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
	{ value: "4.2 FTE", label: "Compliance capacity freed from data handling", accent: "from-indigo-500 to-violet-600" },
	{ value: "0", label: "PRA findings in 18 months post-launch", accent: "from-indigo-500 to-violet-600" },
	{ value: "10 mo", label: "Both regimes automated", accent: "from-indigo-500 to-violet-600" },
	{ value: "100%", label: "QRTs generated automatically from source data", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "4.2 FTEs consumed by manual data extraction, reconciliation, and QRT completion each quarter" },
	{ text: "Two PRA informal observations from data reconciliation failures in prior two years" },
	{ text: "IFRS 17 measurement calculations performed in spreadsheets — error-prone and not scalable" },
	{ text: "No automated data quality monitoring — errors discovered mid-process or at submission" },
	{ text: "Different regulatory and accounting regimes using different data sources with no unified data layer" }
];

const SOLUTIONS = [
	{ text: "Unified compliance data layer integrating actuarial, investment, finance, and claims source systems" },
	{ text: "Automated QRT production for all in-scope Solvency II templates — from source data to submission-ready files" },
	{ text: "IFRS 17 measurement engine — BEL calculation, risk adjustment, CSM amortisation, and presentation" },
	{ text: "Data quality monitoring — automated reconciliation checks running daily across all source systems" },
	{ text: "Regulatory submission workflow — approval, sign-off, and submission management with audit trail" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Layer", items: ["Actuarial", "Investment", "Finance", "Claims", "Reconciliation checks", "Data quality scoring"], color: "hsl(230,80%,60%)" },
	{ title: "Solvency II", items: ["QRT production (all templates)", "SCR calculation inputs", "ORSA data", "Submission files"], color: "hsl(230,80%,60%)" },
	{ title: "IFRS 17", items: ["BEL calculation", "Risk adjustment", "CSM", "PAA eligibility", "Disclosure templates"], color: "hsl(230,80%,60%)" },
	{ title: "Governance", items: ["Approval workflow", "Submission management", "Audit trail", "Regulatory correspondence tracking"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Layer and Solvency II QRTs (Months 1–4)",
		desc: "OpenGridLabs built the unified compliance data layer and automated QRT production for all in-scope Solvency II templates. Data quality checks were deployed — running daily against all source systems and alerting the compliance team to reconciliation differences before the quarterly deadline rather than during it.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "IFRS 17 Measurement Engine (Months 5–8)",
		desc: "The IFRS 17 measurement engine was built — BEL (Best Estimate Liability) calculation, risk adjustment determination, CSM (Contractual Service Margin) amortisation, and the presentation adjustments required for the income statement. The engine was validated against external auditor calculations before live use.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Submission Workflow and Governance (Months 9–10)",
		desc: "The regulatory submission workflow was built — approval routing, sign-off by the Chief Actuary and CFO, submission management for PRA filings, and an audit trail of every submission. The compliance team's role shifted from data assembly to review and professional commentary.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "PRA findings", before: "2 informal observations in 2 years", after: "0 in 18 months post-launch", change: "0 findings" },
	{ metric: "Compliance FTE on data handling", before: "4.2 FTE", after: "<0.5 FTE (exception review)", change: "<0.5 FTE" },
	{ metric: "QRT production time", before: "3 weeks per quarter", after: "2 days (automated)", change: "2 days" },
	{ metric: "Data reconciliation errors", before: "Recurring", after: "Detected at source daily", change: "Daily detection" },
	{ metric: "IFRS 17 calculation accuracy", before: "Spreadsheet (risk of error)", after: "Validated engine", change: "Validated" },
	{ metric: "Regulatory submission timeliness", before: "Occasionally late", after: "100% on time", change: "100% on time" }
];

const SUCCESS_FACTORS = [
	{
		title: "Data quality monitoring at source is more valuable than error correction at submission",
		desc: "The most common compliance reporting failure is a data reconciliation error that isn't caught until the submission is being prepared — under time pressure, with limited ability to investigate. Daily automated reconciliation checks identify these errors weeks before the submission deadline, when they are manageable."
	},
	{
		title: "Automated QRT production is reproducible by construction",
		desc: "A QRT produced manually in Excel is produced differently each quarter — the same source data processed by the same analyst will produce subtly different results run-to-run if the analyst makes different assumptions about how to handle edge cases. Automated production from source data produces identical results from identical inputs."
	},
	{
		title: "IFRS 17 complexity requires a dedicated calculation engine",
		desc: "IFRS 17 measurement is sufficiently complex — with BEL discounting, risk adjustment calibration, CSM unlocking for assumption changes, and presentation adjustments — that spreadsheet implementation at scale is not appropriate. A dedicated calculation engine with full auditability and parameter management is the correct tool for a reporting obligation of this magnitude."
	}
];

const FAQS = [
	{
		q: "What are Solvency II Quantitative Reporting Templates (QRTs)?",
		a: "QRTs are standardised reporting forms submitted by insurers to their national regulator under the Solvency II framework. They cover the insurer's balance sheet (assets and liabilities at market-consistent values), solvency capital requirement, own funds, technical provisions, and premium and claims statistics. UK insurers submit QRTs to the PRA on quarterly and annual schedules."
	},
	{
		q: "What is IFRS 17 and how does it differ from IFRS 4?",
		a: "IFRS 17 (effective from January 2023) replaces IFRS 4 for insurance contract accounting. Where IFRS 4 allowed insurers to use a wide range of existing accounting practices, IFRS 17 requires a single, economically consistent measurement approach — present value of probability-weighted cash flows plus a risk adjustment plus a contractual service margin representing unearned profit. It produces more comparable financial statements but requires significant actuarial and systems investment to implement."
	}
];

export default function ComplianceReportingCaseStudy() {
	return (
		<>
			<SEO
				title="Automated Solvency II & IFRS 17 Compliance Reporting Case Study | OpenGridLabs"
				description="How Automated Compliance Reporting Eliminated Manual Errors, Passed PRA Review, and Freed 4.2 FTEs."
				canonical="/services/bfsi/compliance-reporting"
				keywords="Solvency II Reporting, IFRS 17, QRT Automation, Insurance Compliance, PRA Reporting, RegTech Insurance, Regulatory Reporting, BEL Calculation, CSM, Insurance Technology, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Indigo Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(230,80%,60%) 0%, hsl(240,80%,55%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Insurance Technology"
					title="How Automated Compliance Reporting Eliminated Manual Errors, Passed PRA Review, and Freed 4.2 FTEs"
					description="A UK insurer subject to Solvency II and IFRS 17 reporting obligations was managing both regimes through a manual process — compliance analysts extracting data from multiple systems, reconciling in spreadsheets, and manually completing Quantitative Reporting Templates. The process was consuming 4.2 FTEs, generating recurring reconciliation errors, and producing late submissions. OpenGridLabs automated the full compliance reporting pipeline, achieving zero PRA findings for 18 consecutive months."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "UK insurer (anonymised)" },
						{ label: "Scope", value: "Solvency II · IFRS 17 · Regulatory returns" },
						{ label: "Timeline", value: "10 months" },
						{ label: "Stack", value: "QRT automation · IFRS 17 engine · Data quality · Regulatory submission" }
					]}
				/>

					<CaseStudyCarousel
									slug="compliance-reporting"
									title="Compliance Reporting"
									accentColor="indigo"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/compliance-reporting/1.jpg",
										"/images/case-studies/compliance-reporting/2.jpg"
									]}
								/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-indigo-500/30"
					hoverTextClass="group-hover:text-indigo-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a UK insurance group subject to Solvency II quantitative reporting requirements and IFRS 17 accounting standard obligations. The compliance team was managing both regimes manually: Solvency II QRTs (Quantitative Reporting Templates) prepared from actuarial, investment, and finance system extracts reconciled in Excel; IFRS 17 measurement calculations performed in spreadsheets with manual adjustment for assumption changes. The process was consuming four compliance analysts for three weeks of each quarter.",
						"The PRA had issued two informal observations about reporting quality in the prior two years — both relating to data reconciliation failures where different source systems had produced conflicting figures that the manual process had not detected. The compliance team was highly capable but was spending its time on data assembly rather than on the compliance analysis and commentary that required professional judgement. The same data was being extracted, transformed, and loaded manually four times per year, with the errors and delays that manual processes inevitably produce.",
						"Solvency II is the UK insurance regulatory framework requiring insurers to report their financial position and risk exposures to the PRA through standardized Quantitative Reporting Templates (QRTs). IFRS 17 is the accounting standard governing how insurers measure and report insurance contract liabilities, requiring economically consistent measurements using probability-weighted best-estimate cash flows and risk adjustments."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Compliance Reporting?"
					definitionText="Solvency II is the UK insurance regulatory framework requiring insurers to report their financial position and risk exposures to the PRA through standardized Quantitative Reporting Templates (QRTs). IFRS 17 is the accounting standard governing how insurers measure and report insurance contract liabilities, requiring economically consistent measurements using probability-weighted best-estimate cash flows and risk adjustments."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-indigo-500/10"
					definitionIconBorderClass="border-indigo-500/20"
					definitionIconColorClass="text-indigo-400"
					glowColorClass="bg-indigo-400"
					gradientFromClass="from-indigo-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Evolving spreadsheet compliance models to daily automated data layers, structured engines, and auditable pipelines."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Compliance Reporting Architecture"}
					description={"Data ingestion platforms passing through automated Quantitative Reporting Templates, IFRS 17 cash-flow engines, and verified sign-off channels."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-indigo-400"}
					highlightColorClass={"bg-indigo-400"}
					gradientColorClass={"via-indigo-400/50"}
					alertBorderClass={"border-indigo-500/20"}
					alertBgClass={"bg-indigo-500/5"}
					alertTextColorClass={"text-indigo-300"}
					alertTitle={"Regulatory & Compliance Governance"}
					alertText={"All InsurTech solutions are built with FCA/PRA regulatory compliance, data privacy (GDPR), and actuarial governance as first-class design requirements. Audit trails, model validation, and data lineage are embedded from day one — not retrofitted before examination."}
					rightColumnTitle={"Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 3-phase roadmap leading from compliance data layers to IFRS 17 calculation models and final sign-off workflows."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Minimizing compilation overheads, eliminating audit failures, and maximizing reporting accuracy."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We had four compliance professionals whose primary job was building spreadsheets. After the automation, those four people spent their time reviewing results, writing commentary, and engaging with the PRA on substance. The PRA observation rate went to zero — not because we got lucky, but because the data quality improved structurally."}
					author={"Chief Financial Officer"}
					subtitle={"Confidential UK Insurer"}
					accentLineClass={"bg-indigo-400"}
					iconColorClass={"text-indigo-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-indigo-500/20"}
					iconColorClass={"text-indigo-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-indigo-400"}
					activeChevronColorClass={"text-indigo-400"}
				/>

				<CaseStudyCta 
					title={"Four compliance FTEs spending three weeks a quarter on manual QRT preparation?"}
					description={"OpenGridLabs automates Solvency II and IFRS 17 compliance reporting — unified data layer, automated QRTs, IFRS 17 measurement engine — with zero PRA findings."}
					moreCaseStudiesLink={"/services/bfsi"}
					glowBgClass={"bg-indigo-400"}
					iconColorClass={"text-indigo-400"}
					btnGradientClass={"from-indigo-500 to-violet-500"}
					btnShadowColor={"99,102,241,0.2"}
				/>
			</div>
		</>
	);
}
