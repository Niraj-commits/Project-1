import * as React from "react";
import Modal from "../Necessities/Modal";
import Search from "../Necessities/Search";
import Table from "../Necessities/Table";

const AccountDetail = () => {
  return (
    <div className="container">
      <h2>Money Transactions</h2>
      <div style={{ fontSize: 20 }}>
        <p className="text-dark">
          Balance: <p className="text-success">5000 rs/-</p>
        </p>
      </div>
      <hr />
      <div class="container">
        <div class="row align-items-start">
          <div class="col" style={{ padding: 10 }}>
            <label>All Transactions</label>

            <select class="form-select" id="transactions">
              <option>All Transactions</option>
              <option>Expenses</option>
              <option>Income</option>
            </select>
          </div>
          <div class="col" style={{ padding: 10 }}>
            <label>Start Date</label>
            <input type="date" className="form-control"></input>
          </div>
          <div class="col" style={{ padding: 10 }}>
            <label>End Date</label>
            <input type="date" className="form-control"></input>
          </div>
        </div>
        <div>
          <Search />
          <Modal />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default AccountDetail;
