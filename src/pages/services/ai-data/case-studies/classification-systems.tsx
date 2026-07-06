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
	{ value: "94%", label: "Classification accuracy across categories", accent: "from-emerald-400 to-teal-500" },
	{ value: "88%", label: "Of items auto-routed without a human", accent: "from-cyan-400 to-blue-500" },
	{ value: "80%", label: "Less manual sorting & triage time", accent: "from-purple-500 to-indigo-500" },
	{ value: "9 wk", label: "From manual triage to live system", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "Over 200,000 items a month, each manually read, categorised, and routed by staff" },
	{ text: "More than forty categories, some overlapping with subtle, judgement-based boundaries" },
	{ text: "Inconsistent labelling between staff, so the same item could be routed two ways" },
	{ text: "Keyword and rule-based attempts got too much wrong to be trusted with routing" },
	{ text: "Misroutes were costly—wrong-team handoffs delayed work and frustrated everyone" }
];

const SOLUTIONS = [
	{ text: "A machine-learning text classifier trained on historical items across all categories" },
	{ text: "Support for overlapping topics via multi-label tagging where an item fits several" },
	{ text: "Confidence thresholds that auto-route certain cases and escalate ambiguous ones to staff" },
	{ text: "A human-review queue whose corrections feed back to keep improving the model" },
	{ text: "Real-time routing into existing workflows, with per-category accuracy monitoring" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Intake", items: ["Incoming items", "Text & metadata extraction", "Normalisation", "Language detection"], color: "hsl(180,100%,50%)" },
	{ title: "Classify", items: ["Text classifier", "Multi-class & multi-label output", "Confidence scoring", "Top-category candidates"], color: "hsl(210,100%,50%)" },
	{ title: "Decision", items: ["Confidence thresholds", "Auto-route vs. human review", "Priority & tagging rules", "Workflow delivery"], color: "hsl(280,100%,65%)" },
	{ title: "Feedback", items: ["Human-review corrections", "Per-category accuracy", "Drift monitoring", "Periodic retraining"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Taxonomy & Training Data (Weeks 1–3)",
		desc: "OpenGridLabs worked with the operations team to clarify the category taxonomy—merging duplicates, defining ambiguous boundaries, and resolving where items could carry multiple labels. Historical items were assembled into a clean, consistently labelled training set, with disagreements between past human labels reconciled so the model learned from a reliable ground truth.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Classifier & Thresholds (Weeks 4–7)",
		desc: "The team trained and evaluated a text classifier across all categories, measuring not just overall accuracy but per-category precision and recall to catch weak spots. Confidence thresholds were tuned per category to hit the target accuracy on auto-routed items, and the system ran in shadow mode alongside human triage so its decisions could be validated before it touched live routing.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Routing, Review & Enablement (Weeks 8–9)",
		desc: "Once shadow-mode accuracy was proven, the system was switched on to auto-route high-confidence items into existing workflows, with low-confidence cases flowing to a human-review queue. Corrections from that queue were wired back as new training data, per-category accuracy was monitored in production, and the client's team was trained to manage the taxonomy and retraining themselves.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Classification accuracy", before: "Inconsistent", after: "94%", change: "Reliable" },
	{ metric: "Items auto-routed without a human", before: "0%", after: "88%", change: "Automated" },
	{ metric: "Manual sorting & triage time", before: "Baseline", after: "20% of baseline", change: "−80%" },
	{ metric: "Time to route an item", before: "Minutes–hours", after: "Real time", change: "Instant" },
	{ metric: "Misroutes to the wrong team", before: "Frequent", after: "Sharply reduced", change: "Fewer handoffs" },
	{ metric: "Routing consistency", before: "Varied by person", after: "Uniform", change: "Standardised" },
	{ metric: "Model improvement over time", before: "Not applicable", after: "Feedback-driven", change: "Self-improving" }
];

const SUCCESS_FACTORS = [
	{
		title: "Fix the taxonomy first",
		desc: "Much of the early effort went into cleaning up overlapping, ambiguous categories and reconciling inconsistent historical labels. A model can only be as clear as the categories it learns—muddled labels guarantee a muddled classifier."
	},
	{
		title: "Confidence thresholds over blind automation",
		desc: "Auto-routing only high-confidence predictions and escalating the rest captured most of the efficiency while keeping auto-routed accuracy very high. It is the difference between a useful system and a risky one."
	},
	{
		title: "Measure per category, not just overall",
		desc: "A strong overall accuracy can hide a category the model handles badly. Tracking precision and recall per category surfaced and fixed weak spots that an aggregate number would have masked."
	},
	{
		title: "Human review as a feedback engine",
		desc: "The escalation queue did double duty: it handled hard cases safely and generated fresh, high-quality labels that fed retraining—so the system kept getting better at exactly the cases it had found hardest."
	}
];

const FAQS = [
	{
		q: "What is a classification system in machine learning?",
		a: "A classification system uses machine learning to automatically assign incoming items—text, documents, images, or events—to one or more predefined categories. Examples include routing requests to the right team, tagging content by topic, or flagging an item as spam or not. The model outputs a category and a confidence score for each item, letting organisations automate high-volume sorting that would otherwise be done by hand."
	},
	{
		q: "What is the difference between multi-class and multi-label classification?",
		a: "Multi-class classification assigns each item to exactly one category out of many—for example routing a request to a single team. Multi-label classification can assign several categories to the same item at once—for example tagging an article with multiple topics. Many real systems combine both and use confidence thresholds to auto-handle high-certainty cases while sending ambiguous ones to a person."
	}
];

export default function ClassificationSystemsCaseStudy() {
	return (
		<>
			<SEO
				title="Classification Systems Case Study | OpenGridLabs"
				description="How OpenGridLabs built an automated multi-class classification system routing 88% of incoming items across 40+ categories with 94% accuracy."
				canonical="/services/ai-data/classification-systems"
				keywords="Classification Systems, Text Classification, Multi-Class Classification, Multi-Label Classification, Document Classification, Automated Tagging, Ticket Routing, Intent Classification"
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
					categoryTag="Case Study · Data Science & AI"
					title="How a Classification System Auto-Sorted 88% of Incoming Work Across 40+ Categories"
					description="A fast-scaling company was drowning in a manual sorting bottleneck—every incoming item hand-tagged and routed by staff. OpenGridLabs built a multi-class classification system that categorises and routes items in real time across more than forty categories, auto-handling the confident majority and escalating only the genuinely ambiguous to a person."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Scale", value: "200K+ items / month" },
						{ label: "Timeline", value: "9 weeks to production" },
						{ label: "Stack", value: "Text Classification · Confidence Thresholds · Routing" }
					]}
				/>

				<CaseStudyCarousel
					slug="classification-systems"
					title="Classification Systems"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/classification-systems/1.jpg",
						"/images/case-studies/classification-systems/2.jpg"
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
						"Our client is a venture-backed technology company that receives a high, growing volume of incoming items—requests, messages, and documents—each of which has to be categorised and routed to the right team before any work can begin. For years this triage was done by hand: staff read each item, decided which of dozens of categories it belonged to, and forwarded it on. It worked at low volume. At more than two hundred thousand items a month, it had become a chronic bottleneck.",
						"The manual approach was slow, inconsistent between staff, and expensive—and misroutes were worse than delays, sending items to the wrong team and starting a frustrating game of pass-the-parcel. The categories were numerous, some overlapped, and the boundaries were subtle, so off-the-shelf keyword rules had already been tried and abandoned for getting too much wrong. What the company needed was a classification system: a model that reads each incoming item and assigns the right category automatically, at scale, accurately enough to be trusted with the routing itself.",
						"A classification system uses machine learning to automatically assign incoming items—text, documents, images, or events—to one or more predefined categories. It outputs a category and a confidence score for each item, so high-volume sorting that once required a person reading every item can be automated. Common uses include routing requests to the right team, tagging content by topic, and triaging items by type or priority."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is a Classification System?"
					definitionText="A classification system uses machine learning to automatically assign incoming items—text, documents, images, or events—to one or more predefined categories. It outputs a category and a confidence score for each item, so high-volume sorting that once required a person reading every item can be automated. Common uses include routing requests to the right team, tagging content by topic, and triaging items by type or priority."
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
					title={"Five Practical Gaps Resolved"}
					description={"How OpenGridLabs turned promising prototypes into an enterprise-grade prediction workflow."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs built a classification pipeline that ingests each incoming item, predicts its category and confidence, and decides whether to route it automatically or send it for human review. The confidence threshold is the heart of the design: it lets the system automate the large, easy majority safely while reserving human attention for exactly the cases that need it."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"The confidence threshold is the real product"}
					alertText={"A classifier that is right 94% of the time is not the same as one safe to trust blindly. The design that made this work was routing only high-confidence predictions automatically and sending low-confidence ones to a person. That single decision let the system capture most of the efficiency gain while keeping accuracy on auto-routed items extremely high."}
					rightColumnTitle={"Classification Pipeline Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to earn trust before handing the system real routing authority."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against the prior manual process, using held-out labelled items as the accuracy benchmark."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our team used to spend its mornings just sorting the inbox before any real work started. Now the system routes nearly everything instantly and only asks us about the genuinely tricky cases—and every time we answer one, it gets a little smarter."}
					author={"Director of Operations"}
					subtitle={"Confidential Technology Company"}
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
					title={"Ready to deploy a Classification System?"}
					description={"OpenGridLabs builds classification systems—accurate models, confidence-based routing, and human-in-the-loop feedback—so high-volume categorisation runs automatically and keeps improving."}
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
