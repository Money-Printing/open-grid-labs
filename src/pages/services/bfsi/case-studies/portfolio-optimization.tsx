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
	{ value: "31%", label: "Reduction in average tracking error across accounts", accent: "from-emerald-500 to-teal-600" },
	{ value: "24%", label: "Lower rebalancing transaction costs", accent: "from-emerald-500 to-teal-600" },
	{ value: "340", label: "Accounts optimised daily vs. quarterly manual", accent: "from-emerald-500 to-teal-600" },
	{ value: "10 mo", label: "Production deployment", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "Manual rebalancing ignoring transaction costs — frequent small trades eroding returns" },
	{ text: "Quarterly rebalancing cycle allowing significant drift between cycles" },
	{ text: "340 accounts receiving inconsistent attention — no systematic fairness across the book" },
	{ text: "Tax-loss harvesting not systematically exploited — significant unrealised tax value uncaptured" },
	{ text: "No constraint modelling — rebalancing ignoring account-specific restrictions" }
];

const SOLUTIONS = [
	{ text: "Convex optimisation engine minimising tracking error subject to explicit transaction cost modelling" },
	{ text: "Tax-aware rebalancing — loss harvesting, gain deferral, and wash sale rule compliance" },
	{ text: "Account-specific constraint handling — restricted securities, legacy positions, minimum trade sizes" },
	{ text: "Daily automated optimisation replacing quarterly manual review for all 340 accounts" },
	{ text: "Multi-account optimisation — coordinating trades across accounts to minimise market impact" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Inputs", items: ["Model portfolio", "Account positions", "Constraints", "Transaction cost model", "Tax lots", "Risk model"], color: "hsl(145,100%,40%)" },
	{ title: "Optimisation", items: ["Convex optimiser", "Tracking error minimisation", "Constraint enforcement", "Tax lot selection"], color: "hsl(145,100%,40%)" },
	{ title: "Trade Generation", items: ["Optimal trade set", "Pre-trade TCA", "Order aggregation", "Account fairness check"], color: "hsl(145,100%,40%)" },
	{ title: "Execution", items: ["OMS integration", "Post-trade attribution", "Rebalancing audit trail", "Performance impact"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Optimisation Engine & TCA Model (Months 1–4)",
		desc: "OpenGridLabs built the convex optimisation engine and the transaction cost model calibrated against the firm's historical execution data. The engine was validated by comparing its proposed trade sets against the existing manual process for a sample of 20 accounts — demonstrating lower tracking error and lower transaction costs on the same rebalancing scenarios.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Tax-Aware Rebalancing & Constraint Framework (Months 5–7)",
		desc: "The tax-aware rebalancing module was built — identifying and prioritising loss harvesting opportunities, implementing gain deferral logic, and enforcing wash sale rules. The constraint framework was built handling the full range of account-specific constraints present across the 340 accounts.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Daily Automation & Scaled Deploy (Months 8–10)",
		desc: "The full optimisation pipeline was automated for daily running. The migration from quarterly manual rebalancing to daily automated optimisation was phased across all 340 accounts. An audit trail and exception review workflow were built to ensure human oversight of unusual trade recommendations before execution.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Average tracking error across accounts", before: "Baseline", after: "-31%", change: "-31%" },
	{ metric: "Rebalancing transaction costs", before: "Baseline", after: "-24%", change: "-24%" },
	{ metric: "Rebalancing frequency", before: "Quarterly manual", after: "Daily automated", change: "Daily automated" },
	{ metric: "Tax-loss harvesting capture", before: "Ad hoc", after: "Systematic", change: "Systematic" },
	{ metric: "Account consistency", before: "Variable (analyst-dependent)", after: "Uniform (systematic)", change: "Uniform" },
	{ metric: "Analyst time on rebalancing", before: "~40% of capacity", after: "~10% (exception review)", change: "75% reduction" }
];

const SUCCESS_FACTORS = [
	{
		title: "Explicit transaction cost modelling changes the trade set",
		desc: "A rebalancing optimisation that ignores transaction costs will propose trades that are mathematically optimal but economically counterproductive. Including transaction costs explicitly in the objective function produces trade sets where every trade is justified by a net benefit after costs."
	},
	{
		title: "Daily optimisation compounds over time",
		desc: "The benefit of daily optimisation over quarterly is not just lower average drift — it is that small corrections prevent the kind of large drift that requires large trades (with large market impact) to correct. Daily small corrections are consistently cheaper than quarterly large corrections."
	},
	{
		title: "Tax-aware rebalancing is alpha available for free",
		desc: "Tax-loss harvesting — selling positions at a loss to realise the tax benefit, while maintaining economic exposure — is a return enhancement that requires only discipline and process. The optimisation engine systematically identified opportunities that were being missed in the manual process."
	}
];

const FAQS = [
	{
		q: "What is mean-variance optimisation?",
		a: "Mean-variance optimisation, developed by Harry Markowitz, constructs a portfolio that achieves the maximum expected return for a given level of risk (variance) or the minimum risk for a given return level. The efficient frontier represents the set of optimal portfolios. In practice, it is extended with realistic constraints on turnover, position sizes, and transaction costs."
	},
	{
		q: "What is tax-aware rebalancing?",
		a: "Tax-aware rebalancing incorporates the tax implications of trades into the rebalancing decision — prioritising the realisation of capital losses (which can offset gains and reduce tax liability), deferring the realisation of capital gains where possible, and complying with wash sale rules that prevent artificial loss realisation."
	}
];

export default function PortfolioOptimizationCaseStudy() {
	return (
		<>
			<SEO
				title="Constraint-Aware Portfolio Optimisation Case Study | OpenGridLabs"
				description="How Constraint-Aware Portfolio Optimisation Reduced Tracking Error 31% While Cutting Rebalancing Transaction Costs 24%."
				canonical="/services/bfsi/portfolio-optimization"
				keywords="Portfolio Optimization, Portfolio Rebalancing, Mean-Variance Optimization, Tracking Error, Tax-Aware Rebalancing, Transaction Costs, Convex Optimization, Separate Accounts, Portfolio Construction, Financial Services, OpenGridLabs"
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
					title="How Constraint-Aware Portfolio Optimisation Reduced Tracking Error 31% While Cutting Rebalancing Transaction Costs 24%"
					description="An asset manager running 340 separate accounts used a manual rebalancing process — an analyst reviewing drift reports and proposing trades that a portfolio manager approved. The process was slow, inconsistent across accounts, and ignored transaction costs in its optimisation. OpenGridLabs built a portfolio optimisation engine with realistic constraint modelling, transaction cost integration, and tax-aware rebalancing — reducing tracking error 31% and cutting the cost of achieving it by 24%."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Asset manager — separate account platform (anonymised)" },
						{ label: "Scale", value: "340 accounts, $7.4B AUM" },
						{ label: "Timeline", value: "10 months" },
						{ label: "Stack", value: "Convex optimisation · Transaction cost model · Tax-aware rebalancing · Daily automation" }
					]}
				/>

				<CaseStudyCarousel
					slug="portfolio-optimization"
					title="Portfolio Optimization"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/portfolio-optimization/1.jpg",
						"/images/case-studies/portfolio-optimization/2.jpg"
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
						"Our client manages 340 separate accounts on a model-portfolio platform, with total AUM of $7.4 billion. The investment management approach used a common model portfolio as the target, with individual accounts holding implementations of that model subject to client-specific constraints — tax situations, restricted securities, legacy positions, minimum trade sizes. Rebalancing was performed manually on a quarterly cycle: an analyst identified accounts that had drifted beyond thresholds and proposed trades, which a portfolio manager approved.",
						"The manual process had two structural problems. First, it optimised each account independently without explicitly modelling transaction costs — the resulting trade sets frequently incurred more cost than the tracking error benefit they provided. Second, quarterly rebalancing meant significant drift could accumulate between cycles. The 340 accounts were receiving different levels of attention, with consistency between accounts depending on the analyst assigned rather than on a systematic process.",
						"Portfolio optimisation is the process of determining the optimal combination of holdings to achieve a target objective — typically minimising tracking error relative to a benchmark, or maximising risk-adjusted returns — subject to real-world constraints including transaction costs, turnover limits, minimum trade sizes, tax considerations, and client-specific restrictions. Modern portfolio optimisation uses convex optimisation solvers that can handle hundreds of constraints simultaneously, producing solutions that manual analysis cannot achieve."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Portfolio Optimisation?"
					definitionText="Portfolio optimisation is the process of determining the optimal combination of holdings to achieve a target objective — typically minimising tracking error relative to a benchmark, or maximising risk-adjusted returns — subject to real-world constraints including transaction costs, turnover limits, minimum trade sizes, tax considerations, and client-specific restrictions. Modern portfolio optimisation uses convex optimisation solvers that can handle hundreds of constraints simultaneously, producing solutions that manual analysis cannot achieve."
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
					description={"Improving legacy quarterly balance cycles with real-time tax optimization engines and transaction cost feedback loops."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Portfolio Optimisation Architecture"}
					description={"Parallel accounts and tax lot inputs linked to a central convex optimiser, pre-trade TCA analyzers, and unified execution OMS links."}
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
					description={"A systematic 3-phase roadmap leading from baseline optimizer engines and transaction costs tuning to daily rebalance routines."}
					phaseColors={["hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)"]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Reducing rebalancing transaction costs, shrinking tracking error, and systematic tax loss harvest mapping."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"We were spending analyst time on rebalancing decisions that should have been systematic. The optimisation engine makes better trade-offs than any individual analyst can — it simultaneously minimises tracking error, minimises transaction cost, and captures tax losses, while applying every constraint correctly. We couldn't do all of that in our heads at scale."}
					author={"Head of Portfolio Management"}
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
					title={"Manual rebalancing ignoring transaction costs and tax?"}
					description={"OpenGridLabs builds portfolio optimisation engines — constraint-aware, transaction-cost-integrated, and tax-aware — that rebalance 340 accounts daily better than an analyst can quarterly."}
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
