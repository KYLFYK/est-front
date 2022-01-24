import React from "react";
import { getLocalStorage } from "../../src/lib/localStorage/localStorage";
import { MainContainer } from "src/components/containers/MainContainer/MainContainer";
import { searchCabinet } from "../cabinet";
import { AdminCabinetWrapper } from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import MessagesTab from "../../src/components/tabs/Account/Agent/components/Messages/Messages";

const Messages = () => {
  return getLocalStorage() === "admin" ? (
    <AdminCabinetWrapper>
      <MessagesTab />
    </AdminCabinetWrapper>
  ) : (
    <MainContainer footerColor={"accent"} cabinetStyle={true}>
      {searchCabinet(getLocalStorage())}
    </MainContainer>
  );
};

export default Messages;
