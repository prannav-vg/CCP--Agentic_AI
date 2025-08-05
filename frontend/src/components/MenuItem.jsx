import React from 'react';

export const MenuItem = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left text-white py-2 hover:text-blue-400 transition border-b border-slate-600"
  >
    {title}
  </button>
);