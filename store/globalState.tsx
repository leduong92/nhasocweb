"use client"
import { Dispatch, createContext, useReducer } from "react";

import { ActionType, StateType } from "./actions";
import reducers from "./reducers";
import { IBasket, IBasketItem } from "@/util/constant";
import { useLocalStorage } from "@/hooks/useLocalStorage";


const INITIAL_STATE: StateType = {
    basket: {
        items: [] as IBasketItem[]
    } as IBasket,
}

const AppContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>({
    state: INITIAL_STATE,
    dispatch: () => { }
});

const Approvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

    const [cartItems, setCartItems] = useLocalStorage<IBasket[]>(
        "shopping-cart",
        []
    )

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { Approvider, AppContext };