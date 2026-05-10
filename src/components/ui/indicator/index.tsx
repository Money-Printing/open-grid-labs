export default function Indicator({ active = 0, total = 2 }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, idx) => (
        <div
          key={idx}
          className={`h-1.5 rounded-full transition-all duration-500 shadow-[0_0_10px_hsla(210,100%,50%,0.2)] ${
            idx === active ? "w-8 bg-primary shadow-glow" : "w-2 bg-white/50 dark:bg-foreground/20"
          }`}
        ></div>
      ))}
    </div>
  );
}
