import React from "react";
import { FaPlus } from "react-icons/fa";

interface AddButtonProps {
  label: string;
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded text-white font-medium hover:bg-orange-600 transition duration-300"
      onClick={onClick}
    >
      <FaPlus /> {label}
    </button>
  );
};

export default AddButton;
