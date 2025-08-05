import { useSettings } from "../contexts/SettingsContext";

const SidebarToggle = () => {
  const { setSidebarOpen } = useSettings();

  return (
    <button
      onClick={() => setSidebarOpen(true)}
      className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow"
    >
      ☰
    </button>
  );
};

export default SidebarToggle;
