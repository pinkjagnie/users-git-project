import React, { useState, useEffect } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleThemeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleThemeHandler}
      className={`sticky top-4 left-6 p-2 rounded-full ${
        isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-800"
      }`}
    >
      {isDarkMode ? <BsFillSunFill size={20} /> : <BsFillMoonFill size={20} />}
    </button>
  );
};

export default ThemeToggler;
