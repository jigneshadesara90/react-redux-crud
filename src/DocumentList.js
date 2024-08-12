import React from "react";

export default class DocumentList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="h3 mb-3 font-weight-normal mt-5">My Uploads</h1>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Label</th>
                  <th scope="col">File Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Report</td>
                  <td>report.xls</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      data-toggle="modal"
                      data-target="#editModal"
                    >
                      Edit
                    </button>
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

            <button
              className="btn btn-lg btn-primary"
              type="button"
              data-toggle="modal"
              data-target="#uploadModal"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}
