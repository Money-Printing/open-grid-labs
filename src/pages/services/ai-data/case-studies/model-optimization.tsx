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
	{ value: "68%", label: "Lower inference cost per request", accent: "from-purple-500 to-indigo-500" },
	{ value: "3×", label: "Throughput on the same hardware", accent: "from-cyan-400 to-blue-500" },
	{ value: "0.3%", label: "Max accuracy degradation accepted", accent: "from-pink-500 to-rose-400" },
	{ value: "9 wk", label: "From over-provisioned to production-optimal", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Inference cost per request eroding gross margin as volume scaled" },
	{ text: "Latency exceeded real-time budgets on key user-facing models" },
	{ text: "One model too large to deploy in a constrained edge environment" },
	{ text: "Existing hardware under-utilised due to inefficient model runtime" },
	{ text: "No systematic approach to quantify the accuracy–cost trade-off per model" }
];

const SOLUTIONS = [
	{ text: "Post-training quantization (INT8) cutting compute and memory with near-zero accuracy loss" },
	{ text: "Structured pruning removing redundant attention heads, layers, and neurons" },
	{ text: "Knowledge distillation producing a compact student model for the constrained environment" },
	{ text: "Hardware-aware compilation for the target inference runtime (ONNX / TensorRT)" },
	{ text: "Per-model accuracy–cost profiles guiding optimization decisions with evidence" }
];

const PIPELINE_STAGES = [
	{ title: "Profile", items: ["Latency & memory benchmarking", "Layer-wise compute analysis", "Accuracy baseline", "Cost-per-request measurement"], color: "hsl(180,100%,50%)" },
	{ title: "Compress", items: ["Post-training quantization (INT8/FP16)", "Structured pruning (heads, layers, neurons)", "Knowledge distillation to student model"], color: "hsl(210,100%,50%)" },
	{ title: "Compile", items: ["ONNX export", "TensorRT / runtime-specific compilation", "Kernel fusion", "Batch-size tuning", "Hardware-aware layout"], color: "hsl(280,100%,65%)" },
	{ title: "Validate", items: ["Accuracy regression tests", "Latency & throughput benchmarks", "Cost-per-request recheck", "Production deployment & monitoring"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Profiling & Prioritisation (Weeks 1–2)",
		desc: "OpenGridLabs benchmarked every production model for latency, memory, and cost-per-request, and ran layer-wise analysis to find where compute was concentrated. This produced a ranked list of optimization opportunities — highest-cost models with the most redundancy first — and established the accuracy baseline each model had to maintain. The team set per-model accuracy budgets jointly with the client's data-science leads.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Compression & Compilation (Weeks 3–7)",
		desc: "Post-training INT8 quantization was applied first — the least-destructive technique, with minimal accuracy impact and large compute savings. Where the cost target remained unmet, structured pruning removed low-contribution attention heads and neurons. For the one model with hard size constraints, knowledge distillation produced a compact student that matched the teacher's accuracy while fitting the environment. Each compressed model was then compiled for the target runtime with kernel fusion and hardware-aware layout.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Validation, Deployment & Enablement (Weeks 8–9)",
		desc: "Every optimized model was validated against its accuracy budget and benchmarked against the original for latency, throughput, and cost before any production deployment. A monitoring layer tracked live accuracy and performance to catch any post-deployment regression, and OpenGridLabs trained the client's engineers to apply the same optimization pipeline to new models independently.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Inference cost per request", before: "Baseline", after: "32% of baseline", change: "−68%" },
	{ metric: "Throughput (requests / second)", before: "Baseline", after: "3× baseline", change: "+200%" },
	{ metric: "Median inference latency", before: "Baseline", after: "38% of baseline", change: "−62%" },
	{ metric: "Model memory footprint", before: "Baseline", after: "~50% of baseline", change: "−50%" },
	{ metric: "Accuracy degradation (worst case)", before: "—", after: "≤0.3%", change: "Within budget" },
	{ metric: "Constrained-environment deployment", before: "Not possible (too large)", after: "Deployed via distillation", change: "New capability" },
	{ metric: "Hardware provisioning need", before: "Growing", after: "Same fleet, 3× work", change: "Deferred spend" }
];

const SUCCESS_FACTORS = [
	{
		title: "Set the accuracy budget before touching the model",
		desc: "Defining the maximum allowable accuracy drop per model — before any compression ran — meant every decision was made against a clear, shared constraint rather than discovered retroactively. Optimization that silently degrades accuracy is a liability, not a saving."
	},
	{
		title: "Least-invasive first",
		desc: "Applying quantization before pruning, and pruning before distillation, meant the lightest touch that achieved the cost target was always preferred. Most models needed nothing more than quantization and compilation — the more invasive techniques were reserved for the cases that genuinely required them."
	},
	{
		title: "Profile before you compress",
		desc: "Layer-wise analysis revealed exactly where compute was concentrated, so effort went to the techniques that moved the biggest needles on the most expensive models — rather than applying the same approach everywhere and getting mediocre results everywhere."
	},
	{
		title: "Compile for the hardware",
		desc: "Runtime compilation with kernel fusion and hardware-aware layout added a further significant throughput gain on top of compression alone, at zero accuracy cost. It is frequently overlooked and consistently underestimated."
	}
];

const FAQS = [
	{
		q: "What is model optimization?",
		a: "Model optimization is the engineering discipline of making a trained machine learning model faster, smaller, and cheaper to run without meaningfully reducing its accuracy. Techniques include quantization (reducing numerical precision), pruning (removing redundant weights), and knowledge distillation (training a compact model to mimic a larger one). It bridges the gap between a model that works in research and one that scales in production."
	},
	{
		q: "What is the difference between quantization, pruning, and knowledge distillation?",
		a: "Quantization reduces the numerical precision of model weights and activations — from 32-bit floats to 8-bit integers — cutting memory and compute with minimal accuracy loss. Pruning removes weights or components (neurons, attention heads, layers) that contribute little to accuracy, making the model structurally smaller. Knowledge distillation trains a small student model to reproduce the behaviour of a large teacher, inheriting its accuracy without its size."
	}
];

export default function ModelOptimizationCaseStudy() {
	return (
		<>
			<SEO
				title="Model Optimization Case Study | OpenGridLabs"
				description="How OpenGridLabs applied quantization, structured pruning, and knowledge distillation to cut inference costs 68% and triple model throughput."
				canonical="/services/ai-data/model-optimization"
				keywords="Model Optimization, Quantization, INT8 Quantization, Structured Pruning, Knowledge Distillation, TensorRT, ONNX, ML engineering, inference cost"
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
					categoryTag="Case Study · AI Engineering"
					title="How Model Optimization Cut Inference Cost 68% and Tripled Throughput"
					description="A fast-scaling AI company partnered with OpenGridLabs to apply a staged optimization programme—quantization, structured pruning, and knowledge distillation—cutting inference cost 68% and tripling throughput while preserving accuracy to within 0.3%."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scope", value: "12 production models optimized" },
						{ label: "Timeline", value: "9 weeks end-to-end" },
						{ label: "Stack", value: "Quantization · Pruning · Distillation · Runtime" }
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
						"Our client is a venture-backed AI company whose products depend on serving predictions fast, cheaply, and at high volume. Their models had been trained to hit accuracy targets — and they did. The problem was everything that followed. At scale, inference costs consumed a disproportionate share of gross margin. Several models exceeded the latency budgets needed for real-time use cases. One needed to run in a constrained environment where the trained model simply couldn't fit. The accuracy was excellent; the economics and the physics were not.",
						"The team's instinct was to buy more compute. OpenGridLabs' view was that the models themselves were the opportunity: a well-trained model almost always carries significant redundancy — weights that contribute little, numerical precision far beyond what accuracy requires, representations that could be absorbed by a smaller model. The right answer wasn't a bigger bill; it was model optimization — the engineering discipline of making existing models faster, smaller, and cheaper without starting over or sacrificing the accuracy it took months to achieve.",
						"Model optimization makes a trained model faster, smaller, and cheaper to run without meaningfully reducing its accuracy. Techniques include quantization (reducing numerical precision), pruning (removing redundant weights or structures), and knowledge distillation (training a compact student model to mimic a large teacher). Together they bridge the gap between a model that works in research and one that scales in production — on cloud, on-device, or in constrained deployments."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is Model Optimization?"
					definitionText="Model optimization makes a trained model faster, smaller, and cheaper to run without meaningfully reducing its accuracy. Techniques include quantization (reducing numerical precision), pruning (removing redundant weights or structures), and knowledge distillation (training a compact student model to mimic a large teacher). Together they bridge the gap between a model that works in research and one that scales in production — on cloud, on-device, or in constrained deployments."
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
					title={"Five Optimization Bottlenecks Overcome"}
					description={"How OpenGridLabs engineered a self-optimizing compression pipeline to resolve serving costs."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={PIPELINE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Optimization Pipeline"}
					description={"OpenGridLabs built a staged optimization pipeline that takes each trained model through profiling, compression, runtime compilation, and validation — with an accuracy checkpoint at every step. The design is deliberately staged: apply the least-destructive techniques first, measure the accuracy impact, and escalate to more aggressive compression only if the cost target hasn't been met."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"The accuracy budget is non-negotiable — set it before you compress"}
					alertText={"Model optimization that silently degrades accuracy isn't a saving — it's a liability shipped to production. The engagement established a per-model accuracy budget (maximum allowable drop) before any compression ran, and every technique applied was validated against that budget on a representative held-out set. Where quantization alone hit the cost target without touching the budget, no pruning was applied. Distillation was reserved for the one model where size constraints made it unavoidable."}
					rightColumnTitle={"Model Optimization Pipeline Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over nine weeks, working from the least-invasive techniques first and escalating only where needed. OpenGridLabs embedded a team of ML and inference engineers alongside the client's data-science and platform teams."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured against the pre-optimization production baselines on the same hardware and workload. The results showed that systematic model optimization delivers dramatic efficiency gains while preserving accuracy."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We thought the answer was more GPUs. Turns out the answer was using the ones we had properly. Quantization and pruning alone got us most of the way there — and the distilled model finally let us ship to the environment we'd written off. Same accuracy, a third of the cost."}
					author={"Head of AI Infrastructure"}
					subtitle={"Confidential AI Company"}
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
					title={"Models too slow, too heavy, or too expensive to serve?"}
					description={"OpenGridLabs applies model optimization—quantization, pruning, distillation, and runtime compilation—so your models are production-efficient without sacrificing the accuracy you worked to achieve."}
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
