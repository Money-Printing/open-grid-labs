import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageHeading from "../../../../components/page-heading/index.tsx";
import ButtonLink from "../../../../components/ui/button-link.tsx";
import { Code2, Brain, Palette, ArrowUpRight, Cloud } from "lucide-react";

// ── Service Data ──────────────────────────────────────────────
const categories = [
  {
    id: "ai-data",
    label: "AI & Data",
    icon: Brain,
    color: "from-violet-500 to-fuchsia-400",
    glowColor: "hsla(280, 100%, 60%, 0.15)",
    accentClass: "text-violet-600 dark:text-violet-400",
    borderAccent: "border-violet-600/30 dark:border-violet-400/30",
    bgAccent: "bg-violet-600/10 dark:bg-violet-400/10",
    heading: "AI & Data Intelligence",
    tagline: "Machines that think. Data that speaks.",
    description: "We build intelligent systems that learn, predict, and adapt — from conversational AI agents to deep learning pipelines that turn raw data into decisive business advantage.",
    link: "/services/ai-data",
    cta: "Discover AI",
    capabilities: [
      { name: "Predictive Analytics", detail: "Forecast trends & behaviors" },
      { name: "LLM Integration", detail: "GPT-powered agents & workflows" },
      { name: "Computer Vision", detail: "Object detection, medical imaging" },
      { name: "NLP Pipelines", detail: "Sentiment, intent, entity extraction" },
      { name: "ML Operations", detail: "Model training, monitoring, deployment" },
    ],
  },
  {
    id: "product-engineering",
    label: "Product Engineering",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    glowColor: "hsla(210, 100%, 50%, 0.15)",
    accentClass: "text-blue-600 dark:text-blue-400",
    borderAccent: "border-blue-600/30 dark:border-blue-400/30",
    bgAccent: "bg-blue-600/10 dark:bg-blue-400/10",
    heading: "Product Engineering",
    tagline: "Scalable architectures. Rapid iteration.",
    description: "We engineer production-grade platforms that handle millions of users — blazing-fast SaaS products, seamless mobile experiences, and secure APIs.",
    link: "/services/product-engineering",
    cta: "Build Your Product",
    capabilities: [
      { name: "SaaS Platforms", detail: "Multi-tenant architectures" },
      { name: "Mobile Engineering", detail: "Cross-platform native experiences" },
      { name: "API Architecture", detail: "RESTful, GraphQL, real-time systems" },
      { name: "Frontend Ecosystems", detail: "React, Next.js, high-performance SPAs" },
      { name: "Security Hardening", detail: "Zero-trust, encryption, compliance" },
    ],
  },
  {
    id: "cloud-platform",
    label: "Cloud & Platform",
    icon: Cloud,
    color: "from-orange-500 to-amber-400",
    glowColor: "hsla(30, 100%, 50%, 0.15)",
    accentClass: "text-orange-600 dark:text-orange-400",
    borderAccent: "border-orange-600/30 dark:border-orange-400/30",
    bgAccent: "bg-orange-600/10 dark:bg-orange-400/10",
    heading: "Cloud & Platform",
    tagline: "Infinite scale. Zero downtime.",
    description: "Robust cloud-native architectures that ensure high availability, security, and elasticity for your most critical enterprise workloads.",
    link: "/services/cloud-platform",
    cta: "Scale Your Cloud",
    capabilities: [
      { name: "Cloud Migration", detail: "Seamless transitions to AWS/Azure/GCP" },
      { name: "DevOps & CI/CD", detail: "Automated delivery pipelines" },
      { name: "Microservices", detail: "Kubernetes, Docker, Serverless" },
      { name: "Infrastructure as Code", detail: "Terraform, Ansible provisioning" },
      { name: "Performance Optimization", detail: "Latency reduction & cost control" },
    ],
  },
  {
    id: "digital-experience",
    label: "Digital Experience",
    icon: Palette,
    color: "from-emerald-400 to-teal-400",
    glowColor: "hsla(160, 80%, 50%, 0.15)",
    accentClass: "text-emerald-600 dark:text-emerald-400",
    borderAccent: "border-emerald-600/30 dark:border-emerald-400/30",
    bgAccent: "bg-emerald-600/10 dark:bg-emerald-400/10",
    heading: "Digital Experience",
    tagline: "Interfaces that convert. Experiences that wow.",
    description: "We craft pixel-perfect interfaces, immersive 3D web experiences, and brand identities that drive measurable engagement and retention.",
    link: "/services/digital-experience",
    cta: "View Experiences",
    capabilities: [
      { name: "UI Engineering", detail: "Design systems, component libraries" },
      { name: "3D Web & WebGL", detail: "Interactive immersive experiences" },
      { name: "UX Strategy", detail: "Research-driven user journeys" },
      { name: "Motion Design", detail: "Micro-interactions & animation" },
      { name: "Conversion Design", detail: "A/B-tested, data-informed layouts" },
    ],
  },
];

export default function HomeServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = categories[activeIdx];

  return (
    <section
      id="home-services"
      className="w-full flex flex-col items-center relative py-24 overflow-hidden"
    >
      {/* Ambient glow that shifts with active category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id + "-glow"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none -z-10"
        >
          <div
            className="absolute top-[30%] left-[20%] w-[600px] h-[600px] rounded-full blur-[200px]"
            style={{ background: active.glowColor }}
          />
          <div
            className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full blur-[150px]"
            style={{ background: active.glowColor }}
          />
        </motion.div>
      </AnimatePresence>

      <PageHeading
        preTitle="Core"
        mainTitle="Capabilities"
        postTitle="& Expertise"
      />

      <div className="w-[90%] max-w-[1600px] mx-auto mt-16">
        {/* ── Tab Selectors ─────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat, idx) => {
            const isActive = idx === activeIdx;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveIdx(idx)}
                className={`
                  relative flex items-center gap-3 px-6 py-3.5 rounded-full
                  font-medium text-sm md:text-base
                  transition-all duration-500 cursor-pointer
                  border backdrop-blur-md
                  ${
                    isActive
                      ? `${cat.borderAccent} ${cat.bgAccent} text-foreground shadow-lg`
                      : "border-black/10 dark:border-transparent bg-white/50 dark:bg-foreground/5 text-foreground/70 dark:text-foreground/50 hover:text-foreground/80 hover:border-black/20 dark:border-transparent"
                  }
                `}
              >
                <Icon size={18} className={isActive ? cat.accentClass : ""} />
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="services-tab-indicator"
                    className={`absolute inset-0 rounded-full border ${cat.borderAccent} pointer-events-none`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Content Panel ─────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 glass-panel rounded-[40px] border border-black/5 dark:border-transparent overflow-hidden shadow-lg dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              
              {/* ── Left: Hero Content ──────────────────────── */}
              <div className="lg:col-span-5 p-10 md:p-14 lg:p-16 flex flex-col justify-between relative">
                {/* Top accent line */}
                <div className={`absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent`} />
                
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className={`font-mono text-xs tracking-[0.3em] uppercase mb-6 ${active.accentClass}`}
                  >
                    {active.tagline}
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground tracking-tight leading-[1.1] mb-8"
                  >
                    {active.heading.split(" ").map((word, i) => (
                      <span key={i}>
                        {i === 0 ? (
                          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${active.color}`}>
                            {word}
                          </span>
                        ) : (
                          <> {word}</>
                        )}
                      </span>
                    ))}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="text-lg text-foreground/80 dark:text-foreground/60 font-light leading-relaxed mb-12"
                  >
                    {active.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <ButtonLink to={active.link} className="w-fit">
                    {active.cta}
                  </ButtonLink>
                </motion.div>
              </div>

              {/* ── Right: Capabilities List ────────────────── */}
              <div className="lg:col-span-7 p-10 md:p-14 lg:p-16 lg:border-l border-t lg:border-t-0 border-black/5 dark:border-transparent bg-foreground/[0.02] relative">
                <div className="space-y-0">
                  {active.capabilities.map((cap, i) => (
                    <motion.div
                      key={cap.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.08,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group/row flex items-center justify-between py-6 border-b border-black/5 dark:border-transparent last:border-b-0 cursor-default"
                    >
                      <div className="flex items-center gap-6">
                        {/* Animated index number */}
                        <span className={`font-mono text-sm ${active.accentClass} opacity-40 group-hover/row:opacity-100 transition-opacity w-8`}>
                          0{i + 1}
                        </span>
                        
                        <div>
                          <h4 className="text-xl md:text-2xl font-semibold text-foreground group-hover/row:text-transparent group-hover/row:bg-clip-text group-hover/row:bg-gradient-to-r transition-all duration-300" 
                              style={{ '--tw-gradient-from': 'transparent', '--tw-gradient-to': 'transparent' } as React.CSSProperties}>
                            <span className={`group-hover/row:text-transparent group-hover/row:bg-clip-text group-hover/row:bg-gradient-to-r ${active.color}`}>
                              {cap.name}
                            </span>
                          </h4>
                          <p className="text-sm text-foreground/80 dark:text-foreground/60 dark:text-foreground/40 group-hover/row:text-foreground/80 dark:text-foreground/60 transition-colors mt-1">
                            {cap.detail}
                          </p>
                        </div>
                      </div>

                      {/* Hover arrow */}
                      <div className="opacity-0 group-hover/row:opacity-100 transition-all duration-300 translate-x-2 group-hover/row:translate-x-0">
                        <ArrowUpRight size={20} className={active.accentClass} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
