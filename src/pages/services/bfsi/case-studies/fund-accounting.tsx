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
	{ value: "89%", label: "Reduction in fund accounting errors", accent: "from-emerald-500 to-teal-600" },
	{ value: "Same day", label: "Monthly close, from 3 business days", accent: "from-emerald-500 to-teal-600" },
	{ value: "12", label: "Funds with full shadow accounting", accent: "from-emerald-500 to-teal-600" },
	{ value: "0", label: "Late NAV publications since go-live", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "No shadow accounting — complete reliance on fund administrator with no independent verification" },
	{ text: "Three late/corrected NAV publications in 18 months generating FCA correspondence" },
	{ text: "NAV errors undetected for up to 4 weeks — no daily reconciliation" },
	{ text: "Monthly close cycle taking 3 business days — reliance on manual data collection from administrator" },
	{ text: "Income equalisation calculation performed manually in Excel — error-prone and undocumented" }
];

const SOLUTIONS = [
	{ text: "Automated shadow fund accounting system replicating all 12 fund NAV calculations daily" },
	{ text: "Daily reconciliation engine comparing shadow NAV against administrator figures — discrepancy alerting" },
	{ text: "A reconciliation workflow for investigating and resolving breaks with the administrator" },
	{ text: "Income equalisation module — automated calculation replacing manual Excel process" },
	{ text: "Administrator data API integration — automated daily data feed replacing manual file collection" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Feeds", items: ["Administrator API", "Custodian positions", "Trade blotter", "Corporate actions", "Pricing", "FX rates"], color: "hsl(145,100%,40%)" },
	{ title: "Shadow Accounting", items: ["Position valuation", "Accrued income", "Expense accruals", "Capital activity", "Income equalisation"], color: "hsl(145,100%,40%)" },
	{ title: "Reconciliation", items: ["Daily NAV comparison", "Break identification", "Tolerance check", "Alert routing", "Resolution tracking"], color: "hsl(145,100%,40%)" },
	{ title: "Reporting", items: ["Fund performance", "Expense ratios", "NAV history", "Regulatory feeds", "Board MI"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Shadow Accounting Engine (Months 1–5)",
		desc: "OpenGridLabs built the shadow fund accounting engine covering all 12 funds. The administrator API integration was established, providing daily automated data feeds replacing manual file collection. The first shadow NAV calculations were run in parallel with the administrator's figures during a 90-day validation period, during which 14 discrepancies were identified and resolved.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Reconciliation & Equalisation (Months 6–9)",
		desc: "The daily reconciliation engine was built with tiered break tolerances — minor breaks (within 0.01% of NAV) auto-approved, significant breaks routed to the fund accounting team for investigation. The income equalisation module replaced the manual Excel process for all 12 funds.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Automation & Regulatory (Months 10–12)",
		desc: "The monthly close process was automated — NAV validation, expense ratio calculation, and fund reporting generated from the shadow accounting system. The close cycle was reduced from 3 business days to same-day. Regulatory fund reporting (AIFMD, UCITS KIID updates) was automated from the shadow accounting data.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Fund accounting errors", before: "Baseline", after: "-89%", change: "-89%" },
	{ metric: "Late NAV publications", before: "3 in prior 18 months", after: "0 since go-live", change: "Zero" },
	{ metric: "Daily NAV verification", before: "Not performed", after: "Automated daily", change: "Continuous" },
	{ metric: "Monthly close cycle", before: "3 business days", after: "Same day", change: "Same day" },
	{ metric: "Income equalisation accuracy", before: "Manual Excel", after: "Automated, auditable", change: "Auditable" },
	{ metric: "Regulator correspondence", before: "FCA correspondence received", after: "No regulatory findings", change: "Compliant" }
];

const SUCCESS_FACTORS = [
	{
		title: "Shadow accounting is oversight, not duplication",
		desc: "Delegating NAV calculation to an administrator without independently verifying the results is not oversight — it is trust without verification. Shadow accounting provides the independent verification that regulatory guidance expects and that fund governance requires."
	},
	{
		title: "Daily reconciliation catches errors when they are small",
		desc: "A discrepancy of 0.03% in a fund's NAV on day one, if undetected, compounds. Detecting it on day one allows a phone call to the administrator; detecting it four weeks later requires a corrected NAV, investor communications, and regulator notification. The value of the reconciliation is directly proportional to its frequency."
	},
	{
		title: "Close cycle automation removes the bottleneck",
		desc: "A 3-day monthly close driven by manual data collection and Excel calculations is not just slow — it is a risk. Errors in manual data collection compound. Automated close processes with data feeds and validation rules produce faster and more accurate results, and leave the fund accounting team's time available for exception review rather than routine data handling."
	}
];

const FAQS = [
	{
		q: "What is NAV in fund accounting?",
		a: "NAV (Net Asset Value) is the per-share or per-unit value of a fund — calculated as the total value of fund assets minus liabilities, divided by the number of shares or units outstanding. It is the price at which investors buy into and redeem from the fund. Accurate NAV calculation is a fundamental regulatory and investor protection requirement for authorised funds."
	},
	{
		q: "What is income equalisation in fund accounting?",
		a: "Income equalisation is an accounting mechanism used in funds to ensure that investors who join the fund mid-distribution period pay a fair price that accounts for the income accrued before they invested — preventing existing investors from having their income distribution diluted by new subscriptions. It requires the equalisation amount paid by each new investor to be tracked and returned to them as a return of capital in the first distribution."
	}
];

export default function FundAccountingCaseStudy() {
	return (
		<>
			<SEO
				title="Shadow Fund Accounting & NAV Reconciliation Case Study | OpenGridLabs"
				description="How Shadow NAV Automation Reduced Fund Accounting Errors 89% and Cut the Monthly Close from 3 Days to Same-Day."
				canonical="/services/bfsi/fund-accounting"
				keywords="Fund Accounting, Shadow NAV, NAV Calculation, Fund Administration, Shadow Accounting, NAV Reconciliation, Income Equalisation, UCITS, AIF, Financial Services, OpenGridLabs"
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
					title="How Shadow NAV Automation Reduced Fund Accounting Errors 89% and Cut the Monthly Close from 3 Days to Same-Day"
					description="An asset manager running 12 UCITS and AIF funds was relying entirely on its third-party fund administrator for NAV calculations without maintaining shadow books — creating a dependency that left the firm unable to independently verify its NAVs or identify errors before they affected investors. OpenGridLabs built a shadow fund accounting system: automated shadow NAV calculation, daily reconciliation against the administrator's figures, and an income equalisation module — reducing fund accounting errors 89% and eliminating the late NAV publications that had generated FCA correspondence."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Asset manager — fund management (anonymised)" },
						{ label: "Scale", value: "12 funds, £8.6B AUM" },
						{ label: "Timeline", value: "12 months" },
						{ label: "Stack", value: "Shadow accounting · NAV reconciliation · Income equalisation · Administrator API" }
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
						"Our client manages 12 authorised funds — eight UCITS and four AIFs — with total AUM of £8.6 billion. NAV calculation was entirely delegated to a third-party fund administrator, a standard arrangement in the industry. The problem was that the firm had no independent verification of the administrator's NAV figures — no shadow books, no independent calculation, and no systematic process for reconciling the administrator's output against the firm's own records. Errors in the administrator's NAV calculations had gone undetected for periods ranging from one day to four weeks before being identified through informal checks.",
						"The FCA had corresponded with the firm following three instances of late or corrected NAV publications in an 18-month period. While the administrator bore primary responsibility for the errors, the regulator expected the fund manager to have adequate oversight controls — which the absence of shadow accounting demonstrated it did not. The shadow accounting project was simultaneously a risk management improvement and a regulatory response.",
						"Shadow fund accounting is the practice of maintaining an independent, parallel set of fund books that replicate the fund administrator's NAV calculation. The shadow books allow the fund manager to independently verify the administrator's NAV and identify discrepancies on a daily basis."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Shadow NAV?"
					definitionText="Shadow fund accounting is the practice of maintaining an independent, parallel set of fund books that replicate the fund administrator's NAV calculation. The shadow books allow the fund manager to independently verify the administrator's NAV and identify discrepancies on a daily basis."
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
					description={"Replacing absolute trust in third-party administrators with automated validation, daily checks, and equalisation logic."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Shadow Fund Accounting Architecture"}
					description={"Parallel ledger feeds paired with automated valuation checking engines, discrepancy alert handlers, and compliance outputs."}
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
					description={"A systematic 3-phase roadmap leading from initial accounting engines to workflows integration and monthly close automation."}
					phaseColors={[ "hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)" ]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Minimizing admin errors, eliminating late NAV publications, and cutting close cycles to same-day."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Three corrected NAVs in eighteen months was a pattern that could become a regulatory enforcement action. The shadow accounting system gave us the independent verification we should always have had. We haven't had a late NAV publication since — not because the administrator is perfect, but because we catch their errors before they publish."}
					author={"Head of Fund Operations"}
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
					title={"Relying entirely on your administrator with no independent NAV verification?"}
					description={"OpenGridLabs builds shadow fund accounting systems — automated NAV calculation, daily reconciliation, and income equalisation — that catch administrator errors before they reach investors."}
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
