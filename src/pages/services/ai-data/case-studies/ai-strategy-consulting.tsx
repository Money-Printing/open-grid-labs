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
	{ value: "5×", label: "Projected ROI on prioritized initiatives", accent: "from-cyan-400 to-blue-500" },
	{ value: "34", label: "Use cases scored and sequenced", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "3", label: "Quick-win pilots greenlit within 90 days", accent: "from-pink-500 to-rose-400" },
	{ value: "8 wk", label: "From kickoff to board-approved strategy", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Dozens of unscored AI ideas competing for attention with no objective way to compare them" },
	{ text: "Disconnected pilots running in silos, with no shared metrics or business cases" },
	{ text: "No view of organisational AI readiness—data, skills, infrastructure, or culture" },
	{ text: "No governance, risk, or responsible-AI policy, raising client-confidentiality and reputational concerns" },
	{ text: "Leadership unable to commit budget without a defensible, sequenced plan and clear ROI" }
];

const SOLUTIONS = [
	{ text: "A structured AI maturity assessment scoring readiness across data, talent, technology, and governance" },
	{ text: "A value-versus-feasibility prioritization of 34 use cases into quick wins and strategic bets" },
	{ text: "A responsible-AI governance framework covering risk tiers, data handling, and human oversight" },
	{ text: "A phased three-year roadmap with funding gates, owners, and success metrics per initiative" },
	{ text: "A board-ready business case quantifying cost, benefit, and projected ROI for the portfolio" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Assess", items: ["AI maturity scoring", "Data & infrastructure audit", "Skills & culture review", "Competitive benchmarking"], color: "hsl(180,100%,50%)" },
	{ title: "Prioritize", items: ["Use-case discovery", "Value-vs-feasibility scoring", "Quick wins vs. strategic bets", "Portfolio shortlist"], color: "hsl(210,100%,50%)" },
	{ title: "Govern", items: ["Responsible-AI policy", "Risk tiering", "Data & client-confidentiality rules", "Human-oversight gates"], color: "hsl(280,100%,65%)" },
	{ title: "Roadmap", items: ["Phased 3-year plan", "Funding gates", "Initiative owners", "Success metrics & ROI model"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Discovery & Maturity Assessment (Weeks 1–3)",
		desc: "OpenGridLabs conducted structured interviews across leadership and delivery teams, audited data and infrastructure readiness, and benchmarked the firm against competitors. The output was an objective AI maturity score with clear strengths and gaps—giving leadership a shared, honest starting point rather than anecdote-driven debate.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Use-Case Prioritization & Governance (Weeks 4–6)",
		desc: "Through facilitated workshops, the team surfaced and scored 34 candidate use cases on business value and feasibility, plotting them on a prioritization matrix. In parallel, OpenGridLabs drafted a responsible-AI governance framework tailored to the firm's client-confidentiality obligations, so that prioritized initiatives arrived with guardrails already defined.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Roadmap & Business Case (Weeks 7–8)",
		desc: "The prioritized portfolio was sequenced into a phased three-year roadmap with funding gates, named owners, and success metrics. A board-ready business case modelled cost, benefit, and ROI for each phase. Three low-risk, high-value quick wins were greenlit immediately to build momentum and validate the approach within 90 days.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "AI use cases scored & sequenced", before: "0 (ad hoc)", after: "34", change: "Prioritized" },
	{ metric: "Approved AI investment budget", before: "Stalled", after: "Board-approved", change: "Unlocked" },
	{ metric: "Projected portfolio ROI (3-year)", before: "—", after: "5×", change: "5× ROI" },
	{ metric: "Quick-win pilots launched", before: "0", after: "3 within 90 days", change: "In motion" },
	{ metric: "Responsible-AI governance policy", before: "None", after: "Adopted firm-wide", change: "New capability" },
	{ metric: "AI maturity score", before: "2.1 / 5", after: "Roadmap to 4.0 / 5", change: "Clear path" },
	{ metric: "Disconnected pilots", before: "7 siloed", after: "Consolidated", change: "Aligned" }
];

const SUCCESS_FACTORS = [
	{
		title: "Honest assessment before ambition",
		desc: "Starting with an objective maturity score replaced wishful thinking with a shared, evidence-based view of where the firm actually stood—making every subsequent prioritization decision defensible."
	},
	{
		title: "Value and feasibility, scored together",
		desc: "Plotting use cases on both axes prevented the two classic traps: chasing exciting-but-impractical ideas, and shipping easy-but-pointless ones. Quick wins were chosen to fund and de-risk the bigger bets."
	},
	{
		title: "Governance as an enabler, not a brake",
		desc: "For a firm built on client confidentiality, defining responsible-AI guardrails up front meant initiatives could move fast with confidence—rather than stalling later under risk and compliance objections."
	},
	{
		title: "A roadmap owned by the client",
		desc: "Every framework stage produced an artifact the firm controls—maturity score, prioritized portfolio, governance policy, and funded roadmap—so execution could continue independently long after the engagement closed."
	}
];

const FAQS = [
	{
		q: "What is an AI strategy and why does a company need one?",
		a: "An AI strategy is a structured plan that aligns artificial intelligence investment with business goals. It defines which problems AI should solve, prioritizes use cases by value and feasibility, establishes the data and governance foundations required, and lays out a phased roadmap. Without one, organisations tend to fund disconnected pilots that rarely reach production or deliver measurable return."
	},
	{
		q: "How do you prioritize AI use cases?",
		a: "Use cases are usually prioritized on two axes: business value—revenue, cost, risk, or experience impact—and feasibility, covering data readiness, technical complexity, and the organisational change required. Plotting candidates on a value-versus-feasibility matrix surfaces quick wins that build momentum and larger strategic bets to sequence over time."
	}
];

export default function AIStrategyConsultingCaseStudy() {
	return (
		<>
			<SEO
				title="AI Strategy & Advisory Case Study | OpenGridLabs"
				description="How a mid-sized professional services firm turned AI ambition into a 3-year board-approved strategy, achieving a 5x projected ROI and greenlighting quick-win pilots."
				canonical="/services/ai-data/ai-strategy-consulting"
				keywords="AI Strategy, AI Roadmap, AI Maturity Assessment, Use Case Prioritization, AI Governance, responsible AI"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(210,100%,50%) 0%, hsl(260,100%,60%) 50%, transparent 100%)`
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
					categoryTag="Case Study · AI Strategy & Advisory"
					title="How a Professional Services Firm Turned AI Ambition into a 3-Year Roadmap"
					description="A mid-sized consulting and professional services firm engaged OpenGridLabs to cut through AI hype and build a grounded strategy—an AI maturity assessment, a prioritized use-case portfolio, a governance framework, and a phased roadmap that turned scattered experiments into a focused plan with a 5× projected ROI."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Professional Services (anonymised)" },
						{ label: "Size", value: "1,200+ employees" },
						{ label: "Timeline", value: "8-week engagement" },
						{ label: "Focus", value: "Assessment · Prioritization · Governance · Roadmap" }
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
						"Our client is a mid-sized professional services firm delivering advisory, audit, and managed services to enterprise customers. With over 1,200 employees and intense pressure from larger competitors already marketing AI-enabled offerings, leadership knew that standing still was not an option. The board had approved a discretionary budget for AI—but had no agreed view on where to spend it.",
						"The symptoms were familiar. Individual teams had spun up disconnected experiments: a chatbot here, a document-summarization tool there, a partner quietly trialling a coding assistant. None were measured, none were governed, and none connected to a coherent business case. Enthusiasm was high and direction was absent. What the firm needed was not another tool—it was an AI strategy: a clear, defensible plan tying AI investment to business outcomes, sequenced so that early wins would fund and de-risk the larger bets.",
						"An AI strategy aligns artificial intelligence investment with business goals. It defines which problems AI should solve, prioritizes use cases by value and feasibility, establishes the data and governance foundations required, and lays out a phased roadmap. Without one, organisations fund disconnected pilots that rarely reach production or deliver measurable return."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is an AI Strategy—and Why Does It Matter?"
					definitionText="An AI strategy aligns artificial intelligence investment with business goals. It defines which problems AI should solve, prioritizes use cases by value and feasibility, establishes the data and governance foundations required, and lays out a phased roadmap. Without one, organisations fund disconnected pilots that rarely reach production or deliver measurable return."
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
					title={"Five Strategic Challenges Overcome"}
					description={"How OpenGridLabs transformed scattered experiments and pilot hesitation into a board-approved implementation plan."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Framework"}
					title={"AI Strategy Framework"}
					description={"OpenGridLabs applied a four-stage framework that takes an organisation from an honest assessment of where it stands to a funded, sequenced plan of action. Each stage produces a concrete artifact the client owns and can act on independently—no dependency on the consultant to move forward."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Governance built in, not bolted on"}
					alertText={"For a firm handling confidential client data, responsible AI was non-negotiable. The framework defined risk tiers, data-handling and confidentiality rules, and human-oversight requirements before any pilot launched—ensuring every initiative could pass client, regulatory, and internal-audit scrutiny from day one rather than retrofitting controls later."}
					rightColumnTitle={"AI Strategy Engagement Artifacts & Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"The engagement ran across three phases over eight weeks, designed to build executive alignment as the work progressed rather than presenting conclusions at the end. OpenGridLabs worked alongside a steering group of partners, the CIO, and operational leads."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(180,100%,50%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-cyan-400 to-pink-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Strategy engagements are measured by the clarity and commitment they produce, not just systems deployed. Within eight weeks, the firm moved from indecision to a funded, governed, and sequenced plan."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We came in with a budget and a hundred opinions. We left with a plan the whole board could stand behind. The difference wasn't more AI—it was knowing exactly where to start, what to ignore, and how to govern it responsibly."}
					author={"Managing Partner"}
					subtitle={"Confidential Professional Services Firm"}
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
					title={"Ready to turn AI ambition into an executable strategy?"}
					description={"OpenGridLabs helps organisations assess readiness, prioritize use cases, govern responsibly, and build phased AI roadmaps with a clear business case."}
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
