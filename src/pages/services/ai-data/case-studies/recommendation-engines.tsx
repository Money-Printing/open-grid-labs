import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Sparkles,
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
	{ value: "3.4×", label: "Click-through rate vs. popularity-only", accent: "from-cyan-400 to-blue-500" },
	{ value: "+38%", label: "Lift in downstream conversion", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "2.6×", label: "Catalogue coverage (long tail surfaced)", accent: "from-pink-500 to-rose-400" },
	{ value: "10 wk", label: "From popular-only homepage to personalised", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "A single 'popular items' homepage shown identically to every user, regardless of interest" },
	{ text: "Vast long tail of catalogue items almost never surfaced, even when users would have loved them" },
	{ text: "Returning users saw the same items repeatedly, eroding engagement" },
	{ text: "New users and brand-new items had no behaviour history—the cold-start problem" },
	{ text: "No way to measure whether a different layout would actually work in the wild" }
];

const SOLUTIONS = [
	{ text: "Collaborative filtering using matrix factorization on user–item interactions" },
	{ text: "Content-based recommendations using item attributes and embeddings for similarity" },
	{ text: "A hybrid layer that blends both with popularity and freshness signals" },
	{ text: "Cold-start handling so new users and items get useful recommendations from day one" },
	{ text: "Online A/B testing infrastructure to measure real impact against the popularity baseline" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Signals", items: ["User interactions", "Item attributes & embeddings", "Context (time, device)", "Cold-start metadata"], color: "hsl(180,100%,50%)" },
	{ title: "Candidates", items: ["Collaborative filtering (matrix factorization)", "Content-based similarity", "Popularity & freshness pools"], color: "hsl(210,100%,50%)" },
	{ title: "Ranking", items: ["Hybrid blending", "Re-ranker", "Diversity & novelty controls", "Business rules & filters"], color: "hsl(280,100%,65%)" },
	{ title: "Delivery", items: ["Low-latency serving", "A/B testing", "Click-through & conversion metrics", "Feedback loop for retraining"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data & Offline Evaluation (Weeks 1–4)",
		desc: "OpenGridLabs assembled the user–item interaction history and item-attribute data, defined offline metrics—hit rate, recall, and diversity—on held-out interactions, and established the popularity baseline that any new model had to beat. This made progress measurable without needing live traffic, so early iteration was fast and safe.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Hybrid Model & Cold-Start (Weeks 5–8)",
		desc: "The team trained collaborative-filtering and content-based models and combined them in a hybrid ranker that blends user-behaviour and item-attribute signals. Cold-start strategies—using metadata, item embeddings, and recency—gave new users and items a useful starting point, and diversity and novelty controls were added so recommendations didn't collapse into a narrow echo chamber.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "A/B Testing, Serving & Enablement (Weeks 9–10)",
		desc: "The model was deployed behind a low-latency serving layer with A/B testing wired in from day one, so business impact—click-through and conversion—was measured against the popularity baseline rather than assumed. A feedback loop captured fresh interactions for retraining, and OpenGridLabs trained the client's engineers to run experiments and extend the recommender to new placements themselves.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Click-through rate", before: "Baseline", after: "3.4× baseline", change: "+240%" },
	{ metric: "Downstream conversion", before: "Baseline", after: "+38%", change: "+38%" },
	{ metric: "Catalogue coverage", before: "Top ~5% surfaced", after: "2.6× more items shown", change: "Long tail surfaced" },
	{ metric: "Recommendation diversity", before: "Narrow, repetitive", after: "Tuned via ranker", change: "Balanced" },
	{ metric: "Cold-start (new users / items)", before: "Popularity only", after: "Useful from day one", change: "New capability" },
	{ metric: "Serving latency", before: "—", after: "Low, real-time", change: "Production-ready" },
	{ metric: "Measurable business impact", before: "Inferred", after: "A/B-tested vs. baseline", change: "Proven" }
];

const SUCCESS_FACTORS = [
	{
		title: "Hybrid beats either method alone",
		desc: "Collaborative filtering captures the wisdom of similar users; content-based methods understand items; popularity and freshness keep the mix grounded and current. Combining them, then ranking, outperformed any single approach—and that combination is precisely what generic plug-ins can't tune to a specific catalogue."
	},
	{
		title: "Cold-start is a first-class problem",
		desc: "A recommender that only knows users with rich history is unusable on day one of a user's journey or an item's life. Designing for new users and new items from the start—using metadata and embeddings—made the system useful everywhere, not just for power users."
	},
	{
		title: "Diversity and novelty stop the echo chamber",
		desc: "Pure relevance optimisation will recycle the same kinds of items and bury the long tail. Explicit diversity and novelty controls in ranking surfaced fresh, varied items and turned the catalogue into an asset rather than a hidden one."
	},
	{
		title: "A/B test against the baseline, always",
		desc: "Offline metrics suggested improvement; A/B testing proved it. Wiring experimentation in from day one meant every change was judged on real user behaviour, not optimistic offline numbers—and the team could keep improving with the same evidence-based discipline."
	}
];

const FAQS = [
	{
		q: "What is a recommendation engine?",
		a: "A recommendation engine predicts which items—products, content, courses, or media—a particular user is most likely to want next, and surfaces those items to them. It learns from past behaviour, item attributes, and similarity patterns to deliver personalised suggestions instead of showing the same thing to everyone, turning generic browsing into a tailored experience that lifts engagement and conversion."
	},
	{
		q: "What is the difference between collaborative filtering and content-based filtering?",
		a: "Collaborative filtering recommends items based on what similar users liked—'people like you also enjoyed this'. Content-based filtering recommends items similar to ones the user has already engaged with, based on item attributes. Each has trade-offs: collaborative filtering struggles with brand-new users or items, while content-based filtering can lack variety. Hybrid recommenders combine both, plus popularity and freshness signals, to get the best of each."
	}
];

export default function RecommendationEnginesCaseStudy() {
	return (
		<>
			<SEO
				title="Recommendation Engine Case Study | OpenGridLabs"
				description="How OpenGridLabs built a hybrid recommendation engine combining collaborative filtering, content-based methods, and cold-start handling — lifting click-through 3.4x."
				canonical="/services/ai-data/recommendation-engines"
				keywords="Recommendation Engines, Recommender Systems, Collaborative Filtering, Content-Based Filtering, Hybrid Recommender, Personalization, Matrix Factorization, Cold Start, Diversity & Novelty, A/B Testing, Click-Through Rate"
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
					title="How a Hybrid Recommendation Engine Lifted Click-Through 3.4× by Showing Every User Something Different"
					description='A fast-scaling company was showing the same "popular items" homepage to every user—and watching most of them scroll past. OpenGridLabs built a hybrid recommendation engine combining collaborative filtering, content-based methods, and cold-start handling, so each visitor sees a personalised set of items chosen for them—lifting click-through 3.4× and conversion 38%.'
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Scale", value: "250K+ users, 60K+ items" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "Collaborative · Content-Based · Hybrid · Cold-Start" }
					]}
				/>

				<CaseStudyCarousel
					slug="recommendation-engines"
					title="How a Hybrid Recommendation Engine Lifted Click-Through 3.4× by Showing Every User Something Different"
					accentColor="cyan"
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
						"Our client is a venture-backed company with a sizeable catalogue—more than sixty thousand items—and a quarter of a million users browsing it. The homepage was a \"top items\" grid, the same list for everyone. It performed reasonably for new visitors who had little context, and badly for the people who came back: returning users saw the same handful of popular items over and over, even though their behaviour clearly showed different interests.",
						"The long tail was the painful part. A vast majority of the catalogue almost never appeared on the homepage, even though users who eventually found those items often loved them. A flat, one-list-for-everyone surface couldn't connect interest with item: it favoured what was popular this week regardless of who was looking. What the company needed was a recommendation engine—a system that learns from each user's behaviour and the catalogue itself to predict what that specific user will most likely want next, and surface it.",
						"A recommendation engine predicts which items—products, content, courses, or media—a particular user is most likely to want next, and surfaces those items to them. It learns from past behaviour, item attributes, and similarity patterns to deliver personalised suggestions instead of the same list for everyone, turning generic browsing into a tailored experience that lifts engagement and conversion."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Is a Recommendation Engine?"
					definitionText="A recommendation engine predicts which items—products, content, courses, or media—a particular user is most likely to want next, and surfaces those items to them. It learns from past behaviour, item attributes, and similarity patterns to deliver personalised suggestions instead of the same list for everyone, turning generic browsing into a tailored experience that lifts engagement and conversion."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
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
					title={"Five Recommendation Challenges Overcome"}
					description={"How OpenGridLabs engineered a hybrid recommendation engine to surface the catalogue long tail."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs built a two-stage recommendation pipeline: an offline path that learns user and item representations from interaction history, and an online path that generates candidate items for a request, re-ranks them with business rules, and serves the final list."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Solving cold-start and avoiding the echo chamber"}
					alertText={"A recommender that only knows what users have already done can't help new users, can't surface new items, and will narrow everyone into a tight echo chamber of past behaviour. The hybrid design deliberately countered both: content-based methods and metadata gave brand-new users and items a sensible starting point, while diversity and novelty controls in ranking made sure recommendations surfaced the long tail rather than recycling the same few hits."}
					rightColumnTitle={"Recommendation Engine Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to deliver a measurable win against the popularity baseline early, then expand and refine. OpenGridLabs embedded a team of ML and backend engineers and a recommendation specialist alongside the client's product team."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured through a controlled A/B test against the prior popularity-based homepage."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Our homepage used to be a museum of the same popular items. Now every visitor sees something chosen for them—and the long tail of our catalogue, which we'd basically been hiding, is finally finding the right people. The A/B test made the impact undeniable."}
					author={"VP of Product"}
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
					title={"Showing the same thing to every user? Personalise it."}
					description={"OpenGridLabs builds hybrid recommendation engines—collaborative filtering, content-based methods, cold-start handling, and A/B-tested ranking—so each user sees what they're most likely to want next."}
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
