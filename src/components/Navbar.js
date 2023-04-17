import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        {/* <NavLink class="navbar-brand" to="/AccountList">
          Kharcha
        </NavLink> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink
                className="nav-link"
                to="/AccountList"
                activeClassName="active"
              >
                Kharcha
              </NavLink>
            </li>
          </ul>
          <div className="btn-group d-flex mx-4">
            <Link to="/login" className="btn btn-outline-success">
              Login
            </Link>
            <Link to="/signup" className="btn btn-warning">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
