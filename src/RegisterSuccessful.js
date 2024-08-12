import { Link } from "react-router-dom";
function RegisterSuccessful() {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col text-center">
          <h1 className="h3 mb-3 font-weight-normal">
            Registration Successful
          </h1>
          <h5>Thank you for your registration</h5>
          <Link to="/login">Click here to login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterSuccessful;
