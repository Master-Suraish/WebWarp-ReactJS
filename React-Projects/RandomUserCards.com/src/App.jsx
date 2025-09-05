import { useState, useEffect } from "react";
import EmployeeCards from "./Components/employeeCards";

function App() {
  const [saveRandomData, setSaveRandomData] = useState([]);

  const randomUserAPI = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");

    const userData = await response.json();
    const { results } = userData;

    setSaveRandomData(results);
  };

  useEffect(() => {
    randomUserAPI();
  }, []);

  return (
    <>
      <div className="text-white flex flex-col justify-evenly  items-center bg-blue-900 h-40">
        <p className="text-4xl font-bold">Welcome! To RandomUserCards.com</p>
        <p className="text-[18px] font-semibold text-blue-100 text-center">
          Where you get 20 random employees details on every reload with
          beautiful card design
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 bg-blue-100 pt-10">
        {saveRandomData.map((obj) => {
          return (
            <div key={obj.login.uuid}>
              <EmployeeCards pass_obj={obj} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
