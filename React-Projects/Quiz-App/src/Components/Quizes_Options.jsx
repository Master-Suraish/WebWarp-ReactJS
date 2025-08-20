export const Quizes_Options = ({
  correctAnswer,
  incorretAnswer,
  onAnswer,
  QuestionIndex,
}) => {
  const allOptions = [...incorretAnswer, correctAnswer];
  // console.log(correctAnswer); //* To see correct Answer

  allOptions.sort(); //* shuffle array values

  const handleOption = (value) => {
    onAnswer(value);
  };

  return (
    <div className="bg-amber-10 grid grid-cols-2 items-cente h-20 w-130 text-[18px]">
      {allOptions.map((option, index) => {
        return (
          <div key={index} className="items-center">
            <label
              htmlFor={option}
              className="flex items-center myLabel "
              name={option}
            >
              <input
                key={QuestionIndex} //* add to remove checked
                type="radio"
                name="option"
                value={option}
                id={option} //* To check radio on label text.
                className="cursor-pointer  inputRadiobtn "
                onClick={() => {
                  handleOption(option);
                }}
              />

              <div className="myCustomRadiobtn cursor-pointer rounded mb-2">
                {option}
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
};
