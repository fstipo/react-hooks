import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import NavLink from './NavLink';
import Page from './Page';

import './ReactRouter.css';

const ReactRouterComp = (props) => {
  return (
    <div className="container-fluid mt-2">
      <header className="d-flex align-items-center justify-content-start gap-3">
        <h2 className="btn btn-outline-danger">ReactRouter</h2>
        <ul className="d-flex  list-unstyled  text-black gap-5">
          <li className="text-decoration-none">
            <NavLink
              className="link text-decoration-none text-dark"
              activeClassName={'active-link'}
              inactiveClassName={'inactive-link'}
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link text-decoration-none text-dark"
              activeClassName={'active-link'}
              inactiveClassName={'inactive-link'}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link text-decoration-none text-dark"
              activeClassName={'active-link'}
              inactiveClassName={'inactive-link'}
              to="/team"
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" link text-decoration-none text-dark"
              activeClassName={'active-link'}
              inactiveClassName={'inactive-link'}
              to="/calendar"
            >
              Calendar
            </NavLink>
          </li>
        </ul>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Dashboard title="Dashboard" />}>
          <Route
            path="/"
            element={<p className="display-5 fw-bold">Overview</p>}
          />
          <Route
            path="/user-details"
            element={<p className="display-5 fw-bold">User Details</p>}
          />
          <Route
            path="/sales"
            element={<p className="display-5 fw-bold">Sales</p>}
          />
        </Route>
        <Route path="/projects" element={<Page title="Projects" />} />
        <Route path="/team" element={<Page title="Team" />} />
        <Route path="/calendar" element={<Page title="Calendar" />} />
      </Routes>
    </div>
  );
};

export default ReactRouterComp;
