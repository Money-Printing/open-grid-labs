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
	{ value: "18%", label: "Improvement in model lift on priority use cases", accent: "from-purple-500 to-indigo-500" },
	{ value: "134", label: "Reusable, documented features in production", accent: "from-cyan-400 to-blue-500" },
	{ value: "-42%", label: "Reduction in feature prep & training cycles", accent: "from-pink-500 to-rose-400" },
	{ value: "8 wk", label: "From ad hoc notebooks to governed pipelines", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Important features lived in notebooks, spreadsheets, and SQL fragments with no shared source of truth" },
	{ text: "Training transformations did not always match production transformations, creating prediction drift" },
	{ text: "Aggregation windows were inconsistent, which introduced hidden leakage into several experiments" },
	{ text: "Missing values, outliers, and categorical encodings were handled differently across models" },
	{ text: "Feature quality issues were found late, after failed training runs or poor production predictions" }
];

const SOLUTIONS = [
	{ text: "A governed feature catalog with definitions, owners, freshness rules, and usage notes" },
	{ text: "Reusable feature pipelines that generate the same logic for offline training and online inference" },
	{ text: "Time-aware aggregation design to prevent leakage and align features to prediction moments" },
	{ text: "Standard preprocessing patterns for missing values, outliers, categorical variables, and scaling" },
	{ text: "Automated validation checks for freshness, distribution shifts, null rates, and schema changes" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Source Data", items: ["Product events", "CRM records", "Billing data", "Support tickets", "Usage logs", "Customer attributes"], color: "hsl(180,100%,50%)" },
	{ title: "Transform", items: ["Time-windowed aggregations", "Encodings", "Normalisation", "Missing-value handling", "Leakage-safe joins"], color: "hsl(210,100%,50%)" },
	{ title: "Feature Layer", items: ["Feature catalog", "Offline/online parity", "Validation tests", "Freshness rules", "Lineage & ownership"], color: "hsl(280,100%,65%)" },
	{ title: "ML Use", items: ["Training datasets", "Batch scoring", "Real-time inference", "Monitoring dashboards", "Model explainability"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Feature Audit & Signal Design (Weeks 1-2)",
		desc: "The team audited existing notebooks, SQL queries, and production scoring code to identify duplicated logic, leakage risks, and inconsistent definitions. We then designed a feature taxonomy across customer behavior, account health, product adoption, billing patterns, and support intensity, prioritising features with clear business meaning and predictive value.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Reusable Pipelines & Validation (Weeks 3-6)",
		desc: "OpenGridLabs built reusable feature pipelines with time-aware joins, stable aggregation windows, missing-value strategies, categorical encodings, and outlier handling. Validation checks were added for schema changes, freshness, null rates, distribution shifts, and value ranges so broken features were caught before training or inference.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Production Rollout & Team Enablement (Weeks 7-8)",
		desc: "The final phase connected the feature layer to model training and batch scoring workflows, documented the feature catalog, and trained the client team on how to add new features safely. The result was a repeatable feature engineering process that supported both experimentation and production ML operations.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Reusable production features", before: "Fragmented logic", after: "134 cataloged features", change: "Reusable" },
	{ metric: "Model lift on priority use cases", before: "Baseline", after: "1.18x baseline", change: "+18%" },
	{ metric: "Feature preparation cycle time", before: "Baseline", after: "58% of baseline", change: "-42%" },
	{ metric: "Training-production feature parity", before: "Manual rewrites", after: "Shared pipeline logic", change: "Aligned" },
	{ metric: "Data leakage incidents found in review", before: "7 risks", after: "0 active risks", change: "Resolved" },
	{ metric: "Feature quality checks", before: "Ad hoc", after: "Automated coverage", change: "New capability" },
	{ metric: "Time to add a new approved feature", before: "Several days", after: "Same-day path", change: "Faster iteration" }
];

const SUCCESS_FACTORS = [
	{
		title: "Time-aware design from the start",
		desc: "Every feature was aligned to the prediction moment, which prevented future information from leaking into training data and made offline evaluation more trustworthy."
	},
	{
		title: "One definition for training and production",
		desc: "Shared transformation logic removed the common gap where a feature behaves one way in a notebook and another way in production scoring."
	},
	{
		title: "Validation before modeling",
		desc: "Freshness, null-rate, schema, and distribution checks caught data quality problems before they consumed model development time or affected customers."
	},
	{
		title: "Business meaning, not only statistical signal",
		desc: "Features were documented in language product and operations teams could understand, making model explanations easier and improving stakeholder confidence."
	}
];

const FAQS = [
	{
		q: "What is feature engineering design?",
		a: "Feature engineering design is the process of planning and building the transformations that turn raw data into useful machine learning inputs. It includes feature definitions, aggregation windows, encodings, scaling, missing-value handling, leakage prevention, validation, and reuse across training and production."
	},
	{
		q: "Why does feature engineering matter for machine learning projects?",
		a: "Machine learning models learn from the signals they are given. Strong feature design can improve predictive performance, make models easier to explain, speed up experimentation, and prevent production failures caused by inconsistent transformation logic or poor data quality."
	}
];

export default function FeatureEngineeringCaseStudy() {
	return (
		<>
			<SEO
				title="Feature Engineering Case Study | OpenGridLabs"
				description="How OpenGridLabs designed reusable feature pipelines, validation rules, and a governed feature store layer to improve model lift by 18%."
				canonical="/services/ai-data/feature-engineering"
				keywords="Feature Engineering, Machine Learning Features, Feature Store, Data Preprocessing, Feature Validation, MLOps, Data Transformation"
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
					categoryTag="Case Study · Feature Engineering"
					title="How Feature Engineering Design Turned Messy Operational Data Into High-Performing ML Signals"
					description="A growth-stage company partnered with OpenGridLabs to design reusable feature pipelines, validation rules, and a governed feature layer—improving model lift by 18%, reducing training cycles by 42%, and securing absolute offline-online parity."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Data-rich SaaS platform (anonymised)" },
						{ label: "Scope", value: "134 production features" },
						{ label: "Timeline", value: "8 weeks to rollout" },
						{ label: "Stack", value: "Feature Pipelines · Validation · Feature Store · ML Ops" }
					]}
				/>

				<CaseStudyCarousel
					slug="feature-engineering"
					title="Feature Engineering"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/feature-engineering/1.jpg",
						"/images/case-studies/feature-engineering/2.jpg"
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
						"The client operated a data-rich SaaS platform with millions of product events, customer actions, billing records, and support interactions. The data science team had already built churn, upsell, and risk prediction models, but performance changed from experiment to experiment. Features were created inside notebooks, rewritten for production, and interpreted differently by each team.",
						"The problem was not a lack of data or modeling talent. It was weak feature engineering design: no consistent feature definitions, no clear aggregation windows, limited validation, and no reliable way to ensure that training data matched production data. OpenGridLabs was brought in to design the feature layer that would turn raw operational data into trusted, reusable machine learning signals.",
						"Feature engineering design is the structured process of defining, transforming, validating, and operating model inputs. It covers how raw data becomes features, how time windows are chosen, how missing values and categorical variables are handled, how leakage is prevented, and how the same logic is reused consistently during training and inference."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is Feature Engineering Design?"
					definitionText="Feature engineering design is the structured process of defining, transforming, validating, and operating model inputs. It covers how raw data becomes features, how time windows are chosen, how missing values and categorical variables are handled, how leakage is prevented, and how the same logic is reused consistently during training and inference."
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
					title={"Five Feature Engineering Bottlenecks Overcome"}
					description={"How OpenGridLabs built a unified governed feature layer for reliable pipeline orchestration."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Feature Architecture"}
					description={"OpenGridLabs designed a feature engineering layer between raw operational data and machine learning models. The architecture made feature logic reusable, testable, and traceable, with validation built into every stage so data problems could be caught before they affected model training or production predictions."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Design features as production assets, not experiment leftovers"}
					alertText={"The key shift was treating features like maintained software components. Each high-value feature had a definition, owner, test coverage, freshness expectation, and lineage trail. That made model development faster because teams could reuse trusted signals instead of rebuilding transformations from scratch."}
					rightColumnTitle={"Feature Engineering Design Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over eight weeks. OpenGridLabs worked with data engineering, data science, and product analytics teams to convert repeated transformation work into reliable feature pipelines."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured across priority churn, upsell, and account-risk models after the new feature layer was used in production scoring."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our models did not need another month of tuning. They needed cleaner, more consistent signals. Once the feature layer was in place, experimentation became faster and production predictions became much easier to trust."}
					author={"Head of Data Science"}
					subtitle={"Confidential SaaS Platform"}
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
					title={"Ready to turn raw data into reliable ML signals?"}
					description={"OpenGridLabs designs feature engineering systems, reusable feature pipelines, validation checks, and production-ready data layers that help machine learning teams move faster with more confidence."}
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
