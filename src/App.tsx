import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { ThemeSwitch } from "./components/themeSwitch/ThemeSwitch";
import { ThemeContext } from "./context/ThemeContext";

const setBodyBackgroundColor = (color: string) => {
  (document.querySelector("body") as HTMLBodyElement).style.backgroundColor =
    color;
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const bgDarkHexCode = "#1F2023";
  const bgLightHexCode = "#FAFAFA";

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setBodyBackgroundColor(bgDarkHexCode);
      setDarkMode(true);
    } else {
      setBodyBackgroundColor(bgLightHexCode);
      setDarkMode(false);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    if (!darkMode) {
      setBodyBackgroundColor(bgDarkHexCode);
      localStorage.theme = "dark";
    } else {
      setBodyBackgroundColor(bgLightHexCode);
      localStorage.theme = "light";
    }

    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`${darkMode ? "dark" : "light"} main-grid-layout`}>
        <ThemeSwitch />
        <Navbar />
        <main className="bg-white dark:bg-surface text-dark dark:text-white pr-3 pl-12 py-4">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-3xl font-bold underline text-red dark:text-blue">
            Vite + React
          </h1>
          <div className="card">
            <button onClick={toggleDarkMode}>count is {null}</button>
            <p className="">
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <p className="text-primary"> blue </p>
          <p className="text-secondary"> emerald </p>
          <p className="text-success"> success </p>
          <p className="text-danger"> danger </p>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

// https://www.youtube.com/watch?v=NxIBnvb8B7Y
