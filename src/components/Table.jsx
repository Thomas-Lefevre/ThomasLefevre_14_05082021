import { DataGrid, GridToolbarQuickFilter, GridToolbarContainer } from '@mui/x-data-grid';

function Table({ datas }) {

    const columns = [
        { field: 'firstName', headerName: 'First name',flex:0.5 },
        { field: 'lastName', headerName: 'Last name',flex:0.5  },
        { field: 'startDate', headerName: 'Start Date',flex:0.7  },
        { field: 'department', headerName: 'Department', flex:1.1  },
        { field: 'birthDate', headerName: 'Date of birth',flex:0.7  },
        { field: 'street', headerName: 'Street', flex:1.2},
        { field: 'city', headerName: 'City',flex:0.8  },
        { field: 'state', headerName: 'State',flex:0.8  },
        { field: 'zipCode', headerName: 'Zip Code',flex:0.5  }
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
                sx={{
                    fontSize:12
                }}
                    rows={datas}
                    columns={columns}
                    components={{ Toolbar: CustomToolbar }}
                />
            </div>
        </div>)
}
export default Table