import { Icons } from "./Components/Icons";
import "./Css/About.css";
import { ProfessionalBio } from "./Intro";
import ProfileImg from "../../../SVG/profile.jpeg";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";
import { Projects } from "../../Projects/Projects";
import { Connect } from "./Connect";
import { ArrowRight, Briefcase } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

type TabType = "home" | "experience" | "education" | "projects";

interface AboutProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const About = ({ activeTab, setActiveTab }: AboutProps) => {
  const handleViewJourney = () => {
    setActiveTab("experience");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 z-20 relative">
      <div className="w-full lg:grid lg:grid-cols-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Fixed/Sticky Profile Summary Panel */}
        <div className="lg:col-span-5 w-full lg:sticky lg:top-28 lg:h-[calc(100vh-10rem)] flex flex-col justify-between py-6 lg:border-r lg:border-neutral-200/50 lg:dark:border-neutral-800/50 lg:pr-12 gap-8 mb-12 lg:mb-0">
          <div className="flex flex-col gap-6 items-start">
            {/* Live Availability Status */}
            <div className="flex items-center gap-2 px-3 py-1 border border-emerald-500/10 dark:border-emerald-400/10 bg-emerald-500/5 rounded-full w-fit">
              <span className="availability-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Available for Senior Roles
              </span>
            </div>

            {/* Profile Picture */}
            <div className="relative h-[120px] w-[120px] md:h-[140px] md:w-[140px] overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm">
              <img
                src={ProfileImg}
                alt="Profile"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Headline Details */}
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                ABIJITH M A
              </h2>
              <p className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
                Full-Stack Developer & Cloud Architect
              </p>
            </div>

            {/* Introductory Hook */}
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm">
              Building scalable, user-centric web applications and designing 
              event-driven cloud architectures with a data-driven product mindset.
            </p>
          </div>

          {/* Social Links on Left Pane bottom */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/abijith-asokan-784a01338/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
              >
                <IconBrandLinkedin size={18} />
              </a>
              <a
                href="https://github.com/Abijith1997"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
              >
                <IconBrandGithub size={18} />
              </a>
              <a
                href="mailto:abijithasokan@gmail.com"
                aria-label="Email"
                className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
              >
                <IconBrandGmail size={18} />
              </a>
            </div>
            <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
              Based in Bengaluru, India / Berlin, Germany
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrollable Portfolio Contents based on Active Tab */}
        <div className="lg:col-span-7 w-full flex flex-col gap-16 lg:py-6 scroll-margin-nav animate-fade-in">
          {activeTab === "home" && (
            <>
              {/* Profile Bio */}
              <section id="bio" className="scroll-margin-nav">
                <ProfessionalBio />
              </section>

              {/* Current Job Role Section (Minimalist presentation) */}
              <section id="current-role" className="w-full flex flex-col gap-4">
                <div className="py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                  <Briefcase size={22} className="text-neutral-850 dark:text-neutral-200" />
                  <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
                    Current Position
                  </h2>
                </div>
                <div className="group border border-neutral-200 dark:border-neutral-850 bg-neutral-50/40 dark:bg-neutral-900/10 hover:border-neutral-400 dark:hover:border-neutral-700 p-6 rounded-xl flex flex-col gap-3 transition-all duration-300">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                        Senior Developer
                      </h3>
                      <span className="text-xs text-neutral-400 font-mono">
                        at Mphasis &bull; Bengaluru, India
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Feb 2026 - Present
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Refactoring and enhancing serverless backend functionalities for a fintech client using 
                    an event-driven architecture on AWS (Lambda, SQS, EC2) and Java Spring, ensuring 
                    high reliability and performance.
                  </p>
                  <button
                    onClick={handleViewJourney}
                    className="flex items-center gap-1 text-[11px] font-bold text-neutral-900 dark:text-white hover:opacity-80 transition-opacity mt-2 w-fit cursor-pointer"
                  >
                    <span>View full professional journey</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </section>

              {/* Skill Domains */}
              <section id="skills" className="scroll-margin-nav">
                <Icons />
              </section>

              {/* Contact Form */}
              <section id="connect" className="scroll-margin-nav">
                <Connect />
              </section>
            </>
          )}

          {activeTab === "experience" && (
            <section id="experience" className="scroll-margin-nav">
              <Experience />
            </section>
          )}

          {activeTab === "education" && (
            <section id="education-certifications" className="scroll-margin-nav flex flex-col gap-12">
              <Education />
              <Certifications />
            </section>
          )}

          {activeTab === "projects" && (
            <section id="projects" className="scroll-margin-nav">
              <Projects />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
