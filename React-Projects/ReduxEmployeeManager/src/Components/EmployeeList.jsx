import React from "react";
import { useSelector } from "react-redux";
import AssignedCustomDropdown from "./AssignedCustomDropdown";
import StatusCustomDropdown from "./StatusCustomDropdown";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employeeData.employees);

  return (
    <div>
      <p className="text-2xl text-white font-semibold text-center">Assigned Orders to your employees</p>
      <div className="flex w-screen h-100 justify-evenly items-center">
        {employees.map((emp) => (
          <div
            key={emp.ticketID}
            className="border-2 rounded-xl h-80 gap-4 p-5 flex flex-col bg-orange-200 shadow-xl/50 "
          >
            <p>
              Client ID: <span className="ps-10">{emp.ticketID}</span>
            </p>
            <p>
              Client Name:
              <span className="font-bold ps-4">{emp.employeeName}</span>
            </p>
            <p>Client Product: {emp.productName}</p>
            <p>
              Assigned To:
              <span className="ps-4 font-semibold">{emp.assignedTo}</span>
            </p>
            <p>
              Status:
              <span className="ps-14 font-semibold">{emp.OrderStatus}</span>
            </p>

            {/* our custom dropdown */}
            <div className="flex gap-3">
              <p>Set Assign</p>
              <div className="ps-4">
                <AssignedCustomDropdown
                  ticketID={emp.ticketID}
                  currentValue={emp.assignedTo}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <p>Set Status</p>
              <div className="ps-4">
                <StatusCustomDropdown
                  ticketID={emp.ticketID}
                  currentValue={emp.OrderStatus}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
