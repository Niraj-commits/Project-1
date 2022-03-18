import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="container">
      <h1> Login </h1>
      <hr />
      <form class="row g-3">
        <div class="">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      <small>
        need an account? <Link to="/signup">Signup</Link>
      </small>
    </div>
  );
};

export default login;
