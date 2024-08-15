import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [loggedUser, setLoggedUser] = useState([]); // users1 is empty array

  useEffect(() => {
    setLoggedUser(
      localStorage.getItem("loggedUser")
        ? JSON.parse(localStorage.getItem("loggedUser"))
        : {}
    );
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="" end activeclassname="active">
            Dashboard
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  end
                  className="nav-link"
                  to=""
                  activeclassname="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="groupChat"
                  exact="true"
                  activeclassname="active"
                >
                  Group Chat
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="userList"
                  exact="true"
                  activeclassname="active"
                >
                  Manage Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="documentList"
                  exact="true"
                  activeclassname="active"
                >
                  Manage Documents
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/logout"
                  exact="true"
                  activeclassname="active"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item me-3 me-lg-0 align-content-center text-white">
                {loggedUser?.name}
              </li>
              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link text-white" to="/logout">
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
