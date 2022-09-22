import { DataGrid, GridToolbarQuickFilter, GridToolbarContainer } from '@mui/x-data-grid';

function Table({ datas }) {

    const columns = [
        { field: 'firstName', headerName: 'First name', width:150 },
        { field: 'lastName', headerName: 'Last name' , width:150 },
        { field: 'startDate', headerName: 'Start Date' , width:150 },
        { field: 'department', headerName: 'Department' , width:150 },
        { field: 'birthDate', headerName: 'Date of birth' , width:150 },
        { field: 'street', headerName: 'Street' , width:300 },
        { field: 'city', headerName: 'City' , width:150 },
        { field: 'state', headerName: 'State' , width:150 },
        { field: 'zipCode', headerName: 'Zip Code' , width:150 }
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