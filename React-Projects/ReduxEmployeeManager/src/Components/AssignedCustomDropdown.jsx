import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../features/employeeDataSlice";

const AssignedCustomDropdown = ({ ticketID, currentValue }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(currentValue);

  const dispatch = useDispatch();

  const options = [
    "unassigned",
    "Deepak kumar",
    "Noman Khan",
    "Suraish Dev",
    "Abdul Khan",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);

    // update redux store for this employee
    dispatch(updateEmployee({ ticketID, updates: { assignedTo: option } }));
  };

  return (
    <div className="relative  border rounded-full bg-orange-400">
      <button
        className="cursor-pointer py-1 w-40"
        onClick={() => setOpen(!open)}
      >
        {selected} <i class="fa-solid fa-caret-down"></i>
      </button>

      {open && (
        <ul className="p-1 absolute flex flex-col gap-1 top-full left-0 bg-orange-200 rounded-xl z-1 border">
          {options.map((opt) => (
            <li
              key={opt}
              className="px-6  hover:bg-orange-400 rounded-full cursor-pointer"
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

export default AssignedCustomDropdown;
