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
	{ value: "34 bps", label: "Reduction in average market impact", accent: "from-emerald-500 to-teal-600" },
	{ value: "28%", label: "Reduction in total execution cost", accent: "from-emerald-500 to-teal-600" },
	{ value: "$6B", label: "Annual execution volume on platform", accent: "from-emerald-500 to-teal-600" },
	{ value: "12 mo", label: "Architecture to live trading", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "100% reliance on opaque broker algorithms — no visibility into execution logic or performance" },
	{ text: "No transaction cost analysis — execution quality never systematically measured" },
	{ text: "No backtesting infrastructure — algorithm parameter settings not optimised for the firm's order flow" },
	{ text: "Execution cost estimated at 47 bps implementation shortfall — well above benchmark" },
	{ text: "No direct market access — all orders intermediated through brokers at premium cost" }
];

const SOLUTIONS = [
	{ text: "Proprietary execution platform with VWAP, TWAP, and Implementation Shortfall algorithms" },
	{ text: "Backtesting infrastructure allowing parameter optimisation against 3 years of historical order data" },
	{ text: "Direct market access connectivity to 14 equity markets via FIX protocol and co-location" },
	{ text: "Smart order routing selecting optimal execution venue per order and market condition" },
	{ text: "Transaction cost analysis reporting measuring pre-trade, in-flight, and post-trade execution quality" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Market Connectivity", items: ["FIX protocol", "Exchange gateways", "Co-location", "Dark pools", "MTFs"], color: "hsl(145,100%,40%)" },
	{ title: "Order Management", items: ["Order splitting", "Child order management", "Position tracking", "Risk checks", "Pre-trade TCA"], color: "hsl(145,100%,40%)" },
	{ title: "Algorithms", items: ["VWAP", "TWAP", "Implementation Shortfall", "Adaptive IS", "Liquidity seeking"], color: "hsl(145,100%,40%)" },
	{ title: "Analytics", items: ["Post-trade TCA", "Execution benchmarks", "Algo monitoring", "Backtesting engine"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Connectivity & Infrastructure (Months 1–4)",
		desc: "OpenGridLabs established the co-location infrastructure, FIX connectivity to the primary execution venues, and the order management system. The backtesting infrastructure was built against a 3-year historical order and market data set, enabling algorithm development to be evaluated against real order flow from the start.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Algorithm Development & Backtesting (Months 5–9)",
		desc: "VWAP, TWAP, and Implementation Shortfall algorithms were built and backtested. Parameter settings — participation rates, spread thresholds, dark pool usage — were optimised against the firm's specific order size distribution and market impact profile. The algorithms were deployed initially in paper-trading mode alongside broker execution.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Live Trading & TCA (Months 10–12)",
		desc: "Live trading began with the proprietary algorithms, initially for liquid large-cap orders. The TCA framework measured execution performance weekly. Full migration from broker algorithms to proprietary execution was completed by month 12 for all covered markets.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Implementation shortfall (average)", before: "47 bps", after: "13 bps", change: "-34 bps" },
	{ metric: "Total execution cost", before: "Baseline", after: "-28%", change: "-28%" },
	{ metric: "Broker algorithm dependency", before: "100%", after: "<15%", change: "Specialist only" },
	{ metric: "TCA coverage", before: "0% (not measured)", after: "100% (all orders)", change: "Full auditability" },
	{ metric: "Algorithm parameter optimisation", before: "None", after: "Backtested continuously", change: "Continuous" },
	{ metric: "Execution quality visibility", before: "None", after: "Full pre/in/post-trade", change: "Full visibility" }
];

const SUCCESS_FACTORS = [
	{
		title: "You cannot optimise what you cannot measure",
		desc: "Transaction cost analysis was the precondition for improvement. The firm did not know its execution quality was poor because it had never measured it. The TCA infrastructure was as valuable as the algorithms — it made execution quality a managed variable rather than an unknown."
	},
	{
		title: "Algorithm parameters need to match the firm's order flow",
		desc: "A VWAP algorithm with parameters optimised for high-frequency retail order flow performs differently from one optimised for the specific order size distribution and urgency profile of a long-only equity manager. Backtesting against real order history produced parameters calibrated to actual trading patterns."
	},
	{
		title: "Co-location eliminates latency-related execution slippage",
		desc: "Execution latency — the time between a trading signal and market execution — directly affects implementation shortfall. Co-location at the relevant exchanges reduces this latency from milliseconds to microseconds, materially improving execution quality for time-sensitive orders."
	}
];

const FAQS = [
	{
		q: "What is implementation shortfall in algorithmic trading?",
		a: "Implementation shortfall is the difference between the decision price (the price at the time an investment decision is made) and the average execution price achieved across all child orders. It measures the total cost of execution — including market impact, timing risk, and opportunity cost — and is the most comprehensive measure of execution quality."
	},
	{
		q: "What is the difference between VWAP and TWAP?",
		a: "VWAP (Volume-Weighted Average Price) executes an order in proportion to historical volume patterns throughout the day, aiming to achieve execution at or better than the day's volume-weighted price. TWAP (Time-Weighted Average Price) distributes an order evenly across a time period regardless of volume patterns, providing execution certainty at the cost of higher market impact during low-volume periods."
	}
];

export default function AlgorithmicTradingCaseStudy() {
	return (
		<>
			<SEO
				title="Algorithmic Trading & Execution Platform Case Study | OpenGridLabs"
				description="How a Custom Algorithmic Trading Platform Reduced Market Impact by 34 Basis Points and Cut Execution Cost 28%."
				canonical="/services/bfsi/algorithmic-trading"
				keywords="Algorithmic Trading, Execution Algorithms, VWAP, TWAP, Implementation Shortfall, Transaction Cost Analysis, Low-Latency, FIX Protocol, Smart Order Routing, Financial Services, OpenGridLabs"
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
					title="How a Custom Algorithmic Trading Platform Reduced Market Impact by 34 Basis Points and Cut Execution Cost 28%"
					description="An asset manager executing $6B annually in equity orders was relying on broker algorithms for execution — paying a premium for access to algorithms whose logic was opaque and whose performance was unmeasured. OpenGridLabs built a proprietary execution platform: VWAP, TWAP, and implementation shortfall algorithms, a backtesting infrastructure to optimise parameters, and direct market access connectivity — reducing average market impact by 34 basis points and cutting execution cost 28%."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Asset manager (anonymised)" },
						{ label: "Execution Volume", value: "$6B annual equity execution" },
						{ label: "Timeline", value: "12 months" },
						{ label: "Stack", value: "Low-latency execution · FIX protocol · Backtesting · Co-location · Smart order routing" }
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
						"Our client is an asset manager executing approximately $6 billion in equity orders annually across 14 markets. Execution had historically been delegated entirely to broker algorithms — the desk sent orders to brokers who applied their proprietary VWAP or TWAP algorithms and charged a per-share or basis-point commission. The performance of broker execution had never been systematically measured using transaction cost analysis. The desk did not know whether the algorithms they were using were optimal for their order flow.",
						"A transaction cost analysis study commissioned before the engagement found that the firm's average implementation shortfall — the difference between the decision price and the achieved execution price — was 47 basis points. Benchmark studies of similar managers using well-implemented proprietary algorithms suggested that 15–20 basis points was achievable. The gap represented real performance drag across $6B of annual execution. OpenGridLabs built the infrastructure to close it.",
						"Algorithmic trading uses computer programs to execute investment orders using pre-defined rules and strategies — managing how a large order is split into smaller child orders, when they are executed, and on which venues — to minimise market impact and execution cost."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Algorithmic Trading?"
					definitionText="Algorithmic trading uses computer programs to execute investment orders using pre-defined rules and strategies — managing how a large order is split into smaller child orders, when they are executed, and on which venues — to minimise market impact and execution cost."
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
					description={"Eliminating opaque broker execution, measuring slippage, and optimizing algorithm parameters with low-latency access."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Algorithmic Trading Platform Architecture"}
					description={"Co-located exchange gateways connected to low-latency order routing networks, strategies, and transaction cost analysis pipelines."}
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
					description={"A systematic 3-phase roadmap leading from initial gateways implementation to algorithm tuning and live execution transition."}
					phaseColors={[ "hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)" ]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Reducing implementation shortfall to benchmark standards and eliminating costly broker commissions."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We were paying brokers to execute orders using algorithms we couldn't see, measuring performance we couldn't quantify. The proprietary platform gave us control and visibility simultaneously. The 34 basis point improvement on $6B is not a rounding error."}
					author={"Head of Trading"}
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
					title={"Paying for broker algorithms with no visibility into execution quality?"}
					description={"OpenGridLabs builds algorithmic trading platforms — VWAP, TWAP, implementation shortfall, backtesting, and TCA — that give you control over execution cost and the data to optimise it."}
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
