import React from 'react';
import './ReactRouter.css';

const ReactRouterComp = () => {
  return (
    <div className="container-fluid mt-2">
      <header className="d-flex align-items-center justify-content-start gap-3">
        <h2 className="btn btn-outline-danger">ReactRouter</h2>
        <ul className="d-flex  list-unstyled  text-black gap-5">
          <li className="text-decoration-none">
            <a className="text-decoration-none text-dark" href="#Dashboard">
              Dashboard
            </a>
          </li>
          <li>
            <a className="text-decoration-none  text-dark" href="#Team">
              Team
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-dark" href="#Projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-dark" href="#Calendar">
              Calendar
            </a>
          </li>
        </ul>
      </header>
      <hr />
      <h2 className="my-5">Dashboard</h2>
      <section className="rounded">aaaaa</section>
    </div>
  );
};

export default ReactRouterComp;
