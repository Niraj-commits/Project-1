import React from "react";

const NewListModal = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#newAccountBookModal"
      >
        + Create new account book
      </button>
      <div
        class="modal fade"
        id="newAccountBookModal"
        tabindex="-1"
        aria-labelledby="newAccountBookModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="newAccountBookModalLabel">
                Create New Account Book
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
                    Name for your account book:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Expense for month: Shrawan 2078"
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
                Add Account Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewListModal;
