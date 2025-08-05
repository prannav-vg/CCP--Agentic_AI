import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";
import Home from "./pages/Home";

function App() {
  return (
    <SettingsProvider>
      <Router>
        <div className="App bg-gray-100 dark:bg-gray-900 min-h-screen">
          <SidebarToggle />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </SettingsProvider>
  );
}

export default App;
