import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'rate',
    headerName: 'Rate',
    type: 'number',
    width: 120,
  },
  {
    field: 'sale',
    headerName: 'Sale(SGD)',
    type: 'number',
    width: 140,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', sale: 450000, rate: 4.8 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', sale: 423000, rate: 4.6 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', sale: 420000, rate: 4.6 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', sale: 410000, rate: 4.6 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', sale: 390000, rate: 4.5 },
  { id: 6, lastName: 'Melisandre', firstName: null, sale: 385000, rate: 4.2 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', sale: 380000, rate: 4.2 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', sale: 350000, rate: 4.1 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', sale: 300000, rate: 3.8 },
];

export default function EmployeeTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
