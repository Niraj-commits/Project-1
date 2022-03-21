import React from "react";
import ModalIncome from "./ModalIncome";
import ModalExpense from "./ModalExpense";

const Modal = () => {
  return (
    <div className="btn-group">
      <ModalIncome />
      <ModalExpense />
      <button className="btn btn-danger">Clear</button>
    </div>
  );
};

export default Modal;
