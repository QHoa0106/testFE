import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const columns: GridColDef[] = [
  { field: "name", headerName: "Nom du contact", width: 200 },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    renderCell: (params: GridRenderCellParams) => (
      <div className="flex items-center">
        <FaEnvelope className="mr-2 text-gray-500" />
        {params.value}
      </div>
    ),
  },
  {
    field: "phone",
    headerName: "Téléphone",
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <div className="flex items-center">
        <FaPhone className="mr-2 text-gray-500" />
        {params.value}
      </div>
    ),
  },
  { field: "opportunity", headerName: "Opportunity", width: 200 },
  { field: "responsable", headerName: "Responsable", width: 150 },
];

const rows = [
  {
    id: 1,
    name: "Romain Gillig",
    email: "romain@gillig.studio",
    phone: "06 88 65 26 87",
    opportunity: "Formation 3D",
    responsable: "Sébastien",
  },
  {
    id: 2,
    name: "Jean Dupont",
    email: "jean@exemple.com",
    phone: "07 45 67 89 10",
    opportunity: "Nouveau projet",
    responsable: "Claire",
  },
];

const ContactsTable: React.FC = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
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
      />
    </div>
  );
};

export default ContactsTable;
