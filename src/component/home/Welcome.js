import React from "react";
import { Link } from "react-router-dom";
import * as storage from "../../service/storage";

export default class Welcome extends React.Component {
  componentDidMount() {
    storage.removeLoggedUser();
  }

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col text-center">
            <h1 className="h3 mb-3 font-weight-normal">
              Welcome to User Module
            </h1>
            <h5 className="mt-3">Existing User</h5>
            <Link to="/login" className="btn btn-lg btn-primary mt-3">
              Login
            </Link>
            <h5 className="mt-3">New User</h5>
            <Link to="/register" className="btn btn-lg btn-primary mt-3">
              Register
            </Link>

            {this.props?.logout ? (
              <h5 className="mt-3">You have been logged out</h5>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
}
