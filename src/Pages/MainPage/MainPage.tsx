import { About } from "./Sections/About";
import { Landing } from "./Sections/LandingSection";

type TabType = "home" | "experience" | "education" | "projects";

interface MainPageProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const MainPage = ({ activeTab, setActiveTab }: MainPageProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-transparent">
      {activeTab === "home" && <Landing />}
      <About activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};
