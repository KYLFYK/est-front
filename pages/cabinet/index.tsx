import AgencyRoleTabs from "../../src/components/tabs/Account/Agency/AgencyRoleTabs";
import AgentRoleTabs from "../../src/components/tabs/Account/Agent/AgentRoleTabs";
import { DeveloperRoleTabs } from "../../src/components/tabs/Account/Developer/DeveloperRoleTabs";
import OwnerRoleTabs from "../../src/components/tabs/Account/Owner/OwnerRoleTabs";
import { getLocalStorage } from "../../src/lib/localStorage/localStorage";
import { MainContainer } from "../../src/components/containers/MainContainer/MainContainer";
import { AdminCabinetWrapper } from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import { UsersTab } from "../../src/components/tabs/Account/Admin/components/UsersTab/UsersTab";
import Typography from './../../src/components/shared/Typography/Typography'

export const searchCabinet = (type: string | null) => {

  switch (type) {
    case "agency":
      return <AgencyRoleTabs />;
    case "agent":
      return <AgentRoleTabs />;
    case "customer":
      return <OwnerRoleTabs />;
    case "developer":
      return <DeveloperRoleTabs />;
    case "admin":
      return "admin";
    case "bank":
      return "bank";
    default:
      return <Typography weight={"bold"}> Время авторизации истекло, необходима повторная авторизация.</Typography>;
  }
};


const Cabinet = () => {
  return getLocalStorage() === "admin" ? (
    <AdminCabinetWrapper>
      <UsersTab />
    </AdminCabinetWrapper>
  ) : (
    <MainContainer footerColor={"accent"} cabinetStyle={true}>
      {searchCabinet(getLocalStorage())}
    </MainContainer>
  );
};

export default Cabinet;
