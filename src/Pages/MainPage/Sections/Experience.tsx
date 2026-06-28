import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Senior Developer",
      company: "Mphasis",
      type: "Full-time",
      duration: "Feb 2026 - Present",
      location: "Bengaluru, India (Hybrid)",
      points: [
        "Refactoring and enhancing backend functionalities for a fintech client using event-driven architecture.",
        "Developing serverless services using TypeScript AWS Lambda, integrated with SQS queues and handler-based architecture.",
        "Integrating backend services with Java Spring applications and writing Jest unit tests to ensure stability.",
        "Managing and transforming relational data using SQL and Scala for mapping updates and overrides.",
        "Analyzing carrier requirements from Excel sheets and translating them into functional/technical documentation.",
        "Supporting frontend workflows using React, and maintaining an Angular-based tool for UI testing and validation.",
        "Collaborating with business stakeholders via Azure DevOps (ADO) and Jira to run requirement discussions.",
        "Mentoring new joiners on code quality standards, best practices, and backend service architectures."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "XR Solutions",
      type: "Full-time",
      duration: "Jul 2025 - Jan 2026",
      location: "Stockholm, Sweden (Remote)",
      points: [
        "Translating Figma UI/UX designs into responsive, accessible, and high-performance React.js web applications.",
        "Developing interactive, reusable, and scalable components using React, TypeScript, and modern state architectures.",
        "Designing and implementing RESTful APIs using Node.js and Express.js to bridge frontend and backend workflows.",
        "Managing relational data with PostgreSQL, including schema design, query optimization, and data integrity.",
        "Integrating and deploying scalable applications on AWS utilizing services like EC2, S3, and Lambda.",
        "Participating in daily Agile stand-ups, task planning via Jira, and version control workflows on Bitbucket."
      ]
    },
    {
      role: "Shift Manager",
      company: "Domino's",
      type: "Part-time",
      duration: "Aug 2024 - Jan 2026",
      location: "Berlin, Germany (On-site)",
      points: [
        "Coordinated daily store operations with a focus on process efficiency, quality control, and cash log reporting.",
        "Managed inventory database records, tracked weekly stock levels, and optimized operational resource allocation.",
        "Analyzed operational metrics, compiled shift reports, and presented performance insights to management.",
        "Led, scheduled, and trained teams, resolving real-time operational issues and escalation incidents."
      ]
    },
    {
      role: "Frontend Developer | Team Analyst",
      company: "ansrsource",
      type: "Full-time",
      duration: "Feb 2022 - Sep 2022",
      location: "Bengaluru, India (Hybrid)",
      points: [
        "Built performance reporting dashboards using Power BI, Excel, and SQL, reducing manual effort by 40% using R automation scripts.",
        "Developed interactive KPI visualizations and data dashboards using React.js and TypeScript.",
        "Conducted code reviews, mentored junior team members, and served as technical point of contact to resolve pipeline issues.",
        "Compiled and analyzed weekly reports to track team KPIs and uphold performance and quality control standards."
      ]
    },
    {
      role: "Frontend Developer",
      company: "ansrsource",
      type: "Full-time",
      duration: "Feb 2020 - Feb 2022",
      location: "Bengaluru, India (Hybrid)",
      points: [
        "Developed responsive web pages and reusable UI components using React.js, Redux, and TypeScript.",
        "Integrated REST APIs, optimized application performance, and built interactive features.",
        "Created automation scripts, supported CI/CD pipelines, and deployed applications utilizing AWS and Docker.",
        "Communicated directly with clients and validators via Jira, ensuring delivery tracking and requirement alignment."
      ]
    },
    {
      role: "Frontend Developer (Apprenticeship)",
      company: "ansrsource",
      type: "Apprenticeship",
      duration: "Aug 2019 - Feb 2020",
      location: "Bengaluru, India",
      points: [
        "Developed and maintained React.js web pages for multiple client projects.",
        "Collaborated with senior QA and development members for quality checks and maintenance updates.",
        "Achieved 100% quality and productivity metrics, earning a full-time software developer role."
      ]
    },
    {
      role: "Embedded Software Engineer (Internship)",
      company: "Himas Tech",
      type: "Internship",
      duration: "May 2018 - Jul 2018",
      location: "Kochi, India",
      points: [
        "Programmed microcontrollers and implemented algorithms for robot vacuum control paths.",
        "Worked with Raspberry Pi architectures and implemented ROS (Robot Operating System) scripts."
      ]
    }
  ];

  return (
    <motion.div
      className="w-full flex flex-col justify-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* Section Header */}
      <div className="py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3 mb-8">
        <Briefcase size={22} className="text-neutral-800 dark:text-neutral-200" />
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
          Professional Journey
        </h2>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-4 pl-6 md:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-[11px] h-[11px] rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 group-hover:bg-neutral-900 dark:group-hover:bg-white group-hover:border-neutral-900 dark:group-hover:border-white transition-all duration-300" />
            
            {/* Job details */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-neutral-450 dark:text-neutral-400 font-mono">
                    at {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-450 dark:text-neutral-500">
                  <span>{exp.duration}</span>
                  <span>&bull;</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mt-2">
                {exp.points.map((point, pIndex) => (
                  <li
                    key={pIndex}
                    className="text-xs md:text-sm text-neutral-550 dark:text-neutral-400 leading-relaxed list-disc list-outside ml-4 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
