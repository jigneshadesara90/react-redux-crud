import { Modal } from "bootstrap";
import React from "react";
import { toast } from "react-toastify";

export default class DocumentList extends React.Component {
  constructor() {
    // lifecycle 1
    super();
    console.log("constructor");
    this.state = {
      documents: [],
      document: {},
      activeDocumentId: "",
      editModel: undefined,
      uploadModal: undefined,
      deleteModel: undefined,
    };
  }

  componentDidMount() {
    // call after render method, lifecycle 3
    this.setState({
      documents: localStorage.getItem("documents")
        ? JSON.parse(localStorage.getItem("documents"))
        : [],
    });
  }

  editDocument = (activeDocumentId) => {
    this.setState({
      activeDocumentId,
    });

    const documents = localStorage.getItem("documents")
      ? JSON.parse(localStorage.getItem("documents"))
      : [];

    const doc = documents.find((doc) => doc.id === activeDocumentId) || {};
    this.setState({
      document: doc,
    });

    const editModal = new Modal(document.getElementById("editModal"));
    this.setState({
      editModal,
    });
    editModal.show();
  };

  handleEdit = (event) => {
    event.preventDefault(); // stop page refresh
    const id = this.state.document.id;
    const label = event.target.elements.label.value;
    const fileName = this.state.document.fileName;

    let documents = localStorage.getItem("documents")
      ? JSON.parse(localStorage.getItem("documents"))
      : [];

    const doc = {
      id,
      label,
      fileName,
    };

    if (!label) {
      toast.error("File Description missing", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const updateDoc = documents.map((item) => {
        return item.id === doc.id ? doc : item;
      });

      localStorage.setItem("documents", JSON.stringify(updateDoc));
      this.setState({
        documents: updateDoc,
      });
      this.state.editModal.hide();
      toast.success("Document updated successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    document.getElementById("editForm").reset();
  };

  uploadDocument = () => {
    const uploadModal = new Modal(document.getElementById("uploadModal"));
    this.setState({
      uploadModal,
    });
    uploadModal.show();
    document.getElementById("uploadForm").reset();
  };

  deleteDocument = (activeDocumentId) => {
    this.setState({
      activeDocumentId,
    });

    const deleteModel = new Modal(document.getElementById("deleteModel"));
    this.setState({
      deleteModel,
    });
    deleteModel.show();
  };

  confirmDelete = () => {
    const documents = localStorage.getItem("documents")
      ? JSON.parse(localStorage.getItem("documents"))
      : [];

    const newDocuments = documents.filter(
      (document) => document.id !== this.state.activeDocumentId
    );
    this.setState({
      documents: newDocuments,
    });

    localStorage.setItem("documents", JSON.stringify(newDocuments));

    this.state.deleteModel.hide();
  };

  handleUpload = (event) => {
    event.preventDefault(); // stop page refresh
    const label = event.target.elements.label.value;
    const fileName = event.target.elements.fileName?.files[0]?.name;

    let documents = localStorage.getItem("documents")
      ? JSON.parse(localStorage.getItem("documents"))
      : [];

    if (!label) {
      toast.error("File Description missing", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!fileName) {
      toast.error("Please Select File", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const doc = {
        id: Number(new Date()),
        label,
        fileName,
      };

      documents.push(doc);
      localStorage.setItem("documents", JSON.stringify(documents));
      this.setState({
        documents,
      });

      toast.success("File upload successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      this.state.uploadModal.hide();

      document.getElementById("uploadForm").reset();
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="h3 mb-3 font-weight-normal mt-5">My Uploads</h1>

              <table className="table table-bordered table-hover">
                <thead className="table-secondary">
                  <tr>
                    <th scope="col">Label</th>
                    <th scope="col">File Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.documents.map((document, index) => (
                    <tr key={index}>
                      <td>{document.label}</td>
                      <td>{document.fileName}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm m-2"
                          onClick={() => this.editDocument(document.id)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => this.deleteDocument(document.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                className="btn btn-lg btn-primary"
                type="button"
                onClick={this.uploadDocument}
              >
                Upload
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="deleteModel"
          tabIndex="-1"
          aria-labelledby="deleteModelLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm File Deletion</h5>
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

        <div
          className="modal fade"
          id="uploadModal"
          tabIndex="-1"
          aria-labelledby="uploadModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form id="uploadForm" onSubmit={this.handleUpload}>
                <div className="modal-header">
                  <h5 className="modal-title">Upload</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="container align-items-center justify-content-center">
                    <div className="row">
                      <div className="col text-center">
                        <div className="form-group row">
                          <label
                            htmlFor="label"
                            className="col-sm-4 col-form-label"
                          >
                            File Description
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="label"
                              name="label"
                              placeholder="File Description"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="custom-file col-sm-10">
                            <input
                              type="file"
                              className="custom-file-input"
                              name="fileName"
                              id="fileName"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="fileName"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Upload"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form id="editForm" onSubmit={this.handleEdit}>
                <div className="modal-header">
                  <h5 className="modal-title">Edit</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="container align-items-center justify-content-center">
                    <div className="row">
                      <div className="col text-center">
                        <div className="form-group row">
                          <label
                            htmlFor="label"
                            className="col-sm-4 col-form-label"
                          >
                            File Description
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              id="label"
                              name="label"
                              defaultValue={this.state.document.label || ""}
                              placeholder="File Description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <input type="submit" className="btn btn-primary" />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
