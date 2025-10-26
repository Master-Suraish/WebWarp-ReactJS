import React from "react";
import EmployeeList from "./Components/EmployeeList";

const App = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-orange-400 h-screen">
      <p className="text-5xl font-bold">Redux Employees Work Manager</p>
      <EmployeeList />
    </div>
  );
};

export default App;
