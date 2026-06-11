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
	{ value: "11 pts", label: "Improvement in telematics book loss ratio", accent: "from-indigo-500 to-violet-600" },
	{ value: "23%", label: "More safe drivers retained at renewal", accent: "from-indigo-500 to-violet-600" },
	{ value: "4.5B", label: "Data points processed per month", accent: "from-indigo-500 to-violet-600" },
	{ value: "12 mo", label: "Platform live", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "4.5B data points/month collected but unused in renewal pricing — telematics product not delivering UBI" },
	{ text: "Adverse selection at renewal — safest drivers comparison shopping, poorest drivers sticking" },
	{ text: "No validated driving behaviour score — raw data not connected to subsequent claims outcomes" },
	{ text: "Trip data stored but unprocessed — no structured analytics on the driving data collected" },
	{ text: "Competitor UBI products offering lower renewal prices to safe drivers based on observed behaviour" }
];

const SOLUTIONS = [
	{ text: "A telematics data pipeline processing 4.5B monthly data points into structured per-trip and per-policyholder metrics" },
	{ text: "An ML driving behaviour score validated against 3 years of claims outcomes — predictive of loss with statistical significance" },
	{ text: "Renewal pricing integration — behaviour score as a first-class rating factor alongside traditional variables" },
	{ text: "Customer engagement platform — monthly score reports, gamified improvement, and real-time feedback" },
	{ text: "Claims investigation integration — telematics data automatically retrieved for claims at FNOL" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Ingestion", items: ["Black box device", "Smartphone SDK", "Trip data (GPS/accelerometer/speed)", "Daily batch ingestion"], color: "hsl(230,80%,60%)" },
	{ title: "Processing", items: ["Trip reconstruction", "Speed profile", "Event detection (harsh brake/accel/corner)", "Time-of-day classification"], color: "hsl(230,80%,60%)" },
	{ title: "Scoring", items: ["Per-trip scores", "Rolling behaviour score", "ML validation against claims", "Score confidence bands"], color: "hsl(230,80%,60%)" },
	{ title: "Integration", items: ["Renewal pricing engine", "Customer app", "Claims FNOL", "Portfolio analytics", "Regulatory reporting"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Pipeline and Behaviour Score (Months 1–5)",
		desc: "OpenGridLabs built the telematics data pipeline processing raw trip data into structured metrics. The ML behaviour score was built and validated against 3 years of claims outcomes — establishing statistical significance between score bands and subsequent claim frequency and severity. The score validation was reviewed by the actuarial team before pricing integration.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Renewal Pricing Integration (Months 6–9)",
		desc: "The behaviour score was integrated into the renewal pricing engine as a first-class rating factor. The initial pricing integration used a conservative weighting, with the weight increased as the validated predictive power of the score was confirmed in live renewal data. Safe driver discounts and poor driver loadings were implemented for the first renewal cycle.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Customer Engagement and Claims Integration (Months 10–12)",
		desc: "The customer engagement platform was built — monthly behaviour score reports, in-app driving feedback, and gamified improvement challenges. Telematics data retrieval was integrated with the claims FNOL process — automatically pulling the last 30 days of driving data and trip data for the loss event.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Telematics book loss ratio", before: "Baseline", after: "-11 percentage points", change: "-11 percentage points" },
	{ metric: "Safe driver renewal retention", before: "Baseline", after: "+23%", change: "+23%" },
	{ metric: "Poor driver renewal retention", before: "Baseline", after: "-18% (repriced appropriately)", change: "-18% (repriced appropriately)" },
	{ metric: "Telematics data utilisation", before: "0% in pricing", after: "First-class rating factor", change: "First-class rating factor" },
	{ metric: "Claims investigation data availability", before: "Manual request", after: "Automatic at FNOL", change: "Automatic at FNOL" },
	{ metric: "Customer engagement (score app)", before: "Not available", after: "71% monthly active", change: "71% monthly active" }
];

const SUCCESS_FACTORS = [
	{
		title: "Telematics data is only an asset when it informs pricing",
		desc: "Collecting 4.5 billion data points per month and not using them in pricing is an expensive data storage exercise. The commercial return on telematics comes from the pricing signal it provides — which requires a validated behaviour score integrated into the pricing engine."
	},
	{
		title: "Score validation against claims is non-negotiable",
		desc: "A behaviour score that is not validated against subsequent claims outcomes is a credibility model, not a risk model. The actuarial validation — demonstrating statistical significance between score bands and claims frequency and severity — was the prerequisite for regulatory acceptance of the score as a rating factor."
	},
	{
		title: "Renewal retention improves when you price the right drivers",
		desc: "Adverse selection at renewal is a consequence of pricing that doesn't reflect the insurer's knowledge of individual risk. When telematics data is used in renewal pricing, safe drivers receive lower prices that reflect their actual risk — improving retention for the segment the insurer wants to retain — and poor drivers are priced more accurately, reducing retention for the most costly segment."
	}
];

const FAQS = [
	{
		q: "What is usage-based insurance (UBI)?",
		a: "Usage-Based Insurance (UBI) prices insurance based on how much and how safely a customer drives, using telematics data collected via a black box device, smartphone app, or OBD port sensor. UBI products include pay-as-you-drive (pricing by miles driven), pay-how-you-drive (pricing by driving behaviour), and real-time pricing (continuous pricing adjustment based on ongoing driving data)."
	},
	{
		q: "What data does telematics collect for insurance?",
		a: "Insurance telematics typically collects: GPS location and route data, vehicle speed at regular intervals, acceleration events (harsh acceleration, harsh braking, harsh cornering), time-of-day classification, trip distance and duration, and — with smartphone-based telematics — phone distraction indicators. This raw data is processed into per-trip scores and rolling behaviour scores used for pricing and customer engagement."
	}
];

export default function TelematicsIntegrationCaseStudy() {
	return (
		<>
			<SEO
				title="Telematics Integration Case Study | OpenGridLabs"
				description="How Telematics Integration Improved Loss Ratio 11 Points by Pricing Risk from How People Actually Drive."
				canonical="/services/bfsi/telematics-integration"
				keywords="Telematics Integration, Usage-Based Insurance, UBI, Connected Vehicle, Driving Behaviour Scoring, Motor Insurance, Black Box Insurance, Telematics Data Platform, InsurTech, Insurance Technology, OpenGridLabs"
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
					title="How Telematics Integration Improved Loss Ratio 11 Points by Pricing Risk from How People Actually Drive"
					description="A motor insurer offering a telematics product was collecting driving data from 120,000 black box policies but pricing renewals based on traditional risk factors — age, vehicle, claims history — rather than the observed driving behaviour available in the telematics data. OpenGridLabs built a telematics data platform that processed 4.5 billion data points per month, built a driving behaviour score validated against subsequent claims, and integrated it into the renewal pricing engine — improving the loss ratio 11 points through superior risk selection."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Motor insurer (anonymised)" },
						{ label: "Scale", value: "120,000 telematics policyholders" },
						{ label: "Timeline", value: "12 months" },
						{ label: "Stack", value: "Telematics data pipeline · Behaviour scoring · UBI pricing · Renewal integration" }
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
						"Our client had launched a black box telematics product three years earlier and grown it to 120,000 policyholders — primarily young drivers in the 17–25 segment attracted by the possibility of earning discounts for good driving. The telematics hardware and data transmission were functioning correctly: the insurer was receiving trip data including speed, acceleration, braking, cornering, and time-of-day for every journey. None of this data was being used in renewal pricing. Renewals were priced on traditional factors with a modest blanket telematics discount.",
						"The consequence was predictable adverse selection: safer drivers — who had earned significant in-term discounts through their behaviour scores — were comparison shopping at renewal and finding that competitor prices, not adjusted for their actual driving behaviour, were competitive. The safest drivers were the most price-sensitive at renewal because they knew their risk was low. Meanwhile, the poorer drivers — who had received fewer or no in-term discounts — were stickier at renewal. The book was retaining the wrong mix.",
						"Telematics integration in insurance connects driving behaviour data — collected via black box hardware, smartphone app, or OBD port device — to the insurer's pricing, underwriting, and customer management systems. A telematics data platform processes raw trip data (GPS trace, accelerometer data, speed, time-of-day) into structured driving behaviour scores that can be used for risk pricing, customer engagement, and claims investigation. Usage-Based Insurance (UBI) uses telematics data to price insurance based on how much and how safely a customer drives."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="⚡ What Is Telematics Integration?"
					definitionText="Telematics integration in insurance connects driving behaviour data — collected via black box hardware, smartphone app, or OBD port device — to the insurer's pricing, underwriting, and customer management systems. A telematics data platform processes raw trip data (GPS trace, accelerometer data, speed, time-of-day) into structured driving behaviour scores that can be used for risk pricing, customer engagement, and claims investigation. Usage-Based Insurance (UBI) uses telematics data to price insurance based on how much and how safely a customer drives."
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
					description={"Transforming raw GPS metrics into predictive ML scoring layers and first-class UBI renewal pricing factors."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Telematics Integration Platform Architecture"}
					description={"Daily batch ingestion of raw telematics signals mapped into trip reconstructions, scoring calculations, and third-party renewal integrations."}
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
					description={"A structured 12-month delivery path starting with data pipeline builds and culminating in mobile feedback setups."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Decimating loss ratios, boosting safe driver retention, and establishing data-driven UBI rating engines."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We were collecting the most precise risk data in the industry and ignoring it at renewal. The telematics data told us exactly which drivers were safe and which weren't — and we were pricing them the same. The 11-point loss ratio improvement came directly from pricing what we knew."}
					author={"Chief Pricing Officer"}
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
					title={"Collecting telematics data from 120,000 policyholders and not using it in pricing?"}
					description={"OpenGridLabs builds telematics integration platforms — behaviour scoring validated against claims, renewal pricing integration, and customer engagement — that price risk from how people actually drive."}
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
