import { useContext } from "react";
import { StoreContext } from "../mobx/StoreProvider";
import { IRootStore } from "../mobx/stores/RootStore";

export const useStores = (): IRootStore => useContext(StoreContext)