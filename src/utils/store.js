import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../redux/reducer";

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
    }
});