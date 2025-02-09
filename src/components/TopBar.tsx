import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaSearch, FaPlus, FaBell, FaCog } from "react-icons/fa";

const TopBar: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="w-full h-16 bg-gray-900 flex items-center px-6 text-white shadow-md">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-2xl font-bold mb-4">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-[400px]">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher dans Metaforma"
            className="bg-transparent text-white ml-2 w-full focus:outline-none"
          />
        </div>
        <button className="ml-4 bg-orange-500 p-3 rounded-full hover:bg-orange-600 flex items-center justify-center">
          <FaPlus size={18} />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          <FaBell
            className="text-gray-400 cursor-pointer hover:text-white"
            size={20}
          />
          <FaCog
            className="text-gray-400 cursor-pointer hover:text-white"
            size={20}
          />
        </div>
        {user ? (
          <div className="relative flex items-center gap-3 cursor-pointer group bg-gray-800 px-4 py-2 rounded-lg">
            <img
              src={user.photoURL}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-gray-400">{user.email}</span>
            </div>
          </div>
        ) : (
          <span className="text-white">Guest</span>
        )}
      </div>
    </div>
  );
};

export default TopBar;
