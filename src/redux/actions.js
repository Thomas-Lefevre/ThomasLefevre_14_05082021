import { actions } from './reducer'
import { selectEmployees } from '../redux/selector'

export function validForm() {
    return (dispatch, getState) => {
        dispatch(actions.valid())
        console.log('valid')
    }
}

export function unvalidForm() {
    return (dispatch, getState) => {
        dispatch(actions.unvalid())
        console.log('unvalid')
    }
}

export function checkValid() {
    return (dispatch, getState) => {
        const formValid = selectEmployees(getState()).formIsValid
        console.log('formValid')
        return formValid
    }
}

export function submitForm(data) {
    return (dispatch, getState) => {
        const getCurrentEmployees = selectEmployees(getState()).data
        console.log(data);
        dispatch(actions.submit(data))
        dispatch(actions.addEmployee(data, getCurrentEmployees))
    }
}   