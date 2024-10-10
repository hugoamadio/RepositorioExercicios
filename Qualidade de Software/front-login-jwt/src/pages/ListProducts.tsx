import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProducts, ProductType } from '../store/models/ProductsSlice';
import { CircularProgress, Paper } from '@mui/material';
import { useEffect } from 'react';

const columns: GridColDef<ProductType[][number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nome',
    width: 150,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Imagem',
    width: 150,
    editable: true,
    // valueGetter: (value, row) => <img src={value} />,
  },
  {
    field: 'createdAt',
    headerName: 'Criado em',
    width: 150,
    editable: true,
  },
];

export default function ListProducts() {
  const dispatch = useAppDispatch();
  const productsredux = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (productsredux.loading) {
    return (
      <DefaultLayout>
        <CircularProgress />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Paper sx={{ padding: '20px', marginY: '20px' }}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={productsredux.products}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>
    </DefaultLayout>
  );
}
