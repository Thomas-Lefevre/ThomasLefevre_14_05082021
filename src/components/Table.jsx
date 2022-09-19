import { DataGrid, GridToolbarQuickFilter, GridToolbarContainer } from '@mui/x-data-grid';

function Table({ datas }) {

    const columns = [
        { field: 'firstName', headerName: 'First name' },
        { field: 'lastName', headerName: 'Last name' },
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
        <div style={{ height: "600px", display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
                <DataGrid
                    rows={datas}
                    columns={columns}
                    components={{ Toolbar: CustomToolbar }}
                />
            </div>
        </div>)
}
export default Table