import { ArrowUpRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ZenTask",
      description:
        "A smart task management application combining to-do lists, note-taking, and AI-powered assistance. Integrated with Google’s Gemini, it helps users organize, summarize, and prioritize workflows.",
      tags: [
        "React.js",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
        "Gemini API",
        "Redux",
      ],
      image: "SVG/Zentask.png",
      link: "https://zen-task-ten.vercel.app/#",
    },
    {
      id: 2,
      title: "Global Renewable Energy Trends and GDP",
      description:
        "Explores the correlation between global renewable energy adoption and economic growth using time series and correlation analysis on public datasets.",
      tags: ["RStudio", "Kaggle", "Data Analysis", "Data Visualization"],
      image: "SVG/renewable.png",
      link: "https://www.kaggle.com/code/abijithasokan/global-renewable-energy-trends-and-gdp",
    },
    {
      id: 3,
      title: "Berlin Precipitation Prediction Model",
      description:
        "Analyzes historical weather data in Berlin and builds machine learning models to predict precipitation levels, assessing potential risks for airport operations.",
      tags: [
        "Python",
        "NumPy",
        "Pandas",
        "Machine Learning",
        "Predictive Modeling",
        "Data Visualization",
      ],
      image: "SVG/Berlin.png",
      link: "https://www.kaggle.com/code/abijithasokan/berlin-weather-visualization-and-prediction-model",
    },
    {
      id: 4,
      title: "Habit Tracker Web App",
      description:
        "A full-stack Habit Tracker with user authentication, daily logging routines, and visual progress tracking grids built with Supabase real-time services.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Auth",
        "Full-Stack",
      ],
      image: "SVG/habit_tracker.png",
      link: "https://abijith1997.github.io/HabitTracker",
    },
  ];

  return (
    <div className="projects-pagefull w-full py-16 px-4 md:px-12 max-w-7xl mx-auto z-20 relative border-t border-neutral-200/50 dark:border-neutral-850">
      <div className="w-full">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
            Featured Projects
          </h2>
          <div className="h-[1px] w-12 bg-neutral-300 dark:bg-neutral-800 my-4" />
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            A curated selection of applications and analyses, showing the intersection 
            of full-stack engineering and data analytics.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/10 rounded-xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
            >
              {/* Image & Link Wrapper */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video overflow-hidden border-b border-neutral-200 dark:border-neutral-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </a>

              {/* Text details */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  
                  <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/60 rounded text-[10px] font-mono text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
