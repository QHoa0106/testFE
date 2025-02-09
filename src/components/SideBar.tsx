import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaThLarge,
  FaUsers,
  FaGraduationCap,
  FaCommentAlt,
  FaStar,
  FaThumbsUp,
  FaClipboardList,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="w-16 h-screen bg-gray-900 flex flex-col items-center py-4 space-y-4 text-white shadow-lg">
      <nav className="flex flex-col space-y-4 flex-grow">
        {[
          { icon: FaHome },
          { icon: FaUserFriends },
          { icon: FaThLarge },
          { icon: FaUsers },
          { icon: FaGraduationCap },
          { icon: FaCommentAlt },
          { icon: FaStar },
          { icon: FaThumbsUp },
          { icon: FaClipboardList, active: true },
          { icon: FaCogs },
        ].map(({ icon: Icon, active }, index) => (
          <button
            key={index}
            className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out hover:text-orange-500 ${
              active ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <Icon size={20} />
          </button>
        ))}
      </nav>
      <button
        onClick={logout}
        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all duration-300 ease-in-out"
      >
        <FaSignOutAlt size={20} />
      </button>
    </div>
  );
};

export default Sidebar;
