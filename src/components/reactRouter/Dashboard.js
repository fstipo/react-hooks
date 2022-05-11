import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from './ReactRouterComp';

import './../../App.css';

const Dashboard = ({ title }) => {
  return (
    <>
      <header className="d-flex align-items-center justify-content-start gap-5">
        <h2 className="my-5">{title}</h2>
        <nav>
          <ul className="d-flex  list-unstyled  text-black gap-4 mt-3">
            <li className="text-decoration-none">
              <NavLink
                className="text-decoration-none text-dark"
                activeClassName={'active__secondary'}
                inactiveClassName={'inactive__secondary'}
                exact={true}
                to="/"
              >
                Overview
              </NavLink>
            </li>
            <li className="text-decoration-none">
              <NavLink
                className="text-decoration-none text-dark"
                activeClassName={'active__secondary'}
                inactiveClassName={'inactive__secondary'}
                to="/user-details"
              >
                User Details
              </NavLink>
            </li>
            <li className="text-decoration-none">
              <NavLink
                className="text-decoration-none text-dark"
                activeClassName={'active__secondary'}
                inactiveClassName={'inactive__secondary'}
                to="/sales"
              >
                Sales
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="rounded p-4">
        <Outlet />
      </section>
    </>
  );
};

export default Dashboard;
