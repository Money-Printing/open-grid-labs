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

const STATS = [
	{ value: "60%", label: "Less time spent on AI compliance review", accent: "from-cyan-400 to-blue-500" },
	{ value: "100%", label: "AI systems risk-classified and registered", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "4", label: "Risk tiers aligned to emerging regulation", accent: "from-pink-500 to-rose-400" },
	{ value: "12 wk", label: "From principles to operating governance model", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Published ethics principles with no mechanism to enforce them in day-to-day work" },
	{ text: "No shared definition of which AI systems were high-risk and which were not" },
	{ text: "Ship-or-hold decisions made inconsistently, with no standard pre-launch review" },
	{ text: "No register of AI systems in production—nobody could say what was running where" },
	{ text: "Mounting regulatory pressure (EU AI Act) and enterprise demands for proof of responsible AI" }
];

const SOLUTIONS = [
	{ text: "A four-tier AI risk classification framework aligned to emerging regulation" },
	{ text: "An AI ethics review board with a clear charter, membership, and escalation paths" },
	{ text: "A practical responsible-AI policy translating principles into required controls per risk tier" },
	{ text: "A central AI system register and a staged review workflow gating high-risk launches" },
	{ text: "A regulatory mapping to the EU AI Act with a compliance roadmap and evidence templates" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Principles", items: ["Responsible-AI policy", "Fairness, transparency, accountability, privacy, safety", "Roles & responsibilities"], color: "hsl(180,100%,50%)" },
	{ title: "Risk Tiering", items: ["Intake & AI system register", "4-tier risk classification", "Proportionate controls per tier"], color: "hsl(210,100%,50%)" },
	{ title: "Review", items: ["Ethics review board", "Pre-launch assessment", "Human-oversight requirements", "Escalation & sign-off"], color: "hsl(280,100%,65%)" },
	{ title: "Accountability", items: ["Ongoing monitoring", "Incident response", "Audit trail & evidence", "Regulatory reporting (EU AI Act)"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Principles, Policy & Risk Framework (Weeks 1–4)",
		desc: "OpenGridLabs translated the firm's existing principles into a practical responsible-AI policy and built a four-tier risk classification framework aligned to the EU AI Act. Each tier was tied to a proportionate set of required controls, so the question \"how much governance does this system need?\" finally had a clear, defensible answer.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Ethics Board & Review Workflow (Weeks 5–9)",
		desc: "The team established an AI ethics review board with a charter, cross-functional membership, and clear escalation paths, then designed a staged review workflow that gates high-risk launches while letting low-risk systems proceed. Every AI system in production was catalogued into a central register and classified—giving leadership, for the first time, a single view of what AI was running and at what risk.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Regulatory Mapping & Embedding (Weeks 10–12)",
		desc: "OpenGridLabs mapped the firm's obligations under the EU AI Act, produced a compliance roadmap, and created reusable evidence templates so audits would be a matter of retrieval rather than scramble. The board and reviewers were trained to run the model independently, and governance steps were embedded into the existing product-development lifecycle so they became routine rather than exceptional.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "AI systems risk-classified & registered", before: "0%", after: "100%", change: "Full visibility" },
	{ metric: "Time spent on AI compliance review", before: "Baseline", after: "40% of baseline", change: "−60%" },
	{ metric: "Standard pre-launch ethics review", before: "None", after: "Mandatory by tier", change: "New capability" },
	{ metric: "Responsible-AI policy & controls", before: "Principles only", after: "Enforceable controls", change: "Operational" },
	{ metric: "EU AI Act readiness", before: "Unassessed", after: "Mapped & roadmapped", change: "Audit-ready path" },
	{ metric: "Enterprise responsible-AI questionnaires", before: "Slow, bespoke", after: "Evidence on file", change: "Faster sales" },
	{ metric: "Innovation speed on low-risk systems", before: "Inconsistent", after: "Light-touch, fast", change: "Unblocked" }
];

const SUCCESS_FACTORS = [
	{
		title: "Proportionate by design",
		desc: "Tiering systems by risk meant deep review was reserved for genuinely high-impact AI, while the majority shipped quickly under light controls. This kept governance trusted rather than treated as an obstacle to route around."
	},
	{
		title: "Principles translated into controls",
		desc: "Rather than leaving values abstract, each principle was mapped to specific, required controls per risk tier—so 'fairness' or 'accountability' became concrete checklist items a reviewer could actually verify."
	},
	{
		title: "Embedded, not bolted on",
		desc: "Governance steps were built into the existing product-development lifecycle, so responsible-AI review happened as a natural part of shipping rather than a separate gate teams resented and bypassed."
	},
	{
		title: "Regulation as a tailwind",
		desc: "Mapping to the EU AI Act early turned looming compliance pressure into a structured roadmap and reusable evidence—so the firm could answer enterprise and regulator questions with confidence instead of anxiety."
	}
];

const FAQS = [
	{
		q: "What is the difference between AI ethics and AI governance?",
		a: "AI ethics defines the principles an organisation commits to—fairness, transparency, accountability, privacy, and safety. AI governance is the operating model that puts those principles into practice: the policies, roles, risk classifications, review processes, and controls ensuring every AI system actually meets them. Ethics sets the 'what' and 'why'; governance delivers the 'how' and 'who'."
	},
	{
		q: "What is an AI risk classification framework?",
		a: "It sorts AI systems into tiers—such as minimal, limited, high, and unacceptable risk—based on their potential impact. Each tier triggers proportionate controls: low-risk systems move quickly with light oversight, while high-risk systems require deeper review, documentation, human oversight, and monitoring. This mirrors regulations like the EU AI Act and keeps governance proportionate rather than blanket."
	}
];

export default function AIEthicsGovernanceCaseStudy() {
	return (
		<>
			<SEO
				title="AI Ethics & Governance Case Study | OpenGridLabs"
				description="How a fast-scaling AI company built an operating model for responsible AI, cutting compliance review time by 60% while raising safety and fairness standards."
				canonical="/services/ai-data/ai-ethics-governance"
				keywords="AI Governance, AI Ethics, EU AI Act compliance, responsible AI, AI risk classification, AI operating model"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(210,100%,50%) 50%, transparent 100%)`
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
					categoryTag="Case Study · AI Ethics & Governance"
					title="How a Fast-Scaling AI Company Built an Operating Model for Responsible AI"
					description="A rapidly growing AI company engaged OpenGridLabs to turn good intentions into an enforceable system—risk classification, an ethics review board, clear policy, and regulatory alignment—so that responsible AI became a repeatable process rather than a value statement."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scope", value: "40+ AI systems governed" },
						{ label: "Timeline", value: "12-week engagement" },
						{ label: "Focus", value: "Policy · Risk Tiering · Ethics Board · Compliance" }
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
						"Our client is a venture-backed AI company whose products are embedded in decisions that affect real people across enterprise customers. Leadership genuinely cared about doing AI responsibly and had published a set of principles—fairness, transparency, accountability, privacy, and safety. But principles on a webpage are not the same as control in practice, and as the company scaled past forty AI systems in production, the gap between intention and operation widened.",
						"Decisions about whether a model was safe to ship were made inconsistently, often by whoever happened to be in the room. There was no shared definition of which systems were high-risk, no standard review before launch, and no register of what AI was even running. Meanwhile, regulation—most visibly the EU AI Act—was moving from debate to enforcement, and enterprise buyers were demanding evidence of responsible-AI practices. The company didn't need more principles. It needed an AI governance operating model: the policies, roles, risk tiers, and review processes that make ethical AI an enforceable, repeatable system.",
						"AI ethics defines the principles an organisation commits to: fairness, transparency, accountability, privacy, and safety. AI governance is the operating model that puts those principles into practice—the policies, roles, risk classifications, review processes, and controls that ensure every AI system actually meets them. Ethics sets the \"what\" and \"why\"; governance delivers the \"how\" and \"who\"."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="AI Ethics vs. AI Governance—What's the Difference?"
					definitionText={"AI ethics defines the principles an organisation commits to: fairness, transparency, accountability, privacy, and safety. AI governance is the operating model that puts those principles into practice—the policies, roles, risk classifications, review processes, and controls that ensure every AI system actually meets them. Ethics sets the \"what\" and \"why\"; governance delivers the \"how\" and \"who\"."}
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
					title={"Five Governance Gaps Overcome"}
					description={"How OpenGridLabs turned sincere ethical intent into a robust operational and regulatory assurance system."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Activity]}
					tag={"Operating Blueprint"}
					title={"Governance Operating Model"}
					description={"OpenGridLabs designed a four-layer operating model that takes an AI system from intake to ongoing oversight. The model is deliberately proportionate—low-risk systems move quickly with light controls, while high-risk systems trigger deeper review—so governance protects people without becoming a blanket brake on the business."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Proportionate, not bureaucratic"}
					alertText={"The biggest risk in AI governance is a process so heavy that teams route around it. By tiering systems by risk, the model reserves deep review for the small number of genuinely high-impact systems and lets the majority ship quickly under light-touch controls—keeping governance credible, adopted, and aligned with regulations like the EU AI Act rather than ignored."}
					rightColumnTitle={"AI Governance Operating Model Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"The engagement ran across three phases over twelve weeks, designed to stand up working governance on real systems rather than producing a binder nobody opens. OpenGridLabs worked alongside legal, data science, product, and leadership to build a model they would own and run."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Governance engagements are judged by whether responsible AI becomes routine and defensible. Within twelve weeks, the firm moved from inconsistent, ad hoc judgment to a proportionate, enforceable operating model."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We always said we cared about responsible AI. Now we can prove it. Every system is classified, high-risk launches get real review, and our low-risk work moves faster than before—governance stopped being a debate and became how we operate."}
					author={"Chief Technology Officer"}
					subtitle={"Confidential AI Company"}
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
					title={"Ready to make responsible AI an operating model, not a slogan?"}
					description={"OpenGridLabs builds AI governance operating models—policy, risk classification, ethics review, and regulatory alignment—so responsible AI becomes enforceable, proportionate, and audit-ready."}
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
