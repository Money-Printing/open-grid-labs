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
	{ value: "83%", label: "Reduction in cross-border payment failures", accent: "from-emerald-500 to-teal-600" },
	{ value: "£2.8B", label: "Annual SWIFT volume on new infrastructure", accent: "from-amber-500 to-yellow-600" },
	{ value: "Real-time", label: "gpi status tracking for all SWIFT payments", accent: "from-blue-500 to-cyan-600" },
	{ value: "13 mo", label: "Infrastructure modernisation", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "On-premises SWIFT Alliance Access infrastructure approaching end-of-life, expensive to maintain" },
	{ text: "SWIFT gpi not implemented — no end-to-end payment tracking capability" },
	{ text: "Cross-border payment failures at 3.1%, resolved by manual email to correspondent banks" },
	{ text: "Corporate clients with no payment status visibility between initiation and confirmation" },
	{ text: "ISO 20022 MX format requirements for new payment rails not supported by the legacy infrastructure" }
];

const SOLUTIONS = [
	{ text: "Migration to SWIFT Alliance Cloud — managed SWIFT connectivity eliminating on-premises infrastructure" },
	{ text: "SWIFT gpi implementation providing UETR tracking for all cross-border payments" },
	{ text: "A corporate payment portal with real-time gpi status tracking for client-initiated payments" },
	{ text: "Automated SWIFT fail investigation workflow reducing mean resolution time from days to hours" },
	{ text: "ISO 20022 MX message support alongside MT coexistence for the migration period" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Connectivity", items: ["SWIFT Alliance Cloud", "BIC directory", "Correspondent networks", "Message validation"], color: "hsl(38,100%,50%)" },
	{ title: "gpi Tracker", items: ["UETR generation", "gpi integration", "Status processing", "SLA monitoring"], color: "hsl(145,100%,45%)" },
	{ title: "Processing", items: ["Message transformation (MT/MX)", "Sanctions screening", "Payment routing", "Accounting entries"], color: "hsl(200,100%,50%)" },
	{ title: "Client Portal", items: ["Real-time status display", "gpi tracker widget", "Fail notifications", "Historical reports"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Alliance Cloud Migration (Months 1–5)",
		desc: "OpenGridLabs led the migration from SWIFT Alliance Access on-premises to SWIFT Alliance Cloud — the managed connectivity service — eliminating the on-premises hardware, the specialist administration burden, and the infrastructure maintenance contract. All existing payment flows were migrated with a 60-day parallel run validating message processing before the on-premises system was decommissioned.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "gpi Implementation & Corporate Portal (Months 6–10)",
		desc: "SWIFT gpi was implemented across all outbound SWIFT payment types. The corporate client portal was built with real-time gpi status feeds — showing SWIFT payment status at each correspondent bank in the chain, from initiation to beneficiary credit confirmation. Corporate clients received portal access in month 10.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Automated Fail Management & ISO 20022 (Months 11–13)",
		desc: "An automated SWIFT fail investigation workflow was built — identifying the fail type, initiating the appropriate correspondent query, and tracking resolution — reducing mean resolution time from 3.2 days to 4 hours for standard fail types. ISO 20022 MX message support was added to prepare for the mandatory SWIFT migration deadline.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Cross-border payment failure rate", before: "3.1%", after: "0.53%", change: "-83%" },
	{ metric: "Mean fail resolution time", before: "3.2 days", after: "4 hours", change: "4 hours" },
	{ metric: "Corporate payment visibility", before: "None (phone enquiries)", after: "Real-time gpi portal", change: "Real-time gpi portal" },
	{ metric: "SWIFT infrastructure cost", before: "High (on-premises)", after: "Reduced (managed cloud)", change: "Reduced cost" },
	{ metric: "ISO 20022 readiness", before: "Not prepared", after: "MX-capable", change: "MX-capable" },
	{ metric: "Corporate client status enquiry calls", before: "High volume", after: "Minimal", change: "Minimal" }
];

const SUCCESS_FACTORS = [
	{
		title: "gpi fundamentally changes the cross-border payment experience",
		desc: "Before gpi, an international payment was a black box — money sent, confirmation eventually received, with no visibility of what happened in between. gpi UETR tracking makes every step in the correspondent chain visible, transforming the client experience and dramatically reducing investigation volume for the operations team."
	},
	{
		title: "Alliance Cloud eliminates infrastructure maintenance burden",
		desc: "Managing SWIFT Alliance Access on-premises requires certified SWIFT administrators, hardware maintenance contracts, and specialist knowledge that is increasingly scarce and expensive. Alliance Cloud transfers that responsibility to SWIFT, allowing the bank's operations team to focus on payment services rather than connectivity infrastructure."
	},
	{
		title: "Automated fail investigation changes the operations model",
		desc: "A payment failure that triggers an automated investigation workflow — identifying the fail type, querying the correspondent bank through a structured channel, and tracking resolution — is resolved in hours. The same failure handled by email chain between treasury operations teams takes days. The automation makes the operations team more effective, not smaller."
	}
];

const FAQS = [
	{
		q: "What is a UETR in SWIFT gpi?",
		a: "A UETR (Unique End-to-End Transaction Reference) is a 36-character identifier assigned to each SWIFT gpi payment at initiation and carried through every message in the payment chain, enabling end-to-end status tracking from the originating bank to the beneficiary account credit."
	},
	{
		q: "What is the difference between SWIFT MT and MX formats?",
		a: "SWIFT MT (Message Type) is the legacy format — fixed-field, relatively limited in data capacity. SWIFT MX is the ISO 20022-based XML format — richer, more structured, and capable of carrying the complete payment data required by modern payment rails and regulatory frameworks. SWIFT is mandating migration from MT to MX across all payment message types, with mandatory adoption in 2025."
	}
];

export default function SwiftIntegrationCaseStudy() {
	return (
		<>
			<SEO
				title="SWIFT Integration & gpi Migration Case Study | OpenGridLabs"
				description="How Modernised SWIFT Integration Reduced Cross-Border Payment Failures 83% and Gave Corporates End-to-End Payment Visibility."
				canonical="/services/bfsi/swift-integration"
				keywords="SWIFT Integration, SWIFT gpi, SWIFT Alliance Cloud, UETR, ISO 20022, Correspondent Banking, International Payments, SWIFT MT MX, Banking Technology, OpenGridLabs"
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
					categoryTag="Case Study · Banking & Financial Technology"
					title="How Modernised SWIFT Integration Reduced Cross-Border Payment Failures 83% and Gave Corporates End-to-End Payment Visibility"
					description="A commercial bank was operating on ageing SWIFT Alliance Access infrastructure — expensive to maintain, requiring specialist knowledge, and unable to support SWIFT gpi for payment status tracking. Cross-border payment failures were running at 3.1%, with investigations requiring manual email chains with correspondent banks taking days to resolve. OpenGridLabs modernised the SWIFT infrastructure, implemented gpi tracking, and built a corporate client portal providing real-time cross-border payment visibility."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Commercial bank (anonymised)" },
						{ label: "Scale", value: "£2.8B annual cross-border payment volume" },
						{ label: "Timeline", value: "13 months" },
						{ label: "Stack", value: "SWIFT Alliance Cloud · gpi · ISO 20022 · Corporate payment portal" }
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
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a commercial bank with £2.8 billion in annual cross-border payment volume, predominantly supporting a corporate client base with international trade and treasury requirements. The SWIFT infrastructure was SWIFT Alliance Access on-premises — hardware requiring specialist administration, a maintenance contract consuming a significant infrastructure budget, and a software version no longer receiving feature updates. SWIFT gpi (Global Payments Innovation) — the standard for same-day cross-border payment execution and tracking — was not implemented.",
						"The operational consequences were significant. Cross-border payment failures at 3.1% required manual investigation — a treasury operations team member composing emails to correspondent banks and waiting days for responses. Corporate clients had no visibility of payment status between initiation and credit confirmation, generating frequent phone enquiries to the bank's trade finance desk. The SWIFT Alliance Access infrastructure was approaching end-of-life, making the modernisation a deadline-driven necessity as well as a capability improvement.",
						"SWIFT gpi (Global Payments Innovation) is a SWIFT initiative providing same-day cross-border payment execution, end-to-end payment status tracking via a Unique End-to-End Transaction Reference (UETR), and confirmation of credit to the beneficiary account — dramatically improving transparency and speed compared to legacy correspondent banking arrangements."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is SWIFT gpi?"
					definitionText="SWIFT gpi (Global Payments Innovation) is a SWIFT initiative providing same-day cross-border payment execution, end-to-end payment status tracking via a Unique End-to-End Transaction Reference (UETR), and confirmation of credit to the beneficiary account — dramatically improving transparency and speed compared to legacy correspondent banking arrangements."
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
					description={"Modernising legacy on-premises SWIFT infrastructure, enabling tracking, and automating manual query workflows."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"SWIFT Integration Architecture"}
					description={"Managed cloud connectivity integrated with gpi tracker engines, payment transformation workflows, and client dashboard feeds."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout every engagement, not afterthoughts addressed at review."}
					rightColumnTitle={"Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 3-phase roadmap leading from Alliance Cloud setup to portal deployment and fail management automation."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Transforming opaque correspondent chains into clear status updates and automated resolution flows."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Corporates were calling us every time an international payment didn't confirm on the day they expected it. The gpi portal gave them what they needed without a phone call. Our trade finance desk's phone volume for payment enquiries dropped 78% in the first month."}
					author={"Head of Transaction Banking"}
					subtitle={"Confidential Commercial Bank"}
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
					title={"Legacy SWIFT infrastructure approaching end-of-life with no gpi capability?"}
					description={"OpenGridLabs modernises SWIFT infrastructure — Alliance Cloud migration, gpi tracking, ISO 20022 MX support, and corporate payment portals — that reduces failures and gives clients the visibility they expect."}
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
