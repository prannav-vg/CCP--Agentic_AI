import { useSettings } from "../contexts/SettingsContext";

const ProfileSection = () => {
  const { setSidebarOpen } = useSettings();

  return (
    <div className="text-black dark:text-white space-y-4">
      <div>
        <p className="font-semibold">Logged in as:</p>
        <p>Name: Jane Doe</p>
        <p>Email: jane@example.com</p>
        <p>Role: Analyst</p>
      </div>
      <button className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded w-full">Switch Account</button>
      <button
        onClick={() => {
          setSidebarOpen(false);
          alert("Logged out!");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded w-full"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileSection;
