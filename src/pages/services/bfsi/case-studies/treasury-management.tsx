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
	{ value: "£180M", label: "Reduction in idle non-earning liquidity", accent: "from-emerald-500 to-teal-600" },
	{ value: "23%", label: "Reduction in short-term funding costs", accent: "from-amber-500 to-yellow-600" },
	{ value: "11 mo", label: "System live", accent: "from-blue-500 to-cyan-600" },
	{ value: "100%", label: "Basel III LCR reporting automated", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "End-of-day position reporting — no intraday cash visibility across 12 entities and 4 currencies" },
	{ text: "£220M average intraday idle cash in non-interest-bearing positions due to sweep timing" },
	{ text: "Manual Basel III LCR calculation — two analysts, two days per month, error-prone" },
	{ text: "FX exposure identified only at end of day — intraday hedging not possible" },
	{ text: "Cash sweep rules managed manually by the treasury team — time-consuming and inconsistent" }
];

const SOLUTIONS = [
	{ text: "Real-time cash position feeds from settlement systems, nostro accounts, and payment flows" },
	{ text: "A cash positioning engine consolidating all 12 entities in four currencies with intraday projection" },
	{ text: "Automated sweep rules executing cash movements to optimise interest earnings throughout the day" },
	{ text: "FX exposure calculation updated in real time enabling intraday hedging decisions" },
	{ text: "Automated Basel III LCR calculation and regulatory reporting from live position data" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Feeds", items: ["Settlement systems", "Nostro account feeds", "Payment flows", "FX rates", "Market data"], color: "hsl(38,100%,50%)" },
	{ title: "Position Engine", items: ["Real-time cash aggregation", "Multi-entity consolidation", "Currency conversion", "Intraday projection"], color: "hsl(145,100%,45%)" },
	{ title: "Automation", items: ["Sweep rule engine", "Investment triggers", "Funding triggers", "FX hedge signals", "Alerts"], color: "hsl(200,100%,50%)" },
	{ title: "Reporting", items: ["Basel III LCR / NSFR", "Internal dashboards", "Regulatory feeds", "Audit trails"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Integration & Position Engine (Months 1–4)",
		desc: "OpenGridLabs integrated the real-time data feeds from all settlement systems, nostro account providers, and payment processing platforms. The position engine was built to consolidate positions across all 12 entities in four currencies, with intraday projection capability based on confirmed and expected cash flows.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Sweep Automation & FX Visibility (Months 5–8)",
		desc: "The automated sweep rule engine was built and configured with the treasury team's optimisation logic — replacing the manual sweep process with rules-based automation executing sweeps throughout the day. FX exposure was integrated into the real-time position view, enabling the team to see intraday FX risk for the first time.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Regulatory Reporting & Go-Live (Months 9–11)",
		desc: "Basel III LCR and NSFR calculations were automated from live position data, replacing the manual spreadsheet process. The regulatory reporting module was validated against the regulator's calculation methodology and signed off by the bank's finance team before live regulatory submissions began.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Intraday idle liquidity", before: "~£220M average", after: "~£40M average", change: "-£180M" },
	{ metric: "Short-term funding cost", before: "Baseline", after: "-23%", change: "-23%" },
	{ metric: "Basel III LCR reporting", before: "Manual (4 analyst-days/month)", after: "Automated", change: "Automated" },
	{ metric: "Intraday cash visibility", before: "End-of-day only", after: "Real-time", change: "Real-time" },
	{ metric: "Treasury team operational capacity", before: "Majority on reporting", after: "Freed for strategic decisions", change: "Freed capacity" },
	{ metric: "FX hedge accuracy", before: "End-of-day hedging", after: "Intraday precision", change: "Intraday precision" }
];

const SUCCESS_FACTORS = [
	{
		title: "Real-time visibility enables real-time decisions",
		desc: "The entire value of the treasury management system rested on a single premise: you cannot optimise what you cannot see. End-of-day positions are interesting for reporting; real-time positions are the input to every funding, investment, and hedging decision that has commercial value."
	},
	{
		title: "Automated sweep rules compound over time",
		desc: "A manual sweep process executed once or twice a day captures a fraction of the optimisation opportunity available from continuous automated sweeps. The compound effect of sweeping cash to interest-bearing positions throughout the day — rather than at end of day — was the mechanism that produced the £180M idle liquidity reduction."
	},
	{
		title: "Regulatory reporting automation is a capacity multiplier",
		desc: "Two analysts spending four days per month on LCR calculations are four days per month not doing analytics, risk monitoring, or strategic treasury work. Automating the calculation and report generation returned that capacity to higher-value work — a cost saving and a quality improvement simultaneously."
	}
];

const FAQS = [
	{
		q: "What is the Liquidity Coverage Ratio (LCR) in Basel III?",
		a: "The LCR is a Basel III regulatory requirement specifying that a bank must hold sufficient high-quality liquid assets (HQLA) to cover its net cash outflows over a 30-day stress scenario. It is calculated as HQLA divided by net stressed cash outflows and must be at or above 100%. Banks must report their LCR to their regulator on a regular basis."
	},
	{
		q: "What is a cash sweep in treasury management?",
		a: "A cash sweep is an automated cash management tool that moves funds between accounts — typically from operational accounts to interest-bearing investment accounts — at defined trigger points. Automated sweeps ensure that cash earns a return throughout the day rather than sitting idle in non-interest-bearing accounts pending manual movement."
	}
];

export default function TreasuryManagementCaseStudy() {
	return (
		<>
			<SEO
				title="Real-Time Treasury & Liquidity Management Case Study | OpenGridLabs"
				description="How Real-Time Treasury Visibility Reduced Idle Liquidity by £180M and Cut Funding Costs 23%."
				canonical="/services/bfsi/treasury-management"
				keywords="Treasury Management, TMS, Cash Management, Liquidity Management, Basel III, LCR, Intraday Liquidity, Cash Positioning, ALM, Banking Technology, OpenGridLabs"
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
					title="How Real-Time Treasury Visibility Reduced Idle Liquidity by £180M and Cut Funding Costs 23%"
					description="A corporate bank's treasury function was operating with end-of-day cash positions — unable to see intraday liquidity in real time, with significant idle cash sitting in non-interest-bearing accounts throughout the day. Manual processes for cash sweeps, funding decisions, and regulatory reporting were consuming the treasury team's capacity. OpenGridLabs built a real-time treasury management system that gave the team continuous visibility, automated sweep rules, and automated Basel III LCR reporting."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Corporate bank (anonymised)" },
						{ label: "Scale", value: "£8.4B balance sheet, 12 entities" },
						{ label: "Timeline", value: "11 months" },
						{ label: "Stack", value: "Real-time feeds · Cash positioning engine · Sweep automation · Regulatory reporting" }
					]}
				/>

					<CaseStudyCarousel
													slug="treasury-management"
													title="Treasury Management"
													accentColor="pink"
													aspectRatioClass="aspect-[3/2]"
													images={[
														"/images/case-studies/treasury-management/1.jpg",
														"/images/case-studies/treasury-management/2.jpg"
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
						"Our client is a corporate bank with an £8.4 billion balance sheet across 12 legal entities in four currencies. The treasury team was managing liquidity using end-of-day position reports generated from the core banking system — spreadsheets distributed by email each morning showing the previous day's closing positions. Intraday cash visibility required manually calling settlement desks and operations teams to compile a position estimate. Funding decisions — whether to borrow or invest surplus — were made on incomplete information.",
						"The consequence was structural inefficiency: cash accumulated in non-interest-bearing nostro and settlement accounts throughout the day before end-of-day sweeps moved it to interest-bearing positions. The average intraday idle balance — cash sitting in non-earning positions that could have been swept or invested — was estimated at £220M. Regulatory reporting for Basel III LCR was prepared manually from multiple source systems by a team of two analysts working two days per month.",
						"Treasury management in banking encompasses the functions of managing the institution's liquidity, funding, and financial risk — ensuring sufficient liquid assets to meet obligations, optimising the placement of surplus funds, managing interest rate and FX risk, and complying with regulatory requirements including Basel III liquidity ratios."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is Treasury Management?"
					definitionText="Treasury management in banking encompasses the functions of managing the institution's liquidity, funding, and financial risk — ensuring sufficient liquid assets to meet obligations, optimising the placement of surplus funds, managing interest rate and FX risk, and complying with regulatory requirements including Basel III liquidity ratios."
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
					description={"Enabling real-time multi-entity visibility, optimizing idle cash sweeps, and automating LCR reporting."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Treasury Management System Architecture"}
					description={"Real-time position engine consolidated across entities and currencies, feeding automated optimization sweeps and regulatory metrics."}
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
					description={"A systematic 3-phase roadmap leading from initial data integration to sweep automation and live regulator-approved LCR calculation."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Intraday cash aggregation and automated sweep rules reducing idle liquidity dramatically."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We didn't know how much money was sitting idle in the middle of the day. Once we could see it in real time, we could act on it. The £180M reduction in idle liquidity wasn't a project outcome — it was the consequence of visibility we'd never had before."}
					author={"Group Treasurer"}
					subtitle={"Confidential Corporate Bank"}
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
					title={"Treasury team managing £Bn balance sheets on yesterday's position reports?"}
					description={"OpenGridLabs builds real-time treasury management systems — intraday cash visibility, automated sweep rules, and regulatory reporting automation — that turn idle liquidity into earning assets."}
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
