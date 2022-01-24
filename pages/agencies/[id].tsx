import { FC } from "react";
import { AdminCabinetWrapper } from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import { AgentPage } from "../../src/components/tabs/Account/Admin/components/UsersTab/agency/AgentPage";

const AgencyPage: FC = () => {
  return (
    <AdminCabinetWrapper>
      <AgentPage />
    </AdminCabinetWrapper>
  );
};

export default AgencyPage;
