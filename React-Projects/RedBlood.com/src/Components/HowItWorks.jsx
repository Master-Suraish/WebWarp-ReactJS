import { Link } from "react-router-dom";
import bloodDonation_HowItWorkImg from "/src/assets/BloodDonation-HowItWorks.jpg";
import WhyDonate_HandShakeImg from "/src/assets/BloodDonation-HandShake.jpg";

const HowItWorks = () => {
  return (
    <>
      {/* How it works */}
      <section className="bg-green-2 flex justify-center w-screen md:mt-5">
        <div className="bg-blue-3 w-7xl flex justify-evenly md:flex-row max-sm:flex-col sm:flex-col sm:bg-amber-5 max-md:bg-yellow-1 ">
          <div className="bg-slate-800/60 p-6 rounded-s-xl border border-slate-700 lg:w-130 md:w-100 sm:m-5 max-sm:m-5 sm:rounded-lg max-sm:rounded-lg">
            <p className="text-2xl font-semibold mb-4">How it works</p>
            <ol className="bg-blue-3 list-decimal ms-5 md:h-30 sm:h-25 flex flex-col justify-between">
              <li>
                <strong>Search</strong> by blood group &amp; city.
              </li>
              <li>
                <strong>Connect</strong> with available donors instantly.
              </li>
              <li>
                <strong>Donate</strong> and save lives — track impact in your
                dashboard.
              </li>
            </ol>
          </div>
          <img
            src={bloodDonation_HowItWorkImg}
            alt="How its works"
            className="h-60 sm:m-5 max-sm:m-5 lg:w-170 md:w-100 rounded-e-xl sm:rounded-lg max-sm:rounded-lg"
          />
        </div>
      </section>

      {/* Why donate */}
      <section className="bg-blue-5 flex w-screen lg:h-150 sm:h-xl max-sm:h-6xl justify-center items-center">
        <div className="bg-green-2 flex justify-evenly lg:flex-row sm:flex-col max-sm:flex-col w-350">
          <img
            src={WhyDonate_HandShakeImg}
            alt="Hand shake image"
            className="lg:h-124 lg:w-145 sm:m-5 max-sm:m-5 rounded-lg"
          />
          <div className="flex flex-col bg-yellow-5 xl:w-150 lg:bg-amber-2 md:bg-amber-5 lg:w-120 lg:h-130 justify-evenly">
            <div className="p-6 rounded-lg bg-slate-800/60 border border-slate-700 lg:m-0 sm:m-5 max-sm:m-5">
              <p className="font-semibold text-lg mb-2">Why Donate Blood?</p>
              <ul className="text-slate-300">
                <li>
                  One donation can save up to <strong>3 lives</strong>.
                </li>
                <li>
                  It supports emergency and surgical needs in your community.
                </li>
                <li>
                  Donors receive health checks and feel great about helping.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/60 border border-slate-700 lg:m-0 sm:ms-5 sm:me-5 max-sm:me-5 max-sm:ms-5 md:p-3">
              <p className="font-semibold text-lg mb-2">Impact</p>
              <p className="text-slate-300">
                Over <strong>2,500 lives</strong> saved through our platform.
                Join the community and be someone’s hero.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/60 border border-slate-700 flex lg:flex-col max-sm:flex-col sm:bg-amber-2 md:bg-amber-6 justify-between lg:m-0 sm:m-5 max-sm:m-5">
              <div>
                <p className="font-semibold text-lg mb-2">Get Involved</p>
                <p className="text-slate-300 mb-4">
                  Register as a donor, share posts, or volunteer to organize
                  drives.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  to="/DonorRegister"
                  className="w-full sm:w-50 px-4 py-2 rounded-md bg-red-600 text-white"
                >
                  Register as a Donor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
