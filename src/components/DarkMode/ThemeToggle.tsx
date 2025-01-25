"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };
  const params = useParams();

  return (
    <div aria-label="toggle dark" role="button">
      <input
        type="checkbox"
        id="checkbox"
        className="hidden"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label
        htmlFor="checkbox"
        className={` relative flex items-center w-16 h-5 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700 transition-colors duration-500`}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-500 ${
            theme === "dark" ? params.locale === "en"? "translate-x-10" : "-translate-x-10": params.locale === "ar"? "translate-x-0": "-translate-x-0"
          }`}
        >
          {theme === "light" ? (
            <LuSun className="absolute left-1 w-4 h-4 text-yellow-500" />
          ) : (
            <FaRegMoon className="absolute right-1 w-4 h-4 text-gray-400" />
          )}
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
