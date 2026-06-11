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
	{ value: "23%", label: "Improvement in reserve accuracy", accent: "from-indigo-500 to-violet-600" },
	{ value: "6 mo", label: "Earlier detection of liability claim trend", accent: "from-indigo-500 to-violet-600" },
	{ value: "£8M", label: "Reserve inadequacy prevented", accent: "from-indigo-500 to-violet-600" },
	{ value: "11 mo", label: "Platform live", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "Development triangle methods detecting trends only after they appear in settled claims — 12–18 month lag" },
	{ text: "No granular claims analytics — only aggregate development statistics available for reserving" },
	{ text: "No early warning system for emerging claims trends or legal/legislative changes" },
	{ text: "Catastrophe loss modelling done externally — no internal capability to stress-test the portfolio" },
	{ text: "Reserve adequacy monitored only at quarterly reserving cycle — no continuous monitoring" }
];

const SOLUTIONS = [
	{ text: "ML-based IBNR forecasting using granular claim feature data — 200+ features per claim" },
	{ text: "Emerging trends detection — monitoring changes in claim characteristics (injury type, rep rates, settlement values)" },
	{ text: "Catastrophe scenario modelling — internal model for extreme loss scenarios on the commercial portfolio" },
	{ text: "Reserve adequacy monitoring — continuous tracking of actual vs. expected development between quarterly cycles" },
	{ text: "Regulatory stress test automation — producing Solvency II required stress scenarios from the internal model" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Granular claims data", "Policy exposure", "External indices (inflation, legal trends)", "Cat model feeds"], color: "hsl(230,80%,60%)" },
	{ title: "Forecasting Models", items: ["ML IBNR model", "Development triangle benchmarking", "Trend detection algorithms", "Frequency-severity models"], color: "hsl(230,80%,60%)" },
	{ title: "Scenario Engine", items: ["Cat scenarios", "Stress tests", "Sensitivity analysis", "Reserve adequacy bands"], color: "hsl(230,80%,60%)" },
	{ title: "Monitoring", items: ["Continuous reserve monitoring", "Early warning alerts", "Quarterly pack automation", "Board reporting"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Foundation and ML IBNR Model (Months 1–5)",
		desc: "OpenGridLabs built the granular claims data pipeline and the ML IBNR forecasting model. The model was trained on 7 years of claims data and validated against the prior 3 years of quarterly reserving outcomes — demonstrating 23% lower mean absolute error compared to the triangle method alone on the validation period.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Emerging Trends Detection and Cat Modelling (Months 6–9)",
		desc: "The emerging trends detection framework was built — monitoring 40 claim characteristics for statistically significant shifts from historical patterns. The catastrophe modelling capability was built for the commercial property portfolio. Running the trend detection model retrospectively on historical data identified the liability trend 6 months before it had appeared in the triangles.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Reserve Monitoring and Regulatory Stress Tests (Months 10–11)",
		desc: "Continuous reserve adequacy monitoring was implemented — tracking actual-vs-expected development between quarterly reserving cycles and alerting when development was running above or below expected. Solvency II regulatory stress test automation was built from the internal model outputs.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Reserve accuracy (mean absolute error)", before: "Baseline", after: "-23%", change: "-23%" },
	{ metric: "Liability trend detection lag", before: "18 months (triangles)", after: "6 months earlier (ML)", change: "6 months earlier (ML)" },
	{ metric: "Reserve inadequacy prevented", before: "£8M (retrospective analysis)", after: "Prevented going forward", change: "Prevented going forward" },
	{ metric: "Catastrophe modelling", before: "External dependency", after: "Internal capability", change: "Internal capability" },
	{ metric: "Reserve adequacy monitoring frequency", before: "Quarterly", after: "Continuous", change: "Continuous" },
	{ metric: "Regulatory stress test preparation", before: "Manual (weeks)", after: "Automated (days)", change: "Automated" }
];

const SUCCESS_FACTORS = [
	{
		title: "Granular data contains the signal that aggregates hide",
		desc: "A development triangle shows that average claim costs are increasing. It cannot show whether that increase is driven by severity, by legal representation rates, by injury type mix, or by a specific defendant solicitor cohort. ML models on granular claims data can identify the driver — which is also the early warning signal."
	},
	{
		title: "Emerging trends detection is a forward-looking reserve tool",
		desc: "The most accurate traditional reserving method is backward-looking by construction. A trend detection framework that monitors claim characteristics for statistically significant change provides a forward-looking input to the reserve — a 6-month early warning is worth more than a more accurate estimate of a trend that is already fully reflected."
	},
	{
		title: "Internal catastrophe modelling changes the capital conversation",
		desc: "An insurer dependent on an external catastrophe model for stress testing cannot easily interrogate the model's assumptions or apply it to scenario questions that aren't pre-built. An internal model enables the company to stress-test its own portfolio under bespoke scenarios, supporting both Solvency II requirements and strategic underwriting decisions."
	}
];

const FAQS = [
	{
		q: "What is the difference between IBNR and IBNER?",
		a: "IBNR (Incurred But Not Reported) is the reserve for claims that have occurred but not yet been reported to the insurer. IBNER (Incurred But Not Enough Reserved) is the reserve for the additional development expected on claims that have already been reported but where the current case reserve is insufficient. Together they form the total actuarial reserve needed above existing case reserves."
	},
	{
		q: "What is a catastrophe model in insurance?",
		a: "A catastrophe model is a simulation model estimating the expected insured losses from natural catastrophe events — earthquakes, hurricanes, floods, windstorms. It combines hazard models (the probability and severity of the physical event) with exposure data (the policies in force and their coverage terms) and vulnerability functions (how much damage a given event causes to different property types) to produce a loss distribution for the insurer's portfolio."
	}
];

export default function LossForecastingCaseStudy() {
	return (
		<>
			<SEO
				title="Predictive Loss Forecasting Case Study | OpenGridLabs"
				description="How Predictive Loss Forecasting Improved Reserve Accuracy 23% and Detected an Emerging Liability Trend 6 Months Early."
				canonical="/services/bfsi/loss-forecasting"
				keywords="Loss Forecasting, IBNR, Reserve Adequacy, Emerging Trends, Catastrophe Modelling, Predictive Reserving, ML Insurance, Actuarial Analytics, Solvency II, Insurance Technology, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Indigo Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(230,80%,60%) 0%, hsl(240,80%,55%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Insurance Technology"
					title="How Predictive Loss Forecasting Improved Reserve Accuracy 23% and Detected an Emerging Liability Trend 6 Months Early"
					description="A commercial insurer's reserving function was relying on development triangle methods that, by construction, could only detect claim trends after those trends had materialised in settled claims data — creating a structural lag between when a trend emerged and when the reserve reflected it. OpenGridLabs built a predictive loss forecasting platform using ML models on granular claims data, catching an emerging liability claim trend 6 months before it appeared in the triangles — preventing an £8M reserve inadequacy."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Commercial insurer (anonymised)" },
						{ label: "Lines", value: "Liability, property, motor fleet — 5 classes" },
						{ label: "Timeline", value: "11 months" },
						{ label: "Stack", value: "ML loss forecasting · Emerging trends · Cat modelling · Reserve adequacy monitoring" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-indigo-500/30"
					hoverTextClass="group-hover:text-indigo-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a commercial insurer with a substantial liability book — employer's liability, public liability, product liability, and motor fleet. The reserving process used standard actuarial development triangle methods, which are robust but inherently backward-looking — they estimate future development based on how historical claims have developed. When claims behaviour changes — a new legal trend, an emerging occupational disease, a legislative change affecting claim values — the triangles only detect it once enough claims have run through the system to change the development pattern.",
						"The specific incident driving the engagement: a change in solicitor behaviour following a legislative amendment was driving higher average settlements in employer's liability claims. The actuarial team observed the trend in closed claims data after 18 months of gradually changing settlement values. By the time the triangles reflected it, the reserve was £8M inadequate. OpenGridLabs built a platform that could detect changes in claim characteristics from granular claims data earlier — catching the next trend before it became a reserve problem.",
						"Insurance loss forecasting encompasses the methods used to predict future insurance losses — both the development of existing claims reserves (how much will claims already notified ultimately cost?) and the emergence of new claims (how many new claims will be notified, and what will they cost?)."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Loss Forecasting?"
					definitionText="Insurance loss forecasting encompasses the methods used to predict future insurance losses — both the development of existing claims reserves (how much will claims already notified ultimately cost?) and the emergence of new claims (how many new claims will be notified, and what will they cost?)."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-indigo-500/10"
					definitionIconBorderClass="border-indigo-500/20"
					definitionIconColorClass="text-indigo-400"
					glowColorClass="bg-indigo-400"
					gradientFromClass="from-indigo-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Reconstructing traditional backward-looking methods with granular predictive models, emerging trend models, and automated stress testing."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Loss Forecasting Platform Architecture"}
					description={"Data ingestion pipelines streaming into real-time forecasting engines, sensitivity scenario triggers, and continuous adequacy monitors."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-indigo-400"}
					highlightColorClass={"bg-indigo-400"}
					gradientColorClass={"via-indigo-400/50"}
					alertBorderClass={"border-indigo-500/20"}
					alertBgClass={"bg-indigo-500/5"}
					alertTextColorClass={"text-indigo-300"}
					alertTitle={"Regulatory & Compliance Governance"}
					alertText={"All InsurTech solutions are built with FCA/PRA regulatory compliance, data privacy (GDPR), and actuarial governance as first-class design requirements. Audit trails, model validation, and data lineage are embedded from day one — not retrofitted before examination."}
					rightColumnTitle={"Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 3-phase roadmap leading from initial database integrations to trend analysis engines and continuous compliance stress-testing."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Decimating forecasting latency, raising calculation accuracy indices, and securing portfolios against capital shortfalls."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The liability trend was already in the data when we looked back at it. The ML model could see it in the claim characteristics — average instructed solicitor rates going up, settlement patterns changing — six months before the triangles reflected it. That's the difference between managing a reserve problem and discovering it."}
					author={"Chief Actuary"}
					subtitle={"Confidential Commercial Insurer"}
					accentLineClass={"bg-indigo-400"}
					iconColorClass={"text-indigo-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-indigo-500/20"}
					iconColorClass={"text-indigo-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-indigo-400"}
					activeChevronColorClass={"text-indigo-400"}
				/>

				<CaseStudyCta 
					title={"Detecting reserve problems 18 months after the trend started?"}
					description={"OpenGridLabs builds predictive loss forecasting platforms — ML IBNR models, emerging trends detection, and continuous reserve monitoring — that catch trends before they become reserve inadequacies."}
					moreCaseStudiesLink={"/services/bfsi"}
					glowBgClass={"bg-indigo-400"}
					iconColorClass={"text-indigo-400"}
					btnGradientClass={"from-indigo-500 to-violet-500"}
					btnShadowColor={"99,102,241,0.2"}
				/>
			</div>
		</>
	);
}
