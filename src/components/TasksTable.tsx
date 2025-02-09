import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";

const parseDate = (dateStr: string) => {
  if (!dateStr) return new Date();
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const cellStyles = "px-3 py-1 rounded-md font-bold bg-gray-900 text-white";
const headerStyles = "text-white font-semibold";

const columns: GridColDef[] = [
  {
    field: "realised",
    headerName: "Réalisé",
    width: 80,
    headerAlign: "center",
    align: "center",
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
    width: 200,
    headerAlign: "left",
    align: "left",
    cellClassName: headerStyles,
  },
  {
    field: "dueDate",
    headerName: "Date d'échéance",
    width: 200,
    headerAlign: "center",
    align: "center",
    type: "date",
    valueGetter: (params: any) => parseDate(params.row?.dueDate),
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <span className={cellStyles}>
        {params.value?.toLocaleDateString("fr-FR")}
      </span>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    headerAlign: "center",
    align: "left",
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
    width: 200,
    headerAlign: "center",
    align: "center",
    cellClassName: "text-white",
  },
  {
    field: "status",
    headerName: "Statut",
    width: 150,
    headerAlign: "center",
    align: "center",
    type: "singleSelect",
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
    width: 200,
    headerAlign: "center",
    align: "center",
    cellClassName: "text-white",
  },
  {
    field: "responsable",
    headerName: "Responsable",
    width: 150,
    headerAlign: "center",
    align: "center",
    cellClassName: "text-white",
  },
  {
    field: "creationDate",
    headerName: "Date de création",
    width: 200,
    headerAlign: "center",
    align: "center",
    valueGetter: (params: any) => parseDate(params.row?.creationDate),
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <span className={cellStyles}>
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
  return (
    <div className="bg-[#111827] p-6 rounded-2xl shadow-lg border border-[#1E293B]">
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
        sx={{
          color: "white",
          borderRadius: "12px",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1E293B",
            color: "white !important",
            fontWeight: "bold",
            fontSize: "14px",
            textAlign: "center",
            padding: "12px",
            borderBottom: "1px solid #374151",
          },
          "& .MuiDataGrid-cell": {
            color: "white",
            fontSize: "14px",
            padding: "12px",
            borderBottom: "1px solid #374151",
          },
          "& .MuiDataGrid-root": {
            backgroundColor: "#1E293B",
            border: "none",
          },
          "& .MuiTablePagination-root": {
            color: "white",
          },
          "& .MuiCheckbox-root": {
            color: "#FF6B00",
          },
          "& .MuiSvgIcon-root": {
            color: "#FF6B00",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#2D3B50",
          },
        }}
      />
    </div>
  );
};

export default TasksTable;
