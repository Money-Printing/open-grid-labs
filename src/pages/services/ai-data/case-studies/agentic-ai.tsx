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
	{ value: "62%", label: "Operational cost reduction in targeted workflows", accent: "from-cyan-400 to-blue-500" },
	{ value: "4×", label: "Faster SLA response times across departments", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "91%", label: "Straight-through processing rate for routine tasks", accent: "from-pink-500 to-rose-400" },
	{ value: "14 wk", label: "From kickoff to full production deployment", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Manual KYC and AML screening across siloed data sources causing 72-hour average review cycles" },
	{ text: "Fraud triage queues backlogged by up to 3,400 cases at peak, with analysts handling repetitive evidence gathering" },
	{ text: "Loan origination pre-approval workflows requiring 7–9 manual handoffs across credit, compliance, and legal teams" },
	{ text: "Regulatory reporting inconsistency leading to error-prone submissions and audit risk" },
	{ text: "No unified audit trail for AI-assisted decisions, creating explainability and accountability gaps" }
];

const SOLUTIONS = [
	{ text: "LLM-powered document reasoning for KYC packet analysis, reducing review to under 4 hours" },
	{ text: "Autonomous fraud triage agent that pre-processes evidence, scores risk, and escalates only confirmed edge cases" },
	{ text: "AI-driven loan origination pipeline with configurable decision guardrails and human-in-the-loop checkpoints" },
	{ text: "Multi-agent orchestration layer with specialised compliance, fraud, and credit sub-agents operating in parallel" },
	{ text: "Immutable agent decision log with explainability summaries for every AI-assisted action" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Ingestion", items: ["Core banking feeds", "Customer documents", "Transaction streams", "External data APIs (credit bureaux, sanctions lists)"], color: "hsl(180,100%,50%)" },
	{ title: "Orchestrator", items: ["Central LLM agent", "Goal decomposition", "Sub-agent delegation", "Tool invocation", "Context memory management"], color: "hsl(210,100%,50%)" },
	{ title: "Specialist Agents", items: ["KYC/AML Agent", "Fraud Triage Agent", "Credit Underwriting Agent", "Regulatory Reporting Agent", "Document Intelligence Agent"], color: "hsl(280,100%,65%)" },
	{ title: "Enterprise Systems", items: ["Core banking system", "CRM", "Risk management platform", "Regtech reporting", "HRMS", "Audit & compliance logs"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
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

const TABLE_RESULTS = [
	{ metric: "KYC review cycle time", before: "72 hours avg.", after: "<4 hours avg.", change: "−94%" },
	{ metric: "Fraud triage backlog (peak)", before: "3,400 cases", after: "180 cases", change: "−95%" },
	{ metric: "Loan pre-approval handoffs", before: "7–9 steps", after: "1–2 steps", change: "−82%" },
	{ metric: "Analyst time on routine tasks", before: "~70% of day", after: "~18% of day", change: "−74%" },
	{ metric: "Regulatory report error rate", before: "4.2%", after: "0.3%", change: "−93%" },
	{ metric: "Operational cost (targeted workflows)", before: "Baseline", after: "38% of baseline", change: "−62%" },
	{ metric: "Projected 12-month ROI", before: "—", after: "340%", change: "340% ROI" }
];

const SUCCESS_FACTORS = [
	{
		title: "Domain-first agent design",
		desc: "Rather than adapting general-purpose AI to banking, OpenGridLabs built agents specifically around BFSI workflows. Each agent's tool set, reasoning prompts, and escalation logic were co-designed with the client's subject-matter experts."
	},
	{
		title: "Shadow mode as a trust accelerator",
		desc: "Running agents in parallel before production gave internal stakeholders the data needed to build confidence without risking live operations. By the time production rollout begins, internal resistance was minimal—the accuracy data spoke for itself."
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

const FAQS = [
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

export default function AgenticAICaseStudy() {
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

				<CaseStudyHero 
					categoryTag="Case Study · Banking & Financial Services"
					title="How Agentic AI Transformed Operations for a Tier-1 Financial Institution"
					description="A confidential BFSI enterprise deployed OpenGridLabs' multi-agent AI platform across compliance, fraud triage, and lending workflows—achieving outcomes that reframed what automation means in financial services."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "BFSI (anonymised)" },
						{ label: "AUM", value: "$40B+" },
						{ label: "Timeline", value: "14 weeks to production" },
						{ label: "Stack", value: "Agentic AI · LLM Orchestration · RPA" }
					]}
				/>

				<CaseStudyCarousel
									slug="agentic-ai"
									title="Agentic AI"
									accentColor="cyan"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/agentic-ai/1.jpg",
										"/images/case-studies/agentic-ai/2.jpg"
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
						"Our client is a diversified financial services institution operating across retail banking, insurance underwriting, and asset management verticals. With over 4,000 employees and a customer base exceeding two million, the organisation had reached a scale where its legacy, rules-based automation stack was no longer keeping pace with regulatory complexity, fraud sophistication, or customer expectations.",
						"Facing growing pressure from new compliance obligations and rising operational costs, leadership initiated a strategic review of AI readiness. The conclusion was clear: point solutions and RPA bots were not enough. What was required was an intelligent, goal-directed automation layer—one capable of reasoning, delegating sub-tasks, and taking autonomous action across interconnected systems. They needed agentic AI."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What is Agentic AI in Financial Services?"
					definitionText="Unlike traditional automation that executes fixed scripts, agentic AI systems can perceive context, set goals, orchestrate multiple tools or sub-agents, and adapt their approach in real time—enabling dynamic, multi-step reasoning across complex financial workflows such as KYC, credit decisioning, and regulatory reporting."
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
					title={"Five Operational Bottlenecks Resolved"}
					description={"How OpenGridLabs deployed autonomous specialized agents to transform customer-facing and regulatory timelines."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a layered agentic architecture that integrates with the client's existing core banking infrastructure without requiring a rip-and-replace of legacy systems. The platform is built for auditability, role-based access, and regulatory-grade data handling."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Compliance-first by design"}
					alertText={"Every agent action is logged with a reasoning trace, timestamp, and responsible-AI confidence score. Human-in-the-loop gates are enforced at defined risk thresholds—ensuring regulatory alignment with RBI guidelines, SEBI norms, and internal audit requirements. No autonomous action is taken on decisions above a configurable risk tier without human sign-off."}
					rightColumnTitle={"Agentic AI Platform Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases, designed to minimise operational disruption while building organisational confidence in agentic AI. OpenGridLabs embedded a cross-functional team comprising ML engineers, financial domain specialists, and a dedicated compliance architect."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 90-day post-deployment window against pre-deployment baselines. The results demonstrated that agentic AI, properly implemented, can deliver enterprise-grade ROI well within a single financial quarter."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We had automated tasks before. This was the first time we automated thinking. The agents don't just execute—they reason, adapt, and escalate appropriately. That distinction is what made this transformation real."}
					author={"Chief Operating Officer"}
					subtitle={"Confidential BFSI client"}
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
					title={"Ready to deploy agentic AI in your financial operations?"}
					description={"OpenGridLabs builds production-grade agentic AI systems tailored for BFSI compliance, risk, and customer operations."}
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
