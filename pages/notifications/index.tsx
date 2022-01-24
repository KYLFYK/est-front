import React from "react";
import { getLocalStorage } from "../../src/lib/localStorage/localStorage";
import { MainContainer } from "src/components/containers/MainContainer/MainContainer";
import { searchCabinet } from "../cabinet";

const Notification = () => {
  return (
    <MainContainer footerColor={"accent"} cabinetStyle={true}>
      {searchCabinet(getLocalStorage())}
    </MainContainer>
  );
};

export default Notification;
