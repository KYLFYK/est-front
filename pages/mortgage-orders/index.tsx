import { FC } from "react";
import { BankRoleTabs } from "../../src/components/tabs/Account/Bank/BankRoleTabs";
import { Mortage } from "../../src/components/tabs/Account/Bank/mortage";

const MortgageOrders: FC = () => {
  return (
    <BankRoleTabs>
      <Mortage />
    </BankRoleTabs>
  );
};

export default MortgageOrders;
