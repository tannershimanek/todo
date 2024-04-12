import reactLogo from "../../assets/react.svg";

export const Navbar: React.FC = () => {
  // todo: add item count, add notifications?
  return (
    <nav className="bg-light dark:bg-base text-dark dark:text-white">
      <div className="px-3 pb-6">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <ul>
            <li className="hover:bg-gray-highlight dark:hover:bg-overlay-light rounded px-1">
              <button>⭐️ Today</button>
            </li>
            <li className="hover:bg-gray-highlight dark:hover:bg-overlay-light rounded px-1">
              <button>🗓️ Upcoming</button>
            </li>
            <li className="hover:bg-gray-highlight dark:hover:bg-overlay-light rounded px-1">
              <button>📚 Anytime</button>
            </li>
            <li className="hover:bg-gray-highlight dark:hover:bg-overlay-light rounded px-1">
              <button>🗂️ Someday</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10" style={{ width: "200px" }}>
        <div className="transition border-t-2 border-gray-highlight dark:border-overlay-light"></div>
        <div className="px-3 py-2">+ New List</div>
      </div>
    </nav>
  );
};
