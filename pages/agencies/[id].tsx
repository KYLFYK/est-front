import { FC } from "react";
import { AdminCabinetWrapper } from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import { AgentPage } from "../../src/components/tabs/Account/Admin/components/UsersTab/agency/AgentPage";
import { useRouter } from "next/router";

const AgencyPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AdminCabinetWrapper>
      <AgentPage id={id as string} />
    </AdminCabinetWrapper>
  );
};

export default AgencyPage;
