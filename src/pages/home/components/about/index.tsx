import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";

// Interactive 3D Parallax Card for superior UX
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs to prevent jitter
  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformPerspective: 1200 
      }}
      className={`relative preserve-3d will-change-transform ${className}`}
    >
      {/* Inner layer pops out towards the user */}
      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="w-full h-full flex flex-col justify-end"
      >
         {children}
      </div>
    </motion.div>
  );
};

export default function HomeAbout() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Gentle background parallax (UX-friendly, no overlap)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef} 
      id="home-about"
      className="relative w-[90%] max-w-[1600px] mx-auto py-24 md:py-32"
    >
       {/* Ambient Depth Background */}
       <motion.div 
         style={{ y: bgY }} 
         className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" 
       />
       <motion.div 
         className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" 
       />

       {/* Typography Header */}
       <div className="mb-16 md:mb-24 max-w-4xl">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-3 px-4 py-2 border border-primary/20 bg-primary/5 rounded-full mb-8 backdrop-blur-md"
           >
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Who We Are</span>
           </motion.div>
           
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
           >
              Architecting the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Future.</span>
           </motion.h2>

           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-2xl text-foreground/70 leading-relaxed font-light max-w-3xl"
           >
              We merge human-centric design with bleeding-edge technology to craft intelligent platforms that empower visionary brands to scale without limits.
           </motion.p>
       </div>

       {/* Bento Grid with 3D Hover Parallax */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
           
           {/* Main Vision Card */}
           <TiltCard className="md:col-span-2 glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 dark:border-transparent bg-gradient-to-br from-black/5 dark:from-white/5 to-black/60 shadow-xl overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative z-10 max-w-lg">
                   <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">Unconstrained Innovation</h3>
                   <p className="text-foreground/80 dark:text-foreground/60 text-lg leading-relaxed">Our mission is to eliminate barriers. We ensure that raw information flows freely, and your product ideas reach their absolute limit smoothly.</p>
               </div>
               
               {/* Decorative structural grid in background */}
               <div className="absolute right-0 top-0 w-1/2 h-full opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           </TiltCard>

           {/* Stat Card 1 */}
           <TiltCard className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-transparent bg-gradient-to-t from-primary/5 to-black/40 shadow-xl overflow-hidden">
               <div className="flex flex-col h-full justify-end relative z-10">
                   <h3 className="text-5xl font-display font-bold text-primary mb-2">1M+</h3>
                   <p className="text-foreground/80 font-medium uppercase tracking-widest text-sm">Global Network</p>
               </div>
           </TiltCard>
           
           {/* Stat Card 2 */}
           <TiltCard className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-transparent bg-gradient-to-t from-accent/5 to-black/40 shadow-xl overflow-hidden">
               <div className="flex flex-col h-full justify-end relative z-10">
                   <h3 className="text-5xl font-display font-bold text-accent mb-2">99.9%</h3>
                   <p className="text-foreground/80 font-medium uppercase tracking-widest text-sm">System Uptime</p>
               </div>
           </TiltCard>

           {/* Contact/CTA Card */}
           <TiltCard className="md:col-span-2 glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 dark:border-transparent bg-gradient-to-tr from-black/5 dark:from-white/5 via-black/40 to-black/80 shadow-xl overflow-hidden group">
               <div className="flex flex-col h-full justify-end relative z-10">
                   <h3 className="text-3xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Built for Scale</h3>
                   <p className="text-foreground/80 dark:text-foreground/60 text-lg">Deployed across 10+ regions globally with military-grade redundancy.</p>
               </div>
               {/* Abstract geometric mesh */}
               <div className="absolute right-[-10%] top-[-10%] w-[300px] h-[300px] rounded-full border border-primary/20 blur-[2px] opacity-30 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute right-[5%] bottom-[-20%] w-[200px] h-[200px] rounded-full border border-accent/20 blur-[1px] opacity-30 group-hover:scale-110 transition-transform duration-700 delay-100" />
           </TiltCard>

       </div>
    </section>
  );
}
