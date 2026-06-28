import { useEffect, useState } from "react";
import "./Landing.css";

export const Landing = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeLimit = 300;
      const opacityFactor = Math.max(0, 1 - scrollY / fadeLimit);
      setOpacity(opacityFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ opacity }}
      className="top-container pagefull h-[calc(100vh-4rem)] w-full flex justify-center items-center relative bg-transparent transition-opacity duration-100 bg-[radial-gradient(#e5e5e5_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#27272a_1.2px,transparent_1.2px)] [background-size:32px_32px]"
    >
      {/* Corner Telemetry / Systems context coordinates */}
      <div className="absolute top-8 left-8 md:left-12 font-mono text-[9px] tracking-widest text-neutral-400 dark:text-neutral-600 uppercase select-none animate-fade-in">
        [ SYSTEM // ARCHITECTURE ]
      </div>
      <div className="absolute top-8 right-8 md:right-12 font-mono text-[9px] tracking-widest text-neutral-400 dark:text-neutral-600 uppercase select-none animate-fade-in">
        [ IND // GER // 2026 ]
      </div>

      {/* Main Hero Header */}
      <div className="total-top-text text-center select-none flex flex-col items-center justify-center gap-6 w-full max-w-4xl px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.2em] text-neutral-900 dark:text-white transition-colors duration-300">
          ABIJITH M A
        </h1>
        <div className="h-[1px] w-24 bg-neutral-300 dark:bg-neutral-800 transition-colors duration-300" />
        <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-neutral-500 dark:text-neutral-400 uppercase transition-colors duration-300">
          Full-Stack Developer & Cloud Architect
        </h2>
      </div>

      {/* Looping Mouse Scroll Micro-Animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 select-none pointer-events-none animate-fade-in opacity-80">
        <div className="w-5 h-8 rounded-full border border-neutral-300 dark:border-neutral-800 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 animate-scroll-dot" />
        </div>
        <span className="text-[8px] tracking-[0.35em] font-mono text-neutral-400 dark:text-neutral-600 uppercase">
          Scroll to explore
        </span>
      </div>
    </div>
  );
};
