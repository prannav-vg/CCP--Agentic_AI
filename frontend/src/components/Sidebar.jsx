import { useSettings } from "../contexts/SettingsContext";
import ProfileSection from "./ProfileSection";
import SettingsMenu from "./SettingsMenu";

const Sidebar = () => {
  const { isSidebarOpen, setSidebarOpen, currentTab, setCurrentTab } = useSettings();

  if (!isSidebarOpen) return null;

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-50 p-5 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentTab("profile")}
            className={`px-4 py-2 rounded-full ${
              currentTab === "profile"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setCurrentTab("settings")}
            className={`px-4 py-2 rounded-full ${
              currentTab === "settings"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            Settings
          </button>
        </div>
        <button onClick={() => setSidebarOpen(false)} className="text-gray-700 dark:text-white">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {currentTab === "profile" ? <ProfileSection /> : <SettingsMenu />}
      </div>
    </div>
  );
};

export default Sidebar;
