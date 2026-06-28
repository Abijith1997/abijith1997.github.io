import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="h-full flex flex-col border border-neutral-200/65 dark:border-neutral-800/65 bg-neutral-50/40 dark:bg-neutral-900/10 rounded-xl p-6 md:p-8">
        <div className="pb-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3 mb-6">
          <GraduationCap size={22} className="text-neutral-800 dark:text-neutral-200" />
          <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
            Education
          </h2>
        </div>

        <div className="space-y-8 flex-1 flex flex-col justify-between">
          {/* Masters degree */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                MSc. Data Analytics
              </h3>
              <div className="flex justify-between items-baseline text-xs text-neutral-400 font-mono mt-0.5">
                <span>Berlin School of Business & Innovation (BSBI)</span>
                <span>Oct 2022 – Jan 2025</span>
              </div>
            </div>
            <ul className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed list-disc list-outside ml-4 space-y-1 mt-1">
              <li>Machine Learning with Python and regression/statistical analysis in RStudio.</li>
              <li>Used LLMs to design deep learning image recognition models with TensorFlow.</li>
              <li>Engineered data pipelines, database schemas, and queries using MySQL.</li>
              <li>Familiarized with Apache Spark big data tools and interactive visualizations in Tableau.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Python", "TensorFlow", "RStudio", "MySQL", "Apache Spark", "Tableau"].map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 rounded text-[10px] font-mono text-neutral-600 dark:text-neutral-400"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Bachelors degree */}
          <div className="flex flex-col gap-2 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                B.Tech Electronics & Communication Engineering
              </h3>
              <div className="flex justify-between items-baseline text-xs text-neutral-400 font-mono mt-0.5">
                <span>National Institute of Technology Calicut</span>
                <span>Jul 2015 – May 2019</span>
              </div>
            </div>
            <ul className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed list-disc list-outside ml-4 space-y-1 mt-1">
              <li>Core engineering principles: semiconductor device physics, signals, and embedded systems.</li>
              <li>Completed device physics modeling and simulation of Schottky diodes using TCAD.</li>
              <li>Acquired hands-on lab experience with microcontrollers, microprocessors, and communication protocols.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Circuit design", "Signal analysis", "Embedded systems", "TCAD"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 rounded text-[10px] font-mono text-neutral-600 dark:text-neutral-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
