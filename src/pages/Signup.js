import React from "react";
import { Link } from "react-router-dom";
const signup = () => {
  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h1> Signup</h1> <hr />
      <form class="row g-3">
        <div class="col-md-6">
          <label for="firstname" class="form-label">
            Firstname
          </label>
          <input type="text" class="form-control" id="Firstname" />
        </div>
        <div class="col-md-6">
          <label for="lastname" class="form-label">
            Lastname
          </label>
          <input type="text" class="form-control" id="Lastname" />
        </div>
        <div class="col-md-12">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="col-md-12">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="col-md-12">
          <label for="password" class="form-label">
            Confirm Password
          </label>
          <input type="password" class="form-control" id="Confirm_Password" />
        </div>

        <div class="col-6">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      <small>
        already have an account? <Link to="/login">Login</Link>
      </small>
    </div>
  );
};

export default signup;
