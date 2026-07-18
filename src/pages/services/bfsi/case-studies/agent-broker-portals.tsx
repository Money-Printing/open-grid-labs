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
	{ value: "2×", label: "New business quote submissions", accent: "from-indigo-500 to-violet-600" },
	{ value: "48%", label: "Reduction in broker admin time per policy", accent: "from-indigo-500 to-violet-600" },
	{ value: "600", label: "Active brokers on the portal", accent: "from-indigo-500 to-violet-600" },
	{ value: "11 mo", label: "Portal live", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "Brokers requiring phone or email for every quote — 2–3 day response times for standard risks" },
	{ text: "No self-service MTA capability — every mid-term change requiring insurer contact" },
	{ text: "Monthly PDF commission statements — no self-service access to commission data" },
	{ text: "Underwriting team handling administrative queries rather than underwriting decisions" },
	{ text: "Renewal pipeline not visible to brokers — no proactive renewal management tools" }
];

const SOLUTIONS = [
	{ text: "Real-time quote-to-bind for all risks meeting automated underwriting criteria" },
	{ text: "Self-service MTA engine — address, named insured, coverage modification — without insurer contact" },
	{ text: "Commission portal with real-time statement access, payment tracking, and query management" },
	{ text: "Renewal pipeline dashboard — upcoming renewals, prior year terms, and one-click renewal initiation" },
	{ text: "Underwriting referral workflow — complex risks routed to underwriters with structured data" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Authentication", items: ["Broker firm management", "User roles (admin/trading/accounts)", "MFA", "Permission management"], color: "hsl(230,80%,60%)" },
	{ title: "Trading", items: ["Real-time rating", "STB eligibility", "Referral routing", "Policy bind", "Document generation"], color: "hsl(230,80%,60%)" },
	{ title: "Servicing", items: ["Self-service MTA", "Policy view", "Document vault", "Claims FNOL", "Renewal management"], color: "hsl(230,80%,60%)" },
	{ title: "Accounting", items: ["Commission statements", "Payment tracking", "Adjustment management", "API data export"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Quote-to-Bind and Core Servicing (Months 1–5)",
		desc: "OpenGridLabs built the broker authentication and firm management layer, the real-time quote-to-bind engine connected to the underwriting platform, and the core policy servicing capabilities — document vault, policy view, and renewal pipeline. The first 50 broker firms were onboarded in month 5.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Self-Service MTA & Commission Portal (Months 6–8)",
		desc: "The self-service MTA engine was built covering the most common adjustment types. The commission portal was built replacing the PDF email process with real-time self-service statement access. The underwriting referral workflow was built for complex risks outside automated appetite.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Full Rollout and Analytics (Months 9–11)",
		desc: "All 600 broker firms were onboarded. Broker activity analytics were built — showing quote volumes, conversion rates, and MTA volumes per broker — enabling the insurer's distribution team to identify and support low-engagement brokers proactively.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "New business quote submissions", before: "Baseline", after: "2× baseline", change: "2× baseline" },
	{ metric: "Quote-to-bind conversion", before: "Baseline", after: "+31%", change: "+31%" },
	{ metric: "Broker admin time per policy", before: "Baseline", after: "-48%", change: "-48%" },
	{ metric: "Underwriting team admin queries", before: "High volume", after: "-74% (self-service)", change: "-74%" },
	{ metric: "Broker satisfaction ranking", before: "Bottom quartile", after: "Top quartile", change: "Top quartile" },
	{ metric: "Commission query calls", before: "Frequent", after: "Near-zero (portal)", change: "Near-zero" }
];

const SUCCESS_FACTORS = [
	{
		title: "Ease of doing business is a distribution strategy",
		desc: "In commercial insurance, where brokers control placement, ease of doing business is as important as price and coverage. A broker who can get a real-time quote and bind a policy in 10 minutes will favour an insurer who enables that over one that requires a 2-day email exchange for the same transaction."
	},
	{
		title: "Self-service MTAs reduce the servicing burden and improve data quality",
		desc: "Every MTA handled by the insurer's internal team is a cost and a delay. Every MTA handled by the broker through a self-service portal is immediate, costs less, and produces structured data that goes directly into the policy system without re-keying error risk."
	},
	{
		title: "Commission visibility builds broker loyalty",
		desc: "Brokers care about commission accuracy and timing as much as they care about quote speed. Real-time commission statement access, payment tracking, and query management — replacing a monthly PDF process — is a loyalty mechanism that reduces the likelihood of a broker testing alternative markets."
	}
];

const FAQS = [
	{
		q: "What is quote-to-bind in commercial insurance?",
		a: "Quote-to-bind describes the full digital process from risk submission through to policy binding — the broker enters risk details, receives a real-time premium quote, and can bind the policy immediately without contacting the insurer. For risks within automated underwriting appetite, the entire process is completed digitally in minutes. Complex risks require referral to an underwriter."
	},
	{
		q: "How do broker portals affect commercial insurance distribution?",
		a: "Broker portals improve distribution by reducing the friction in the trading relationship — faster quotes, self-service servicing, better renewal management. They allow underwriting teams to focus on complex risks and appetite management rather than administrative requests. Insurers with better digital distribution platforms consistently capture higher volumes from common broker relationships than those relying on phone and email."
	}
];

export default function AgentBrokerPortalsCaseStudy() {
	return (
		<>
			<SEO
				title="Digital Broker Portal & Quote-to-Bind Case Study | OpenGridLabs"
				description="How a Digital Broker Portal Doubled New Business Submissions and Cut Broker Administration Time 48%."
				canonical="/services/bfsi/agent-broker-portals"
				keywords="Broker Portal, Insurance Distribution, Quote-to-Bind, Mid-Term Adjustment, Commission Management, Renewal Pipeline, Commercial Insurance, Agent Portal, InsurTech, Insurance Technology, OpenGridLabs"
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
					title="How a Digital Broker Portal Doubled New Business Submissions and Cut Broker Administration Time 48%"
					description="A commercial insurer distributing 80% of its business through brokers was losing market share to competitors with better digital broker tools. Brokers had to phone or email for quotes, call for mid-term adjustments, and wait days for policy documents. OpenGridLabs built a comprehensive broker portal: real-time quote-to-bind for standard risks, self-service MTAs, commission statements, and a renewal pipeline dashboard — doubling the number of quotes submitted and increasing conversion to bind 31%."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Commercial insurer (anonymised)" },
						{ label: "Distribution", value: "600 active brokers" },
						{ label: "Timeline", value: "11 months" },
						{ label: "Stack", value: "Quote-to-bind engine · MTA self-service · Commission API · Renewal pipeline" }
					]}
				/>

				<CaseStudyCarousel
					slug="agent-broker-portals"
					title="Agent Broker Portals"
					accentColor="indigo"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/agent-broker-portals/1.jpg",
						"/images/case-studies/agent-broker-portals/2.jpg"
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
						"Our client is a commercial insurer distributing through 600 active broker firms. Before the portal, a broker obtaining a quote required either a phone call to the underwriting team (which could mean a 30-minute wait) or submitting a risk by email and waiting 2–3 days for a response. Mid-term adjustments required another call or email. Commission statements were produced monthly in PDF and emailed to each broker. The experience was consistent with a 2005 distribution model — functional but uncompetitive against insurers offering real-time digital trading.",
						"The commercial consequence was measurable: broker satisfaction surveys ranked the insurer at the bottom quartile on ease of doing business, and new business submissions had been declining 8% year-on-year as brokers shifted volume to competitors with better portals. The underwriting team was spending significant time on administrative requests — quote status checks, document requests, MTA confirmations — that a self-service portal would eliminate entirely.",
						"A broker portal is a digital platform enabling insurance brokers to obtain quotes, bind policies, make mid-term adjustments, access policy documents, view commission statements, and manage their renewal pipeline — without requiring contact with the insurer's internal teams for routine transactions. Modern broker portals offer real-time quote-to-bind for standard risks, self-service MTAs, and data-driven renewal management tools."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is a Broker Portal?"
					definitionText="A broker portal is a digital platform enabling insurance brokers to obtain quotes, bind policies, make mid-term adjustments, access policy documents, view commission statements, and manage their renewal pipeline — without requiring contact with the insurer's internal teams for routine transactions. Modern broker portals offer real-time quote-to-bind for standard risks, self-service MTAs, and data-driven renewal management tools."
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
					description={"Evolving broker experiences from phone queries and slow turnarounds to automatic quote validations and structured referral queues."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Broker Portal Architecture"}
					description={"Broker firm authentication layers linked to quote-to-bind trading engines, servicing adjustments hubs, and automated billing panels."}
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
					description={"A systematic 3-phase roadmap leading from baseline quote engine setups to commission modules and full broker onboarding."}
					phaseColors={["hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)"]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults
					description="Doubling new quotes, reducing broker administration times, and maximizing broker portal satisfaction scores."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"Brokers place business where it is easiest to place business. We were the hardest insurer to work with in our segment. The portal didn't just improve our numbers — it changed the relationship. Brokers started calling us to ask about appetite, not to ask for documents."}
					author={"Commercial Director"}
					subtitle={"Confidential Commercial Insurer"}
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
					title={"Brokers placing business with competitors because yours is harder to deal with?"}
					description={"OpenGridLabs builds broker portals — real-time quote-to-bind, self-service MTAs, commission management, and renewal pipelines — that make your insurer the easiest to place business with."}
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
