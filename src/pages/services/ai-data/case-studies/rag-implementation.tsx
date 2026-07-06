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
	{ value: "89%", label: "Reduction in hallucinated answers", accent: "from-cyan-400 to-blue-500" },
	{ value: "94%", label: "Answers grounded in a cited source", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "2.4×", label: "Improvement in retrieval precision", accent: "from-pink-500 to-rose-400" },
	{ value: "9 wk", label: "From prototype to production RAG", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Naive fixed-size chunking split sentences and tables mid-thought, destroying meaning" },
	{ text: "Pure vector search missed exact terms, codes, and names that keyword search would catch" },
	{ text: "The most relevant passage was often buried below weaker matches in the results" },
	{ text: "Answers came with no citations, so customers couldn't verify or trust them" },
	{ text: "No way to measure retrieval quality—nobody could say why an answer was wrong" }
];

const SOLUTIONS = [
	{ text: "Structure-aware chunking that respects sections, tables, and semantic boundaries" },
	{ text: "Hybrid search combining semantic embeddings with keyword matching for the best of both" },
	{ text: "A re-ranking stage that reorders candidates so the most relevant passage reaches the model" },
	{ text: "Answers grounded strictly in retrieved context, with inline citations to source documents" },
	{ text: "A retrieval evaluation harness measuring precision, recall, and grounding on every change" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Ingestion Path", items: ["Document parsing", "Structure-aware chunking", "Embedding", "Vector + keyword index", "Metadata & access control"], color: "hsl(180,100%,50%)" },
	{ title: "Retrieval Path", items: ["Query understanding", "Hybrid (semantic + keyword) search", "Re-ranking", "Top-k context assembly"], color: "hsl(210,100%,50%)" },
	{ title: "Generation Path", items: ["Context-grounded prompting", "Inline citations", "'I don't know' fallback", "Structured answer formatting"], color: "hsl(280,100%,65%)" },
	{ title: "Eval & Ops Path", items: ["Retrieval precision / recall", "Grounding & citation checks", "Drift monitoring", "Re-indexing pipeline"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Retrieval Evaluation & Ingestion (Weeks 1–3)",
		desc: "Before tuning anything, OpenGridLabs built a retrieval evaluation harness with golden question-and-passage sets, making precision, recall, and grounding measurable. The team then rebuilt ingestion with structure-aware chunking and stronger embeddings, so the index preserved the meaning of real documents rather than fragmenting it.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Hybrid Search & Re-ranking (Weeks 4–7)",
		desc: "OpenGridLabs introduced hybrid search—blending semantic similarity with keyword matching—so exact terms, codes, and names were no longer missed. A re-ranking stage then reordered candidates to push the single most relevant passage to the top. Every change was validated on the evaluation harness, turning retrieval tuning into a measured, evidence-driven process.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Grounding, Citations & Hardening (Weeks 8–9)",
		desc: "The generation step was constrained to answer only from retrieved context, attach inline citations, and say 'I don't know' when the documents didn't support an answer—ending confident fabrication. Continuous monitoring tracked grounding and retrieval quality in production, and a re-indexing pipeline kept the index fresh as customer documents changed.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Hallucinated answers", before: "Baseline", after: "11% of baseline", change: "−89%" },
	{ metric: "Answers grounded with citation", before: "None", after: "94%", change: "New capability" },
	{ metric: "Retrieval precision @ top-k", before: "Baseline", after: "2.4× baseline", change: "+140%" },
	{ metric: "Answer accuracy (eval set)", before: "68%", after: "92%", change: "+35%" },
	{ metric: "Exact-term / code recall", before: "Weak", after: "Strong (hybrid)", change: "Improved" },
	{ metric: '"I don\'t know" on unsupported questions', before: "Rare", after: "Reliable", change: "Trustworthy" },
	{ metric: "Retrieval quality visibility", before: "None", after: "Measured & monitored", change: "New capability" }
];

const SUCCESS_FACTORS = [
	{
		title: "Measure retrieval, not just answers",
		desc: "Building a retrieval evaluation harness first meant the team could see whether the right passages were being found—separating retrieval failures from generation failures and making every improvement provable."
	},
	{
		title: "Chunking quietly decides everything",
		desc: "Structure-aware chunking that preserved sections and tables delivered some of the largest gains, because no clever search can retrieve meaning that was destroyed when the document was split."
	},
	{
		title: "Hybrid search beats either method alone",
		desc: "Semantic search captured meaning; keyword search caught exact codes and names. Combining them, then re-ranking the results, surfaced the right passage far more often than vector search by itself."
	},
	{
		title: "Grounding and 'I don't know' build trust",
		desc: "Forcing answers to come from retrieved context with citations—and to admit when the documents don't have the answer—turned a confident fabricator into a source customers could actually verify and rely on."
	}
];

const FAQS = [
	{
		q: "What is retrieval-augmented generation (RAG)?",
		a: "RAG grounds a large language model in external knowledge. Instead of relying only on what the model learned in training, it retrieves relevant passages from a document collection at query time and supplies them as context. This produces accurate, up-to-date, verifiable answers, dramatically reducing hallucinations and letting the model cite its sources."
	},
	{
		q: "Why do RAG systems still hallucinate, and how do you fix it?",
		a: "Most RAG hallucinations come from poor retrieval, not the language model. If chunking is naive, embeddings are weak, or the wrong passages are retrieved, the model is forced to guess. Fixes include smarter chunking, hybrid search combining keyword and semantic matching, a re-ranking step to surface the best passages, and prompting the model to answer only from retrieved context and cite its sources."
	}
];

export default function RAGImplementationCaseStudy() {
	return (
		<>
			<SEO
				title="RAG Implementation Case Study | OpenGridLabs"
				description="How OpenGridLabs built a production-grade RAG pipeline that cut hallucinations 89% and structured citations for a fast-scaling AI company."
				canonical="/services/ai-data/rag-implementation"
				keywords="RAG Implementation, Retrieval-Augmented Generation, Vector Database, Hybrid Search, Embeddings, Document Chunking, Re-ranking"
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
					categoryTag="Case Study · Artificial Intelligence"
					title="How a Production RAG Pipeline Cut Hallucinations 89% and Made Every Answer Cite Its Source"
					description="A fast-scaling AI company partnered with OpenGridLabs to fix an assistant that sounded confident but made things up—rebuilding retrieval from the ground up with smart chunking, hybrid search, and re-ranking so every answer was grounded in the customer's own documents and backed by a citation."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "AI / SaaS (anonymised)" },
						{ label: "Scale", value: "4M+ documents indexed" },
						{ label: "Timeline", value: "9 weeks to production" },
						{ label: "Stack", value: "Chunking · Embeddings · Hybrid Search · Re-ranking" }
					]}
				/>

				<CaseStudyCarousel
					slug="rag-implementation"
					title="RAG Implementation"
					accentColor="cyan"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/rag-implementation/1.jpg",
						"/images/case-studies/rag-implementation/2.jpg"
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
						"Our client is a venture-backed AI company whose product answers questions over each customer's private knowledge base—policies, manuals, contracts, and support history. The promise was simple and compelling: ask anything, get an accurate answer drawn from your own documents. An early version wired a language model to a basic vector search and demoed beautifully on a handful of clean files.",
						"In production, against millions of messy real-world documents, the cracks were obvious. The assistant answered fluently but often wrongly—citing nothing, blending unrelated passages, or inventing details that were nowhere in the source material. Customers in regulated settings couldn't trust an answer they couldn't verify, and every confident-but-false response chipped away at credibility. The team had assumed the language model was the problem. It wasn't. The retrieval was: if the right passages never reached the model, no amount of prompting could save the answer. They needed a production-grade RAG pipeline built for real documents at scale."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Is Retrieval-Augmented Generation (RAG)?"
					definitionText="RAG grounds a large language model in external knowledge. Instead of relying only on what the model learned in training, it retrieves relevant passages from a document collection at query time and supplies them as context. This produces accurate, up-to-date, verifiable answers, dramatically reducing hallucinations and letting the model cite its sources."
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
					tag={"Challenges & Solutions"}
					title={"Five Retrieval Gaps Resolved"}
					description={"How OpenGridLabs engineered a production RAG system."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Retrieval-Augmented Generation Pipeline"}
					description={"OpenGridLabs built a two-path RAG pipeline: an offline ingestion path that turns raw documents into a high-quality searchable index, and an online query path that retrieves, re-ranks, and grounds each answer. Separating the two means the index can be improved and re-built independently of how queries are served, and every stage is measured so retrieval quality never silently regresses."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Retrieval is where RAG is won or lost"}
					alertText={"Most RAG failures blamed on the language model are really retrieval failures—if the right passage never reaches the model, it is forced to guess. The biggest quality gains here came from upstream work: chunking that preserves meaning, hybrid search that catches both concepts and exact terms, and re-ranking that surfaces the single best passage. Fix retrieval, and hallucinations fall on their own."}
					rightColumnTitle={"RAG Ingestion & Query Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three structured phases designed to make retrieval measurable first, then systematically improve it. OpenGridLabs embedded a team of ML and search engineers and a retrieval-evaluation specialist alongside the client's product team."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, using the same golden evaluation sets throughout. The results showed that fixing retrieval—not swapping the language model—was what made answers trustworthy."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We kept trying to fix our answers by changing the model. The real problem was that the right passage never reached it. Once retrieval was solid, the hallucinations vanished—and now every answer points to exactly where it came from."}
					author={"Head of Product"}
					subtitle={"Confidential AI company"}
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
					title={"Ready to build RAG that gives answers your users can trust?"}
					description={"OpenGridLabs builds production RAG pipelines—structure-aware chunking, hybrid search, re-ranking, and grounded, cited answers—so your AI is accurate, verifiable, and reliable at scale."}
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
