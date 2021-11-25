import React from "react";
import CircledCheckIcon from "../../../icons/LegalPurity/CircledCheck";
import TriangleExclamationIcon from "../../../icons/LegalPurity/TriangleExclamation";
import { LegalPurityStatusTypes } from "./config";

export const transformStatusToIcon = (status: LegalPurityStatusTypes): JSX.Element | undefined => {
  switch (status) {
    case LegalPurityStatusTypes.SUCCESS:
      return <CircledCheckIcon />;
    case LegalPurityStatusTypes.WARN:
      return <TriangleExclamationIcon />;
    default:
      return;
  }
};
