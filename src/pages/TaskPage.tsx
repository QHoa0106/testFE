import React from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import TasksTable from "../components/TasksTable";

const TaskPage: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">📋 Tâches</h1>
          <TasksTable />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
