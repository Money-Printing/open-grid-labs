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
	{ value: "39%", label: "Reduction in contact centre volume", accent: "from-indigo-500 to-violet-600" },
	{ value: "8 pts", label: "Lift in renewal retention rate", accent: "from-indigo-500 to-violet-600" },
	{ value: "800K", label: "Policyholders on the portal", accent: "from-indigo-500 to-violet-600" },
	{ value: "13 mo", label: "Full portal live", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "No self-service transactions — every interaction requiring a contact centre call" },
	{ text: "3.2M annual contact centre contacts with 74% being self-serviceable transactions" },
	{ text: "No digital renewal channel — post renewal notices with passive follow-up" },
	{ text: "Policy documents only available by post or via inbound request" },
	{ text: "No mobile capability — 63% of digital sessions on mobile with no responsive design" }
];

const SOLUTIONS = [
	{ text: "A comprehensive policyholder portal — policy view, MTA, FNOL, documents, renewals — on web and mobile" },
	{ text: "Self-service MTA engine covering all common adjustment types without agent involvement" },
	{ text: "Digital FNOL — structured claim intake with image upload replacing phone FNOL for simple claims" },
	{ text: "Document vault with all policy documents, renewal notices, and claim correspondence" },
	{ text: "Proactive renewal flow — email and push engagement, live quote comparison, one-click renewal" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Frontend", items: ["React SPA", "Mobile-first responsive", "Push notifications", "Biometric login", "Offline document access"], color: "hsl(230,80%,60%)" },
	{ title: "Transactions", items: ["MTA engine", "FNOL intake", "Renewal flow", "Payment management", "Document vault"], color: "hsl(230,80%,60%)" },
	{ title: "Integration", items: ["Policy API", "Claims system", "Document management", "Payment gateway", "Communication platform"], color: "hsl(230,80%,60%)" },
	{ title: "Security", items: ["MFA auth", "Session management", "Data encryption", "GDPR consent management", "Audit logging"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Core Policy View and Document Vault (Months 1–4)",
		desc: "OpenGridLabs built the portal foundation: authentication, policy view, and document vault. These were launched first — the lowest-risk, highest-visibility capability that immediately provided value to policyholders and reduced document request contact centre contacts.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "MTA Engine and FNOL (Months 5–9)",
		desc: "The self-service MTA engine was built covering address change, additional driver, vehicle change, and coverage modification. Digital FNOL was launched for motor and home claims. Each was validated against the contact centre handling process to confirm the portal was producing legally and contractually correct outcomes.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Renewal Flow and Notification Engine (Months 10–13)",
		desc: "The proactive renewal flow was built: automated email and push notification sequences commencing 42 days before renewal, live quote display with adjustment capability, and one-click renewal. The renewal retention improvement was the most commercially significant outcome of the portal programme.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Contact centre volume", before: "3.2M contacts/year", after: "-39% (1.95M)", change: "-39% (1.95M)" },
	{ metric: "Renewal retention rate", before: "Baseline", after: "+8 percentage points", change: "+8 percentage points" },
	{ metric: "Digital transaction capability", before: "Document download only", after: "68% of transaction types", change: "68%" },
	{ metric: "Average contact centre wait time", before: "Elevated", after: "Reduced (lower volume)", change: "Reduced wait time" },
	{ metric: "Document request contacts", before: "High volume", after: "Near-zero (vault self-service)", change: "Near-zero" },
	{ metric: "Mobile portal experience", before: "None (no responsive)", after: "Native-quality mobile", change: "Native mobile" }
];

const SUCCESS_FACTORS = [
	{
		title: "Proactive renewal engagement is the retention lever",
		desc: "A policyholder who receives a renewal notice by post and forgets about it is not necessarily price-sensitive — they may simply be inert. A digital renewal flow with proactive notification, easy comparison, and one-click renewal removes the friction that causes inertia-driven lapse. The 8-point retention improvement was not won by price; it was won by reducing the effort required to renew."
	},
	{
		title: "Document vault eliminates an entire contact category",
		desc: "Policy document requests are a high-volume, low-value contact centre category that exists entirely because customers cannot access documents themselves. A self-service document vault eliminates this category to near-zero, freeing contact centre capacity for contacts that require agent expertise."
	},
	{
		title: "MTA self-service prevents mid-term lapse",
		desc: "A customer who moves house and cannot easily update their address on their home insurance policy either calls and waits (poor experience) or defers the update (creating a coverage risk). Self-service MTA makes keeping the policy accurate as easy as the transaction warrants — reducing mid-term lapse and improving risk data quality simultaneously."
	}
];

const FAQS = [
	{
		q: "What is a mid-term adjustment (MTA) in insurance?",
		a: "A mid-term adjustment is a change made to an insurance policy during its term — between the start date and renewal date. Common MTAs include address changes, adding a named driver, changing the insured vehicle, modifying coverage levels, or changing payment details. MTAs typically result in a pro-rata additional or return premium and must be reflected in an endorsement to the policy."
	},
	{
		q: "How does a self-service portal affect insurance renewal retention?",
		a: "Self-service portals improve renewal retention primarily through proactive digital engagement — automated notifications at the right time before renewal, easy access to the renewal quote and comparison, and low-friction one-click renewal capability. They also improve retention indirectly by providing better ongoing customer experience, reducing the friction-driven dissatisfaction that makes customers receptive to switching."
	}
];

export default function CustomerSelfServicePortalsCaseStudy() {
	return (
		<>
			<SEO
				title="Insurance Customer Self-Service Portal Case Study | OpenGridLabs"
				description="How a Customer Self-Service Portal Reduced Contact Centre Volume 39% and Lifted Renewal Retention by 8 Points."
				canonical="/services/bfsi/customer-self-service-portals"
				keywords="Customer Self-Service Portal, Insurance Portal, Mid-Term Adjustment, FNOL, Renewal Retention, Digital Insurance, Policyholder Portal, InsurTech, Digital Claims, Insurance Technology, OpenGridLabs"
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
					title="How a Customer Self-Service Portal Reduced Contact Centre Volume 39% and Lifted Renewal Retention by 8 Points"
					description="A personal lines insurer with 800,000 policyholders was handling 3.2 million contact centre contacts per year — the majority of which were routine enquiries and transactions that should have been self-service. There was no digital channel for policyholders to view documents, make mid-term adjustments, or manage renewals without calling. OpenGridLabs built a comprehensive self-service portal that handled 68% of all transaction types digitally, reducing contact centre volume 39% and — critically — lifting renewal retention by 8 percentage points through proactive digital renewal management."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Personal lines insurer (anonymised)" },
						{ label: "Scale", value: "800,000 policyholders" },
						{ label: "Timeline", value: "13 months" },
						{ label: "Stack", value: "React · Policy API · Claims FNOL · Document vault · Renewal engine" }
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
						"Our client is a personal lines insurer with 800,000 policyholders across motor, home, and travel products. Their digital capability was limited to policy document download from a static portal — there was no self-service for any transaction. Every mid-term adjustment, every address change, every additional driver, every document request, and every renewal decision required a phone call to the contact centre. The contact centre was handling 3.2 million contacts per year, of which post-analysis showed 74% were transactions that a digital channel could have handled.",
						"The renewal retention problem was the most commercially significant issue. The insurer was sending renewal notices by post 28 days before renewal and then waiting — customers who weren't proactively engaged frequently failed to renew because the friction of calling to renew was sufficient to trigger inertia. A digital renewal flow with email and push notification engagement, instant MTA capability, and one-click renewal had the potential to change the retention equation significantly.",
						"An insurance customer self-service portal is a digital channel — web and mobile — allowing policyholders to manage their insurance independently: viewing policy documents, making mid-term adjustments (address changes, additional drivers, coverage modifications), submitting claims FNOL, downloading certificates, and managing renewals."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is a Self-Service Portal?"
					definitionText="An insurance customer self-service portal is a digital channel — web and mobile — allowing policyholders to manage their insurance independently: viewing policy documents, making mid-term adjustments (address changes, additional drivers, coverage modifications), submitting claims FNOL, downloading certificates, and managing renewals."
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
					description={"Reducing the need for customer phone queries by deploying end-to-end self-service adjustments, automated notification flows, and document vaults."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Customer Self-Service Portal Architecture"}
					description={"Frontend single page applications streaming inputs to transactional MTA engines, integration middleware APIs, and secure database blocks."}
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
					description={"A systematic 3-phase roadmap leading from initial profile setups to adjustment endpoints and active renewal triggers."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Decimating call volumes, raising customer retention indices, and maximizing digital-first policy changes."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The renewal retention improvement was worth more than the contact centre cost saving. Eight percentage points on 800,000 policyholders is 64,000 policies retained that would have lapsed. The proactive digital renewal flow did that — not a price change, not a product change."}
					author={"Chief Digital Officer"}
					subtitle={"Confidential Personal Lines Insurer"}
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
					title={"800,000 policyholders calling for every document and address change?"}
					description={"OpenGridLabs builds insurance customer self-service portals — MTAs, digital FNOL, document vault, and proactive renewal flows — that reduce contact centre volume and lift retention."}
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
