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

const STATS = [
	{ value: "£2.1M", label: "Recovered reinsurance recoveries previously missed", accent: "from-indigo-500 to-violet-600" },
	{ value: "83%", label: "Reduction in bordereau processing time", accent: "from-indigo-500 to-violet-600" },
	{ value: "12 mo", label: "Platform live", accent: "from-indigo-500 to-violet-600" },
	{ value: "100%", label: "Recovery identification automated", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "£2.1M in missed recoveries identified in pre-engagement audit — manual calculation errors" },
	{ text: "3-week monthly bordereau cycle consuming the entire reinsurance accounting team's capacity" },
	{ text: "23 reinsurers receiving manually prepared bordereaux in different formats" },
	{ text: "No systematic recovery identification — claims reviewed individually by the accounts team" },
	{ text: "Treaty terms maintained in spreadsheets — no version control, no authoritative source" }
];

const SOLUTIONS = [
	{ text: "A treaty and facultative placement management system — authoritative source for all treaty terms" },
	{ text: "Automated bordereau generation from claims system data — all 23 reinsurers in their required format" },
	{ text: "Automated recovery identification and calculation against treaty terms for every qualifying claim" },
	{ text: "Reinsurer reporting portal — self-service access for reinsurers to their bordereau and account information" },
	{ text: "Recovery tracking — collection status per recovery, aged debt reporting, dispute management" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Treaty Management", items: ["Treaty terms", "Placement structure", "Layer schedule", "Reinsurer shares", "Authorisation limits"], color: "hsl(230,80%,60%)" },
	{ title: "Cession Engine", items: ["Claims data ingestion", "Treaty matching", "Cession calculation", "Bordereau generation", "Format per reinsurer"], color: "hsl(230,80%,60%)" },
	{ title: "Recovery Engine", items: ["XL recovery identification", "Proportional recovery", "Aggregate tracking", "Collection instruction"], color: "hsl(230,80%,60%)" },
	{ title: "Reporting", items: ["Reinsurer portal", "Account statements", "Aged debt", "Dispute workflow", "Management reporting"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Treaty Management and Data Migration (Months 1–4)",
		desc: "OpenGridLabs built the treaty management system and migrated all 23 reinsurer relationships — treaties, placement shares, and layer structures — from spreadsheets to the platform. This migration itself uncovered three treaty term ambiguities that had been resolved differently in different spreadsheets.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Bordereau Automation and Recovery Engine (Months 5–9)",
		desc: "Automated bordereau generation was built for all 23 reinsurers. The recovery engine was built and validated against the prior 3 years of claims data — identifying the missed recoveries retrospectively and quantifying the £2.1M figure with precision. Back-claims for the validated recoveries were submitted immediately.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Reinsurer Portal and Collection Workflow (Months 10–12)",
		desc: "The reinsurer portal was built — giving reinsurers self-service access to their bordereau and account information, reducing the reinsurance team's time answering reinsurer queries. The collection workflow was implemented for tracking and chasing outstanding recoveries.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Missed recoveries identified and claimed", before: "Not identified", after: "£2.1M recovered", change: "£2.1M recovered" },
	{ metric: "Monthly bordereau cycle", before: "3 weeks", after: "4 days", change: "-83%" },
	{ metric: "Recovery identification", before: "Manual review", after: "100% automated", change: "100% automated" },
	{ metric: "Treaty terms source of truth", before: "Spreadsheets (ambiguous)", after: "Platform (authoritative)", change: "Platform (authoritative)" },
	{ metric: "Reinsurance team capacity on reporting", before: "~75% of capacity", after: "~25%", change: "~25%" },
	{ metric: "Reinsurer query response time", before: "Days", after: "Hours (portal self-service)", change: "Hours (portal self-service)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Recovery automation is the primary commercial case",
		desc: "Manual reinsurance recovery calculation produces systematic understatement because the complexity of modern treaty structures — aggregate deductibles, reinstatements, currency clauses, franchise conditions — exceeds what is reliably calculable by hand at monthly pace. Automation that applies all treaty terms to every qualifying claim is structurally more accurate."
	},
	{
		title: "Treaty terms as an authoritative system record",
		desc: "A treaty managed in a spreadsheet is a document with no version control, no access management, and no validation against actual claims data. A treaty management system where terms are versioned, validated, and directly consumed by the cession engine eliminates the interpretation errors that cause both missed recoveries and overclaims."
	},
	{
		title: "Bordereau automation changes the accounting team's role",
		desc: "A reinsurance accounting team spending three weeks per month on bordereau preparation is a team where the skilled accounting work — dispute management, recovery optimisation, reinsurer relationship management — is being crowded out by data assembly. Automation returns this capacity to the work that requires judgement."
	}
];

const FAQS = [
	{
		q: "What is a bordereau in reinsurance?",
		a: "A bordereau is a detailed schedule of risks or claims submitted by a cedant insurer to its reinsurers under a proportional reinsurance arrangement, providing the information needed for reinsurers to verify their liabilities and calculate premium cessions or loss recoveries. Bordereaux are typically prepared monthly and must be provided in the format and within the timescale specified in the reinsurance treaty."
	},
	{
		q: "What is the difference between proportional and non-proportional reinsurance?",
		a: "Proportional reinsurance shares both premium and losses between the cedant and reinsurer in agreed proportions from the first dollar of loss. Non-proportional (excess-of-loss) reinsurance pays losses above a defined retention up to a defined limit, with the cedant retaining all losses below the threshold. Proportional requires regular bordereau cession; non-proportional requires recovery identification when losses breach the retention."
	}
];

export default function ReinsurancePlatformsCaseStudy() {
	return (
		<>
			<SEO
				title="Reinsurance Management Platform Case Study | OpenGridLabs"
				description="How a Digital Reinsurance Platform Recovered £2.1M in Missed Reinsurance Recoveries."
				canonical="/services/bfsi/reinsurance-platforms"
				keywords="Reinsurance Platform, Bordereau Processing, Treaty Management, Reinsurance Recoveries, Facultative Reinsurance, Excess-of-Loss, Reinsurance Accounting, Cession Calculation, InsurTech, Insurance Technology, OpenGridLabs"
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
					title="How a Digital Reinsurance Platform Recovered £2.1M in Missed Reinsurance Recoveries"
					description="A specialty insurer with a complex reinsurance programme was managing its treaties and facultative placements through a combination of spreadsheets and email — monthly bordereau preparation taking 3 weeks, recovery calculations performed manually, and reinsurer reporting done by the finance team rather than from a system. An audit uncovered £2.1M in legitimate recoveries that had not been claimed. OpenGridLabs built a reinsurance management platform that automated bordereau processing, automated recovery identification, and reduced the bordereau cycle from 3 weeks to 4 days."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Specialty insurer (anonymised)" },
						{ label: "Scope", value: "Proportional + non-proportional treaties, facultative" },
						{ label: "Timeline", value: "12 months" },
						{ label: "Stack", value: "Treaty management · Bordereau processing · Recovery tracking · Reinsurer reporting" }
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
						"Our client is a specialty insurer with a reinsurance programme covering property, casualty, and marine lines through a combination of proportional quota share, excess-of-loss treaties, and facultative placements with 23 reinsurers. The programme management was spreadsheet-based: treaty terms maintained in Excel, monthly bordereaux prepared by the reinsurance accounting team from claims system exports, and recoveries calculated manually against treaty terms. The team of four was spending the majority of each month on bordereau preparation.",
						"The recovery audit that preceded the OpenGridLabs engagement identified £2.1M in legitimate recoveries that had not been claimed — primarily from excess-of-loss treaties where the manual recovery calculation had underestimated the recoverable amount or missed qualifying events entirely. The cause was not negligence but structural: manual recovery calculation against complex treaty terms, without systematic validation, produces systematic understatement. The audit finding was the commercial case for the platform investment.",
						"A reinsurance management platform manages the administrative and financial lifecycle of a cedant insurer's reinsurance programme — treaty terms and placement details, monthly bordereau preparation, cession calculations, recovery tracking, and reinsurer accounting. It integrates with the insurer's claims and policy systems to automatically identify claims that qualify for reinsurance recovery under treaty terms, calculate the recoverable amount, and track collection from reinsurers. Automation eliminates the manual calculation errors and process gaps that result in missed or understated recoveries."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="⚡ What Is a Reinsurance Management Platform?"
					definitionText="A reinsurance management platform manages the administrative and financial lifecycle of a cedant insurer's reinsurance programme — treaty terms and placement details, monthly bordereau preparation, cession calculations, recovery tracking, and reinsurer accounting. It integrates with the insurer's claims and policy systems to automatically identify claims that qualify for reinsurance recovery under treaty terms, calculate the recoverable amount, and track collection from reinsurers. Automation eliminates the manual calculation errors and process gaps that result in missed or understated recoveries."
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
					description={"Replacing spreadsheet dependencies with secure, database-driven treaty terms and automated cession calculation pipelines."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Reinsurance Platform Architecture"}
					description={"A centralized treaty ledger directing data into automated cession calculations, recovery trackers, and self-service reinsurer dashboards."}
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
					description={"A systematic 12-month delivery path starting with data migrations and culminating in self-service query workflows."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Recovering millions in previously unclaimed assets, automating data delivery times, and optimizing operational capacity."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The audit found £2.1M we hadn't claimed. The honest reason was that calculating excess-of-loss recoveries manually, across 23 reinsurers, against complex treaty terms, was an impossible task to do perfectly every month. The platform does it systematically. We haven't missed a recovery since."}
					author={"Head of Reinsurance"}
					subtitle={"Confidential Specialty Insurer"}
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
					title={"Reinsurance team spending three weeks a month on manual bordereau preparation?"}
					description={"OpenGridLabs builds reinsurance management platforms — automated bordereau, systematic recovery identification, and reinsurer portals — that recover what's owed and free your team for relationship management."}
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
