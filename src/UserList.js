import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import * as storage from "./storage";

export default class UserList extends React.Component {
  constructor() {
    // lifecycle 1
    super();
    console.log("constructor");
    this.state = {
      users: [],
      activeUserId: "",
      deleteModel: undefined,
      loggedUser: sessionStorage.getItem("loggedUser")
        ? JSON.parse(sessionStorage.getItem("loggedUser"))
        : {},
    };
  }

  componentDidMount() {
    // call after render method, lifecycle 3
    this.setState({
      users: storage.getUsers(),
    });
  }

  deleteUser = (activeUserId) => {
    console.log("deleteUSer");
    this.setState({
      activeUserId,
    });

    const deleteModel = new Modal(document.getElementById("exampleModal"));
    this.setState({
      deleteModel,
    });
    deleteModel.show();
  };

  confirmDelete = () => {
    const users = storage.getUsers();

    const newUsers = users.filter(
      (user) => user.id !== this.state.activeUserId
    );
    this.setState({
      users: newUsers,
    });

    localStorage.setItem("users", JSON.stringify(newUsers));

    this.state.deleteModel.hide();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="h3 mb-3 font-weight-normal mt-5">Users</h1>

            <table className="table table-bordered table-hover">
              <thead className="table-secondary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        to={`userEdit/${user.id}`}
                        role="button"
                        className="btn btn-primary btn-sm m-2"
                      >
                        Edit
                      </Link>
                      {user.id !== this.state.loggedUser.id ? (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => this.deleteUser(user.id)}
                        >
                          Delete
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm User Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.confirmDelete()}
                >
                  Ok
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
