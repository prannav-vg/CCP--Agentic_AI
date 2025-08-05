import React from 'react';

export const Navbar = ({ onSettingsClick }) => (
  <header className="flex justify-between items-center px-6 py-4 bg-slate-900 text-white shadow">
    <h1 className="text-2xl font-bold">ZeroTrust-AI</h1>
    <button
      onClick={onSettingsClick}
      className="bg-slate-800 p-2 rounded-full hover:bg-slate-700"
      aria-label="Open Settings"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 6.75h15M4.5 12h15M4.5 17.25h15"
        />
      </svg>
    </button>
  </header>
);
