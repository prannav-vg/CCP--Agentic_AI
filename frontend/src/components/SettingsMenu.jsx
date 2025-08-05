// src/components/SettingsMenu.jsx
import { useState } from "react";
import { useSettings } from "../contexts/SettingsContext";
import ToggleSwitch from "./ToggleSwitch";
import Modal from "./Modal";

const SettingsMenu = () => {
  const {
    notificationsEnabled,
    setNotificationsEnabled,
    zeroTrustEnabled,
    setZeroTrustEnabled,
    twoFAEnabled,
    setTwoFAEnabled,
    savedEmails,
    blockedSenders,
  } = useSettings();

  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <div className="space-y-4">
      <ToggleSwitch
        label="Zero Trust Control"
        enabled={zeroTrustEnabled}
        setEnabled={setZeroTrustEnabled}
      />
      <ToggleSwitch
        label="Notifications"
        enabled={notificationsEnabled}
        setEnabled={setNotificationsEnabled}
      />
      <ToggleSwitch
        label="Two-Factor Authentication"
        enabled={twoFAEnabled}
        setEnabled={setTwoFAEnabled}
      />

      <div className="mt-6">
        <h3 className="text-gray-800 dark:text-white font-semibold mb-2">Account Settings</h3>
        <div className="space-y-2">
          <button
            onClick={() => setShowSecurityModal(true)}
            className="w-full text-left bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Change Password
          </button>
          <button
            onClick={() => setShowBlockedModal(true)}
            className="w-full text-left bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Blocked Senders
          </button>
          <button
            onClick={() => setShowAboutModal(true)}
            className="w-full text-left bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            About / Version Info
          </button>
        </div>
      </div>

      {/* --- MODALS --- */}
      {showSecurityModal && (
        <Modal title="Change Password" onClose={() => setShowSecurityModal(false)}>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-2 border rounded-md"
            />
            <button className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700">
              Update Password
            </button>
          </div>
        </Modal>
      )}

      {showBlockedModal && (
        <Modal title="Blocked Senders" onClose={() => setShowBlockedModal(false)}>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
            {blockedSenders.length === 0 ? (
              <li>No blocked senders.</li>
            ) : (
              blockedSenders.map((email, index) => (
                <li key={index}>{email}</li>
              ))
            )}
          </ul>
        </Modal>
      )}

      {showAboutModal && (
        <Modal title="About This Website" onClose={() => setShowAboutModal(false)}>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>ZeroTrust-AI</strong> is a smart cybersecurity platform using AI for phishing
            detection, user anomaly tracking, and secure communications.
          </p>
          <p className="text-sm text-gray-500">Version: 1.0.0</p>
          <p className="text-sm text-gray-500">© 2025 Swarna Bala</p>
        </Modal>
      )}
    </div>
  );
};

export default SettingsMenu;
