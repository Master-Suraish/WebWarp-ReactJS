import { useState } from "react";

function DonorForm({ donors, setDonors }) {
  const [donor, setDonor] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    city: "",
    contact: "",
    email: "",
  });

  //* Create handler for all input's onChange :
  const handleOnChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    donorToastHandler();
    // const newDonor = { id: donors.length + 1, ...donor }; //! error of length
    const newDonor = { id: Date.now(), ...donor }; //* Fix lenght by Date.now().
    setDonors([...donors, newDonor]);
    setDonor({
      name: "",
      age: "",
      gender: "",
      bloodGroup: "",
      city: "",
      contact: "",
      email: "",
    });
  };

  const [showDonorToast, setShowDonorToast] = useState(false);

  //* Donor Toast function :
  const donorToastHandler = () => {
    setShowDonorToast(true);
    setTimeout(() => setShowDonorToast(false), 3000); //* setTimeout hide Donor Toast in 3 second.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md bg-slate-800/60 mx-auto p-6 border rounded-2xl shadow-md space-y-4 mb-5"
    >
      {/* //* Donor Toast starts here */}

      {showDonorToast && (
        <div className="fixed top-25 text-center right-5 max-sm:ms-5  font-semibold bg-green-700/80 text-white px-4 py-2 rounded-lg shadow-md">
          ✅ Thanks! Your Donor form is submitted.
        </div>
      )}

      {/* //* Donor Toast ends here */}

      <h2 className="text-xl font-semibold text-center">
        Donor Registration Form
      </h2>

      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter full name"
          value={donor.name}
          onChange={(e) =>
            // setDonor({ ...donor, [e.target.name]: e.target.value })
            handleOnChange(e)
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Age</label>
        <input
          type="number"
          name="age"
          required
          placeholder="Enter age"
          value={donor.age}
          onChange={(e) =>
            // setDonor({ ...donor, [e.target.name]: e.target.value })
            handleOnChange(e)
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Gender</label>
        <input
          type="text"
          name="gender"
          required
          placeholder="Enter gender"
          value={donor.gender}
          onChange={(e) =>
            // setDonor({ ...donor, [e.target.name]: e.target.value })
            handleOnChange(e)
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Blood Group</label>
        <input
          type="text"
          name="bloodGroup"
          required
          placeholder="Enter blood group"
          value={donor.bloodGroup}
          onChange={(e) =>
            // setDonor({ ...donor, [e.target.name]: e.target.value })
            handleOnChange(e)
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">City</label>
        <input
          type="text"
          name="city"
          required
          placeholder="Enter city"
          value={donor.city}
          onChange={(e) =>
            // setDonor({ ...donor, [e.target.name]: e.target.value })
            handleOnChange(e)
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Contact</label>
        <input
          type="text"
          name="contact"
          required
          placeholder="Enter contact number"
          value={donor.contact}
          onChange={(e) =>
            // setDonor({ ...donor, [e.target.name]: e.target.value })
            handleOnChange(e)
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter email"
          value={donor.email}
          onChange={(e) =>
            // setDonor({ ...donor, [e.target.name]: e.target.value })
            handleOnChange(e)
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 py-2 rounded-xl shadow-md border font-medium hover:scale-105 transition"
      >
        Register Donor
      </button>
    </form>
  );
}

function UserForm({ users, setUsers }) {
  const [user, setUser] = useState({
    name: "",
    city: "",
    bloodGroupNeeded: "",
    contact: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    UserToastHandler(); //* run toast on submit usr form
    const newUser = { id: users.length + 1, ...user };
    setUsers([...users, newUser]);
    setUser({
      name: "",
      city: "",
      bloodGroupNeeded: "",
      contact: "",
      reason: "",
    });
  };

  const [showUserToast, setShowUserToast] = useState(false);

  //* Toast function :
  const UserToastHandler = () => {
    setShowUserToast(true);
    setTimeout(() => setShowUserToast(false), 3000); //* setTimeout hide User Toast in 3 second.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md bg-slate-800/60 mx-auto p-6 border rounded-2xl shadow-md space-y-4 mb-5"
    >
      {/* //* User Toast starts here */}

      {showUserToast && (
        <div className="fixed top-25 right-5 text-center max-sm:ms-5   bg-green-700/80 font-semibold px-4 py-2 rounded-lg shadow-md">
          ✅ Thanks! Your User form is submitted.
        </div>
      )}

      {/* //* User Toast ends here */}
      <h2 className="text-xl font-semibold text-center">User Registration</h2>

      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter full name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">City</label>
        <input
          type="text"
          name="city"
          required
          placeholder="Enter city"
          value={user.city}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Blood Group Needed</label>
        <input
          type="text"
          name="bloodGroupNeeded"
          required
          placeholder="Enter required blood group"
          value={user.bloodGroupNeeded}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Contact</label>
        <input
          type="text"
          name="contact"
          required
          placeholder="Enter contact number"
          value={user.contact}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Reason</label>
        <textarea
          name="reason"
          required
          placeholder="Enter reason for request"
          value={user.reason}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 py-2 rounded-xl shadow-md border font-medium hover:scale-105 transition"
      >
        Register User
      </button>
    </form>
  );
}

export default function Registration({ donors, setDonors, users, setUsers }) {
  const [formType, setFormType] = useState("donor");

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-center mt-5">Registration Page</h1>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setFormType("donor")}
          className={`px-4 py-2 border rounded-xl shadow-sm transition ${
            formType === "donor" ? "font-bold bg-red-600" : "bg-slate-900/50"
          }`}
        >
          Donor
        </button>
        <button
          onClick={() => setFormType("user")}
          className={`px-4 bg-red-600 py-2 border rounded-xl shadow-sm transition ${
            formType === "user" ? "font-bold bg-red-600" : "bg-slate-900/50"
          }`}
        >
          User
        </button>
      </div>
      {formType === "donor" ? (
        <DonorForm donors={donors} setDonors={setDonors} />
      ) : (
        <UserForm users={users} setUsers={setUsers} />
      )}
    </div>
  );
}
