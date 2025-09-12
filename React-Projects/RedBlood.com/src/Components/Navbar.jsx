import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-red-950 min-h-20 min-w-screen border-b-1 flex flex-col justify-around items-center text-lg font-semibold sticky top-0 z-3">
      <div
        className={`flex items-center min-w-screen md:justify-evenly sm:justify-around max-sm:justify-around ${
          isOpen ? "mt-5" : ""
        }`}
      >
        <div className="bg-blue-3 h-10 w-51 flex justify-between items-center">
          <div className="bg-white rounded-2xl p-1 flex flex-col items-center">
            <div className="bg-red-600 h-2 w-2"></div>
            <div className="bg-red-600 h-2 w-6"></div>
            <div className="bg-red-600 h-2 w-2"></div>
          </div>
          <p className="font-bold text-2xl">RedBlood.com</p>
        </div>

        <div className="bg-yellow-3 md:flex xl:w-5xl xl:bg-green-2 lg:w-3xl lg:bg-red-4 max-sm:w-xl xs:hidden sm:hidden max-sm:hidden justify-evenly">
          <Link
            to="/"
            className="border rounded-lg w-18 text-center border-red-600 text-red-300 hover:bg-red-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border rounded-lg h-8 w-18 text-center
      border-red-600 text-red-300 hover:bg-red-700 hover:text-white
      "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="border rounded-lg h-8 w-28 text-center
        border-red-600 text-red-300 hover:bg-red-700 hover:text-white
      "
          >
            Contant US
          </Link>

          <Link
            to="/DonorRegister"
            className="border rounded-lg h-8 w-40 text-center border-red-600 text-red-300 hover:bg-red-700 hover:text-white"
          >
            Register Form
          </Link>

          <Link
            to="/FindDonor"
            className="border rounded-lg h-8 w-38 text-center
      border-red-600 text-red-300 hover:bg-red-700 hover:text-white"
          >
            Find Blood Now
          </Link>
        </div>
        {/* //? hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* //? hamburger menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-4 w-screen">
          <div className="flex flex-col gap-5 mx-10 my-4 text-sm">
            <Link
              to="/"
              className="border px-5 py-2 rounded-lg bg-red-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="border px-5 py-2 rounded-lg bg-red-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="border px-5 py-2 rounded-lg bg-red-700"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/DonorRegister"
              className="border px-5 py-2 rounded-lg bg-red-700"
              onClick={() => setIsOpen(false)}
            >
              Register as a Donor
            </Link>
            <Link
              to="/FindDonor"
              className="border px-5 py-2 rounded-lg bg-red-700"
              onClick={() => setIsOpen(false)}
            >
              Find Blood Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
