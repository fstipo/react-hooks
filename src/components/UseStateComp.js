import React, { useState } from 'react';

// ako je početno stanje neka složena matematička operacija - da nam ne uspori aplikaciju
// const init = () => {
//   console.log('render');
//   return 4;
// };

const UseStateComp = () => {
  const [count, setCount] = useState(10);
  const [theme, setTheme] = useState(' Red');

  //with objects
  const decreaseCountHandler = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme(' Red');
  };

  const increaseCountHandler = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme(' Green');
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
      <span className="fw-bold">{theme}</span>
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
