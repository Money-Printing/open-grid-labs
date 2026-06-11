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
	{ value: "3", label: "SFDR Article 9 funds launched", accent: "from-emerald-500 to-teal-600" },
	{ value: "£1.2B", label: "New ESG-mandated AUM attracted", accent: "from-emerald-500 to-teal-600" },
	{ value: "11 mo", label: "Platform live", accent: "from-emerald-500 to-teal-600" },
	{ value: "3", label: "ESG data providers normalised", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "ESG data from 3 providers with significant score divergence — no coherent foundation for fund construction" },
	{ text: "No SFDR disclosure reporting capability — Article 8/9 classification not supportable" },
	{ text: "Portfolio-level ESG metrics unavailable — no way to measure a portfolio's aggregate ESG profile" },
	{ text: "No climate risk analytics — TCFD-aligned reporting not possible" },
	{ text: "ESG scoring methodology undocumented — any rating challenged by clients or regulators was unanswerable" }
];

const SOLUTIONS = [
	{ text: "Multi-provider ESG data normalisation framework mapping MSCI, Sustainalytics, and Refinitiv to a common taxonomy" },
	{ text: "A proprietary aggregate ESG scoring methodology with explicit provider weighting and transparency" },
	{ text: "SFDR disclosure reporting — PAI indicators, DNSH assessment, and taxonomy alignment for Article 8/9 funds" },
	{ text: "Climate risk analytics — TCFD-aligned reporting, carbon footprint, and temperature alignment metrics" },
	{ text: "Portfolio ESG dashboard — stock-level and portfolio-level ESG scores, controversy screening, and exclusion screening" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Ingestion", items: ["MSCI data feeds", "Sustainalytics feeds", "Refinitiv data feeds", "Carbon data", "Controversy monitoring"], color: "hsl(145,100%,40%)" },
	{ title: "Normalisation", items: ["Common taxonomy mapping", "Score harmonisation", "Coverage gap handling", "Controversy adjustments"], color: "hsl(145,100%,40%)" },
	{ title: "Scoring Engine", items: ["Proprietary aggregate score", "E/S/G decomposition", "Controversy overlay", "Factor weights"], color: "hsl(145,100%,40%)" },
	{ title: "Portfolio", items: ["SFDR PAI indicators", "TCFD climate metrics", "Exclusion screens", "ESG reporting dashboard"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Normalisation & Scoring (Months 1–4)",
		desc: "OpenGridLabs built the data ingestion pipeline from all three providers and the normalisation framework mapping their disparate data to a common taxonomy. The proprietary scoring methodology was designed with the investment team — documenting the rationale for provider weighting and the handling of coverage gaps and provider disagreement.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "SFDR & Portfolio Analytics (Months 5–8)",
		desc: "The SFDR disclosure reporting module was built — calculating the 14 mandatory PAI (Principal Adverse Impact) indicators required for Article 8/9 funds, performing the Do No Significant Harm (DNSH) assessment, and producing the pre-contractual and periodic disclosure documents required by SFDR.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Fund Launch & Climate Risk (Months 9–11)",
		desc: "The three Article 9 fund portfolios were constructed using the ESG analytics platform, with their SFDR disclosure documentation produced and filed. TCFD-aligned climate risk analytics were built — carbon footprint measurement, physical and transition climate risk exposure, and temperature alignment — completing the climate disclosure capability.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "SFDR Article 9 funds launched", before: "0", after: "3", change: "3 funds" },
	{ metric: "ESG-mandated AUM attracted", before: "£0", after: "£1.2B", change: "£1.2B" },
	{ metric: "ESG data source consistency", before: "Low (3 divergent providers)", after: "Normalised aggregate score", change: "Normalised" },
	{ metric: "SFDR disclosure capability", before: "Not possible", after: "Full Article 8/9 reporting", change: "Full reporting" },
	{ metric: "Portfolio ESG metrics", before: "Not available", after: "Full dashboard", change: "Full dashboard" },
	{ metric: "Engagement in ESG client conversations", before: "Low (no data)", after: "High (data-grounded)", change: "Data-grounded" }
];

const SUCCESS_FACTORS = [
	{
		title: "ESG data normalisation is the precondition for everything else",
		desc: "A sustainable fund built on unreconciled data from a single provider inherits all of that provider's methodology biases without the investor or manager knowing it. Normalisation across providers, with explicit methodology documentation, produces an ESG score that can be defended and improved."
	},
	{
		title: "SFDR compliance creates investment capability, not just disclosure",
		desc: "The process of building SFDR disclosure reporting — calculating PAI indicators, performing DNSH assessments, documenting taxonomy alignment — requires the data infrastructure and analytical capability to actually measure what the fund claims. The compliance task and the investment capability are the same task."
	},
	{
		title: "Scoring transparency enables engagement",
		desc: "An ESG score that clients cannot understand and managers cannot explain is a marketing claim, not an investment thesis. The documented methodology — what each provider measures, how scores are weighted, how disagreements are handled — made ESG conversations substantive rather than rhetorical."
	}
];

const FAQS = [
	{
		q: "What is SFDR and what are Article 8 and Article 9 funds?",
		a: "SFDR (Sustainable Finance Disclosure Regulation) is the EU regulation requiring asset managers to classify and disclose the sustainability characteristics of their funds. Article 6 funds make no sustainability claims. Article 8 funds promote environmental or social characteristics. Article 9 funds have sustainable investment as their objective and face the highest disclosure requirements."
	},
	{
		q: "Why do ESG data providers give different scores for the same company?",
		a: "ESG data providers use different methodologies, different data sources, different scope definitions, and different weighting of E, S, and G factors. Studies show that ESG scores from different providers correlate at approximately 0.6 — significantly lower than the 0.9+ correlation between credit ratings from different agencies — meaning provider selection significantly affects portfolio construction."
	}
];

export default function ESGAnalyticsCaseStudy() {
	return (
		<>
			<SEO
				title="ESG Analytics & SFDR Disclosure Case Study | OpenGridLabs"
				description="How an ESG Analytics Platform Enabled Three Sustainable Fund Launches and Won £1.2B in Mandated ESG Capital."
				canonical="/services/bfsi/esg-analytics"
				keywords="ESG Analytics, SFDR Reporting, ESG Data, Sustainable Investing, Article 9 Fund, ESG Scoring, TCFD, Climate Risk, PAI Indicators, Financial Services, OpenGridLabs"
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
					title="How an ESG Analytics Platform Enabled Three Sustainable Fund Launches and Won £1.2B in Mandated ESG Capital"
					description="An asset manager wanted to launch SFDR Article 9 sustainable funds but lacked the data infrastructure to support the disclosure requirements or to construct portfolios with verifiable sustainability credentials. ESG data from three providers was inconsistent and contradictory. OpenGridLabs built an ESG analytics platform: multi-provider data normalisation, a proprietary aggregate scoring methodology, SFDR disclosure reporting, and portfolio ESG analytics — enabling three Article 9 fund launches and £1.2B in new ESG-mandated AUM."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Asset manager (anonymised)" },
						{ label: "Scope", value: "3 SFDR Article 9 fund launches" },
						{ label: "Timeline", value: "11 months" },
						{ label: "Stack", value: "ESG data normalisation · SFDR reporting · Proprietary scoring · Portfolio analytics" }
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
						"Our client manages £14 billion in multi-asset funds and wanted to launch sustainable investing products to capture growing institutional and retail demand for ESG-aligned investment. The barrier was data: the firm subscribed to three ESG data providers (MSCI, Sustainalytics, and Refinitiv) and found that their scores for the same company frequently diverged significantly — a company rated 'AA' by MSCI might be rated 'medium risk' by Sustainalytics. There was no coherent way to construct or report on a sustainable portfolio using data that couldn't be reconciled.",
						"The ESG data divergence problem is well-documented — provider scores correlate at approximately 0.6, far lower than credit ratings from competing agencies. The solution is not to pick one provider and ignore the others, but to understand what each provider is measuring, normalise the data to a common framework, and build an aggregated score that explicitly handles provider disagreement. OpenGridLabs built this infrastructure, and the firm used it to construct and launch three Article 9 funds with SFDR disclosure reporting grounded in verifiable data.",
						"ESG analytics in financial services encompasses the collection, normalisation, scoring, and portfolio application of environmental, social, and governance data for investment decision-making and regulatory disclosure.aggregates multiple data sources and normalises them to a common framework."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is ESG Analytics?"
					definitionText="ESG analytics in financial services encompasses the collection, normalisation, scoring, and portfolio application of environmental, social, and governance data for investment decision-making and regulatory disclosure.aggregates multiple data sources and normalises them to a common framework."
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
					description={"Normalizing divergent vendor ESG scores, automating SFDR compliance, and creating auditable data lineage."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"ESG Analytics Platform Architecture"}
					description={"Unified vendor ingestion mapping to a normalisation taxonomy, feed aggregated scoring engines, and generate SFDR/TCFD indicators."}
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
					description={"A systematic 3-phase roadmap leading from initial normalization mapping to SFDR metrics setup and sustainable fund go-live."}
					phaseColors={[ "hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)" ]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Deploying rigorous multi-provider metrics, enabling SFDR Article 9 fund launches, and securing mandated ESG allocations."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We had ESG subscriptions but no ESG capability. Three providers giving us three different answers is not data — it is noise. The normalisation framework gave us a position we could defend. The SFDR reporting gave us the disclosure we needed to launch. The £1.2B followed."}
					author={"Head of Sustainable Investing"}
					subtitle={"Confidential Asset Manager"}
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
					title={"Three ESG data providers giving three different answers?"}
					description={"OpenGridLabs builds ESG analytics platforms — multi-provider normalisation, SFDR disclosure, and portfolio ESG metrics — that provide a defensible data foundation for sustainable fund launches."}
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
