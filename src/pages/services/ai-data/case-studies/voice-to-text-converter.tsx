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
	{ value: "96%", label: "Transcription accuracy on domain audio", accent: "from-cyan-400 to-blue-500" },
	{ value: "<300ms", label: "Streaming partial-result latency", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "58%", label: "Lower transcription cost per audio hour", accent: "from-pink-500 to-rose-400" },
	{ value: "11 wk", label: "From prototype to full production deployment", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Word error rate climbed sharply on noisy, multi-speaker, and accented audio—exactly the recordings customers cared about most" },
	{ text: "Industry-specific terms, product names, and acronyms were consistently mis-transcribed by the generic engine" },
	{ text: "No speaker labelling, so transcripts read as one undifferentiated block of text" },
	{ text: "Live-caption latency felt sluggish, breaking the real-time experience users expected" },
	{ text: "Flat per-hour API pricing made unit economics worse with every new customer" }
];

const SOLUTIONS = [
	{ text: "Noise-robust preprocessing and voice-activity detection to handle messy real-world audio" },
	{ text: "Domain adaptation with custom vocabulary and phrase biasing for the client's jargon, names, and acronyms" },
	{ text: "Speaker diarization that attributes each segment to the correct speaker with consistent labels" },
	{ text: "A streaming ASR pipeline returning stable partial results in under 300ms for true real-time captions" },
	{ text: "A hybrid streaming-plus-batch architecture that routed each job to the most cost-efficient path" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Audio Capture", items: ["Live mic & file streams", "Resampling", "Noise suppression", "Voice-activity detection", "Segmentation"], color: "hsl(180,100%,50%)" },
	{ title: "Orchestration", items: ["Streaming vs. batch router", "Language detection", "Custom vocabulary & phrase biasing", "Throttling & queueing"], color: "hsl(210,100%,50%)" },
	{ title: "Speech Models", items: ["Acoustic model", "Language model", "Domain-adapted fine-tune", "Speaker diarization", "Confidence scoring"], color: "hsl(280,100%,65%)" },
	{ title: "Post & Ops", items: ["Punctuation & formatting", "Speaker labelling", "Profanity & PII redaction", "WER telemetry", "Cost & latency monitoring"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
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

const TABLE_RESULTS = [
	{ metric: "Transcription accuracy (domain audio)", before: "82%", after: "96%", change: "+14 pts" },
	{ metric: "Word error rate (noisy / multi-speaker)", before: "23%", after: "6%", change: "−74%" },
	{ metric: "Streaming partial-result latency", before: "~1.4 s", after: "<300 ms", change: "−79%" },
	{ metric: "Speaker attribution accuracy", before: "None", after: "93%", change: "New capability" },
	{ metric: "Custom-term recognition", before: "47%", after: "92%", change: "+96%" },
	{ metric: "Transcription cost per audio hour", before: "Baseline", after: "42% of baseline", change: "−58%" },
	{ metric: "Manual transcript correction time", before: "—", after: "−81%", change: "81% less rework" }
];

const SUCCESS_FACTORS = [
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

const FAQS = [
	{
		q: "What is the difference between streaming and batch speech-to-text?",
		a: "Streaming speech-to-text transcribes audio in real time as someone speaks, returning partial results within milliseconds—ideal for live captions, voice assistants, and call centres. Batch transcription processes a complete recording afterward, trading latency for slightly higher accuracy and lower cost, which suits meetings, podcasts, and archives."
	},
	{
		q: "How can voice-to-text accuracy be improved for a specific domain?",
		a: "Accuracy improves through domain adaptation: fine-tuning the acoustic and language models on representative audio, adding custom vocabulary and phrase biasing for product names and jargon, applying noise-robust preprocessing, and using speaker diarization to attribute words correctly. Together these sharply reduce word error rate on specialised audio."
	}
];

export default function VoiceToTextConverterCaseStudy() {
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

				<CaseStudyHero 
					categoryTag="Case Study · Artificial Intelligence"
					title="How Real-Time Voice-to-Text Reached 96% Accuracy for a High-Growth AI Company"
					description="A fast-scaling AI product company partnered with OpenGridLabs to turn an unreliable transcription feature into a production-grade speech engine—combining streaming speech recognition, speaker diarization, and domain adaptation to deliver accuracy and latency that finally held up in the real world."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scale", value: "120K+ audio hours / month" },
						{ label: "Timeline", value: "11 weeks to production" },
						{ label: "Stack", value: "Streaming ASR · Diarization · Domain Adaptation · MLOps" }
					]}
				/>

				<CaseStudyCarousel
					slug="voice-to-text-converter"
					title="Voice to Text Converter"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/voice-to-text-converter/1.jpg",
						"/images/case-studies/voice-to-text-converter/2.jpg"
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
						"Our client is a venture-backed AI company whose product captures spoken conversations—meetings, support calls, and field interviews—and turns them into searchable, structured text. Voice-to-text sat at the very core of the experience: if the transcript was wrong, every downstream feature built on top of it was wrong too. An early version stitched together a generic off-the-shelf speech API, and for clean, single-speaker audio it worked well enough to win their first customers.",
						"Then real-world usage arrived. Overlapping speakers, background noise, industry jargon, accents, and long recordings exposed the limits of a one-size-fits-all engine. Accuracy on the audio that mattered most hovered in the low 80s, latency made live captions feel laggy, and per-hour API costs ballooned as volume crossed 120,000 audio hours per month. The team didn't need another generic transcriber. They needed a fast, accurate, observable, and cost-efficient voice-to-text platform built for their domain."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="How Does Modern Voice-to-Text Work?"
					definitionText="A production speech-to-text system captures audio, cleans and segments it, and passes it through an acoustic model that maps sound to phonemes and a language model that turns those into fluent text. Streaming systems return partial results in milliseconds, speaker diarization labels who said what, and domain adaptation tunes the models to a customer's specific vocabulary and audio conditions."
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
					tag={"Challenges & Solutions"}
					title={"Five Issues Resolved"}
					description={"How OpenGridLabs turned a transcription feature into a production-grade speech engine."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Voice-to-Text Platform Architecture"}
					description={"OpenGridLabs designed a layered speech platform that sits between the client's application and the underlying speech models. The architecture is engine-agnostic—self-hosted and third-party models can be mixed or swapped without application changes—and is built for low latency, accuracy, and per-customer cost control from the ground up."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Privacy-first by design"}
					alertText={"Audio and transcripts are isolated per tenant and encrypted in transit and at rest. Optional on-the-fly PII redaction removes sensitive details from transcripts, recordings are retained only for the period a customer configures, and no customer audio is used to train shared models without explicit opt-in—keeping the platform aligned with enterprise data-governance and compliance requirements."}
					rightColumnTitle={"Voice-to-Text Platform Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to ship measurable accuracy gains early while building toward a durable platform. OpenGridLabs embedded a cross-functional team of speech-ML engineers, an evaluation specialist, and a platform architect working alongside the client's product team."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, using the same benchmark audio set throughout. The results showed that a domain-tuned speech platform improves accuracy, latency, and economics together—rather than trading one for another."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our transcripts went from 'mostly right' to something customers actually trust without checking. The captions feel instant, the speaker labels just work, and we're paying far less per hour than we were with the generic API we started on."}
					author={"VP of Product"}
					subtitle={"Confidential AI company"}
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
					title={"Ready to build voice-to-text your users can trust?"}
					description={"OpenGridLabs builds production-grade speech platforms—streaming ASR, diarization, domain adaptation, and MLOps—tuned for accuracy, latency, and cost at scale."}
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
