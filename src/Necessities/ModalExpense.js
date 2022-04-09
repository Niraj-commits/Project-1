import React from "react";

const ModalExpense = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#expenseModal"
      >
        Add Expenses
      </button>
      <div
        class="modal fade"
        id="expenseModal"
        tabindex="-1"
        aria-labelledby="expenseModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="expenseModalLabel">
                Expenses Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="Expenses" class="col-form-label">
                    Expense Reason
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Details for reason on expenses made "
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Add Expenses
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="recipient-name"
                    placeholder="0"
                  ></input>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary "
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Add Entry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalExpense;
