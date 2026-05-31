import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import SEO from "../../../components/seo";
import { motion, AnimatePresence } from "motion/react";
import { 
	ArrowLeft, 
	BrainCircuit, 
	ArrowRight, 
	Sparkles, 
	CheckCircle2, 
	Terminal,
	Layers,
	ShieldCheck,
	Workflow,
	Activity,
	ChevronDown,
	HelpCircle,
	Quote as QuoteIcon,
	Database,
	Cpu
} from "lucide-react";
import { slugify } from "../../../utils/slugify";

import { generateServiceDetail } from "../../../utils/serviceDetailGenerator";
import AIIntegrationServicesCaseStudy from "./case-studies/ai-integration-services";
import LargeLanguageModelsCaseStudy from "./case-studies/large-language-models";
import AIModelFineTuningCaseStudy from "./case-studies/ai-model-fine-tuning";

const VOICE_TO_TEXT_STATS = [
		{ value: "96%", label: "Transcription accuracy on domain audio", accent: "from-cyan-400 to-blue-500" },
		{ value: "<300ms", label: "Streaming partial-result latency", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "58%", label: "Lower transcription cost per audio hour", accent: "from-pink-500 to-rose-400" },
		{ value: "11 wk", label: "From prototype to full production deployment", accent: "from-emerald-400 to-teal-500" }
	];

const VOICE_TO_TEXT_CHALLENGES = [
		{ text: "Word error rate climbed sharply on noisy, multi-speaker, and accented audio—exactly the recordings customers cared about most" },
		{ text: "Industry-specific terms, product names, and acronyms were consistently mis-transcribed by the generic engine" },
		{ text: "No speaker labelling, so transcripts read as one undifferentiated block of text" },
		{ text: "Live-caption latency felt sluggish, breaking the real-time experience users expected" },
		{ text: "Flat per-hour API pricing made unit economics worse with every new customer" }
	];

const VOICE_TO_TEXT_SOLUTIONS = [
		{ text: "Noise-robust preprocessing and voice-activity detection to handle messy real-world audio" },
		{ text: "Domain adaptation with custom vocabulary and phrase biasing for the client's jargon, names, and acronyms" },
		{ text: "Speaker diarization that attributes each segment to the correct speaker with consistent labels" },
		{ text: "A streaming ASR pipeline returning stable partial results in under 300ms for true real-time captions" },
		{ text: "A hybrid streaming-plus-batch architecture that routed each job to the most cost-efficient path" }
	];

const VOICE_TO_TEXT_ARCHITECTURESTAGES = [
		{ title: "Audio Capture", items: ["Live mic & file streams", "Resampling", "Noise suppression", "Voice-activity detection", "Segmentation"], color: "hsl(180,100%,50%)" },
		{ title: "Orchestration", items: ["Streaming vs. batch router", "Language detection", "Custom vocabulary & phrase biasing", "Throttling & queueing"], color: "hsl(210,100%,50%)" },
		{ title: "Speech Models", items: ["Acoustic model", "Language model", "Domain-adapted fine-tune", "Speaker diarization", "Confidence scoring"], color: "hsl(280,100%,65%)" },
		{ title: "Post & Ops", items: ["Punctuation & formatting", "Speaker labelling", "Profanity & PII redaction", "WER telemetry", "Cost & latency monitoring"], color: "hsl(330,100%,60%)" }
	];

const VOICE_TO_TEXT_PHASES = [
		{
			number: "Phase 1",
			title: "Audio Benchmark & Preprocessing (Weeks 1–3)",
			desc: "Before changing any model, OpenGridLabs assembled a representative benchmark set of real customer audio—noisy, accented, multi-speaker—and measured word error rate against human-verified transcripts. This made quality objectively measurable. In parallel, the team built the preprocessing front end: noise suppression, resampling, and voice-activity detection to clean audio before it reached any model.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Domain Adaptation & Diarization (Weeks 4–8)",
			desc: "Using labelled audio, OpenGridLabs adapted the acoustic and language models to the client's domain and added custom vocabulary and phrase biasing for product names, acronyms, and jargon. Speaker diarization was integrated so each segment was attributed correctly. Every change was validated against the benchmark set, with word error rate tracked release over release until it consistently passed target on hard audio.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Streaming, Cost Routing & Hardening (Weeks 9–11)",
			desc: "The streaming pipeline was tuned to emit stable partial results under 300ms, and a router was introduced to send live sessions through the low-latency path while batch jobs took the cheaper, higher-accuracy path. A full observability dashboard exposed word error rate, latency percentiles, and per-customer cost. Punctuation, formatting, and PII-redaction guardrails were finalised, and the client's engineers were trained to run the benchmark harness themselves.",
			accent: "from-pink-500 to-rose-400"
		}
	];

const VOICE_TO_TEXT_TABLERESULTS = [
		{ metric: "Transcription accuracy (domain audio)", before: "82%", after: "96%", change: "+14 pts" },
		{ metric: "Word error rate (noisy / multi-speaker)", before: "23%", after: "6%", change: "−74%" },
		{ metric: "Streaming partial-result latency", before: "~1.4 s", after: "<300 ms", change: "−79%" },
		{ metric: "Speaker attribution accuracy", before: "None", after: "93%", change: "New capability" },
		{ metric: "Custom-term recognition", before: "47%", after: "92%", change: "+96%" },
		{ metric: "Transcription cost per audio hour", before: "Baseline", after: "42% of baseline", change: "−58%" },
		{ metric: "Manual transcript correction time", before: "—", after: "−81%", change: "81% less rework" }
	];

const VOICE_TO_TEXT_SUCCESSFACTORS = [
		{
			title: "Benchmark before tuning",
			desc: "By measuring word error rate on real, difficult customer audio in week one, every subsequent change could be judged on evidence. Accuracy stopped being a matter of opinion and became a tracked metric."
		},
		{
			title: "Adapt to the domain, not the demo",
			desc: "The single biggest accuracy gain came from teaching the models the client's actual vocabulary and audio conditions—custom terms, accents, and noise—rather than relying on a generic engine tuned for clean, average speech."
		},
		{
			title: "Latency and accuracy are separate problems",
			desc: "Splitting traffic into a low-latency streaming path and a cheaper high-accuracy batch path let OpenGridLabs optimise each for what it actually needed, instead of compromising on both."
		},
		{
			title: "Observability as a first-class feature",
			desc: "Tracking word error rate, latency, and per-customer cost in production meant the client could catch regressions early, price confidently, and keep improving the engine long after the engagement ended."
		}
	];

const VOICE_TO_TEXT_FAQS = [
		{
			q: "What is the difference between streaming and batch speech-to-text?",
			a: "Streaming speech-to-text transcribes audio in real time as someone speaks, returning partial results within milliseconds—ideal for live captions, voice assistants, and call centres. Batch transcription processes a complete recording afterward, trading latency for slightly higher accuracy and lower cost, which suits meetings, podcasts, and archives."
		},
		{
			q: "How can voice-to-text accuracy be improved for a specific domain?",
			a: "Accuracy improves through domain adaptation: fine-tuning the acoustic and language models on representative audio, adding custom vocabulary and phrase biasing for product names and jargon, applying noise-robust preprocessing, and using speaker diarization to attribute words correctly. Together these sharply reduce word error rate on specialised audio."
		}
	];

function VoiceToTextConverterCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	

	

	

	

	

	

	

	

	return (
		<>
			<SEO
				title="Real-Time Voice-to-Text Case Study | OpenGridLabs"
				description="How OpenGridLabs' custom speech platform achieved 96% transcription accuracy and under 300ms latency for a high-growth AI SaaS company."
				canonical="/services/ai-data/voice-to-text-converter"
				keywords="Streaming ASR, speech-to-text, speaker diarization, domain adaptation, word error rate, speech AI, low latency transcription"
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

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Real-Time Voice-to-Text Reached 96% Accuracy for a High-Growth AI Company
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling AI product company partnered with OpenGridLabs to turn an unreliable transcription feature into a production-grade speech engine—combining streaming speech recognition, speaker diarization, and domain adaptation.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">AI / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scale</span>
										<span className="text-base font-semibold text-foreground">120K+ audio hours / month</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">11 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Streaming ASR · Diarization · Domain Adaptation · MLOps</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{VOICE_TO_TEXT_STATS.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<BrainCircuit className="w-5 h-5 text-cyan-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a venture-backed AI company whose product captures spoken conversations—meetings, support calls, and field interviews—and turns them into searchable, structured text. Voice-to-text sat at the very core of the experience: if the transcript was wrong, every downstream feature built on top of it was wrong too. An early version stitched together a generic off-the-shelf speech API, and for clean, single-speaker audio it worked well enough to win their first customers.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Then real-world usage arrived. Overlapping speakers, background noise, industry jargon, accents, and long recordings exposed the limits of a one-size-fits-all engine. Accuracy on the audio that mattered most hovered in the low 80s, latency made live captions feel laggy, and per-hour API costs ballooned as volume crossed 120,000 audio hours per month. The team didn't need another generic transcriber. They needed a fast, accurate, observable, and cost-efficient voice-to-text platform built for their domain.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									How Does Modern Voice-to-Text Work?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A production speech-to-text system captures audio, cleans and segments it, and passes it through an acoustic model that maps sound to phonemes and a language model that turns those into fluent text. Streaming systems return partial results in milliseconds, speaker diarization labels who said what, and domain adaptation tunes the models to a customer's specific vocabulary and audio conditions.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Challenge vs Solutions Delivered section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Five Speech Integration Bottlenecks Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a custom domain-adapted transcription engine to resolve accuracy and latency.
						</p>
					</div>

					<div className="space-y-6">
						{VOICE_TO_TEXT_CHALLENGES.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-cyan-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{VOICE_TO_TEXT_SOLUTIONS[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-cyan-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs designed a layered speech platform that sits between the client's application and the underlying speech models. The architecture is engine-agnostic—self-hosted and third-party models can be mixed or swapped without application changes.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Privacy-first by design:</strong> Audio and transcripts are isolated per tenant and encrypted in transit and at rest. Optional on-the-fly PII redaction removes sensitive details from transcripts, recordings are retained only for the period a customer configures, and no customer audio is used to train shared models without explicit opt-in.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Voice-to-Text Platform Architecture
								</h3>
								
								<div className="flex flex-col gap-3">
									{VOICE_TO_TEXT_ARCHITECTURESTAGES.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Workflow className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Implementation Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Implementation Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							The engagement ran across three structured VOICE_TO_TEXT_PHASES designed to ship measurable accuracy gains early while building toward a durable platform. OpenGridLabs embedded a cross-functional team of speech-ML engineers, an evaluation specialist, and a platform architect alongside the client's product team.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20" />
						
						{VOICE_TO_TEXT_PHASES.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(280,100%,65%)" : "hsl(330,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1 rounded-full border border-cyan-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, using the same benchmark audio set throughout.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{VOICE_TO_TEXT_TABLERESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-cyan-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"Our transcripts went from 'mostly right' to something customers actually trust without checking. The captions feel instant, the speaker labels just work, and we're paying far less per hour than we were with the generic API we started on."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— VP of Product</p>
								<p className="text-sm text-muted-foreground">Confidential AI Company</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked: Key Success Factors
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{VOICE_TO_TEXT_SUCCESSFACTORS.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{VOICE_TO_TEXT_FAQS.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-cyan-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-cyan-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-cyan-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to build voice-to-text your users can trust?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds production-grade speech platforms—streaming ASR, diarization, domain adaptation, and MLOps—tuned for accuracy, latency, and cost at scale.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(34,211,238,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

const CUSTOM_AI_STATS = [
		{ value: "4,200", label: "Expert hours saved per year", accent: "from-cyan-400 to-blue-500" },
		{ value: "97%", label: "Accuracy on the specialised task", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "Days→min", label: "Turnaround per case, start to finish", accent: "from-pink-500 to-rose-400" },
		{ value: "16 wk", label: "From discovery to production system", accent: "from-emerald-400 to-teal-500" }
	];

const CUSTOM_AI_CHALLENGES = [
		{ text: "A high-value process bottlenecked on a handful of senior experts, impossible to scale" },
		{ text: "Off-the-shelf AI tools got the hard, high-stakes cases wrong—confidently" },
		{ text: "Inputs were unusual: domain-specific documents and images no generic model understood" },
		{ text: "Decisions depended on subtle expert judgement plus rigid domain rules and precedent" },
		{ text: "The knowledge existed only in experts' heads, with no labelled data to learn from" }
	];

const CUSTOM_AI_SOLUTIONS = [
		{ text: "An end-to-end system orchestrating all three into a single decision, with human review" },
		{ text: "A fine-tuned model specialised on the client's documents and decision patterns" },
		{ text: "A custom computer-vision component to interpret the domain-specific images" },
		{ text: "A domain-rules engine encoding the non-negotiable logic and precedent experts apply" },
		{ text: "A discovery phase that captured expert knowledge and turned it into labelled training data" }
	];

const CUSTOM_AI_ARCHITECTURESTAGES = [
		{ title: "Inputs", items: ["Domain documents", "Specialised images", "Historical case data", "Reference rules & precedent"], color: "hsl(180,100%,50%)" },
		{ title: "Perception", items: ["Custom computer vision", "Document understanding", "Feature extraction", "Data structuring"], color: "hsl(210,100%,50%)" },
		{ title: "Reasoning", items: ["Fine-tuned domain model", "Rules & precedent engine", "Confidence scoring", "Conflict resolution"], color: "hsl(280,100%,65%)" },
		{ title: "Decision", items: ["Explainable recommendation", "Human-in-the-loop review", "System integration", "Monitoring & feedback loop"], color: "hsl(330,100%,60%)" }
	];

const CUSTOM_AI_PHASES = [
		{
			number: "Phase 1",
			title: "Discovery & Feasibility (Weeks 1–5)",
			desc: "Because no labelled data existed, OpenGridLabs worked closely with the client's experts to capture how they actually made decisions, building an initial labelled dataset and the success criteria the system would be measured against. A focused feasibility prototype tested the hardest part of the problem early—proving the approach could work before either side committed to the full build.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Bespoke Build & Evaluation (Weeks 6–13)",
			desc: "OpenGridLabs built each component—the custom vision model, the fine-tuned decision model, and the rules engine—and orchestrated them into one pipeline. Development was tightly iterative: every version was evaluated against expert-labelled cases, with the client's experts reviewing outputs and refining edge cases, so the system learned the judgement that had lived only in their heads.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Integration, Human Review & Handover (Weeks 14–16)",
			desc: "The solution was integrated into the client's existing workflow with a human-in-the-loop review step, so experts approve decisions rather than make them from scratch—keeping accountability while removing the bottleneck. Monitoring and a feedback loop were added so the system keeps improving, and OpenGridLabs handed over full ownership, documentation, and training so the client controls their bespoke system and its data.",
			accent: "from-pink-500 to-rose-400"
		}
	];

const CUSTOM_AI_TABLERESULTS = [
		{ metric: "Decision accuracy on the task", before: "Expert baseline", after: "97% (expert-matched)", change: "Matched" },
		{ metric: "Turnaround per case", before: "Days", after: "Minutes", change: "Drastically faster" },
		{ metric: "Expert hours per year on the task", before: "Baseline", after: "−4,200 hours", change: "Capacity freed" },
		{ metric: "Process throughput", before: "Expert-capped", after: "Scales on demand", change: "Unblocked" },
		{ metric: "Off-the-shelf tool fit", before: "Failed hard cases", after: "Purpose-built", change: "Solved" },
		{ metric: "Knowledge retention", before: "In experts' heads", after: "Captured in system", change: "De-risked" },
		{ metric: "System & data ownership", before: "—", after: "Fully client-owned", change: "Owned outright" }
	];

const CUSTOM_AI_SUCCESSFACTORS = [
		{
			title: "Discovery before building",
			desc: "The hardest part was capturing expert judgement that had never been written down. Investing weeks in discovery and a feasibility prototype de-risked the whole engagement—proving the problem was solvable before committing to a full build."
		},
		{
			title: "The right technique per sub-problem",
			desc: "Vision for images, a fine-tuned model for nuanced judgement, and a deterministic rules engine for non-negotiable logic—each chosen because it fit that part of the problem, then engineered to work together. That combination is precisely what no single product offers."
		},
		{
			title: "Experts in the loop, by design",
			desc: "Keeping human review meant the system removed the bottleneck without removing accountability—earning the experts' trust and capturing their corrections as a feedback loop that kept improving accuracy."
		},
		{
			title: "The client owns the result",
			desc: "Handover of the system, data, and know-how turned a one-off project into a durable asset—the client's competitive edge is now encoded in software they control, not rented from a vendor or locked in employees' heads."
		}
	];

const CUSTOM_AI_FAQS = [
		{
			q: "When do you need a custom AI solution instead of an off-the-shelf tool?",
			a: "A custom solution makes sense when your problem is specific to your domain, data, or workflow and no off-the-shelf product fits well. Signs include generic tools getting the cases that matter wrong, processes that depend on proprietary data or expert judgement, a need to combine several AI techniques, or a requirement to own the system and its data. Off-the-shelf tools win on common tasks; custom CUSTOM_AI_SOLUTIONS win where the problem is your competitive edge."
		},
		{
			q: "How is a custom AI solution built end to end?",
			a: "It moves through discovery (understanding the problem, data, and success criteria), design (choose and combine the right techniques), iterative development with continuous evaluation against real data, and integration into existing systems and workflows. It is then deployed with monitoring and a path for ongoing improvement, with the client retaining ownership of the system and its data."
		}
	];

function CustomAISolutionsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	

	

	

	

	

	

	

	

	return (
		<>
			<SEO
				title="Bespoke End-to-End AI Solutions | OpenGridLabs"
				description="How OpenGridLabs designed and built a bespoke AI solution combining computer vision, fine-tuning, and domain rules to save 4,200 expert hours annually."
				canonical="/services/ai-data/custom-ai-CUSTOM_AI_SOLUTIONS"
				keywords="Bespoke AI development, Custom machine learning, Computer vision, Domain specific AI, Fine-tuning, Human-in-the-loop"
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

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How a Custom AI Solution Cracked a Problem No Off-the-Shelf Tool Could
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company in a specialised domain had a costly, expert-dependent process that every generic AI tool got wrong. OpenGridLabs ran discovery, then designed and built a bespoke end-to-end solution—combining computer vision, a fine-tuned model, and hard-coded domain rules—that automated the work and saved an estimated 4,200 expert hours a year.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">Specialised Industry (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Type</span>
										<span className="text-base font-semibold text-foreground">Bespoke end-to-end build</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">16 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Computer Vision · Fine-tuning · Domain Logic</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{CUSTOM_AI_STATS.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<BrainCircuit className="w-5 h-5 text-cyan-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client operates in a specialised industry where a core, recurring process depended entirely on a small team of senior experts. Each case meant reviewing technical documents and images, applying years of hard-won domain judgement, cross-checking against rules and historical precedent, and producing a decision. It was accurate, but slow, expensive, and impossible to scale—and the expertise lived in just a few people's heads.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								They had tried the obvious route first: off-the-shelf AI tools and generic platforms. None fit. The documents were unusual, the images domain-specific, the judgement subtle, and the rules nowhere in any model's training data. Generic tools got the easy cases right and the cases that mattered wrong—worse than useless, because a confident wrong answer in their field carries real cost. The problem wasn't that AI couldn't help; it was that no product built for the general case could solve their specific one. They needed a custom AI solution designed around their problem, their data, and their experts' knowledge.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									When Do You Need a Custom AI Solution?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A custom solution is the right call when your problem is specific to your domain, data, or workflow and no off-the-shelf product fits. Tell-tale signs: generic tools get the cases that matter wrong, the process depends on proprietary data or expert judgement, several AI techniques must work together, or you need to own the system and its data. Off-the-shelf wins on common tasks; custom wins where the problem is your competitive edge.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Challenge vs Solutions Delivered section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Five Custom AI Integration Challenges Solved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a bespoke multi-technique orchestration pipeline to resolve specialist bottlenecks.
						</p>
					</div>

					<div className="space-y-6">
						{CUSTOM_AI_CHALLENGES.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-cyan-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{CUSTOM_AI_SOLUTIONS[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-cyan-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									No single technique could solve this problem—the breakthrough was combining several into one purpose-built system. OpenGridLabs designed an architecture where computer vision, a fine-tuned language model, and a deterministic rules engine each handle the part they do best, then converge into a single, explainable decision that an expert can review and approve.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>The right tools, combined—not one model to rule them all:</strong> The value of a custom solution was choosing the right technique for each sub-problem and making them work together: vision for the images, a fine-tuned model for nuanced judgement, and a deterministic rules engine for the non-negotiable logic that must never be "mostly right". Engineering the combination around the client's real problem is what off-the-shelf tools fundamentally cannot do.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Custom AI Solution Architecture
								</h3>
								
								<div className="flex flex-col gap-3">
									{CUSTOM_AI_ARCHITECTURESTAGES.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Workflow className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Implementation Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Implementation Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							The engagement ran across three CUSTOM_AI_PHASES over sixteen weeks, structured to reduce the biggest risk first—whether the problem was solvable at all—before committing to a full build. OpenGridLabs embedded a multidisciplinary team alongside the client's experts.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20" />
						
						{CUSTOM_AI_PHASES.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(280,100%,65%)" : "hsl(330,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1 rounded-full border border-cyan-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Outcomes were measured across a 60-day post-deployment window against the prior expert-only process, using expert-labelled cases as the benchmark.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before (expert-only)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After (custom AI)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{CUSTOM_AI_TABLERESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-cyan-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"Every tool we tried was built for someone else's problem and broke on ours. OpenGridLabs built for our problem. The system does in minutes what took our experts days, gets the hard cases right, and the knowledge that used to walk out the door each evening now lives in something we own."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief Operating Officer</p>
								<p className="text-sm text-muted-foreground">Confidential specialised-industry company</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked: Key Success Factors
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{CUSTOM_AI_SUCCESSFACTORS.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{CUSTOM_AI_FAQS.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-cyan-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-cyan-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-cyan-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Have a problem off-the-shelf AI can't solve?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs designs and builds custom, end-to-end AI CUSTOM_AI_SOLUTIONS—around your problem, your data, and your domain—and hands you a system you own outright.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(34,211,238,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

const AI_MONITORING_STATS = [
		{ value: "76%", label: "Faster incident detection & resolution", accent: "from-cyan-400 to-blue-500" },
		{ value: "Wks→hrs", label: "Time to notice model degradation", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "100%", label: "Production models under live monitoring", accent: "from-pink-500 to-rose-400" },
		{ value: "8 wk", label: "From blind spots to full observability", accent: "from-emerald-400 to-teal-500" }
	];

const AI_MONITORING_CHALLENGES = [
		{ text: "Model accuracy could degrade silently for weeks with no alert—discovered only via complaints" },
		{ text: "Standard monitoring tracked uptime and errors but nothing about prediction quality" },
		{ text: "No detection of data drift or concept drift as real-world inputs shifted" },
		{ text: "No per-model visibility into latency, token cost, or output quality trends" },
		{ text: "Incidents took days to diagnose with no historical metrics to trace what changed" }
	];

const AI_MONITORING_SOLUTIONS = [
		{ text: "Live accuracy and quality tracking using ground-truth feedback and proxy signals" },
		{ text: "Continuous drift detection on inputs and predictions, alerting before accuracy visibly drops" },
		{ text: "Smart alerting with thresholds and anomaly detection routed to the right team" },
		{ text: "Per-model dashboards for latency, throughput, token cost, and error rates" },
		{ text: "Historical metrics and traces so any incident can be diagnosed and explained quickly" }
	];

const AI_MONITORING_ARCHITECTURESTAGES = [
		{ title: "Instrument", items: ["Prediction logging", "Input & output capture", "Latency & cost telemetry", "Ground-truth & feedback collection"], color: "hsl(180,100%,50%)" },
		{ title: "Metrics & Drift", items: ["Accuracy & quality metrics", "Data & concept drift detection", "Distribution tracking", "Cost & latency aggregation"], color: "hsl(210,100%,50%)" },
		{ title: "Alerting", items: ["Threshold & anomaly detection", "Smart routing", "Severity & deduplication", "Retrain / rollback triggers"], color: "hsl(280,100%,65%)" },
		{ title: "Dashboards", items: ["Per-model dashboards", "Historical trends & traces", "Incident timelines", "Reports & SLAs"], color: "hsl(330,100%,60%)" }
	];

const AI_MONITORING_PHASES = [
		{
			number: "Phase 1",
			title: "Instrumentation & Baselines (Weeks 1–3)",
			desc: "OpenGridLabs instrumented production models to log inputs, outputs, latency, and cost, and set up ground-truth and feedback collection where available. The team established performance baselines for each model, so 'normal' was defined precisely and any deviation could be detected against it.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Drift Detection & Alerting (Weeks 4–6)",
			desc: "Data and concept drift detection were added on inputs and predictions, alongside live accuracy and quality metrics. OpenGridLabs configured smart alerting—thresholds plus anomaly detection, with severity and deduplication—routed to the right team, so a drifting model now raises a timely, actionable alert instead of a silent decline.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Dashboards, Response & Enablement (Weeks 7–8)",
			desc: "Per-model dashboards with historical trends and incident timelines were finalised, giving the team one place to see model health and trace what changed. Retrain and rollback triggers were wired to the alerts, and OpenGridLabs trained the client's engineers to extend monitoring to new models themselves—making observability a default part of every deployment.",
			accent: "from-pink-500 to-rose-400"
		}
	];

const AI_MONITORING_TABLERESULTS = [
		{ metric: "Time to detect model degradation", before: "Weeks", after: "Hours", change: "Drastically faster" },
		{ metric: "Incident detection & resolution time", before: "Baseline", after: "24% of baseline", change: "−76%" },
		{ metric: "Production models monitored", before: "Minimal", after: "100%", change: "Full coverage" },
		{ metric: "Drift detection", before: "None", after: "Continuous & alerted", change: "New capability" },
		{ metric: "Degradations found by customers", before: "Common", after: "Rare", change: "Caught earlier" },
		{ metric: "Per-model cost & latency visibility", before: "None", after: "Live dashboards", change: "New capability" },
		{ metric: "Incident root-cause analysis", before: "Days, guesswork", after: "Historical traces", change: "Explainable" }
	];

const AI_MONITORING_SUCCESSFACTORS = [
		{
			title: "Monitor the model, not just the machine",
			desc: "Treating accuracy, drift, and output quality as first-class signals—on par with uptime—was the core shift. It closed the exact blind spot that let a model decay silently for weeks."
		},
		{
			title: "Baselines make deviation meaningful",
			desc: "Defining precisely what 'normal' looked like for each model meant alerts fired on real deviations, not noise—so the team learned to trust and act on them rather than tune them out."
		},
		{
			title: "Catch drift before accuracy drops",
			desc: "Watching input and prediction distributions surfaced trouble earlier than waiting for accuracy to visibly fall—turning many would-be incidents into routine, pre-emptive retrains."
		},
		{
			title: "From alert to action",
			desc: "Wiring alerts to retrain and rollback paths, with historical traces for root cause, meant detection led straight to a fast, confident response—shrinking resolution time instead of just raising the alarm sooner."
		}
	];

const AI_MONITORING_FAQS = [
		{
			q: "What is AI performance monitoring?",
			a: "AI performance monitoring continuously tracks how machine learning models behave in production—their accuracy, latency, cost, inputs, and outputs. Unlike traditional software monitoring, it watches for model-specific problems like data drift, concept drift, and silent accuracy degradation, alerting teams before these issues reach users so models can be retrained or rolled back in time."
		},
		{
			q: "What is model drift and why does it matter?",
			a: "Model drift is the gradual decline in a model's performance after deployment as the world changes. Data drift happens when incoming data differs from training data; concept drift happens when the relationship the model learned no longer holds. It matters because a model can keep running without errors while quietly making worse predictions—so without monitoring, the damage is often found only after it has affected users or revenue."
		}
	];

function AIPerformanceMonitoringCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	

	

	

	

	

	

	

	

	return (
		<>
			<SEO
				title="AI Performance Monitoring & ML Observability | OpenGridLabs"
				description="How OpenGridLabs designed and built a production AI performance monitoring platform to catch silent model drift and cut incident resolution times by 76%."
				canonical="/services/ai-data/ai-performance-monitoring"
				keywords="AI performance monitoring, ML observability, model drift detection, concept drift, data drift, LLMOps, MLOps"
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

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How AI Performance Monitoring Caught Silent Model Drift Before It Reached Users
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling company was flying blind once its models hit production—accuracy could quietly decay for weeks before anyone noticed. OpenGridLabs built an AI performance monitoring and observability platform that tracks drift, accuracy, latency, and cost in real time, turning silent degradation into early alerts and cutting incident resolution time by 76%.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">AI / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">50+ models in production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">8 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Drift Detection · Metrics · Alerting · Dashboards</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{AI_MONITORING_STATS.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<BrainCircuit className="w-5 h-5 text-cyan-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a venture-backed AI company running more than fifty models in production across its product. The team was strong at building and shipping models—but once a model went live, visibility largely stopped. They knew the servers were up and the API was responding, yet they had almost no insight into whether the models were still making good predictions.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The wake-up call came when a key model's accuracy quietly declined for nearly three weeks before a customer complaint surfaced it. The infrastructure had been perfectly healthy the whole time; the model had simply drifted as real-world data shifted, and nothing was watching for it. Traditional application monitoring tracked uptime and errors but was blind to the metrics that actually matter for AI—accuracy, drift, and prediction quality. The company needed AI performance monitoring: observability built for models, not just servers, that would catch degradation before users ever felt it.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is AI Performance Monitoring?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									AI performance monitoring continuously tracks how models behave in production—accuracy, latency, cost, inputs, and outputs. Unlike traditional software monitoring, it watches for model-specific failures like data drift, concept drift, and silent accuracy decay, alerting teams before these reach users so models can be retrained or rolled back in time. It's the observability layer that keeps deployed AI trustworthy.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Challenge vs Solutions Delivered section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Five Performance Blind Spots Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a dedicated model-drift and latency observability pipeline.
						</p>
					</div>

					<div className="space-y-6">
						{AI_MONITORING_CHALLENGES.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-cyan-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{AI_MONITORING_SOLUTIONS[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-cyan-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs built a monitoring layer that instruments every model in production without changing how they serve predictions. It captures inputs, outputs, and metadata, computes model-specific metrics and drift signals, and surfaces everything through dashboards and alerts—so the team sees a model degrading in hours, not from a customer weeks later.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>A healthy server is not a healthy model:</strong> The most dangerous AI failures are silent: the system stays up, the API returns 200s, and the model quietly makes worse decisions. Traditional monitoring can't see this because it watches infrastructure, not intelligence. The shift that mattered here was treating model quality—accuracy, drift, output distribution—as a first-class signal to monitor and alert on, exactly like uptime or latency.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									AI Performance Monitoring Architecture
								</h3>
								
								<div className="flex flex-col gap-3">
									{AI_MONITORING_ARCHITECTURESTAGES.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Workflow className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Implementation Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Implementation Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							The engagement ran across three structured AI_MONITORING_PHASES designed to get the highest-risk models monitored first, then extend coverage across the fleet. OpenGridLabs embedded a cross-functional team alongside the client's ML team.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20" />
						
						{AI_MONITORING_PHASES.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(280,100%,65%)" : "hsl(330,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1 rounded-full border border-cyan-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Outcomes were measured across a 60-day post-deployment window against the prior monitoring gap.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{AI_MONITORING_TABLERESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-cyan-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We thought a green dashboard meant our AI was healthy. It only meant the servers were. Now we watch the things that actually matter—drift, accuracy, quality—and we catch a failing model in hours, before a single customer notices."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of ML</p>
								<p className="text-sm text-muted-foreground">Confidential AI company</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked: Key Success Factors
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{AI_MONITORING_SUCCESSFACTORS.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{AI_MONITORING_FAQS.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-cyan-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-cyan-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-cyan-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to see what your models are really doing in production?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds AI performance monitoring—drift detection, accuracy and quality tracking, alerting, and dashboards—so you catch model degradation in hours, not from your customers.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(34,211,238,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

const RAG_STATS = [
		{ value: "89%", label: "Reduction in hallucinated answers", accent: "from-cyan-400 to-blue-500" },
		{ value: "94%", label: "Answers grounded in a cited source", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "2.4×", label: "Improvement in retrieval precision", accent: "from-pink-500 to-rose-400" },
		{ value: "9 wk", label: "From prototype to production RAG", accent: "from-emerald-400 to-teal-500" }
	];

const RAG_CHALLENGES = [
		{ text: "Naive fixed-size chunking split sentences and tables mid-thought, destroying meaning" },
		{ text: "Pure vector search missed exact terms, codes, and names that keyword search would catch" },
		{ text: "The most relevant passage was often buried below weaker matches in the results" },
		{ text: "Answers came with no citations, so customers couldn't verify or trust them" },
		{ text: "No way to measure retrieval quality—nobody could say why an answer was wrong" }
	];

const RAG_SOLUTIONS = [
		{ text: "Structure-aware chunking that respects sections, tables, and semantic boundaries" },
		{ text: "Hybrid search combining semantic embeddings with keyword matching for the best of both" },
		{ text: "A re-ranking stage that reorders candidates so the most relevant passage reaches the model" },
		{ text: "Answers grounded strictly in retrieved context, with inline citations to source documents" },
		{ text: "A retrieval evaluation harness measuring precision, recall, and grounding on every change" }
	];

const RAG_ARCHITECTURESTAGES = [
		{ title: "Ingestion Path", items: ["Document parsing", "Structure-aware chunking", "Embedding", "Vector + keyword index", "Metadata & access control"], color: "hsl(180,100%,50%)" },
		{ title: "Retrieval Path", items: ["Query understanding", "Hybrid (semantic + keyword) search", "Re-ranking", "Top-k context assembly"], color: "hsl(210,100%,50%)" },
		{ title: "Generation Path", items: ["Context-grounded prompting", "Inline citations", "'I don't know' fallback", "Structured answer formatting"], color: "hsl(280,100%,65%)" },
		{ title: "Eval & Ops Path", items: ["Retrieval precision / recall", "Grounding & citation checks", "Drift monitoring", "Re-indexing pipeline"], color: "hsl(330,100%,60%)" }
	];

const RAG_PHASES = [
		{
			number: "Phase 1",
			title: "Retrieval Evaluation & Ingestion (Weeks 1–3)",
			desc: "Before tuning anything, OpenGridLabs built a retrieval evaluation harness with golden question-and-passage sets, making precision, recall, and grounding measurable. The team then rebuilt ingestion with structure-aware chunking and stronger embeddings, so the index preserved the meaning of real documents rather than fragmenting it.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Hybrid Search & Re-ranking (Weeks 4–7)",
			desc: "OpenGridLabs introduced hybrid search—blending semantic similarity with keyword matching—so exact terms, codes, and names were no longer missed. A re-ranking stage then reordered candidates to push the single most relevant passage to the top. Every change was validated on the evaluation harness, turning retrieval tuning into a measured, evidence-driven process.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Grounding, Citations & Hardening (Weeks 8–9)",
			desc: "The generation step was constrained to answer only from retrieved context, attach inline citations, and say 'I don't know' when the documents didn't support an answer—ending confident fabrication. Continuous monitoring tracked grounding and retrieval quality in production, and a re-indexing pipeline kept the index fresh as customer documents changed.",
			accent: "from-pink-500 to-rose-400"
		}
	];

const RAG_TABLERESULTS = [
		{ metric: "Hallucinated answers", before: "Baseline", after: "11% of baseline", change: "−89%" },
		{ metric: "Answers grounded with citation", before: "None", after: "94%", change: "New capability" },
		{ metric: "Retrieval precision @ top-k", before: "Baseline", after: "2.4× baseline", change: "+140%" },
		{ metric: "Answer accuracy (eval set)", before: "68%", after: "92%", change: "+35%" },
		{ metric: "Exact-term / code recall", before: "Weak", after: "Strong (hybrid)", change: "Improved" },
		{ metric: '"I don\'t know" on unsupported questions', before: "Rare", after: "Reliable", change: "Trustworthy" },
		{ metric: "Retrieval quality visibility", before: "None", after: "Measured & monitored", change: "New capability" }
	];

const RAG_SUCCESSFACTORS = [
		{
			title: "Measure retrieval, not just answers",
			desc: "Building a retrieval evaluation harness first meant the team could see whether the right passages were being found—separating retrieval failures from generation failures and making every improvement provable."
		},
		{
			title: "Chunking quietly decides everything",
			desc: "Structure-aware chunking that preserved sections and tables delivered some of the largest gains, because no clever search can retrieve meaning that was destroyed when the document was split."
		},
		{
			title: "Hybrid search beats either method alone",
			desc: "Semantic search captured meaning; keyword search caught exact codes and names. Combining them, then re-ranking the results, surfaced the right passage far more often than vector search by itself."
		},
		{
			title: "Grounding and 'I don't know' build trust",
			desc: "Forcing answers to come from retrieved context with citations—and to admit when the documents don't have the answer—turned a confident fabricator into a source customers could actually verify and rely on."
		}
	];

const RAG_FAQS = [
		{
			q: "What is retrieval-augmented generation (RAG)?",
			a: "RAG grounds a large language model in external knowledge. Instead of relying only on what the model learned in training, it retrieves relevant passages from a document collection at query time and supplies them as context. This produces accurate, up-to-date, verifiable answers, dramatically reducing hallucinations and letting the model cite its sources."
		},
		{
			q: "Why do RAG systems still hallucinate, and how do you fix it?",
			a: "Most RAG hallucinations come from poor retrieval, not the language model. If chunking is naive, embeddings are weak, or the wrong passages are retrieved, the model is forced to guess. Fixes include smarter chunking, hybrid search combining keyword and semantic matching, a re-ranking step to surface the best passages, and prompting the model to answer only from retrieved context and cite its sources."
		}
	];

function RAGImplementationCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	

	

	

	

	

	

	

	

	return (
		<>
			<SEO
				title="RAG Implementation Case Study | OpenGridLabs"
				description="How a production RAG pipeline cut hallucinations 89% and grounded 94% of answers in verified cited sources using hybrid search and re-ranking."
				canonical="/services/ai-data/rag-implementation"
				keywords="Retrieval-Augmented Generation, RAG implementation, hybrid search, document chunking, re-ranking, vector search, LLMOps"
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

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How a Production RAG Pipeline Cut Hallucinations 89% and Made Every Answer Cite Its Source
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling AI company partnered with OpenGridLabs to fix an assistant that sounded confident but made things up—rebuilding retrieval from the ground up with structure-aware chunking, hybrid search, and re-ranking.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">AI / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scale</span>
										<span className="text-base font-semibold text-foreground">4M+ documents indexed</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">9 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Chunking · Embeddings · Hybrid Search · Re-ranking</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{RAG_STATS.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<BrainCircuit className="w-5 h-5 text-cyan-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a venture-backed AI company whose product answers questions over each customer's private knowledge base—policies, manuals, contracts, and support history. The promise was simple and compelling: ask anything, get an accurate answer drawn from your own documents. An early version wired a language model to a basic vector search and demoed beautifully on a handful of clean files.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								In production, against millions of messy real-world documents, the cracks were obvious. The assistant answered fluently but often wrongly—citing nothing, blending unrelated passages, or inventing details that were nowhere in the source material. Customers in regulated settings couldn't trust an answer they couldn't verify, and every confident-but-false response chipped away at credibility. The team had assumed the language model was the problem. It wasn't. The retrieval was: if the right passages never reached the model, no amount of prompting could save the answer. They needed a production-grade RAG pipeline built for real documents at scale.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Retrieval-Augmented Generation (RAG)?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									RAG grounds a language model in external knowledge. Rather than relying only on what it learned in training, the system retrieves relevant passages from a document collection at query time and supplies them to the model as context. The result is accurate, up-to-date, verifiable answers that can cite their sources—dramatically reducing hallucination on questions about a specific body of knowledge.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Challenge vs Solutions Delivered section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Five Retrieval Issues Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a production-grade RAG pipeline to ensure accuracy and verifiability.
						</p>
					</div>

					<div className="space-y-6">
						{RAG_CHALLENGES.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-cyan-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{RAG_SOLUTIONS[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-cyan-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs built a two-path RAG pipeline: an offline ingestion path that turns raw documents into a high-quality searchable index, and an online query path that retrieves, re-ranks, and grounds each answer. Separating the two means the index can be improved and re-built independently of how queries are served.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Retrieval is where RAG is won or lost:</strong> Most RAG failures blamed on the language model are really retrieval failures—if the right passage never reaches the model, it is forced to guess. The biggest quality gains here came from upstream work: chunking that preserves meaning, hybrid search that catches both concepts and exact terms, and re-ranking that surfaces the single best passage. Fix retrieval, and hallucinations fall on their own.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Retrieval-Augmented Generation Pipeline
								</h3>
								
								<div className="flex flex-col gap-3">
									{RAG_ARCHITECTURESTAGES.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Workflow className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Implementation Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Implementation Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							The engagement ran across three structured RAG_PHASES designed to make retrieval measurable first, then systematically improve it. OpenGridLabs embedded a team of ML and search engineers and a retrieval-evaluation specialist alongside the client's product team.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20" />
						
						{RAG_PHASES.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(280,100%,65%)" : "hsl(330,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1 rounded-full border border-cyan-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, using the same golden evaluation sets throughout.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{RAG_TABLERESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-cyan-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We kept trying to fix our answers by changing the model. The real problem was that the right passage never reached it. Once retrieval was solid, the hallucinations vanished—and now every answer points to exactly where it came from."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Product</p>
								<p className="text-sm text-muted-foreground">Confidential AI Company</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked: Key Success Factors
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{RAG_SUCCESSFACTORS.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{RAG_FAQS.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-cyan-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-cyan-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-cyan-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to build RAG that gives answers your users can trust?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds production RAG pipelines—structure-aware chunking, hybrid search, re-ranking, and grounded, cited answers—so your AI is accurate, verifiable, and reliable at scale.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(34,211,238,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

const AGENTIC_AI_STATS = [
		{ value: "62%", label: "Operational cost reduction in targeted workflows", accent: "from-cyan-400 to-blue-500" },
		{ value: "4×", label: "Faster SLA response times across departments", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "91%", label: "Straight-through processing rate for routine tasks", accent: "from-pink-500 to-rose-400" },
		{ value: "14 wk", label: "From kickoff to full production deployment", accent: "from-emerald-400 to-teal-500" }
	];

const AGENTIC_AI_CHALLENGES = [
		{ text: "Manual KYC and AML screening across siloed data sources causing 72-hour average review cycles" },
		{ text: "Fraud triage queues backlogged by up to 3,400 cases at peak, with analysts handling repetitive evidence gathering" },
		{ text: "Loan origination pre-approval workflows requiring 7–9 manual handoffs across credit, compliance, and legal teams" },
		{ text: "Regulatory reporting inconsistency leading to error-prone submissions and audit risk" },
		{ text: "No unified audit trail for AI-assisted decisions, creating explainability and accountability gaps" }
	];

const AGENTIC_AI_SOLUTIONS = [
		{ text: "LLM-powered document reasoning for KYC packet analysis, reducing review to under 4 hours" },
		{ text: "Autonomous fraud triage agent that pre-processes evidence, scores risk, and escalates only confirmed edge cases" },
		{ text: "AI-driven loan origination pipeline with configurable decision guardrails and human-in-the-loop checkpoints" },
		{ text: "Multi-agent orchestration layer with specialised compliance, fraud, and credit sub-agents operating in parallel" },
		{ text: "Immutable agent decision log with explainability summaries for every AI-assisted action" }
	];

const AGENTIC_AI_ARCHITECTURESTAGES = [
		{ title: "Data Ingestion", items: ["Core banking feeds", "Customer documents", "Transaction streams", "External data APIs (credit bureaux, sanctions lists)"], color: "hsl(180,100%,50%)" },
		{ title: "Orchestrator", items: ["Central LLM agent", "Goal decomposition", "Sub-agent delegation", "Tool invocation", "Context memory management"], color: "hsl(210,100%,50%)" },
		{ title: "Specialist Agents", items: ["KYC/AML Agent", "Fraud Triage Agent", "Credit Underwriting Agent", "Regulatory Reporting Agent", "Document Intelligence Agent"], color: "hsl(280,100%,65%)" },
		{ title: "Enterprise Systems", items: ["Core banking system", "CRM", "Risk management platform", "Regtech reporting", "HRMS", "Audit & compliance logs"], color: "hsl(330,100%,60%)" }
	];

const AGENTIC_AI_PHASES = [
		{
			number: "Phase 1",
			title: "Discovery & Agent Design (Weeks 1–3)",
			desc: "Deep process mapping across all three target domains. OpenGridLabs conducted over 40 stakeholder interviews to document edge cases, exception handling protocols, and the informal knowledge held by senior analysts. This became the foundational corpus for agent training and tool configuration.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Build, Test & Shadow Mode (Weeks 4–10)",
			desc: "Agents were deployed in a shadow operating mode, running in parallel with human workflows and producing outputs that were compared against analyst decisions without any live system impact. Disagreement rates were reviewed weekly; agent logic was refined through iterative prompt engineering, fine-tuning, and guardrail adjustment until shadow accuracy consistently exceeded 94%.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Staged Production Rollout (Weeks 11–14)",
			desc: "Production access was granted in a phased sequence—fraud triage first (lowest financial risk), then KYC, then lending pre-approval. Each phase included a 48-hour monitoring window before the next was activated. Rollback procedures and manual override paths were documented and tested by the client's operations team prior to go-live.",
			accent: "from-pink-500 to-rose-400"
		}
	];

const AGENTIC_AI_TABLERESULTS = [
		{ metric: "KYC review cycle time", before: "72 hours avg.", after: "<4 hours avg.", change: "−94%" },
		{ metric: "Fraud triage backlog (peak)", before: "3,400 cases", after: "180 cases", change: "−95%" },
		{ metric: "Loan pre-approval handoffs", before: "7–9 steps", after: "1–2 steps", change: "−82%" },
		{ metric: "Analyst time on routine tasks", before: "~70% of day", after: "~18% of day", change: "−74%" },
		{ metric: "Regulatory report error rate", before: "4.2%", after: "0.3%", change: "−93%" },
		{ metric: "Operational cost (targeted workflows)", before: "Baseline", after: "38% of baseline", change: "−62%" },
		{ metric: "Projected 12-month ROI", before: "—", after: "340%", change: "340% ROI" }
	];

const AGENTIC_AI_SUCCESSFACTORS = [
		{
			title: "Domain-first agent design",
			desc: "Rather than adapting general-purpose AI to banking, OpenGridLabs built agents specifically around BFSI workflows. Each agent's tool set, reasoning prompts, and escalation logic were co-designed with the client's subject-matter experts."
		},
		{
			title: "Shadow mode as a trust accelerator",
			desc: "Running agents in parallel before production gave internal stakeholders the data needed to build confidence without risking live operations. By the time production rollout began, internal resistance was minimal—the accuracy data spoke for itself."
		},
		{
			title: "Explainability as a first-class feature",
			desc: "Every agent decision carries a natural-language reasoning summary. This proved critical for internal audit teams and, in one instance, was used to respond to a regulator's query about an automated credit decision—resolving it within hours rather than days."
		},
		{
			title: "Human-in-the-loop as architecture, not afterthought",
			desc: "Escalation gates were engineered into the system's core logic, not bolted on. This preserved human oversight for genuinely complex or high-stakes decisions while freeing the agents to act autonomously on routine cases."
		}
	];

const AGENTIC_AI_FAQS = [
		{
			q: "What is Agentic AI in Financial Services?",
			a: "Unlike traditional automation that executes fixed scripts, agentic AI systems can perceive context, set goals, orchestrate multiple tools or sub-agents, and adapt their approach in real time—enabling dynamic, multi-step reasoning across complex financial workflows such as KYC, credit decisioning, and regulatory reporting."
		},
		{
			q: "How does human-in-the-loop gating work in BFSI Agentic AI?",
			a: "Every agent action is logged with a reasoning trace, timestamp, and responsible-AI confidence score. Human-in-the-loop gates are enforced at defined risk thresholds—ensuring regulatory alignment with RBI guidelines, SEBI norms, and internal audit requirements. No autonomous action is taken on decisions above a configurable risk tier without human sign-off."
		},
		{
			q: "Why is domain-first design critical for banking agents?",
			a: "General-purpose AI is not suited for highly regulated, high-stakes financial operations. Banking agents require customized tools, strict reasoning prompts, deterministic escalation rules, and co-designing with subject-matter experts to operate accurately and within compliance boundaries."
		}
	];

function AgenticAICaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	

	

	

	

	

	

	

	

	return (
		<>
			<SEO
				title="Agentic AI Case Study - Banking & Financial Services | OpenGridLabs"
				description="How OpenGridLabs' multi-agent AI platform transformed operations for a Tier-1 financial institution (BFSI), achieving a 62% operational cost reduction in 14 weeks."
				canonical="/services/ai-data/agentic-ai"
				keywords="Agentic AI, Multi-Agent Orchestration, BFSI Automation, Fraud Detection, KYC Compliance, Loan Underwriting, Regulatory AI"
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

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
									Case Study · Banking & Financial Services
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Agentic AI Transformed Operations for a Tier-1 Financial Institution
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A confidential BFSI enterprise deployed OpenGridLabs' multi-agent AI platform across compliance, fraud triage, and lending workflows—achieving outcomes that reframed what automation means in financial services.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">BFSI (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">AUM</span>
										<span className="text-base font-semibold text-foreground">$40B+</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">14 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Agentic AI · LLM Orchestration · RPA</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{AGENTIC_AI_STATS.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<BrainCircuit className="w-5 h-5 text-cyan-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a diversified financial services institution operating across retail banking, insurance underwriting, and asset management verticals. With over 4,000 employees and a customer base exceeding two million, the organisation had reached a scale where its legacy, rules-based automation stack was no longer keeping pace with regulatory complexity, fraud sophistication, or customer expectations.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Facing growing pressure from new compliance obligations and rising operational costs, leadership initiated a strategic review of AI readiness. The conclusion was clear: point AGENTIC_AI_SOLUTIONS and RPA bots were not enough. What was required was an intelligent, goal-directed automation layer—one capable of reasoning, delegating sub-tasks, and taking autonomous action across interconnected systems. They needed agentic AI.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What is Agentic AI in Financial Services?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Unlike traditional automation that executes fixed scripts, agentic AI systems can perceive context, set goals, orchestrate multiple tools or sub-agents, and adapt their approach in real time—enabling dynamic, multi-step reasoning across complex financial workflows such as KYC, credit decisioning, and regulatory reporting.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Challenge vs Solutions Delivered section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Five Operational Bottlenecks Resolved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs deployed autonomous specialized agents to transform customer-facing and regulatory timelines.
						</p>
					</div>

					<div className="space-y-6">
						{AGENTIC_AI_CHALLENGES.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-cyan-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{AGENTIC_AI_SOLUTIONS[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-cyan-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs designed a layered agentic architecture that integrates with the client's existing core banking infrastructure without requiring a rip-and-replace of legacy systems. The platform is built for auditability, role-based access, and regulatory-grade data handling.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Compliance-first by design:</strong> Every agent action is logged with a reasoning trace, timestamp, and responsible-AI confidence score. Human-in-the-loop gates are enforced at defined risk thresholds—ensuring regulatory alignment with RBI guidelines, SEBI norms, and internal audit requirements. No autonomous action is taken on decisions above a configurable risk tier without human sign-off.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Agentic AI Platform Architecture Layers
								</h3>
								
								<div className="flex flex-col gap-3">
									{AGENTIC_AI_ARCHITECTURESTAGES.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Workflow className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Implementation Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Implementation Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							The engagement ran across three structured AGENTIC_AI_PHASES, designed to minimise operational disruption while building organisational confidence in agentic AI. OpenGridLabs embedded a cross-functional team comprising ML engineers, financial domain specialists, and a dedicated compliance architect.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20" />
						
						{AGENTIC_AI_PHASES.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(280,100%,65%)" : "hsl(330,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1 rounded-full border border-cyan-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Outcomes were measured across a 90-day post-deployment window against pre-deployment baselines. The results demonstrated that agentic AI, properly implemented, can deliver enterprise-grade ROI well within a single financial quarter.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{AGENTIC_AI_TABLERESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-cyan-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We had automated tasks before. This was the first time we automated thinking. The agents don't just execute—they reason, adapt, and escalate appropriately. That distinction is what made this transformation real."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief Operating Officer</p>
								<p className="text-sm text-muted-foreground">Confidential BFSI Client</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked: Key Success Factors
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{AGENTIC_AI_SUCCESSFACTORS.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{AGENTIC_AI_FAQS.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-cyan-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-cyan-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-cyan-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to deploy agentic AI in your financial operations?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds production-grade agentic AI systems tailored for BFSI compliance, risk, and customer operations.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(34,211,238,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}



// Static service lists for reverse-lookup and slug matching
const AI_SERVICES = [
	"Agentic AI", "Large Language Models", "Voice to Text Converter", "AI Strategy Consulting",
	"Explainable AI", "AI Ethics & Governance", "Prompt Engineering", "AI Model Fine-tuning",
	"RAG Implementation", "AI Integration Services", "Custom AI Solutions", "AI Performance Monitoring"
];
const ML_SERVICES = [
	"Predictive Modeling", "Classification Systems", "Regression Analysis", "Clustering Algorithms",
	"Recommendation Engines", "Anomaly Detection", "Time Series Forecasting", "Feature Engineering",
	"Model Optimization", "A/B Testing ML", "AutoML Solutions", "MLOps Pipeline"
];
const DL_SERVICES = [
	"Neural Networks", "Computer Vision", "Image Recognition", "Object Detection",
	"Face Recognition", "OCR Solutions", "Video Analytics", "Generative AI",
	"Style Transfer", "CNN Models", "RNN/LSTM", "Transfer Learning"
];
const NLP_SERVICES = [
	"Text Analytics", "Sentiment Analysis", "Chatbots & Virtual Assistants", "Language Translation",
	"Named Entity Recognition", "Topic Modeling", "Text Summarization", "Question Answering",
	"Intent Recognition", "Content Generation", "Speech Recognition", "Voice Synthesis"
];

const ALL_SERVICES = [...AI_SERVICES, ...ML_SERVICES, ...DL_SERVICES, ...NLP_SERVICES];

export default function ServicesAIDataDetail() {
	const { serviceId } = useParams<{ serviceId: string }>();

	if (serviceId === "agentic-ai") {
		return <AgenticAICaseStudy />;
	}

	if (serviceId === "rag-implementation") {
		return <RAGImplementationCaseStudy />;
	}

	if (serviceId === "voice-to-text-converter") {
		return <VoiceToTextConverterCaseStudy />;
	}

	if (serviceId === "custom-ai-solutions") {
		return <CustomAISolutionsCaseStudy />;
	}

	if (serviceId === "ai-performance-monitoring") {
		return <AIPerformanceMonitoringCaseStudy />;
	}

	if (serviceId === "ai-integration-services") {
		return <AIIntegrationServicesCaseStudy />;
	}

	if (serviceId === "large-language-models") {
		return <LargeLanguageModelsCaseStudy />;
	}

	if (serviceId === "ai-model-fine-tuning") {
		return <AIModelFineTuningCaseStudy />;
	}

	

	// Find the matching service by slug
	const matchedTitle = ALL_SERVICES.find(s => slugify(s) === serviceId);

	if (!serviceId || !matchedTitle) {
		return <Navigate to="/services/ai-data" replace />;
	}

	const service = generateServiceDetail(serviceId, matchedTitle);

	return (
		<>
			<SEO
				title={`${service.title} - AI & Data Services | OpenGridLabs`}
				description={service.description}
				canonical={`/services/ai-data/${serviceId}`}
				keywords={`${service.title}, ${service.category}, AI solutions, data intelligence, machine learning, opengridlabs`}
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[600px] blur-[160px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, ${service.highlight} 0%, transparent 70%)`
					}}
				/>

				{/* Back Button & Breadcrumbs */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
					</Link>
				</div>

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-center">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							{/* Category Tag */}
							<div className="flex items-center gap-3">
								<span 
									className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border bg-opacity-10 backdrop-blur-md"
									style={{ 
										borderColor: `${service.highlight}30`, 
										backgroundColor: `${service.highlight}10`,
										color: service.highlight 
									}}
								>
									{service.category}
								</span>
							</div>

							{/* Large Service Title */}
							<h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								{service.title}
							</h1>

							{/* Core Tagline */}
							<p className="text-xl md:text-3xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								{service.description}
							</p>
						</motion.div>

						{/* Interactive Technology Card */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl">
								<div 
									className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full" 
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="flex items-center gap-3 mb-6">
									<Terminal className="w-6 h-6" style={{ color: service.highlight }} />
									<h3 className="text-lg font-bold text-foreground">Technology Stack</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{service.technologies.map((tech, idx) => (
										<span 
											key={idx} 
											className="px-3.5 py-1.5 rounded-xl text-sm font-medium border border-black/5 dark:border-white/5 bg-foreground/[0.02] dark:bg-white/5 text-foreground/80"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* In-depth Overview Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div 
							className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" 
							style={{ backgroundImage: `linear-gradient(to right, transparent, ${service.highlight}40, transparent)` }}
						/>
						<div className="grid lg:grid-cols-12 gap-12">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<BrainCircuit className="w-5 h-5 text-muted-foreground" />
									<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Deep Dive</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
									Service Overview
								</h2>
								<div 
									className="w-16 h-1 rounded-full" 
									style={{ backgroundColor: service.highlight }}
								/>
							</div>
							<div className="lg:col-span-7">
								<p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
									{service.overview}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Detailed Features & Capabilities */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">System Capabilities</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Core Features
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{service.features.map((feature, idx) => {
							const [titlePart, descPart] = feature.split(": ");
							return (
								<motion.div 
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: idx * 0.05 }}
									className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors shadow-lg group relative overflow-hidden"
								>
									<div className="flex gap-4 items-start">
										<div className="mt-1">
											<CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: service.highlight }} />
										</div>
										<div className="space-y-2">
											<h3 className="text-xl font-bold text-foreground">
												{titlePart}
											</h3>
											{descPart && (
												<p className="text-muted-foreground leading-relaxed">
													{descPart}
												</p>
											)}
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</section>

				{/* Custom Real-world Use Cases */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Applied AI</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Enterprise Use Cases
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{service.useCases.map((useCase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, scale: 0.98 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="glass-panel p-10 rounded-[36px] border border-black/5 dark:border-white/5 flex flex-col justify-between h-[360px] relative overflow-hidden group shadow-xl"
							>
								<div 
									className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
									style={{ backgroundColor: service.highlight }}
								/>
								
								<div className="space-y-4">
									<span 
										className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-foreground/[0.01] text-muted-foreground"
									>
										{useCase.industry}
									</span>
									<h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
										{useCase.title}
									</h3>
								</div>

								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									{useCase.desc}
								</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* Results & Business Impact Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Strategic Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Target Impact Metrics
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{service.results.map((result, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 text-left relative overflow-hidden shadow-lg"
							>
								<div 
									className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-10"
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="space-y-4 relative z-10">
									<span className="text-xs uppercase text-muted-foreground font-bold tracking-wider">
										{result.metric}
									</span>
									<p 
										className="text-4xl md:text-5xl font-black tracking-tight"
										style={{ color: service.highlight }}
									>
										{result.value}
									</p>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{result.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Contact Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none"
							style={{ backgroundColor: service.highlight }}
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto" style={{ color: service.highlight }} />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to deploy this capability?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								Partner with our AI and software engineering experts to custom design, validate, and integrate {service.title} inside your enterprise software platform.
							</p>
							<div>
								<Link 
									to="/contact-us"
									className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white"
									style={{ 
										background: `linear-gradient(135deg, ${service.highlight} 0%, hsl(280, 100%, 60%) 100%)`,
										boxShadow: `0 10px 30px ${service.highlight}30`
									}}
								>
									Get in Touch <ArrowRight className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
