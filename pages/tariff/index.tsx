import React from "react";
import { getLocalStorage } from "../../src/lib/localStorage/localStorage";
import { searchCabinet } from "../cabinet";
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";

const Tariff = () => {
  return <MainContainer footerColor={"accent"} cabinetStyle={true}>
    {searchCabinet(getLocalStorage())}
  </MainContainer>;
};

export default Tariff;
