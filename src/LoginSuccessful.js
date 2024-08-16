import React from "react";

export default class LoginSuccessful extends React.Component {
  constructor() {
    // lifecycle 1
    super();
    console.log("constructor");
    this.state = {
      loggedUser: {},
    };
  }

  componentDidMount() {
    // call after render method, lifecycle 3

    this.setState({
      loggedUser: sessionStorage.getItem("loggedUser")
        ? JSON.parse(sessionStorage.getItem("loggedUser"))
        : {},
    });
  }

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col text-center">
            <h1 className="h3 mb-3 font-weight-normal mt-5">
              Login Successful
            </h1>
            <h5>Welcome! {this.state.loggedUser?.email}</h5>
          </div>
        </div>
      </div>
    );
  }
}
