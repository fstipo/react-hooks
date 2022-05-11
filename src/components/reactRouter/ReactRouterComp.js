import React from 'react';
import {
  Link,
  useRoutes,
  useLocation,
  matchRoutes,
  useResolvedPath,
} from 'react-router-dom';
import Dashboard from './Dashboard';

import Page from './Page';
import './ReactRouter.css';

export const routes = [
  {
    path: '/dashboard-bla',
    element: <Dashboard title="Dashboard" />,
    children: [
      { path: '', element: <p className="display-5 fw-bold">Overview</p> },
      {
        path: 'user-details',
        element: <p className="display-5 fw-bold">User Details</p>,
      },

      {
        path: 'sales',
        element: <p className="display-5 fw-bold">Sales</p>,
      },
    ],
  },
  { path: '/projects', element: <Page title="Projects" /> },
  { path: '/team', element: <Page title="Team" /> },
  { path: '/calendar', element: <Page title="Calendar" /> },
];

export const NavLink = ({
  to,
  exact,
  className,
  activeClassName,
  inactiveClassName,
  children,
  ...rest
}) => {
  const location = useLocation();
  const routesMatches = matchRoutes(routes, location);
  let resolvedLocation = useResolvedPath(to);
  let isActive;
  if (exact) {
    isActive = resolvedLocation.pathname === location.pathname;
  } else {
    isActive = routesMatches.some(
      (match) => match.pathname === resolvedLocation.pathname
    );
  }

  const allClasses =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);

  return (
    <Link to={to} className={allClasses} {...rest}>
      {children}
    </Link>
  );
};

const ReactRouterComp = (props) => {
  let element = useRoutes(routes);
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
              to="/dashboard-bla"
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
      {element}
      {/* <Routes>
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
      </Routes> */}
    </div>
  );
};

export default ReactRouterComp;
