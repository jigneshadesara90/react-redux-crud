import { NavLink, Outlet } from "react-router-dom";
function Nav() {
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
