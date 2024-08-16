import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as storage from "./storage";

function Register() {
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmpassword = event.target.elements.confirmpassword.value;
    let users = storage.getUsers();

    const verify = users.find(
      (user) => user.email === email && user.password === password
    );

    if (password !== confirmpassword) {
      toast.error("Password and Confirm Password not matching", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (verify?.email) {
      toast.error("User already exists", {
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
      const user = {
        id: Number(new Date()),
        name,
        email,
        password,
        confirmpassword,
      };

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      navigation("/registerSuccessful", { replace: true });
    }
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal text-center">
                Register
              </h1>
              <br />

              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control mb-3"
                placeholder="Full Name"
                required
                autoFocus
              />
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
              <label htmlFor="confirmpassword">Confirm Password</label>
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
}

export default Register;
