// src/components/ProfileMenu.jsx
import { useUser } from "../contexts/UserContent";
import ProfileSection from "./ProfileSection";

const dummyUsers = [
  { name: "Admin", role: "Admin" },
  { name: "Analyst", role: "Analyst" },
];

export default function ProfileMenu() {
  const { currentUser, switchAccount, logout } = useUser();

  return (
    <div>
      <ProfileSection user={currentUser} />
      <div className="mt-4 space-y-2">
        <p className="text-gray-600 dark:text-gray-300 text-sm">Switch Account:</p>
        {dummyUsers.map((user) => (
          <button
            key={user.name}
            className="w-full bg-gray-100 dark:bg-gray-700 text-sm rounded p-2 hover:bg-blue-100 dark:hover:bg-gray-600"
            onClick={() => switchAccount(user)}
          >
            {user.name} ({user.role})
          </button>
        ))}
        <button
          onClick={logout}
          className="mt-4 w-full bg-red-500 text-white rounded p-2 hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
