import React from "react";
import Modal from "../Necessities/Modal";
import Search from "../Necessities/Search";
import Table from "../Necessities/Table";

const AccountDetail = () => {
  return (
    <div>
      <h2>Money Transactions</h2>
      <p id="money">balance</p>
      <hr />
      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            <label>All Transactions</label>
            <div>
              <select class="form-select" id="transactions">
                <option>All Transactions</option>
                <option>Expenses</option>
                <option>Income</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label>Start Date</label>
            <input type="date" className="form-control"></input>
          </div>
          <div class="col">
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
