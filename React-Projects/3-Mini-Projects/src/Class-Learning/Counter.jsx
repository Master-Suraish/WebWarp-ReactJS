import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function increment() {
    // const updateValue = number + 1
    // setNumber(updateValue)
    setNumber(number + 1);
  }
  function decrement() {
    if (number === 0) {
      return;
    }
    setNumber(number - 1);
    // if (number !== 0) {
    //   setNumber(number - 1);
    // }
  }

  function reset() {
    setNumber(0);
  }
  return (
    <>
      <h1>Count : {number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
