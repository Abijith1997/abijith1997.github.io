import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandRedux,
  IconBrandNodejs,
  IconBrandAws,
  IconBrandDocker,
  IconDatabase,
  IconHtml,
  IconTestPipe,
  IconCpu,
  IconTrendingUp,
} from "@tabler/icons-react";
import { CSSSVG, MLSVG, PowerBISVG } from "../../../../SVG/SVGs";

export const Icons = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <IconBrandReact size={14} /> },
        { name: "TypeScript", icon: <IconBrandTypescript size={14} /> },
        { name: "JavaScript", icon: <IconBrandJavascript size={14} /> },
        { name: "Tailwind CSS", icon: <IconBrandTailwind size={14} /> },
        { name: "CSS", icon: <CSSSVG size="14px" /> },
        { name: "HTML", icon: <IconHtml size={14} /> },
        { name: "Redux", icon: <IconBrandRedux size={14} /> },
      ],
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Node.js", icon: <IconBrandNodejs size={14} /> },
        { name: "Express.js", icon: <IconDatabase size={14} /> },
        { name: "AWS", icon: <IconBrandAws size={14} /> },
        { name: "PostgreSQL & SQL", icon: <IconDatabase size={14} /> },
        { name: "Docker", icon: <IconBrandDocker size={14} /> },
        { name: "Jest", icon: <IconTestPipe size={14} /> },
      ],
    },
    {
      title: "Data & Systems",
      skills: [
        { name: "Scala", icon: <IconTrendingUp size={14} /> },
        { name: "R & RStudio", icon: <IconTrendingUp size={14} /> },
        { name: "Machine Learning", icon: <MLSVG size="14px" /> },
        { name: "Tableau", icon: <IconTrendingUp size={14} /> },
        { name: "Power BI", icon: <PowerBISVG size="14px" /> },
        { name: "ROS & Embedded", icon: <IconCpu size={14} /> },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex w-full items-center justify-start border-b border-neutral-200 dark:border-neutral-800 pb-2">
        <h3 className="text-sm font-bold tracking-wider text-neutral-800 dark:text-neutral-200 uppercase">
          Key Skill Domains
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-100 dark:border-neutral-850 pb-1">
              {cat.title}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-1.5 border border-neutral-200 dark:border-neutral-850 bg-white dark:bg-neutral-900/30 px-2 py-1 rounded text-[11px] font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 cursor-default"
                >
                  <span className="opacity-75 flex items-center justify-center">
                    {skill.icon}
                  </span>
                  <span className="font-mono">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
