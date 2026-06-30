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
	{ value: "180ms", label: "Quote latency, from 8 seconds", accent: "from-indigo-500 to-violet-600" },
	{ value: "Weekly", label: "Pricing experiments, from quarterly", accent: "from-indigo-500 to-violet-600" },
	{ value: "12", label: "Product spreadsheets replaced by unified engine", accent: "from-indigo-500 to-violet-600" },
	{ value: "9 mo", label: "Engine live in production", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "12 product pricing spreadsheets with different architectures maintained independently by actuaries" },
	{ text: "4–6 week tariff update cycle requiring IT deployment — no real-time pricing experiments possible" },
	{ text: "8-second quote latency causing measurable abandonment on price comparison sites" },
	{ text: "No A/B testing capability — pricing changes could not be tested before full deployment" },
	{ text: "Actuarial team spending significant capacity maintaining 12 separate rating architectures" }
];

const SOLUTIONS = [
	{ text: "A unified rating engine supporting all 12 products on a common architecture" },
	{ text: "Sub-200ms quote latency — high-performance pricing engine designed for real-time workloads" },
	{ text: "Tariff management interface — actuaries updating pricing factors without IT deployment" },
	{ text: "A/B testing infrastructure — challenger tariff routing for live pricing experiments" },
	{ text: "Versioned tariff history — every pricing version retained with full audit trail" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Tariff Management", items: ["Actuarial UI", "Rating factor management", "Discount and loading tables", "Tariff versioning", "Approval workflow"], color: "hsl(230,80%,60%)" },
	{ title: "Rating Engine", items: ["Risk variable ingestion", "Factor lookup", "Premium calculation", "Multi-product support", "Sub-200ms target"], color: "hsl(230,80%,60%)" },
	{ title: "A/B Testing", items: ["Challenger tariff routing", "Traffic split control", "Conversion tracking", "Statistical significance"], color: "hsl(230,80%,60%)" },
	{ title: "Integration", items: ["Quote systems", "Broker APIs", "Comparison sites", "Policy system", "Actuarial reporting"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Engine Foundation and First Products (Months 1–4)",
		desc: "OpenGridLabs built the rating engine core and tariff management interface, and migrated motor and home — the two highest-volume products. The first tariff update by an actuary without IT involvement was completed in week 8. Quote latency was validated at sub-200ms before each product went live.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Remaining Products and A/B Infrastructure (Months 5–7)",
		desc: "The remaining 10 products were migrated to the unified engine. The A/B testing infrastructure was built and the first pricing experiment was run in month 7 — a 5% variation on a motor age factor routed to 10% of quotes — the first live pricing experiment the firm had ever conducted.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Optimisation and Actuarial Enablement (Months 8–9)",
		desc: "Price comparison site API integrations were optimised for latency. The actuarial team was trained on the tariff management interface and A/B testing framework. Pricing experiment cadence increased from quarterly deployments to weekly experiments within 60 days of the platform going live.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Quote latency", before: "8 seconds", after: "180ms", change: "180ms" },
	{ metric: "Tariff update cycle", before: "4–6 weeks (IT-dependent)", after: "Hours (actuary-managed)", change: "Hours (actuary-managed)" },
	{ metric: "Pricing experiment frequency", before: "Quarterly (deployment-limited)", after: "Weekly", change: "Weekly" },
	{ metric: "Product rating architectures", before: "12 (fragmented)", after: "1 (unified)", change: "1 (unified)" },
	{ metric: "Price comparison site conversion", before: "Below target", after: "Improved (latency reduction)", change: "Improved (latency reduction)" },
	{ metric: "Actuarial capacity on maintenance", before: "~40% on spreadsheet maintenance", after: "~10%", change: "~10%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Latency is a commercial constraint, not just a technical metric",
		desc: "An 8-second quote is not just a bad user experience — it is measurably reducing conversion on price comparison sites, which rate and rank results partly by quote speed. Reducing to 180ms removed a structural competitive disadvantage that was costing the insurer policies."
	},
	{
		title: "Tariff management by actuaries, not IT, changes the pricing cycle",
		desc: "When actuaries can change pricing factors directly in a managed interface without an IT deployment, the pricing cycle compresses from weeks to hours. The A/B testing capability that becomes possible with a fast cycle changes the way an insurer learns about price sensitivity and optimises its book."
	},
	{
		title: "A unified architecture reduces the maintenance burden",
		desc: "Twelve product spreadsheets are twelve codebases that each evolve independently and accumulate technical debt independently. One unified rating engine has one codebase, one test suite, and one maintenance burden — and provides consistent behaviour across all products without the risk of divergence."
	}
];

const FAQS = [
	{
		q: "What factors affect insurance premium calculations?",
		a: "Insurance premiums are calculated based on the probability and expected cost of a claim for a given risk. Factors typically include: the insured's risk characteristics (age, claims history, occupation, location), the insured object's characteristics (vehicle value and type, property construction and age), coverage choices (excess, optional covers), and market conditions (competitive position, profitability targets). Each factor is weighted through a rating table or GLM model."
	},
	{
		q: "What is A/B testing in insurance pricing?",
		a: "A/B testing in insurance pricing routes a proportion of quotes to a challenger tariff (the B variant) while the remainder receive the existing tariff (the A variant). By measuring conversion rates, bound premium, and subsequently loss ratios for each group, insurers can test pricing changes on live traffic before full deployment — determining whether a proposed change improves or deteriorates the business outcome."
	}
];

export default function PremiumCalculationEnginesCaseStudy() {
	return (
		<>
			<SEO
				title="Premium Calculation Engine Case Study | OpenGridLabs"
				description="How a Real-Time Premium Calculation Engine Replaced 12 Spreadsheets and Enabled Weekly Pricing Experiments."
				canonical="/services/bfsi/premium-calculation-engines"
				keywords="Premium Calculation Engine, Rating Engine, Insurance Pricing, Tariff Management, Real-Time Rating, A/B Testing Insurance, Multi-Product Rating, InsurTech, Actuarial Pricing, Insurance Technology, OpenGridLabs"
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
					title="How a Real-Time Premium Calculation Engine Replaced 12 Spreadsheets and Enabled Weekly Pricing Experiments"
					description="A personal lines insurer was calculating premiums using 12 separate product spreadsheets maintained by the actuarial team — each with its own rating logic, updated manually and deployed by IT. Quote latency averaged 8 seconds because the spreadsheet-based rating engine ran on a server not designed for real-time workloads. OpenGridLabs built a unified premium calculation engine: sub-200ms rating, a tariff management interface for actuaries, and A/B testing infrastructure that enabled weekly pricing experiments instead of quarterly spreadsheet deployments."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Personal lines insurer (anonymised)" },
						{ label: "Scale", value: "12 personal lines products" },
						{ label: "Timeline", value: "9 months" },
						{ label: "Stack", value: "Real-time rating engine · Tariff management · A/B testing · Actuarial APIs" }
					]}
				/>

				<CaseStudyCarousel
									slug="premium-calculation-engines"
									title="Premium Calculation Engines"
									accentColor="indigo"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/premium-calculation-engines/1.jpg",
										"/images/case-studies/premium-calculation-engines/2.jpg"
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
						"Our client is a personal lines insurer with 12 products across motor, home, travel, pet, and lifestyle insurance. Each product had its own pricing spreadsheet maintained by an actuary and deployed to a rating server by the IT team. A tariff update — changing a risk factor rating or adding a new pricing variable — required an actuary to update the spreadsheet, IT to deploy it to the rating environment, and a QA cycle before it could go live. The process took 4–6 weeks minimum and could not be done in parallel across products.",
						"The 8-second quote latency was causing measurable abandonment — price comparison site analytics showed that quote completion rates dropped sharply above 4 seconds. Competitors with real-time rating engines were achieving sub-second quotes. The combination of slow quotes and slow tariff deployment was making it structurally impossible to compete with faster pricing cycles, and the spreadsheet fragmentation meant the actuarial team was maintaining 12 subtly different rating architectures rather than one coherent pricing platform.",
						"A premium calculation engine (also called a rating engine) is the software system that calculates insurance premiums in real time based on risk characteristics, coverage selections, and the insurer's tariff. A modern rating engine stores the pricing logic — rating factors, loadings, discounts, minimum premiums — in a managed tariff database, executes the calculation in milliseconds for real-time quotes, and provides a management interface allowing actuaries to update tariffs without IT involvement. It supports A/B testing of pricing changes by routing a proportion of quotes to a challenger tariff."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="⚡ What Is a Premium Calculation Engine?"
					definitionText="A premium calculation engine (also called a rating engine) is the software system that calculates insurance premiums in real time based on risk characteristics, coverage selections, and the insurer's tariff. A modern rating engine stores the pricing logic — rating factors, loadings, discounts, minimum premiums — in a managed tariff database, executes the calculation in milliseconds for real-time quotes, and provides a management interface allowing actuaries to update tariffs without IT involvement. It supports A/B testing of pricing changes by routing a proportion of quotes to a challenger tariff."
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
					description={"Dismantling monolithic spreadsheets with real-time rating microservices, actuarial management UI, and live challenger routing."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Premium Calculation Engine Architecture"}
					description={"A multi-layered system designed to manage pricing definitions, calculate premiums in real time, run live A/B tests, and interface with downstream policy engines and broker APIs."}
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
					description={"A structured 3-phase delivery process transforming actuarial systems into modular, real-time premium engines."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Decimating quote latency times, shifting tariff update controls to actuarial users, and enabling weekly tests."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our actuaries were building spreadsheets, not pricing products. And our quotes were so slow that comparison sites were penalising us. The rating engine solved both at once. The first week we deployed a pricing change without waiting for IT was the moment the team understood what was possible."}
					author={"Chief Actuary"}
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
					title={"Premium calculations running on 12 separate spreadsheets taking 8 seconds?"}
					description={"OpenGridLabs builds premium calculation engines — sub-200ms rating, actuary-managed tariffs, and A/B testing infrastructure — that make weekly pricing experiments possible."}
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
