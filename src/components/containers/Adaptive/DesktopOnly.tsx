import React, { FC } from "react";
import { useAdaptiveContext } from "../../../mobx/adaptive/AdaptiveProvider";
import { AdaptiveParams } from "../../../mobx/adaptive/store";

export const DesktopOnly: FC = ({ children }) => {
  const { resolution } = useAdaptiveContext();

  return <>{resolution >= AdaptiveParams.KT3 ? children : null}</>;
};
