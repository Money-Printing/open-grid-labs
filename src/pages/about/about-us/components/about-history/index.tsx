import { Activity, Megaphone, TrendingUp, Zap } from "lucide-react";
import PageHeading from "../../../../../components/page-heading";
import type { ReactNode } from "react";

const timelineData = [
  {
    year: "2022",
    description: "Partnered with Morphle Labs and Healthcare Tech Companies to build microscopic scanner software and cloud platforms for medical devices.",
    icon: <Activity />,
  },
  {
    year: "2023",
    description: "Developed 'AirTrader' trading simulator and an advanced Tread Pattern Monitoring System for automotive manufacturing.",
    icon: <TrendingUp />,
  },
  {
    year: "2024",
    description: "Launched sophisticated Crypto Analytical Tools, a High-Frequency Option Trader, and the 'Champspace' Learn & Earn platform.",
    icon: <Zap />,
  },
  {
    year: "2025",
    description: "Released 'Adnow', a unified advertising management platform consolidating Meta, Google, and Amazon campaigns.",
    icon: <Megaphone />,
  },
];

type TimelineItem = {
  year: string;
  description: string;
  icon: ReactNode;
};

type TimelineProps = {
  data: TimelineItem[];
};

const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="relative py-12">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-[3px] border-primary/20 shadow-[0_0_15px_hsla(210,100%,50%,0.2)]"></div>
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-1/4 border-l-[3px] border-primary"></div>

      <div className="flex flex-col gap-16 relative z-10">
        {data.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center w-full ${isLeft ? "md:justify-start" : "md:justify-end"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_hsla(210,100%,50%,0.6)] text-white flex items-center justify-center z-20">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors duration-300 group">
                    <span className="text-primary font-display font-bold text-3xl tracking-widest drop-shadow-[0_0_10px_hsla(210,100%,50%,0.3)]">{item.year}</span>
                    <p className="mt-4 text-muted-foreground text-lg leading-relaxed group-hover:text-white/90 transition-colors">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:hidden absolute left-6 top-0 bottom-0 border-l-[3px] border-primary/20" />
      <div className="md:hidden absolute left-6 top-0 h-1/3 border-l-[3px] border-primary" />
    </div>
  );
};

export default function AboutHistory() {
  return (
    <section
      id="about-us-history"
      className="w-full flex flex-col items-center justify-center text-center relative py-20 mt-10"
    >
      <PageHeading
        preTitle="Our"
        mainTitle="Agency"
        postTitle="History"
      />

      <div className="relative w-full w-[90%] max-w-[1400px] mt-20 text-left">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
