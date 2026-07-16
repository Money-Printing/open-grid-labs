import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Activity, 
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
	{ value: "71%", label: "Reduction in per-query inference cost", accent: "from-cyan-400 to-blue-500" },
	{ value: "3.2×", label: "Faster median response latency", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "38%", label: "Increase in answer accuracy on eval sets", accent: "from-pink-500 to-rose-400" },
	{ value: "12 wk", label: "From prototype to full production deployment", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Every request—trivial or complex—hit a single frontier model, making inference cost the largest line item in COGS" },
	{ text: "Responses occasionally fabricated facts not present in the customer's own documents, undermining enterprise trust" },
	{ text: "P95 latency exceeded 9 seconds during peak load, hurting user experience and retention" },
	{ text: "No systematic evaluation harness—quality regressions shipped silently with each prompt change" },
	{ text: "Zero observability into token spend, cache behaviour, or per-customer cost attribution" }
];

const SOLUTIONS = [
	{ text: "Intelligent model-routing layer directing simple queries to small fine-tuned models and reserving frontier models for hard cases" },
	{ text: "Retrieval-augmented generation grounding every answer in the customer's own indexed knowledge base" },
	{ text: "Semantic caching that returns vetted answers for repeated and near-duplicate queries instantly" },
	{ text: "An automated evaluation harness with golden datasets gating every model and prompt change before release" },
	{ text: "Full LLMOps observability dashboard with token spend, latency, and per-customer cost attribution" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Ingestion", items: ["Document Loaders", "Chunking & Embedding Pipeline", "Vector Database", "Metadata & Access-Control Indexing"], color: "hsl(180,100%,50%)" },
	{ title: "Orchestration", items: ["Intent Classification", "Model Router", "Prompt Templating", "Semantic Cache", "Token Budgeting & Rate Limiting"], color: "hsl(210,100%,50%)" },
	{ title: "Model Layer", items: ["Fine-Tuned Small Models", "Frontier Model Fallback", "RAG Retriever", "Re-Ranker", "Structured Output & Guardrails"], color: "hsl(280,100%,65%)" },
	{ title: "Eval & Ops", items: ["Automated Eval Harness", "Golden Datasets", "Cost & Latency Telemetry", "Hallucination & Drift Monitoring", "Human Feedback Loop"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Evaluation Baseline & RAG Foundation (Weeks 1–4)",
		desc: "Before changing anything, OpenGridLabs built an evaluation harness with golden datasets drawn from real customer queries and expert-labelled answers. This made quality measurable for the first time. In parallel, the team stood up the retrieval pipeline—chunking, embedding, and indexing customer documents—so the model could be grounded in trusted data rather than relying on parametric memory.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Fine-tuning & Model Routing (Weeks 5–9)",
		desc: "Using the labelled data, OpenGridLabs fine-tuned compact open models to match frontier-model quality on the most common query types at a fraction of the cost. An intent classifier and router were introduced to send each request to the cheapest model that could answer it correctly, escalating to the frontier model only when confidence was low. Every routing rule was validated against the eval harness before going live.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Caching, Observability & Hardening (Weeks 10–12)",
		desc: "Semantic caching was layered in to eliminate redundant inference on repeated queries. A full observability dashboard exposed token spend, latency percentiles, cache hit rates, and per-customer cost. Guardrails for structured output and hallucination detection were finalised, and the client's engineers were trained to run the eval harness themselves so quality gates would outlast the engagement.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Per-query inference cost", before: "Baseline", after: "29% of baseline", change: "−71%" },
	{ metric: "Median response latency", before: "4.8 s", after: "1.5 s", change: "−69%" },
	{ metric: "P95 latency (peak load)", before: "9.2 s", after: "3.1 s", change: "−66%" },
	{ metric: "Answer accuracy (eval set)", before: "61%", after: "84%", change: "+38%" },
	{ metric: "Hallucination rate", before: "9.4%", after: "1.2%", change: "−87%" },
	{ metric: "Cache hit rate (repeat queries)", before: "0%", after: "41%", change: "+41 pts" },
	{ metric: "Gross margin on AI features", before: "—", after: "+34 points", change: "Margin restored" }
];

const SUCCESS_FACTORS = [
	{
		title: "Evaluation before optimisation",
		desc: "By building a measurable eval harness in week one, every subsequent change could be judged on evidence rather than intuition. This turned a subjective 'does it feel better?' debate into a quantifiable quality gate."
	},
	{
		title: "Right-sizing the model to the task",
		desc: "Most queries did not need a frontier model. Routing the easy majority to small fine-tuned models—and reserving expensive capacity for genuinely hard cases—was the single largest driver of the cost reduction."
	},
	{
		title: "RAG for truth, fine-tuning for behaviour",
		desc: "By combining them: retrieval grounded answers in the customer's real data, while fine-tuning shaped tone, format, and domain reasoning. The combination cut hallucinations sharply."
	},
	{
		title: "Observability as a first-class feature",
		desc: "Per-customer cost and latency telemetry meant the client could finally price, forecast, and optimise with confidence—turning their LLM from an unpredictable expense into a managed, profitable capability."
	}
];

const FAQS = [
	{
		q: "What is the difference between RAG and fine-tuning?",
		a: "Retrieval-augmented generation grounds a model in external, up-to-date knowledge at query time, making it ideal for factual accuracy and frequently changing data. Fine-tuning adjusts the model's weights to specialise its tone, format, and reasoning. In production, the two are complementary—fine-tuning shapes behaviour while RAG supplies current, trusted knowledge."
	},
	{
		q: "How do you reduce LLM inference costs at scale?",
		a: "The biggest levers are intelligent model routing (sending simple queries to smaller, cheaper models), semantic caching of repeated work, prompt compression, and substituting compact fine-tuned models for large general-purpose ones wherever accuracy allows. Together these can reduce per-query costs by well over half without sacrificing quality."
	}
];

export default function LargeLanguageModelsCaseStudy() {
	return (
		<>
			<SEO
				title="LLM Cost & Latency Optimization Case Study | OpenGridLabs"
				description="How OpenGridLabs cut LLM inference costs by 71% and sped up response latency by 3.2x for an enterprise knowledge assistant product."
				canonical="/services/ai-data/large-language-models"
				keywords="Large Language Models, LLM inference cost, RAG, Fine-tuning, Small Language Models, LLMOps"
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
					categoryTag="Case Study · Artificial Intelligence"
					title="How Production-Grade LLMs Cut Inference Costs 71% for a High-Growth AI Company"
					description="A fast-scaling AI product company partnered with OpenGridLabs to take large language models from promising prototype to reliable production—combining fine-tuning, retrieval-augmented generation, and intelligent model routing to deliver accuracy and economics that finally made sense at scale."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scale", value: "8M+ queries / month" },
						{ label: "Timeline", value: "12 weeks to production" },
						{ label: "Stack", value: "LLM Fine-tuning · RAG · Model Routing · LLMOps" }
					]}
				/>

				<CaseStudyCarousel
					slug="large-language-models"
					title="Large Language Models"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/large-language-models/1.jpg",
						"/images/case-studies/large-language-models/2.jpg"
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
						"Our client is a venture-backed AI company building a knowledge-assistant product used by enterprise customers across legal, financial, and technical-support teams. After an early version built on a single large general-purpose model proved the concept, adoption grew faster than the infrastructure could economically support. By the time they engaged OpenGridLabs, the product was serving more than eight million queries per month—and the unit economics were heading in the wrong direction.",
						"Every query, simple or complex, was routed to the same expensive frontier model. Latency was inconsistent, responses occasionally hallucinated facts that weren't in the customer's own data, and the cost of goods sold was eroding gross margin to the point where leadership feared it would threaten the next funding round. The team didn't need a better demo. They needed large language models that were accurate, fast, observable, and economically sustainable in production.",
						"A working prompt is not a production system. Productionizing a large language model means grounding it in trusted data (RAG), specialising its behaviour where needed (fine-tuning), routing each request to the right-sized model, caching repeated work, and wrapping the whole pipeline in evaluation, monitoring, and guardrails so quality and cost stay predictable at scale."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Does It Mean to Productionize an LLM?"
					definitionText="A working prompt is not a production system. Productionizing a large language model means grounding it in trusted data (RAG), specialising its behaviour where needed (fine-tuning), routing each request to the right-sized model, caching repeated work, and wrapping the whole pipeline in evaluation, monitoring, and guardrails so quality and cost stay predictable at scale."
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
					title={"Five Optimization Challenges Overcome"}
					description={"How OpenGridLabs transformed an expensive, hallucinating prototype into a fast, predictable enterprise system."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a layered LLM platform that sits between the client's application and the underlying model providers. The architecture is provider-agnostic—models can be swapped or added without application changes—and is built for evaluation, cost control, and regulatory-grade data handling from the ground up."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Privacy-first by design"}
					alertText={"Customer data stays isolated per tenant, with retrieval scoped by access controls so no answer can leak across organisations. Prompts and completions are logged but redacted of PII, and no customer data is used to train shared models."}
					rightColumnTitle={"Production LLM Platform Architecture"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"OpenGridLabs embedded a cross-functional team of ML engineers, an LLM evaluation specialist, and a platform architect alongside the client's team."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, demonstrating massive quality and cost optimization."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We thought scaling our LLM meant spending more. OpenGridLabs showed us it meant architecting smarter. We serve better answers, faster, for a fraction of the cost—and for the first time we can actually see where every token goes."}
					author={"VP of Engineering"}
					subtitle={"Confidential venture-backed AI Company"}
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
					title={"Ready to take your LLM from prototype to production?"}
					description={"OpenGridLabs builds production-grade LLM platforms—fine-tuning, RAG, model routing, and LLMOps—tuned for accuracy, latency, and cost at scale."}
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
