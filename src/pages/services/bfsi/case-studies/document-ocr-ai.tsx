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

				<CaseStudyHero 
					categoryTag="Case Study · Insurance Technology"
					title="How Intelligent Document Processing Automated 84% of Insurance Document Extraction"
					description="A specialty insurer processing 40,000 documents per month — broker submissions, claims documents, survey reports, and medical reports — was processing every document manually, with data entry clerks transcribing information from unstructured PDFs into the core systems. OpenGridLabs built an intelligent document processing platform: ML-based document classification, multi-engine OCR, entity recognition for insurance-specific fields, and a validation workflow — automating 84% of document extraction and cutting processing time 71%."
					categoryBorderClass="border-indigo-500/30"
					categoryBgClass="bg-indigo-500/10"
					categoryTextClass="text-indigo-400"
					glowBgClass="bg-indigo-400"
					terminalIconClass="text-indigo-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Specialty insurer (anonymised)" },
						{ label: "Volume", value: "40,000 documents/month" },
						{ label: "Timeline", value: "9 months" },
						{ label: "Stack", value: "Document classification · OCR · NLP entity extraction · Validation workflow" }
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
						"Our client processes approximately 40,000 documents per month across five document types: broker submissions (new business and renewal), claims FNOL attachments, loss adjuster survey reports, medical reports for liability claims, and policy endorsement requests. Each document arrived as an unstructured PDF — sometimes a well-structured digital form, sometimes a poorly scanned handwritten page — and required a data entry clerk to extract the relevant fields and enter them into the policy or claims management system.",
						"The manual process was slow, expensive, and inconsistent. Data entry accuracy rates for complex documents (medical reports, survey reports) varied between clerks. High-volume periods created processing backlogs that delayed underwriting decisions and claims handling. And the business case for automation was clear: 40,000 documents per month at an average processing time of 12 minutes per document represented 8,000 hours of monthly capacity — the equivalent of 50 FTE — that automation could substantially reclaim.",
						"Intelligent Document Processing (IDP) is the automated extraction of structured data from unstructured documents — PDFs, images, handwritten forms — using a combination of OCR (Optical Character Recognition) for text extraction, ML-based document classification, NLP (Natural Language Processing) for entity recognition, and validation rules to verify extracted data quality."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Intelligent Document Processing?"
					definitionText="Intelligent Document Processing (IDP) is the automated extraction of structured data from unstructured documents — PDFs, images, handwritten forms — using a combination of OCR (Optical Character Recognition) for text extraction, ML-based document classification, NLP (Natural Language Processing) for entity recognition, and validation rules to verify extracted data quality."
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
					description={"Evolving manual PDF translation workflows into intelligent document ingestion systems, entity recognizers, and human-in-the-loop loops."}
					hoverBorderClass={"hover:border-indigo-500/20"}
					arrowColorClass={"text-indigo-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Intelligent Document Processing Architecture"}
					description={"Multi-source ingestion endpoints passing through classification ML steps, multi-engine OCR pipelines, and active human validation checks."}
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
					description={"A systematic 3-phase roadmap leading from initial classifier training to specialized medical NLP and retraining iterations."}
					phaseColors={[ "hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)" ]}
					axisGradientClass={"from-indigo-500 via-violet-500 to-purple-500"}
					badgeColorClass={"text-indigo-400 bg-indigo-400/10 border-indigo-400/20"}
				/>

				<MeasurableResults 
					description="Maximizing auto-approved document rates, reducing backlogs, and accelerating entry cycles."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We had 50 people whose entire job was reading PDFs and typing. That's not an exaggeration — 8,000 hours a month of reading and typing. The IDP platform didn't just save cost; it made the data available for the first time. We could suddenly do analytics on information we'd always had but never captured."}
					author={"Chief Operating Officer"}
					subtitle={"Confidential Specialty Insurer"}
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
					title={"40,000 documents a month being processed by human data entry?"}
					description={"OpenGridLabs builds intelligent document processing platforms — document classification, OCR, NLP entity extraction, and validation workflows — that automate 84% of document handling."}
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
