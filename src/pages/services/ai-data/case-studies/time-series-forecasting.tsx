import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Sparkles,
	Database
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
	{ value: "47%", label: "Lower forecast error vs. baseline", accent: "from-cyan-400 to-blue-500" },
	{ value: "-58%", label: "Fewer stockouts on fast movers", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "-33%", label: "Less excess inventory on slow movers", accent: "from-pink-500 to-rose-400" },
	{ value: "10 wk", label: "From spreadsheets to production", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "A single rolling-average forecast applied to thousands of very different SKUs" },
	{ text: "No handling of trend, weekly or yearly seasonality, holidays, or promotions" },
	{ text: "Point forecasts only—no notion of uncertainty for safety-stock decisions" },
	{ text: "Manual, spreadsheet-driven process that couldn't scale across the catalogue" },
	{ text: "Forecasts at item, category, and total levels never reconciled with each other" }
];

const SOLUTIONS = [
	{ text: "Per-SKU models combining statistical methods (ARIMA, Prophet) and ML for many series" },
	{ text: "Explicit decomposition into trend, seasonality, holidays, and remainder" },
	{ text: "Multi-horizon forecasts with calibrated prediction intervals, not just point estimates" },
	{ text: "Hierarchical reconciliation so item, category, and total forecasts agree by construction" },
	{ text: "Walk-forward (rolling-origin) validation so accuracy claims hold up in production" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Daily SKU History", "Calendar & Holidays", "Promotions & Price", "External Drivers (Weather, Events)"], color: "hsl(180,100%,50%)" },
	{ title: "Decompose", items: ["Trend Extraction", "Weekly & Yearly Seasonality", "Holiday Effects", "Stationarity & Lag Check"], color: "hsl(210,100%,50%)" },
	{ title: "Models", items: ["ARIMA", "Exponential Smoothing", "Prophet", "Gradient-Boosted Lag Regression", "Global ML Models"], color: "hsl(280,100%,65%)" },
	{ title: "Forecasts", items: ["Multi-Horizon Outputs", "Calibrated Prediction Intervals", "Hierarchical Reconciliation", "Planning Delivery & Monitoring"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data, Decomposition & Baseline (Weeks 1–3)",
		desc: "OpenGridLabs unified the daily history with calendar, holiday, and promotion data, examined each series for stationarity and structure, and built decompositions that separated trend, weekly and yearly seasonality, and holiday effects. The existing rolling-average forecast was reproduced exactly as the honest baseline any new model had to beat under time-aware validation.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Model Portfolio & Reconciliation (Weeks 4–8)",
		desc: "Because no single method wins on every series, the team built a portfolio—ARIMA, exponential smoothing, Prophet, and a global gradient-boosted model trained jointly across series with lag and calendar features—and selected per SKU using walk-forward error. Prediction intervals were generated for every horizon, and hierarchical reconciliation made item, category, and total forecasts add up consistently.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Operationalisation & Enablement (Weeks 9–10)",
		desc: "The pipeline was deployed to refresh forecasts and intervals on a daily schedule, delivered straight into the planning workflow with confidence ranges attached so safety stock and orders could be sized to actual uncertainty. Live error against actuals was monitored, retraining and reselection ran automatically, and OpenGridLabs trained the client's analysts and engineers to maintain and extend the system.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Forecast error (MAPE, weighted)", before: "Baseline", after: "53% of baseline", change: "−47%" },
	{ metric: "Stockouts on fast movers", before: "Baseline", after: "42% of baseline", change: "−58%" },
	{ metric: "Excess inventory on slow movers", before: "Baseline", after: "67% of baseline", change: "−33%" },
	{ metric: "Seasonal & holiday peaks captured", before: "Largely missed", after: "Modelled explicitly", change: "New capability" },
	{ metric: "Forecast uncertainty", before: "Not provided", after: "Calibrated intervals", change: "Decision-ready" },
	{ metric: "SKU / category / total alignment", before: "Inconsistent", after: "Hierarchically reconciled", change: "Coherent" },
	{ metric: "Working-capital & service-level impact", before: "—", after: "Materially improved", change: "ROI positive" }
];

const SUCCESS_FACTORS = [
	{
		title: "Time-aware validation, always",
		desc: "Walk-forward (rolling-origin) splits replaced ordinary cross-validation, eliminating the future-leakage that makes time series models look great in testing and fail in production. Every accuracy number reported was one the system could genuinely deliver on new data."
	},
	{
		title: "A portfolio, not a favourite",
		desc: "No single method wins on every series. Combining ARIMA, exponential smoothing, Prophet, and a global ML model—and selecting per SKU by walk-forward error—beat any one-size approach and handled the diversity of nine thousand items honestly."
	},
	{
		title: "Intervals turn forecasts into decisions",
		desc: "Calibrated prediction intervals were as important as the point forecasts: planners could finally size safety stock to genuine uncertainty instead of guessing, which is where most of the inventory-side ROI came from."
	},
	{
		title: "Hierarchical reconciliation closes the loop",
		desc: "Forecasts at item, category, and total levels were reconciled so they added up consistently. Without it, item-level and aggregate plans contradict each other—and someone has to override one of them by hand every cycle."
	}
];

const FAQS = [
	{
		q: "What is time series forecasting?",
		a: "Time series forecasting predicts future values of a quantity that changes over time—demand, sales, traffic, or energy use—using its own history and related signals. Unlike standard regression, it explicitly accounts for trend, seasonality, autocorrelation, holidays, and external drivers. Common methods include ARIMA, exponential smoothing, Prophet, and gradient-boosted or deep-learning models adapted for sequential data."
	},
	{
		q: "Why can't you use ordinary cross-validation on time series data?",
		a: "Ordinary cross-validation shuffles data, which on a time series quietly leaks information from the future into the training set—producing models that look brilliant in testing and fail in production. Time series must be validated with time-aware schemes such as walk-forward (rolling-origin) validation, where every test fold is strictly after its training data, mirroring how the model will actually be used."
	}
];

export default function TimeSeriesForecastingCaseStudy() {
	return (
		<>
			<SEO
				title="Time Series Forecasting Case Study | OpenGridLabs"
				description="How Time Series Forecasting cut demand-forecast error 47% across thousands of SKUs and reduced stockouts by 58% for a retail client."
				canonical="/services/ai-data/time-series-forecasting"
				keywords="Time Series Forecasting, Demand Forecasting, ARIMA, Prophet, walk-forward validation, inventory optimization"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(280,100%,65%) 0%, hsl(220,100%,50%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Time Series Forecasting"
					title="How Time Series Forecasting Cut Demand-Forecast Error 47% Across Thousands of SKUs"
					description="A fast-scaling company partnered with OpenGridLabs to replace a single rolling-average forecast with a robust time series forecasting pipeline—handling trend, seasonality, and thousands of hierarchical SKUs with honest prediction intervals to optimize safety stock and right-size inventory."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Retail / Operations (anonymised)" },
						{ label: "Scale", value: "9,000+ SKUs, 4 years of history" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "ARIMA · Prophet · ML · Hierarchical · Intervals" }
					]}
				/>

				<CaseStudyCarousel
					slug="time-series-forecasting"
					title="Time Series Forecasting"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/time-series-forecasting/1.jpg",
						"/images/case-studies/time-series-forecasting/2.jpg"
					]}
				/>

				

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-purple-500/30"
					hoverTextClass="group-hover:text-purple-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a venture-backed company managing more than nine thousand SKUs and four years of daily history. Operations relied on a single rolling-average forecast applied uniformly across the catalogue—calculated in spreadsheets, refreshed manually, and blind to the way demand actually behaves over time. It treated a holiday-sensitive seasonal item the same way it treated a steady baseline product, and it had no concept of trend or uncertainty.",
						"The consequences were predictable and expensive. Fast-moving, seasonal items stocked out at the worst possible times because the rolling average smoothed away the very peaks the team needed to plan for. Slow movers, meanwhile, kept piling up in warehouses because there was nothing in the forecast to recognise that demand had drifted down. Operations was either firefighting shortages or writing off excess. What the team needed was real time series forecasting—a system that respects how time works in the data: trend, seasonality, holidays, autocorrelation, and uncertainty—across thousands of SKUs at once.",
						"Time series forecasting predicts future values of a quantity that changes over time—demand, sales, traffic, energy use—from its own history and related signals. Unlike ordinary regression, it explicitly accounts for time-based structure: trend, seasonality, autocorrelation, holidays, and external drivers. Common methods include ARIMA, exponential smoothing, Prophet, and gradient-boosted or deep-learning models adapted for sequential data."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is Time Series Forecasting?"
					definitionText="Time series forecasting predicts future values of a quantity that changes over time—demand, sales, traffic, energy use—from its own history and related signals. Unlike ordinary regression, it explicitly accounts for time-based structure: trend, seasonality, autocorrelation, holidays, and external drivers. Common methods include ARIMA, exponential smoothing, Prophet, and gradient-boosted or deep-learning models adapted for sequential data."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-purple-500/10"
					definitionIconBorderClass="border-purple-500/20"
					definitionIconColorClass="text-purple-400"
					glowColorClass="bg-purple-400"
					gradientFromClass="from-purple-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Forecasting Bottlenecks Overcome"}
					description={"How OpenGridLabs engineered a self-optimizing hierarchical pipeline to replace point calculations."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Forecasting Pipeline"}
					description={"OpenGridLabs built a time-aware forecasting pipeline that ingests daily history, decomposes each series, fits the right model from a portfolio, and reconciles forecasts across the SKU hierarchy. The pipeline retrains on a schedule, refreshes forecasts automatically, and delivers them into the planning workflow with intervals attached—so decisions can be sized to uncertainty, not made against an illusion of precision."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Honour the arrow of time, or the forecast lies"}
					alertText={"The most common way time series projects fail is by validating with ordinary cross-validation, which shuffles data and quietly leaks future information into training. Models that test brilliantly that way collapse in production. The whole pipeline was validated with walk-forward (rolling-origin) splits, where every test fold is strictly after its training data—so reported accuracy genuinely reflected how the system would behave when used to forecast the unknown future."}
					rightColumnTitle={"Time Series Forecasting Pipeline Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to deliver measurable accuracy gains on the highest-value SKUs first, then scale to the full catalogue. OpenGridLabs embedded a team of forecasting and data engineers and an operations-analytics lead alongside the client's planning team."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 90-day window after rollout, comparing the new forecasts against the rolling-average baseline using walk-forward error, and tracking the operational metrics that mattered: stockouts and excess inventory."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our old forecast was a single average pretending to apply to nine thousand very different products. The new system actually knows which items have seasons, when our holidays matter, and how confident it is in each number. We stopped running out of the things people want and stopped paying to warehouse the ones they don't."}
					author={"Head of Planning"}
					subtitle={"Confidential Retail Company"}
					accentLineClass={"bg-purple-400"}
					iconColorClass={"text-purple-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-purple-500/20"}
					iconColorClass={"text-purple-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-purple-400"}
					activeChevronColorClass={"text-purple-400"}
				/>

				<CaseStudyCta 
					title={"Stop forecasting the future with the wrong tools."}
					description={"OpenGridLabs builds time series forecasting systems—seasonality and trend, hierarchical reconciliation, calibrated intervals, and time-aware validation—so your forecasts sharpen operations rather than mislead them."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-purple-400"}
					iconColorClass={"text-purple-400"}
					btnGradientClass={"from-purple-400 to-cyan-500"}
					btnShadowColor={"168,85,247,0.2"}
				/>
			</div>
		</>
	);
}
