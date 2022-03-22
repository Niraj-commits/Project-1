import React from "react";

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
            <tr>
              <td>2016</td>
              <td>This time i lost money</td>
              <td> 5000</td>
              <td>
                {" "}
                <button>Edit</button> <button>delete</button> Stolen
              </td>
            </tr>
            <tr>
              <td>2017</td>
              <td>This time i gained money</td>
              <td> 5000</td>
              <td>
                {" "}
                <button>Edit</button> <button>delete</button>Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default table;
