import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { 
	ArrowLeft, 
	ArrowRight, 
	CheckCircle2, 
	Terminal, 
	Layers, 
	ShieldCheck, 
	Cpu, 
	Quote as QuoteIcon, 
	Activity, 
	HelpCircle, 
	ChevronDown, 
	Sparkles,
	Database,
	Zap,
	Server
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "84%", label: "Document extraction fully automated", accent: "from-indigo-500 to-violet-600" },
	{ value: "71%", label: "Reduction in document processing time", accent: "from-indigo-500 to-violet-600" },
	{ value: "40K", label: "Documents processed per month", accent: "from-indigo-500 to-violet-600" },
	{ value: "9 mo", label: "Platform live", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "40,000 documents/month processed manually by a team of data entry clerks" },
	{ text: "12-minute average processing time per document — 8,000 hours monthly capacity consumed" },
	{ text: "Inconsistent data extraction accuracy — especially for medical reports and survey documents" },
	{ text: "Processing backlogs during high-volume periods delaying underwriting and claims decisions" },
	{ text: "No structured data for downstream analytics — all insight blocked behind manual extraction" }
];

const SOLUTIONS = [
	{ text: "ML document classifier identifying document type before extraction (5 document categories)" },
	{ text: "Multi-engine OCR pipeline — best-in-class OCR per document quality and type" },
	{ text: "NLP entity recognition trained on insurance-specific fields for each document category" },
	{ text: "Confidence scoring — auto-approving high-confidence extractions, routing low-confidence to human review" },
	{ text: "Structured data output feeding directly into policy and claims systems, removing re-keying" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Ingestion", items: ["Email", "Portal upload", "Fax-to-PDF", "S3", "Document pre-processing", "Quality enhancement"], color: "hsl(230,80%,60%)" },
	{ title: "Classification", items: ["ML document classifier", "Type determination", "Confidence score", "Sub-category routing"], color: "hsl(230,80%,60%)" },
	{ title: "Extraction", items: ["OCR engine selection", "NLP entity recognition", "Insurance field mapping", "Structured data output"], color: "hsl(230,80%,60%)" },
	{ title: "Validation", items: ["Confidence-based routing", "Human review queue", "Correction feedback", "Model retraining loop"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Document Classification and Broker Submissions (Months 1–3)",
		desc: "OpenGridLabs built the document classification model and deployed the extraction pipeline for broker submissions — the highest-volume document type. The model was trained on 12,000 labelled documents. Within 90 days, broker submission extraction was achieving 91% automation rate with 97% accuracy on extracted fields.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Claims Documents and Medical Reports (Months 4–7)",
		desc: "Claims FNOL attachments and loss adjuster survey reports were added. Medical report extraction was the most challenging — variable structure and specialist terminology — requiring a purpose-built NLP model trained on 2,000 annotated medical documents. Extraction accuracy reached 88% automation rate.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Endorsement Requests and Feedback Loop (Months 8–9)",
		desc: "Policy endorsement requests were automated. A feedback loop was implemented — corrections made by human reviewers automatically fed back into model retraining, improving accuracy continuously. Overall automation rate reached 84% with an ongoing improvement trajectory.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Document extraction automation rate", before: "0% (fully manual)", after: "84%", change: "84%" },
	{ metric: "Document processing time (average)", before: "12 minutes", after: "1.8 minutes (incl. review)", change: "1.8 minutes" },
	{ metric: "Data entry clerk capacity", before: "8,000 hrs/month", after: "1,280 hrs/month", change: "-84%" },
	{ metric: "Extraction accuracy (automated)", before: "Manual baseline", after: "97.3% on auto-approved", change: "97.3%" },
	{ metric: "Processing backlog incidents", before: "Regular", after: "Eliminated", change: "Eliminated" },
	{ metric: "Downstream analytics access", before: "Blocked", after: "Structured data available", change: "Structured data" }
];

const SUCCESS_FACTORS = [
	{
		title: "Document classification before extraction is the critical design decision",
		desc: "A single generic OCR model produces poor results across diverse document types. Classifying the document first — identifying it as a medical report vs. a survey report vs. a broker submission — enables a purpose-built extraction model to be applied, dramatically improving accuracy."
	},
	{
		title: "Insurance-specific NLP models outperform generic models",
		desc: "A general-purpose NLP model trained on web text does not reliably recognise insurance-specific entities — policy numbers, coverage limits, peril descriptions, medical diagnosis codes. Training purpose-built models on annotated insurance documents produces extraction accuracy that generic models cannot match."
	},
	{
		title: "The feedback loop is the improvement mechanism",
		desc: "An IDP system that achieves 84% automation on day one and stays there is a static system. A system where human corrections automatically feed model retraining achieves 84% and then 87% and then 90% — continuous improvement driven by production data. The feedback loop is what makes the investment compound."
	}
];

const FAQS = [
	{
		q: "What is OCR in insurance document processing?",
		a: "OCR (Optical Character Recognition) converts scanned or image-based document content into machine-readable text. In insurance, OCR is the first step in intelligent document processing — converting PDF images, scanned claim forms, and photographed survey reports into text that NLP and extraction models can then process to identify specific fields and entities."
	},
	{
		q: "What is the difference between OCR and IDP?",
		a: "OCR converts document images to text. IDP (Intelligent Document Processing) is a more comprehensive capability that includes OCR but adds document classification (identifying what type of document it is), entity recognition (identifying specific fields — policy number, claim amount, insured name), validation (checking extracted data for consistency and completeness), and integration with downstream systems. OCR is a component of IDP, not a substitute for it."
	}
];

export default function DocumentOcrAiCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Intelligent Document Processing Case Study | OpenGridLabs"
				description="How Intelligent Document Processing Automated 84% of Insurance Document Extraction."
				canonical="/services/bfsi/document-ocr-ai"
				keywords="Document OCR, Intelligent Document Processing, IDP, Document AI, Insurance OCR, NLP Insurance, Document Automation, Unstructured Data, InsurTech, Insurance Technology, OpenGridLabs"
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

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 backdrop-blur-md">
									Case Study · Insurance Technology
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Intelligent Document Processing Automated 84% of Insurance Document Extraction
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A specialty insurer processing 40,000 documents per month — broker submissions, claims documents, survey reports, and medical reports — was processing every document manually, with data entry clerks transcribing information from unstructured PDFs into the core systems. OpenGridLabs built an intelligent document processing platform: ML-based document classification, multi-engine OCR, entity recognition for insurance-specific fields, and a validation workflow — automating 84% of document extraction and cutting processing time 71%.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-indigo-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-indigo-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">Specialty insurer (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Volume</span>
										<span className="text-base font-semibold text-foreground">40,000 documents/month</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">9 months</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Document classification · OCR · NLP entity extraction · Validation workflow</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{STATS.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-indigo-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<Cpu className="w-5 h-5 text-indigo-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-indigo-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client processes approximately 40,000 documents per month across five document types: broker submissions (new business and renewal), claims FNOL attachments, loss adjuster survey reports, medical reports for liability claims, and policy endorsement requests. Each document arrived as an unstructured PDF — sometimes a well-structured digital form, sometimes a poorly scanned handwritten page — and required a data entry clerk to extract the relevant fields and enter them into the policy or claims management system.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The manual process was slow, expensive, and inconsistent. Data entry accuracy rates for complex documents (medical reports, survey reports) varied between clerks. High-volume periods created processing backlogs that delayed underwriting decisions and claims handling. And the business case for automation was clear: 40,000 documents per month at an average processing time of 12 minutes per document represented 8,000 hours of monthly capacity — the equivalent of 50 FTE — that automation could substantially reclaim.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-indigo-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-indigo-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
									<Zap className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Intelligent Document Processing?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Intelligent Document Processing (IDP) is the automated extraction of structured data from unstructured documents — PDFs, images, handwritten forms — using a combination of OCR (Optical Character Recognition) for text extraction, ML-based document classification, NLP (Natural Language Processing) for entity recognition, and validation rules to verify extracted data quality.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Challenges vs Solutions Delivered */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Challenge & Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Challenges & Solutions
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							Evolving manual PDF translation workflows into intelligent document ingestion systems, entity recognizers, and human-in-the-loop loops.
						</p>
					</div>

					<div className="space-y-6">
						{CHALLENGES.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-indigo-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{SOLUTIONS[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-indigo-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-400">Technical Design</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									Intelligent Document Processing Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-indigo-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Multi-source ingestion endpoints passing through classification ML steps, multi-engine OCR pipelines, and active human validation checks.
								</p>

								{/* Regulatory Alert */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 text-indigo-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Regulatory & Compliance Governance:</strong> All InsurTech solutions are built with FCA/PRA regulatory compliance, data privacy (GDPR), and actuarial governance as first-class design requirements. Audit trails, model validation, and data lineage are embedded from day one — not retrofitted before examination.
									</p>
								</div>
							</div>

							{/* Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Architecture Layers
								</h3>
								
								<div className="flex flex-col gap-3">
									{ARCHITECTURE_STAGES.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Server className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Engagement Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Engagement Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							A systematic 3-phase roadmap leading from initial classifier training to specialized medical NLP and retraining iterations.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-20" />
						
						{PHASES.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(230,80%,60%)" : idx === 1 ? "hsl(260,80%,55%)" : "hsl(280,80%,50%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3.5 py-1 rounded-full border border-indigo-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Impact</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Maximizing auto-approved document rates, reducing backlogs, and accelerating entry cycles.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-indigo-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{TABLE_RESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-indigo-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-indigo-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We had 50 people whose entire job was reading PDFs and typing. That's not an exaggeration — 8,000 hours a month of reading and typing. The IDP platform didn't just save cost; it made the data available for the first time. We could suddenly do analytics on information we'd always had but never captured."
							</p>
							<div className="w-12 h-px bg-indigo-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief Operating Officer</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Specialty Insurer</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{SUCCESS_FACTORS.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-indigo-400" />
									<h3 className="text-lg md:text-xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{FAQS.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-indigo-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-indigo-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-indigo-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								40,000 documents a month being processed by human data entry?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds intelligent document processing platforms — document classification, OCR, NLP entity extraction, and validation workflows — that automate 84% of document handling.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:shadow-indigo-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(99,102,241,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/bfsi"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
