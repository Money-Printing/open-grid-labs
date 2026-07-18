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
	{ value: "58%", label: "Claims settled without human intervention", accent: "from-indigo-500 to-violet-600" },
	{ value: "3.2 days", label: "Average settlement time, from 18 days", accent: "from-indigo-500 to-violet-600" },
	{ value: "180K", label: "Annual claims on the platform", accent: "from-indigo-500 to-violet-600" },
	{ value: "11 mo", label: "From legacy to production STP", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "Every claim manually handled regardless of complexity — handler time misallocated" },
	{ text: "18-day average settlement time for claims many customers waited the same as complex ones" },
	{ text: "No automated fraud detection at FNOL — fraud signals reviewed manually only when flagged" },
	{ text: "No FNOL automation — customers required to call a contact centre even for simple claims" },
	{ text: "Claims team unable to focus on complex, high-value cases due to volume of low-complexity claims" }
];

const SOLUTIONS = [
	{ text: "Digital FNOL via app, web, and SMS with structured data capture replacing phone intake" },
	{ text: "ML-based complexity and fraud triage scoring each claim at FNOL — STP eligible vs. handler route" },
	{ text: "Straight-through processing engine handling low-complexity claims from intake to payment" },
	{ text: "Fraud scoring model with 200+ features including claims history, policy data, and network analysis" },
	{ text: "Optimised handler workflow for complex claims — pre-populated with all available claim data" }
];

const ARCHITECTURE_STAGES = [
	{ title: "FNOL", items: ["Digital intake (app/web/SMS)", "Structured data capture", "Image upload", "Telematics data"], color: "hsl(230,80%,60%)" },
	{ title: "Triage", items: ["Complexity score", "Fraud score", "Coverage verification", "STP eligibility decision"], color: "hsl(230,80%,60%)" },
	{ title: "STP Engine", items: ["Value assessment", "Authorisation rules", "Payment instruction", "Customer notification"], color: "hsl(230,80%,60%)" },
	{ title: "Handler Workflow", items: ["Complex claim routing", "Pre-populated data", "Reserve recommendation", "Litigation flags"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Digital FNOL and Coverage Verification (Months 1–4)",
		desc: "OpenGridLabs built the digital FNOL intake across app, web, and SMS channels, replacing the phone-first intake process. Automated coverage verification was built — checking policy validity, covered perils, and excess application at the moment of FNOL, with immediate customer confirmation of coverage status.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "ML Triage and Fraud Scoring (Months 5–8)",
		desc: "The ML complexity and fraud scoring models were built and trained on 3 years of claims and outcome data. The triage engine was deployed in shadow mode — scoring every claim without affecting routing — to validate accuracy before live triage decisions were made. The STP engine was built for the first STP-eligible claim categories.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Full STP Rollout and Handler Workflow (Months 9–11)",
		desc: "STP was expanded to all eligible claim categories. The handler workflow was rebuilt to consume the triage scores and pre-populated claim data — handlers were no longer starting from a blank record. Average handler handling time for complex claims decreased 34% because data gathering was automated.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Claims settled without human intervention", before: "0%", after: "58%", change: "58%" },
	{ metric: "Average settlement time", before: "18 days", after: "3.2 days", change: "3.2 days" },
	{ metric: "Fraud detection rate at FNOL", before: "~20% (post-assignment)", after: "Systematic scoring at intake", change: "Systematic scoring" },
	{ metric: "Customer satisfaction (NPS)", before: "Baseline", after: "+31 points", change: "+31 points" },
	{ metric: "Cost per claim (fully loaded)", before: "Baseline", after: "-38%", change: "-38%" },
	{ metric: "Handler capacity on complex claims", before: "~40% of time", after: "~85% of time", change: "~85% of time" }
];

const SUCCESS_FACTORS = [
	{
		title: "Complexity-based routing is the foundational design decision",
		desc: "A claims platform that routes all claims to handlers will always produce high handling costs and poor experience for simple claims. Segmenting claims by complexity at FNOL — before a handler sees them — changes everything downstream: cost, speed, and customer experience."
	},
	{
		title: "Digital FNOL produces better data than phone FNOL",
		desc: "A structured digital FNOL captures more complete and more accurate data than a call centre conversation, because the data fields are defined, the images are attached at submission, and the customer has time to provide accurate information. Better input data produces better triage decisions."
	},
	{
		title: "STP requires fraud detection, not fraud assumption",
		desc: "STP is only viable when fraud detection is systematic. A claims platform that processes STP claims without fraud scoring is exposed to organised fraud. Embedding a fraud score in the triage decision — and routing high-score claims to specialist handlers regardless of complexity — made STP commercially safe."
	}
];

const FAQS = [
	{
		q: "What is FNOL in insurance claims?",
		a: "FNOL (First Notice of Loss) is the initial report made by a policyholder to their insurer following an insured event — an accident, theft, or damage claim. FNOL captures the basic facts of the claim and initiates the claims process. Digital FNOL channels (app, web, SMS) improve data quality, reduce contact centre load, and enable faster automated processing compared to phone-only intake."
	},
	{
		q: "What percentage of insurance claims can be straight-through processed?",
		a: "The proportion of claims suitable for STP varies by product and insurer. For motor insurance, well-implemented STP systems typically achieve 50–70% STP rates for comprehensive claims. The STP-eligible population includes low-value, single-vehicle, covered-peril claims with low fraud scores and no litigation indicators. Complex, high-value, disputed, or fraud-suspected claims are always routed to handlers."
	}
];

export default function ClaimsProcessingCaseStudy() {
	return (
		<>
			<SEO
				title="Automated Claims Processing & STP Case Study | OpenGridLabs"
				description="How Automated Claims Processing Settled 58% of Motor Claims Without a Human Touch."
				canonical="/services/bfsi/claims-processing"
				keywords="Claims Processing, Straight-Through Processing, FNOL Automation, Motor Claims, Claims Triage, Fraud Detection, Digital Claims, Claims Automation, InsurTech, Insurance Technology, OpenGridLabs"
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
					title="How Automated Claims Processing Settled 58% of Motor Claims Without a Human Touch"
					description="A motor insurer processing 180,000 claims annually was routing every claim through a manual handler regardless of complexity — a leaky bucket approach where a dented bumper received the same human attention as a total loss. OpenGridLabs built an intelligent claims platform: automated FNOL intake, ML-based complexity and fraud triage, straight-through processing for low-complexity claims, and an optimised handler workflow for complex cases — settling 58% of claims automatically and cutting average settlement time from 18 days to 3.2 days."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Motor insurer (anonymised)" },
						{ label: "Scale", value: "180,000 claims per year" },
						{ label: "Timeline", value: "11 months" },
						{ label: "Stack", value: "FNOL automation · ML triage · STP engine · Fraud scoring · Handler workflow" }
					]}
				/>

					<CaseStudyCarousel
									slug="claims-processing"
									title="Claims Processing"
									accentColor="indigo"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/claims-processing/1.jpg",
										"/images/case-studies/claims-processing/2.jpg"
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
						"Our client is a personal lines motor insurer processing approximately 180,000 claims per year across comprehensive, third-party fire and theft, and third-party only policies. Every claim — from a windscreen chip requiring a £60 repair to a total loss worth £35,000 — was assigned to a human claims handler from the moment of FNOL. The handler triage process was manual, inconsistent, and created a queue that meant even simple claims waited 3–5 days before a handler first reviewed them.",
						"The consequence was a combination of high handling cost per claim and poor customer satisfaction — customers with simple claims waiting days for a decision that could have been made automatically at FNOL. The claims team was highly skilled but was applying that skill to a mix of low-complexity and high-complexity claims indiscriminately. OpenGridLabs built a triage system that applied human expertise where it was needed and automation where it wasn't.",
						"Straight-through processing (STP) in insurance claims is the automated processing of a claim from FNOL to settlement without human intervention. STP is appropriate for claims meeting defined criteria — low value, low complexity, no fraud indicators, covered peril, valid policy — and uses automated rules and ML models to verify coverage, assess the claim, determine the settlement value, and authorise payment."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Straight-Through Processing?"
					definitionText="Straight-through processing (STP) in insurance claims is the automated processing of a claim from FNOL to settlement without human intervention. STP is appropriate for claims meeting defined criteria — low value, low complexity, no fraud indicators, covered peril, valid policy — and uses automated rules and ML models to verify coverage, assess the claim, determine the settlement value, and authorise payment."
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
					description={"Eliminating manual bottlenecks by deploying automated digital intake models, ML scoring engines, and targeted handler queues."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Claims Processing Architecture"}
					description={"Multi-channel digital intake structures streaming directly into real-time triage servers, straight-through assessment models, and pre-populated expert workflows."}
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
					description={"A systematic 3-phase roadmap leading from digital FNOL platforms to triage configurations and full straight-through processing."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Decimating average claim lifetimes, reducing handling overheads, and maximizing fraud identification rates."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our best claims handlers were spending half their time on claims that a system could settle better and faster. Moving them to complex claims exclusively did not just reduce costs — it improved outcomes on the cases that actually needed expertise."}
					author={"Head of Claims"}
					subtitle={"Confidential Motor Insurer"}
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
					title={"Claims handlers spending time on £60 windscreen chips alongside £30,000 total losses?"}
					description={"OpenGridLabs builds intelligent claims processing platforms — digital FNOL, ML triage, straight-through processing, and fraud scoring — that settle simple claims automatically and focus expert capacity where it matters."}
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
