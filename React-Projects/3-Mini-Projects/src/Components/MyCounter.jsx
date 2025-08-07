import React, { useState } from "react";

const MyCounter = () => {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    number > 0 ? setNumber(number - 1) : 0;
  }
  function incrementBy5() {
    setNumber(number + 5);
  }
  function decrementBy5() {
    if (number > 0) {
      setNumber(number - 5);
    }
    if (number === 4 || number === 3 || number === 2 || number === 1) {
      setNumber(0);
    }
  }
  function reset() {
    setNumber(0);
  }

  return (
    <>
      <div className="counter-container">
        <h1 className="counter-text">
          Counter is <span id="count">{number}</span>
        </h1>
        <div className="counter-btns">
          <button className="increment counter-buttonTag" onClick={increment}>
            +
          </button>
          <button className="counter-buttonTag" onClick={incrementBy5}>
            +5
          </button>
          <button className="counter-buttonTag" onClick={decrementBy5}>
            -5
          </button>
          <button className="counter-buttonTag" onClick={decrement}>
            -
          </button>
          <button className="reset-btn counter-buttonTag" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default MyCounter;
