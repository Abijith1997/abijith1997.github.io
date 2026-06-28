import { Award } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      name: "Google Data Analytics Professional Certificate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
    },
    {
      name: "Microsoft Azure AZ-900 Cloud Fundamentals",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M7 16.5L13 7.5L22 20"></path>
          <path d="M2 19.5L7 16.5L13 19.5"></path>
        </svg>
      ),
    },
    {
      name: "Microsoft Power BI PL-300 Data Analyst Specialization",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M6 8h.01M9 8h.01"></path>
          <rect x="12" y="8" width="6" height="3"></rect>
          <rect x="6" y="12" width="3" height="3"></rect>
          <rect x="12" y="12" width="6" height="3"></rect>
        </svg>
      ),
    },
    {
      name: "React Essential Training",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M12 18.7C7.5 18.7 3.8 15.7 3.8 12S7.5 5.3 12 5.3 20.2 8.3 20.2 12s-3.7 6.7-8.2 6.7"></path>
          <path d="M12 14.9c-4.5 0-8.2-7.9-8.2-7.9s3.7-7.9 8.2-7.9 8.2 7.9 8.2 7.9-3.7 7.9-8.2 7.9"></path>
        </svg>
      ),
    },
    {
      name: "Building Modern Projects with React",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <div className="h-full flex flex-col border border-neutral-200/65 dark:border-neutral-800/65 bg-neutral-50/40 dark:bg-neutral-900/10 rounded-xl p-6 md:p-8">
      {/* Section title */}
      <div className="pb-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3 mb-6">
        <Award size={22} className="text-neutral-800 dark:text-neutral-200" />
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
          Certifications
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-between gap-6">
        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
          I have completed several industry-standard certifications in data analytics, 
          cloud engineering, and frontend frameworks to validate my skills and stay updated.
        </p>

        {/* Certificate list */}
        <ul className="space-y-3">
          {certificates.map((cert, index) => (
            <li key={index} className="flex items-center gap-3 group">
              <div className="flex-shrink-0 p-1.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-300">
                {cert.icon}
              </div>
              <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300 font-medium">
                {cert.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
