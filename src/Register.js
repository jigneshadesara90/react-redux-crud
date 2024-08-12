import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col text-center">
          <h1 className="h3 mb-3 font-weight-normal">Register</h1>
          <br />
          <label htmlFor="inputName" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control mb-3"
            placeholder="Full Name"
            required
            autoFocus
          />
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control mb-3"
            placeholder="Email address"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control mb-3"
            placeholder="Password"
            required
          />
          <label htmlFor="inputPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control mb-3"
            placeholder="Confirm Password"
            required
          />

          <Link
            to="/registerSuccessful"
            className="btn btn-lg btn-primary"
            role="button"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
