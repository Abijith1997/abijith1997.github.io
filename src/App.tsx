import { useState } from "react";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { MainPage } from "./Pages/MainPage/MainPage";

export type TabType = "home" | "experience" | "education" | "projects";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  return (
    <div className="App w-full min-h-screen flex flex-col justify-between">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="w-full flex-grow pt-16">
        <MainPage activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
