import React from "react";
import InfrastructureAnalysis from "../../icons/Advantages/InfrastructureAnalysis";
import Mortgage from "../../icons/Advantages/Mortage";
import Tours from "../../icons/Advantages/Tours";
import AnalysisLegalPurity from "../../icons/Advantages/AnalysisLegalPurity";
import { IconTypes } from "../interfaces/icons";
import { HouseIcon } from "../../icons/Specifications/House";
import { RestIcon } from "../../icons/Specifications/Rest";

export const searchIconByValue = (value: IconTypes | string): JSX.Element => {
  switch (value) {
    case IconTypes.MORTGAGE:
      return <Mortgage />;
    case IconTypes.INFRASTRUCTURE_ANALYSIS:
      return <InfrastructureAnalysis />;
    case IconTypes.TOURS:
      return <Tours />;
    case IconTypes.PURITY_ANALYSIS:
      return <AnalysisLegalPurity />;
    case IconTypes.HOUSE_TYPE:
      return <HouseIcon />
    case IconTypes.REST:
      return <RestIcon />
    default:
      return <Mortgage />;
  }
};
