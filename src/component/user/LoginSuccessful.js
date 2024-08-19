import React from "react";
import * as storage from "../../service/storage";
export default class LoginSuccessful extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedUser: {},
    };
  }

  componentDidMount() {
    this.setState({
      loggedUser: storage.getLoggedUser(),
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
