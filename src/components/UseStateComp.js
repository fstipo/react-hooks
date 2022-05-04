import React, { useState } from 'react';

// ako je početno stanje neka složena matematička operacija - da nam ne uspori aplikaciju
// const init = () => {
//   console.log('render');
//   return 4;
// };

const UseStateComp = () => {
  const [countState, setState] = useState({ count: 4, theme: 'red' });
  const count = countState.count;
  const theme = countState.theme;

  //with objects
  const decreaseCountHandler = () =>
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });

  const increaseCountHandler = () =>
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });

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
