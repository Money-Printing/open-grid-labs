import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database
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
	{ value: "6", label: "Distinct customer segments discovered", accent: "from-cyan-400 to-blue-500" },
	{ value: "44%", label: "Lift in engagement from targeted action", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "0.68", label: "Silhouette score — well-separated clusters", accent: "from-pink-500 to-rose-400" },
	{ value: "8 wk", label: "From raw data to actionable segments", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Every customer treated the same, with no segmentation to tailor strategy" },
	{ text: "No labels and no known segments—the right groups were genuinely unknown" },
	{ text: "No way to tell how many distinct segments existed, or what defined them" },
	{ text: "90+ behavioural signals made the data far too high-dimensional to eyeball" },
	{ text: "Past manual segments were arbitrary guesses that didn't reflect real behaviour" }
];

const SOLUTIONS = [
	{ text: "Unsupervised clustering on behavioural data to discover natural customer groups" },
	{ text: "Rigorous selection of the right number of clusters using validation metrics" },
	{ text: "Dimensionality reduction to make 90+ signals tractable and visualisable" },
	{ text: "Clear, named profiles describing who each discovered segment actually is" },
	{ text: "A repeatable model that assigns new and existing customers to their segment" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Behavioural signals", "Usage & engagement data", "Cleaning & scaling", "Feature selection"], color: "hsl(180,100%,50%)" },
	{ title: "Reduction", items: ["Dimensionality reduction (PCA / UMAP)", "Correlation pruning", "Visualisation of structure"], color: "hsl(210,100%,50%)" },
	{ title: "Clustering", items: ["K-means & hierarchical & DBSCAN", "Choosing k", "Silhouette & stability validation", "Comparison"], color: "hsl(280,100%,65%)" },
	{ title: "Profiling", items: ["Segment profiles & names", "Business interpretation", "Segment assignment model", "Activation in workflows"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Preparation & Reduction (Weeks 1–3)",
		desc: "OpenGridLabs cleaned and scaled the behavioural data—an essential step, since clustering is highly sensitive to how features are weighted—and selected the signals that genuinely described customer behaviour. Dimensionality reduction compressed ninety-plus signals into a tractable space, both to help the algorithms and to let the team visualise the structure hiding in the data.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Clustering & Validation (Weeks 4–6)",
		desc: "The team ran multiple clustering algorithms—k-means, hierarchical, and density-based—and compared them, systematically testing how many clusters best fit the data using silhouette scores and stability checks rather than a guess. Six well-separated, stable segments emerged consistently across methods, giving confidence the structure was real and not an artifact of one algorithm.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Profiling, Naming & Activation (Weeks 7–8)",
		desc: "Each segment was profiled and given a clear, business-friendly name and description, so 'Cluster 4' became a recognisable kind of customer the team could picture and discuss. OpenGridLabs delivered a model that assigns any customer to their segment, wired segment membership into the client's marketing and product workflows, and trained the team to re-run and refresh the analysis as behaviour evolves.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Customer segments identified", before: "0 (treated as one)", after: "6 distinct", change: "Discovered" },
	{ metric: "Engagement (segment-targeted)", before: "Baseline", after: "+44%", change: "+44%" },
	{ metric: "Cluster separation (silhouette)", before: "—", after: "0.68", change: "Well-separated" },
	{ metric: "Messaging & onboarding", before: "Identical for all", after: "Tailored per segment", change: "Targeted" },
	{ metric: "High-value segment", before: "Unidentified", after: "Found & prioritised", change: "Revenue focus" },
	{ metric: "At-risk segment", before: "Invisible", after: "Surfaced for retention", change: "Actionable" },
	{ metric: "Segment assignment for new customers", before: "Not possible", after: "Automatic", change: "Automatic" }
];

const SUCCESS_FACTORS = [
	{
		title: "Validate that the clusters are real",
		desc: "Any algorithm returns clusters; proving they are genuine took silhouette scores, stability checks, and agreement across multiple methods. Six segments appeared consistently—strong evidence the structure was real, not an artifact."
	},
	{
		title: "Preparation decides the outcome",
		desc: "Clustering is acutely sensitive to scaling and feature choice, so cleaning, scaling, and reducing dimensionality mattered more than the algorithm itself. Get the inputs wrong and the groups are meaningless, however sophisticated the method."
	},
	{
		title: "A segment must be recognisable to be useful",
		desc: "The breakthrough was translating statistical clusters into named, human profiles the business instantly recognised. A cluster nobody can picture never gets acted on; a vivid one reshapes strategy."
	},
	{
		title: "Discovery is only half the value—activation is the rest",
		desc: "Delivering a model that assigns customers to segments and wiring it into real workflows turned a one-shot deployment into a operational capability the company keeps using as its customer base evolves."
	}
];

const FAQS = [
	{
		q: "What are clustering algorithms?",
		a: "Clustering algorithms are unsupervised machine learning methods that group similar data points together without any predefined labels. Instead of predicting a known target, they discover natural structure in data—such as distinct customer segments, behaviour patterns, or anomalies. Common algorithms include k-means, hierarchical clustering, and DBSCAN, each suited to different data shapes and goals."
	},
	{
		q: "How is clustering different from classification?",
		a: "Classification is supervised: it learns from labelled examples to assign new items to known categories. Clustering is unsupervised: there are no labels and no predefined categories, so the algorithm discovers the groupings itself based on similarity. Classification answers 'which known bucket does this belong to?', while clustering answers 'what natural groups exist here that we didn't already know about?'."
	}
];

export default function ClusteringAlgorithmsCaseStudy() {
	return (
		<>
			<SEO
				title="Clustering Algorithms Case Study | OpenGridLabs"
				description="How OpenGridLabs applied clustering algorithms to uncover six distinct customer segments hidden in behavioral data, lifting engagement by 44%."
				canonical="/services/ai-data/clustering-algorithms"
				keywords="Clustering Algorithms, Customer Segmentation, Unsupervised Learning, K-Means Clustering, Hierarchical Clustering, DBSCAN, Dimensionality Reduction, Cluster Analysis, Pattern Discovery, Silhouette Score, Market Segmentation"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Data Science & AI"
					title="How Clustering Algorithms Revealed Six Customer Segments Hidden in Plain Sight"
					description="A fast-scaling company treated all its customers as one undifferentiated mass because it had no idea they weren't. OpenGridLabs applied clustering algorithms—unsupervised learning that finds structure without being told what to look for—to uncover six natural, distinct segments hidden in the data, turning one-size-fits-all into targeted strategy that lifted engagement 44%."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Data", value: "80K+ customers, 90+ behavioural signals" },
						{ label: "Timeline", value: "8-week engagement" },
						{ label: "Stack", value: "Unsupervised Learning · K-Means · Profiling" }
					]}
				/>

				<CaseStudyCarousel
					slug="clustering-algorithms"
					title="Clustering Algorithms"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/clustering-algorithms/1.jpg",
						"/images/case-studies/clustering-algorithms/2.jpg"
					]}
				/>

				

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-cyan-500/30"
					hoverTextClass="group-hover:text-cyan-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a venture-backed company with more than eighty thousand customers and a wealth of behavioural data—how people signed up, what they used, how often, and how they engaged over time. Yet for all that data, the company operated as if its customers were a single, uniform group: the same onboarding, the same messaging, the same product nudges sent to everyone. It worked unevenly, and nobody could say why some customers thrived while others quietly drifted away.",
						"The instinct was that different kinds of customers were hiding in the data, behaving in distinct ways—but they had no labels, no predefined segments, and no idea how many groups there might be or what defined them. This is precisely the problem clustering algorithms exist to solve: unsupervised learning that, without being told what to look for, discovers the natural groupings already present in data. The company didn't need a model to predict a known answer—it needed one to reveal an answer no one yet knew.",
						"Clustering algorithms are unsupervised machine learning methods that group similar data points together with no predefined labels. Rather than predicting a known target, they discover natural structure—distinct customer segments, behaviour patterns, or anomalies. Common algorithms include k-means, hierarchical clustering, and DBSCAN, each suited to different data shapes. The output is a set of groups the data formed on its own, ready to be understood and acted on."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Are Clustering Algorithms?"
					definitionText="Clustering algorithms are unsupervised machine learning methods that group similar data points together with no predefined labels. Rather than predicting a known target, they discover natural structure—distinct customer segments, behaviour patterns, or anomalies. Common algorithms include k-means, hierarchical clustering, and DBSCAN, each suited to different data shapes. The output is a set of groups the data formed on its own, ready to be understood and acted on."
					definitionIcon={<Layers className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-cyan-500/10"
					definitionIconBorderClass="border-cyan-500/20"
					definitionIconColorClass="text-cyan-400"
					glowColorClass="bg-cyan-400"
					gradientFromClass="from-cyan-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Customer Profiling Gaps Resolved"}
					description={"How OpenGridLabs built a customer segmentation pipeline using unsupervised learning."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Pipeline"}
					title={"Analysis Pipeline"}
					description={"OpenGridLabs built an end-to-end clustering pipeline that turns raw behavioural data into named, actionable segments. Because clustering has no \"correct answer\" to check against, the pipeline leans heavily on validation and human interpretation—making sure the groups it finds are both statistically sound and genuinely meaningful to the business."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Clustering's hardest question isn't \"how\" — it's \"is this real?\""}
					alertText={"Any algorithm will return clusters, even from noise; the discipline is proving the groups are genuine and useful. OpenGridLabs validated separation and stability with metrics like the silhouette score, tested how many clusters truly fit the data, and—crucially—worked with the business to confirm each segment described a real, recognisable kind of customer. A statistically tidy cluster that means nothing to the business is a failure; a well-separated one that the team instantly recognises is gold."}
					rightColumnTitle={"Clustering Analysis Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"The engagement ran across three phases over eight weeks, structured to move from raw data to segments the business could name, trust, and act on. OpenGridLabs embedded a team of data scientists alongside the client's marketing, product, and customer-success teams."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 90-day window after the segments were activated, comparing segment-targeted treatment against the prior one-size-fits-all approach."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd been talking to eighty thousand people as if they were one person. Clustering showed us they were really six very different groups—including a high-value one and an at-risk one we'd never seen. The moment we tailored our approach to each, the numbers moved."}
					author={"VP of Growth"}
					subtitle={"Confidential Technology Company"}
					accentLineClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-cyan-500/20"}
					iconColorClass={"text-cyan-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-cyan-400"}
					activeChevronColorClass={"text-cyan-400"}
				/>

				<CaseStudyCta 
					title={"What natural groups are hiding in your data?"}
					description={"OpenGridLabs uses clustering algorithms—unsupervised learning, rigorous validation, and clear profiling—to discover the real segments in your data and turn them into targeted, operational strategy."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-400"}
					btnGradientClass={"from-cyan-400 to-purple-500"}
					btnShadowColor={"34,211,238,0.2"}
				/>
			</div>
		</>
	);
}
