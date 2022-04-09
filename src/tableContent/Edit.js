import React from "react";

const Edit = () => {
  return (
    <div>
      <div>
        <button
          type="button"
          class="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#edit"
        >
          Edit
        </button>
        <div
          class="modal fade"
          id="edit"
          tabindex="-1"
          aria-labelledby="editLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editLabel">
                  Transaction Details
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
                      Description
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      placeholder="What do you want to update on table?"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="recipient-name"
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
                <button className="btn btn-danger">Delete</button>
                <button type="button" class="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
