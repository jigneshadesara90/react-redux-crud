import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as storage from "../../service/storage";

const Login = () => {
  const navigation = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const users = storage.getUsers();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user?.email) {
      storage.setLoggedUser(user);
      navigation("/home", { replace: true });
    } else {
      toast.error("invalid username or password");
    }
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <form onSubmit={handleLogin}>
              <h1 className="h3 mb-3 font-weight-normal  text-center">Login</h1>
              <br />
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email address"
                required
                autoFocus
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                required
              />
              <input
                type="submit"
                className="btn btn-lg btn-primary"
                value="login"
              />
              <Link className="btn btn-lg btn-primary m-3" to={`/`}>
                Go Back
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
