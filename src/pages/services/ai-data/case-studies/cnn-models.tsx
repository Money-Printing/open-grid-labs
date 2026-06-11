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
	{ value: "+11%", label: "Accuracy vs. best off-the-shelf baseline", accent: "from-emerald-400 to-teal-500" },
	{ value: "3×", label: "Faster inference than the baseline it beat", accent: "from-cyan-400 to-blue-500" },
	{ value: "-40%", label: "Smaller model size vs. EfficientNet baseline", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "12 wk", label: "From architectural hypothesis to production", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "Standard 3×3 kernels and downsampling schedules designed for natural image statistics, not the domain" },
	{ text: "Depth and width scaling rules from ImageNet benchmarks that didn't match task feature complexity" },
	{ text: "Residual skip-connection patterns that carried natural-image inductive bias into an unrelated domain" },
	{ text: "Off-the-shelf models larger and slower than the deployment environment required" }
];

const SOLUTIONS = [
	{ text: "Domain analysis revealing the structural statistics of the specialist image type" },
	{ text: "Systematic ablations on kernel size, depth, width, skip connections, and attention mechanisms" },
	{ text: "A custom architecture whose design decisions were validated by evidence, not convention" },
	{ text: "Depthwise separable convolutions and targeted attention to match accuracy and latency targets" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Domain", items: ["Domain image statistics", "Frequency & spatial analysis", "Off-the-shelf baseline suite", "Performance ceiling diagnosis"], color: "hsl(180,100%,50%)" },
	{ title: "Ablate", items: ["Kernel size & receptive field", "Depth & width", "Downsampling schedule", "Skip-connection patterns"], color: "hsl(210,100%,50%)" },
	{ title: "Compose", items: ["Residual blocks tuned to domain", "Depthwise separable layers for efficiency", "Channel attention (SE blocks)", "Custom stem"], color: "hsl(280,100%,65%)" },
	{ title: "Validate", items: ["Held-out accuracy vs. all baselines", "Latency & memory benchmarking", "Robustness testing", "Production deployment"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Domain Analysis & Baseline Suite (Weeks 1–3)",
		desc: "OpenGridLabs characterised the domain's image statistics — frequency content, spatial structure, typical scale of discriminative features — and established a comprehensive baseline suite of off-the-shelf architectures under identical training conditions. This gave a clear performance ceiling and identified which aspects of existing architectures were and were not contributing to accuracy on this task.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Systematic Ablations & Architecture Composition (Weeks 4–10)",
		desc: "Components were ablated systematically: kernel sizes, depth and width scaling, skip-connection patterns, downsampling schedules, and attention mechanisms. Each change was evaluated in isolation before being combined with others. The resulting custom architecture reflected a body of evidence rather than a set of conventions borrowed from a different domain.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Validation, Optimisation & Deployment (Weeks 11–12)",
		desc: "The final architecture was validated on a held-out test set against the full baseline suite and benchmarked for latency and memory. It was then quantized and compiled for the deployment runtime, where its smaller size and different computational structure yielded further inference gains over the heavier baselines it replaced.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Task accuracy", before: "Baseline", after: "+11 percentage points", change: "+11%" },
	{ metric: "Inference latency", before: "Baseline", after: "33% of baseline", change: "3× faster" },
	{ metric: "Model size", before: "Baseline (EfficientNet-scale)", after: "60% of baseline", change: "−40%" },
	{ metric: "Architectural decisions", before: "Convention", after: "Ablation-validated", change: "Evidence-based" },
	{ metric: "Transfer learning needed", before: "Required", after: "Task-native from scratch", change: "Domain-fit" },
	{ metric: "Deployment feasibility", before: "Marginal (too slow)", after: "Comfortably within budget", change: "Unblocked" }
];

const SUCCESS_FACTORS = [
	{
		title: "Architecture is a set of assumptions",
		desc: "Every CNN encodes assumptions about the visual domain — what features matter, at what scale, and how they compose. Off-the-shelf networks encode assumptions about natural images. Diagnosing which assumptions were wrong for the specialist domain focused the design effort on exactly the decisions that mattered."
	},
	{
		title: "Ablations, not intuition",
		desc: "Systematic ablation made every architectural decision a claim that could be tested and disproved rather than an opinion. The final design is not guesswork compounded; it is a set of validated choices that can be understood and extended."
	},
	{
		title: "Smaller and faster isn't a trade-off — it's a consequence",
		desc: "When an architecture is shaped for the task rather than for a general benchmark, it doesn't need to carry the excess capacity general networks reserve for tasks it will never see. The custom model is smaller because it's well-fit, not because accuracy was sacrificed."
	}
];

const FAQS = [
	{
		q: "What is a convolutional neural network (CNN)?",
		a: "A CNN is a deep learning architecture for image data that uses convolutional layers to learn spatial features at multiple scales, progressively building from edges and textures to complex high-level representations. Architectural choices — kernel size, depth, width, skip connections — encode assumptions about the visual domain."
	},
	{
		q: "When should you design a custom CNN instead of using ResNet or EfficientNet?",
		a: "Off-the-shelf architectures are the right starting point for most problems and perform excellently with transfer learning. Custom design becomes valuable when the input domain differs significantly from natural images, when latency or memory constraints are tight, or when systematic ablations reveal that generic assumptions don't match the task's feature structure."
	}
];

export default function CNNModelsCaseStudy() {
	return (
		<>
			<SEO
				title="CNN Models Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a custom CNN architecture to outperform off-the-shelf models by 11% while running 3x faster."
				canonical="/services/ai-data/cnn-models"
				keywords="CNN Architecture, Convolutional Neural Networks, Custom CNN Design, ResNet, EfficientNet, Ablation Studies, Residual Connections, Depthwise Separable Convolutions, Channel Attention, Deep Learning, Computer Vision, AI Engineering"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(330,100%,60%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
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
					title="How a Custom CNN Architecture Outperformed Off-the-Shelf Networks by 11% on a Specialist Vision Task"
					description="A fast-scaling company found that the standard off-the-shelf CNN backbones built for general image classification kept underperforming on their specialist task — not because of too little data or poor training, but because the architecture itself was the wrong shape for the problem. OpenGridLabs ran a systematic design and ablation programme that produced a custom CNN outperforming ResNet and EfficientNet baselines by 11% in accuracy while running three times faster."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / Specialist Vision (anonymised)" },
						{ label: "Scope", value: "Architecture design from first principles" },
						{ label: "Timeline", value: "12 weeks to production" },
						{ label: "Stack", value: "CNN Design · Ablation Studies · Residual · Attention" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-pink-500/30"
					hoverTextClass="group-hover:text-pink-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"Our client builds an AI product whose core capability depends on a vision model — not on natural photographs, but on a specialist image type with structural properties quite unlike the ImageNet-class photos that ResNet, EfficientNet, and similar architectures were designed around. The team had tried fine-tuning all the standard backbones, applied best-practice training recipes, and produced accurate-enough models. But \"accurate enough\" was falling short of a quality bar that would meaningfully differentiate their product.",
						"The ceiling they'd hit wasn't a data problem or a training problem. It was an architecture problem. The inductive biases baked into general-purpose CNNs — the kernel sizes, the downsampling schedules, the depth-vs-width balances — were tuned for the statistics of natural images, not their domain. The team needed someone to do what nobody does until they have to: design a CNN from scratch, with ablations, to fit the task.",
						"A CNN is a deep learning architecture for image data that uses convolutional layers to learn spatial feature detectors at multiple scales — edges, textures, shapes — progressively building from low-level to high-level representations. Every architectural choice (kernel size, depth, width, skip connections, pooling schedule) encodes assumptions about the structure of the visual domain. Off-the-shelf architectures encode assumptions about natural images; specialist tasks often need different assumptions."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is a CNN?"
					definitionText="A CNN is a deep learning architecture for image data that uses convolutional layers to learn spatial feature detectors at multiple scales — edges, textures, shapes — progressively building from low-level to high-level representations. Every architectural choice (kernel size, depth, width, skip connections, pooling schedule) encodes assumptions about the structure of the visual domain. Off-the-shelf architectures encode assumptions about natural images; specialist tasks often need different assumptions."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-pink-500/10"
					definitionIconBorderClass="border-pink-500/20"
					definitionIconColorClass="text-pink-400"
					glowColorClass="bg-pink-400"
					gradientFromClass="from-pink-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Four Architectural Mismatches Resolved"}
					description={"How OpenGridLabs designed a custom CNN architecture to match specialist vision requirements."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Design Process"}
					description={"OpenGridLabs ran a structured architecture design programme rather than treating CNN design as a single decision. Each component was isolated, varied, and evaluated before the next was touched — making the gains attributable and reproducible, not the product of lucky guessing."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Ablations separate insight from luck"}
					alertText={"Architecture design without ablations produces a model that works but nobody understands — so improvements and debugging are guesswork. Every structural choice in the custom network was validated by comparing it against the alternative on the same data under the same conditions. That discipline produced a design whose strengths are understood and transferable, not a configuration that happened to score well this time."}
					rightColumnTitle={"CNN Design & Selection Pipeline Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over twelve weeks. OpenGridLabs embedded a team of deep learning engineers with architecture expertise alongside the client's ML team."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured on a held-out test set under identical evaluation conditions for the custom architecture and all baselines, and on identical hardware for latency benchmarking."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd been treating the off-the-shelf architectures as a given and trying to work around them. When we actually looked at what our images needed and designed for it, the gap was larger than we expected — and the resulting model is smaller and faster than the one it replaced."}
					author={"Lead ML Engineer"}
					subtitle={"Confidential AI Company"}
					accentLineClass={"bg-pink-400"}
					iconColorClass={"text-pink-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-pink-500/20"}
					iconColorClass={"text-pink-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-pink-400"}
					activeChevronColorClass={"text-pink-400"}
				/>

				<CaseStudyCta 
					title={"Off-the-shelf architectures hitting a ceiling on your task?"}
					description={"OpenGridLabs designs custom CNN architectures — domain analysis, systematic ablations, and evidence-based composition — so your model fits the task instead of fighting it."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-pink-400"}
					iconColorClass={"text-pink-400"}
					btnGradientClass={"from-pink-400 to-cyan-500"}
					btnShadowColor={"244,63,94,0.2"}
				/>
			</div>
		</>
	);
}
