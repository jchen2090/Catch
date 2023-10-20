import { FaGithub } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

export const NavBar = () => {
  const [theme, toggleTheme] = useThemeSwitcher();

  return (
    <div className="flex justify-end gap-6 py-4 pr-6 bg-slate-50 dark:bg-neutral-800/10 ">
      <a href="https://github.com/jchen2090/matching-game" target="_blank" rel="noreferrer">
        <FaGithub size={24} className="dark:text-white" />
      </a>
      <button onClick={toggleTheme}>
        {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} color="white" />}
      </button>
    </div>
  );
};
