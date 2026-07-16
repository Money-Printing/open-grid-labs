import { Link } from "react-router";

import {
	ArrowLeft,
	Layers,
	Cpu,
	Activity,
	Database,
	Zap,
	PaintbrushIcon
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
	{ value: "5 wk", label: "Brief to print-ready and digital templates", accent: "from-amber-500 to-orange-600" },
	{ value: "4", label: "Stationery items in the complete system", accent: "from-yellow-500 to-amber-600" },
	{ value: "100%", label: "Staff on branded digital templates", accent: "from-orange-500 to-red-600" },
	{ value: "3", label: "Rounds of revision before final approval", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Generic letterhead downloaded from a template website five years earlier — no connection to the current brand" },
	{ text: "Formal correspondence creating cognitive dissonance at the worst moment: when clients evaluate their decision to engage" },
	{ text: "No comp slip, envelope, or digital letterhead — correspondence handled inconsistently across the team" },
	{ text: "Print quality inconsistent because no supplier specification existed for paper stock or finish" },
	{ text: "Email-sent PDFs using inconsistent fonts and layouts that bore no resemblance to the physical letterhead" }
];

const SOLUTIONS = [
	{ text: "Branded letterhead — A4 print and digital Word/Google Docs templates — carrying the full visual identity" },
	{ text: "Complementary slip matching the letterhead system for physical enclosures and short notes" },
	{ text: "DL envelope design with branded front face and return address — coordinated with the letterhead" },
	{ text: "Digital Word and Google Docs templates locked to brand fonts, colours, and layout for consistent digital correspondence" },
	{ text: "Supplier specifications for paper stock, weight, and print finish ensuring physical quality matched brand ambition" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Audit", items: ["Existing correspondence review", "Brand guidelines check", "Touchpoint mapping", "Supplier research"], color: "hsl(45,100%,50%)" },
	{ title: "Design", items: ["Layout system", "Typography application", "Visual identity integration", "Hierarchy refinement"], color: "hsl(35,100%,50%)" },
	{ title: "Production", items: ["Print-ready PDFs", "Supplier specs", "Paper & finish selection", "Proof sign-off"], color: "hsl(20,100%,50%)" },
	{ title: "Digital", items: ["Word templates", "Google Docs templates", "Staff rollout", "Usage guidelines"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit & Design Brief (Week 1)",
		desc: "OpenGridLabs reviewed all existing correspondence materials, benchmarked the stationery against the brand guidelines, and identified every touchpoint where stationery was used — physical post, enclosures, formal digital PDFs, and email-attached letters. A design brief was produced specifying layout requirements, brand application rules, and supplier quality targets.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design & Revision (Weeks 2–4)",
		desc: "All four stationery items were designed in sequence: letterhead first, then comp slip, then envelope, then digital templates. Each was reviewed against the brand guidelines and against the others to ensure system coherence. Three rounds of revision refined the layout hierarchy, type treatment, and colour application before client sign-off.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Production & Digital Templates (Week 5)",
		desc: "Print-ready PDFs were produced for all three physical items with full bleed, crop marks, and colour profiles for offset printing. Supplier specifications were written covering paper stock (120gsm silk for letterhead, 100gsm uncoated for comp slip), envelope board weight, and spot UV finish options. Word and Google Docs templates were built and tested across both applications before being distributed to the full team.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Letterhead quality vs. brand standard", before: "Misaligned (old template)", after: "Fully aligned", change: "Fully aligned" },
	{ metric: "Physical stationery items on brand", before: "0 / 4", after: "4 / 4", change: "4 / 4" },
	{ metric: "Staff on digital branded templates", before: "0%", after: "100%", change: "100%" },
	{ metric: "Supplier specification", before: "None", after: "Complete spec", change: "Complete spec" },
	{ metric: "Client perception of correspondence quality", before: "Generic / inconsistent", after: "Premium / consistent", change: "Premium / consistent" },
	{ metric: "Time to produce a compliant letter (staff)", before: "~20 min formatting", after: "<2 min (template)", change: "<2 min (template)" }
];

const SUCCESS_FACTORS = [
	{
		title: "System thinking over individual items",
		desc: "Designing a letterhead in isolation produces a letterhead. Designing a letterhead as part of a four-item stationery system — where each item coordinates with the others — produces a system that makes every piece of correspondence feel intentional."
	},
	{
		title: "Digital templates are the real delivery",
		desc: "Print files are used once, at the printer. Digital templates are used every week by every team member. The quality of the Word and Google Docs templates — font embedding, locked layouts, correct colour profiles — determined whether the investment paid out in practice."
	},
	{
		title: "Supplier specification is brand protection",
		desc: "A beautifully designed letterhead printed on the wrong paper stock looks cheap. The supplier specification — paper weight, finish, printing method — was as important as the design itself for ensuring the physical artefact matched the brand's premium positioning."
	}
];

const FAQS = [
	{
		q: "What should a branded stationery system include?",
		a: "A complete branded stationery system for professional services typically includes: letterhead (A4, print and digital), a complimentary slip (DL or A5 for enclosures), a branded envelope (DL or C4), and digital Word/Google Docs templates for each item used digitally. More comprehensive systems add notepads, folders, and presentation covers. The specific items depend on the correspondence volume and client touchpoints of the business."
	},
	{
		q: "What is a complimentary slip and when is it used?",
		a: "A complimentary slip (or 'comp slip') is a small branded card — typically A5 or DL — enclosed with physical mailings to identify the sender. It carries the company name, address, and contact details, and may include a short handwritten note. It performs the same branding function as a cover letter but in a compact format suited to accompanying documents, gifts, or cheques."
	}
];

export default function LetterheadDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Letterhead Design Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a complete branded stationery system — letterhead, comp slip, envelope, and digital templates — making every correspondence a credible brand touchpoint."
				canonical="/services/digital-experience/letterhead-design"
				keywords="Letterhead Design, Stationery System, Brand Stationery, Complimentary Slip, Branded Envelope, Corporate Stationery, Print Design, Digital Templates, Brand Identity, Professional Services"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Amber Theme Ambient Glow */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700"
					style={{
						background: `radial-gradient(circle, hsl(45,100%,50%) 0%, hsl(35,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link
						to="/services/digital-experience"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Digital Experience Design
					</Link>
				</div>

				<CaseStudyHero
					categoryTag="Case Study · Brand Identity"
					title="How a Complete Stationery System Made Every Outbound Communication a Credible Brand Touchpoint"
					description="A professional services firm was winning enterprise accounts on the strength of its expertise but sending follow-up letters and formal correspondence on generic letterhead downloaded from a template website five years earlier. OpenGridLabs designed a complete branded stationery system — letterhead, comp slip, envelope, and digital templates — that matched the firm's calibre and made every communication a brand-consistent touchpoint."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Professional Services / Legal (anonymised)" },
						{ label: "Scope", value: "Full stationery system — letterhead, comp slip, envelope, digital" },
						{ label: "Timeline", value: "5 weeks" },
						{ label: "Deliverables", value: "Print files · Digital Word/Docs templates · Supplier specs" }
					]}
				/>

				<CaseStudyCarousel
					slug="letterhead-design"
					title="How a Complete Stationery System Made Every Outbound Communication a Credible Brand Touchpoint"
					accentColor="purple"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/letterhead-design/1.jpg",
						"/images/case-studies/letterhead-design/2.jpg"
					]}
				/>

				<StatsGrid
					stats={STATS}
					hoverBorderClass="hover:border-amber-500/30"
					hoverTextClass="group-hover:text-amber-500"
				/>

				<CaseStudyBackground
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<PaintbrushIcon className="w-5 h-5" />}
					contextParagraphs={[
						"The firm had recently gone through a brand elevation exercise — new visual identity, refined typography, updated colour palette. The brand guidelines were excellent. Their website reflected the updated brand. Their pitch materials were consistent. Their letterhead was a five-year-old generic template with no connection to any of it.",
						"The disconnect was most damaging at the most sensitive moment in the client relationship: after a significant proposal or at the start of an engagement, when formal correspondence was sent. The cognitive dissonance between the quality of the firm's work and the quality of their communications materials was undermining confidence exactly when confidence mattered most. OpenGridLabs designed a complete stationery system that eliminated the gap.",
						"A branded stationery system is a coordinated suite of physical and digital communication materials — letterhead, complementary slip, envelope, and digital templates — that apply the company's visual identity consistently to all formal correspondence. A system approach ensures every item works together, creating a unified impression across every touchpoint where correspondence is sent."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is a Branded Stationery System?"
					definitionText="A branded stationery system is a coordinated suite of physical and digital communication materials — letterhead, complementary slip, envelope, and digital templates — that apply the company's visual identity consistently to all formal correspondence. A system approach ensures every item works together, creating a unified impression across every touchpoint where correspondence is sent."
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
					tag={"The Gap & The Solution"}
					title={"Challenges & Solutions"}
					description={"Replacing disconnected legacy correspondence with a unified stationery system matching the firm's elevated brand."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Stationery Design Process"}
					description={"A systematic stationery design process ensuring every item expresses the brand consistently across print and digital formats."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Designing all items together — not sequentially as separate projects — ensures the system coherence that makes a collection of stationery feel like a unified identity expression."}
					rightColumnTitle={"Stationery Pipeline Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A five-week design and production process from audit through print-ready files and digital template rollout."}
					phaseColors={["hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)"]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults
					description="Replacing generic templates with a coordinated stationery system aligned every outbound communication with the firm's elevated brand positioning."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"We'd done all the work to elevate the brand, and then we were still sending letters on a template that looked like it came with Microsoft Word. The new stationery is the first thing clients mention when they receive it — and that's exactly what it should do."}
					author={"Managing Partner"}
					subtitle={"Confidential Professional Services Firm"}
					accentLineClass={"bg-amber-500"}
					iconColorClass={"text-amber-500/10"}
				/>

				<CaseStudySuccessFactors
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-amber-500/20"}
					iconColorClass={"text-amber-500"}
				/>

				<CaseStudyFaq
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-amber-500"}
					activeChevronColorClass={"text-amber-500"}
				/>

				<CaseStudyCta
					title={"Does your stationery match your brand?"}
					description={"OpenGridLabs designs complete branded stationery systems — letterhead, comp slips, envelopes, and digital templates — ensuring every piece of correspondence is a confident, consistent brand expression."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-amber-400"}
					iconColorClass={"text-amber-500"}
					btnGradientClass={"from-amber-500 to-orange-500"}
					btnShadowColor={"245,158,11,0.2"}
				/>
			</div>
		</>
	);
}
