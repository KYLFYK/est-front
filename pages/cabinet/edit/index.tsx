import { FC } from "react";
import { BankRoleTabs } from "../../../src/components/tabs/Account/Bank/BankRoleTabs";
import { BankEditPage } from "../../../src/components/tabs/Account/Bank/cabinet/EditPage";

const EditPage: FC = () => {
  return (
    <BankRoleTabs>
      <BankEditPage />
    </BankRoleTabs>
  );
};

export default EditPage;
