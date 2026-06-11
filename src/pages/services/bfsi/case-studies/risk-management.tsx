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
	{ value: "180 bps", label: "Estimated drawdown prevented by intraday alert", accent: "from-emerald-500 to-teal-600" },
	{ value: "Real-time", label: "Risk monitoring, from end-of-day", accent: "from-emerald-500 to-teal-600" },
	{ value: "11 mo", label: "System in production", accent: "from-emerald-500 to-teal-600" },
	{ value: "100%", label: "Intraday limit breach alerts automated", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "End-of-day risk reporting — intraday risk build-up not visible until the next morning" },
	{ text: "VaR calculated in spreadsheets overnight — not scalable, not reproducible, error-prone" },
	{ text: "No intraday limit monitoring — risk limits checked once a day against overnight positions" },
	{ text: "Factor risk decomposition not performed — concentration risks not systematically measured" },
	{ text: "Stress testing not performed — scenario analysis done ad hoc rather than systematically" }
];

const SOLUTIONS = [
	{ text: "Real-time position feed and intraday VaR/CVaR calculation updated throughout the trading day" },
	{ text: "Factor risk decomposition — equity, interest rate, credit, FX, and sector factor exposures" },
	{ text: "Automated limit monitoring with tiered alerts at 75%, 90%, and 100% of limit utilisation" },
	{ text: "Systematic stress testing — historical scenarios and hypothetical shocks run against live positions" },
	{ text: "Risk dashboard for portfolio managers — live risk view accessible during the trading session" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Position Feed", items: ["Intraday trade blotter", "OMS integration", "FX rates", "Pricing", "Benchmark weights"], color: "hsl(145,100%,40%)" },
	{ title: "Risk Engine", items: ["VaR/CVaR (historical simulation)", "Factor risk decomposition", "Correlation matrix", "Greeks"], color: "hsl(145,100%,40%)" },
	{ title: "Limit Management", items: ["Limit hierarchy", "Intraday monitoring", "Tiered alert engine", "Breach workflow", "Audit log"], color: "hsl(145,100%,40%)" },
	{ title: "Reporting", items: ["Portfolio manager dashboard", "Risk committee pack", "Regulatory risk reporting", "Stress test results"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Real-time Position Feed & VaR Engine (Months 1–4)",
		desc: "OpenGridLabs built the intraday position feed integrating the order management system and trade blotter, and implemented the historical simulation VaR/CVaR engine. The engine was calibrated against the spreadsheet-based system during a parallel run, with discrepancies investigated and resolved.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Factor Risk & Limit Monitoring (Months 5–8)",
		desc: "The factor risk decomposition model was implemented across all four strategies — equity factor exposures, interest rate duration and convexity, credit spread sensitivity, and FX delta. The intraday limit monitoring engine was configured with the firm's risk limit hierarchy and tested against historical limit breach scenarios.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Stress Testing & PM Tools (Months 9–11)",
		desc: "The systematic stress testing framework was implemented — 40 historical scenarios and 20 hypothetical scenarios calibrated to the multi-asset strategies' specific risk characteristics. The portfolio manager risk dashboard was delivered, providing live intraday risk visibility accessible during the trading session.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Intraday risk visibility", before: "None (end-of-day only)", after: "Continuous throughout session", change: "Continuous" },
	{ metric: "VaR calculation method", before: "Spreadsheet (overnight)", after: "Real-time automated engine", change: "Automated engine" },
	{ metric: "Limit breach detection time", before: "Next day", after: "Intraday (immediate)", change: "Immediate alert" },
	{ metric: "Factor risk coverage", before: "Ad hoc", after: "Systematic across all strategies", change: "Systematic" },
	{ metric: "Stress test frequency", before: "Ad hoc", after: "Daily systematic", change: "Daily systematic" },
	{ metric: "Risk team capacity on reports", before: "~60% of time", after: "~20% (automated)", change: "Reduced to 20%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Intraday risk is structurally different from end-of-day risk",
		desc: "End-of-day positions represent a static snapshot. Intraday positions change continuously through trading, rebalancing, and corporate actions. A risk system that only measures risk once a day is blind to the majority of the risk-relevant events that occur during the trading session."
	},
	{
		title: "Automated limit alerts change the risk culture",
		desc: "A risk limit that is checked once a day by a person reading a report is a limit that will be breached between reports with no timely response. A limit that generates an automated alert when 90% utilised is a limit that can be acted on — by the right person, at the right time, with enough market session remaining to correct it."
	},
	{
		title: "Reproducibility is the risk framework's credibility",
		desc: "A VaR calculation performed by a different analyst each day in a spreadsheet may produce different results due to methodological inconsistency. A standardised, automated calculation that produces the same result from the same inputs builds credibility with risk committees, boards, and regulators."
	}
];

const FAQS = [
	{
		q: "What is the difference between VaR and CVaR?",
		a: "VaR (Value at Risk) estimates the maximum loss not exceeded at a given confidence level (e.g. 99% VaR) over a defined horizon. CVaR (Conditional Value at Risk, also called Expected Shortfall) estimates the average loss in the tail beyond the VaR threshold — the expected loss in the worst 1% of scenarios. CVaR is a more conservative and coherent risk measure that better captures extreme loss potential."
	},
	{
		q: "What is factor risk decomposition?",
		a: "Factor risk decomposition splits a portfolio's total risk (variance) into the contribution from each systematic risk factor — equity market exposure, interest rate duration, credit spread sensitivity, FX exposure, and sector exposures — versus idiosyncratic (security-specific) risk. It allows risk managers to identify the primary sources of portfolio risk and ensure positions are taken intentionally."
	}
];

export default function RiskManagementCaseStudy() {
	return (
		<>
			<SEO
				title="Real-Time Risk Monitoring Case Study | OpenGridLabs"
				description="How Real-Time Risk Monitoring Caught a Concentration Risk Before the Market Moved and Prevented an Estimated 180bps Drawdown."
				canonical="/services/bfsi/risk-management"
				keywords="Risk Management, VaR, CVaR, Real-Time Risk, Factor Risk, Stress Testing, Limit Monitoring, Market Risk, Portfolio Risk, Financial Services, OpenGridLabs"
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
					title="How Real-Time Risk Monitoring Caught a Concentration Risk Before the Market Moved and Prevented an Estimated 180bps Drawdown"
					description="An asset manager's risk management process ran on end-of-day reports — risks identified overnight, reviewed the following morning. When a sector concentration built up during an intraday market movement, it wasn't visible until the next day's report. OpenGridLabs built a real-time risk system: intraday VaR, CVaR, factor risk decomposition, and live limit monitoring that surfaced a critical technology sector concentration during the trading day, before the subsequent market correction that would have produced an estimated 180bps drawdown."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Asset manager (anonymised)" },
						{ label: "AUM", value: "$8.2B, 4 multi-asset strategies" },
						{ label: "Timeline", value: "11 months" },
						{ label: "Stack", value: "Real-time risk · VaR/CVaR · Factor risk · Stress testing · Limit management" }
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
						"Our client manages $8.2 billion across four multi-asset strategies. Risk management was performed using end-of-day position files — a risk team of four analysts running VaR calculations overnight in a spreadsheet-based system and distributing a morning risk report to portfolio managers. The process worked for slow-moving risks but was structurally incapable of identifying intraday risk build-up before market sessions closed.",
						"The specific incident that drove the engagement: a large equity sector position built up during a volatile trading day through a combination of index rebalancing and active trades. The concentration was not identified until the next morning's risk report — by which time the sector had moved significantly. The estimated portfolio impact was approximately 180 basis points across the relevant strategies. The risk team had operated within their process correctly; the process itself was not capable of providing timely enough information for the risk to have been managed.",
						"Real-time risk management provides continuous, intraday visibility of portfolio risk metrics — Value at Risk, Conditional Value at Risk, factor exposures, sector concentrations, and limit utilisation — rather than relying on end-of-day position files. It enables risk limits to be monitored throughout the trading day and alerts to be generated when limits approach or breach, allowing portfolio managers to take corrective action before market sessions close and positions crystallise."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Real-Time Risk Management?"
					definitionText="Real-time risk management provides continuous, intraday visibility of portfolio risk metrics — Value at Risk, Conditional Value at Risk, factor exposures, sector concentrations, and limit utilisation — rather than relying on end-of-day position files. It enables risk limits to be monitored throughout the trading day and alerts to be generated when limits approach or breach, allowing portfolio managers to take corrective action before market sessions close and positions crystallise."
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
					description={"Moving past static end-of-day risk matrices to real-time risk alert handlers and systematic factor shock scenarios."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Real-Time Risk Management Architecture"}
					description={"OMS trades and FX quotes feeding into continuous historical simulation calculations, limit checking triggers, and risk committees' reports."}
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
					description={"A systematic 3-phase roadmap leading from baseline simulation engines and feed integrations to live PM dashboard tools."}
					phaseColors={[ "hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)" ]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Transforming EOD models to continuous session views and automating limit alerts."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The technology sector alert came through at 2:15pm. We reduced the position before the close. The next morning the sector was down 3.4%. If we hadn't had the real-time system, we wouldn't have seen the concentration until it was too late. That one alert justified the entire investment."}
					author={"Chief Risk Officer"}
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
					title={"Finding out about risk concentrations the morning after they built up?"}
					description={"OpenGridLabs builds real-time risk management systems — intraday VaR, factor risk decomposition, and automated limit alerts — that surface risks during the session, not after it."}
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
