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
	{ value: "74%", label: "Reduction in counterparty valuation disputes", accent: "from-emerald-500 to-teal-600" },
	{ value: "40K", label: "Instruments priced in real-time", accent: "from-emerald-500 to-teal-600" },
	{ value: "13 mo", label: "Pricing engine live", accent: "from-emerald-500 to-teal-600" },
	{ value: "4 hr", label: "Nightly batch eliminated — intraday pricing", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "End-of-day batch pricing taking 4 hours — no intraday pricing capability" },
	{ text: "Inconsistent volatility surfaces across desks producing different prices for the same underlying" },
	{ text: "Counterparty valuation disputes requiring manual reconciliation and occasional cash settlement" },
	{ text: "Greeks calculated separately from pricing — inconsistent methodologies producing hedging mismatches" },
	{ text: "40,000 instruments with no unified model inventory — models maintained ad hoc per desk" }
];

const SOLUTIONS = [
	{ text: "A unified pricing library — Black-Scholes, SABR, local vol, Hull-White, and Monte Carlo engine" },
	{ text: "Centralised SABR volatility surface calibration — consistent vol surface across all desks and products" },
	{ text: "Real-time pricing engine recalculating the full book on market data ticks — intraday P&L and Greeks" },
	{ text: "Automated valuation dispute resolution — pricing run at agreed model parameters for counterparty comparison" },
	{ text: "A model inventory governance framework — model documentation, validation, and change management" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Market Data", items: ["Volatility surfaces", "Rate curves", "Spot prices", "Dividend schedules", "Repo rates", "Real-time feeds"], color: "hsl(145,100%,40%)" },
	{ title: "Calibration", items: ["SABR calibration", "Curve bootstrapping", "Parameter optimization", "Daily sign-off"], color: "hsl(145,100%,40%)" },
	{ title: "Pricing Library", items: ["Black-Scholes", "SABR model", "Local vol", "Hull-White", "Monte Carlo", "Payoff scripts"], color: "hsl(145,100%,40%)" },
	{ title: "Risk", items: ["Greeks calculation", "Scenario P&L", "Stress testing", "Valuation adjustments (CVA/DVA)", "Limits"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Library & Volatility Surface (Months 1–5)",
		desc: "OpenGridLabs built the unified pricing library covering all instrument types in the portfolio and implemented the centralised SABR volatility surface calibration process. A model validation framework was established, with each model's output compared against the desk's prior spreadsheet models during a 90-day parallel run.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Real-time Engine & Greeks (Months 6–10)",
		desc: "The real-time pricing engine was built to recalculate the full 40,000-instrument book on market data ticks, with Greeks calculated consistently from the same model parameters as the prices. Performance optimisation — parallel computation, selective recalculation on vol surface changes — achieved sub-second full-book repricing.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Dispute Framework & Governance (Months 11–13)",
		desc: "An automated valuation dispute resolution workflow was built — when a dispute is raised by a counterparty, both parties' prices are recomputed at agreed reference market data and model parameters, allowing the source of the discrepancy to be identified precisely. The model governance framework documented all models, their validation status, and their approved use cases.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Counterparty valuation disputes", before: "Baseline", after: "-74%", change: "-74%" },
	{ metric: "Intraday pricing capability", before: "None (end-of-day batch)", after: "Real-time on tick", change: "Real-time on tick" },
	{ metric: "Nightly batch pricing duration", before: "4 hours", after: "Eliminated", change: "Eliminated" },
	{ metric: "Greeks calculation consistency", before: "Desk-by-desk (inconsistent)", after: "Unified from pricing model", change: "Unified" },
	{ metric: "Model documentation coverage", before: "~30% of models", after: "100% documented", change: "Full compliance" },
	{ metric: "Dispute resolution time", before: "Days (manual)", after: "Hours (automated framework)", change: "Hours (automated)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Centralised vol surface calibration is the highest-leverage single change",
		desc: "Most vanilla derivatives valuation disputes between firms using the same model family (Black-Scholes, SABR) are caused by different volatility surface calibrations. A single, well-calibrated, consistently maintained volatility surface eliminates these disputes at the source rather than resolving them case by case."
	},
	{
		title: "Real-time Greeks enable real-time hedging",
		desc: "Delta hedging is only as good as the delta calculation driving it. A delta calculated from end-of-day prices and used for next-day hedging is exposed to overnight moves. Real-time delta calculation from a continuously recalibrated vol surface enables continuous hedging adjustment throughout the trading session."
	},
	{
		title: "Model governance is not bureaucracy — it is liability management",
		desc: "An undocumented model that produces incorrect prices is a financial and regulatory liability. Model documentation, validation, and change management produce an audit trail that demonstrates appropriate professional standards were applied — essential for both regulatory examination and counterparty dispute resolution."
	}
];

const FAQS = [
	{
		q: "What is SABR volatility surface calibration?",
		a: "SABR (Stochastic Alpha Beta Rho) is a stochastic volatility model widely used for options pricing that produces a consistent volatility smile across strikes and expiries. Calibration is the process of fitting the model's parameters to observed market option prices so that the model reproduces the market-implied volatility surface, enabling consistent pricing of instruments across the full strike and expiry space."
	},
	{
		q: "What are Greeks in derivatives pricing?",
		a: "Greeks are the sensitivities of a derivative's price to changes in its underlying risk factors: delta (sensitivity to underlying price), gamma (rate of change of delta), vega (sensitivity to implied volatility), theta (time decay), and rho (sensitivity to interest rates). They are used by derivatives desks to hedge positions and manage risk at the portfolio level."
	}
];

export default function DerivativesPricingCaseStudy() {
	return (
		<>
			<SEO
				title="Derivatives Pricing Engine & Valuation Case Study | OpenGridLabs"
				description="How a Real-Time Derivatives Pricing Engine Reduced Valuation Disputes 74% and Enabled Intraday Risk Management."
				canonical="/services/bfsi/derivatives-pricing"
				keywords="Derivatives Pricing, Options Pricing, SABR Volatility, Black-Scholes, Monte Carlo Simulation, Greeks Calculation, Real-Time Pricing, Derivatives Valuation, Structured Products, Financial Services, OpenGridLabs"
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
					title="How a Real-Time Derivatives Pricing Engine Reduced Valuation Disputes 74% and Enabled Intraday Risk Management"
					description="A financial services firm managing a derivatives portfolio of 40,000 instruments was valuing its book using end-of-day batch pricing — a process taking 4 hours nightly, with model inconsistencies between desks producing frequent valuation disputes with counterparties. OpenGridLabs built a real-time pricing engine: SABR volatility surface calibration, Black-Scholes and local vol models, Monte Carlo simulation for complex payoffs, and real-time Greeks calculation — reducing valuation disputes 74% and enabling intraday risk management for the first time."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Financial services / derivatives desk (anonymised)" },
						{ label: "Scope", value: "40,000 instruments across options, swaps, structured products" },
						{ label: "Timeline", value: "13 months" },
						{ label: "Stack", value: "SABR · Black-Scholes · Monte Carlo · Real-time Greeks · Valuation dispute resolution" }
					]}
				/>

				<CaseStudyCarousel
					slug="derivatives-pricing"
					title="Derivatives Pricing"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/derivatives-pricing/1.jpg",
						"/images/case-studies/derivatives-pricing/2.jpg"
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
						"Our client operates a derivatives desk managing 40,000 instruments — equity and index options, interest rate swaps, credit default swaps, FX forwards, and a portfolio of structured products with complex payoffs. The pricing infrastructure was a combination of desk-specific spreadsheet models and a legacy batch pricing system running nightly. Different desks were using inconsistent volatility surface calibrations, producing different prices for the same underlying that resulted in valuation disputes with counterparties and internal inconsistencies in the risk aggregation.",
						"The operational problems had a direct financial cost. Counterparty valuation disputes — where the firm's mid-market price and the counterparty's mid-market price differed by more than agreed tolerances — required escalation, manual reconciliation, and occasionally cash settlement of the difference. The disputes were costing the firm in both direct financial settlement and operational time. The underlying cause was inconsistent model calibration: each desk maintaining its own volatility surfaces, updated on different frequencies with different methodologies.",
						"A derivatives pricing engine is a system that calculates the fair value of derivative instruments using financial models — Black-Scholes for European options, local and stochastic volatility models for exotic options, Monte Carlo simulation for path-dependent and complex structured payoffs."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is a Pricing Engine?"
					definitionText="A derivatives pricing engine is a system that calculates the fair value of derivative instruments using financial models — Black-Scholes for European options, local and stochastic volatility models for exotic options, Monte Carlo simulation for path-dependent and complex structured payoffs."
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
					description={"Eliminating batch pricing delays, unifying volatility surfaces across desks, and automating dispute resolutions."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Derivatives Pricing Engine Architecture"}
					description={"Centralised volatility calibration curves feeding option valuation libraries, Greek sensitivity computations, and stress scenarios."}
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
					description={"A systematic 3-phase roadmap leading from initial library setup to real-time Greeks and live dispute workflow deployment."}
					phaseColors={["hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)"]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Minimizing valuation discrepancies with centralized curve calibrations and enabling real-time Greek hedging."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"Valuation disputes are expensive in time, in money, and in counterparty relationships. Most of ours were caused by inconsistent volatility surfaces — the same underlying, priced at different vols by different desks. One calibration, updated centrally, eliminated most of them immediately."}
					author={"Head of Derivatives"}
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
					title={"Counterparty disputes from inconsistent volatility surfaces?"}
					description={"OpenGridLabs builds derivatives pricing engines — centralised SABR calibration, real-time Greeks, and valuation dispute resolution — that price 40,000 instruments consistently and intraday."}
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
