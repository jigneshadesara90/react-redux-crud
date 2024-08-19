import React from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as storage from "../../service/storage";

export default class EditUser extends React.Component {
  constructor() {
    // lifecycle 1
    super();
    this.state = {
      user: {},
      redirect: false,
    };
  }

  componentDidMount() {
    const locations = window.location.href.split("/");
    const id = locations[locations.length - 1];

    const user = storage.getUser(+id);
    this.setState({
      user,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.state.user.id;
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = this.state.user.password;
    const confirmpassword = this.state.user.confirmpassword;

    const user = {
      id,
      name,
      email,
      password,
      confirmpassword,
    };

    storage.updateUser(user);

    toast.success("User updated successfully");

    this.setState({
      redirect: true,
    });
  };

  getState() {
    return this.state;
  }

  render() {
    const redirect = this.state.redirect;
    return (
      <>
        {redirect && <Navigate to="/home/userlist" />}
        <div className="container d-flex a justify-content-center">
          <div className="row">
            <div className="col ">
              <form onSubmit={this.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal mt-5 text-center">
                  Edit User
                </h1>

                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control mb-3"
                  placeholder="Full Name"
                  defaultValue={this.state.user.name || ""}
                  required
                  autoFocus
                />
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Email address"
                  defaultValue={this.state.user.email || ""}
                  required
                  autoFocus
                />

                <input
                  type="submit"
                  className="btn btn-lg btn-primary"
                  value="Save"
                />
                <Link
                  className="btn btn-lg btn-primary m-3"
                  to={`/home/userlist`}
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
