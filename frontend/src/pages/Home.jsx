import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";

const coreFeatures = [
  "User Behavior Anomaly Detection (UBA)",
  "Phishing Email & SMS Detection",
  "Malicious URL & QR Code Scanner",
  "File Behavior Analysis (Ransomware/Malware)",
  "Real-Time Access Trust Engine",
  "Security Admin Dashboard",
  "Alerts & Notification System",
];

const advancedFeatures = [
  "File Edit Tracking",
  "LLM-based Threat Assistant",
  "AI-Powered Deceptive Honeypots",
  "Federated Learning for Threat Sharing",
  "Blockchain Audit Trail Logging",
  "Dark Web Monitoring & Threat Enrichment",
  "USB/Offline Hardware Access Detection",
  "Cyber Hygiene Scoring System",
  "Personalized Career Path Navigator Agent",
  "Auto-Mitigating Smart Response Playbooks",
];

const FeatureCard = ({ title, type, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
  >
    <h3 className={`font-semibold mb-2 ${type === 'core' ? 'text-emerald-400' : 'text-orange-400'}`}>
      {title}
    </h3>
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center overflow-x-hidden">
      {/* Animated Header */}
      <motion.div
        className="flex items-center gap-3 mt-4"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <motion.img
          src={logo1}
          alt="Mini Logo"
          className="w-10 h-10 animate-bounce"
          whileHover={{ scale: 1.2 }}
        />
        <motion.h1
          className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse"
          animate={{ x: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          Zero Trust - AI Security System
        </motion.h1>
      </motion.div>

      {/* Center Logo and Description */}
      <motion.div
        className="mt-8 flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={logo} alt="Main Logo" className="w-40 h-40 rounded-2xl shadow-lg hover:scale-105 transition" />
        <p className="mt-4 text-lg max-w-2xl text-gray-300">
          ZeroTrust-AI is a next-gen cybersecurity system powered by artificial intelligence,
          enforcing zero trust architecture. It detects phishing, ransomware, suspicious user behavior,
          and provides a secure, intelligent trust engine with automated threat response.
        </p>
      </motion.div>

      {/* Core Features */}
      <div className="mt-10 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">🔧 Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {coreFeatures.map((feature, idx) => (
            <FeatureCard key={idx} title={feature} type="core" index={idx} />
          ))}
        </div>
      </div>

      {/* Advanced Features */}
      <div className="mt-12 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">🚀 Advanced Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {advancedFeatures.map((feature, idx) => (
            <FeatureCard key={idx} title={feature} type="advanced" index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
