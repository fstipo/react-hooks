import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Page from './Page';
import './ReactRouter.css';

const NavLink = ({
  to,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) => {
  // determine based on current location and to
  let location = useLocation();
  //   console.log({ location });
  let isActive = location.pathname === to;
  let allClassNames =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);
  return <Link className={allClassNames} to={to} {...rest} />;
};

const ReactRouterComp = (props) => {
  return (
    <div className="container-fluid mt-2">
      <header className="d-flex align-items-center justify-content-start gap-3">
        <h2 className="btn btn-outline-danger">ReactRouter</h2>
        <ul className="d-flex  list-unstyled  text-black gap-5">
          <li className="text-decoration-none">
            <NavLink
              activeClassName="activeLink"
              inactiveClassName="link"
              className="link text-decoration-none text-dark"
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="activeLink"
              inactiveClassName="link"
              className="link text-decoration-none text-dark"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="activeLink"
              inactiveClassName="link"
              className="link text-decoration-none text-dark"
              to="/team"
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="activeLink"
              inactiveClassName="link"
              className=" link text-decoration-none text-dark"
              to="/calendar"
            >
              Calendar
            </NavLink>
          </li>
        </ul>
      </header>
      <hr />
      <Routes>
        <Route
          path="/"
          element={<Page className="my-5" title="Dashboard"></Page>}
        ></Route>
        <Route
          path="/projects"
          element={<Page className="my-5" title="Projects"></Page>}
        ></Route>
        <Route
          path="/team"
          element={<Page className="my-5" title="Team"></Page>}
        ></Route>
        <Route
          path="/calendar"
          element={<Page className="my-5" title="Calendar"></Page>}
        ></Route>
      </Routes>
    </div>
  );
};

export default ReactRouterComp;
