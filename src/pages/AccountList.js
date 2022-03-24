import React from "react";
import AccountCard from "../components/AccountCard";
import NewListModal from "../components/NewListModal";

const AccountList = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <AccountCard />
          </div>
          <div class="col-3">
            <AccountCard />
          </div>
          <div class="col-3">
            <AccountCard />
          </div>
          <div class="col-3">
            <AccountCard />
          </div>
          <div class="col-3">
            <AccountCard />
          </div>
          <div class="col-3">
            <AccountCard />
          </div>
        </div>
        <NewListModal />
      </div>
    </div>
  );
};

export default AccountList;
