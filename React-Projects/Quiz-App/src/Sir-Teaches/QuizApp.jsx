import { useState } from "react";
import { Options } from "./Options";

export function QuizApp() {
  const [mcqs, setMcqs] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const quizAPI = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
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
    //* I write it outide the second if. Here it's works fine on last question check also.
    if (mcqs[currentQuestionIndex].correct_answer === answer) {
      setScore(score + 10);
    }
    if (currentQuestionIndex < mcqs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      //? below if not runs on last question means correct ans score not add.
      // if (mcqs[currentQuestionIndex].correct_answer === answer) {
      //   setScore(score + 10);
      // }
    } else {
      setQuizStarted(false);
      setShowResult(true);
    }
  };

  return (
    <>
      <h1>Quiz App</h1>
      {!quizStarted && <button onClick={quizAPI}>Start Quiz</button>}

      {quizStarted && (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <h3>{mcqs[currentQuestionIndex].question}</h3>

          <Options
            incorretAnswer={mcqs[currentQuestionIndex].incorrect_answers}
            correctAnswer={mcqs[currentQuestionIndex].correct_answer}
            onAnswer={handleAnswer}
            QuestionIndex={currentQuestionIndex}
          />

          <p>Score : {score}</p>

          <p> Correct answer : {mcqs[currentQuestionIndex].correct_answer}</p>

          <button onClick={nextQuestion}>Next</button>
        </div>
      )}

      {showResult && (
        <div>
          {score > 30 ? (
            <div>
              <h2>✅ You Passed!</h2>
              <h3>🎯 Your Score: {score}</h3>
              <img
                src="https://gifdb.com/images/high/happy-steve-carell-187f3vn0ul880c3q.gif"
                alt="Happy"
              />
            </div>
          ) : (
            <div>
              <h2>❌ You Failed</h2>
              <h3>💔 Your Score: {score}</h3>
              <img
                src="https://media.tenor.com/G_6Rpef99_IAAAAM/crying-sad-shayari-life.gif"
                alt="Sad"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
