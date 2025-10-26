import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../features/employeeDataSlice";

const StatusCustomDropdown = ({ ticketID, currentValue }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(currentValue);

  const dispatch = useDispatch();

  const options = ["uncompleted", "Pending", "Rejected", "Completed"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);

    // update redux store for this employee
    dispatch(updateEmployee({ ticketID, updates: { OrderStatus: option } }));
  };

  return (
    <div className="relative border rounded-full bg-orange-400">
      <button
        className="cursor-pointer w-40 py-1"
        onClick={() => setOpen(!open)}
      >
        {selected} <i class="fa-solid fa-caret-down"></i>
      </button>

      {open && (
        <ul className="p-1 absolute flex flex-col gap-2 top-full left-0 bg-orange-200 rounded-lg border">
          {options.map((opt) => (
            <li
              className="px-7 hover:bg-orange-400 rounded-full cursor-pointer"
              key={opt}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatusCustomDropdown;
