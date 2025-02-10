import React, { useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import TaskModal from "./TaskModal"; // Import TaskModal

const parseDate = (dateStr: string) => {
  if (!dateStr) return new Date();
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const cellStyles = "px-3 py-2 rounded-md font-bold text-white";
const headerStyles = "text-white font-semibold bg-[#1E293B]";

const columns: GridColDef[] = [
  {
    field: "realised",
    headerName: "Réalisé",
    minWidth: 80,
    flex: 1,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    renderCell: (params: GridRenderCellParams) =>
      params.value ? (
        <FaCheckCircle className="text-green-400 text-lg" />
      ) : (
        <FaCheckCircle className="text-gray-500 text-lg" />
      ),
  },
  {
    field: "title",
    headerName: "Titre",
    minWidth: 200,
    flex: 2,
    headerAlign: "left",
    align: "left",
    headerClassName: headerStyles,
    cellClassName: cellStyles,
  },
  {
    field: "dueDate",
    headerName: "Date d'échéance",
    minWidth: 200,
    flex: 2,
    headerAlign: "center",
    align: "center",
    type: "date",
    headerClassName: headerStyles,
    valueGetter: (params: any) => parseDate(params.row?.dueDate),
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <span className={`px-3 py-1 rounded-md font-bold ${params.value?.getTime() < new Date().getTime() ? "bg-red-600" : "bg-gray-700"} text-white`}>
        {params.value?.toLocaleDateString("fr-FR")}
      </span>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 250,
    flex: 2,
    headerAlign: "center",
    align: "left",
    headerClassName: headerStyles,
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-gray-400" />
        <span className="text-white">{params.value}</span>
      </div>
    ),
  },
  {
    field: "opportunity",
    headerName: "Opportunity",
    minWidth: 200,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    cellClassName: "text-white",
  },
  {
    field: "status",
    headerName: "Statut",
    minWidth: 150,
    flex: 2,
    headerAlign: "center",
    align: "center",
    type: "singleSelect",
    headerClassName: headerStyles,
    valueOptions: ["Appel", "À faire", "En attente"],
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <span
        className={`px-3 py-1 rounded-md font-bold ${
          params.value === "Appel"
            ? "bg-pink-700 text-white"
            : params.value === "À faire"
            ? "bg-yellow-500 text-black"
            : "bg-gray-500 text-white"
        }`}
      >
        {params.value}
      </span>
    ),
  },
  {
    field: "contactAssocie",
    headerName: "Contact associé",
    minWidth: 200,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    cellClassName: "text-white",
  },
  {
    field: "responsable",
    headerName: "Responsable",
    minWidth: 150,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    cellClassName: "text-white",
  },
  {
    field: "creationDate",
    headerName: "Date de création",
    minWidth: 200,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    valueGetter: (params: any) => parseDate(params.row?.creationDate),
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <span className="bg-gray-700 px-3 py-1 rounded-md text-white">
        {params.value?.toLocaleDateString("fr-FR")}
      </span>
    ),
  },
];

const rows = [
  {
    id: 1,
    realised: true,
    title: "Tâche 1",
    dueDate: "09/02/2025",
    email: "romain@gillig.studio",
    opportunity: "Formation 3D",
    status: "Appel",
    contactAssocie: "Romain Gillig",
    responsable: "Sébastien",
    creationDate: "09/02/2025",
  },
  {
    id: 2,
    realised: false,
    title: "Tâche 2",
    dueDate: "09/02/2025",
    email: "jean@exemple.com",
    opportunity: "Site Web",
    status: "À faire",
    contactAssocie: "Jean Dupont",
    responsable: "Marie",
    creationDate: "09/02/2025",
  },
];

const TasksTable: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  return (
    <div className="bg-[#111827] p-6 rounded-2xl shadow-lg border border-[#1E293B] w-full overflow-x-auto">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        checkboxSelection
        onRowClick={(params) => setSelectedTask(params.row)} 
        sx={{
          color: "gray",
          borderRadius: "12px",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1E293B",
            fontWeight: "bold",
            fontSize: "14px",
            textAlign: "center",
            padding: "14px",
            borderBottom: "1px solid #374151",
          },
          "& .MuiDataGrid-cell": {
            color: "white",
            fontSize: "14px",
            padding: "14px",
            borderBottom: "1px solid #374151",
          },
          "& .MuiDataGrid-root": {
            backgroundColor: "#1E293B",
            border: "none",
          },
          "& .MuiCheckbox-root": {
            color: "#FF6B00",
            backgroundColor: "#1E293B",
          },
          "& .MuiSvgIcon-root": {
            color: "#FF6B00",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#2D3B50",
          },
        }}
      />
      {selectedTask && <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </div>
  );
};

export default TasksTable;
