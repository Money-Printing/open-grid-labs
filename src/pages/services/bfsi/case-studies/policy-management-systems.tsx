import { Link } from "react-router";

import {
	ArrowLeft,
	Layers,
	Cpu,
	Database,
	Zap,
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
import CaseStudyCarousel from "../../../../components/case-study-carousel";

const STATS = [
	{ value: "4 hr", label: "Policy issuance time, from 8 days", accent: "from-indigo-500 to-violet-600" },
	{ value: "44%", label: "Reduction in policy administration costs", accent: "from-indigo-500 to-violet-600" },
	{ value: "1.2M", label: "Policies migrated to new platform", accent: "from-indigo-500 to-violet-600" },
	{ value: "18 mo", label: "Phased modernisation, zero downtime", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "22-year-old COBOL system requiring IT involvement for every product change" },
	{ text: "Policy issuance averaging 8 days due to overnight batch processing architecture" },
	{ text: "400+ custom scripts creating fragile, undocumented dependencies" },
	{ text: "No API layer — integrations with broker systems, claims, and finance all point-to-point" },
	{ text: "Business unable to modify products without 4–6 month IT projects" }
];

const SOLUTIONS = [
	{ text: "Event-driven microservices architecture replacing the COBOL monolith product by product" },
	{ text: "Real-time policy issuance engine — synchronous processing replacing overnight batch" },
	{ text: "No-code product configuration rules engine enabling business teams to manage products" },
	{ text: "REST API layer enabling broker, claims, and finance integrations without custom scripts" },
	{ text: "Strangler-fig migration pattern preserving operation throughout the 18-month programme" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Channels", items: ["Broker API", "Customer portal", "Direct web", "Agent desktop", "Call centre integration"], color: "hsl(230,80%,60%)" },
	{ title: "Policy Engine", items: ["Quote", "Bind", "Endorse", "Renew", "Cancel", "Claims linkage", "Document generation"], color: "hsl(230,80%,60%)" },
	{ title: "Product Config", items: ["Rules engine", "Rating tables", "Coverage definitions", "Eligibility rules", "Product versioning"], color: "hsl(230,80%,60%)" },
	{ title: "Integration", items: ["Finance/billing", "Claims system", "Reinsurance", "Regulatory reporting", "Data warehouse"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Foundation and First Product Line (Months 1–6)",
		desc: "OpenGridLabs built the platform foundation — API gateway, event bus, policy engine core, and product rules engine — and migrated the motor product line first (the highest volume at 480,000 policies). A 90-day parallel run validated new system output against the legacy system before cutover.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Remaining Product Lines (Months 7–14)",
		desc: "Home, travel, pet, PMI, and commercial SME were migrated sequentially, each with a dedicated parallel validation period. The rules engine was trained on business teams managing each product without IT involvement — the first product configuration change was made by a business analyst rather than a developer in month 9.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Legacy Decommission and API Programme (Months 15–18)",
		desc: "The COBOL system was decommissioned following the final product migration. The API programme connected 14 broker systems, the claims platform, and the finance system through the new REST layer. The IT team's ratio shifted from 70% maintenance to 80% new development.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Policy issuance time", before: "8 business days", after: "4 hours", change: "4 hours" },
	{ metric: "Administration cost per policy", before: "Baseline", after: "-44%", change: "-44%" },
	{ metric: "IT time on maintenance", before: "70% of capacity", after: "20% of capacity", change: "20% of capacity" },
	{ metric: "Product change cycle time", before: "4–6 months IT project", after: "Days (business-managed)", change: "Days (business-managed)" },
	{ metric: "Broker API integrations", before: "0 (all custom)", after: "14 connected via REST", change: "14 connected via REST" },
	{ metric: "COBOL succession risk", before: "Critical", after: "Eliminated", change: "Eliminated" }
];

const SUCCESS_FACTORS = [
	{
		title: "Product-by-product migration eliminates big-bang risk",
		desc: "Replacing a policy management system for 1.2M policies all at once is not a viable option for a regulated insurer. Migrating one product line at a time, with a parallel validation period for each, distributed the risk across 18 months and made each individual migration manageable."
	},
	{
		title: "A no-code rules engine changes the IT-business dynamic",
		desc: "The most expensive thing about a monolithic PMS is the IT dependency it creates for every product change. A rules engine that business teams can operate directly eliminates this dependency — turning months of IT project into hours of business configuration."
	},
	{
		title: "Real-time processing is a structural improvement over batch",
		desc: "A system that queues every process through overnight batch jobs will always produce multi-day policy issuance times regardless of how well it is maintained. Replacing batch with event-driven synchronous processing was the architectural change that enabled same-day policy issuance."
	}
];

const FAQS = [
	{
		q: "What is the difference between a policy management system and a claims management system?",
		a: "A policy management system manages the policy lifecycle — new business, endorsements, renewals, cancellations. A claims management system manages the claims lifecycle — FNOL, investigation, reserve management, settlement, subrogation. They are distinct platforms that need to exchange data at key points: claims systems need policy details at FNOL, and policy systems need to reflect claims history at renewal."
	},
	{
		q: "What is a no-code rules engine in insurance?",
		a: "A no-code rules engine allows non-technical users — product managers, actuaries, and underwriters — to define and modify insurance product rules (eligibility criteria, rating factors, coverage definitions, excess structures) through a graphical interface, without writing code. It decouples product configuration from software development, dramatically reducing the time and cost of product changes."
	}
];

export default function PolicyManagementSystemsCaseStudy() {
	return (
		<>
			<SEO
				title="Policy Management System Modernisation Case Study | OpenGridLabs"
				description="How Modernising a 22-Year-Old Policy Management System Cut Issuance from 8 Days to 4 Hours."
				canonical="/services/bfsi/policy-management-systems"
				keywords="Policy Management System, PMS, Policy Administration, Insurance Core System, Policy Lifecycle, Endorsement Processing, Renewal Automation, Insurance Modernisation, InsurTech, Insurance Technology, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Indigo Theme Ambient Glow */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700"
					style={{
						background: `radial-gradient(circle, hsl(230,80%,60%) 0%, hsl(240,80%,55%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Insurance Technology"
					title="How Modernising a 22-Year-Old Policy Management System Cut Issuance from 8 Days to 4 Hours"
					description="A mid-tier insurer was running its entire policy book on a system installed in 2002 — a COBOL-based policy administration platform that had been extended through custom scripts until every process required IT involvement and policy issuance averaged 8 business days. OpenGridLabs led a phased modernisation: event-driven microservices replacing the monolith, automated lifecycle workflows for 6 product lines, and a no-code rules engine enabling the business to manage products without IT dependency."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Mid-tier insurer (anonymised)" },
						{ label: "Scale", value: "1.2M policies, 6 product lines" },
						{ label: "Timeline", value: "18 months" },
						{ label: "Stack", value: "Event-driven microservices · Rules engine · REST APIs · Legacy integration" }
					]}
				/>

				<CaseStudyCarousel
					slug="policy-management-systems"
					title="Policy Management Systems"
					accentColor="indigo"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/policy-management-systems/1.jpg",
						"/images/case-studies/policy-management-systems/2.jpg"
					]}
				/>

				<StatsGrid
					stats={STATS}
					hoverBorderClass="hover:border-indigo-500/30"
					hoverTextClass="group-hover:text-indigo-400"
				/>

				<CaseStudyBackground
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a mid-tier personal lines insurer with 1.2 million policies across motor, home, travel, pet, private medical, and commercial SME products. Their policy management system was a COBOL-based platform installed in 2002 and extended with over 400 custom scripts, stored procedures, and manual workarounds to handle product evolution since. Every product change required a development ticket. Policy issuance averaged 8 business days because the system queued processes through batch jobs running overnight.",
						"The IT team spent 70% of its capacity maintaining the legacy system and 30% on new development — a ratio that had been static for years. The business could not launch new products or modify existing ones without 4–6 month IT projects. The insurer was losing prospective customers to faster digital competitors. OpenGridLabs designed a phased migration using the strangler-fig pattern, replacing the legacy system one product line at a time while the business continued to operate.",
						"A policy management system (PMS), also called a policy administration system (PAS), is the core software platform managing the complete lifecycle of insurance policies — from new business quotation and binding through mid-term adjustments, renewals, claims linkage, and cancellation."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is a Policy Management System?"
					definitionText="A policy management system (PMS), also called a policy administration system (PAS), is the core software platform managing the complete lifecycle of insurance policies — from new business quotation and binding through mid-term adjustments, renewals, claims linkage, and cancellation."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-indigo-500/10"
					definitionIconBorderClass="border-indigo-500/20"
					definitionIconColorClass="text-indigo-400"
					glowColorClass="bg-indigo-400"
					gradientFromClass="from-indigo-950/10"
				/>

				<ChallengesSolutions
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Dismantling monolithic batch queues with real-time microservices, no-code config platforms, and secure legacy gateways."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Policy Management System Architecture"}
					description={"Transactional channels feeding direct queries into core policy engines, graphical configuration layers, and integration brokers."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-indigo-400"}
					highlightColorClass={"bg-indigo-400"}
					gradientColorClass={"via-indigo-400/50"}
					alertBorderClass={"border-indigo-500/20"}
					alertBgClass={"bg-indigo-500/5"}
					alertTextColorClass={"text-indigo-300"}
					alertTitle={"Regulatory & Compliance Governance"}
					alertText={"All InsurTech solutions are built with FCA/PRA regulatory compliance, data privacy (GDPR), and actuarial governance as first-class design requirements. Audit trails, model validation, and data lineage are embedded from day one — not retrofitted before examination."}
					rightColumnTitle={"Architecture Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 3-phase roadmap leading from foundation motor setups to multi-product migrations and full decommission workflows."}
					phaseColors={["hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)"]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults
					description="Decimating document generation lifetimes, reducing processing costs, and maximizing structural agility indices."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"We had been managing a COBOL system older than most of our staff. Every product change was a negotiation with IT. After the migration, a business analyst changed a coverage rule on a Tuesday morning and it was live by the afternoon. That was unimaginable before."}
					author={"Chief Operating Officer"}
					subtitle={"Confidential Mid-Tier Insurer"}
					accentLineClass={"bg-indigo-400"}
					iconColorClass={"text-indigo-500/10"}
				/>

				<CaseStudySuccessFactors
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-indigo-500/20"}
					iconColorClass={"text-indigo-400"}
				/>

				<CaseStudyFaq
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-indigo-400"}
					activeChevronColorClass={"text-indigo-400"}
				/>

				<CaseStudyCta
					title={"Policy issuance taking days because of a legacy batch system?"}
					description={"OpenGridLabs modernises policy management systems — event-driven architecture, no-code product rules, and API integration — product by product, with zero downtime throughout."}
					moreCaseStudiesLink={"/services/bfsi"}
					glowBgClass={"bg-indigo-400"}
					iconColorClass={"text-indigo-400"}
					btnGradientClass={"from-indigo-500 to-violet-500"}
					btnShadowColor={"99,102,241,0.2"}
				/>
			</div>
		</>
	);
}
