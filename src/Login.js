import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // stop page refresh
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const filter = users.filter(
      (user) => user.email === email && user.password === password
    );
    if (filter?.length) {
      navigation("/home", { replace: true });
      localStorage.setItem("loggedUser", JSON.stringify(filter[0]));
    } else {
      alert("invalid username or password");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col text-center">
          <form onSubmit={handleLogin}>
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <br />
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email address"
              required
              autoFocus
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
