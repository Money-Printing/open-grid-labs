import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Lock, 
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
	{ value: "12", label: "Manual workflows automated end to end", accent: "from-cyan-400 to-blue-500" },
	{ value: "70%", label: "Less manual data handling across teams", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "9", label: "Existing systems connected to AI", accent: "from-pink-500 to-rose-400" },
	{ value: "11 wk", label: "From stalled prototype to production", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "AI ran in a sandbox with no live connection to CRM, warehouse, or internal tools" },
	{ text: "Staff manually copied data in and out, making the AI slower than doing the task by hand" },
	{ text: "Each system had its own API, auth, and quirks—every integration was a brittle one-off" },
	{ text: "No permissions, logging, or error handling, so the AI couldn't be trusted with live data" },
	{ text: "AI was bolted alongside workflows rather than embedded inside them, so adoption stalled" }
];

const SOLUTIONS = [
	{ text: "A unified integration layer exposing AI to every system through one consistent, secure interface" },
	{ text: "Reusable connectors for the CRM, data warehouse, ticketing, and internal apps" },
	{ text: "An orchestration engine that chains AI steps with system actions into end-to-end workflows" },
	{ text: "Centralised authentication, permissions, logging, and error handling across all integrations" },
	{ text: "AI embedded directly into existing tools and workflows, where staff already work" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Systems", items: ["CRM", "Data Warehouse", "Ticketing", "Internal Apps", "Third-party APIs", "Document Stores"], color: "hsl(180,100%,50%)" },
	{ title: "Connectors", items: ["Reusable API Connectors", "Authentication & Secrets", "Permissions & Data Scoping", "Rate Limiting & Retries"], color: "hsl(210,100%,50%)" },
	{ title: "Orchestration", items: ["Workflow Engine", "AI + System Action Chaining", "Triggers & Events", "Human-in-the-Loop Steps"], color: "hsl(280,100%,65%)" },
	{ title: "AI & Delivery", items: ["LLM & AI Services", "In-App Embedding", "Audit Logging", "Monitoring & Error Alerting"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Integration Layer & First Connector (Weeks 1–4)",
		desc: "OpenGridLabs designed the unified integration layer with centralised authentication, permissions, logging, and error handling, then built the first connector—to the CRM—and shipped one complete automated workflow end to end. This proved the architecture on a real, high-value process before scaling.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Connectors & Orchestration (Weeks 5–9)",
		desc: "With the foundation proven, the team added connectors for the data warehouse, ticketing system, and internal apps, and built the orchestration engine that chains AI steps with system actions—reading a record, calling the AI, writing results back, and triggering follow-on steps. Human-in-the-loop checkpoints were added where staff needed to review before an action committed.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Embedding, Monitoring & Enablement (Weeks 10–11)",
		desc: "OpenGridLabs embedded the AI directly into the tools staff already used, so it appeared inside their workflow rather than as a separate app. End-to-end monitoring, audit logging, and error alerting were finalised, and the client's engineers were trained to build new connectors and workflows on the layer themselves—so integration could continue without external help.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Systems connected to AI", before: "0 (sandbox)", after: "9", change: "Integrated" },
	{ metric: "Workflows automated end to end", before: "0", after: "12", change: "New capability" },
	{ metric: "Manual data handling", before: "Baseline", after: "30% of baseline", change: "-70%" },
	{ metric: "Average task turnaround", before: "Baseline", after: "0.4× baseline", change: "2.5× faster" },
	{ metric: "AI feature adoption by staff", before: "Low (extra app)", after: "High (in-workflow)", change: "Embedded" },
	{ metric: "Integration audit & logging", before: "None", after: "Full coverage", change: "New capability" },
	{ metric: "Effort to add a new system", before: "One-off project", after: "Reusable connector", change: "Scalable" }
];

const SUCCESS_FACTORS = [
	{
		title: "A layer, not a tangle of one-offs",
		desc: "Investing first in a unified integration layer meant every new system became a reusable connector rather than a bespoke project—keeping complexity flat as coverage grew and avoiding the brittle web that sinks most integration efforts."
	},
	{
		title: "Embed where people already work",
		desc: "Putting AI inside the tools staff already used—rather than as a separate app to switch to—was the difference between low and high adoption. Integration is as much about workflow as about APIs."
	},
	{
		title: "Security and observability from day one",
		desc: "Centralised authentication, permissions, logging, and error handling meant the AI could be trusted with live data and every action was traceable—turning a risky prototype into something safe to run in production."
	},
	{
		title: "Prove it on one workflow first",
		desc: "Shipping a single complete, automated workflow early validated the architecture and built confidence before scaling—so the broader rollout extended a proven pattern rather than betting on an untested design."
	}
];

const FAQS = [
	{
		q: "What are AI integration services?",
		a: "AI integration services connect AI capabilities—such as large language models, speech, or vision—to an organisation's existing systems, data, and workflows. Rather than building AI in isolation, integration delivers the connectors, API layers, authentication, data pipelines, and orchestration needed for AI to read from and write to tools like CRMs, data warehouses, and internal apps, so it becomes part of day-to-day operations."
	},
	{
		q: "Why do AI projects fail at the integration stage?",
		a: "Many AI projects produce a strong model or prototype that never reaches users because it isn't connected to real systems. Common causes include brittle one-off integrations, no unified API layer, authentication and data-access hurdles, poor error handling, and AI bolted onto workflows rather than embedded in them. A dedicated integration layer with reusable connectors, monitoring, and security solves these problems."
	}
];

export default function AIIntegrationServicesCaseStudy() {
	return (
		<>
			<SEO
				title="AI Integration Services Case Study - OpenGridLabs"
				description="How OpenGridLabs built an enterprise AI integration layer connecting CRM, data warehouse, and internal tools in 11 weeks to automate 12 workflows."
				canonical="/services/ai-data/ai-integration-services"
				keywords="AI Integration, AI System Integration, LLM API Integration, AI Workflow Automation, AI Orchestration, AI Connectors, AI Middleware, Enterprise AI, CRM Integration, API Layer, AI Deployment, System Integration"
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
					title="How AI Integration Embedded Intelligence Across a Company's Entire Stack in 11 Weeks"
					description="A fast-scaling company had capable AI that nobody could use—stuck in a prototype, disconnected from real systems. OpenGridLabs built the integration layer that plugged AI into their CRM, data warehouse, and internal tools, automating twelve workflows and finally turning a promising demo into daily production value."
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
					slug="ai-integration-services"
					title="AI Integration Services"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/ai-integration-services/1.jpg",
						"/images/case-studies/ai-integration-services/2.jpg"
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
						"Our client had spent months developing sophisticated, custom AI models that demonstrated exceptional utility in laboratory sandboxes. However, because these systems remained completely disconnected from their primary customer databases, ticketing software, and communication tools, they had zero business impact. To realise the value of their investments, they needed a fast, robust, and secure integration platform capable of linking these models with active operational systems.",
						"OpenGridLabs stepped in to design and build this missing middleware tier. By constructing reusable secure connectors, a robust transactional queuing layer, and inline error-handling schemes, the team successfully turned isolated models into a high-capacity operational nervous system, enabling automated end-to-end task flows across their entire software stack.",
						"Connecting AI to real systems requires more than simple API calls. It requires dedicated orchestration middleware that handles state synchronization, permissions, transactional rollback safety, audit trails, and human-in-the-loop safety thresholds."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="The Role of Middleware"
					definitionText="Connecting AI to real systems requires more than simple API calls. It requires dedicated orchestration middleware that handles state synchronization, permissions, transactional rollback safety, audit trails, and human-in-the-loop safety thresholds."
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
					title={"Five Integration Challenges Resolved"}
					description={"How OpenGridLabs engineered the middleware connecting isolated models with enterprise applications."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Lock, Workflow, Cpu]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a layered speech platform that sits between the client's application and the underlying speech models. The architecture is engine-agnostic—self-hosted and third-party models can be mixed or swapped without application changes."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Privacy-first by design"}
					alertText={"Audio and transcripts are isolated per tenant and encrypted in transit and at rest. Optional on-the-fly PII redaction removes sensitive details from transcripts, recordings are retained only for the period a customer configures, and no customer audio is used to train shared models without explicit opt-in."}
					rightColumnTitle={"Voice-to-Text Platform Architecture"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"OpenGridLabs embedded a team of integration engineers and a solutions architect alongside the client's team across three structured phases."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, demonstrating the power of workflow integration."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd spent months on the AI itself and it sat unused because it touched nothing. The integration work is what made it real—now it reads from our systems, acts in them, and shows up right inside the tools our team already uses every day."}
					author={"VP of Operations"}
					subtitle={"Confidential venture-backed Technology Company"}
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
					title={"Ready to connect your AI to the systems where work happens?"}
					description={"OpenGridLabs builds AI integration layers—reusable connectors, orchestration, security, and in-workflow embedding—so your AI becomes a working part of daily operations, not a sandboxed demo."}
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
