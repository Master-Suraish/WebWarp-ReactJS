export default function ShowFeedbacks({
  pass_ShowRatingFeedbacks_state,
  pass_SavedAllFeedbacks_state,
  pass_confirDdeleteFeedback_func,
  pass_getIndexFromChild_stateFunc,
  pass_editFeedback_func,
}) {
  return (
    <div className="grid grid-cols-3 gap-10 ms-5">
      {pass_ShowRatingFeedbacks_state === "show_4+_Feedbacks"
        ? pass_SavedAllFeedbacks_state.map((obj, index) => {
            return (
              //? show feedbacks of 4 and 5 ratings :

              <>
                {(obj.rating === "4" || obj.rating === "5") && (
                  <div
                    key={index}
                    className="bg-fuchsia-300 border-2 rounded-2xl"
                  >
                    <div className="flex flex-col justify-evenly ms-3 w-115 h-150">
                      {obj.StudentName && (
                        <div className="flex">
                          <p className="font-semibold me-5">Name:</p>
                          <p>{obj.StudentName}</p>
                        </div>
                      )}

                      {obj.FatherName && (
                        <div className="flex">
                          <p className="font-semibold me-5">Father Name:</p>
                          <p>{obj.FatherName}</p>
                        </div>
                      )}

                      {obj.email && (
                        <div className="flex">
                          <p className="font-semibold me-5">Email:</p>
                          <p>{obj.email}</p>
                        </div>
                      )}

                      {obj.field && (
                        <div className="flex">
                          <p className="font-semibold me-5">Field:</p>
                          <p>{obj.field}</p>
                        </div>
                      )}

                      {obj.course && (
                        <div className="flex">
                          <p className="font-semibold me-5">Course:</p>
                          <p>{obj.course}</p>
                        </div>
                      )}

                      {obj.instructor && (
                        <div className="flex">
                          <p className="font-semibold me-5">Instructor:</p>
                          <p>{obj.instructor}</p>
                        </div>
                      )}

                      {obj.months && (
                        <div className="flex">
                          <p className="font-semibold me-5">Months:</p>
                          <p>{obj.months} Completed</p>
                        </div>
                      )}

                      <div className="text-3xl text-center">
                        {obj.rating === "4"
                          ? "⭐⭐⭐⭐"
                          : obj.rating === "5"
                          ? "⭐⭐⭐⭐⭐"
                          : ""}
                      </div>

                      {obj.feedbackText && (
                        <p className="border-2 p-1 rounded-lg w-110">
                          {obj.feedbackText}
                        </p>
                      )}

                      {obj.StudentName && (
                        <div>
                          {obj.StudentName && (
                            <button
                              className="bg-red-500 rounded-lg border-1 w-100 font-semibold text-white hover:bg-red-700"
                              onClick={() => {
                                pass_confirDdeleteFeedback_func(obj.id);
                                // pass_getIndexFromChild_stateFunc(index);
                              }}
                            >
                              Delete feedback
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            );
          })
        : pass_ShowRatingFeedbacks_state === "show_5_Feedbacks"
        ? pass_SavedAllFeedbacks_state.map((obj, index) => {
            return (
              //? show feedbacks of only 5 ratings :

              <>
                {obj.rating === "5" && (
                  <div
                    key={index}
                    className="bg-fuchsia-300 border-2 rounded-2xl"
                  >
                    <div className="flex flex-col justify-evenly ms-3 w-115 h-150">
                      {obj.StudentName && (
                        <div className="flex">
                          <p className="font-semibold me-5">Name:</p>
                          <p>{obj.StudentName}</p>
                        </div>
                      )}

                      {obj.FatherName && (
                        <div className="flex">
                          <p className="font-semibold me-5">Father Name:</p>
                          <p>{obj.FatherName}</p>
                        </div>
                      )}

                      {obj.email && (
                        <div className="flex">
                          <p className="font-semibold me-5">Email:</p>
                          <p>{obj.email}</p>
                        </div>
                      )}

                      {obj.field && (
                        <div className="flex">
                          <p className="font-semibold me-5">Field:</p>
                          <p>{obj.field}</p>
                        </div>
                      )}

                      {obj.course && (
                        <div className="flex">
                          <p className="font-semibold me-5">Course:</p>
                          <p>{obj.course}</p>
                        </div>
                      )}

                      {obj.instructor && (
                        <div className="flex">
                          <p className="font-semibold me-5">Instructor:</p>
                          <p>{obj.instructor}</p>
                        </div>
                      )}

                      {obj.months && (
                        <div className="flex">
                          <p className="font-semibold me-5">Months:</p>
                          <p>{obj.months} Completed</p>
                        </div>
                      )}

                      <div className="text-3xl text-center">
                        {obj.rating === "5" ? "⭐⭐⭐⭐⭐" : ""}
                      </div>

                      {obj.feedbackText && (
                        <p className="border-2 p-1 rounded-lg w-110">
                          {obj.feedbackText}
                        </p>
                      )}

                      {obj.StudentName && (
                        <div>
                          {obj.StudentName && (
                            <button
                              className="bg-red-500 rounded-lg border-1 w-100 font-semibold text-white hover:bg-red-700"
                              onClick={() => {
                                pass_confirDdeleteFeedback_func(obj.id);
                                // pass_getIndexFromChild_stateFunc(index);
                              }}
                            >
                              Delete feedback
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            );
          })
        : pass_SavedAllFeedbacks_state.map((obj, index) => {
            return (
              //? show feedbacks of All ratings :
              <div key={obj.id}>
                {obj.StudentName && (
                  <div className="bg-fuchsia-300 border-2 rounded-2xl">
                    <div className="flex flex-col justify-evenly ms-3 w-115 h-150">
                      {obj.StudentName && (
                        <div className="flex">
                          <p className="font-semibold me-5">Name:</p>
                          <p>{obj.StudentName}</p>
                        </div>
                      )}

                      {obj.FatherName && (
                        <div className="flex">
                          <p className="font-semibold me-5">Father Name:</p>
                          <p>{obj.FatherName}</p>
                        </div>
                      )}

                      {obj.email && (
                        <div className="flex">
                          <p className="font-semibold me-5">Email:</p>
                          <p>{obj.email}</p>
                        </div>
                      )}

                      {obj.field && (
                        <div className="flex">
                          <p className="font-semibold me-5">Field:</p>
                          <p>{obj.field}</p>
                        </div>
                      )}

                      {obj.course && (
                        <div className="flex">
                          <p className="font-semibold me-5">Course:</p>
                          <p>{obj.course}</p>
                        </div>
                      )}

                      {obj.instructor && (
                        <div className="flex">
                          <p className="font-semibold me-5">Instructor:</p>
                          <p>{obj.instructor}</p>
                        </div>
                      )}

                      {obj.months && (
                        <div className="flex">
                          <p className="font-semibold me-5">Months:</p>
                          <p>{obj.months} Completed</p>
                        </div>
                      )}

                      <div className="text-3xl text-center">
                        {obj.rating === "1"
                          ? "⭐"
                          : obj.rating === "2"
                          ? "⭐⭐"
                          : obj.rating === "3"
                          ? "⭐⭐⭐"
                          : obj.rating === "4"
                          ? "⭐⭐⭐⭐"
                          : obj.rating === "5"
                          ? "⭐⭐⭐⭐⭐"
                          : ""}
                      </div>

                      {obj.feedbackText && (
                        <p className="border-2 p-1 rounded-lg w-110">
                          {obj.feedbackText}
                        </p>
                      )}

                      {obj.StudentName && (
                        <div>
                          {obj.StudentName && (
                            <button
                              className="bg-red-500 rounded-lg border-1 w-110 font-semibold text-white hover:bg-red-700"
                              onClick={() => {
                                pass_confirDdeleteFeedback_func(obj.id);
                                // pass_getIndexFromChild_stateFunc(index);
                              }}
                            >
                              Delete feedback
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
    </div>
  );
}
