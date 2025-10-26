import { configureStore } from "@reduxjs/toolkit";
import employeeDataReducer from "../features/employeeDataSlice";

export const store = configureStore({
  reducer: {
    employeeData: employeeDataReducer,
  },
});
