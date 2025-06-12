import { useEffect, useState } from "react";
import "./Landing.css";
import "../../../assets/fonts/fonts.css";

export const Landing = () => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const limit = 100;

      const scaleFactor = Math.max(0.1, 1 - scrollY / limit / 4);
      const opacityFactor = Math.max(0, 1 - scrollY / limit);

      setScale(scaleFactor);
      setOpacity(opacityFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      style={{
        opacity,
      }}
      className="top-container md:animate-on-load pagefull h-screen flex sm:flex-row flex-col justify-center items-center sticky top-0 z-10 bg-opacity-100 w-screen"
    >
      <div
        className="total-top-text relative text-center select-none flex-col flex items-center justify-center gap-4 w-full lg:w-1/2 h-full"
        style={{
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        <div className="name sm:text-3xl flex items-center justify-center gap-4">
          <h1
            style={{ fontFamily: "roboto, sans-serif" }}
            className="font-extrabold bg-gradient-to-bl dark:from-violet-500 dark:to-fuchsia-500 from-yellow-950 to-orange-950 main-name bg-clip-text text-transparent"
          >
            ABIJITH M A
          </h1>
        </div>
        <div className="designation text-xl flex items-center justify-center gap-4 flex-col sm:flex-row">
          <h2 className="bg-gradient-to-bl dark:from-violet-500 dark:to-fuchsia-500 from-yellow-950 to-orange-950 main-name bg-clip-text text-transparent">
            DATA ANALYST
          </h2>
          <h2 className="hidden sm:block smallDisplayRemoval dark:from-violet-500 dark:to-fuchsia-500 from-yellow-950 to-orange-950 main-name bg-clip-text text-transparent">
            |
          </h2>
          <h2 className="bg-gradient-to-bl dark:from-violet-500 dark:to-fuchsia-500 from-yellow-950 to-orange-950 main-name bg-clip-text text-transparent">
            SENIOR FRONTEND DEVELOPER
          </h2>
        </div>
      </div>
    </div>
  );
};
