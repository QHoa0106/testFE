import React from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import ContactsTable from "../components/ContactsTable";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">📞 Contacts</h1>
          <ContactsTable />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
