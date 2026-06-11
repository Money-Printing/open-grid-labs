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

const STATS = [
	{ value: "31%", label: "Reduction in customer churn", accent: "from-emerald-400 to-teal-500" },
	{ value: "0.91", label: "Model AUC on held-out test data", accent: "from-cyan-400 to-blue-500" },
	{ value: "3–6 wk", label: "Advance warning before a likely churn", accent: "from-purple-500 to-indigo-500" },
	{ value: "10 wk", label: "From raw data to a production model", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "All reporting was backward-looking—churn was only ever confirmed after the fact" },
	{ text: "Simple threshold rules fired too late and drowned real risk in false alarms" },
	{ text: "Three years of data sat across siloed systems in inconsistent, messy formats" },
	{ text: "No labelled history of churn defined consistently enough to train a model on" },
	{ text: "Even a good prediction would be useless without trustworthy probabilities and clear reasons" }
];

const SOLUTIONS = [
	{ text: "A unified, cleaned dataset joining usage, billing, support, and engagement history" },
	{ text: "Extensive feature engineering surfacing the early signals that precede churn" },
	{ text: "A gradient-boosted classification model forecasting churn probability per customer" },
	{ text: "Probability calibration so a '70% risk' genuinely means 70%, enabling prioritisation" },
	{ text: "Per-prediction explanations showing the top drivers, so teams know how to intervene" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Usage logs", "Billing & plan history", "Support tickets", "Engagement events", "Cleaning & joining"], color: "hsl(180,100%,50%)" },
	{ title: "Features", items: ["Trend & recency features", "Behaviour aggregates", "Label definition", "Leakage checks", "Train / val / test splits"], color: "hsl(210,100%,50%)" },
	{ title: "Modeling", items: ["Gradient-boosted trees", "Hyperparameter tuning", "Cross-validation", "Probability calibration", "Feature importance"], color: "hsl(280,100%,65%)" },
	{ title: "Prediction", items: ["Scheduled scoring", "Risk tiers & reason codes", "CRM & workflow delivery", "Monitoring & retraining"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Foundation & Labels (Weeks 1–4)",
		desc: "OpenGridLabs unified the siloed data into one clean, customer-level dataset and—working with the business—defined churn precisely and consistently so the model had a reliable target to learn. Careful attention was paid to using only information that would genuinely be available at prediction time, avoiding the leakage that quietly ruins predictive models.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Feature Engineering & Modeling (Weeks 5–8)",
		desc: "The team engineered hundreds of candidate features capturing behaviour, trends, and early-warning signals, then trained and tuned gradient-boosted models with rigorous cross-validation. Predicted probabilities were calibrated so risk scores could be trusted and ranked, and feature-importance analysis surfaced the drivers behind each prediction.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Deployment, Action & Enablement (Weeks 9–10)",
		desc: "The model was deployed to score customers on a schedule, delivering risk tiers and reason codes straight into the CRM and the customer-success team's workflow—so a forecast became a prioritised action list, not a report. Monitoring and a retraining path were added, and OpenGridLabs trained the client's team to maintain and extend the model to new prediction problems.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Customer churn rate", before: "Baseline", after: "69% of baseline", change: "−31%" },
	{ metric: "Model discrimination (AUC)", before: "Rules: ~0.6", after: "0.91", change: "Strong" },
	{ metric: "Advance warning before churn", before: "None (after the fact)", after: "3–6 weeks", change: "New capability" },
	{ metric: "At-risk customers correctly flagged", before: "Low, late", after: "High, early", change: "Actionable" },
	{ metric: "False-alarm rate", before: "High (rules)", after: "Sharply lower", change: "Focused effort" },
	{ metric: "Retention-team targeting", before: "Guesswork", after: "Ranked by risk + reason", change: "Prioritised" },
	{ metric: "Retention revenue impact", before: "—", after: "Material uplift", change: "ROI positive" }
];

const SUCCESS_FACTORS = [
	{
		title: "Features over fancy models",
		desc: "The biggest gains came from engineering signals that genuinely precede churn—trends, recency, and comparisons to a customer's own history—rather than reaching for the most complex algorithm. On tabular data, that is almost always where the value is."
	},
	{
		title: "Guarding against leakage",
		desc: "Rigorously ensuring the model only used information available at prediction time prevented the classic trap of a model that scores brilliantly in testing and collapses in production. Honest evaluation was treated as non-negotiable."
	},
	{
		title: "Calibrated probabilities, not just rankings",
		desc: "Calibrating outputs meant a 70% risk score truly meant 70%, so the team could prioritise effort and set thresholds with confidence instead of guessing at what a score implied."
	},
	{
		title: "Predictions delivered into the workflow",
		desc: "A forecast only matters if someone acts on it. Pushing risk tiers and reason codes into the CRM turned the model from a data-science artifact into a daily, prioritised action list for the people who could change the outcome."
	}
];

const FAQS = [
	{
		q: "What is predictive modeling?",
		a: "Predictive modeling uses historical data and machine learning to forecast a future outcome—such as which customers will churn, how much demand to expect, or which leads will convert. It learns patterns from past examples and outputs a probability or value for new cases, letting organisations act on what is likely to happen instead of reacting after the fact. Common techniques include regression, classification, and gradient-boosted trees."
	},
	{
		q: "Do you need deep learning or an LLM for predictive modeling?",
		a: "Usually not. For structured, tabular business data, gradient-boosted tree models like XGBoost or LightGBM typically outperform deep learning and large language models while being faster, cheaper, and easier to explain. Most predictive-modeling value comes from strong feature engineering and clean data rather than the largest possible model. LLMs are suited to language tasks, not tabular forecasting."
	}
];

export default function PredictiveModelingCaseStudy() {
	return (
		<>
			<SEO
				title="Predictive Modeling Case Study | OpenGridLabs"
				description="How OpenGridLabs built a predictive modeling system to forecast customer churn weeks in advance, reducing churn by 31% with calibrated probabilities."
				canonical="/services/ai-data/predictive-modeling"
				keywords="Predictive Modeling, Predictive Analytics, Churn Prediction, Machine Learning Forecasting, Gradient Boosting, XGBoost, Feature Engineering, Classification Models"
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
					categoryTag="Case Study · Data Science & AI"
					title="How Predictive Modeling Forecast Customer Churn Weeks Before It Happened"
					description="A fast-scaling company knew customers were leaving but only ever learned about it once they were gone. OpenGridLabs built a predictive modeling system—rigorous feature engineering, gradient-boosted models, and calibrated probabilities—that forecasts which customers will churn weeks ahead, giving the team time to act and cutting churn by 31%."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "SaaS / Subscription (anonymised)" },
						{ label: "Data", value: "3 yrs history, 400+ features" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "Feature Engineering · Gradient Boosting · Calibration" }
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
						"Our client is a venture-backed subscription business with thousands of customers and three years of rich operational history—usage logs, billing records, support interactions, and engagement data. They had plenty of data and a clear, expensive problem: customers were churning, and the cost of winning a replacement far exceeded the cost of keeping one. Yet every report they had was backward-looking. By the time a dashboard showed a customer had churned, the relationship was already over.",
						"The team had tried simple rules—flagging anyone whose usage dropped below a threshold—but these fired too late and too often, burying real risk in false alarms. What they needed was not another descriptive report of what had already happened, but a forecast of what was about to: a way to know, weeks in advance and customer by customer, who was likely to leave and why. That is the job of predictive modeling—turning historical data into a calibrated forecast that drives action while there is still time to act.",
						"Predictive modeling uses historical data and machine learning to forecast a future outcome—who will churn, how much demand to expect, which leads will convert. It learns patterns from past examples and outputs a probability or value for each new case, so organisations can act on what is likely to happen instead of reacting after the fact. For structured business data, gradient-boosted tree models usually lead the field."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is Predictive Modeling?"
					definitionText="Predictive modeling uses historical data and machine learning to forecast a future outcome—who will churn, how much demand to expect, which leads will convert. It learns patterns from past examples and outputs a probability or value for each new case, so organisations can act on what is likely to happen instead of reacting after the fact. For structured business data, gradient-boosted tree models usually lead the field."
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
					title={"Five Practical Gaps Resolved"}
					description={"How OpenGridLabs turned promising prototypes into an enterprise-grade prediction workflow."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs built an end-to-end predictive pipeline that turns raw historical data into a calibrated, explainable forecast delivered where the team can act on it. Every stage is reproducible and evaluated, so the model can be retrained on fresh data and validated before each new version goes live."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"The features matter more than the algorithm"}
					alertText={"On structured business data, the winning edge rarely comes from an exotic model—it comes from features that capture the real signal: not just 'usage this month' but how it is trending, how it compares to a customer's own past, and how recent the change is. Honest evaluation and checking against data leakage are non-negotiable."}
					rightColumnTitle={"Predictive Modeling Pipeline Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to prove predictive signal early, then turn it into an operational tool."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 90-day post-deployment window against the prior reactive approach, using held-out data for model metrics and a controlled comparison for business impact."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We had three years of data telling us who had already left. Now we know who's about to—weeks ahead, ranked by risk, with the reason attached. Our team finally spends its time on the customers it can still save instead of writing post-mortems."}
					author={"VP of Customer Success"}
					subtitle={"Confidential SaaS Company"}
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
					title={"Ready to build production-ready Predictive Modeling?"}
					description={"OpenGridLabs designs predictive modeling systems, including feature engineering, gradient-boosted models, calibrated probabilities, and in-workflow delivery."}
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
