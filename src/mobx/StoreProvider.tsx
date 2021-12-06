import { createContext, ReactNode } from "react";
import { IRootStore } from "./stores/RootStore";

export const StoreContext = createContext<IRootStore>({} as IRootStore)

interface IStoreComponent {
    store: IRootStore,
    children: ReactNode
}

export const StoreProvider: React.FC<IStoreComponent> = ({ children, store }) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)