import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [zeroTrustEnabled, setZeroTrustEnabled] = useState(true);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [savedEmails, setSavedEmails] = useState(["user@example.com"]);
  const [blockedSenders, setBlockedSenders] = useState(["spam@phish.com"]);

  return (
    <SettingsContext.Provider
      value={{
        isSidebarOpen,
        setSidebarOpen,
        currentTab,
        setCurrentTab,
        darkMode,
        setDarkMode,
        notificationsEnabled,
        setNotificationsEnabled,
        zeroTrustEnabled,
        setZeroTrustEnabled,
        twoFAEnabled,
        setTwoFAEnabled,
        savedEmails,
        setSavedEmails,
        blockedSenders,
        setBlockedSenders,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
