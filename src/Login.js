import { Link, Outlet } from "react-router-dom";
function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col text-center">
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          <br />
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
          <Link to="/home" className="btn btn-lg btn-primary" rol="button">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
