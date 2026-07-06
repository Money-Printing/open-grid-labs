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
	{ value: "99.8%", label: "1:1 verification accuracy", accent: "from-emerald-400 to-teal-500" },
	{ value: "<1s", label: "Median end-to-end decision time", accent: "from-cyan-400 to-blue-500" },
	{ value: "97%", label: "Spoofing attempts detected & blocked", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "11 wk", label: "From manual review to live biometric", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "Manual review too slow for conversion expectations — minutes to hours of wait time" },
	{ text: "Spoofing attempts (printed photos, video replays) occasionally passing human review" },
	{ text: "Demographic bias concerns: unequal error rates across skin tones and age groups" },
	{ text: "Document images vary widely — lighting, age, glasses, different ID types" },
	{ text: "Regulators demanding evidence of equitable performance, not just average accuracy" }
];

const SOLUTIONS = [
	{ text: "A deep face-embedding model producing compact, discriminative identity representations" },
	{ text: "Active liveness detection blocking photo, video, and 3D-mask spoofing attempts" },
	{ text: "1:1 matching with a calibrated similarity threshold tuned to the operational FMR/FNMR target" },
	{ text: "Demographic fairness evaluation ensuring equitable error rates across groups" },
	{ text: "A human-escalation path for low-confidence decisions, preserving accountability" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Capture", items: ["Selfie capture", "Liveness detection (active anti-spoofing)", "Face quality checks", "Document image extraction"], color: "hsl(180,100%,50%)" },
	{ title: "Embed", items: ["Face alignment & normalisation", "Deep embedding model", "L2-normalised identity vector", "Illumination & pose robustness"], color: "hsl(210,100%,50%)" },
	{ title: "Match", items: ["1:1 cosine similarity", "Calibrated decision threshold", "Confidence score", "Demographic fairness checks"], color: "hsl(280,100%,65%)" },
	{ title: "Decide", items: ["Accept / reject / escalate routing", "Audit log", "Human review queue", "Monitoring & drift alerts"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Embedding Model & Liveness (Weeks 1–4)",
		desc: "OpenGridLabs selected and evaluated multiple face embedding architectures against the client's document types and selfie conditions, benchmarking on both accuracy and demographic parity. Liveness detection was built and tested against a representative sample of spoofing attempts including printed photos, video replays, and digital overlays.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Threshold Calibration & Fairness (Weeks 5–9)",
		desc: "The 1:1 matching threshold was calibrated against the operational false-match and false-non-match targets agreed with the compliance team. Demographic fairness was measured across skin-tone, age, and gender sub-groups, and the system was iteratively tuned until error-rate disparity fell within the accepted tolerance on every dimension.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Production Integration & Audit (Weeks 10–11)",
		desc: "The pipeline was integrated into the onboarding flow with a human-escalation path and a full audit log for regulatory purposes. Live accuracy, liveness-detection rates, and demographic parity were monitored, and the client's compliance team was trained to read and act on the fairness dashboard.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "1:1 verification accuracy", before: "~96% (human avg.)", after: "99.8%", change: "Exceeded" },
	{ metric: "Decision latency", before: "Minutes–hours", after: "<1 second", change: "Instant" },
	{ metric: "Spoofing detection rate", before: "Inconsistent", after: "97%", change: "Reliable" },
	{ metric: "Demographic error-rate parity", before: "Unmeasured", after: "Within tolerance", change: "Evidenced" },
	{ metric: "Onboarding conversion rate", before: "Baseline", after: "Materially higher", change: "Improved" },
	{ metric: "Regulatory audit readiness", before: "Manual records", after: "Full audit log", change: "Compliant" }
];

const SUCCESS_FACTORS = [
	{
		title: "Liveness is not optional",
		desc: "A face recognition system without anti-spoofing is a system that can be defeated by a photograph. Treating liveness as a first-class component — not an add-on — meant the security guarantee was real."
	},
	{
		title: "Thresholds require operational context",
		desc: "Accuracy maximised in isolation and accuracy tuned to business consequences are different things. Calibrating the decision threshold to the agreed false-match and false-non-match rate targets — rather than peak benchmark accuracy — produced a system the compliance team could actually endorse."
	},
	{
		title: "Fairness must be measured, not assumed",
		desc: "The widely reported failure of commercial face recognition to perform equitably across demographic groups is not inevitable; it is a consequence of not measuring and addressing it. Treating fairness as a design constraint from day one produced a measurably better system than treating it as a post-hoc check."
	},
	{
		title: "Escalation preserves accountability",
		desc: "A system that makes every decision automatically removes the human oversight that regulators and users legitimately expect in high-stakes identity decisions. The confidence-gated escalation path kept humans in the loop for genuinely hard cases without making them bottlenecks for the easy majority."
	}
];

const FAQS = [
	{
		q: "What is face recognition and how does it work?",
		a: "Face recognition maps a face image to a compact numerical embedding — a point in high-dimensional space — such that two images of the same person are close and two different people are far apart. Identity verification (1:1) checks whether a probe matches a specific enrolled face; search (1:N) finds the closest match in a gallery. Deep learning models learn these embeddings from large labelled face datasets."
	},
	{
		q: "What is liveness detection in face recognition?",
		a: "Liveness detection determines whether the face presented to the camera is a live person or a spoofing attempt such as a printed photo, video replay, or 3D mask. Without it, a face recognition system can be defeated by holding up a photograph, making it unsuitable for security-critical identity verification."
	}
];

export default function FaceRecognitionCaseStudy() {
	return (
		<>
			<SEO
				title="Face Recognition Case Study | OpenGridLabs"
				description="How OpenGridLabs built a face recognition identity verification system with 99.8% accuracy, active liveness detection, and demographic fairness calibration."
				canonical="/services/ai-data/face-recognition"
				keywords="Face Recognition, Identity Verification, Liveness Detection, Biometric Authentication, Face Embedding, Anti-Spoofing, Fairness in AI, 1:1 Matching, KYC AI, Deep Learning, Computer Vision, Responsible AI"
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
					categoryTag="Case Study · Artificial Intelligence"
					title="How Face Recognition Delivered Identity Verification at 99.8% Accuracy with Sub-Second Decisions"
					description="A fast-scaling company with a regulated onboarding flow needed to verify that the person in a selfie matched the person on their identity document — instantly, reliably, and fairly across demographic groups. OpenGridLabs built a face recognition system combining face embedding, liveness detection, and fairness evaluation that now verifies identity at 99.8% accuracy in under a second, with spoofing attempts blocked and bias measured and addressed."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Fintech / Regulated SaaS (anonymised)" },
						{ label: "Scale", value: "500K+ verifications / month" },
						{ label: "Timeline", value: "11 weeks to production" },
						{ label: "Stack", value: "Face Embedding · Liveness · 1:1 Matching · Fairness" }
					]}
				/>

				<CaseStudyCarousel
					slug="face-recognition"
					title="Face Recognition"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/face-recognition/1.jpg",
						"/images/case-studies/face-recognition/2.jpg"
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
						"Our client is a venture-backed company in a regulated industry where identity verification is a mandatory step in customer onboarding. The previous process relied on human reviewers comparing a selfie to a document photo — slow, inconsistent, and unable to scale as the business grew. Verification could take minutes to hours depending on queue depth, which hurt conversion and frustrated customers who expected a modern, instant experience.",
						"Beyond speed, the company faced an emerging risk: increasingly sophisticated spoofing attempts, including printed photos and video replays, were occasionally passing manual review. And with regulators beginning to ask about demographic fairness in automated decision systems, the new solution had to demonstrably work equitably across groups — not just accurately on average. What they needed was a production-grade face recognition system that combined speed, security, and fairness in a single verifiable pipeline.",
						"Face recognition maps a face image to a compact numerical embedding — a point in high-dimensional space — so two images of the same person are close together and two different people are far apart. Identity verification (1:1) checks whether a probe matches a specific enrolled face. Search (1:N) finds the closest match in a gallery. For onboarding, 1:1 matching against a document photo is the core task, made secure by a liveness layer that blocks spoofing attempts."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Face Recognition?"
					definitionText="Face recognition maps a face image to a compact numerical embedding — a point in high-dimensional space — so two images of the same person are close together and two different people are far apart. Identity verification (1:1) checks whether a probe matches a specific enrolled face. Search (1:N) finds the closest match in a gallery. For onboarding, 1:1 matching against a document photo is the core task, made secure by a liveness layer that blocks spoofing attempts."
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
					title={"Five Biometric Gaps Resolved"}
					description={"How OpenGridLabs built a secure, liveness-aware identity verification platform."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs built a four-stage verification pipeline: liveness check, face alignment and embedding, 1:1 matching against the document reference, and a decision layer with escalation routing. Every stage has an explicit failure path so a compromised or low-confidence step escalates to human review rather than silently passing or incorrectly blocking."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Fairness is not optional — it is a design requirement"}
					alertText={"Face recognition systems have a well-documented history of unequal error rates across demographic groups, with higher false-rejection rates on darker skin tones and older faces. The engagement treated equitable performance as a hard design constraint, not an afterthought. Every threshold decision was evaluated across demographic splits, and the embedding model was selected and tuned specifically to minimise disparity — not just to maximise average accuracy. The resulting system was measurably fairer than the commodity API alternatives evaluated at the outset."}
					rightColumnTitle={"Face Recognition Verification Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over eleven weeks, with fairness evaluation integrated from the start rather than bolted on at the end. OpenGridLabs embedded a team of computer vision engineers and a responsible-AI specialist alongside the client's identity and compliance teams."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured over 90 days post-deployment against the prior manual-review baseline."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Speed and accuracy were the obvious wins. What surprised us was how much the fairness work mattered — to our compliance team, to regulators asking about it, and to our own standards. We now have evidence that the system works equitably, not just on average."}
					author={"Head of Identity & Compliance"}
					subtitle={"Confidential Fintech Company"}
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
					title={"Need identity verification that's fast, secure, and fair?"}
					description={"OpenGridLabs builds face recognition systems — embeddings, liveness detection, calibrated matching, and demographic fairness evaluation — for biometric identity that regulators and users can trust."}
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
