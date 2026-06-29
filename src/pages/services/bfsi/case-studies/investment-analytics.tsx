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
	{ value: "71%", label: "Of apparent alpha traced to factor exposure", accent: "from-emerald-500 to-teal-600" },
	{ value: "10 mo", label: "Analytics platform live", accent: "from-emerald-500 to-teal-600" },
	{ value: "6", label: "Equity strategies with full attribution", accent: "from-emerald-500 to-teal-600" },
	{ value: "100%", label: "Reproducible calculation — full audit trail", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "Performance reporting using only Brinson sector attribution — no factor decomposition" },
	{ text: "$12B AUM exposed to unacknowledged factor concentrations that weren't being risk-managed" },
	{ text: "Institutional allocators asking factor questions the firm could not answer — relationship risk" },
	{ text: "No risk-adjusted return analysis — absolute and relative returns without Sharpe, Information Ratio, or factor-adjusted alpha" },
	{ text: "Performance calculation not reproducible — analysts computing returns using different methodology" }
];

const SOLUTIONS = [
	{ text: "A multi-factor attribution model using Barra and Axioma factor frameworks" },
	{ text: "Brinson-Fachler stock selection, sector allocation, and interaction decomposition alongside factor attribution" },
	{ text: "Risk-adjusted return metrics — Information Ratio, Sharpe, Sortino, tracking error — per strategy" },
	{ text: "Portfolio construction analytics — factor exposure analysis, concentration metrics, risk budget allocation" },
	{ text: "A standardised, reproducible performance calculation methodology with full audit trail" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Pricing", "Corporate actions", "Factor exposures (Barra/Axioma)", "Benchmark constituents", "Risk-free rates"], color: "hsl(145,100%,40%)" },
	{ title: "Attribution Engine", items: ["Brinson-Fachler allocation/selection", "Multi-factor decomposition", "Alpha vs. beta split"], color: "hsl(145,100%,40%)" },
	{ title: "Risk Analytics", items: ["Factor exposures", "Tracking error", "VaR", "Stress scenarios", "Correlation matrix"], color: "hsl(145,100%,40%)" },
	{ title: "Reporting", items: ["Client attribution reports", "Internal portfolio review", "Regulatory", "Audit trail"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Foundation and Factor Model (Months 1–4)",
		desc: "OpenGridLabs built the securities data infrastructure and integrated the Barra multi-factor model. The performance calculation methodology was standardised and a full historical recalculation of all six strategies was performed, establishing a clean baseline for attribution.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Attribution Engine and Risk Analytics (Months 5–7)",
		desc: "The Brinson-Fachler attribution engine and multi-factor decomposition model were built. The initial historical attribution results were reviewed with the portfolio managers — the 71% factor exposure finding emerged from this review and drove significant portfolio construction discussions.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Reporting Infrastructure and Client Disclosure (Months 8–10)",
		desc: "The reporting infrastructure was built to produce client-facing attribution reports, internal portfolio review packs, and the factor exposure summaries requested by institutional allocators. The standardised calculation methodology was documented for regulatory and audit purposes.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Factor exposure transparency", before: "Not measured", after: "Full decomposition available", change: "Full decomposition available" },
	{ metric: "Alpha vs. factor attribution", before: "Undifferentiated", after: "Quantified per strategy", change: "Quantified per strategy" },
	{ metric: "Institutional allocator questions answered", before: "~30% addressable", after: "100% addressable", change: "100% addressable" },
	{ metric: "Performance calculation reproducibility", before: "Analyst-dependent", after: "Standardised, auditable", change: "Standardised, auditable" },
	{ metric: "Portfolio construction factor awareness", before: "None", after: "Explicit factor budget", change: "Explicit factor budget" },
	{ metric: "Information Ratio trend (post-analytics)", before: "Baseline", after: "Improving (genuine alpha focus)", change: "Improving" }
];

const SUCCESS_FACTORS = [
	{
		title: "Factor attribution is not optional for serious active management",
		desc: "An active manager who cannot decompose their returns into factor components and genuine alpha cannot make a defensible case for their fees to a sophisticated allocator. Factor attribution is increasingly table stakes, not differentiation."
	},
	{
		title: "Uncomfortable findings are the most valuable",
		desc: "A performance analytics system that confirms what you hoped to see is worth less than one that reveals what you didn't know. The 71% factor exposure finding was uncomfortable; the portfolio construction improvements it drove were commercially significant."
	},
	{
		title: "Reproducibility is auditability",
		desc: "A standardised, documented performance calculation methodology that produces the same results regardless of which analyst runs it is the precondition for regulatory compliance, client trust, and internal accountability. Analyst-dependent calculations are a governance failure waiting to surface."
	}
];

const FAQS = [
	{
		q: "What is the difference between alpha and factor beta?",
		a: "Alpha is the return generated by an investment manager's skill — security selection and portfolio construction decisions that are not explained by systematic risk factors. Factor beta is the return from exposure to systematic risk premia (value, momentum, quality, size) that passive factor-based products also capture. Separating the two allows accurate assessment of active management value."
	},
	{
		q: "What is the Brinson attribution model?",
		a: "The Brinson-Hood-Beebower (and Brinson-Fachler) attribution model decomposes portfolio returns relative to a benchmark into three components: allocation effect (the impact of overweighting/underweighting sectors), selection effect (the impact of security selection within sectors), and interaction effect. It is the most widely used return attribution framework in the investment management industry."
	}
];

export default function InvestmentAnalyticsCaseStudy() {
	return (
		<>
			<SEO
				title="Factor Attribution & Investment Analytics Case Study | OpenGridLabs"
				description="How Factor Attribution Analytics Showed a Fund Manager That 71% of Apparent Alpha Was Actually Factor Exposure."
				canonical="/services/bfsi/investment-analytics"
				keywords="Investment Analytics, Factor Attribution, Performance Attribution, Multi-Factor Model, Alpha vs Beta, Brinson Attribution, Risk Analytics, Portfolio Analytics, Asset Management, Financial Services, OpenGridLabs"
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
					title="How Factor Attribution Analytics Showed a Fund Manager That 71% of Apparent Alpha Was Actually Factor Exposure"
					description="An active manager reporting strong alpha to clients had never decomposed that performance into its factor components — skill versus systematic exposure to value, momentum, quality, and size. OpenGridLabs built a factor attribution and investment analytics platform that revealed the composition of returns in detail. The finding — that 71% of apparent alpha was factor beta — was uncomfortable but transformative: it led to genuine alpha measurement, honest client reporting, and a portfolio construction process grounded in evidence."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Asset manager (anonymised)" },
						{ label: "AUM", value: "$12B across 6 equity strategies" },
						{ label: "Timeline", value: "10 months" },
						{ label: "Stack", value: "Factor models · Brinson attribution · Risk analytics · Reporting engine" }
					]}
				/>

				<CaseStudyCarousel
					slug="investment-analytics"
					title="Investment Analytics"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/investment-analytics/1.jpg",
						"/images/case-studies/investment-analytics/2.jpg"
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
						"Our client manages $12 billion across six equity strategies with a strong performance record — consistently beating their benchmarks over 3 and 5 year periods. Client reporting showed benchmark-relative performance and sector attribution using the Brinson-Hood-Beebower model. What it did not show was factor attribution: the decomposition of returns into exposure to systematic risk factors (value, momentum, quality, size, low volatility) versus genuine stock-selection alpha. The distinction mattered commercially — investors were paying active management fees for what was, in significant part, factor beta.",
						"The motivation to build the analytics was not self-punishment — it was competitive necessity. Factor-based investing and smart beta products had made investors far more sophisticated about the components of active management returns. Institutional allocators were increasingly asking questions about factor exposure that the firm could not answer. OpenGridLabs built the investment analytics infrastructure to make factor attribution a core capability, and the findings, while initially uncomfortable, enabled the firm to make genuine improvements to its portfolio construction process.",
						"Factor attribution is the decomposition of portfolio returns into the contributions of systematic risk factors — value, momentum, quality, size, low volatility, and others — versus idiosyncratic alpha generated by individual security selection. A multi-factor attribution model allows investment managers to identify whether their returns are driven by skill (security selection) or by factor exposure (systematic risk premia that passive products also capture), providing a more honest assessment of active management value."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Factor Attribution?"
					definitionText="Factor attribution is the decomposition of portfolio returns into the contributions of systematic risk factors — value, momentum, quality, size, low volatility, and others — versus idiosyncratic alpha generated by individual security selection. A multi-factor attribution model allows investment managers to identify whether their returns are driven by skill (security selection) or by factor exposure (systematic risk premia that passive products also capture), providing a more honest assessment of active management value."
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
					description={"Evolving from standard Brinson sector calculations to complete risk-adjusted and multi-factor attribution analysis."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Investment Analytics Architecture"}
					description={"Pricing feeds and vendor risk matrices passing through attribution decomposition scripts, risk models, and audit-ready client report generators."}
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
					description={"A systematic 3-phase roadmap leading from baseline recalculation and models integration to custom client reporting interfaces."}
					phaseColors={["hsl(145,100%,40%)", "hsl(175,100%,35%)", "hsl(200,100%,40%)"]}
					axisGradientClass={"from-emerald-500 via-teal-500 to-cyan-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Transforming reporting capability, standardizing calculations, and introducing explicit factor budgets."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"The attribution showed us things we didn't want to see. But seeing them clearly was what enabled us to do something about them. The platform didn't just measure performance — it changed how we construct portfolios."}
					author={"Chief Investment Officer"}
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
					title={"Reporting benchmark-relative performance without knowing what drives it?"}
					description={"OpenGridLabs builds investment analytics platforms — factor attribution, risk-adjusted returns, and reproducible performance calculation — that show you what actually generates your returns."}
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
