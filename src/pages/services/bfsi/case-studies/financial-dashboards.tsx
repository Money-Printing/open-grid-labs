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
	{ value: "68%", label: "Reduction in reporting preparation time", accent: "from-emerald-500 to-teal-600" },
	{ value: "Real-time", label: "P&L and risk data, from morning email pack", accent: "from-emerald-500 to-teal-600" },
	{ value: "8 mo", label: "Full dashboard suite live", accent: "from-emerald-500 to-teal-600" },
	{ value: "2.8 FTE", label: "Reporting capacity returned to analysis", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "48-page PowerPoint management pack taking 3 analyst-days to produce each week" },
	{ text: "Data presented to management 18–24 hours old — stale for intraday decision-making" },
	{ text: "No single dashboard for any metric — each metric requiring navigation to a different system" },
	{ text: "2.8 FTE consumed in data extraction, reconciliation, and formatting rather than analysis" },
	{ text: "No alerting — managers only aware of metric changes when the weekly pack arrived" }
];

const SOLUTIONS = [
	{ text: "Real-time P&L dashboard — intraday position-level and strategy-level P&L updated on market ticks" },
	{ text: "Risk dashboard — live VaR, factor exposures, limit utilisation, and scenario P&L" },
	{ text: "Fund performance dashboard — daily NAV, attribution, and peer benchmark comparison" },
	{ text: "Executive MI dashboard — consolidated key metrics across all functions for management committee" },
	{ text: "Automated distribution — daily email digest and weekly PDF pack generated automatically, eliminating manual production" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Layer", items: ["7 source integrations", "Real-time feeds", "Daily batch feeds", "Historical warehouse"], color: "hsl(145,100%,40%)" },
	{ title: "Processing Engine", items: ["Metric calculations", "Aggregation rules", "Alert thresholds", "Data quality checks"], color: "hsl(145,100%,40%)" },
	{ title: "Presentation", items: ["Real-time dashboards", "Drill-down analytics", "Scenario tools", "Historical trends"], color: "hsl(145,100%,40%)" },
	{ title: "Distribution", items: ["Automated digests", "Weekly PDF packs", "Mobile-optimised views", "Alert notifications"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Integration & P&L (Months 1–3)",
		desc: "OpenGridLabs built the data integration layer connecting all seven source systems and delivered the real-time P&L dashboard — the highest-priority item for the management team. The P&L dashboard provided intraday position-level and strategy-level P&L views that the management team had never had access to between morning reports.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Risk & Fund Performance (Months 4–6)",
		desc: "The risk dashboard was built with live VaR, factor exposure, and limit utilisation views. The fund performance dashboard provided daily NAV, performance attribution, and peer benchmark comparison for each fund. Both were reviewed by senior risk and investment management before going live.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Executive MI & Automation (Months 7–8)",
		desc: "The executive MI dashboard aggregated key metrics across all functions into a single view designed for the management committee. The automated daily email digest and weekly PDF pack were configured, eliminating the manual production process. An alert framework was implemented for key metric thresholds — immediately notifying relevant managers of limit breaches or significant P&L moves.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Reporting preparation time", before: "3 analyst-days/week", after: "<1 day (automated)", change: "-68%" },
	{ metric: "P&L data currency", before: "18–24 hours old", after: "Real-time intraday", change: "Real-time intraday" },
	{ metric: "Management committee data quality", before: "Prior-day only", after: "Real-time available", change: "Real-time available" },
	{ metric: "Analyst time on data production", before: "2.8 FTE", after: "<0.5 FTE", change: "Capacity returned" },
	{ metric: "Metric alert coverage", before: "Weekly pack only", after: "Real-time alerts", change: "Threshold alerts" },
	{ metric: "FCA MI review finding", before: "Observations expected", after: "Zero findings", change: "Zero findings" }
];

const SUCCESS_FACTORS = [
	{
		title: "Real-time data changes the category of decision available",
		desc: "A management team reviewing daily reports can make daily decisions. A management team with real-time dashboards can make intraday decisions. These are different categories of decisions — and in a financial services firm, the intraday category frequently contains the highest-value decisions."
	},
	{
		title: "Design around decisions, not around data",
		desc: "A management dashboard designed around what data is available produces a data dump that managers don't use. A dashboard designed around what decisions managers need to make produces a tool they check before every significant action. The design process started with 'what decisions does this enable?' rather than 'what data can we show?'"
	},
	{
		title: "Automated distribution eliminates the reporting bottleneck permanently",
		desc: "Manual reporting processes re-introduce themselves after automation: analysts start adding new metrics, new tabs, new breakdowns. Automated distribution with a defined metric set and a structured change process prevents the accretion of manual work over time — the 2.8 FTE saving is maintained rather than slowly recaptured."
	}
];

const FAQS = [
	{
		q: "What is the difference between a financial dashboard and a financial report?",
		a: "A financial report is a document — static, produced periodically, designed for retrospective review. A financial dashboard is a real-time, interactive display of live metrics designed for ongoing monitoring and decision support. Reports tell you what happened; dashboards show you what is happening."
	},
	{
		q: "What is P&L attribution in financial services?",
		a: "P&L attribution is the decomposition of a portfolio's or strategy's profit and loss into its contributing factors — market movements, currency effects, trading activity, management fees, and other components. Attribution allows management to understand the sources of P&L, distinguish between structural returns and trading activity, and compare performance across strategies on a consistent basis."
	}
];

export default function FinancialDashboardsCaseStudy() {
	return (
		<>
			<SEO
				title="Real-Time Financial Dashboards Case Study | OpenGridLabs"
				description="How Real-Time Financial Dashboards Reduced Senior Management Reporting Time 68% and Enabled Intraday Decisions."
				canonical="/services/bfsi/financial-dashboards"
				keywords="Financial Dashboards, Real-Time P&L, Risk Dashboard, Fund Performance, Executive MI, Management Information, BI Financial Services, Intraday Analytics, Financial Reporting, Financial Services, OpenGridLabs"
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
					title="How Real-Time Financial Dashboards Reduced Senior Management Reporting Time 68% and Enabled Intraday Decisions"
					description="A financial services firm was producing its senior management information through a manual process — analysts extracting data from multiple systems, building PowerPoint packs, and emailing them to the management committee the morning before each meeting. The information was accurate but stale, and the preparation was consuming 2.8 FTEs. OpenGridLabs built real-time financial dashboards for P&L, risk, fund performance, and operational metrics — replacing the manual pack with live data and reducing preparation time 68%."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Financial services firm (anonymised)" },
						{ label: "Scope", value: "Executive MI · P&L · Risk · Fund performance · Operations" },
						{ label: "Timeline", value: "8 months" },
						{ label: "Stack", value: "Real-time data · BI platform · Custom dashboards · Automated distribution" }
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
						"Our client's senior management committee met weekly and received a management information pack — a 48-page PowerPoint document covering P&L by strategy, fund performance, risk metrics, operational KPIs, and compliance indicators. The pack was produced by a team of analysts who spent three days extracting data from seven source systems, reconciling, and formatting. The result was accurate and comprehensive, but represented a snapshot of data from the previous day — and by the time it was presented, market conditions might have moved significantly.",
						"The 2.8 FTE cost of producing the pack was the operational problem; the data staleness was the strategic problem. In a financial services firm, a management committee reviewing P&L data from the previous day's close cannot make intraday decisions about risk, exposure, or resource allocation. The management information was useful for retrospective review but not for the proactive management that the firm's risk profile required. The dashboard programme addressed both problems simultaneously.",
						"Financial management dashboards are real-time, interactive visual displays of an organisation's key financial and operational metrics — P&L, risk exposures, fund performance, liquidity, and operational KPIs. Unlike static reports produced periodically, dashboards draw live data."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Are Dashboards?"
					definitionText="Financial management dashboards are real-time, interactive visual displays of an organisation's key financial and operational metrics — P&L, risk exposures, fund performance, liquidity, and operational KPIs. Unlike static reports produced periodically, dashboards draw live data."
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
					description={"Replacing weekly manual PowerPoint updates with real-time aggregated metrics and threshold alerting."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Financial Dashboard Architecture"}
					description={"Consolidated source integrations supplying aggregate metric engines, interactive reports, and automated notification scripts."}
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
					description={"A systematic 3-phase roadmap leading from initial database mappings to core risk reports and automated distributions."}
					phaseColors={[ "hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)" ]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Minimizing manual reporting overheads, ensuring fresh daily metrics, and freeing analyst capacity."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The management committee went from reviewing yesterday's data to monitoring today's. That sounds like an obvious improvement, but the decisions it changed — cutting a losing position at 11am instead of the next morning — had direct financial impact. The 68% reduction in reporting time was almost secondary."}
					author={"Chief Operating Officer"}
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
					title={"Management committee reviewing yesterday's data for today's decisions?"}
					description={"OpenGridLabs builds financial management dashboards — real-time P&L, risk, fund performance, and executive MI — that make intraday decisions possible and eliminate manual pack production."}
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
