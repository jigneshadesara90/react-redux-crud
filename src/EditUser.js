import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as storage from "./storage";

export default class EditUser extends React.Component {
  constructor() {
    // lifecycle 1
    super();
    console.log("constructor");
    this.state = {
      user: {},
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const locations = window.location.href.split("/");
    const id = locations[locations.length - 1];
    const users = storage.getUsers();

    const user = users.find((user) => user.id + "" === id) || {};
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
    let users = storage.getUsers();

    const user = {
      id,
      name,
      email,
      password,
      confirmpassword,
    };

    const updatedUSers = users.map((item) => {
      return item.id === user.id ? user : item;
    });

    localStorage.setItem("users", JSON.stringify(updatedUSers));

    toast.success("User updated successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      onClose: () => (window.location.href = "/home/userlist"),
    });
  };

  getState() {
    return this.state;
  }

  render() {
    return (
      <>
        <div className="container d-flex a justify-content-center">
          <div className="row">
            <div className="col text-center">
              <form onSubmit={this.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal mt-5">Edit User</h1>

                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
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
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
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
        <ToastContainer />
      </>
    );
  }
}
