import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
      navigation("/home", { replace: true });
      storage.setLoggedUser(user);
    } else {
      toast.error("invalid username or password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
      <ToastContainer />
    </>
  );
};

export default Login;
