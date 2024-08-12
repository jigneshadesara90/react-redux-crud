import React from "react";
import { Link, Outlet } from "react-router-dom";
export default class EditUser extends React.Component {
  render() {
    return (
      <div className="container d-flex a justify-content-center">
        <div className="row">
          <div className="col text-center">
            <h1 className="h3 mb-3 font-weight-normal mt-5">Edit User</h1>

            <label htmlFor="inputName" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="inputName"
              className="form-control mb-3"
              placeholder="Full Name"
              required
              autoFocus
            />
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mb-3"
              placeholder="Email address"
              required
              autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mb-3"
              placeholder="Password"
              required
            />
            <label htmlFor="inputPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mb-3"
              placeholder="Confirm Password"
              required
            />

            <Link
              to="/home/userlist"
              className="btn btn-lg btn-primary"
              role="button"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
