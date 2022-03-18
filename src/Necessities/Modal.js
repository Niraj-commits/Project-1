import React from "react";
import ModalIncome from "./ModalIncome";
import ModalExpense from "./ModalExpense";
import ModalClear from "./ModalClear";

const modal = () => {
  return (
    <div>
      <ModalIncome />
      <ModalClear />
      <ModalExpense />
    </div>
  );
};

export default modal;
