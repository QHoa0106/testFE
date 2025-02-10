import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FaUserTie, FaBuilding, FaEuroSign } from "react-icons/fa";

const cellStyles = "px-4 py-2 text-white text-center";
const headerStyles = "text-gray-300 font-semibold bg-[#1E293B] py-3 text-center";
const iconStyles = "text-gray-400";
const columns: GridColDef[] = [
  {
    field: "transaction",
    headerName: "Nom de la transaction",
    minWidth: 250,
    flex: 3,
    headerAlign: "left",
    align: "left",
    headerClassName: headerStyles,
    cellClassName: `${cellStyles} font-bold text-left`,
  },
  {
    field: "phase",
    headerName: "Phase",
    minWidth: 200,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    cellClassName: `${cellStyles} bg-[#2D3B50] rounded-md`,
  },
  {
    field: "etiquette",
    headerName: "Étiquette",
    minWidth: 180,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    cellClassName: `${cellStyles} bg-[#374151] rounded-md`,
  },
  {
    field: "organisation",
    headerName: "Organisation",
    minWidth: 220,
    flex: 3,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <div className="flex items-center justify-center space-x-2">
        <FaBuilding className={iconStyles} />
        <span className="text-white">{params.value}</span>
      </div>
    ),
  },
  {
    field: "contact",
    headerName: "Contact",
    minWidth: 200,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <div className="flex items-center justify-center space-x-2">
        <FaUserTie className={iconStyles} />
        <span className="text-white">{params.value}</span>
      </div>
    ),
  },
  {
    field: "responsable",
    headerName: "Responsable",
    minWidth: 200,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    cellClassName: cellStyles,
  },
  {
    field: "valeur",
    headerName: "Valeur",
    minWidth: 160,
    flex: 1,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <div className="flex items-center justify-center space-x-2">
        <FaEuroSign className="text-yellow-400" />
        <span className="text-white">{params.value}</span>
      </div>
    ),
  },
  {
    field: "closing",
    headerName: "Date closing",
    minWidth: 200,
    flex: 2,
    headerAlign: "center",
    align: "center",
    headerClassName: headerStyles,
    cellClassName: cellStyles,
  },
];

const rows = [
  {
    id: 1,
    transaction: "Affaire Romain",
    phase: "Non traité",
    etiquette: "BTP",
    organisation: "Studio Gillig",
    contact: "Romain Gillig",
    responsable: "Sébastien",
    valeur: "1500€",
    closing: "29/06/2023",
  },
  {
    id: 2,
    transaction: "Projet Design",
    phase: "En cours",
    etiquette: "Création",
    organisation: "WebAgency",
    contact: "Marie Lemoine",
    responsable: "Alex",
    valeur: "5000€",
    closing: "15/07/2023",
  },
];

const OpportunitiesTable: React.FC = () => {
  return (
    <div className="bg-[#0F172A] p-6 rounded-2xl shadow-lg border border-[#1E293B] w-full overflow-x-auto">
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
            fontWeight: "bold",
            fontSize: "14px",
            padding: "14px",
            borderBottom: "1px solid #374151",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            display: "flex",
            justifyContent: "center",
            width: "100%",
          },
          "& .MuiDataGrid-cell": {
            color: "white",
            fontSize: "14px",
            padding: "14px",
            borderBottom: "1px solid #374151",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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

export default OpportunitiesTable;
