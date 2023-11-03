import { FaGithub } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AccountSettings = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const isSignedIn = JSON.parse(localStorage.getItem("isSignedIn")) ?? false;

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  if (isSignedIn) {
    return (
      <button className="btn-primary" onClick={handleSignOut}>
        Sign out
      </button>
    );
  }
  return (
    <>
      <button className="px-0 text-sm text-black dark:text-white" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
      <button className="btn-primary" onClick={() => navigate("/login")}>
        Log In
      </button>
    </>
  );
};

export const NavBar = () => {
  const [theme, toggleTheme] = useThemeSwitcher();

  return (
    <div className="flex items-center justify-between py-4 pr-6 bg-slate-50 dark:bg-neutral-800/10">
      <div className="flex justify-start">
        <Link to="/" className="text-xl font-medium dark:text-white ps-4">
          Catch
        </Link>
      </div>

      <div className="flex items-center justify-end gap-6 ">
        <a href="https://github.com/jchen2090/matching-game" target="_blank" rel="noreferrer">
          <FaGithub size={24} className="dark:text-white" />
        </a>
        <button onClick={toggleTheme}>
          {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} color="white" />}
        </button>
        <AccountSettings />
      </div>
    </div>
  );
};
