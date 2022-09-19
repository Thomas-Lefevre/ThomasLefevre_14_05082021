import { createSlice } from '@reduxjs/toolkit'
import { employeesDatas } from '../datas'

const initialState = {
    data: employeesDatas,
    formIsValid: false
}

const { actions, reducer } = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submit: {
            prepare: (data) => ({ payload: { data } }),
            reducer: (draft, action) => {
                draft.data = action.payload
            }
        },
        valid: {
            reducer: (draft, action) => { draft.formIsValid = true }
        },
        unvalid: {
            reducer: (draft, action) => { draft.formIsValid = false }
        },
        addEmployee: {
            prepare: (data, currentEmployees) => ({ payload: { data, currentEmployees } }),
            reducer: (draft, action) => {
                draft.data = [...action.payload.currentEmployees, action.payload.data]
            }
        }
    }
})

export { actions }
export default reducer