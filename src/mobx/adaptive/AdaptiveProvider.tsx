import { createContext, FC, useContext, useLayoutEffect } from "react";
import { AdaptiveParams, AdaptiveStoreData } from "./store";
import { observer } from "mobx-react-lite";

export const AdaptiveProvider = createContext({
  resolution: AdaptiveParams.KT6,
});

export const AdaptiveWrapper: FC = observer(({ children }) => {
  const AdaptiveStore = AdaptiveStoreData;

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      AdaptiveStore.calculateAdaptive(window.outerWidth);
    }

    const handler = () => {
      setTimeout(() => {
        if (typeof window !== "undefined") {
          AdaptiveStore.calculateAdaptive(window.outerWidth);
        }
      }, 100);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <AdaptiveProvider.Provider
      value={{
        resolution: AdaptiveStore.currentAdaptive,
      }}
    >
      {children}
    </AdaptiveProvider.Provider>
  );
});

export const useAdaptiveContext = () => useContext(AdaptiveProvider);
