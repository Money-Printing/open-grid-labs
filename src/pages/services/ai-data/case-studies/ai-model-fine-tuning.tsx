import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Lock,
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
	{ value: "92%", label: "Lower inference cost vs. the frontier model", accent: "from-cyan-400 to-blue-500" },
	{ value: "On par", label: "Task quality matched the frontier baseline", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "2.8×", label: "Faster responses from the smaller model", accent: "from-pink-500 to-rose-400" },
	{ value: "10 wk", label: "From dataset to a production fine-tuned model", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Frontier-model API cost per call dominated gross margin at high volume" },
	{ text: "Total dependence on one vendor's pricing, rate limits, and availability" },
	{ text: "Sensitive data leaving their environment on every API request" },
	{ text: "Prompting had hit a quality ceiling—longer prompts only added cost, not accuracy" },
	{ text: "No in-house dataset, training pipeline, or evaluation to build a custom model with confidence" }
];

const SOLUTIONS = [
	{ text: "A curated, deduplicated training dataset built from real task data with quality and bias checks" },
	{ text: "LoRA-based parameter-efficient fine-tuning of a compact open model on the task" },
	{ text: "A rigorous evaluation harness benchmarking the fine-tuned model against the frontier baseline" },
	{ text: "A self-hosted serving setup giving full data control and predictable cost" },
	{ text: "A repeatable retraining pipeline so the model improves as new data arrives" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Task data collection", "Cleaning & deduplication", "Labelling & quality checks", "Train / validation / test splits"], color: "hsl(180,100%,50%)" },
	{ title: "Training", items: ["Base-model selection", "LoRA / PEFT fine-tuning", "Hyperparameter sweeps", "Checkpointing & tracking"], color: "hsl(210,100%,50%)" },
	{ title: "Evaluation", items: ["Golden test sets", "Frontier-baseline benchmark", "Regression & bias checks", "Promote / reject gate"], color: "hsl(280,100%,65%)" },
	{ title: "Serving", items: ["Self-hosted inference", "Adapter versioning", "Cost & latency telemetry", "Continuous retraining loop"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Dataset Curation & Baseline (Weeks 1–4)",
		desc: "OpenGridLabs assembled a training dataset from the client's real task data, then cleaned, deduplicated, and quality-checked it—correcting mislabels and balancing edge cases. In parallel, the team established the frontier model's performance on a held-out golden test set, setting the exact bar the fine-tuned model would have to clear to justify the switch.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Fine-Tuning & Evaluation (Weeks 5–8)",
		desc: "Using LoRA for efficient, low-cost training, OpenGridLabs fine-tuned a compact open model, running hyperparameter sweeps and tracking every experiment. Each candidate was benchmarked head-to-head against the frontier baseline on the golden test set, with regression and bias checks—so the decision to adopt the custom model rested on measured quality, not optimism.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Serving & Continuous Retraining (Weeks 9–10)",
		desc: "The winning model was deployed on a self-hosted serving setup with adapter versioning and full cost and latency telemetry. OpenGridLabs built a repeatable retraining loop that folds in new task data over time and re-runs the evaluation gate automatically, and trained the client's engineers to own the pipeline end to end.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Task accuracy (golden test set)", before: "94%", after: "94%", change: "Matched" },
	{ metric: "Inference cost per call", before: "Baseline", after: "8% of baseline", change: "−92%" },
	{ metric: "Median response latency", before: "Baseline", after: "0.36× baseline", change: "2.8× faster" },
	{ metric: "Vendor dependency", before: "Single vendor", after: "Self-hosted", change: "Removed" },
	{ metric: "Data leaving environment", before: "Every request", after: "None", change: "Data retained" },
	{ metric: "Format / output consistency", before: "Prompt-dependent", after: "Reliably structured", change: "Improved" },
	{ metric: "Retraining on new data", before: "Not applicable", after: "Repeatable pipeline", change: "New capability" }
];

const SUCCESS_FACTORS = [
	{
		title: "Data quality over data quantity",
		desc: "The biggest accuracy gains came from curating a clean, balanced, correctly labelled dataset—not from a bigger training run. Fixing the data is where fine-tuning is won or lost, so that is where the effort went."
	},
	{
		title: "A frontier baseline set the bar",
		desc: "By measuring the existing model's quality first, the team had an exact target. The fine-tuned model wasn't adopted because it was cheaper—it was adopted because it provably matched quality and was cheaper."
	},
	{
		title: "Parameter-efficient by design",
		desc: "LoRA made fine-tuning fast and inexpensive to run and iterate on, turning what could have been a heavy, costly training effort into something the client's own team could repeat affordably."
	},
	{
		title: "Right tool for the task",
		desc: "Fine-tuning suited this narrow, high-volume, stable task perfectly. Part of the value was the honest framing of when to fine-tune versus when prompting or RAG is the better choice—so the client invested where it genuinely paid off."
	}
];

const FAQS = [
	{
		q: "When should you fine-tune instead of using prompting or RAG?",
		a: "Fine-tuning fits when you need consistent behaviour, tone, or format that prompting can't reliably deliver, when you want a smaller, cheaper model to match a larger one on a narrow task, or when prompts have grown long and costly. Prompting and RAG are better for fast iteration and supplying fresh knowledge. In practice the three combine: RAG for knowledge, prompting for flexibility, fine-tuning for reliable behaviour at lower cost."
	},
	{
		q: "What is LoRA and parameter-efficient fine-tuning (PEFT)?",
		a: "LoRA (Low-Rank Adaptation) trains a small set of additional weights while keeping the original model frozen, making fine-tuning far cheaper and faster than updating every parameter. It needs much less GPU memory and produces small adapter files that are easy to store, swap, and serve—making custom models practical without the cost of full fine-tuning."
	}
];

export default function AIModelFineTuningCaseStudy() {
	return (
		<>
			<SEO
				title="Model Fine-Tuning Case Study - OpenGridLabs"
				description="How fine-tuning a small model matched frontier quality at a fraction of the cost, slashing per-call inference by 92% and speeding responses 2.8x."
				canonical="/services/ai-data/ai-model-fine-tuning"
				keywords="Model Fine-Tuning, LoRA, PEFT, LLM Fine-Tuning, Open Source Models, Inference Cost, MLOps"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
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
					title="How Fine-Tuning a Small Model Matched Frontier Quality at a Fraction of the Cost"
					description="A fast-scaling AI company partnered with OpenGridLabs to escape its dependence on an expensive frontier model—curating training data, fine-tuning a compact open model with LoRA, and proving through rigorous evaluation that it matched frontier quality on their core task at roughly one-twelfth the inference cost."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scale", value: "6M+ task calls / month" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "Dataset Curation · LoRA · Evaluation · Serving" }
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
						"Our client is a venture-backed AI company whose product performs a high-volume, specialised language task—structured extraction and classification—at the core of its workflow. To reach quality fast, they had built the feature on a top-tier frontier model accessed through an API. It worked well, and it got them to market. But the same model that made the product possible was now its biggest constraint.",
						"At more than six million task calls a month, the per-call API cost dominated their margins, every request left their environment, and they were entirely dependent on a single vendor's pricing, availability, and rate limits. Long, carefully engineered prompts had pushed quality as far as prompting could go, yet costs kept climbing with volume. The task itself was narrow and repetitive—exactly the kind of problem where a smaller, specialised model can match a general-purpose giant. The company needed to know: could fine-tuning a compact model match frontier quality on their task while slashing cost and giving them back control?",
						"Fine-tuning continues training a pre-trained model on a curated dataset of task-specific examples, adjusting its behaviour to specialise in tone, format, and domain reasoning. Unlike prompting, which steers a general model at runtime, fine-tuning bakes the desired behaviour into the model itself—often letting a much smaller, cheaper model match a large one on a narrow, well-defined task."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Is Model Fine-Tuning?"
					definitionText="Fine-tuning continues training a pre-trained model on a curated dataset of task-specific examples, adjusting its behaviour to specialise in tone, format, and domain reasoning. Unlike prompting, which steers a general model at runtime, fine-tuning bakes the desired behaviour into the model itself—often letting a much smaller, cheaper model match a large one on a narrow, well-defined task."
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
					title={"Strategic Risks Resolved"}
					description={"Five issues were turning a frontier-model dependency into a strategic and financial risk."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Lock, Workflow, Cpu]}
					tag={"Pipeline"}
					title={"System Architecture"}
					description={"OpenGridLabs built an end-to-end fine-tuning pipeline that turns raw task data into a deployed, evaluated custom model. Every stage is reproducible and version-controlled, so the client can retrain on demand, compare any model against the frontier baseline, and promote a new version only when it provably wins."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"The dataset is the model"}
					alertText={"Fine-tuning quality is decided long before training starts. The largest gains came not from clever hyperparameters but from disciplined data curation—deduplicating, correcting mislabelled examples, balancing edge cases, and screening for bias. A smaller, cleaner dataset consistently beat a larger, noisier one, which is why the bulk of the engagement focused on the data, not the training run."}
					rightColumnTitle={"Fine-Tuning Pipeline Architecture"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to de-risk the build-your-own-model decision with evidence at every step."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against the frontier-model baseline, using the same golden test set throughout."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We assumed matching the frontier model meant paying frontier prices forever. Fine-tuning proved otherwise—same quality on our task, a fraction of the cost, faster responses, and our data never leaves our walls. It changed our whole cost structure."}
					author={"VP of Engineering"}
					subtitle={"Confidential venture-backed AI Company"}
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
					title={"Ready to fine-tune a model that fits your task and your budget?"}
					description={"OpenGridLabs builds end-to-end fine-tuning pipelines—dataset curation, LoRA training, rigorous evaluation, and serving—so a custom model matches frontier quality at a fraction of the cost."}
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
