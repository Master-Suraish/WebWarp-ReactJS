import { useState } from "react";
import { Quizes_Options } from "./Quizes_Options";

export function Quizes() {
  const [mcqs, setMcqs] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectQuestions, setSelectQuestions] = useState(0);

  const quizAPI = async () => {
    if (selectQuestions === 0) return alert("Kindly select questions");
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${selectQuestions}&category=9&difficulty=easy&type=multiple`
    );
    const mcqsData = await response.json();
    setMcqs(mcqsData.results);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswer = (answer) => {
    setAnswer(answer);
  };

  const nextQuestion = () => {
    if (mcqs[currentQuestionIndex].correct_answer === answer) {
      setScore(score + 10);
    }
    if (currentQuestionIndex < mcqs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizStarted(false);
      setShowResult(true);
    }
  };

  return (
    <>
      <div className="bg-blue-200 h-screen flex flex-col justify-evenly items-center">
        <p className="bg-green-30 font-bold text-6xl">Quiz App</p>
        {!quizStarted && (
          <div className="bg-blue-300 rounded-lg border-2 h-30 w-80 flex flex-col justify-evenly items-center">
            <p className="font-semibold text-2xl">Select questions</p>
            <div className=" flex justify-evenly w-80">
              <button
                onClick={() => {
                  setSelectQuestions(5);
                  setScore("");
                }}
                className="border-2 rounded-lg  w-10 text-2xl focus:bg-red-200 hover:bg-red-200 cursor-pointer"
              >
                5
              </button>
              <button
                onClick={() => {
                  setSelectQuestions(10);
                  setScore("");
                }}
                className="border-2 rounded-lg  w-10 text-2xl focus:bg-red-200 hover:bg-red-200 cursor-pointer"
              >
                10
              </button>
              <button
                onClick={() => {
                  setSelectQuestions(20);
                  setScore("");
                }}
                className="border-2 rounded-lg text-2xl w-10 focus:bg-red-200 hover:bg-red-200 cursor-pointer"
              >
                20
              </button>
              <button
                onClick={() => {
                  setSelectQuestions(30);
                  setScore("");
                }}
                className="border-2 rounded-lg  text-2xl w-10 focus:bg-red-200 hover:bg-red-200 cursor-pointer"
              >
                30
              </button>
            </div>
          </div>
        )}
        {!quizStarted && (
          <button
            className="bg-red-200 border-2 rounded-lg h-12 w-40 text-[20px] font-bold hover:bg-red-300 border-b-4 border-e-4 cursor-pointer"
            onClick={quizAPI}
          >
            Start Quiz
          </button>
        )}

        {quizStarted && (
          <div className="bg-blue-100  shadow-2xl rounded-2xl flex flex-col justify-evenly items-center h-80 w-150">
            <h2 className="bg-red-30 text-4xl font-bold text-center">
              Question {currentQuestionIndex + 1}
            </h2>
            <h3 className="text-[20px] flex w-130 overflow-hidden">
              {mcqs[currentQuestionIndex].question}
            </h3>

            <Quizes_Options
              incorretAnswer={mcqs[currentQuestionIndex].incorrect_answers}
              correctAnswer={mcqs[currentQuestionIndex].correct_answer}
              onAnswer={handleAnswer}
              QuestionIndex={currentQuestionIndex}
            />

            <button
              className="bg-red-200 font-bold h-10 w-35 rounded-lg border-2 hover:bg-red-300 cursor-pointer mt-5"
              onClick={nextQuestion}
            >
              {currentQuestionIndex === mcqs.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        )}
        {showResult && (
          <div>
            {(selectQuestions === 5 && score >= 40) ||
            (selectQuestions === 10 && score >= 70) ||
            (selectQuestions === 20 && score >= 170) ||
            (selectQuestions === 30 && score >= 270) ? (
              <div className="h-100 w-130 flex flex-col justify-evenly items-center text-2xl text-blue-700 font-bold">
                <p>✅ Congratulations! You are passed.</p>
                <p>🎯 Your Score : {score}</p>
                <img
                  // src="https://gifdb.com/images/high/happy-steve-carell-187f3vn0ul880c3q.gif"
                  src="https://media.istockphoto.com/id/1354175290/vector/passed-stamp-imprint-seal-template-grunge-effect-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=OMsO3PA_4C2p7S6C-1pUGmVwXzqx_gtWBwR2t25TUnU="
                  alt="Happy"
                  className="h-50"
                />
              </div>
            ) : score === "" ? (
              ""
            ) : (
              <div className="h-100 w-130 flex flex-col justify-evenly items-center text-2xl text-red-600 font-bold">
                <p> Sorry, You are failed ❌. Better luck next time</p>
                <p> Your Score : {score}</p>
                <img
                  // src="https://media.tenor.com/G_6Rpef99_IAAAAM/crying-sad-shayari-life.gif"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBmcD52G81M_CLY0GJegjPiWwdMuI6kjhVg&s"
                  alt="failed"
                  className="h-50"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
