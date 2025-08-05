import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SettingsProvider } from "./contexts/SettingsContext.jsx";
import { UserProvider } from "./contexts/UserContent.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </UserProvider>
  </React.StrictMode>
);
