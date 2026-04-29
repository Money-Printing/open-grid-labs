import { motion } from "motion/react";
import { Search, Map, Layers, Code2, Rocket } from "lucide-react";
import PageHeading from "../../../../components/page-heading";

const steps = [
  {
    id: 1,
    title: "Discovery",
    desc: "We deep-dive into your goals, audience, and market landscape to uncover insights that shape every decision downstream.",
    icon: Search,
    accent: "from-blue-500 to-cyan-400",
    glowColor: "hsla(210, 100%, 50%, 0.12)",
    accentText: "text-blue-400",
  },
  {
    id: 2,
    title: "Strategy",
    desc: "We architect the technical blueprint — selecting frameworks, mapping user flows, and defining the roadmap to ship fast.",
    icon: Map,
    accent: "from-violet-500 to-fuchsia-400",
    glowColor: "hsla(280, 100%, 60%, 0.12)",
    accentText: "text-violet-400",
  },
  {
    id: 3,
    title: "Prototype",
    desc: "High-fidelity interactive prototypes are crafted so you can see, feel, and validate the product before a single line of code.",
    icon: Layers,
    accent: "from-amber-400 to-orange-400",
    glowColor: "hsla(35, 100%, 55%, 0.12)",
    accentText: "text-amber-400",
  },
  {
    id: 4,
    title: "Engineering",
    desc: "Our team builds production-grade systems with clean architecture, rigorous testing, and performance baked into every commit.",
    icon: Code2,
    accent: "from-emerald-400 to-teal-400",
    glowColor: "hsla(160, 80%, 50%, 0.12)",
    accentText: "text-emerald-400",
  },
  {
    id: 5,
    title: "Launch & Scale",
    desc: "We deploy with zero-downtime strategies, monitor performance in real-time, and iterate rapidly based on live user data.",
    icon: Rocket,
    accent: "from-rose-400 to-pink-500",
    glowColor: "hsla(350, 90%, 60%, 0.12)",
    accentText: "text-rose-400",
  },
];

export default function HomeWorkflow() {
  return (
    <section
      id="home-workflow"
      className="w-full flex flex-col items-center px-5 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-1/3 left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <PageHeading
        preTitle="How"
        mainTitle="We Build"
        postTitle="Your Vision"
        hideIcon
      />

      {/* Timeline Container */}
      <div className="relative w-[90%] max-w-[1600px] mx-auto mt-20 md:mt-28">

        {/* ── VERTICAL SPINE (Desktop) ──────────────────────── */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]">
          {/* Base line */}
          <div className="absolute inset-0 bg-white/50 dark:bg-foreground/5" />
          {/* Animated pulse traveling down */}
          <motion.div
            className="absolute left-0 w-full bg-gradient-to-b from-primary via-primary to-transparent"
            style={{ height: "120px" }}
            animate={{ top: ["-120px", "100%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
        </div>

        {/* ── STEPS ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-16 md:gap-24 relative">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* ── Center Node (Desktop) ─────────────────── */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Glow ring */}
                    <motion.div
                      className={`absolute -inset-3 rounded-full bg-gradient-to-r ${step.accent} opacity-0`}
                      whileInView={{ opacity: [0, 0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      viewport={{ once: true }}
                    />
                    <div className="w-14 h-14 rounded-full bg-background border-2 border-black/10 dark:border-transparent flex items-center justify-center relative z-10 shadow-lg">
                      <span className={`font-display font-bold text-lg bg-gradient-to-r ${step.accent} text-transparent bg-clip-text`}>
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Card ──────────────────────────────────── */}
                <div
                  className={`w-full md:w-[calc(50%-60px)] ${
                    isLeft ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                  }`}
                >
                  <div className="group relative glass-panel rounded-[32px] border border-black/5 dark:border-transparent p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-black/10 dark:border-transparent hover:shadow-lg dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: `radial-gradient(circle at ${isLeft ? "right" : "left"} center, ${step.glowColor}, transparent 70%)` }}
                    />

                    {/* Connector arm to spine (Desktop) */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[60px] h-[2px] bg-gradient-to-r ${
                        isLeft
                          ? `${step.accent} right-[-60px]`
                          : `${step.accent} left-[-60px]`
                      }`}
                      style={{ direction: isLeft ? "ltr" : "rtl" }}
                    />

                    {/* Mobile step number */}
                    <div className="md:hidden flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.accent} flex items-center justify-center shadow-lg`}>
                        <span className="text-foreground font-bold text-sm">
                          {String(step.id).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent" />
                    </div>

                    <div className="relative z-10">
                      {/* Icon + Title Row */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.accent} bg-opacity-10 flex items-center justify-center shadow-[0_0_20px_${step.glowColor}]`}
                             style={{ background: `linear-gradient(135deg, ${step.glowColor}, transparent)` }}>
                          <Icon size={22} className={step.accentText} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500"
                            style={{ "--tw-gradient-from": "white", "--tw-gradient-to": "white" } as React.CSSProperties}>
                          <span className={`group-hover:bg-gradient-to-r group-hover:${step.accent} group-hover:text-transparent group-hover:bg-clip-text`}>
                            {step.title}
                          </span>
                        </h3>
                      </div>

                      <p className="text-base md:text-lg text-foreground/70 dark:text-foreground/50 group-hover:text-foreground/70 transition-colors duration-500 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>

                    {/* Giant watermark number */}
                    <div className={`absolute -bottom-6 ${isLeft ? "-right-4" : "-left-4"} text-[140px] font-display font-black leading-none select-none pointer-events-none`}>
                      <span className={`bg-gradient-to-b ${step.accent} text-transparent bg-clip-text opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700`}>
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
