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
	{ value: "71%", label: "Straight-through bind rate", accent: "from-indigo-500 to-violet-600" },
	{ value: "2 hr", label: "Referral-to-bind time, from 5 days", accent: "from-indigo-500 to-violet-600" },
	{ value: "24K", label: "SME policies per year automated", accent: "from-indigo-500 to-violet-600" },
	{ value: "10 mo", label: "Platform live", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "Every SME submission reviewed manually regardless of risk complexity or appetite clarity" },
	{ text: "5-day average referral-to-bind cycle losing business to faster digital competitors" },
	{ text: "Underwriting team capacity consumed by routine confirmations rather than complex decisions" },
	{ text: "No external data enrichment — underwriters manually researching risks using public sources" },
	{ text: "No consistent appetite application — different underwriters applying appetite rules differently" }
];

const SOLUTIONS = [
	{ text: "Automated appetite rules engine applying the underwriting team's codified risk criteria" },
	{ text: "ML risk scoring model trained on 5 years of submission and loss data" },
	{ text: "External data enrichment — Companies House, credit data, property data, flood risk, claims history" },
	{ text: "Straight-through bind for risks meeting defined criteria — automated quote, documentation, bind" },
	{ text: "Referral workflow for borderline risks with pre-populated enriched data reducing underwriter research time" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Submission", items: ["Broker API", "Quote portal", "Structured risk data", "Document upload", "Data validation"], color: "hsl(230,80%,60%)" },
	{ title: "Enrichment", items: ["Companies House", "Credit data", "Property risk", "Flood/subsidence", "Industry claims data"], color: "hsl(230,80%,60%)" },
	{ title: "Underwriting Engine", items: ["Appetite rules", "ML risk score", "Rating engine", "STB eligibility", "Referral triggers"], color: "hsl(230,80%,60%)" },
	{ title: "Bind", items: ["Quote generation", "Policy terms", "Documentation", "Broker notification", "Core system bind"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Enrichment and Appetite Rules (Months 1–4)",
		desc: "OpenGridLabs integrated the external data sources and built the appetite rules engine, encoding the underwriting team's criteria for straight-through eligibility. The rules were validated by the underwriting team against a sample of historical submissions — confirming that the rules engine produced the same outcome as the human underwriter on 94% of cases.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "ML Risk Scoring and STB Engine (Months 5–7)",
		desc: "The ML risk scoring model was built on 5 years of submission and loss data. The straight-through bind engine was built for the first eligible product class (sole-trader liability), running in shadow mode before live deployment. Referral automation was built with pre-populated enriched data reducing underwriter research time by 60%.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Full Rollout and Performance Tuning (Months 8–10)",
		desc: "STB was extended to all four product classes. The appetite rules and ML model were tuned based on 90-day live performance data. Underwriter capacity was reallocated: the team's proportion of time on complex, non-standard, and large risks increased from 25% to 78%.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Straight-through bind rate", before: "0%", after: "71%", change: "71%" },
	{ metric: "Referral-to-bind time", before: "5 business days", after: "2 hours", change: "2 hours" },
	{ metric: "Underwriter time on complex risks", before: "~25% of capacity", after: "~78%", change: "~78%" },
	{ metric: "Appetite rule consistency", before: "Variable (by underwriter)", after: "Systematic (rules engine)", change: "Systematic (rules engine)" },
	{ metric: "Broker satisfaction (quote speed)", before: "Baseline", after: "+44%", change: "+44%" },
	{ metric: "Loss ratio (post-automation)", before: "Baseline", after: "Stable (no deterioration)", change: "Stable (no deterioration)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Appetite codification is the most valuable step",
		desc: "Building the rules engine forced the underwriting team to codify appetite criteria that had previously existed only as institutional knowledge. That codification improved consistency before automation was turned on — the process of building the system produced value independent of running it."
	},
	{
		title: "External data enrichment changes the risk picture",
		desc: "An underwriter manually researching a company's credit profile, flood risk, and claims history takes 20–40 minutes. An automated enrichment pipeline providing this data at submission takes seconds and ensures consistent data quality across all risks. Better input data produces better risk selection."
	},
	{
		title: "STB does not change the loss ratio if the rules are right",
		desc: "The most common objection to underwriting automation is loss ratio deterioration. Rigorous appetite validation — testing the rules engine against historical submissions and losses before deployment — established that the automated decisions were at least as good as the manual ones for in-appetite risks. The loss ratio remained stable because the automation replicated sound underwriting judgement, not despite it."
	}
];

const FAQS = [
	{
		q: "What is straight-through bind in commercial insurance?",
		a: "Straight-through bind (STB) is the automated completion of the policy binding process for commercial insurance submissions that meet defined risk appetite and eligibility criteria — without requiring underwriter review. The system verifies the submission against appetite rules, applies rating, generates the quote and policy documentation, and confirms bind to the broker, typically within minutes."
	},
	{
		q: "How do insurers ensure automated underwriting doesn't deteriorate the loss ratio?",
		a: "Insurers validate automated underwriting rules and ML models against historical submission and loss data before deployment — testing whether the automated decisions produce the same risk selection outcomes as experienced underwriters. Ongoing performance monitoring tracks the loss ratio and claims frequency for STP-bound risks separately from referred risks, enabling rapid rule adjustment if deterioration is detected."
	}
];

export default function UnderwritingAutomationCaseStudy() {
	return (
		<>
			<SEO
				title="Automated Underwriting Case Study | OpenGridLabs"
				description="How Automated Underwriting Bound 71% of SME Policies Without Underwriter Review."
				canonical="/services/bfsi/underwriting-automation"
				keywords="Underwriting Automation, Automated Underwriting, Straight-Through Bind, SME Insurance, Commercial Underwriting, Risk Scoring, Appetite Rules, Digital Underwriting, InsurTech, Insurance Technology, OpenGridLabs"
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
					title="How Automated Underwriting Bound 71% of SME Policies Without Underwriter Review"
					description="A commercial insurer was manually underwriting every SME policy submission — each requiring an underwriter to review the risk, check appetite, apply rating, and approve the quote. For routine risks within clear appetite, this was expert time on administrative confirmation. OpenGridLabs built an automated underwriting platform: risk scoring, appetite rule automation, enriched third-party data integration, and a straight-through bind engine — achieving a 71% straight-through bind rate and reducing referral-to-bind time from 5 days to 2 hours."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Commercial insurer — SME lines (anonymised)" },
						{ label: "Scale", value: "24,000 SME policies per year" },
						{ label: "Timeline", value: "10 months" },
						{ label: "Stack", value: "Risk scoring · Appetite rules engine · Data enrichment · Straight-through bind" }
					]}
				/>

				<CaseStudyCarousel
					slug="underwriting-automation"
					title="Underwriting Automation"
					accentColor="indigo"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/underwriting-automation/1.jpg",
						"/images/case-studies/underwriting-automation/2.jpg"
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
						"Our client is a commercial insurer writing 24,000 SME policies per year across property, liability, combined commercial, and professional indemnity. Every submission — from a straightforward sole-trader liability policy to a complex multi-site property risk — was reviewed by a human underwriter. The underwriting team's capacity was consumed by the routine majority, leaving insufficient time for the complex risks that genuinely required their expertise.",
						"Broker feedback was consistent: the 5-day referral-to-bind cycle for straightforward risks was causing loss of business to competitors offering faster digital responses. The underwriting team had deep expertise that was being spent confirming rather than deciding — reviewing risks that were clearly within appetite and clearly within standard rating parameters, producing the same outcome a rules engine would have produced in seconds. OpenGridLabs built the automation that redirected expertise to value.",
						"Automated underwriting applies defined risk appetite rules, rating algorithms, and ML risk scores to insurance submissions — automatically binding risks that clearly fall within appetite and automatically declining risks that clearly fall outside it, while routing genuinely borderline or complex risks to human underwriters. Straight-through bind (STB) is the automated completion of the policy bind process for approved risks without underwriter review."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="⚡ What Is Automated Underwriting?"
					definitionText="Automated underwriting applies defined risk appetite rules, rating algorithms, and ML risk scores to insurance submissions — automatically binding risks that clearly fall within appetite and automatically declining risks that clearly fall outside it, while routing genuinely borderline or complex risks to human underwriters. Straight-through bind (STB) is the automated completion of the policy bind process for approved risks without underwriter review."
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
					description={"Codifying underwriting wisdom, utilizing API-driven enrichment layers, and achieving straight-through efficiency."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Automated Underwriting Architecture"}
					description={"An automated submission ingestion path feeding external data enrichment libraries, rating calculators, and instant policy generation engines."}
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
					description={"A systematic 10-month delivery program mapping rules, risk predictors, and straight-through bind endpoints."}
					phaseColors={["hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)"]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults
					description="Decimating delivery timeline bounds, maximizing resource capacity parameters, and keeping loss ratios stable."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"Underwriters are expensive and skilled. We were using them to confirm that a sole-trader gardener was within appetite for £1M liability — a decision any rules engine could make. Automation freed them for the risks where their judgement actually changes the outcome."}
					author={"Head of Underwriting"}
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
					title={"Underwriters spending their expertise confirming obvious risks?"}
					description={"OpenGridLabs builds automated underwriting platforms — appetite rules, ML risk scoring, data enrichment, and straight-through bind — that redirect expert capacity to complex risks."}
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
