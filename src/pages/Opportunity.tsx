import React from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import OpportunitiesTable from "../components/OpportunitiesTable";

const OpportunityPage: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">📈 Opportunités</h1>
          <OpportunitiesTable />
        </div>
      </div>
    </div>
  );
};

export default OpportunityPage;
