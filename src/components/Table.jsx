import { DataGrid, GridToolbarQuickFilter, GridToolbarContainer } from '@mui/x-data-grid';

function Table() {

    const datas = JSON.parse(localStorage.getItem('Array of employees'))

    const columns = [
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'startDate', headerName: 'Start Date' },
        { field: 'department', headerName: 'Department' },
        { field: 'birthDate', headerName: 'Date of birth' },
        { field: 'street', headerName: 'Street' },
        { field: 'city', headerName: 'City' },
        { field: 'state', headerName: 'State' },
        { field: 'zipCode', headerName: 'Zip Code' }
    ];

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarQuickFilter />
            </GridToolbarContainer>
        )
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={datas}
                columns={columns}
                components={{ Toolbar: CustomToolbar }}
            />
        </div>)
}
export default Table