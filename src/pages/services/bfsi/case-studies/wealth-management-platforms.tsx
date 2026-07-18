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
	{ value: "38%", label: "AUM growth without headcount increase", accent: "from-emerald-500 to-teal-600" },
	{ value: "3×", label: "Advisor capacity per relationship", accent: "from-emerald-500 to-teal-600" },
	{ value: "14 mo", label: "Discovery to full platform launch", accent: "from-emerald-500 to-teal-600" },
	{ value: "28", label: "Custodians aggregated into unified view", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "28 custodians requiring manual reconciliation — weekly data lag and frequent errors" },
	{ text: "Reporting cycle taking 3–4 days per client per quarter — unsustainable at scale" },
	{ text: "No client portal — all portfolio information delivered by email or in scheduled meetings" },
	{ text: "Advisor capacity constrained — 60% administration, 40% client-facing work" },
	{ text: "No consolidated risk view across custodians — risk management done by individual account" }
];

const SOLUTIONS = [
	{ text: "Real-time portfolio aggregation across 28 custodians via direct data feeds and file processing" },
	{ text: "Automated performance and attribution reporting — quarterly reports generated in minutes" },
	{ text: "Client portal with real-time portfolio view, document vault, and secure messaging" },
	{ text: "Advisor workbench — consolidated client view, meeting preparation tools, and workflow management" },
	{ text: "Risk dashboard aggregating exposure, concentration, and benchmark deviation across the full book" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Ingestion", items: ["28 custodian feeds", "Position reconciliation", "Corporate actions", "FX rates", "Pricing"], color: "hsl(145,100%,40%)" },
	{ title: "Portfolio Engine", items: ["Consolidated positions", "Performance attribution", "Risk analytics", "Benchmark comparison"], color: "hsl(145,100%,40%)" },
	{ title: "Advisor Workbench", items: ["Client 360 view", "Meeting prep", "Proposal generation", "Workflow", "CRM integration"], color: "hsl(145,100%,40%)" },
	{ title: "Client Portal", items: ["Real-time portfolio", "Performance charts", "Document vault", "Secure messaging", "Reporting"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Aggregation Foundation (Months 1–5)",
		desc: "OpenGridLabs built the custodian data integration layer — connecting all 28 custodians via direct API feeds where available and automated file processing where not — with a reconciliation engine that identified and flagged discrepancies against the legacy system during the parallel-run period.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Advisor Workbench & Reporting (Months 6–10)",
		desc: "The advisor workbench was built with a consolidated client view, automated report generation, and a meeting preparation workflow that assembled a client's complete portfolio context in under five minutes. The quarterly reporting process was reduced from 3–4 days to 45 minutes of review time.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Client Portal & Launch (Months 11–14)",
		desc: "The client portal was built and launched to 320 clients in a phased rollout. The portal provided real-time portfolio access, interactive performance charts, a document vault, and secure messaging — reducing the volume of routine portfolio enquiries to the advisor team by 67%.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "AUM per advisor", before: "Baseline", after: "+38% without new hires", change: "+38%" },
	{ metric: "Advisor administration time", before: "60% of capacity", after: "20% of capacity", change: "-40%" },
	{ metric: "Quarterly report production time", before: "3–4 days per client", after: "45 min review (automated)", change: "Automated" },
	{ metric: "Client portal adoption", before: "0% (not available)", after: "84% of clients active", change: "84% active" },
	{ metric: "Custodian data reconciliation lag", before: "Weekly", after: "Real-time", change: "Real-time" },
	{ metric: "Client enquiry call volume", before: "High", after: "Down 67% (portal self-service)", change: "-67%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Aggregation is the foundation, not a feature",
		desc: "A wealth management platform without complete, real-time data aggregation across all custodians is a partial view that advisors cannot trust. The investment in connecting all 28 custodians was the precondition for every other capability on the platform."
	},
	{
		title: "Automation changes the advisor role",
		desc: "An advisor who spends three days per quarter producing a performance report is not available for the client conversations that require their expertise. Automating the production of the report and leaving the advisor to review and contextualise it is the correct division of labour between technology and professional judgement."
	},
	{
		title: "The client portal reduces noise and increases signal",
		desc: "A client portal that answers routine portfolio questions — 'what is my performance this month?' — does not replace the advisor relationship. It removes the low-value contacts so the advisor's attention goes to the high-value ones."
	}
];

const FAQS = [
	{
		q: "What is portfolio aggregation in wealth management?",
		a: "Portfolio aggregation is the process of consolidating a client's investment positions from multiple custodians, accounts, and asset types into a single, unified view. It requires data feeds or file processing from each custodian, position reconciliation, corporate action processing, and multi-currency consolidation to produce a complete and accurate picture of the client's total wealth."
	},
	{
		q: "What is the difference between a family office and a multi-family office?",
		a: "A single-family office serves one ultra-high-net-worth family, providing dedicated investment management, tax, estate planning, and administrative services. A multi-family office provides similar services to multiple high-net-worth families, achieving scale economies that make the cost of sophisticated investment infrastructure commercially viable for a broader client base."
	}
];

export default function WealthManagementPlatformsCaseStudy() {
	return (
		<>
			<SEO
				title="Wealth Management Platform & Custodian Aggregation Case Study | OpenGridLabs"
				description="How a Wealth Management Platform Grew AUM 38% by Making Each Advisor Three Times More Productive."
				canonical="/services/bfsi/wealth-management-platforms"
				keywords="Wealth Management, Portfolio Aggregation, Advisor Workbench, Client Portal, Family Office, WealthTech, Automated Reporting, AUM Growth, Financial Services, Investment Management, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Emerald Theme Ambient Glow */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700"
					style={{
						background: `radial-gradient(circle, hsl(145,100%,40%) 0%, hsl(155,100%,35%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Financial Services"
					title="How a Wealth Management Platform Grew AUM 38% by Making Each Advisor Three Times More Productive"
					description="A multi-family office managing $4.8B AUM across 320 client relationships was administering its book with a combination of spreadsheets, a legacy portfolio system, and manual reporting — each advisor spending 60% of their time on administration and 40% on clients. OpenGridLabs built a unified wealth management platform: portfolio aggregation across 28 custodians, a digital advisor workbench, an automated reporting engine, and a client portal — reversing the time split and enabling the firm to grow AUM without growing headcount."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Multi-family office (anonymised)" },
						{ label: "Scale", value: "$4.8B AUM, 320 client relationships" },
						{ label: "Timeline", value: "14 months" },
						{ label: "Stack", value: "Portfolio aggregation · Advisor workbench · Client portal · Reporting engine" }
					]}
				/>

				<CaseStudyCarousel
					slug="wealth-management-platforms"
					title="Wealth Management Platforms"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/wealth-management-platforms/1.jpg",
						"/images/case-studies/wealth-management-platforms/2.jpg"
					]}
				/>

				<StatsGrid
					stats={STATS}
					hoverBorderClass="hover:border-emerald-500/30"
					hoverTextClass="group-hover:text-emerald-400"
				/>

				<CaseStudyBackground
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a multi-family office managing $4.8 billion in assets across 320 high-net-worth and ultra-high-net-worth client relationships. The firm had built a strong investment practice but was running it on a technology stack that had not kept pace: a legacy portfolio system updated weekly from custodian files, a reporting process involving manual Excel reconciliation, and client communications produced in PowerPoint by analysts who spent days per quarter assembling performance packs.",
						"The advisor capacity problem was the most acute constraint. Each advisor was spending more time on administration — reconciling positions, preparing reports, answering clients' questions about their portfolio — than on the high-value work of investment advice and relationship management. The firm could not grow AUM without hiring more advisors, and it could not hire more advisors without solving the productivity problem first. Technology was the leverage point.",
						"A wealth management platform is the technology infrastructure used by financial advisors and wealth managers to aggregate client portfolio data across custodians, analyse performance and risk, generate reports, manage client communications, and support investment decision-making. A modern platform integrates data from multiple custodians into a unified view, automates routine reporting, and provides both an advisor workbench and a client-facing portal for self-service access to portfolio information."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is a Wealth Management Platform?"
					definitionText="A wealth management platform is the technology infrastructure used by financial advisors and wealth managers to aggregate client portfolio data across custodians, analyse performance and risk, generate reports, manage client communications, and support investment decision-making. A modern platform integrates data from multiple custodians into a unified view, automates routine reporting, and provides both an advisor workbench and a client-facing portal for self-service access to portfolio information."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-emerald-500/10"
					definitionIconBorderClass="border-emerald-500/20"
					definitionIconColorClass="text-emerald-400"
					glowColorClass="bg-emerald-400"
					gradientFromClass="from-emerald-950/10"
				/>

				<ChallengesSolutions
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Reversing legacy weekly data syncs with real-time API integrations, self-service portals, and advisor workflows."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Wealth Management Platform Architecture"}
					description={"Multi-custodian ingestion layers linked to consolidated portfolio engines, interactive advisor workbenches, and real-time client portal views."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Regulatory & Data Governance Core"}
					alertText={"All financial services solutions are designed with regulatory compliance, data lineage, and audit-readiness as first-class requirements. Every data point is traceable to source, every calculation is reproducible, and every system is designed for examination by regulators and auditors."}
					rightColumnTitle={"Architecture Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 3-phase roadmap leading from custodian feeds setup to workbench tools and public client portals."}
					phaseColors={["hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)"]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Freeing up advisor capacity, automating quarterly client reporting, and maximizing portal adoption."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"The platform gave our advisors their time back. They were spending half their week on administration that should have been automated. Now they spend that time with clients — and the AUM growth followed directly from the additional capacity."}
					author={"Managing Partner"}
					subtitle={"Confidential Multi-Family Office"}
					accentLineClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-500/10"}
				/>

				<CaseStudySuccessFactors
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-emerald-500/20"}
					iconColorClass={"text-emerald-400"}
				/>

				<CaseStudyFaq
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-emerald-400"}
					activeChevronColorClass={"text-emerald-400"}
				/>

				<CaseStudyCta
					title={"Advisors spending more time on spreadsheets than on clients?"}
					description={"OpenGridLabs builds wealth management platforms — custodian aggregation, advisor workbench, client portal, and automated reporting — that give advisors their time back and let AUM grow."}
					moreCaseStudiesLink={"/services/bfsi"}
					glowBgClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-400"}
					btnGradientClass={"from-emerald-400 to-indigo-500"}
					btnShadowColor={"16,185,129,0.2"}
				/>
			</div>
		</>
	);
}
