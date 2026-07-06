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
	{ value: "4,200", label: "Expert hours saved per year", accent: "from-cyan-400 to-blue-500" },
	{ value: "97%", label: "Accuracy on the specialised task", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "Days→min", label: "Turnaround per case, start to finish", accent: "from-pink-500 to-rose-400" },
	{ value: "16 wk", label: "From discovery to production system", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "A high-value process bottlenecked on a handful of senior experts, impossible to scale" },
	{ text: "Off-the-shelf AI tools got the hard, high-stakes cases wrong—confidently" },
	{ text: "Inputs were unusual: domain-specific documents and images no generic model understood" },
	{ text: "Decisions depended on subtle expert judgement plus rigid domain rules and precedent" },
	{ text: "The knowledge existed only in experts' heads, with no labelled data to learn from" }
];

const SOLUTIONS = [
	{ text: "An end-to-end system orchestrating all three into a single decision, with human review" },
	{ text: "A fine-tuned model specialised on the client's documents and decision patterns" },
	{ text: "A custom computer-vision component to interpret the domain-specific images" },
	{ text: "A domain-rules engine encoding the non-negotiable logic and precedent experts apply" },
	{ text: "A discovery phase that captured expert knowledge and turned it into labelled training data" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Inputs", items: ["Domain documents", "Specialised images", "Historical case data", "Reference rules & precedent"], color: "hsl(180,100%,50%)" },
	{ title: "Perception", items: ["Custom computer vision", "Document understanding", "Feature extraction", "Data structuring"], color: "hsl(210,100%,50%)" },
	{ title: "Reasoning", items: ["Fine-tuned domain model", "Rules & precedent engine", "Confidence scoring", "Conflict resolution"], color: "hsl(280,100%,65%)" },
	{ title: "Decision", items: ["Explainable recommendation", "Human-in-the-loop review", "System integration", "Monitoring & feedback loop"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
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

const TABLE_RESULTS = [
	{ metric: "Decision accuracy on the task", before: "Expert baseline", after: "97% (expert-matched)", change: "Matched" },
	{ metric: "Turnaround per case", before: "Days", after: "Minutes", change: "Drastically faster" },
	{ metric: "Expert hours per year on the task", before: "Baseline", after: "−4,200 hours", change: "Capacity freed" },
	{ metric: "Process throughput", before: "Expert-capped", after: "Scales on demand", change: "Unblocked" },
	{ metric: "Off-the-shelf tool fit", before: "Failed hard cases", after: "Purpose-built", change: "Solved" },
	{ metric: "Knowledge retention", before: "In experts' heads", after: "Captured in system", change: "De-risked" },
	{ metric: "System & data ownership", before: "—", after: "Fully client-owned", change: "Owned outright" }
];

const SUCCESS_FACTORS = [
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

const FAQS = [
	{
		q: "When do you need a custom AI solution instead of an off-the-shelf tool?",
		a: "A custom solution makes sense when your problem is specific to your domain, data, or workflow and no off-the-shelf product fits well. Signs include generic tools getting the cases that matter wrong, processes that depend on proprietary data or expert judgement, a need to combine several AI techniques, or a requirement to own the system and its data. Off-the-shelf tools win on common tasks; custom solutions win where the problem is your competitive edge."
	},
	{
		q: "How is a custom AI solution built end to end?",
		a: "It moves through discovery (understanding the problem, data, and success criteria), design (choosing and combining the right techniques), iterative development with continuous evaluation against real data, and integration into existing systems and workflows. It is then deployed with monitoring and a path for ongoing improvement, with the client retaining ownership of the system and its data."
	}
];

export default function CustomAISolutionsCaseStudy() {
	return (
		<>
			<SEO
				title="Custom AI Solutions Case Study | OpenGridLabs"
				description="How OpenGridLabs designed and built a bespoke custom AI solution combining computer vision, a fine-tuned model, and domain rules to save 4,200 expert hours."
				canonical="/services/ai-data/custom-ai-solutions"
				keywords="Custom AI, Bespoke Machine Learning, Computer Vision, Model Fine-Tuning, Domain Logic Engine, Process Automation"
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
					title="How a Custom AI Solution Cracked a Problem No Off-the-Shelf Tool Could"
					description="A company in a specialised domain had a costly, expert-dependent process that every generic AI tool got wrong. OpenGridLabs ran discovery, then designed and built a bespoke end-to-end solution—combining computer vision, a fine-tuned model, and hard-coded domain rules—that automated the work and saved an estimated 4,200 expert hours a year."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Specialised Industry (anonymised)" },
						{ label: "Type", value: "Bespoke end-to-end build" },
						{ label: "Timeline", value: "16 weeks to production" },
						{ label: "Stack", value: "Computer Vision · Fine-tuning · Domain Logic" }
					]}
				/>

				<CaseStudyCarousel
					slug="custom-ai-solutions"
					title="Custom AI Solutions"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/custom-ai-solutions/1.jpg",
						"/images/case-studies/custom-ai-solutions/2.jpg"
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
						"Our client operates in a specialised industry where a core, recurring process depended entirely on a small team of senior experts. Each case meant reviewing technical documents and images, applying years of hard-won domain judgement, cross-checking against rules and historical precedent, and producing a decision. It was accurate, but slow, expensive, and impossible to scale—and the expertise lived in just a few people's heads.",
						"They had tried the obvious route first: off-the-shelf AI tools and generic platforms. None fit. The documents were unusual, the images domain-specific, the judgement subtle, and the rules nowhere in any model's training data. Generic tools got the easy cases right and the cases that mattered wrong—worse than useless, because a confident wrong answer in their field carries real cost. The problem wasn't that AI couldn't help; it was that no product built for the general case could solve their specific one. They needed a custom AI solution designed around their problem, their data, and their experts' knowledge."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="When Do You Need a Custom AI Solution?"
					definitionText="A custom solution is the right call when your problem is specific to your domain, data, or workflow and no off-the-shelf product fits. Tell-tale signs: generic tools get the cases that matter wrong, the process depends on proprietary data or expert judgement, several AI techniques must work together, or you need to own the system and its data. Off-the-shelf wins on common tasks; custom wins where the problem is your competitive edge."
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
					title={"Five Blind Spots Resolved"}
					description={"How OpenGridLabs deployed a custom system combining perception and logic."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Custom AI Solution Architecture"}
					description={"No single technique could solve this problem—the breakthrough was combining several into one purpose-built system. OpenGridLabs designed an architecture where computer vision, a fine-tuned language model, and a deterministic rules engine each handle the part they do best, then converge into a single, explainable decision that an expert can review and approve."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"The right tools, combined—not one model to rule them all"}
					alertText={"The value of a custom solution was choosing the right technique for each sub-problem and making them work together: vision for the images, a fine-tuned model for nuanced judgement, and a deterministic rules engine for the non-negotiable logic that must never be 'mostly right'. A single general model could not have delivered this. Engineering the combination, around the client's real problem, is what off-the-shelf tools fundamentally cannot do."}
					rightColumnTitle={"Custom AI Solution Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"The engagement ran across three phases over sixteen weeks, structured to reduce the biggest risk first—whether the problem was solvable at all—before committing to a full build. OpenGridLabs embedded a multidisciplinary team of ML, vision, and backend engineers, a domain-knowledge lead, and a solutions architect alongside the client's experts."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against the prior expert-only process, using expert-labelled cases as the benchmark. The results showed that a bespoke system, designed around the problem, could match expert accuracy while removing the bottleneck that capped the business."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Every tool we tried was built for someone else's problem and broke on ours. OpenGridLabs built for our problem. The system does in minutes what took our experts days, gets the hard cases right, and the knowledge that used to walk out the door each evening now lives in something we own."}
					author={"Chief Operating Officer"}
					subtitle={"Confidential specialised-industry company"}
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
					title={"Have a problem off-the-shelf AI can't solve?"}
					description={"OpenGridLabs designs and builds custom, end-to-end AI solutions—around your problem, your data, and your domain—and hands you a system you own outright."}
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
