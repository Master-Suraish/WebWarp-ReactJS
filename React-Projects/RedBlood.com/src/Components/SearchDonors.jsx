const SearchDonors = () => {
  return (
    <div className="bg-red-300 h-15 flex justify-evenly items-center text-lg font-semibold">
      <p>Search Blood Donor</p>
      <input
        type="text"
        className="outline h-8 w-60 rounded-lg ps-2 hover:bg-red-400 focus:bg-red-400"
        placeholder="Select Your City"
      />
      <input
        type="text"
        className="outline h-8 w-60 rounded-lg ps-2 hover:bg-red-400 focus:bg-red-400"
        placeholder="Select Your State"
      />
      <input
        type="text"
        className="outline h-8 w-60 rounded-lg ps-2 hover:bg-red-400 focus:bg-red-400"
        placeholder="Select Your Country"
      />
      <input
        type="text"
        className="outline h-8 w-60 rounded-lg ps-2 hover:bg-red-400 focus:bg-red-400"
        placeholder="Select Blood Group"
      />
      <button className="border h-9 w-35  rounded-lg hover:bg-red-50 cursor-pointer">
        Search Blood
      </button>
    </div>
  );
};

export default SearchDonors;
