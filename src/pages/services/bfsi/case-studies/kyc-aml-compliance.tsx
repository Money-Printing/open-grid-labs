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
	{ value: "48 hr", label: "Client onboarding time, from 18 days", accent: "from-emerald-500 to-teal-600" },
	{ value: "61%", label: "Reduction in AML false positive alerts", accent: "from-emerald-500 to-teal-600" },
	{ value: "10 mo", label: "Platform live", accent: "from-emerald-500 to-teal-600" },
	{ value: "100%", label: "Perpetual KYC coverage replacing periodic reviews", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "18-day average KYC onboarding causing client attrition before accounts opened" },
	{ text: "Periodic KYC review cycle creating batch workload and leaving client information out-of-date" },
	{ text: "Transaction monitoring generating 340 alerts/month at 91% false positive rate" },
	{ text: "No digital document collection — paper documents posted, certified, and manually data-entered" },
	{ text: "Beneficial ownership identification manual — complex ownership structures assembled from emails" }
];

const SOLUTIONS = [
	{ text: "Digital onboarding portal with in-app ID verification (biometric, document scan, liveness check)" },
	{ text: "Automated company search and beneficial ownership extraction from company registry data" },
	{ text: "Perpetual KYC — continuous monitoring of client risk indicators replacing periodic review cycles" },
	{ text: "ML-based transaction monitoring calibrated to client segments, reducing false positives" },
	{ text: "Real-time sanctions, PEP, and adverse media screening integrated into onboarding and ongoing monitoring" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Onboarding", items: ["Digital portal", "ID verification (biometric/document)", "Beneficial ownership extraction", "Risk scoring"], color: "hsl(145,100%,40%)" },
	{ title: "Due Diligence", items: ["Sanctions screening", "PEP screening", "Adverse media", "Company registry", "Automated CDD report"], color: "hsl(145,100%,40%)" },
	{ title: "Monitoring", items: ["Perpetual KYC (change events)", "Transaction monitoring (ML rules engine)", "Alert management"], color: "hsl(145,100%,40%)" },
	{ title: "Governance", items: ["Audit trail", "Case management", "Regulatory reporting", "SAR workflow", "Management information"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Digital Onboarding and ID Verification (Months 1–4)",
		desc: "OpenGridLabs built the digital onboarding portal integrating biometric ID verification, document scanning, and automated company registry lookups for business clients. The beneficial ownership determination engine was built to extract UBO structures from registry data for common jurisdictions, flagging complex structures for enhanced due diligence.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Perpetual KYC and Sanctions Screening (Months 5–7)",
		desc: "The perpetual KYC framework replaced the periodic review cycle: a continuous monitoring system watching for trigger events (change of address, new beneficial owner, adverse media mention, sanctions list addition) and initiating a targeted review when triggered rather than reviewing all clients on a fixed schedule.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Transaction Monitoring and Alert Optimisation (Months 8–10)",
		desc: "The ML-based transaction monitoring system was deployed, with rules calibrated by client segment and risk profile. The initial calibration reduced false positive rates from 91% to 36% within 60 days. An alert investigation workflow with case management and SAR reporting capability was built.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Onboarding time (standard)", before: "18 business days", after: "48 hours", change: "48 hours" },
	{ metric: "Client attrition during onboarding", before: "Significant", after: "Near-zero", change: "Near-zero" },
	{ metric: "KYC review coverage", before: "Periodic (batched)", after: "Perpetual (event-triggered)", change: "Perpetual" },
	{ metric: "Transaction monitoring false positive rate", before: "91%", after: "30% (post-optimisation)", change: "30% rate" },
	{ metric: "AML alert investigation time", before: "Baseline", after: "-61%", change: "-61%" },
	{ metric: "Regulatory finding (FCA supervisory visit)", before: "Prior findings", after: "Zero findings post-launch", change: "Compliant" }
];

const SUCCESS_FACTORS = [
	{
		title: "Perpetual KYC is better compliance, not just better operations",
		desc: "Periodic KYC reviews ensure a client's information is reviewed on a schedule. Perpetual KYC ensures it is reviewed when something relevant changes — which is when risk actually changes. Event-triggered review is both lower cost (fewer unnecessary reviews) and better compliance (no gap between a risk event and its review)."
	},
	{
		title: "False positive rates are a compliance capacity problem",
		desc: "A transaction monitoring system producing 91% false positives is consuming analyst time on dead ends. Reducing false positives to 30% does not reduce compliance coverage — it concentrates analyst attention on the alerts that warrant investigation. The 9% of genuine alerts receive more attention, not less."
	},
	{
		title: "Digital onboarding changes the client experience without compromising compliance",
		desc: "The regulatory requirements for KYC are non-negotiable. The experience of meeting them is designable. Digital onboarding with biometric verification and automated registry lookup meets the same regulatory standard as a paper process in a fraction of the time — the compliance outcome is the same, the client experience is fundamentally different."
	}
];

const FAQS = [
	{
		q: "What is perpetual KYC?",
		a: "Perpetual KYC (also called continuous KYC) is an approach to ongoing customer due diligence that replaces periodic reviews with event-triggered reviews. Rather than reviewing all clients on a fixed schedule, a perpetual KYC system monitors for trigger events — changes in ownership, adverse media mentions, sanctions updates — and initiates a targeted review when a relevant change occurs."
	},
	{
		q: "What is a suspicious activity report (SAR)?",
		a: "A SAR is a mandatory report submitted to the national financial intelligence unit (the NCA in the UK, FinCEN in the US) when a financial institution has knowledge or reasonable suspicion that a client or transaction is connected to money laundering or terrorist financing. Filing SARs is a legal obligation, and failure to file can result in regulatory sanctions even if the underlying activity proves to be legitimate."
	}
];

export default function KycAmlComplianceCaseStudy() {
	return (
		<>
			<SEO
				title="Digital KYC & AML Compliance Case Study | OpenGridLabs"
				description="How Digital KYC Onboarding and Perpetual KYC Monitoring Cut Client Onboarding from 18 Days to 48 Hours."
				canonical="/services/bfsi/kyc-aml-compliance"
				keywords="KYC Compliance, AML Compliance, Digital Onboarding, Perpetual KYC, Transaction Monitoring, Sanctions Screening, ID Verification, Beneficial Ownership, RegTech, Financial Services, OpenGridLabs"
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
					title="How Digital KYC Onboarding and Perpetual KYC Monitoring Cut Client Onboarding from 18 Days to 48 Hours"
					description="A wealth manager was onboarding new clients through a paper-intensive KYC process taking an average of 18 business days — an experience that was causing client attrition before accounts were opened, and consuming the compliance team's capacity with manual document review. OpenGridLabs rebuilt the KYC/AML infrastructure: digital onboarding with automated ID verification, perpetual KYC monitoring replacing periodic review cycles, and an ML-based transaction monitoring system that reduced false positive alerts 61%."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Wealth management firm (anonymised)" },
						{ label: "Scale", value: "4,200 client relationships" },
						{ label: "Timeline", value: "10 months" },
						{ label: "Stack", value: "Digital KYC · ID verification · Perpetual KYC · Transaction monitoring · Sanctions screening" }
					]}
				/>

				<CaseStudyCarousel
					slug="kyc-aml-compliance"
					title="KYC & AML Compliance"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/kyc-aml-compliance/1.jpg",
						"/images/case-studies/kyc-aml-compliance/2.jpg"
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
						"Our client manages assets for 4,200 high-net-worth individuals and family offices. The KYC onboarding process was document-intensive — clients submitting certified ID documents by post, compliance analysts manually reviewing and entering data, external database checks run individually, and beneficial ownership structures assembled from email-attached documents. The average onboarding time was 18 business days, with a significant proportion taking 4–6 weeks for complex structures.",
						"Beyond the onboarding friction, the ongoing AML monitoring had a structural problem: periodic KYC reviews (annual for higher-risk clients, triennial for standard-risk) generated compliance workload in batches, creating review backlogs and ensuring that some clients' information was significantly out of date between review cycles. The transaction monitoring system was generating 340 alerts per month with a 91% false positive rate — consuming analyst time on investigation that was producing no actionable findings.",
						"KYC (Know Your Customer) is the regulatory requirement for financial firms to verify the identity of their clients, understand the nature of their business, and assess the money laundering and financial crime risks they present. AML (Anti-Money Laundering) encompasses the ongoing monitoring obligations — transaction monitoring, sanctions screening, and politically exposed person (PEP) screening — required to detect suspicious activity. Together they form the core of financial crime compliance for regulated firms."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is KYC/AML Compliance?"
					definitionText="KYC (Know Your Customer) is the regulatory requirement for financial firms to verify the identity of their clients, understand the nature of their business, and assess the money laundering and financial crime risks they present. AML (Anti-Money Laundering) encompasses the ongoing monitoring obligations — transaction monitoring, sanctions screening, and politically exposed person (PEP) screening — required to detect suspicious activity. Together they form the core of financial crime compliance for regulated firms."
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
					description={"Modernising paper-heavy validation with automatic onboarding portals, biometric liveness checks, and machine learning transaction alerts."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"KYC/AML Compliance Platform Architecture"}
					description={"A secure user onboarding portal linked to automated registry data extraction, perpetual review trigger handlers, and full-featured AML compliance dashboard managers."}
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
					description={"A systematic 3-phase roadmap leading from baseline calculations and models integration to custom client reporting interfaces."}
					phaseColors={["hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)"]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Speeding up standard onboarding time, dropping false positives, and securing zero regulatory audit findings."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"We were losing clients during onboarding. Eighteen days is too long to wait for a sophisticated client who has other options. Forty-eight hours is still friction, but it is friction the client accepts. The perpetual KYC was the other transformation — our compliance team stopped chasing review deadlines and started responding to actual risk events."}
					author={"Chief Compliance Officer"}
					subtitle={"Confidential Wealth Manager"}
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
					title={"Losing clients during an 18-day paper KYC process?"}
					description={"OpenGridLabs builds KYC/AML platforms — digital onboarding, perpetual KYC monitoring, and ML transaction monitoring — that meet regulatory requirements in hours, not weeks."}
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
