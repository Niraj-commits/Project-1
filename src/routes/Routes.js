import React from "react";
import Navbar from "../components/Navbar";
import signup from "../pages/Signup";
import Login from "../pages/Login";
import AccountDetail from "../pages/AccountDetail";
import AccountList from "../pages/AccountList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* component */}
        <div className="container">
          <Switch>
            {/* switch component manages routes */}
            {/* route defines which component to load on which path */}

            <Route path="/signup" component={signup} />

            <Route path="/login" component={Login} />

            <Route path="/AccountDetail" component={AccountDetail} />

            <Route path="/AccountList" component={AccountList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
