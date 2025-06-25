export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ZenTask",
      description:
        "ZenTask is a smart task management application that combines to-do lists, note-taking, and AI-powered assistance. Integrated with Google’s Gemini, it helps users organize tasks, generate summaries, set priorities, and receive intelligent suggestions to boost productivity and streamline daily workflows.",
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
        "This project explores the relationship between global renewable energy trends and Gross Domestic Product (GDP) using time series and correlation analysis. The analysis leverages publicly available datasets to visualize how renewable energy adoption has evolved globally and how it correlates with economic growth.",
      tags: ["RStudio", "Kaggle", "Data Analysis", "Data Visualization"],
      image: "SVG/renewable.png",
      link: "https://www.kaggle.com/code/abijithasokan/global-renewable-energy-trends-and-gdp",
    },
    {
      id: 3,
      title: "Berlin Precipitation Analysis and Prediction Model",
      description:
        "This project analyzes historical precipitation data in Berlin and builds a prediction model to assess potential weather-related safety risks for airport operations. The model aims to enhance decision-making for flight scheduling and ground operations by forecasting precipitation levels that could impact airport safety.",
      tags: [
        "Python",
        "numpy",
        "pandas",
        "ML",
        "Prediction Model",
        "Kaggle",
        "Data Analysis",
        "Data Visualization",
      ],
      image: "SVG/Berlin.png",
      link: "https://www.kaggle.com/code/abijithasokan/berlin-weather-visualization-and-prediction-model",
    },
    {
      id: 4,
      title: "Habit Tracker Web App",
      description:
        "A full-stack Habit Tracker application that helps users build and maintain daily routines. Built with React, TypeScript, Tailwind CSS, and Supabase for backend services including authentication and real-time database. Features include habit creation, daily logging, and progress visualization through a clean, responsive UI.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Authentication",
        "Full-Stack",
        "Web App",
        "Habit Tracker",
      ],
      image: "SVG/habit_tracker.png",
      link: "https://abijith1997.github.io/HabitTracker", // Replace with your actual project link if different
    },
  ];
  return (
    <div className="projects-pagefull items-center justify-center dark:text-white text-gray-800 gap-2 about-pagefull rounded-b-md bg-[var(--background)] dark:bg-gray-950 shadow-md z-20 relative sm:p-14 flex flex-col md:w-[90%] w-full">
      <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-md">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-center">
            <h1 className="font-extrabold text-gray-800 dark:text-white mb-2">
              My Projects
            </h1>
            <div className="w-full h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Explore my latest work and personal projects. Each project
              represents a unique challenge and learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 rounded-lg"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full md:h-auto object-cover rounded-4xl p-2 "
                  />
                  <div className="absolute inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 text-xs py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full font-medium flex flex-wrap items-center justify-start"
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
    </div>
  );
};
