import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BloodBag from "./BloodBottle";

const HeroSection = ({
  get_donors_state_from_HomeDotJSX,
  get_showDonorsCards_state,
  get_setShowDonorsCards_state,
}) => {
  const [searchCity, setSearchCity] = useState("");
  const [searchBloodGrp, setSearchBloodGrp] = useState("");
  const [showEmptyError, setShowEmptyError] = useState("");

  const { pageName } = useParams(); //* Get PageName "FindDonor"

  //* When pageName is FindDonor. SearchCity and BloodGroup is empty, set Karachi A+.
  useEffect(() => {
    if (pageName === "FindDonor") {
      if (searchCity === "" && searchBloodGrp === "") {
        setSearchCity("Karachi");
        setSearchBloodGrp("B-");
        get_setShowDonorsCards_state(true);
      }
    } else {
      setSearchCity("");
      setSearchBloodGrp("");
      get_setShowDonorsCards_state(false);
    }
  }, [pageName]);

  const handleSearch = () => {
    searchCity === ""
      ? setShowEmptyError("City is not filled")
      : setShowEmptyError("Blood Group is not filled");

    if (searchCity !== "" && searchBloodGrp !== "") {
      setShowEmptyError("");
    }

    if (searchCity && searchBloodGrp) {
      get_setShowDonorsCards_state(!get_showDonorsCards_state);
    }
  };

  const handleCitySearch = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <>
      <section className="bg-blue-9 flex items-center justify-center min-h-full md:px-4 sm:p-0">
        <div className="bg-blue-4 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 p-6 rounded-lg">
          {/* //* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col lg:items-start md:items-center">
            <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Find Life-Saving Blood Donors Near You
            </p>
            <p className="text-slate-300 mb-6 max-w-xl">
              Every drop counts. Our platform connects patients in urgent need
              with nearby blood donors — fast, reliable, and life-saving.
            </p>

            {/* //* Search bar */}
            <div className="bg-slate-800/60 md:h-30 max-sm:h-60 p-4 rounded-lg w-full max-w-lg flex flex-col justify-evenly">
              <p className="text-slate-300">Search by blood group & city</p>
              <div className="flex flex-col sm:flex-row justify-evenly bg-red-2 max-sm:h-40">
                <input
                  type="text"
                  value={searchCity}
                  placeholder="e.g. Karachi"
                  className="max-sm:bg-amber-3 h-10 flex ps-3 rounded-lg bg-slate-900 outline-none text-white"
                  // onChange={(e) => setSearchCity(e.target.value)}
                  onChange={handleCitySearch}
                />
                <input
                  type="text"
                  placeholder="e.g. A+ / B- / O"
                  value={searchBloodGrp}
                  className="h-10 flex ps-3 rounded-md bg-slate-900 outline-none text-white"
                  onChange={(e) => setSearchBloodGrp(e.target.value)}
                />
                <button
                  className="h-10 px-4 rounded-lg bg-red-600 text-white font-semibold"
                  // onClick={() => setShowCards(!showCards)}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* //* Blood Bag Component */}
          <BloodBag />
        </div>
      </section>
      {/* //* Donor Cards */}
      <div className="bg-blue-3 mb-10 ">
        <p
          className={`${
            showEmptyError !== ""
              ? "text-xl border p-2 rounded-2xl bg-slate-900/60"
              : ""
          }`}
        >
          {showEmptyError}
        </p>
        {get_showDonorsCards_state && (
          // <div className="bg-amber-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:w-7xl lg:w-5xl md:w-3xl md:bg-amber-2">
          <div className="bg-amber-2 flex md:flex-row sm:flex-col max-sm:flex-col gap-5 md:bg-amber-2 md:w-auto max-sm:w-screen">
            {get_donors_state_from_HomeDotJSX
              .filter(
                (data) =>
                  searchCity === data.city && searchBloodGrp === data.bloodGroup
              )
              .map((d) => {
                return (
                  <div className="bg-slate-800/60 border rounded-4xl border-e-10 border-red-950 border-b-10 flex justify-center items-center md:w-auto sm:w-xl max-sm:w-screen">
                    <div className="p-5 flex flex-col gap-3 text-lg max-sm:text-sm w-auto max-sm:w-screen bg-blue-4">
                      <div className="bg-amber-2 flex justify-center">
                        <img
                          src={d.image}
                          className="xl:w_60 lg:w_50 md:w_40 md:w-full sm:w-sm rounded-4xl"
                          alt=""
                        />
                      </div>
                      <div className="bg-slate-950/50 py-3 border rounded-xl flex items-center justify-center gap-3 md:w-auto sm:w-md">
                        <div className="bg-red-4 rounded-2xl p-1 flex flex-col  items-center">
                          <div className="bg-white h-2 w-2"></div>
                          <div className="bg-white h-2 w-6"></div>
                          <div className="bg-white h-2 w-2"></div>
                        </div>
                        <p className="font-bold lg:text-3xl md:text-xl sm:text-3xl max-sm:text-3xl">
                          {d.name}
                        </p>
                      </div>

                      <p>
                        Age:
                        <span className="bg-red-700  font-semibold px-3 rounded-2xl ms-21 max-sm:ms-17">
                          {d.age}
                        </span>
                      </p>
                      <p>
                        Gender:
                        <span className="bg-red-700  font-semibold px-3 rounded-2xl ms-14 max-sm:ms-12">
                          {d.gender}
                        </span>
                      </p>
                      <p>
                        Blood Group:
                        <span className="bg-red-700  font-semibold rounded-2xl px-3 ms-3 max-sm:ms-4">
                          {d.bloodGroup}
                        </span>
                      </p>
                      <p>
                        City:
                        <span className="bg-red-700  font-semibold rounded-2xl px-3 ms-20 max-sm:ms-18">
                          {d.city}
                        </span>
                      </p>
                      <p>
                        Contact:
                        <span className="bg-red-700  font-semibold rounded-2xl px-3 ms-12 max-sm:ms-12">
                          {d.contact}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}

            {get_donors_state_from_HomeDotJSX.filter(
              (d) => d.city === searchCity && d.bloodGroup === searchBloodGrp
            ).length === 0 && (
              <div className="bg-slate-800/60 text-lg flex flex-col gap-4 border p-5 rounded-4xl max-sm:ms-5 max-sm:me-5">
                <p className="md:text-3xl  sm:text-2xl text-center max-sm:text-xl font-semibold">
                  We are Sorry, No Blood donors found
                </p>
                <p>Wait ? It's an emergency condition ?</p>
                <p>
                  Submit a quick "User Form" here
                  <Link
                    to="/DonorRegister"
                    className="text-red-600 font-bold underline ms-2 me-2"
                  >
                    Register Form
                  </Link>
                  and We try to arrange blood as possible
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSection;
