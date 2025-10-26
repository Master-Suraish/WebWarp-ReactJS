import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      ticketID: 1001,
      employeeName: "Muhammad Umair",
      assignedTo: "Deepak kumar",
      productName: "Mobile",
      OrderStatus: "Completed",
    },
    {
      ticketID: 1002,
      employeeName: "Muhammad Asif",
      assignedTo: "unassigned",
      productName: "Laptop",
      OrderStatus: "uncompleted",
    },
    {
      ticketID: 1003,
      employeeName: "Muhammad Ali",
      assignedTo: "Suraish Dev",
      productName: "Tablet",
      OrderStatus: "Pending",
    },
    {
      ticketID: 1004,
      employeeName: "Muhammad Hafiz",
      assignedTo: "Noman Khan",
      productName: "Headphone",
      OrderStatus: "Rejected",
    },
  ],
};

const employeeDataSlice = createSlice({
  name: "employeeData",
  initialState,
  reducers: {
    updateEmployee: (state, action) => {
      const { ticketID, updates } = action.payload;
      const employee = state.employees.find((emp) => emp.ticketID === ticketID);
      if (employee) {
        Object.assign(employee, updates); // merge new values
      }
    },
  },
});

export const { updateEmployee } = employeeDataSlice.actions;
export default employeeDataSlice.reducer;
