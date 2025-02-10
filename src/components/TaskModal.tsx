import React from "react";
import { FaTimes, FaClock, FaTag } from "react-icons/fa";

interface TaskModalProps {
  task: {
    id: number;
    title: string;
    dueDate: string;
    email: string;
    opportunity: string;
    status: string;
    contactAssocie: string;
    responsable: string;
    creationDate: string;
  };
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#0F172A] p-6 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-xl font-semibold">Détails de la tâche</h2>
          <button onClick={onClose} className="hover:bg-gray-700 p-2 rounded-full">
            <FaTimes className="text-white text-xl" />
          </button>
        </div>
        <div className="mt-4">
          <div>
            <label className="text-gray-300 text-sm">Titre de la tâche</label>
            <input
              type="text"
              value={task.title}
              readOnly
              className="w-full p-2 mt-1 bg-gray-800 text-white rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-gray-300 text-sm">Date d'échéance</label>
              <div className="flex items-center bg-gray-800 p-2 rounded-md">
                <FaClock className="text-gray-400 mr-2" />
                <span className="text-white">{task.dueDate}</span>
              </div>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Statut</label>
              <div className="flex items-center bg-gray-800 p-2 rounded-md">
                <FaTag className="text-gray-400 mr-2" />
                <span className="text-white">{task.status}</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="text"
              value={task.email}
              readOnly
              className="w-full p-2 mt-1 bg-gray-800 text-white rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-gray-300 text-sm">Contact associé</label>
              <input
                type="text"
                value={task.contactAssocie}
                readOnly
                className="w-full p-2 mt-1 bg-gray-800 text-white rounded-md"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm">Responsable</label>
              <input
                type="text"
                value={task.responsable}
                readOnly
                className="w-full p-2 mt-1 bg-gray-800 text-white rounded-md"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-gray-300 text-sm">Date de création</label>
            <div className="flex items-center bg-gray-800 p-2 rounded-md">
              <FaClock className="text-gray-400 mr-2" />
              <span className="text-white">{task.creationDate}</span>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button onClick={onClose} className="text-gray-300 hover:text-gray-400">
              Annuler
            </button>
            <button className="bg-orange-500 px-4 py-2 rounded-md text-white">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
