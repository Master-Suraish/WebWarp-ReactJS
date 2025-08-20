export const Options = ({
  correctAnswer,
  incorretAnswer,
  onAnswer,
  QuestionIndex,
}) => {
  const allOptions = [...incorretAnswer, correctAnswer];

  allOptions.sort(); //* shuffle array values

  const handleOption = (value) => {
    onAnswer(value);
  };

  return (
    <div>
      {allOptions.map((option, index) => {
        return (
          <div key={index}>
            <input
              key={QuestionIndex} //* add to remove checked
              type="radio"
              name="option"
              value={option}
              onClick={() => {
                handleOption(option);
              }}
            />
            <label>{option}</label>
          </div>
        );
      })}
    </div>
  );
};
