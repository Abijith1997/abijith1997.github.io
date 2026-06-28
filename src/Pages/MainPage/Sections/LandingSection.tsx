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
      className="top-container pagefull h-[calc(100vh-4rem)] flex justify-center items-center relative w-full bg-transparent transition-opacity duration-100"
    >
      <div className="total-top-text text-center select-none flex flex-col items-center justify-center gap-6 w-full max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.2em] text-neutral-900 dark:text-white transition-colors duration-300">
          ABIJITH M A
        </h1>
        <div className="h-[1px] w-24 bg-neutral-300 dark:bg-neutral-800 transition-colors duration-300" />
        <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-neutral-500 dark:text-neutral-400 uppercase transition-colors duration-300">
          Full-Stack Developer & Cloud Architect
        </h2>
      </div>
    </div>
  );
};
