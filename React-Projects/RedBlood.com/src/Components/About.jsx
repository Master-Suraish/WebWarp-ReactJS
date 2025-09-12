import doctoreImg from "/src/assets/Doctors-Team.jpg";

const About = () => {
  return (
    <>
      <div className="bg-fuchsia-5 flex flex-col justify-evenly items-center ">
        {/* //? Image , Who We Are ? and Our Mission section */}

        <div className="bg-blue-4 flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-evenly items-center w_350 w-full max-w-7xl h_120 md:bg-red-3">
          <div className="border-2 p-3 rounded-2xl sm:m-5 max-sm:m-5">
            <img
              src={doctoreImg}
              className="w-150 md:h-100 md:w-250"
              alt="Doctors-Team.jpg"
            />
          </div>
          {/* About Us */}
          <div className="bg-amber-4 flex flex-col md:w_120 bg-yellow-5 md:bg-red-7 h-120 justify-evenly items-center">
            <div className="bg-slate-800/60 sm:m-5 max-sm:m-5 xl:w-150 md:w_110 max-sm:h-70 h-50  flex flex-col justify-evenly rounded-2xl ps-5 text-slate-200">
              <p className="text-2xl font-bold text-white">About Us</p>

              <p>Who We Are ?</p>
              <p>
                We are a community-driven platform built with a single mission:
                to make blood accessible anytime, anywhere. Our goal is to
                connect patients in urgent need with compassionate donors who
                are ready to save lives.
              </p>
            </div>

            {/* Our Mission  */}
            <div className="bg-slate-800/60 sm:ms-5 sm:me-5 max-sm:ms-5 max-sm:me-5 xl:w-150 md:w_110 max-sm:h-100 h-50 flex flex-col justify-evenly rounded-2xl ps-5 text-slate-200">
              <p className="text-2xl font-bold text-white">Our Mission</p>
              <p>
                Every second, someone needs blood. Unfortunately, finding the
                right donor on time can be stressful and difficult. That’s where
                we step in. We believe no patient should ever lose a life due to
                a shortage of blood.
              </p>
            </div>
          </div>
        </div>

        {/* //? Row 02 : What We Do + Why It Matters */}
        <div className="bg-amber-6 w-full max-w-7xl  flex flex-col md:flex-row justify-center gap-6 p-6">
          {/* What We Do */}
          <div className="bg-slate-800/60 flex-1 rounded-2xl text-slate-200 p-4">
            <p className="text-xl sm:text-2xl font-bold text-white mb-3">
              What We Do ?
            </p>
            <ul className="list-disc ms-6 space-y-2">
              <li>
                Help patients and families find blood donors nearby quickly.
              </li>
              <li>
                Provide an easy way for donors to register and be contacted when
                someone needs their blood type.
              </li>
              <li>
                Build a strong community of heroes who believe in the power of
                giving.
              </li>
            </ul>
          </div>

          {/* Why It Matters */}
          <div className="bg-slate-800/60 flex-1 rounded-2xl text-slate-200 p-4">
            <p className="text-xl sm:text-2xl font-bold text-white mb-3">
              Why It Matters ?
            </p>
            <ul className="list-disc ms-6 space-y-2">
              <li>A single donation can save up to three lives.</li>
              <li>
                Every donor makes a difference to patients and families in need.
              </li>
              <li>
                Together, we can create a safer and healthier future for
                everyone.
              </li>
            </ul>
          </div>
        </div>

        {/* //? Row 03 : Be Part of the Change + Join Us */}
        <div className="bg-amber-3 w-full max-w-7xl  flex flex-col md:flex-row justify-center gap-6 p-6">
          {/* Be Part of the Change */}
          <div className="bg-slate-800/60 flex-1 rounded-2xl text-slate-200 p-5">
            <p className="text-xl sm:text-2xl font-bold text-white mb-3">
              Be Part of the Change
            </p>
            <p>
              When you register as a donor, you’re not just filling a form —
              you’re pledging to save lives. When you search for blood, you’re
              finding hope. Together, we’re creating a future where no emergency
              goes unanswered.
            </p>
          </div>

          {/* Join Us */}
          <div className="bg-slate-800/60 flex-1 rounded-2xl text-slate-200 p-5">
            <p className="text-xl sm:text-2xl font-bold text-white mb-3">
              Join Us
            </p>
            <p>
              Whether you are here to donate blood or to find it in an
              emergency, you are part of a life-saving network. Together, we can
              ensure that no one suffers due to lack of blood.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
