import { Link } from "react-router-dom";
function Logout() {
  localStorage.removeItem("loggedUser");

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col text-center">
          <h1 className="h3 mb-3 font-weight-normal">Welcome to User Module</h1>
          <h5 className="mt-3">Existing User</h5>
          <Link
            to="/login"
            className="btn btn-lg btn-primary mt-3"
            role="button"
          >
            Login
          </Link>
          <h5 className="mt-3">New User</h5>
          <Link
            to="/register"
            className="btn btn-lg btn-primary mt-3"
            role="button"
          >
            Register
          </Link>

          <h5 className="mt-3">You have been logged out</h5>
        </div>
      </div>
    </div>
  );
}

export default Logout;
