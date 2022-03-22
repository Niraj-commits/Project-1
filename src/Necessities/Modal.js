import React from "react";
import ModalIncome from "./ModalIncome";
import ModalExpense from "./ModalExpense";

const Modal = () => {
  return (
    <div
      className="btn-group"
      style={{ padding: 10, paddingInlineStart: 10, paddingRight: 10 }}
    >
      <ModalIncome />
      <ModalExpense />
      <button className="btn btn-danger">Clear</button>
    </div>
  );
};

export default Modal;
