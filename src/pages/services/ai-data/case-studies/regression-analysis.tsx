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
	{ value: "52%", label: "Lower estimate error (MAPE) vs. manual", accent: "from-emerald-400 to-teal-500" },
	{ value: "0.93", label: "R² — variance explained by the model", accent: "from-cyan-400 to-blue-500" },
	{ value: "60+", label: "Drivers quantified by their effect on the value", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "9 wk", label: "From spreadsheets to a production model", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "A critical value estimated by gut feel, rules of thumb, and inconsistent spreadsheets" },
	{ text: "Errors cost real money—too high lost deals, too low eroded margin" },
	{ text: "No one could fully explain or defend why a given figure had been chosen" },
	{ text: "The reasoning lived in experienced staff's heads, creating risk and bottlenecks" },
	{ text: "Five years of relevant data sat unused, never turned into a predictive tool" }
];

const SOLUTIONS = [
	{ text: "A regression model predicting the target value from historical data and deal attributes" },
	{ text: "Quantified driver effects—how much each factor raises or lowers the estimate" },
	{ text: "Honest error metrics (MAE, MAPE, RMSE) and prediction ranges, not false precision" },
	{ text: "An interpretable output so every estimate comes with the reasons behind it" },
	{ text: "Delivery into the team's workflow as a suggested value with its key drivers" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Historical values", "Deal & item attributes", "Market & context variables", "Cleaning & outlier handling"], color: "hsl(180,100%,50%)" },
	{ title: "Features", items: ["Transformations", "Interaction terms", "Multicollinearity checks", "Train / validation / test splits"], color: "hsl(210,100%,50%)" },
	{ title: "Modeling", items: ["Linear & regularised regression", "Gradient-boosted regression", "Cross-validation", "Error & residual analysis"], color: "hsl(280,100%,65%)" },
	{ title: "Estimate", items: ["Predicted value", "Confidence range", "Driver contributions", "Workflow delivery & monitoring"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data & Target Definition (Weeks 1–3)",
		desc: "OpenGridLabs consolidated five years of records into one clean dataset, handled outliers and missing values, and defined the target value precisely with the business. Exploratory analysis surfaced the relationships and distributions in the data, and a careful split set aside untouched test data so accuracy could be measured honestly later.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Feature Engineering & Regression (Weeks 4–7)",
		desc: "The team engineered features and interaction terms, checked for multicollinearity that would distort driver effects, and trained a range of regression models—from regularised linear regression to gradient-boosted regression. Models were compared on held-out error (MAE, MAPE, RMSE) and residual behaviour, choosing the option that best balanced accuracy with the interpretability the business needed.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Estimates, Drivers & Enablement (Weeks 8–9)",
		desc: "The model was deployed to produce a suggested value with a confidence range and the top drivers behind each estimate, delivered into the team's existing workflow as decision support rather than a black box. Monitoring tracked live error against actuals, a retraining path kept the model current, and OpenGridLabs trained the client's team to maintain and extend it to other estimation problems.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Estimate error (MAPE)", before: "Baseline", after: "48% of baseline", change: "−52%" },
	{ metric: "Variance explained (R²)", before: "Not measured", after: "0.93", change: "Strong fit" },
	{ metric: "Drivers quantified", before: "Intuition only", after: "60+ with effect sizes", change: "Explainable" },
	{ metric: "Consistency between staff", before: "Varied widely", after: "Standardised", change: "Uniform" },
	{ metric: "Time to produce an estimate", before: "Manual, slow", after: "Instant", change: "Faster" },
	{ metric: "Ability to defend a number", before: "Low", after: "Driver-backed", change: "Justifiable" },
	{ metric: "Margin & win-rate impact", before: "—", after: "Measurable uplift", change: "ROI positive" }
];

const SUCCESS_FACTORS = [
	{
		title: "Accuracy and interpretability together",
		desc: "The value had to be defended, so the model was chosen to be both accurate and explainable. Where a simpler regression nearly matched a complex one, the interpretable option won—because a number people understand is a number they will use."
	},
	{
		title: "Respect the method's assumptions",
		desc: "Checking for multicollinearity, examining residuals, and handling outliers kept the driver effects honest. Skipping these is how regressions produce confident coefficients that quietly mislead."
	},
	{
		title: "Honest error, not false precision",
		desc: "Reporting MAE, MAPE, and prediction ranges set realistic expectations—an estimate with a stated range is far more useful and trustworthy than a single number pretending to be exact."
	},
	{
		title: "Drivers turn prediction into insight",
		desc: "Quantifying how each factor moved the value did more than predict—it taught the business what actually drove its numbers, informing strategy well beyond the individual estimate."
	}
];

const FAQS = [
	{
		q: "What is regression analysis?",
		a: "Regression analysis is a machine learning and statistical method for predicting a continuous numeric value—a price, quantity, duration, or score—from input variables. Unlike classification, which assigns items to categories, regression estimates an actual number. It also quantifies how each input influences the result, making it useful both for accurate prediction and for understanding which factors drive an outcome and by how much."
	},
	{
		q: "What is the difference between regression and classification?",
		a: "Classification predicts a category or label—whether a customer will churn, or which team a request belongs to. Regression predicts a continuous number—how much something will cost, how long a task will take, or how much demand to expect. The choice depends on the target: a discrete class calls for classification, while a real-valued quantity calls for regression."
	}
];

export default function RegressionAnalysisCaseStudy() {
	return (
		<>
			<SEO
				title="Regression Analysis Case Study | OpenGridLabs"
				description="How OpenGridLabs built a regression analysis solution combining feature engineering and explainable modeling — cutting pricing estimation error by 52%."
				canonical="/services/ai-data/regression-analysis"
				keywords="Regression Analysis, Regression Models, Value Estimation, Predictive Pricing, Linear Regression, Multiple Regression, Gradient Boosting, Feature Coefficients, Error Metrics, Demand Estimation, Explainable Models"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(280,100%,65%) 0%, hsl(180,100%,50%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Data Science & AI"
					title="How Regression Analysis Replaced Pricing Guesswork with Numbers the Team Could Trust"
					description="A fast-scaling company was estimating a critical value—pricing—by gut feel and stale spreadsheets, and the errors were costing real margin. OpenGridLabs built a regression model that predicts the right figure from data and, just as importantly, quantifies exactly which factors move it and by how much—cutting estimate error by 52% and making every number explainable."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Data", value: "5 yrs history, 60+ variables" },
						{ label: "Timeline", value: "9 weeks to production" },
						{ label: "Stack", value: "Feature Engineering · Regression · Interpretation" }
					]}
				/>

				<CaseStudyCarousel
					slug="regression-analysis"
					title="Regression Analysis"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/regression-analysis/1.jpg",
						"/images/case-studies/regression-analysis/2.jpg"
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
						"Our client is a venture-backed company whose business depends on getting a single number right, over and over: the value—pricing—attached to each deal. That figure drove revenue on one side and competitiveness on the other, and it was being produced largely by experienced staff applying judgement, rules of thumb, and a tangle of spreadsheets built up over years.",
						"The estimates were often reasonable and sometimes badly off. Set too high, deals were lost; set too low, margin evaporated—and because the logic lived in people's heads and inconsistent formulas, nobody could fully explain why a given number had been chosen or defend it when challenged. With five years of historical data on hand, the opportunity was clear: replace guesswork with a model that predicts the right value from evidence and shows its reasoning. This is the natural home of regression analysis—predicting a precise number and quantifying what drives it.",
						"Regression analysis predicts a continuous numeric value—a price, quantity, duration, or score—from input variables. Unlike classification, which sorts items into categories, regression estimates an actual number. It also measures how each input influences the result, so it serves two purposes at once: producing accurate estimates and revealing which factors drive an outcome, and by how much."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is Regression Analysis?"
					definitionText="Regression analysis predicts a continuous numeric value—a price, quantity, duration, or score—from input variables. Unlike classification, which sorts items into categories, regression estimates an actual number. It also measures how each input influences the result, so it serves two purposes at once: producing accurate estimates and revealing which factors drive an outcome, and by how much."
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
					title={"Five Pricing Challenges Overcome"}
					description={"How OpenGridLabs built a regression pipeline to replace manual estimation sheets."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Modeling Pipeline"}
					description={"OpenGridLabs built a regression pipeline that turns historical records into an accurate, explainable estimate of the target value. The design deliberately balanced two goals that often pull apart—predictive accuracy and interpretability—so the team gets both a trustworthy number and a clear account of how it was reached."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"A number you can trust is a number you can explain"}
					alertText={"For a value the business must defend to customers and leadership, a black-box estimate would never have been adopted. The design paired an accurate model with clear driver contributions—showing how much each factor pushed the figure up or down. Where a simpler regression was nearly as accurate as a complex one, the interpretable choice won, because an estimate people understand is an estimate people act on."}
					rightColumnTitle={"Regression Analysis Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to prove predictive accuracy on real history, then deliver it as a tool the team trusts. OpenGridLabs embedded a team of data scientists and a data engineer alongside the client's commercial and analytics teams."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 90-day post-deployment window against the prior manual estimates, using untouched test data for model metrics and a controlled comparison for business impact."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We were pricing on instinct and hoping. Now we get a number backed by five years of data, with the reasons laid out—how much each factor moved it. Our estimates are tighter, our team agrees on them, and for the first time we can actually defend the figure."}
					author={"Chief Revenue Officer"}
					subtitle={"Confidential Technology Company"}
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
					title={"Need a number you can trust—and defend?"}
					description={"OpenGridLabs builds regression analysis solutions—accurate value prediction, quantified drivers, honest error ranges, and in-workflow delivery—so your estimates are sharp, consistent, and explainable."}
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
