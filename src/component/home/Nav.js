import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import * as storage from "../../service/storage";
function Nav() {
  return (
    <>
      {!storage.getLoggedUser()?.id && <Navigate to="/login" />}

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="" end activeclassname="active">
            <img src="../logo192.png" width="30" height="30" alt="home" />
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
                {storage.getLoggedUser()?.name}
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
