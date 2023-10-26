import { FaGithub } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [theme, toggleTheme] = useThemeSwitcher();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 pr-6 bg-slate-50 dark:bg-neutral-800/10 ">

      <div className="flex justify-start">
        <Link to="/" className="text-xl font-medium dark:text-white ps-4">
          Play
        </Link>
      </div>

      <div className="flex items-center justify-end gap-6 ">
        <a href="https://github.com/jchen2090/matching-game" target="_blank" rel="noreferrer">
          <FaGithub size={24} className="dark:text-white" />
        </a>
        <button onClick={toggleTheme}>
          {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} color="white" />}
        </button>
        <button className="px-0 text-sm text-black dark:text-white" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
        <button className="btn-primary" onClick={() => navigate("/login")}>
          Log In
        </button>
      </div>
    </div>
  );
};
