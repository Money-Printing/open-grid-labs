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
	{ value: "100%", label: "Production models with explanations", accent: "from-cyan-400 to-blue-500" },
	{ value: "4×", label: "Faster model-approval & review cycle", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "63%", label: "Drop in support escalations", accent: "from-pink-500 to-rose-400" },
	{ value: "10 wk", label: "From prototype to full production", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "High-stakes decisions came from black-box models the team could not explain on demand" },
	{ text: "Enterprise deals stalled in security, risk, and compliance review over model opacity" },
	{ text: "No consistent way to detect or document bias across protected groups before release" },
	{ text: "Each model approval was a slow, manual, inconsistent review with no standard evidence" },
	{ text: "Customer-facing teams had no clear explanation to give when a decision was challenged" }
];

const SOLUTIONS = [
	{ text: "A model-agnostic explainability service producing SHAP and LIME attributions for every prediction" },
	{ text: "Automated model cards documenting purpose, data, performance, and limitations for each model" },
	{ text: "Continuous bias and fairness monitoring across protected groups with alerting on drift" },
	{ text: "Audience-tailored explanations—technical for reviewers, plain-language for customers" },
	{ text: "An audit trail capturing explanations and approvals to satisfy regulators and enterprise buyers" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Inputs", items: ["Production Models", "Prediction Requests", "Training & Feature Data", "Protected-Attribute Metadata"], color: "hsl(180,100%,50%)" },
	{ title: "Explanation", items: ["SHAP Feature Attribution", "LIME Local Surrogates", "Counterfactual Examples", "Global Feature Importance"], color: "hsl(210,100%,50%)" },
	{ title: "Fairness & Docs", items: ["Bias & Fairness Metrics", "Drift Detection", "Automated Model Cards", "Approval Workflow"], color: "hsl(280,100%,65%)" },
	{ title: "Delivery", items: ["Technical & Plain-Language Views", "Dashboards & APIs", "Immutable Audit Trail", "Regulator-Ready Exports"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Explanation Foundation (Weeks 1–4)",
		desc: "OpenGridLabs built a model-agnostic explanation service and validated SHAP and LIME outputs against the client's highest-stakes models, confirming that attributions were faithful and stable. The team worked with data scientists to ensure explanations matched genuine model behaviour rather than producing plausible-looking but misleading rationales.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Fairness Monitoring & Model Cards (Weeks 5–8)",
		desc: "Continuous bias and fairness monitoring was added across protected groups, with alerting on disparity and drift. Automated model cards were introduced to document each model's purpose, data, performance, and limitations in a consistent format—turning a slow manual write-up into a generated artifact attached to every model release.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Delivery, Audit Trail & Hardening (Weeks 9–10)",
		desc: "Audience-tailored explanation views were finalised—detailed attributions for reviewers and plain-language summaries for customer-facing teams. An immutable audit trail captured every explanation and approval, with regulator-ready exports. The client's reviewers were trained to run the approval workflow themselves so transparency standards would hold across future models.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Production models with explanations", before: "0%", after: "100%", change: "Full coverage" },
	{ metric: "Model approval & review cycle time", before: "~3 weeks", after: "~4 days", change: "4× faster" },
	{ metric: "Deals stalled in compliance review", before: "Frequent", after: "Rare", change: "Unblocked" },
	{ metric: "Support escalations questioning decisions", before: "Baseline", after: "37% of baseline", change: "−63%" },
	{ metric: "Bias issues caught pre-release", before: "None tracked", after: "Monitored & alerted", change: "New capability" },
	{ metric: "Model documentation coverage", before: "Ad hoc", after: "Automated model cards", change: "Standardised" },
	{ metric: "Underlying model accuracy", before: "Baseline", after: "Unchanged", change: "No trade-off" }
];

const SUCCESS_FACTORS = [
	{
		title: "Faithful explanations, not flattering ones",
		desc: "Attributions were validated against real model behaviour, so explanations reflected the true drivers of each decision rather than producing plausible-sounding rationalisations that would mislead reviewers and regulators."
	},
	{
		title: "Wrap, don't replace",
		desc: "Building a model-agnostic layer over existing models meant the client gained transparency without abandoning the high-accuracy models their business relied on—avoiding the false choice between performance and interpretability."
	},
	{
		title: "Explanations for the right audience",
		desc: "Reviewers needed rigorous feature attributions; customers needed plain language. Serving both from the same underlying explanation made the system useful across compliance, sales, and support rather than just data science."
	},
	{
		title: "Fairness and audit built in",
		desc: "Continuous bias monitoring and an immutable audit trail turned responsible AI from a periodic scramble into an automatic property of every model release—satisfying regulators and enterprise buyers by default."
	}
];

const FAQS = [
	{
		q: "What is explainable AI (XAI)?",
		a: "Explainable AI is a set of methods that make machine-learning decisions understandable to humans. Instead of treating a model as an opaque black box, techniques such as SHAP and LIME show which input features drove a given prediction—helping teams build trust, detect bias, debug models, and satisfy regulatory requirements for transparency."
	},
	{
		q: "What is the difference between SHAP and LIME?",
		a: "SHAP uses game theory to assign each feature a consistent contribution to a prediction, giving globally coherent, audit-grade explanations at higher compute cost. LIME approximates the model locally with a simpler surrogate, making it faster but less globally consistent. Production systems often use both—LIME for fast individual checks and SHAP for rigorous analysis."
	}
];

export default function ExplainableAICaseStudy() {
	return (
		<>
			<SEO
				title="Explainable AI Case Study | OpenGridLabs"
				description="How Explainable AI made black-box models audit-ready, cutting review cycles by 4x and support escalations by 63% for a regulated AI company."
				canonical="/services/ai-data/explainable-ai"
				keywords="Explainable AI, XAI, SHAP, LIME, model interpretability, bias detection, AI audit, model cards"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(140,100%,55%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Explainable AI"
					title="How Explainable AI Made Black-Box Models Audit-Ready for a Regulated AI Company"
					description="A rapidly growing AI company operating in a regulated market partnered with OpenGridLabs to make its high-accuracy but opaque models explainable—combining SHAP and LIME attributions, automated model cards, and continuous bias monitoring to deliver transparency regulators, customers, and internal reviewers could trust."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scope", value: "40+ models in production" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "SHAP · LIME · Model Cards · Bias Monitoring" }
					]}
				/>

				<CaseStudyCarousel
					slug="explainable-ai"
					title="Explainable AI"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/explainable-ai/1.jpg",
						"/images/case-studies/explainable-ai/2.jpg"
					]}
				/>

				

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-cyan-500/30"
					hoverTextClass="group-hover:text-cyan-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a venture-backed AI company whose models make high-stakes decisions—risk scoring, eligibility, and prioritization—for enterprise customers in a regulated market. Their models were accurate, and accuracy had won them early business. But as they moved upmarket, every prospect's procurement, risk, and compliance teams began asking the same question their own data scientists could not always answer: why did the model decide that?",
						"The models were effective black boxes. When a customer challenged a decision, the team could show the output but not the reasoning. Regulators were signalling that opaque automated decisions would face growing scrutiny, enterprise deals were stalling in security and compliance review, and internal reviewers had no consistent way to check models for bias before release. The company didn't need more accurate models. They needed models that were transparent, auditable, and trustworthy—without sacrificing the performance that made them valuable.",
						"Explainable AI is a set of methods that make machine-learning decisions understandable to humans. Rather than treating a model as an opaque black box, techniques like SHAP and LIME reveal which input features drove a given prediction—helping teams build trust, detect bias, debug models, and meet regulatory requirements for transparency, without replacing the underlying high-performance model."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Is Explainable AI (XAI)?"
					definitionText="Explainable AI is a set of methods that make machine-learning decisions understandable to humans. Rather than treating a model as an opaque black box, techniques like SHAP and LIME reveal which input features drove a given prediction—helping teams build trust, detect bias, debug models, and meet regulatory requirements for transparency, without replacing the underlying high-performance model."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-cyan-500/10"
					definitionIconBorderClass="border-cyan-500/20"
					definitionIconColorClass="text-cyan-400"
					glowColorClass="bg-cyan-400"
					gradientFromClass="from-cyan-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Opacity Bottlenecks Overcome"}
					description={"How OpenGridLabs engineered real-time feature attributions and bias auditing to clear enterprise sales and regulator hurdles."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Explainable AI Platform Architecture"}
					description={"OpenGridLabs designed a model-agnostic explainability layer that wraps the client's existing models without changing them. It intercepts predictions, generates explanations, monitors for bias, and produces documentation and audit trails—turning transparency into an automatic property of every model in production rather than a manual afterthought."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Transparency without a performance trade-off"}
					alertText={"Because the explainability layer wraps existing models rather than replacing them, the client kept the accuracy that made their product valuable. Explanations are computed alongside predictions—cached and pre-computed where latency matters—so transparency adds trust and auditability without forcing a switch to simpler, less capable models."}
					rightColumnTitle={"Explainable AI Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to deliver explainability on the highest-risk models first while building toward firm-wide coverage. OpenGridLabs embedded a cross-functional team of ML engineers, a responsible-AI specialist, and a platform architect working alongside the client's data-science and compliance teams."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines. The results showed that explainability strengthened trust, accelerated sales and approvals, and reduced risk—without degrading the model performance the business depended on."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We used to win on accuracy and then lose months in compliance review. Now every prediction comes with a clear, defensible reason—our reviewers move faster, our customers trust the output, and we kept the model performance that got us here."}
					author={"Head of Data Science"}
					subtitle={"Confidential AI Company"}
					accentLineClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-cyan-500/20"}
					iconColorClass={"text-cyan-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-cyan-400"}
					activeChevronColorClass={"text-cyan-400"}
				/>

				<CaseStudyCta 
					title={"Ready to make your AI models transparent and audit-ready?"}
					description={"OpenGridLabs builds explainable AI layers—SHAP, LIME, model cards, and bias monitoring—so your models earn trust from customers, reviewers, and regulators without sacrificing performance."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-400"}
					btnGradientClass={"from-cyan-400 to-purple-500"}
					btnShadowColor={"34,211,238,0.2"}
				/>
			</div>
		</>
	);
}
