import React from "react";
import { getLocalStorage } from "../../src/lib/localStorage/localStorage";
import { searchCabinet } from "../cabinet";

const Tariff = () => {
  return <div>{searchCabinet(getLocalStorage())}</div>;
};

export default Tariff;
