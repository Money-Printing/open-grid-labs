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
	{ value: "24 hr", label: "Letter of credit issuance, from 10 days", accent: "from-emerald-500 to-teal-600" },
	{ value: "78%", label: "Reduction in documentation errors", accent: "from-amber-500 to-yellow-600" },
	{ value: "12 mo", label: "Full platform live", accent: "from-blue-500 to-cyan-600" },
	{ value: "£4.2B", label: "Trade finance book on digital platform", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "Paper-based LC application process taking 8–10 business days from application to issuance" },
	{ text: "Manual document checking against UCP 600 rules — high error rate causing amendment rounds" },
	{ text: "No client-facing status visibility — clients calling the trade finance desk for updates" },
	{ text: "SWIFT MT700 messages prepared manually from paper application data" },
	{ text: "Competition from digital-first banks offering 24-48 hour processing" }
];

const SOLUTIONS = [
	{ text: "A digital trade finance portal for corporate clients — LC application, tracking, and document upload" },
	{ text: "OCR-assisted document verification checking presented documents against LC terms automatically" },
	{ text: "Straight-through processing for standard LCs meeting defined criteria — auto-approval to human review" },
	{ text: "SWIFT MT700/MT710 generation from digital application data — eliminating manual message preparation" },
	{ text: "Real-time status tracking and notification for all trade finance instruments" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Client Portal", items: ["LC application", "Document upload", "Status tracking", "Amendments & Notifications"], color: "hsl(38,100%,50%)" },
	{ title: "Processing", items: ["OCR extraction", "UCP 600 compliance check", "Discrepancy flagging", "Approval workflows"], color: "hsl(145,100%,45%)" },
	{ title: "Core Integration", items: ["Core banking systems", "Limits management", "Accounting entries", "Risk engines", "SWIFT interface"], color: "hsl(200,100%,50%)" },
	{ title: "Messaging", items: ["SWIFT MT700/MT710 generation", "Correspondent networks", "Document presentation"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Digital Application & Core (Months 1–5)",
		desc: "The digital LC application portal was built for corporate clients, replacing email and paper. The application data was used to generate the internal processing record and the SWIFT MT700 directly — eliminating manual re-keying. The core banking integration for limits checking and accounting entries was built.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Document Verification Automation (Months 6–9)",
		desc: "OCR-based document extraction was trained on the bank's document set — bills of lading, invoices, packing lists, certificates of origin. The automated UCP 600 compliance check compared extracted data against LC terms, flagging discrepancies for human review rather than requiring a trade finance officer to check every field manually.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Portal Launch & STP Workflow (Months 10–12)",
		desc: "The full client portal was launched with real-time status tracking and notification. The straight-through processing workflow was enabled for standard LCs meeting the defined STP criteria — approximately 60% of applications. These were processed and issued within 24 hours without human intervention beyond exception review.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "LC issuance time (standard)", before: "8–10 business days", after: "<24 hours", change: "<24 hours" },
	{ metric: "Documentation error rate", before: "High (manual check)", after: "78% reduction", change: "78% reduction" },
	{ metric: "STP rate (straight-through processing)", before: "0%", after: "60% of applications", change: "60% of applications" },
	{ metric: "Client status visibility", before: "Phone call required", after: "Real-time portal", change: "Real-time portal" },
	{ metric: "SWIFT message preparation", before: "Manual (error-prone)", after: "Automated from digital data", change: "Automated" },
	{ metric: "Client satisfaction (NPS, trade clients)", before: "Below benchmark", after: "Above benchmark", change: "Above benchmark" }
];

const SUCCESS_FACTORS = [
	{
		title: "Straight-through processing requires data quality at the point of entry",
		desc: "STP is only possible when the input data is complete, correctly structured, and validated at submission. The digital application portal — with field validation, completeness checks, and real-time data quality feedback — was the upstream change that made downstream STP achievable."
	},
	{
		title: "OCR-assisted document checking changes the role of trade finance officers",
		desc: "Automated UCP 600 compliance checking does not replace trade finance expertise — it redirects it. Officers move from checking every field manually to reviewing flagged discrepancies and handling the genuinely complex cases that require judgement. The same team processes significantly more volume."
	},
	{
		title: "SWIFT message automation from digital data eliminates a manual error point",
		desc: "Manual SWIFT message preparation from paper or email applications is a re-keying step that introduces errors and delay. Generating SWIFT messages directly from the validated digital application data removed this step entirely, reducing errors and reducing the MT700 preparation time from hours to seconds."
	}
];

const FAQS = [
	{
		q: "What is UCP 600 and why does it matter for trade finance?",
		a: "UCP 600 (Uniform Customs and Practice for Documentary Credits) is the ICC's international rules governing letters of credit. It specifies how documents presented under an LC must be checked, what constitutes a compliant presentation, and how discrepancies are handled. Trade finance officers must check every presented document against these rules — a skilled, time-intensive process that OCR-assisted automation can significantly accelerate."
	},
	{
		q: "What is the difference between a Letter of Credit and a Bank Guarantee?",
		a: "A Letter of Credit is a payment undertaking — the issuing bank pays the beneficiary on presentation of compliant documents. A Bank Guarantee is a performance undertaking — the issuing bank pays if the applicant fails to perform a specified obligation. Both are off-balance-sheet contingent liabilities managed by the trade finance function."
	}
];

export default function TradeFinanceCaseStudy() {
	return (
		<>
			<SEO
				title="Trade Finance Digitisation Case Study | OpenGridLabs"
				description="How Trade Finance Digitisation Cut Letter of Credit Processing from 10 Days to 24 Hours."
				canonical="/services/bfsi/trade-finance"
				keywords="Trade Finance, Letter of Credit, LC Processing, UCP 600, Trade Finance Digitisation, Documentary Credit, SWIFT MT700, Trade Portal, Supply Chain Finance, Banking Technology, OpenGridLabs"
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
					title="How Trade Finance Digitisation Cut Letter of Credit Processing from 10 Days to 24 Hours"
					description="A commercial bank's trade finance operation was paper-intensive, manually processed, and slow — letters of credit taking 8–10 days from application to issuance, with documentation errors causing a further 2–3 rounds of amendment. Corporate clients were moving to competitors offering faster processing. OpenGridLabs digitised the end-to-end LC workflow: online application, automated document verification, digital presentation, and a client trade portal that cut processing to 24 hours and reduced errors 78%."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Commercial bank — trade finance division (anonymised)" },
						{ label: "Scale", value: "£4.2B annual trade finance book" },
						{ label: "Timeline", value: "12 months" },
						{ label: "Stack", value: "Trade portal · OCR · Document verification · Core banking integration · SWIFT MT700" }
					]}
				/>

				<CaseStudyCarousel
									slug="trade-finance"
									title="Trade Finance"
									accentColor="pink"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/trade-finance/1.jpg",
										"/images/case-studies/trade-finance/2.jpg"
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
						"Our client is a commercial bank with a £4.2 billion annual trade finance book — letters of credit, standby letters of credit, bank guarantees, and documentary collections. The operations were almost entirely paper-based: clients submitted LC applications by email or in-branch, documents were manually checked against UCP 600 rules, amendments were handled by phone and fax, and status updates required a call to the trade finance desk. Processing took 8–10 business days for a standard LC.",
						"The competitive pressure was clear: trade finance platforms offered by larger international banks and specialist fintechs were providing 24–48-hour processing with real-time status tracking. Corporate clients were explicitly stating that LC processing speed was a factor in their banking relationships. The bank's trade finance team was highly skilled but operating within a workflow that amplified the risk of manual errors and made fast processing structurally impossible, regardless of effort.",
						"Trade finance refers to the financial instruments and products that facilitate international trade, primarily by managing the risks and timing mismatches between exporters and importers. Letters of Credit (LC) are the core instrument — a bank guarantee of payment to an exporter on presentation of compliant shipping documents, as specified under UCP 600."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is Trade Finance?"
					definitionText="Trade finance refers to the financial instruments and products that facilitate international trade, primarily by managing the risks and timing mismatches between exporters and importers. Letters of Credit (LC) are the core instrument — a bank guarantee of payment to an exporter on presentation of compliant shipping documents, as specified under UCP 600."
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
					description={"Digitising paper workflows, automating compliance checking, and providing visibility to trade clients."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Trade Finance Platform Architecture"}
					description={"An end-to-end digitised workflow starting from a secure client portal down to automated document compliance and SWIFT generation."}
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
					description={"A systematic 3-phase roadmap leading from initial portal setup to OCR-assisted verification and live straight-through processing."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Cutting Letter of Credit processing times drastically while boosting accuracy and overall client NPS."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our corporate clients were asking us to be faster because their competitors' banks were already there. The digitisation project was the difference between keeping the trade finance book and losing it. Twenty-four hours instead of ten days is not an incremental improvement — it is a different product."}
					author={"Head of Trade Finance"}
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
					title={"Trade finance processing taking days when clients expect hours?"}
					description={"OpenGridLabs digitises trade finance workflows — LC applications, OCR document verification, STP processing, and SWIFT automation — cutting issuance times from days to hours."}
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
