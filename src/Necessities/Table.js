import React from "react";
import TableModifications from "../tableContent/TableModifications";

const table = () => {
  return (
    <div>
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr class="align-bottom">
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-success">
              <td>04/03/2017</td>
              <td>Salary recieved from the company</td>
              <td> 5000</td>
              <td>
                {" "}
                <TableModifications />
              </td>
            </tr>
            <tr class="table-danger">
              <td>04/06/2017</td>
              <td>Spent money on shoes</td>
              <td> 4000</td>
              <td>
                {" "}
                <TableModifications />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default table;
