import React from "react";
import { Link } from "react-router-dom";

const AccountCard = () => {
  return (
    <div class="card text-dark bg-light mb-3" style={{ maxWidth: "18rem" }}>
      <div class="card-header " style={{ backgroundColor: "#41cc74" }}>
        Account Book
      </div>
      <div class="card-body">
        <h5 class="card-title">Name Of Books</h5>
        <p class="card-text">Balance After the addition of book comes here</p>
        <Link to="/AccountDetail">View Account Books</Link>
      </div>
    </div>
  );
};

export default AccountCard;
