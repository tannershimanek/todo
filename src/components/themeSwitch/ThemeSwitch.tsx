import { useContext } from "react";
import { SunIcon } from "../Icons/sun/sunIcon";
import { ThemeContext } from "../../context/ThemeContext";
import { MoonIcon } from "../Icons/moon/moonIcon";

export const ThemeSwitch: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="absolute bottom-4 right-6 rounded z-10">
      <button
        className="p-1 rounded bg-gray-highlight dark:bg-overlay-dark drop-shadow-md"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <MoonIcon className="w-6 h-6 text-light opacity-50 transition-opacity ease-in-out" />
        ) : (
          <SunIcon className="w-6 h-6 transition-opacity ease-in-out" />
        )}
      </button>
    </div>
  );
};
