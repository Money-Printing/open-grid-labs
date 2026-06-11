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
	{ value: "97.4%", label: "Label accuracy across 800+ categories", accent: "from-emerald-400 to-teal-500" },
	{ value: "6×", label: "Faster tagging than the manual team", accent: "from-cyan-400 to-blue-500" },
	{ value: "92%", label: "Of new items auto-tagged on ingest", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "10 wk", label: "From backlog to real-time auto-tagging", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "A growing backlog of untagged items that were invisible to search and filters" },
	{ text: "Inconsistent labelling between human reviewers, especially on multi-category items" },
	{ text: "Eight hundred-plus category taxonomy too large for consistent human recall" },
	{ text: "No confidence signal — the team couldn't tell which tags to trust or review" },
	{ text: "Manual throughput flatly capped regardless of listing volume" }
];

const SOLUTIONS = [
	{ text: "A multi-label CNN classifier assigning all applicable categories to each image" },
	{ text: "Transfer learning from a large pre-trained backbone, fine-tuned on catalogue images" },
	{ text: "Per-label confidence scores so high-certainty tags are accepted and low-certainty ones are reviewed" },
	{ text: "Hierarchical taxonomy enforcement ensuring sub-category tags are consistent with parents" },
	{ text: "Real-time tagging on ingest so new items are searchable immediately" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Ingest", items: ["Image normalisation", "Resize & augmentation", "Quality checks", "Catalogue metadata join"], color: "hsl(180,100%,50%)" },
	{ title: "Classify", items: ["Pre-trained backbone (EfficientNet/ResNet)", "Fine-tuned multi-label head", "Per-label sigmoid outputs"], color: "hsl(210,100%,50%)" },
	{ title: "Calibrate", items: ["Confidence thresholds per label", "Taxonomy consistency checks", "Low-confidence review queue"], color: "hsl(280,100%,65%)" },
	{ title: "Deliver", items: ["Tag injection into catalogue", "Search index update", "Reviewer feedback loop", "Monitoring & drift alerts"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Taxonomy Mapping & Training Data (Weeks 1–3)",
		desc: "OpenGridLabs cleaned the existing taxonomy, resolved overlapping and ambiguous categories, and assembled a training set from historically labelled catalogue images with inter-annotator agreement checks. Categories with too few examples were identified for targeted data collection before training began.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Model Training & Per-Label Calibration (Weeks 4–8)",
		desc: "A fine-tuned multi-label model was trained from a pre-trained backbone, with heavy augmentation to handle the visual diversity of the catalogue. Per-label confidence thresholds were calibrated on a validation set, and taxonomy enforcement rules were added to catch logically inconsistent tag combinations.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Real-Time Serving & Enablement (Weeks 9–10)",
		desc: "The model was deployed for real-time tagging on ingest, with low-confidence items routed to a lightweight review queue. A monitoring layer tracked per-category accuracy and drift, and the client's team was trained to extend labelling and retrain as the taxonomy evolves.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Label accuracy", before: "~93% (best reviewers)", after: "97.4%", change: "Exceeded human" },
	{ metric: "Tagging throughput", before: "Headcount-capped", after: "6× baseline", change: "Uncapped" },
	{ metric: "Items auto-tagged on ingest", before: "0%", after: "92%", change: "Automated" },
	{ metric: "Backlog cleared", before: "Growing", after: "Eliminated", change: "Real-time" },
	{ metric: "Inter-tagger consistency", before: "Variable", after: "Deterministic", change: "Standardised" },
	{ metric: "Search discovery lift", before: "—", after: "Measurable uplift", change: "ROI positive" }
];

const SUCCESS_FACTORS = [
	{
		title: "Multi-label, not multi-class",
		desc: "Treating each category as an independent binary decision rather than a competition between classes matched how the world actually works — items genuinely belong to multiple categories simultaneously."
	},
	{
		title: "Taxonomy first",
		desc: "Cleaning ambiguous and overlapping categories before training meant the model learned from a consistent ground truth. Poor taxonomy is the most common reason image recognition models plateau well below human performance."
	},
	{
		title: "Per-label calibration",
		desc: "Different categories carry different costs of error. Separate confidence thresholds per label let the team set precision and recall trade-offs where they matter, rather than accepting one operating point for the whole model."
	},
	{
		title: "Real-time serving changes the product",
		desc: "Tagging at ingest — not in a batch overnight — meant every new item was immediately searchable. That latency improvement was invisible in accuracy metrics but highly visible to sellers and buyers."
	}
];

const FAQS = [
	{
		q: "What is image recognition?",
		a: "Image recognition identifies what an image contains — assigning one or more labels from a predefined set to the whole image. Multi-label recognition returns every applicable category at once. It uses convolutional neural networks trained on labelled examples to learn visual features that correspond to each class."
	},
	{
		q: "What is the difference between image recognition and object detection?",
		a: "Image recognition classifies what an image contains at a whole-image level. Object detection additionally localises where each object is, returning bounding boxes per object. Recognition is faster and simpler; detection is needed when location and count matter."
	}
];

export default function ImageRecognitionCaseStudy() {
	return (
		<>
			<SEO
				title="Image Recognition Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a multi-label image recognition system to auto-classify two million products across 800 categories at 97.4% accuracy."
				canonical="/services/ai-data/image-recognition"
				keywords="Image Recognition, Image Classification, Multi-Label Classification, Transfer Learning, EfficientNet, ResNet, Automated Tagging, Visual Search, Confidence Calibration, Deep Learning, Computer Vision, Data Science"
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
					categoryTag="Case Study · Deep Learning"
					title="How Image Recognition Auto-Tagged Two Million Products Across 800 Categories"
					description="A fast-scaling marketplace had a two-million-item catalogue that was only as searchable as its tags — and those tags were applied manually by a team that couldn't keep pace with growth. OpenGridLabs built a multi-label image recognition system that classifies any product image across more than eight hundred categories at 97.4% label accuracy, turning a perpetual backlog into a fully automated, real-time capability."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "E-commerce / Marketplace (anonymised)" },
						{ label: "Scale", value: "2M+ items, 800+ categories" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "Multi-label CNN · Transfer Learning · Calibration" }
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
						"Our client runs a large online marketplace where discoverability is everything. Every item needs accurate, consistent category and attribute tags so buyers can filter, search, and find what they want. With more than two million items and thousands of new listings added daily, maintaining those tags manually had become a full-time function — and still the backlog grew. Inconsistent tagging between human reviewers made search quality uneven, and newly listed items sat untagged and undiscoverable until someone got to them.",
						"The problem wasn't a lack of information — each item came with a product image that contained everything needed to classify it. The problem was that reading those images at scale required image recognition: teaching a model to look at a photograph and return the right set of category labels, as reliably and consistently as the best human tagger, but at machine speed.",
						"Image recognition assigns one or more labels from a predefined set to an entire image — answering \"what is in this image?\" rather than \"where is each object?\". Multi-label recognition returns every applicable category at once, which matters when a real product image legitimately belongs to several classes simultaneously. It is typically solved with deep convolutional neural networks fine-tuned on domain-specific labelled data."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Image Recognition?"
					definitionText={"Image recognition assigns one or more labels from a predefined set to an entire image — answering \"what is in this image?\" rather than \"where is each object?\". Multi-label recognition returns every applicable category at once, which matters when a real product image legitimately belongs to several classes simultaneously. It is typically solved with deep convolutional neural networks fine-tuned on domain-specific labelled data."}
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
					title={"Five Marketplace Gaps Resolved"}
					description={"How OpenGridLabs engineered a production-grade multi-label recognition pipeline."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs built a recognition pipeline that takes each product image from ingest through feature extraction, multi-label classification, confidence filtering, and taxonomy enforcement — delivering a verified tag set in real time as items are listed."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Multi-label changes the loss function, not just the output"}
					alertText={"Binary cross-entropy per label rather than softmax over classes meant the model learned each category independently — critical when an item genuinely belongs to several at once. Per-label thresholds calibrated on a validation set let the team tune precision and recall separately for high-stakes categories, rather than accepting a single operating point across all eight hundred labels."}
					rightColumnTitle={"Image Recognition Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over ten weeks, validating accuracy on the largest categories first before extending to rare ones. OpenGridLabs embedded a team of computer vision engineers alongside the client's catalogue and search teams."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across 60 days post-deployment against the prior manual-tagging baseline."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our best human taggers were consistent on familiar categories and inconsistent on edge cases. The model is equally consistent everywhere — and it tags a new listing the moment it arrives, not whenever we get to it."}
					author={"Head of Catalogue"}
					subtitle={"Confidential Marketplace"}
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
					title={"Images full of information you're not using?"}
					description={"OpenGridLabs builds image recognition systems — multi-label classification, transfer learning, per-label calibration, and real-time serving — so your visual catalogue works as hard as your content."}
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
