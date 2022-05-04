import React, { useState } from 'react';

const UseStateComp = () => {
  const [count, setCount] = useState(4);
  const decreaseCountHandler = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };
  const increaseCountHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="text-center mt-4">
      <button
        className="btn btn-danger px-4 me-4"
        onClick={decreaseCountHandler}
      >
        -
      </button>
      <span className="fw-bold">{count}</span>
      <button
        className="btn btn-danger px-4 ms-4"
        onClick={increaseCountHandler}
      >
        +
      </button>
    </div>
  );
};

export default UseStateComp;
