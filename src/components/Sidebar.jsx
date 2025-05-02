// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaComments, FaBell, FaCog, FaPhone } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-16 bg-blue-900 text-white flex flex-col items-center py-4">
      <img src="/Ellipse.svg" alt="User" className="w-10 h-10 rounded-full mb-6" />
      <div className="flex flex-col gap-6 text-lg">
        <FaHome className="hover:text-blue-300 cursor-pointer" />
        <FaComments className="text-blue-400" /> {/* active */}
        <FaBell className="hover:text-blue-300 cursor-pointer" />
        <FaCog className="hover:text-blue-300 cursor-pointer" />
        <FaPhone className="hover:text-blue-300 cursor-pointer" />
      </div>
    </div>
  );
}
