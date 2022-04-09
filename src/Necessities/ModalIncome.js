import React from "react";

const ModalIncome = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#modalIncome"
      >
        Add Income
      </button>
      <div
        class="modal fade"
        id="modalIncome"
        tabindex="-1"
        aria-labelledby="modalIncomeLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalIncomeLabel">
                Income Details
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
                  <label for="recipient-name" class="col-form-label">
                    Income Source
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Details for the money received medium"
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Add Transaction
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
                class="btn btn-secondary"
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

export default ModalIncome;
