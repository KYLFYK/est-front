import { createContext, FC, useContext, useEffect } from "react";
import { AdaptiveParams, AdaptiveStoreData } from "./store";
import { observer } from "mobx-react-lite";

export const AdaptiveProvider = createContext(AdaptiveParams.KT6);

export const AdaptiveWrapper: FC = observer(({ children }) => {
  const { currentAdaptive, calculateAdaptive } = AdaptiveStoreData;

  useEffect(() => {
    if (typeof window !== "undefined") {
      calculateAdaptive(window.outerWidth);
    }

    const handler = () => {
      setTimeout(() => {
        if (typeof window !== "undefined") {
          calculateAdaptive(window.outerWidth);
        }
      }, 100);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <AdaptiveProvider.Provider value={currentAdaptive}>
      {children}
    </AdaptiveProvider.Provider>
  );
});

export const useAdaptiveContext = () => useContext(AdaptiveProvider);
