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
	{ value: "3 days", label: "Quarterly reserving cycle, from 3 weeks", accent: "from-indigo-500 to-violet-600" },
	{ value: "12 mo", label: "Platform live", accent: "from-indigo-500 to-violet-600" },
	{ value: "7", label: "Classes of business automated", accent: "from-indigo-500 to-violet-600" },
	{ value: "100%", label: "Reproducible calculations with full audit trail", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "3-week quarterly reserving cycle dominated by data extraction and reconciliation" },
	{ text: "Spreadsheet-based models with key-person dependency — only one actuary understood the full model" },
	{ text: "Pricing models updated quarterly because the data pipeline was too slow for monthly cycles" },
	{ text: "No automated data quality checks — errors in source data discovered mid-process" },
	{ text: "Reserve calculations not reproducible — same data producing different results run to run" }
];

const SOLUTIONS = [
	{ text: "Automated actuarial data pipeline — claims, exposure, and premium data prepared daily" },
	{ text: "Run-off triangle generation for all 7 classes automated — updated daily rather than quarterly" },
	{ text: "Chain-ladder, Bornhuetter-Ferguson, and Cape Cod IBNR methods automated and parameterisable" },
	{ text: "GLM pricing model infrastructure enabling monthly model updates from current data" },
	{ text: "Full audit trail — every input, parameter, and output versioned and reproducible" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Pipeline", items: ["Claims", "Exposure", "Premium", "Policy data", "Daily refresh", "Data quality checks", "Reconciliation"], color: "hsl(230,80%,60%)" },
	{ title: "Triangle Engine", items: ["Run-off triangles (paid/incurred)", "Development factors", "Tail factors", "Diagnostic visualisations"], color: "hsl(230,80%,60%)" },
	{ title: "Reserving Models", items: ["Chain-ladder", "Bornhuetter-Ferguson", "Cape Cod", "IBNR calculation", "Reserve range", "Best estimate"], color: "hsl(230,80%,60%)" },
	{ title: "Pricing & Reporting", items: ["GLM model infrastructure", "Pricing diagnostics", "Solvency II triangles", "Board reserve pack"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Pipeline & Triangle Automation (Months 1–5)",
		desc: "OpenGridLabs built the automated data pipeline integrating claims, policy, and finance source systems with daily data quality checks and automated reconciliation. The first run-off triangles were generated automatically within 90 days — the team saw quarterly triangle output within minutes of a pipeline run for the first time.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Reserving Model Infrastructure (Months 6–9)",
		desc: "The chain-ladder, Bornhuetter-Ferguson, and Cape Cod reserving methods were implemented as parameterisable models alongside the actuarial team, who retained full control of assumptions and parameter choices. The models were validated against the prior year's manual spreadsheet results before live use.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "GLM Pricing & Audit Trail (Months 10–12)",
		desc: "GLM pricing model infrastructure was built enabling the pricing team to run monthly model refreshes. The audit trail was implemented — every reserving run versioned, every input and output archived, every parameter change recorded with the author and timestamp — eliminating the key-person model transparency risk.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Quarterly reserving cycle", before: "3 weeks", after: "3 days", change: "3 days" },
	{ metric: "Data preparation proportion of cycle", before: "~70% of cycle", after: "~10% (automated)", change: "Automated" },
	{ metric: "Pricing model update frequency", before: "Quarterly", after: "Monthly", change: "Monthly" },
	{ metric: "Reserve calculation reproducibility", before: "Variable (spreadsheet)", after: "100% (automated, versioned)", change: "100% versioned" },
	{ metric: "Key-person model risk", before: "Critical", after: "Eliminated (documented platform)", change: "Eliminated" },
	{ metric: "Actuarial capacity for analysis", before: "~30% of cycle", after: "~90% of cycle", change: "90% of cycle" }
];

const SUCCESS_FACTORS = [
	{
		title: "Data pipeline automation is the highest-leverage actuarial investment",
		desc: "An actuarial team spending 70% of its time on data preparation is a team where 70% of the value is being left unrealised. Automating the pipeline does not change the actuarial methods — it makes them available for analysis rather than buried under data engineering."
	},
	{
		title: "Reproducibility is a governance requirement, not just a convenience",
		desc: "A reserving calculation that cannot be exactly reproduced — because it was run in a spreadsheet that has since been modified — fails the governance standards expected by boards, regulators, and external auditors. A versioned, automated platform where every run is archived and every parameter is recorded provides the audit trail that governance requires."
	},
	{
		title: "Monthly pricing model updates improve the loss ratio",
		desc: "A pricing model calibrated on data 90 days old is pricing risks based on a claims and exposure picture that is three months out of date. Monthly updates provide a pricing signal that is six times more current, enabling faster response to emerging trends in claims frequency, severity, or mix."
	}
];

const FAQS = [
	{
		q: "What is IBNR in actuarial reserving?",
		a: "IBNR (Incurred But Not Reported) is the estimated liability for claims that have occurred but have not yet been reported to the insurer. It is a key component of the total insurance reserve, estimated using development triangle methods applied to historical claims data. Common IBNR estimation methods include the chain-ladder, Bornhuetter-Ferguson, and Cape Cod methods."
	},
	{
		q: "What is a GLM pricing model in insurance?",
		a: "A GLM (Generalised Linear Model) is a statistical model used in insurance pricing to estimate the expected claim frequency and severity for different risk segments. GLMs model the relationship between policyholder characteristics (age, location, vehicle type, claims history) and expected loss, enabling risk-differentiated pricing. They are the standard pricing methodology for personal and commercial lines insurance."
	}
];

export default function ActuarialAnalyticsCaseStudy() {
	return (
		<>
			<SEO
				title="Actuarial Analytics & Triangle Automation Case Study | OpenGridLabs"
				description="How an Actuarial Analytics Platform Reduced the Quarterly Reserving Cycle from 3 Weeks to 3 Days."
				canonical="/services/bfsi/actuarial-analytics"
				keywords="Actuarial Analytics, IBNR, Reserving, Loss Development Triangles, GLM Pricing, Actuarial Automation, Chain-Ladder, Bornhuetter-Ferguson, Insurance Pricing, Insurance Technology, OpenGridLabs"
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
					title="How an Actuarial Analytics Platform Reduced the Quarterly Reserving Cycle from 3 Weeks to 3 Days"
					description="A general insurer's actuarial team was spending three weeks each quarter extracting data, running development triangles, and calculating IBNR reserves in spreadsheets — with the last week of each quarter dominated by data reconciliation rather than actuarial analysis. OpenGridLabs built an automated actuarial analytics platform: reproducible loss development, automated triangle calculation, GLM pricing model infrastructure, and a reserve audit trail — reducing the reserving cycle to 3 days and freeing the team for genuine actuarial work."
					details={[
						{ label: "Sector", value: "General insurer (anonymised)" },
						{ label: "Lines", value: "Motor, home, liability — 7 classes" },
						{ label: "Timeline", value: "12 months" },
						{ label: "Stack", value: "Actuarial data pipeline · Triangle automation · GLM platform · Reserve audit trail" }
					]}
				/>

				<StatsGrid stats={STATS} />

				<CaseStudyBackground 
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a general insurer writing across motor, home, and liability classes — seven distinct books of business requiring separate reserve calculations each quarter. The actuarial team of eight was spending the majority of each quarter on data extraction and preparation: pulling claims data from the claims system, exposure data from the policy system, and premium data from finance, reconciling the three, and preparing the run-off triangles that fed the reserving calculations. By the time the data was ready, the team had one week to do the actuarial work.",
						"The data preparation problem was compounding. Different source systems produced data in different formats, requiring manual reconciliation that consumed disproportionate actuarial time. The spreadsheet-based triangle and IBNR models had grown complex enough that only the senior actuary fully understood them — a key-person risk that the board had flagged. And pricing model updates were running on a quarterly cycle because the data pipeline was too slow to support monthly updates, meaning the pricing team was making decisions on data that was up to 90 days old."
					]}
					definitionTitle="What Is Actuarial Analytics?"
					definitionText="Actuarial analytics in general insurance encompasses the statistical and quantitative methods used to estimate future claim costs — reserving (estimating the cost of claims already incurred but not yet fully settled), pricing (estimating the expected cost of future claims for new and renewed policies), and capital modelling (estimating the capital required to meet extreme loss scenarios). Modern actuarial analytics platforms automate the data pipelines feeding these calculations, making results reproducible, auditable, and faster to produce."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Replacing slow Excel reconciliations with daily data refresh rates, version control audit trails, and GLM modeling updates."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Actuarial Analytics Platform Architecture"}
					description={"Daily claiming and policy databases passing through automated run-off triangle generators, statistical reserving models, and Solvency II dashboards."}
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
					description={"A systematic 3-phase roadmap leading from baseline automated pipelines to parameterisable model deployment and audit validation."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Reducing reserve close cycles, eliminating key-person code risk, and maximizing reproducible calculations."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We were actuaries doing data engineering. Three weeks of the quarter, eight people, and we spent most of it making spreadsheets talk to each other. The platform gave us our time back. Now the data is ready on day one and we spend three days doing actuarial work."}
					author={"Chief Actuary"}
					subtitle={"Confidential General Insurer"}
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
					title={"Actuaries spending three weeks on data preparation for one week of analysis?"}
					description={"OpenGridLabs builds actuarial analytics platforms — automated data pipelines, triangle engines, reproducible reserving models, and GLM infrastructure — that give actuaries their time back."}
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
