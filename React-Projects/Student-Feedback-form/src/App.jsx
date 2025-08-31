import { useState } from "react";
import ShowFeedbacks from "./Components/ShowFeedbacks";

function App() {
  //* To take and save text from input.
  const [takeFeedbacks, setTakeFeedBacks] = useState({
    StudentName: "",
    FatherName: "",
    email: "",
    course: "",
    months: "",
    field: "",
    instructor: "",
    rating: "",
    feedbackText: "",
  });

  const [getIndexFromChild, setGetIndexFromChild] = useState(0);

  const [saveAllFeedbacks, setSaveAllFeedbacks] = useState([]);

  const [showFeedbacksByRating, setShowFeedbacksByRating] = useState("");

  //* state and function for count feedbacks toast :
  const [feedbacksLimitToast, setFeedbacksLimitToast] = useState(false);

  function handleFeedbackLimitToast() {
    setFeedbacksLimitToast(true);
    setTimeout(() => setFeedbacksLimitToast(false), 3000);
  }

  //* state for delete feedbacks toast :
  const [feedbacksDeleteToast, setFeedbacksDeleteToast] = useState(false);

  //* show empty input fields :
  const [emptyInputToast, setEmptyInputToast] = useState("");

  //* Send "TakeFeedbacks" state data to "SaveAllFeedbacks" state and empty "TakeFeedbacks" state for new data.
  function submitFeedbacks(e) {
    e.preventDefault(); //? Prevents default page reload
    for (const key in takeFeedbacks) {
      if (!takeFeedbacks[key]) {
        setEmptyInputToast(`Please enter ${key} `);
        setTimeout(() => {
          setEmptyInputToast("");
        }, 3000);
        return emptyInputToast;
      }
    }

    //* Count Feedbacks valiadation Learned by ChatGPT :
    const countFeedbacks = saveAllFeedbacks.filter(
      (obj) => obj.StudentName === takeFeedbacks.StudentName
    ).length;

    if (countFeedbacks === 5) return handleFeedbackLimitToast();

    setSaveAllFeedbacks((pre) => [...pre, takeFeedbacks]);

    setTakeFeedBacks({
      StudentName: "",
      FatherName: "",
      email: "",
      course: "",
      months: "",
      field: "",
      instructor: "",
      rating: "",
      rating: "",
      feedbackText: "",
    });
  }

  //* Send all input, radio, dropdown text to "TakeFeedbacks" state.
  function handleOnChange(e) {
    setTakeFeedBacks((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  }

  function confirmDeleteFeedback() {
    setFeedbacksDeleteToast(true);
  }

  function deleteFeedback() {
    setSaveAllFeedbacks((pre) => [
      ...pre,
      saveAllFeedbacks.splice(getIndexFromChild, 1),
    ]);
    setFeedbacksDeleteToast(false);
  }

  return (
    <>
      {/* //* TOASTS ------------------------------------------------------------- */}

      <div className="flex justify-center items-center">
        {emptyInputToast && (
          <div className="fixed top-5 right-5 bg-red-600 font-semibold text-white px-4 py-2 rounded-lg shadow-lg">
            {emptyInputToast}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        {feedbacksLimitToast && (
          <div className="fixed top-5 right-5 bg-red-600 font-semibold text-white px-4 py-2 rounded-lg shadow-lg">
            ❌ Sorry! {takeFeedbacks.StudentName} You have submitted 5 feedbacks
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        {feedbacksDeleteToast && (
          <div className="fixed top-5 text-[18px] right-5 bg-red-600 font-semibold  px-4 py-2 rounded-lg shadow-lg">
            <p className="text-white">Are you sure to delete Feedback ?</p>
            <div className="flex justify-evenly mt-5">
              <button
                onClick={() => deleteFeedback(getIndexFromChild)}
                className="bg-white w-30 rounded border hover:bg-gray-300"
              >
                Yes
              </button>
              <button
                onClick={() => setFeedbacksDeleteToast(false)}
                className="bg-white w-30 rounded border hover:bg-gray-300"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>

      {/* //* FEEDBACKS FORM ----------------------------------------------------------------------- */}

      <div className="bg-fuchsia-100 flex items-center flex-col  justify-evenly  min-h-300 text-[20px]">
        <form
          onSubmit={submitFeedbacks}
          className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white rounded-2xl min-h-250 w-170 flex flex-col justify-evenly items-center mt-5"
        >
          <div className="rounded-lg  w-160 h-40 flex flex-col justify-evenly items-center bg-fuchsia-800/80">
            <p className="text-3xl font-bold  text-center">
              Welcome! To Bano Qabil 4.0 Student feedbacks portal.
            </p>
            <p className="font-semibold">
              Kindly submit your Bano Qabil 4.0 courses feedbacks.
            </p>
          </div>
          <label htmlFor="">
            <span className="font-semibold">Name</span>

            <input
              type="text"
              className="outline-2 focus:outline-fuchsia-800 ms-5 rounded w-102 p-1 ps-3"
              name="StudentName"
              value={takeFeedbacks.StudentName}
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="">
            <span className="font-semibold">Father Name</span>
            <input
              type="text"
              className="outline-2 focus:outline-fuchsia-800 ms-5 rounded w-87 p-1 ps-3"
              name="FatherName"
              value={takeFeedbacks.FatherName}
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              className="ms-5 rounded w-104 p-1 ps-3 outline-2 focus:outline-fuchsia-800"
              name="email"
              value={takeFeedbacks.email}
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="">
            <span className="font-semibold">Field</span>
            <input
              type="text"
              className="ms-5 rounded w-105 p-1 ps-3 outline-2 focus:outline-fuchsia-800"
              name="field"
              value={takeFeedbacks.field}
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="" className="font-semibold">
            Select Your Course
          </label>
          <select
            name="course"
            id=""
            className="rounded font-semibold w-120 p-1 ps-3 outline-none bg-fuchsia-800 cursor-pointer"
            value={takeFeedbacks.course}
            onChange={handleOnChange}
          >
            <option value="">Select Course</option>
            <option value="Frontend - HTML, CSS, and, JavaScript (Web 1)">
              Frontend - HTML, CSS, and, JavaScript
            </option>
            <option value="Frontend - ReactJS (Web 2)">
              Frontend - ReactJS
            </option>

            <option value="Backend - NodeJS, ExpressJS, and, MongoDB (Web 3)">
              Backend - NodeJS, ExpressJS, and, MongoDB
            </option>
          </select>

          <label htmlFor="">
            <span className="font-semibold">Select Your Instructor</span>
            <select
              name="instructor"
              className="ms-5 rounded w-66 p-1 ps-3 outline-none bg-fuchsia-800 cursor-pointer"
              id=""
              value={takeFeedbacks.instructor}
              onChange={handleOnChange}
            >
              <option value="">Select Instructor</option>
              <option value="Sir Waqar Rana">Sir Waqar Rana</option>
              <option value="Sir Owais Sha">Sir Owais Sha</option>
              <option value="Sir Zaheer Ali">Sir Zaheer Ali</option>
            </select>
          </label>

          <label htmlFor="">
            <span className="font-semibold">Select Months (Completed)</span>
            <select
              name="months"
              id=""
              className="ms-5 rounded w-53 p-1 ps-3 bg-fuchsia-800 cursor-pointer"
              value={takeFeedbacks.months}
              onChange={handleOnChange}
            >
              <option value="">Select Months</option>
              <option value="1 Month">1 Month</option>
              <option value="2 Month">2 Month</option>
              <option value="3 Month">3 Month</option>
            </select>
          </label>

          <div className="flex">
            <span className="font-semibold">Rate Your Insturctor</span>
            {[1, 2, 3, 4, 5].map((num) => {
              return (
                <div key={num}>
                  <input
                    type="radio"
                    name="rating"
                    value={num}
                    className="getRadioBtn"
                    id={`rating-${num}`}
                    checked={takeFeedbacks.rating === String(num)}
                    onChange={handleOnChange}
                  />
                  <label
                    htmlFor={`rating-${num}`}
                    className="myCustomRadioBtn cursor-pointer"
                  >
                    {num}⭐
                  </label>
                </div>
              );
            })}
          </div>

          <label htmlFor="" className="font-semibold">
            Give Your valuable Feedback
          </label>
          <textarea
            name="feedbackText"
            id=""
            value={takeFeedbacks.feedbackText}
            className="rounded w-120 h-50 p-1 ps-3 outline-2 focus:outline-fuchsia-800-300 bg-fuchsia-800/20"
            onChange={handleOnChange}
          ></textarea>

          <button
            type="submit"
            className="border-1 rounded ms-50 bg-fuchsia-900/80 p-1 w-50 font-semibold"
          >
            Submit
          </button>
        </form>

        {/* //* Forms finished */}

        <div className="w-370 mt-10 mb-10">
          <select
            name=""
            className="border-1 w-100 rounded p-1 ps-3 bg-fuchsia-800/80 text-white font-semibold"
            id=""
            onChange={(e) => setShowFeedbacksByRating(e.target.value)}
            value={showFeedbacksByRating}
          >
            <option value="show_All_Feedbacks">Show all FeedBacks</option>
            <option value="show_4+_Feedbacks">
              Show 4 Stars and above feedbacks
            </option>
            <option value="show_5_Feedbacks">Show 5 Stars feedbacks</option>
          </select>
        </div>
        <ShowFeedbacks
          pass_ShowRatingFeedbacks_state={showFeedbacksByRating}
          pass_SavedAllFeedbacks_state={saveAllFeedbacks}
          pass_confirDdeleteFeedback_func={confirmDeleteFeedback}
          pass_getIndexFromChild_stateFunc={setGetIndexFromChild}
        />
      </div>
    </>
  );
}

export default App;
