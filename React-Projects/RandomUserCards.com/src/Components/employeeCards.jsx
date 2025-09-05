const EmployeeCards = ({ pass_obj }) => {
  const {
    gender,
    name,
    location,
    email,
    login: { uuid },
    dob,
    registered,
    phone,
    cell,
    picture,
  } = pass_obj;

  const fullName = `${name.title} ${name.first} ${name.last}`;

  return (
    <div>
      <div className="bg-gray-100 min-h-145 max-h-155 w-85 flex border justify-center items-center shadow-xl/80">
        <div className="border-b-[30px] border-blue-900 min-h-140 max-h-150 w-80">
          <div className="bg-blue-400 rounded-[0_0_100%] h-40">
            <div className=" bg-blue-800  rounded-[0_0_100%] h-30">
              <div className="bg-white border flex justify-center items-center  h-35 w-35 rounded-[100%] relative top-13 left-23">
                <img
                  src={picture.large}
                  alt={`${fullName} profile picture`}
                  className="bg-white rounded-[100%] text-center"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 font-semibold text-[18px] flex flex-col justify-evenly items-center">
            <div>
              <div className="flex justify-center text-2xl font-extrabold text-blue-900">
                <p>{fullName}</p>
              </div>
              <div className="text-center text-gray-700">
                <p>{email}</p>
              </div>
            </div>

            <div className="w-80 ps-3">
              <div className="flex">
                <p>Gender</p>
                <p className="text-blue-900 ms-22">{gender}</p>
              </div>

              <div className="flex">
                <p>Location</p>
                <p className="text-blue-900 ms-20 ">
                  {`${location.city}, ${location.state}, ${location.country}`}
                </p>
              </div>

              <div className="flex">
                <p>Date of birth</p>
                <p className="text-blue-900 ps-11">{dob.date.slice(0, 10)}</p>
              </div>
              <div className="flex">
                <p>Age</p>
                <p className="text-blue-900 ps-29">{dob.age}</p>
              </div>
              <div className="flex">
                <p>Registered Date</p>
                <p className="text-blue-900 ps-5">
                  {registered.date.slice(0, 10)}
                </p>
              </div>

              <div className="flex">
                <p>Registered Age</p>
                <p className="text-blue-900 ps-6">{registered.age}</p>
              </div>
              <div className="flex">
                <p>Phone</p>
                <p className="text-blue-900 ps-24.5">{phone}</p>
              </div>
              <div className="flex">
                <p>Cell</p>
                <p className="text-blue-900 ps-30">{cell}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCards;
