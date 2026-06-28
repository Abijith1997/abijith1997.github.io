import { Button } from "@mui/material";
import { IconDownload } from "@tabler/icons-react";
import { Server, Code, BarChart } from "lucide-react";
import resume from "../../../assets/Resume.pdf";

export const ProfessionalBio = () => {
  const downloadResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className="max-w-full mx-auto overflow-hidden h-full flex flex-col justify-start">
      <div className="py-4 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
          Professional Profile
        </h2>
      </div>

      <div className="py-6 flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col justify-start items-between h-full gap-8">
          {/* Bio Introduction */}
          <div className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed space-y-4">
            <p className="border-l-2 border-neutral-900 dark:border-white pl-4 italic font-medium text-neutral-900 dark:text-neutral-200">
              Full-Stack Developer & Cloud Architect
            </p>

            <p>
              I am a Full-Stack Developer and Cloud Architect with over 4 years of experience building 
              scalable, user-centric web applications and designing robust cloud systems. I possess a 
              strong foundation in modern frontend architecture, backend service development, and 
              complex event-driven system design.
            </p>

            <p>
              My hands-on experience includes designing and deploying serverless services on AWS (Lambda, 
              SQS, S3, EC2), implementing handler-based system architectures, and optimizing relational 
              database schemas (PostgreSQL, MySQL, Supabase). I focus on writing reliable, maintainable code 
              using TypeScript, React, Node.js, and validation frameworks like Zod.
            </p>

            <p>
              Holding a Master’s degree in Data Analytics and a Bachelor’s in Electronics & Communication 
              Engineering, I merge core engineering logic, data pipelines, and a product mindset. I am passionate 
              about owning features end-to-end, solving real-world architecture challenges, and collaborating 
              with cross-functional teams to build impactful products.
            </p>
          </div>

          {/* Skills / Focus areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/60 p-5 rounded-lg flex flex-col items-start">
              <Code className="text-neutral-900 dark:text-neutral-100 mb-3" size={24} />
              <h3 className="font-semibold text-sm text-neutral-900 dark:text-white mb-2">
                Full-Stack Dev
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                Building responsive UIs and robust RESTful APIs using React, TypeScript, Node.js, and Express.
              </p>
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/60 p-5 rounded-lg flex flex-col items-start">
              <Server className="text-neutral-900 dark:text-neutral-100 mb-3" size={24} />
              <h3 className="font-semibold text-sm text-neutral-900 dark:text-white mb-2">
                Cloud & Architecture
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                Designing event-driven serverless architectures, SQS queue integrations, and AWS deployments.
              </p>
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/60 p-5 rounded-lg flex flex-col items-start">
              <BarChart className="text-neutral-900 dark:text-neutral-100 mb-3" size={24} />
              <h3 className="font-semibold text-sm text-neutral-900 dark:text-white mb-2">
                Data Analytics
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                Developing data pipelines, managing databases (PostgreSQL/SQL), and creating Power BI reports.
              </p>
            </div>
          </div>
          
          <div className="resume-button pt-4">
            <Button
              className="!bg-neutral-900 hover:!bg-neutral-800 dark:!bg-neutral-100 dark:hover:!bg-neutral-200 !text-white dark:!text-neutral-900 !rounded-md !px-5 !py-2.5 !font-medium !text-sm !shadow-none flex items-center gap-2 transition-all duration-300"
              onClick={downloadResume}
            >
              <IconDownload size={18} />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
