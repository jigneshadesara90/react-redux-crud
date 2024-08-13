import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmpassword = event.target.elements.confirmpassword.value;

    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const user = {
      id: Number(new Date()),
      name,
      email,
      password,
      confirmpassword,
    };

    users.push(user); // push item inside array
    localStorage.setItem("users", JSON.stringify(users));

    navigation("/registerSuccessful", { replace: true });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col text-center">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <br />
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control mb-3"
              placeholder="Full Name"
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
            <label htmlFor="confirmpassword" className="sr-only">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              className="form-control mb-3"
              placeholder="Confirm Password"
              required
            />

            <input
              type="submit"
              className="btn btn-lg btn-primary"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
