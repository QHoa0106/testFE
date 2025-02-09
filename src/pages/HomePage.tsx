import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import {
  FaFilter,
  FaGlobe,
  FaCog,
  FaSearch,
  FaAddressBook,
  FaUsers,
  FaTasks,
} from "react-icons/fa";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import AddButton from "../components/AddButton";

import ContactsTable from "../components/ContactsTable";
import OpportunitiesTable from "../components/OpportunitiesTable";
import TasksTable from "../components/TasksTable";

export const HomePage: React.FC = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-950 text-white">
      <div className="hidden lg:flex w-[250px]">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="bg-gray-900 px-4 md:px-6 py-3 border-b border-gray-700">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="Navigation Tabs"
                className="flex justify-center md:justify-start flex-wrap"
              >
                <Tab
                  icon={<FaAddressBook />}
                  label="Contacts"
                  value="1"
                  sx={{
                    color: value === "1" ? "#FF6B00" : "#A0A0A0",
                    "&.Mui-selected": { color: "#FF6B00" },
                  }}
                />
                <Tab
                  icon={<FaUsers />}
                  label="Opportunités"
                  value="3"
                  sx={{
                    color: value === "3" ? "#FF6B00" : "#A0A0A0",
                    "&.Mui-selected": { color: "#FF6B00" },
                  }}
                />
                <Tab
                  icon={<FaTasks />}
                  label="Tâches"
                  value="4"
                  sx={{
                    color: value === "4" ? "#FF6B00" : "#A0A0A0",
                    "&.Mui-selected": { color: "#FF6B00" },
                  }}
                />
              </TabList>
            </Box>
          </TabContext>
        </div>
        <div className="bg-gray-800 px-4 md:px-6 py-3 flex flex-col md:flex-row justify-between items-center border-b border-gray-700 space-y-3 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <AddButton
              label={
                value === "1"
                  ? "Ajout de contact"
                  : value === "3"
                  ? "Ajout d'opportunité"
                  : "Ajout de tâche"
              }
              onClick={() => alert("Ajout d'élément")}
            />
            <span className="text-lg font-medium">
              {value === "1"
                ? "100 Contacts"
                : value === "3"
                ? "100 Opportunités"
                : "50 Tâches"}
            </span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4 w-full md:w-auto">
            <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition w-full md:w-auto">
              <FaFilter />{" "}
              <span className="hidden md:inline">Plus de filtre</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition w-full md:w-auto">
              <FaGlobe />{" "}
              <span className="hidden md:inline">Tout le monde</span>
            </button>
            <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-full md:w-[300px]">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent text-white ml-2 w-full focus:outline-none"
              />
            </div>
            <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition">
              <FaCog />
            </button>
          </div>
        </div>
        <div className="p-4 md:p-6 overflow-x-auto">
          <TabContext value={value}>
            <TabPanel value="1">
              <ContactsTable />
            </TabPanel>
            <TabPanel value="3">
              <OpportunitiesTable />
            </TabPanel>
            <TabPanel value="4">
              <TasksTable />
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
};
