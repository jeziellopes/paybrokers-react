import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useProductsContext } from '@presentation/contexts'
import * as React from 'react'

import ProductsActions from '../ProductsActions'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Nome', flex: 1 },
  { field: 'price', headerName: 'Valor', flex: 1 },
  { field: 'group', headerName: 'Grupo', flex: 1 },
  {
    field: 'action',
    headerName: 'Ações',
    sortable: false,
    width: 100,
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      return <ProductsActions params={params} />
    },
  },
]

export const ProductsTable = () => {
  const { products } = useProductsContext()

  return (
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid
        rows={products || []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
