import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "transaction", headerName: "Nom de la transaction", width: 200 },
  { field: "phase", headerName: "Phase", width: 150 },
  { field: "etiquette", headerName: "Étiquette", width: 150 },
  { field: "organisation", headerName: "Organisation", width: 200 },
  { field: "contact", headerName: "Contact", width: 150 },
  { field: "responsable", headerName: "Responsable", width: 150 },
  { field: "valeur", headerName: "Valeur", width: 100 },
  { field: "closing", headerName: "Date closing", width: 150 },
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
  );
};

export default OpportunitiesTable;
