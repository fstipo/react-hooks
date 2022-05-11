import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from './ReactRouterComp';
import './../../App.css';

export const UserDetail = () => {
  let params = useParams();
  return (
    <div className="display-6">
      User <strong>{params.id}</strong> details
    </div>
  );
};

const NewUsers = () => {
  return (
    <div className="row">
      <div className="col">
        <p>New Users:</p>
        {[...Array(20).keys()].map((index) => (
          <div key={index}>
            <NavLink
              to={`${index}`}
              className="text-decoration-none text-dark mt-2"
              activeClassName={'active__third'}
              inactiveClassName={'inactive__third'}
            >
              User {index}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default NewUsers;
