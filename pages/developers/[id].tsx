import { FC } from "react";
import { AdminCabinetWrapper } from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import { DeveloperPage } from "../../src/components/tabs/Account/Admin/components/UsersTab/developers/DeveloperPage";

const DevelopersPage: FC = () => {
  return (
    <AdminCabinetWrapper>
      <DeveloperPage />
    </AdminCabinetWrapper>
  );
};

export default DevelopersPage;
