import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow fixed top-0 w-full z-50 transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Saranya P</h1>

        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Home
            </Link>
          </li>

          {isHome && (
            <>
              <li><a href="#about" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</a></li>
            </>
          )}

          <li>
            <Link to="/games" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Games
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setDark(!dark)}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-lg"
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
