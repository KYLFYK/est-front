import { getLocalStorage } from "../../src/lib/localStorage/localStorage";
import { MainContainer } from "../../src/components/containers/MainContainer/MainContainer";
import { searchCabinet } from "../cabinet";
import { AdminCabinetWrapper } from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import { AdsTabs } from "../../src/components/tabs/Account/Admin/components/AdsTabs";
import { FC } from "react";

const Ads: FC = () => {
  return getLocalStorage() === "admin" ? (
    <AdminCabinetWrapper>
      <AdsTabs />
    </AdminCabinetWrapper>
  ) : (
    <MainContainer footerColor={"accent"} cabinetStyle={true}>
      {searchCabinet(getLocalStorage())}
    </MainContainer>
  );
};

export default Ads;
