import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Divider, Drawer } from "@mui/material";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Sun, Moon } from "lucide-react";

type TabType = "home" | "experience" | "education" | "projects";

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setDrawerOpen(false);
  };

  const getTabClass = (tab: TabType) => {
    return activeTab === tab
      ? "!text-neutral-900 dark:!text-white !font-semibold !px-1.5 !min-w-0 relative after:absolute after:bottom-0 after:left-1.5 after:right-1.5 after:h-[2px] after:bg-neutral-900 dark:after:bg-white !rounded-none"
      : "!text-neutral-500 dark:!text-neutral-400 hover:!text-neutral-900 dark:hover:!text-white !font-medium transition-colors !px-1.5 !min-w-0 !rounded-none";
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="close-button w-full flex justify-end items-end p-2">
        <Button size="small" onClick={toggleDrawer(false)}>
          <CloseIcon className="text-neutral-900 dark:text-neutral-100" />
        </Button>
      </div>

      <div className="in-box flex justify-start items-start flex-col p-5 gap-4">
        {(["home", "experience", "education", "projects"] as TabType[]).map((tab) => (
          <Button
            key={tab}
            className={`!text-base !font-medium !w-full !justify-start ${
              activeTab === tab
                ? "!text-neutral-900 dark:!text-white !font-bold"
                : "!text-neutral-500 dark:!text-neutral-450"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.toUpperCase()}
          </Button>
        ))}
        <Divider className="w-full !border-neutral-200 dark:!border-neutral-850 !mt-2" />
      </div>
    </Box>
  );

  return (
    <nav className="w-full py-4 px-6 md:px-12 fixed top-0 left-0 z-50 flex items-center justify-between border-b border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 transition-all duration-300">
      <div className="flex items-center gap-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleTabClick("home");
          }}
          className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white hover:opacity-85 transition-opacity"
        >
          ABIJITH M A
        </a>
      </div>

      <div className="flex items-center gap-6">
        <div className="pages hidden md:flex justify-center items-center gap-4">
          <Button onClick={() => handleTabClick("home")} className={getTabClass("home")}>
            Home
          </Button>
          <Button onClick={() => handleTabClick("experience")} className={getTabClass("experience")}>
            Experience
          </Button>
          <Button onClick={() => handleTabClick("education")} className={getTabClass("education")}>
            Education
          </Button>
          <Button onClick={() => handleTabClick("projects")} className={getTabClass("projects")}>
            Projects
          </Button>
        </div>

        <button
          onClick={changeTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full border border-neutral-250 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-center justify-center cursor-pointer"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <div className="menu-icon md:hidden">
          <Button className="flex !p-1 !min-w-0" onClick={toggleDrawer(true)}>
            <MenuIcon className="text-neutral-800 dark:text-neutral-200" />
          </Button>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            className: "w-[250px] !bg-neutral-50 dark:!bg-neutral-900 text-neutral-900 dark:text-white border-l border-neutral-200 dark:border-neutral-850",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </nav>
  );
};
