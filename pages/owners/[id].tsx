import { FC } from "react";
import { AdminCabinetWrapper } from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import { OwnerPage } from "../../src/components/tabs/Account/Admin/components/UsersTab/owners/OwnerPage";

const OwnersPage: FC = () => {
  return (
    <AdminCabinetWrapper>
      <OwnerPage />
    </AdminCabinetWrapper>
  );
};

export default OwnersPage;
