import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'specification', headerName: 'Specification', width: 130 },
  { field: 'quantity', headerName: 'Quantity', width: 130 },
  { field: 'unit', headerName: 'Unit', width: 130 },
  { field: 'supplier', headerName: 'Supplier', width: 130 },
  { field: 'no', headerName: 'Part No.', width: 130 },
];

const rows = [
  { id: 1, name: 'Glass Jar', specification: '50ml Transparent', quantity: 4, unit: "piece", supplier: "Tom co.", no: "CX100-50"},
  { id: 2, name: 'Cap', specification: 'Plastic, Screw-on', quantity: 1, unit: "piece", supplier: "Tom co.", no: "AB22-100"},
  { id: 3, name: 'Sticker', specification: 'Waterproof Sticker', quantity: 2, unit: "piece", supplier: "Herschel co.", no: "DX500-22"},
  { id: 4, name: 'Salt Water', specification: '50ml Salt water', quantity: 3, unit: "piece", supplier: "Mind co.", no: "CX12-90"},
  { id: 5, name: 'Tag', specification: 'RFID', quantity: 6, unit: "piece", supplier: "Timmy co.", no: "XD98-100"},
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
