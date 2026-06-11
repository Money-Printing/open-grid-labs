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

const STATS = [
	{ value: "10K", label: "On-brand creative assets per day", accent: "from-emerald-400 to-teal-500" },
	{ value: "−73%", label: "Cost per production-ready asset", accent: "from-cyan-400 to-blue-500" },
	{ value: "89%", label: "Pass rate through quality & brand filters", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "10 wk", label: "From brief to production pipeline", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "Off-the-shelf models generated visually generic output with no brand consistency" },
	{ text: "No quality guarantee — model outputs varied wildly and required heavy manual review" },
	{ text: "No safeguard against off-brand, inappropriate, or legally risky content" },
	{ text: "No integration with the creative team's brief and approval workflow" },
	{ text: "Output at scale meant volume decisions were needed before quality filters existed" }
];

const SOLUTIONS = [
	{ text: "A diffusion model fine-tuned on the brand's visual library using LoRA" },
	{ text: "A structured prompt-engineering layer encoding brand guidelines, style, and restrictions" },
	{ text: "Automated quality and brand-compliance filters scoring and triaging every output" },
	{ text: "A human-review queue for edge cases, with approvals feeding back into the fine-tune" },
	{ text: "An API-connected brief intake and asset-delivery workflow for the creative team" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Brief", items: ["Creative brief intake", "Structured prompt assembly", "Brand-guideline encoding", "Negative prompt constraints"], color: "hsl(180,100%,50%)" },
	{ title: "Generate", items: ["LoRA-fine-tuned diffusion model", "Multi-seed batch generation", "Style conditioning", "Resolution & aspect control"], color: "hsl(210,100%,50%)" },
	{ title: "Filter", items: ["Aesthetic quality scoring", "Brand-consistency classifier", "Safety & compliance checks", "Edge-case review queue"], color: "hsl(280,100%,65%)" },
	{ title: "Deliver", items: ["Approved asset delivery", "DAM integration", "Reviewer feedback loop", "Fine-tune improvement cycle"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Brand Fine-Tuning (Weeks 1–4)",
		desc: "OpenGridLabs curated a training set from the brand's existing visual library, cleaned and annotated it for style and subject consistency, and fine-tuned the diffusion model using LoRA. The fine-tune was evaluated against the brand team's own quality ratings on a held-out set until outputs were consistently on-brand without prompting.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Filters, Guardrails & Prompt Layer (Weeks 5–8)",
		desc: "Automated quality and brand-compliance scoring was built and calibrated against brand-team ratings, reducing manual review to a triage queue rather than an exhaustive check. A structured prompt-engineering layer encoded brand guidelines and content restrictions, and negative prompts were refined to suppress off-brand outputs before they reached the filter.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Workflow Integration & Enablement (Weeks 9–10)",
		desc: "The pipeline was connected to the creative team's brief intake and digital asset management system, with a lightweight approval workflow for the review queue. OpenGridLabs trained the creative team to write effective briefs and the technical team to retrain and extend the fine-tune as the brand evolves.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Assets produced per day", before: "~200 (agency-limited)", after: "10,000+", change: "50× volume" },
	{ metric: "Cost per production-ready asset", before: "Baseline", after: "27% of baseline", change: "−73%" },
	{ metric: "Brand consistency", before: "Variable", after: "Filter-enforced", change: "Consistent" },
	{ metric: "Asset pass rate (quality + brand)", before: "—", after: "89%", change: "High-yield" },
	{ metric: "Time from brief to assets", before: "Days–weeks", after: "Minutes–hours", change: "Same-day" },
	{ metric: "Creative team capacity", before: "Bottleneck", after: "Freed for strategy", change: "Unlocked" }
];

const SUCCESS_FACTORS = [
	{
		title: "Fine-tuning beats prompting for brand identity",
		desc: "A general model prompted to be \"on-brand\" guesses at what that means. A model fine-tuned on the brand's own images has absorbed the specific visual identity — colours, composition, aesthetic — that words can't fully specify."
	},
	{
		title: "Quality filters make scale trustworthy",
		desc: "Volume without quality control produces noise. Automated scoring and a calibrated pass threshold meant the ten thousand daily outputs were genuinely production-ready, not a pile requiring exhaustive human triage."
	},
	{
		title: "Guardrails protect the brand and the business",
		desc: "Safety and compliance checks were not bolted on — they were built into the pipeline from the start. Off-brand or legally risky outputs were caught before reaching the review queue, not discovered after publication."
	},
	{
		title: "Human review stays in the loop where it matters",
		desc: "The edge-case queue preserved human judgement on genuinely ambiguous outputs, and reviewers' decisions fed directly back into fine-tune improvements — so the model kept learning the brand's evolving standards rather than drifting from them."
	}
];

const FAQS = [
	{
		q: "What is generative AI?",
		a: "Generative AI models create new content — images, text, audio, video, or code — by learning the statistical patterns of a training dataset. For images, diffusion models learn to iteratively denoise random noise into coherent images guided by text prompts. Fine-tuning on domain-specific data enables brand-consistent, high-volume generation."
	},
	{
		q: "What is a diffusion model and how does it generate images?",
		a: "A diffusion model learns to generate images by learning the reverse of a noise-adding process. During training, clean images are progressively corrupted with noise. The model learns to predict and remove that noise step by step. At generation time it starts from pure noise and iteratively denoises it into a coherent image, guided by a text prompt or other conditioning signal."
	}
];

export default function GenerativeAICaseStudy() {
	return (
		<>
			<SEO
				title="Generative AI Case Study | OpenGridLabs"
				description="How OpenGridLabs built a custom generative AI pipeline with diffusion model fine-tuning, prompt guardrails, and automated brand quality filters."
				canonical="/services/ai-data/generative-ai"
				keywords="Generative AI, Diffusion Models, Image Generation, LoRA Fine-tuning, Brand-Consistent Generation, AI Content Pipeline, Prompt Engineering, Quality Filtering, Creative AI, Content Automation"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(330,100%,60%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
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
					title="How Generative AI Produced 10,000 On-Brand Creative Assets a Day — and Cut Content Costs 73%"
					description="A fast-scaling company's creative operation couldn't keep pace with the volume of content its marketing and product teams needed. OpenGridLabs built a generative AI content pipeline — fine-tuning a diffusion model on the brand's visual identity, combining it with prompt-engineering guardrails and quality filtering — to produce ten thousand on-brand assets a day at a fraction of the previous cost."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Media / E-commerce (anonymised)" },
						{ label: "Scale", value: "10K+ assets / day" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "Diffusion Fine-tuning · Prompt Engineering · Quality Filters" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-pink-500/30"
					hoverTextClass="group-hover:text-pink-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a fast-scaling company in a visually driven category — their marketing, product, and commerce surfaces are all image-heavy, and the volume of creative assets they need keeps growing faster than any agency or in-house team could deliver. Commissioning photography or illustration for every use case was expensive, slow, and logistically complex; stock imagery looked generic; and the team trying to keep pace was stretched thin.",
						"The opportunity was obvious: generative AI had reached a point where a well-configured model could produce photorealistic, varied, on-brand images at scale. But the off-the-shelf tools generated generic output rather than brand-consistent work, produced no reliable quality guarantees, and had no safeguards against off-brand or inappropriate content slipping through. What the team needed was a purpose-built generative AI pipeline: fine-tuned on their brand identity, guardrailed with prompt and quality controls, and integrated into the workflow where creative teams could direct it.",
						"Generative AI models create new content — images, text, audio, video, or code — by learning the statistical patterns of a training dataset. For image generation, diffusion models now dominate: they learn to iteratively denoise random noise into coherent images, guided by text prompts or other conditioning signals. Fine-tuning on brand-specific data teaches the model a company's visual identity, enabling high-volume generation of on-brand original content rather than generic stock imagery."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Generative AI?"
					definitionText="Generative AI models create new content — images, text, audio, video, or code — by learning the statistical patterns of a training dataset. For image generation, diffusion models now dominate: they learn to iteratively denoise random noise into coherent images, guided by text prompts or other conditioning signals. Fine-tuning on brand-specific data teaches the model a company's visual identity, enabling high-volume generation of on-brand original content rather than generic stock imagery."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-pink-500/10"
					definitionIconBorderClass="border-pink-500/20"
					definitionIconColorClass="text-pink-400"
					glowColorClass="bg-pink-400"
					gradientFromClass="from-pink-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Production Gaps Resolved"}
					description={"How OpenGridLabs built a controlled, scalable image generation pipeline."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"Pipeline Architecture"}
					description={"OpenGridLabs built a generation pipeline that takes a creative brief from the team, generates a batch of candidates from the fine-tuned model, scores them against quality and brand criteria, and delivers the passing set to an approval queue — with the whole loop feeding back into ongoing model improvement."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Fine-tuning teaches the model the brand — prompts alone cannot"}
					alertText={"Prompting a general diffusion model to stay on-brand produces inconsistent results because the model has no deep knowledge of the brand's specific visual identity. Fine-tuning on the brand's own curated image library using LoRA taught the model the particular colour palette, composition style, and aesthetic that words struggle to specify precisely — cutting the manual correction work dramatically compared to prompt-only approaches."}
					rightColumnTitle={"Generative AI Content Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases over ten weeks, starting with brand fine-tuning and ending with a fully integrated creative workflow. OpenGridLabs embedded a team of generative AI engineers and a brand specialist alongside the client's creative and product teams."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-cyan-400 via-purple-500 to-pink-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Outcomes were measured over 60 days post-deployment against the prior agency and stock-imagery baseline."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The model learned our brand in a way we couldn't get from prompting alone. We now produce in a day what used to take a week, and our creative team spends its time on the work that actually needs human judgement — not on churning out variants."}
					author={"Head of Creative"}
					subtitle={"Confidential Media Company"}
					accentLineClass={"bg-pink-400"}
					iconColorClass={"text-pink-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-pink-500/20"}
					iconColorClass={"text-pink-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-pink-400"}
					activeChevronColorClass={"text-pink-400"}
				/>

				<CaseStudyCta 
					title={"Need generative AI that actually knows your brand?"}
					description={"OpenGridLabs builds generative AI pipelines — diffusion fine-tuning, brand-consistent generation, quality filters, and workflow integration — so your creative output scales without drifting off-brand."}
					moreCaseStudiesLink={"/services/ai-data"}
					glowBgClass={"bg-pink-400"}
					iconColorClass={"text-pink-400"}
					btnGradientClass={"from-pink-400 to-cyan-500"}
					btnShadowColor={"244,63,94,0.2"}
				/>
			</div>
		</>
	);
}
