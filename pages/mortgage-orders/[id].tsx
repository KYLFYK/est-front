import { FC } from "react";
import { BankRoleTabs } from "../../src/components/tabs/Account/Bank/BankRoleTabs";
import { OrderInfoPage } from "../../src/components/tabs/Account/Bank/mortage/OrderInfoPage";

const OrderPage: FC = () => {
  return (
    <BankRoleTabs>
      <OrderInfoPage />
    </BankRoleTabs>
  );
};

export default OrderPage;
