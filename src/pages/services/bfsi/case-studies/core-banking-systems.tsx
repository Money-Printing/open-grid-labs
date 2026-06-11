import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Database,
	Zap,
	Landmark,
	Server
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
	{ value: "0 days", label: "Customer downtime during migration", accent: "from-emerald-500 to-teal-600" },
	{ value: "44%", label: "Reduction in processing cost", accent: "from-amber-500 to-yellow-600" },
	{ value: "18 mo", label: "Phased programme duration", accent: "from-blue-500 to-cyan-600" },
	{ value: "8×", label: "Faster product feature release", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "30-year-old COBOL mainframe with no internal engineering succession pipeline" },
	{ text: "Feature releases requiring 6–9 months due to tightly coupled monolithic architecture" },
	{ text: "Big-bang replacement impossible — 2.4M accounts could not sustain planned downtime" },
	{ text: "Regulatory reporting requiring manual data extraction from non-queryable batch outputs" },
	{ text: "High mainframe processing cost consuming 31% of the bank's total IT budget" }
];

const SOLUTIONS = [
	{ text: "Strangler-fig migration pattern replacing modules incrementally without big-bang risk" },
	{ text: "Event-sourced microservices architecture — accounts, transactions, products, notifications" },
	{ text: "Dual-run parallel operation with automated reconciliation validating new system outputs" },
	{ text: "API gateway layer enabling third-party and channel integrations before full cutover" },
	{ text: "Cloud-native deployment on managed Kubernetes with regulatory data residency compliance" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Legacy", items: ["COBOL mainframe", "Batch processing", "Synchronous interfaces", "Manual reporting"], color: "hsl(0,100%,60%)" },
	{ title: "Bridge", items: ["Anti-corruption layer", "Event bridge", "Parallel run reconciliation", "Data migration pipeline"], color: "hsl(38,100%,50%)" },
	{ title: "Modern Core", items: ["Microservices (accounts, transactions, products, ledger)", "Event sourcing", "CQRS", "REST/gRPC APIs"], color: "hsl(145,100%,45%)" },
	{ title: "Channels", items: ["Internet banking", "Mobile", "Open Banking APIs", "Branch", "Regulatory reporting feeds"], color: "hsl(200,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Foundation & Non-Critical Modules (Months 1–6)",
		desc: "OpenGridLabs established the cloud infrastructure, event streaming backbone, and reconciliation framework. Non-critical modules — notifications, reporting, product catalogue — were migrated first to validate the pattern at low risk. The parallel-run reconciliation engine compared outputs between old and new systems in real time.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Accounts & Transactions (Months 7–14)",
		desc: "The current account and savings modules — the highest volume, highest risk — were migrated with a 6-month parallel run before cutover. Every transaction was processed by both systems simultaneously; any reconciliation discrepancy triggered an alert and a human review before it could affect a customer.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Full Cutover & Decommission (Months 15–18)",
		desc: "All remaining modules were migrated and the mainframe was decommissioned in a planned shutdown during a low-volume weekend window. The shutdown was invisible to customers. The COBOL team was retrained and redeployed to the new cloud-native stack.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Customer-visible downtime during migration", before: "Planned: 0", after: "Actual: 0", change: "Actual: 0" },
	{ metric: "Processing cost per transaction", before: "Baseline", after: "-44%", change: "-44%" },
	{ metric: "Product feature release cycle", before: "6–9 months", after: "3–4 weeks", change: "3–4 weeks" },
	{ metric: "Regulatory reporting", before: "Manual extraction", after: "Automated feed", change: "Automated feed" },
	{ metric: "Mainframe licence and support cost", before: "31% of IT budget", after: "Eliminated", change: "Eliminated" },
	{ metric: "COBOL succession risk", before: "Critical", after: "Resolved", change: "Resolved (team retrained)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Strangler-fig eliminates big-bang risk",
		desc: "Replacing a core banking system all at once is the riskiest possible approach. Replacing it one module at a time, with each replacement proven at production load before the next is started, distributes the risk across a multi-year programme and makes each individual migration safe."
	},
	{
		title: "Parallel-run reconciliation is the safety mechanism",
		desc: "Running old and new systems simultaneously and automatically comparing every output — before any customer is affected — is what makes incremental migration trustworthy rather than optimistic. The reconciliation engine caught 12 discrepancies during the programme; all were resolved before cutover."
	},
	{
		title: "Data residency and compliance are first-class concerns",
		desc: "A cloud-native banking architecture that doesn't address data residency, audit logging, and operational resilience from day one will fail its first regulatory examination. Every architectural decision was made with the bank's regulatory obligations explicitly in scope."
	}
];

const FAQS = [
	{
		q: "What is the strangler-fig pattern in core banking migration?",
		a: "The strangler-fig pattern migrates a monolithic legacy system by building new components alongside it, routing increasing traffic to the new system as components are validated, and decommissioning the legacy system module by module. It avoids the big-bang replacement risk that makes full core banking replacements so dangerous."
	},
	{
		q: "How long does a core banking system migration take?",
		a: "A phased core banking migration for a mid-tier bank typically takes 18–36 months depending on the number of product lines, account volume, and regulatory complexity. The time is primarily driven by the length of parallel-run validation periods required to establish confidence in each module before cutover."
	}
];

export default function CoreBankingSystemsCaseStudy() {
	return (
		<>
			<SEO
				title="Core Banking System Modernisation Case Study | OpenGridLabs"
				description="How a Mid-Tier Bank Migrated Off a 30-Year-Old Mainframe Without a Single Day of Customer Downtime using the strangler-fig pattern."
				canonical="/services/bfsi/core-banking-systems"
				keywords="Core Banking, Mainframe Migration, Modernisation, Strangler-Fig, Microservices Banking, Cloud-Native Banking, COBOL Migration, Banking Architecture, FinTech, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Amber Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(38,100%,50%) 0%, hsl(28,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/bfsi" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to BFSI & Fintech
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Core Banking Modernisation"
					title="How a Mid-Tier Bank Migrated Off a 30-Year-Old Mainframe Without a Single Day of Customer Downtime"
					description="A mid-tier bank was running its core operations on a mainframe system installed in 1994 — inflexible, expensive to maintain, and staffed by a shrinking pool of COBOL engineers. Digital feature releases took quarters, not weeks. OpenGridLabs led a phased migration using the strangler-fig pattern: new microservices replacing mainframe modules one by one, running in parallel until confidence enabled cutover, with zero customer-visible downtime across the full 18-month programme."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Mid-tier commercial bank (anonymised)" },
						{ label: "Scale", value: "2.4M accounts, 8 product lines" },
						{ label: "Timeline", value: "18-month phased programme" },
						{ label: "Architecture", value: "Strangler-fig · Microservices · Event-driven · Cloud-native" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-amber-500/30"
					hoverTextClass="group-hover:text-amber-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Landmark className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a mid-tier commercial bank with 2.4 million accounts across eight product lines — current accounts, savings, mortgages, personal loans, business accounts, credit cards, FX, and trade finance. Their core banking platform was a COBOL-based mainframe system installed in 1994, maintained by a team whose average age was 57 and for whom no succession pipeline existed. The system worked, but it was the bank's primary strategic constraint: time-to-market for new products was measured in quarters, regulatory reporting required manual extraction, and cloud integrations required expensive middleware.",
						"A 'big bang' replacement — shutting down the old system and launching the new one — was not an option for a regulated institution with 2.4 million customer accounts. OpenGridLabs designed and led a strangler-fig migration: a new cloud-native core banking platform deployed alongside the mainframe, with functionality migrated module by module, each running in parallel until the new system had proven itself at production load, enabling a controlled cutover without risk to customers or regulatory standing.",
						"Core banking system modernisation is the process of replacing or incrementally re-platforming the central software system that handles a bank's fundamental operations — account management, transaction processing, ledger, product catalogue, and customer data. Modern approaches use the strangler-fig pattern to avoid big-bang risk: new components are built alongside the legacy system, traffic is gradually shifted, and the legacy system is decommissioned module by module as each replacement is proven."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is Core Banking Modernisation?"
					definitionText="Core banking system modernisation is the process of replacing or incrementally re-platforming the central software system that handles a bank's fundamental operations — account management, transaction processing, ledger, product catalogue, and customer data. Modern approaches use the strangler-fig pattern to avoid big-bang risk: new components are built alongside the legacy system, traffic is gradually shifted, and the legacy system is decommissioned module by module as each replacement is proven."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-amber-500/10"
					definitionIconBorderClass="border-amber-500/20"
					definitionIconColorClass="text-amber-400"
					glowColorClass="bg-amber-400"
					gradientFromClass="from-amber-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Overcoming monolithic technical debt and operational risks through structured parallel architectures."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Server, Cpu, Database, Layers]}
					tag={"Technical Design"}
					title={"Core Banking Modernisation Architecture"}
					description={"Phased strangler-fig orchestration coupling legacy batch environments with real-time cloud microservices."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout the engagement."}
					rightColumnTitle={"Modernisation Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"An 18-month phased migration using strangler-fig module cutovers to manage bank operational risk."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Strangler-fig migration delivered immediate transaction cost reductions and faster feature release cadences."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd been told for a decade that replacing the mainframe was too risky to attempt. The strangler-fig approach proved that it could be done safely, incrementally, and without a single customer noticing. The risk was in the planning, not the execution."}
					author={"CTO"}
					subtitle={"Confidential Mid-Tier Bank"}
					accentLineClass={"bg-amber-400"}
					iconColorClass={"text-amber-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-amber-500/20"}
					iconColorClass={"text-amber-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-amber-400"}
					activeChevronColorClass={"text-amber-400"}
				/>

				<CaseStudyCta 
					title={"Core banking system becoming your biggest strategic constraint?"}
					description={"OpenGridLabs leads core banking modernisation — strangler-fig migration, cloud-native architecture, and zero-downtime cutover — for regulated institutions that cannot afford big-bang risk."}
					moreCaseStudiesLink={"/services/bfsi"}
					glowBgClass={"bg-amber-400"}
					iconColorClass={"text-amber-400"}
					btnGradientClass={"from-amber-400 to-indigo-500"}
					btnShadowColor={"245,158,11,0.2"}
				/>
			</div>
		</>
	);
}
