import { Link } from "react-router";

import {
	ArrowLeft,
	Layers,
	ShieldCheck,
	Cpu,
	Database,
	Zap,
	FileText
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
	{ value: "4 hr", label: "Application-to-offer time, from 5 days", accent: "from-emerald-500 to-teal-600" },
	{ value: "70%", label: "Applications fully automated", accent: "from-amber-500 to-yellow-600" },
	{ value: "19%", label: "Reduction in 12-month default rate", accent: "from-blue-500 to-cyan-600" },
	{ value: "9 mo", label: "System built and in production", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "5-day average application-to-offer time losing business to sub-hour digital competitors" },
	{ text: "Manual affordability assessment using paper bank statements — slow and error-prone" },
	{ text: "No integration with credit bureaus — manual reference number lookups by underwriters" },
	{ text: "Underwriters reviewing all 18,000 monthly applications regardless of decision complexity" },
	{ text: "High application abandonment during the wait — estimated 34% of approved applicants withdrawing" }
];

const SOLUTIONS = [
	{ text: "Open banking-based affordability assessment — automated income verification and expenditure analysis" },
	{ text: "Credit bureau API integration providing real-time credit history and score" },
	{ text: "ML-based credit scoring model trained on the lender's own default data" },
	{ text: "Automated decision engine routing: auto-approve, auto-refer, auto-decline with rules overlay" },
	{ text: "Digital signature and documentation platform enabling instant offer acceptance and execution" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Application", items: ["Digital application form", "ID verification", "Open banking consent", "Document upload"], color: "hsl(38,100%,50%)" },
	{ title: "Assessment", items: ["Credit bureau API", "Open banking data analysis", "Affordability engine", "ML credit score"], color: "hsl(145,100%,45%)" },
	{ title: "Decisioning", items: ["Rules engine (policy overlays)", "ML score", "Decision router", "Offer generator"], color: "hsl(200,100%,50%)" },
	{ title: "Documentation", items: ["Offer letter generation", "Digital signature", "Loan agreement", "Drawdown instruction"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Integration & Credit Assessment (Months 1–4)",
		desc: "OpenGridLabs built the open banking integration for automated income and expenditure analysis, and the credit bureau API integration. The affordability engine was built and calibrated against the lender's existing underwriting criteria. The ML scoring model was trained on 3 years of application and performance data.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Decisioning Engine & Routing (Months 5–7)",
		desc: "The automated decision engine was built with three routing paths: auto-approve (70% of applications meeting all automated criteria), auto-refer (borderline cases routed to underwriters), and auto-decline (clear decline cases). Policy overlays were built for regulatory compliance — responsible lending rules, debt-to-income thresholds.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Digital Documentation & Production Launch (Months 8–9)",
		desc: "Digital signature and loan agreement execution were integrated. The full system was launched in production with a 90-day parallel run comparing automated decisions against what the manual process would have decided, validating model accuracy before the manual process was retired.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Application-to-offer time", before: "5 business days", after: "4 hours (70% of cases)", change: "4 hours (70% of cases)" },
	{ metric: "Application abandonment during wait", before: "34%", after: "8%", change: "8%" },
	{ metric: "Underwriter capacity (cases/day)", before: "18 cases (all applications)", after: "60 cases (complex only)", change: "60 cases (complex only)" },
	{ metric: "12-month default rate", before: "Baseline", after: "-19%", change: "-19%" },
	{ metric: "Auto-decisioning accuracy", before: "—", after: "94.7% concordance with manual", change: "94.7% concordance" },
	{ metric: "Operational cost per application", before: "Baseline", after: "-52%", change: "-52%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Open banking data is better than bank statements",
		desc: "Automated analysis of 12 months of transaction data via open banking produces a more accurate and more complete affordability picture than a manual review of paper statements for three months. The data quality improvement from open banking was as significant as the speed improvement from automation."
	},
	{
		title: "Automation improves credit quality by improving underwriter attention",
		desc: "An underwriter reviewing every application gives appropriate attention to none. An underwriter reviewing only the complex 30% gives their full expertise to those cases. The default rate reduction was a direct consequence of underwriters spending time where it mattered rather than on routine confirmation of straightforward cases."
	},
	{
		title: "The decision model must be calibrated against the lender's own book",
		desc: "Generic ML credit scoring models trained on industry data are less accurate than models trained on a specific lender's own application and default data, because lending criteria, product mix, and customer demographics vary significantly. The 3-year training dataset was the investment that produced the 19% default rate improvement."
	}
];

const FAQS = [
	{
		q: "What is the difference between automated decisioning and credit scoring?",
		a: "Credit scoring produces a numerical risk score for a loan applicant. Automated decisioning uses that score — combined with policy rules, affordability assessments, and regulatory constraints — to make or recommend an approve/decline/refer decision. Credit scoring is one input to automated decisioning; it is not the same thing."
	},
	{
		q: "What is open banking affordability assessment?",
		a: "Open banking affordability assessment uses customer-consented access to their bank account transaction data to automatically identify income patterns, regular commitments, and expenditure categories, producing a more accurate and verifiable affordability picture than asking customers to self-declare income or manually submit bank statements."
	}
];

export default function LoanOriginationCaseStudy() {
	return (
		<>
			<SEO
				title="Automated Loan Origination Case Study | OpenGridLabs"
				description="How Automated Loan Origination Cut Application-to-Offer Time from 5 Days to 4 Hours and Reduced Default Rates 19%."
				canonical="/services/bfsi/loan-origination"
				keywords="Loan Origination, Automated Decisioning, Credit Scoring, Open Banking Affordability, Digital Lending, LOS, Retail Lending, OpenGridLabs"
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
					categoryTag="Case Study · Loan Origination"
					title="How Automated Loan Origination Cut Application-to-Offer Time from 5 Days to 4 Hours and Reduced Default Rates 19%"
					description="A retail lender was processing loan applications through a workflow that mixed digital submission with manual underwriting review — creating a 5-day average from application to offer that was losing business to faster digital competitors. OpenGridLabs built an automated loan origination system: open banking-based affordability assessment, automated credit decisioning, and a digital documentation workflow that delivered offers in 4 hours for 70% of applications while improving credit quality."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Retail lender (anonymised)" },
						{ label: "Scale", value: "18,000 loan applications/month" },
						{ label: "Timeline", value: "9 months" },
						{ label: "Stack", value: "Open banking · Credit bureau API · Rules engine · ML scoring · Digital signatures" }
					]}
				/>

				<CaseStudyCarousel
					slug="loan-origination"
					title="Loan Origination System"
					accentColor="pink"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/loan-origination/1.jpg",
						"/images/case-studies/loan-origination/2.jpg"
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
					contextIcon={<FileText className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a retail lender processing 18,000 loan applications per month — personal loans, car finance, and debt consolidation — with average loan values between £3,000 and £25,000. The application process was digital at the front end: customers applied online and uploaded documents. The back end was manual: an underwriter reviewed each application, called the credit bureau, manually assessed affordability using bank statements, and sent an offer by email. Five business days was the average from application to offer, with a significant proportion taking 7–10 days.",
						"Digital lenders were offering sub-hour automated decisions on the same product set. The client was aware of the competitive pressure but concerned about the risk implications of automated decisioning — their underwriting team had genuine expertise and the manual process, for all its slowness, had produced a well-managed credit book. OpenGridLabs designed an automated system that didn't replace underwriter judgement but redirected it: automation handled the 70% of cases where the data was sufficient for a confident decision, and underwriters focused entirely on the 30% of cases where human assessment genuinely added value.",
						"A loan origination system (LOS) is the software platform that manages the end-to-end process of receiving, assessing, deciding, and documenting a loan application — from the customer's initial application through credit assessment, affordability verification, decisioning, offer generation, and documentation execution. A modern LOS integrates open banking data for affordability assessment, credit bureau APIs for credit history, and automated decisioning rules and ML scoring models to assess creditworthiness at speed."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is a Loan Origination System?"
					definitionText="A loan origination system (LOS) is the software platform that manages the end-to-end process of receiving, assessing, deciding, and documenting a loan application — from the customer's initial application through credit assessment, affordability verification, decisioning, offer generation, and documentation execution. A modern LOS integrates open banking data for affordability assessment, credit bureau APIs for credit history, and automated decisioning rules and ML scoring models to assess creditworthiness at speed."
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
					description={"Reducing high abandonment rates and manual delays through algorithmic decision routing."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, ShieldCheck, Database]}
					tag={"Technical Design"}
					title={"Loan Origination Architecture"}
					description={"A secure, multi-stage processing pipeline spanning application ingestion, open banking assessments, automated rules decisioning, and digital signature drawdown."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout the engagement."}
					rightColumnTitle={"LOS Pipeline Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 9-month development roadmap delivering real-time credit metrics and automated offer logic."}
					phaseColors={["hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)"]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults
					description="Transitioning from manual underwriting to a multi-path automated decisioning engine lowered defaults and application abandonment."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"Our underwriters were reviewing 18,000 applications a month, most of which were straightforward. They were spending 80% of their time confirming obvious approvals. The automation freed them to do the work that actually requires their expertise. The default rate improvement came from better underwriter attention to the cases that needed it."}
					author={"Chief Risk Officer"}
					subtitle={"Confidential Retail Lender"}
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
					title={"Losing loan applications during a 5-day manual review process?"}
					description={"OpenGridLabs builds loan origination systems — open banking affordability, ML credit scoring, automated decisioning, and digital documentation — that deliver offers in hours, not days."}
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
