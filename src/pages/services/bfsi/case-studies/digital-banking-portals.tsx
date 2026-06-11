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
	{ value: "41%", label: "Reduction in branch visits", accent: "from-emerald-500 to-teal-600" },
	{ value: "28 pt", label: "NPS improvement", accent: "from-amber-500 to-yellow-600" },
	{ value: "94%", label: "Routine requests handled self-service", accent: "from-blue-500 to-cyan-600" },
	{ value: "14 mo", label: "Discovery to full production launch", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "Legacy 2016 portal built for desktop — 62% of sessions on mobile getting a broken experience" },
	{ text: "Routine requests (address change, direct debit cancellation, statements) requiring branch or phone" },
	{ text: "Slow page load times averaging 8.2 seconds on mobile, driving abandonment" },
	{ text: "No secure messaging — customer queries going to an unmonitored public email address" },
	{ text: "PSD2 Open Banking obligations not implemented — regulatory non-compliance risk" }
];

const SOLUTIONS = [
	{ text: "Rebuilt portal in React with server-side rendering — mobile-first, sub-2-second load times" },
	{ text: "Self-service request engine covering 47 routine request types with status tracking" },
	{ text: "Secure in-portal messaging with SLA-governed response routing to specialist teams" },
	{ text: "Document vault with upload, e-signature, and regulatory document delivery" },
	{ text: "Full PSD2 compliance including Strong Customer Authentication and open banking consent management" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Frontend", items: ["React SPA", "Mobile-first responsive", "Biometric authentication", "Progressive Web App"], color: "hsl(38,100%,50%)" },
	{ title: "Service Layer", items: ["Request orchestration", "Notification engine", "Document management", "Secure messaging"], color: "hsl(145,100%,45%)" },
	{ title: "Integration", items: ["Core banking API gateway", "Payment rails", "Identity verification", "E-signature", "PSD2 AISP/PISP"], color: "hsl(200,100%,50%)" },
	{ title: "Security", items: ["MFA/biometric auth", "Session management", "Fraud signals", "Audit logging", "Data encryption at rest"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Discovery & Core Account Journey (Months 1–4)",
		desc: "OpenGridLabs conducted 24 customer research sessions and a full audit of the top 50 support call types. The core account management journey — login, account overview, transaction history, payments — was rebuilt first, with mobile-first design validated in usability testing before any development.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Self-Service Engine & Secure Messaging (Months 5–9)",
		desc: "The self-service request engine was built covering 47 request types, each with a defined handling workflow, SLA, and notification sequence. Secure messaging replaced email for customer queries. Document upload and e-signature were integrated for the requests requiring supporting documentation.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "PSD2 Compliance, Open Banking & Launch (Months 10–14)",
		desc: "PSD2 Strong Customer Authentication was implemented and Open Banking consent management was built. The portal was migrated from the legacy system with a 90-day dual-run before the legacy portal was retired.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Branch visits for routine requests", before: "Baseline", after: "-41%", change: "-41%" },
	{ metric: "NPS", before: "Baseline", after: "+28 pts", change: "+28 pts" },
	{ metric: "Routine requests handled without staff", before: "~40%", after: "94%", change: "94%" },
	{ metric: "Mobile session experience", before: "Poor (not responsive)", after: "Mobile-first", change: "Mobile-first" },
	{ metric: "Page load time (mobile)", before: "8.2 seconds", after: "1.6 seconds", change: "1.6 seconds" },
	{ metric: "PSD2 compliance", before: "Non-compliant", after: "Fully compliant", change: "Fully compliant" }
];

const SUCCESS_FACTORS = [
	{
		title: "Self-service requires completeness, not just coverage",
		desc: "A portal that handles 80% of routine requests and requires a branch visit for the other 20% will receive complaints about the 20% regardless of the 80%. Designing for 94% coverage — including the long tail of less-frequent request types — was what made self-service genuinely viable for customers."
	},
	{
		title: "Mobile-first is not mobile-compatible",
		desc: "Responsive design that starts from desktop and adapts for mobile produces different results than design that starts from mobile and enhances for desktop. The 62% of customers using mobile deserved a first-class experience, not an adapted one."
	},
	{
		title: "Secure messaging changes the support model",
		desc: "Routing customer queries to an unmonitored email address was creating both a service failure and a security risk. In-portal secure messaging with SLA routing and tracked response status transformed the support channel from a liability into a managed, auditable service."
	}
];

const FAQS = [
	{
		q: "What is PSD2 and why does it matter for digital banking portals?",
		a: "PSD2 is the EU's Revised Payment Services Directive, requiring banks to implement Strong Customer Authentication (SCA) for online transactions and to provide Open Banking APIs allowing regulated third parties to access account data (AISP) and initiate payments (PISP) with customer consent. Non-compliance carries significant regulatory penalties."
	},
	{
		q: "What is the difference between internet banking and open banking?",
		a: "Internet banking is the bank's own digital portal through which customers manage their accounts. Open banking allows regulated third-party providers to access customer account data or initiate payments through standardised APIs, with customer consent, enabling services like account aggregation and payment initiation from non-bank applications."
	}
];

export default function DigitalBankingPortalsCaseStudy() {
	return (
		<>
			<SEO
				title="Digital Banking Portal Modernisation Case Study | OpenGridLabs"
				description="How a Modern Digital Banking Portal Reduced Branch Visits 41% and Let Customers Manage Everything without staff intervention."
				canonical="/services/bfsi/digital-banking-portals"
				keywords="Digital Banking Portal, Online Banking, Self-Service Banking, Omnichannel Banking, PSD2, Open Banking, Retail Banking, Banking UX, FinTech, OpenGridLabs"
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
					categoryTag="Case Study · Digital Banking Portal"
					title="How a Modern Digital Banking Portal Reduced Branch Visits 41% and Let Customers Manage Everything Without Picking Up the Phone"
					description="A retail bank's online portal had been built in 2016 and patched repeatedly since — slow, poorly designed on mobile, and incapable of handling routine requests that still required a branch visit or a call. OpenGridLabs rebuilt the digital banking portal from the ground up: account management, payments, document upload, secure messaging, and a self-service request engine that processed 94% of routine requests without staff intervention."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Retail bank (anonymised)" },
						{ label: "Scale", value: "680,000 retail customers" },
						{ label: "Timeline", value: "14 months" },
						{ label: "Stack", value: "React · Node.js · Core banking APIs · PSD2 · Biometric auth" }
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
						"Our client is a retail bank serving 680,000 customers across a regional network. Their digital banking portal had been built as a transaction-viewing tool and extended by bolting on additional features over eight years — the result was a portal that customers used to check balances and then called the branch to do anything else. Mobile usage had grown to 62% of sessions, but the portal was not responsive. The most common support calls were for services the portal should have provided: address changes, direct debit management, statement requests, and payment disputes.",
						"Every routine request handled by a branch or call centre cost the bank significantly more than the same request handled digitally. But the portal's limitations meant customers had no realistic digital alternative for most service requests. OpenGridLabs rebuilt the portal as a genuine self-service channel — not just a window onto account data, but a complete service interface where every request a customer legitimately needed to make could be submitted, tracked, and resolved without human intervention for the 94% of cases that didn't require exception handling.",
						"A digital banking portal is the web or mobile interface through which retail or business banking customers manage their accounts, initiate payments, access documents, and submit service requests. Modern digital banking portals are omnichannel — providing a consistent experience across web and mobile — and self-service: capable of handling the full range of customer requests without requiring branch visits or call centre interactions for routine transactions."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is a Digital Banking Portal?"
					definitionText="A digital banking portal is the web or mobile interface through which retail or business banking customers manage their accounts, initiate payments, access documents, and submit service requests. Modern digital banking portals are omnichannel — providing a consistent experience across web and mobile — and self-service: capable of handling the full range of customer requests without requiring branch visits or call centre interactions for routine transactions."
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
					description={"Replacing outdated legacy layouts and slow integrations with responsive, secure self-service channels."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Portal System Architecture"}
					description={"A secure, multi-layered digital architecture unifying client interfaces, transaction services, and secure back-office core pipelines."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout the engagement."}
					rightColumnTitle={"Omnichannel Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A phased design and integration lifecycle resolving customer-facing friction and API connectivity."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Deploying a complete web and mobile self-service portal directly reduced branch overhead and boosted customer satisfaction."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The measure we cared about most was branch visits for things that shouldn't need a branch visit. We reduced it 41% in the first year. That's not just cost — it's customers getting an hour of their day back for something they used to have to queue for."}
					author={"Chief Digital Officer"}
					subtitle={"Confidential Retail Bank"}
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
					title={"Customers still calling the branch for things your portal should handle?"}
					description={"OpenGridLabs builds digital banking portals — mobile-first, self-service, and PSD2-compliant — that give customers a complete digital channel and reduce your cost-to-serve."}
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
