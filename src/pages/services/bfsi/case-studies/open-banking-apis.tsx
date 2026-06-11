import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	ShieldCheck, 
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
	{ value: "£2.4M", label: "New API-driven revenue in year one", accent: "from-emerald-500 to-teal-600" },
	{ value: "100%", label: "PSD2 compliance — passed FCA audit", accent: "from-amber-500 to-yellow-600" },
	{ value: "47", label: "Active third-party providers integrated", accent: "from-blue-500 to-cyan-600" },
	{ value: "12 mo", label: "Compliance and commercial programme", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "PSD2 compliance deadline with significant penalties for non-compliance" },
	{ text: "Minimum viable approach would have produced APIs too poor to attract fintech partnerships" },
	{ text: "No developer portal — third-party integration requiring direct bank contact and slow manual onboarding" },
	{ text: "OAuth 2.0 and FAPI security profile implementation not present in the current architecture" },
	{ text: "No consent management system — customer consent for third-party access not tracked or revocable" }
];

const SOLUTIONS = [
	{ text: "PSD2-compliant AISP and PISP APIs built to FAPI (Financial-grade API) security profile" },
	{ text: "A developer portal with full API documentation, sandbox environment, and self-service onboarding" },
	{ text: "A consent management dashboard — customers can view and revoke third-party access in real time" },
	{ text: "API monetisation framework — tiered access levels with premium data enrichment for commercial partners" },
	{ text: "A fintech partnership programme offering dedicated support and joint go-to-market for strategic TPPs" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Security", items: ["OAuth 2.0", "FAPI security profile", "mTLS", "JWS signing", "PKCE", "Token management"], color: "hsl(38,100%,50%)" },
	{ title: "API Gateway", items: ["Rate limiting", "Version management", "Request validation", "Consent verification", "Audit logging"], color: "hsl(145,100%,45%)" },
	{ title: "Consent", items: ["Consent capture", "Granular permissions", "Revocation", "Consent history", "Regulatory audit trail"], color: "hsl(200,100%,50%)" },
	{ title: "Developer Portal", items: ["API documentation", "Sandbox", "Self-service registration", "API keys", "Usage analytics", "Partnership programme"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "PSD2 Compliance Foundation (Months 1–5)",
		desc: "OpenGridLabs built the AISP and PISP APIs to the Open Banking UK specification and FAPI security profile, integrated with the bank's core banking and identity systems. The consent management system was built, giving customers real-time visibility of all active third-party consents. The FCA compliance audit was passed in month 5.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Developer Portal & Self-Service Onboarding (Months 6–8)",
		desc: "The developer portal was built with comprehensive documentation, an interactive API sandbox, and a self-service TPP onboarding flow that reduced time-to-first-API-call from 6 weeks (manual process) to 3 days. The API sandbox allowed developers to test integrations without requiring access to production customer data.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Commercial Programme & Partnership Development (Months 9–12)",
		desc: "An API monetisation framework was launched with three tiers: free (compliance minimum), standard (enriched data, higher rate limits), and enterprise (dedicated support, joint marketing). 47 active TPPs were onboarded by month 12, with 8 commercial partnerships generating the £2.4M revenue figure.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "PSD2 compliance", before: "Non-compliant", after: "Passed FCA audit", change: "Passed FCA audit" },
	{ metric: "Active TPP integrations", before: "0", after: "47", change: "47" },
	{ metric: "API-driven revenue", before: "£0", after: "£2.4M (year 1)", change: "£2.4M (year 1)" },
	{ metric: "TPP onboarding time", before: "6 weeks (manual)", after: "3 days (self-service)", change: "3 days (self-service)" },
	{ metric: "Customer consent revocation", before: "Not possible", after: "Real-time self-service", change: "Real-time self-service" },
	{ metric: "Developer satisfaction score", before: "—", after: "4.6/5", change: "4.6/5" }
];

const SUCCESS_FACTORS = [
	{
		title: "Developer experience determines partnership quality",
		desc: "A bank that treats Open Banking as a compliance obligation produces APIs that fintechs avoid. A bank that invests in documentation, sandbox, and self-service onboarding becomes the preferred banking partner for fintech developers. Developer experience is the commercial strategy."
	},
	{
		title: "Consent management builds customer trust",
		desc: "A customer who can see and revoke every active third-party consent in real time from their banking portal is a customer who trusts their bank's data governance. Consent visibility is both a regulatory requirement and a trust-building feature."
	},
	{
		title: "Tiered monetisation unlocks commercial value",
		desc: "Compliance APIs provide the floor. Enriched data products, higher rate limits, and enterprise partnership programmes built on top of the compliance foundation generate commercial returns that far exceed the compliance investment."
	}
];

const FAQS = [
	{
		q: "What is the difference between AISP and PISP in Open Banking?",
		a: "An AISP (Account Information Service Provider) accesses customer account data — balances, transactions, account details — with customer consent, typically for services like account aggregation or credit assessment. A PISP (Payment Initiation Service Provider) initiates payment transactions directly from a customer's account, bypassing card networks, for services like account-to-account payments."
	},
	{
		q: "What is FAPI and why is it required for Open Banking APIs?",
		a: "FAPI (Financial-grade API) is a security profile built on OAuth 2.0 that provides additional protections required for financial services APIs — including mutual TLS, PAR (Pushed Authorisation Requests), and stronger token binding. It is required for PSD2-compliant Open Banking APIs because the standard OAuth 2.0 profile does not provide sufficient security for access to sensitive financial data."
	}
];

export default function OpenBankingApisCaseStudy() {
	return (
		<>
			<SEO
				title="Open Banking API Platform Case Study | OpenGridLabs"
				description="How PSD2-Compliant Open Banking APIs Turned a Regulatory Obligation into a £2.4M New Revenue Stream."
				canonical="/services/bfsi/open-banking-apis"
				keywords="Open Banking API, PSD2, AISP, PISP, FAPI, Developer Portal, Consent Management, API Monetisation, FinTech, Regulatory Compliance, OpenGridLabs"
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
					categoryTag="Case Study · Open Banking APIs"
					title="How PSD2-Compliant Open Banking APIs Turned a Regulatory Obligation into a £2.4M New Revenue Stream"
					description="A regional bank facing PSD2 compliance deadlines treated Open Banking as a regulatory checkbox — build the minimum required APIs, pass the compliance audit, and move on. OpenGridLabs argued for a different approach: build APIs that are genuinely excellent, publish them through a developer portal with real documentation, and position the bank as a partner to the fintech ecosystem rather than a reluctant participant. The compliance was achieved on time and the APIs generated £2.4M in new revenue in their first year."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Regional bank (anonymised)" },
						{ label: "Scale", value: "PSD2 AISP + PISP APIs, developer portal" },
						{ label: "Timeline", value: "12 months to compliance + revenue programme" },
						{ label: "Stack", value: "API gateway · OAuth 2.0 · FAPI · Consent management · Developer portal" }
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
						"Our client is a regional bank with strong deposit and lending businesses but limited digital product development capability. The PSD2 compliance deadline was approaching and the technical team had scoped the minimum viable approach: implement the required AISP and PISP APIs, publish them to the Open Banking directory, pass the audit, and document the project as complete. OpenGridLabs reviewed the scope and proposed a different question: what if the APIs were an asset rather than a cost?",
						"Open Banking APIs built to the minimum standard produce minimum engagement — third-party providers encounter documentation gaps, reliability issues, and a developer experience that signals the bank is not interested in partnership. Open Banking APIs built to an excellent standard attract fintechs, generate commercial partnerships, and give the bank distribution in digital contexts it couldn't build itself. The compliance budget was the baseline; the commercial programme built on top of it generated the revenue.",
						"Open Banking APIs allow regulated third-party providers (TPPs) to access bank account data (AISP — Account Information Service Provider) and initiate payments (PISP — Payment Initiation Service Provider) through standardised interfaces, with explicit customer consent. Required under PSD2 in Europe and its equivalent frameworks globally, Open Banking APIs can be treated as a compliance obligation or as a commercial platform — the difference is the quality of the implementation and the developer experience."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Are Open Banking APIs?"
					definitionText="Open Banking APIs allow regulated third-party providers (TPPs) to access bank account data (AISP — Account Information Service Provider) and initiate payments (PISP — Payment Initiation Service Provider) through standardised interfaces, with explicit customer consent. Required under PSD2 in Europe and its equivalent frameworks globally, Open Banking APIs can be treated as a compliance obligation or as a commercial platform — the difference is the quality of the implementation and the developer experience."
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
					description={"Deploying a reliable compliant environment while capitalizing on commercial partner integrations."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[ShieldCheck, Cpu, Database, Server]}
					tag={"Technical Design"}
					title={"Open Banking API Platform Architecture"}
					description={"A secure dynamic API ecosystem designed for low latency, granular consent lifecycle administration, and developer-first sandboxes."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout the engagement."}
					rightColumnTitle={"API Platform Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A phased 12-month delivery model achieving core compliance audits before initiating ecosystem monetization."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="The developer-first approach shortened onboarding and successfully drove new revenue channels."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We went in planning to do the minimum required. OpenGridLabs made the case for doing it properly, and the revenue case proved them right in the first year. The best decision we made was treating the APIs as a product, not a compliance task."}
					author={"Chief Operating Officer"}
					subtitle={"Confidential Regional Bank"}
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
					title={"Treating Open Banking as a compliance checkbox?"}
					description={"OpenGridLabs builds Open Banking API platforms — PSD2-compliant, developer-first, and commercially positioned — that turn a regulatory obligation into a revenue-generating partnership ecosystem."}
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
