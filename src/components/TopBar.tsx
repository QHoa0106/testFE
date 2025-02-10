import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaSearch, FaPlus, FaBell, FaCog, FaBars } from "react-icons/fa";

const TopBar: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="w-full h-16 bg-gray-900 flex items-center px-4 md:px-6 text-white shadow-md">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
      </div>

      <div className="flex flex-1 items-center justify-center mx-4">
        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 md:px-4 py-2 w-[200px] md:w-[400px]">
          <FaSearch className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent text-white ml-2 w-full focus:outline-none"
          />
        </div>
        <button className="ml-2 md:ml-4 bg-orange-500 p-2 md:p-3 rounded-full hover:bg-orange-600 flex items-center justify-center">
          <FaPlus className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <FaBell className="text-gray-400 cursor-pointer hover:text-white w-4 h-4 md:w-5 md:h-5" />
        <FaCog className="text-gray-400 cursor-pointer hover:text-white w-4 h-4 md:w-5 md:h-5" />
      </div>

      {user ? (
        <div className="relative flex items-center gap-3 cursor-pointer group bg-gray-800 px-2 md:px-4 py-2 rounded-lg ml-4">
          <img
            src={user.photoURL}
            alt={user.name}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-gray-400">{user.email}</span>
          </div>
        </div>
      ) : (
        <span className="hidden md:block text-white ml-4">Guest</span>
      )}

      <button className="md:hidden ml-4">
        <FaBars className="text-gray-400 w-5 h-5" />
      </button>
    </div>
  );
};

export default TopBar;
