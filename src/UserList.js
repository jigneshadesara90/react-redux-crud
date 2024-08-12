import React from "react";
import { Link, Outlet } from "react-router-dom";

export default class UserList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="h3 mb-3 font-weight-normal mt-5">Users</h1>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Jignesh</td>
                  <td>jigneshadesara90@gmail.com</td>
                  <td>
                    <Link
                      to="userEdit"
                      role="button"
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
