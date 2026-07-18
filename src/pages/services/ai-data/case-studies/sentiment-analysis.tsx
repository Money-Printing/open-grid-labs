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
	{ value: "5", label: "Customer channels scored for sentiment", accent: "from-emerald-400 to-teal-500" },
	{ value: "-46%", label: "Faster escalation of negative experiences", accent: "from-cyan-400 to-blue-500" },
	{ value: "82%", label: "Agreement with expert-labeled sentiment samples", accent: "from-purple-500 to-indigo-500" },
	{ value: "8 wk", label: "From manual reading to sentiment monitoring", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "Language data arrived from multiple channels with inconsistent formats, quality, and metadata" },
	{ text: "Manual review created slow turnaround times and uneven decisions between teams" },
	{ text: "Early NLP prototypes were difficult to evaluate, monitor, and connect to production workflows" },
	{ text: "Business users needed confidence scores, audit trails, and human review for sensitive cases" },
	{ text: "There was no reusable pattern for deploying the capability across products and teams" }
];

const SOLUTIONS = [
	{ text: "A production NLP pipeline for intake, cleaning, enrichment, model inference, and structured output delivery" },
	{ text: "Evaluation datasets, quality thresholds, and confidence scoring tailored to the business workflow" },
	{ text: "Human-in-the-loop review for low-confidence, high-risk, or compliance-sensitive outputs" },
	{ text: "Dashboards for volume, accuracy, latency, drift, exception rates, and downstream adoption" },
	{ text: "Reusable APIs and integration patterns so the capability could scale beyond the first use case" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Intake", items: ["Documents", "Chats", "Tickets", "Emails", "Calls", "Product events"], color: "hsl(150,100%,45%)" },
	{ title: "Process", items: ["Normalization", "Language detection", "Cleaning", "Chunking", "Metadata enrichment", "PII controls"], color: "hsl(180,100%,50%)" },
	{ title: "Intelligence", items: ["NLP model inference", "Confidence scoring", "Rules & prompts", "Human review", "Quality checks"], color: "hsl(280,100%,65%)" },
	{ title: "Delivery", items: ["Workflow actions", "Dashboards", "Search & analytics", "CRM updates", "Monitoring alerts"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Discovery, Data Audit & Success Metrics (Weeks 1-3)",
		desc: "OpenGridLabs audited source data, mapped user workflows, selected representative samples, and defined success metrics. The team created evaluation sets that reflected real language variation, including short messages, noisy inputs, domain terminology, and edge cases.",
		accent: "from-emerald-400 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Model Workflow & Human Review (Weeks 4-7)",
		desc: "The team built the NLP workflow with preprocessing, model inference, confidence scoring, fallback rules, and human review. Outputs were tested against baseline manual decisions and refined with business users until the system met quality and usability thresholds.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Integration, Monitoring & Enablement (Weeks 8-10)",
		desc: "The final phase connected the workflow to production systems, dashboards, alerts, and team runbooks. Client teams were trained to review outputs, monitor quality, update examples, and extend the pattern to future NLP use cases.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Channels monitored", before: "1 channel", after: "5 channels", change: "Expanded" },
	{ metric: "Negative escalation time", before: "Baseline", after: "54% of baseline", change: "-46%" },
	{ metric: "Sentiment label agreement", before: "Manual variation", after: "82% agreement", change: "Stabilized" },
	{ metric: "Weekly sentiment reporting", before: "Manual deck", after: "Live dashboard", change: "Automated" },
	{ metric: "At-risk conversations routed", before: "Ad hoc", after: "Priority queue", change: "Operational" }
];

const SUCCESS_FACTORS = [
	{
		title: "Real evaluation data",
		desc: "The team tested against examples from live workflows, not generic benchmark text, so the results reflected actual business language."
	},
	{
		title: "Confidence-based routing",
		desc: "High-confidence outputs were automated while uncertain cases went to human review, balancing speed with control."
	},
	{
		title: "Workflow integration",
		desc: "The NLP output appeared where teams already worked, which improved adoption and reduced context switching."
	},
	{
		title: "Monitoring after launch",
		desc: "Quality, latency, drift, and exception rates were tracked continuously so the system could improve after deployment."
	}
];

const FAQS = [
	{
		q: "What is Sentiment Analysis?",
		a: "Sentiment Analysis is an NLP capability that uses language models, rules, and workflow logic to process text or speech and return useful structured outputs. It can support automation, analytics, search, routing, content creation, or customer-facing product experiences depending on the use case."
	},
	{
		q: "Why do companies use Sentiment Analysis?",
		a: "Companies use Sentiment Analysis to reduce manual language work, improve consistency, speed up decisions, and extract value from unstructured text or speech. The best implementations combine model automation with evaluation, monitoring, governance, and human review for sensitive cases."
	}
];

export default function SentimentAnalysisCaseStudy() {
	return (
		<>
			<SEO
				title="Sentiment Analysis Case Study | OpenGridLabs"
				description="How OpenGridLabs built a sentiment analysis workflow scoring 5 customer channels, cutting negative escalation time by 46% and achieving 82% label agreement."
				canonical="/services/ai-data/sentiment-analysis"
				keywords="Sentiment Analysis, Customer Sentiment, Opinion Mining, NLP Classification, Support Triage, Voice of Customer, Emotion Detection, Customer Experience AI"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(150,100%,45%) 0%, hsl(220,100%,50%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Natural Language Processing"
					title="How Sentiment Analysis Made Customer Sentiment Measurable Across Every Channel"
					description="A customer experience team could see reviews, tickets, calls, and chat messages, but sentiment was measured manually and too late to act. OpenGridLabs built a sentiment analysis workflow that scored emotional tone, tracked trend shifts, and routed high-risk conversations faster."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Customer experience and support operations (anonymised)" },
						{ label: "Scope", value: "5 channels monitored" },
						{ label: "Timeline", value: "8 weeks to production" },
						{ label: "Stack", value: "Sentiment Model · Trend Analysis · Routing · Monitoring" }
					]}
				/>

				<CaseStudyCarousel
					slug="sentiment-analysis"
					title="Sentiment Analysis"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/sentiment-analysis/1.jpg",
						"/images/case-studies/sentiment-analysis/2.jpg"
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
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had large volumes of language data moving through customer conversations, product workflows, support queues, documents, and internal knowledge systems. Teams knew the text contained useful signals, but the work depended on manual review, inconsistent tagging, and slow handoffs between business teams and engineering.",
						"The company needed Sentiment Analysis that could move beyond a prototype and support real operational decisions. OpenGridLabs designed the NLP workflow, quality controls, integrations, and monitoring needed to make the capability reliable in production.",
						"Sentiment Analysis applies natural language processing to turn text or speech into structured outputs that software teams can search, route, summarize, score, translate, answer, generate, or act on. In production, it requires data preparation, model evaluation, quality controls, monitoring, and workflow integration."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Sentiment Analysis?"
					definitionText="Sentiment Analysis applies natural language processing to turn text or speech into structured outputs that software teams can search, route, summarize, score, translate, answer, generate, or act on. In production, it requires data preparation, model evaluation, quality controls, monitoring, and workflow integration."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-emerald-500/10"
					definitionIconBorderClass="border-emerald-500/20"
					definitionIconColorClass="text-emerald-400"
					glowColorClass="bg-emerald-400"
					gradientFromClass="from-emerald-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Channel Monitoring Gaps Resolved"}
					description={"How OpenGridLabs turned scattered manual sentiment readings into a live, multi-channel scoring platform."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a production NLP architecture that connected data intake, language processing, model inference, quality review, and downstream workflow actions. The result was a reusable pattern that could scale across channels and use cases."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Design for reviewability as much as automation"}
					alertText={"The implementation focused on making outputs explainable, auditable, and easy to override. That gave teams confidence to use NLP automation in live workflows without losing control of edge cases."}
					rightColumnTitle={"Sentiment Analysis Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over eight weeks, moving from discovery and evaluation into production workflow integration and long-term monitoring."}
					phaseColors={[ "hsl(150,100%,45%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after deployment against the client's pre-engagement baseline. The strongest gains came from making language workflows measurable, repeatable, and connected to operational systems."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The biggest change was that sentiment analysis stopped being an experiment and became part of the way work moved through the business. The system gave us speed, consistency, and enough visibility to trust the outputs."}
					author={"Director of Operations"}
					subtitle={"Confidential Client"}
					accentLineClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
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
					title={"Ready to build production-ready Sentiment Analysis?"}
					description={"OpenGridLabs designs NLP systems for sentiment analysis, including data pipelines, model workflows, evaluation, human review, monitoring, and integrations with the tools your teams already use."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-400"}
					btnGradientClass={"from-emerald-400 to-cyan-500"}
					btnShadowColor={"16,185,129,0.2"}
				/>
			</div>
		</>
	);
}
