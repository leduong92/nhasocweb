"use client"
import { Dispatch, createContext, useEffect, useReducer, useState } from "react";
import { ActionType, StateType } from "./actions";
import reducers from "./reducers";
import { IBasket, IBasketItem } from "@/lib/model";

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
    const [isCartChange, setIsCartChange] = useState<boolean>(false)

    useEffect(() => {
        const cart = localStorage.getItem('shopping-cart')

        if (cart)

            dispatch({
                type: 'ADD_CART',
                payload: {
                    items: JSON.parse(cart) as IBasketItem[]
                }
            })
        setIsCartChange(true);

    }, [])

    useEffect(() => {
        if (isCartChange) {
            localStorage.setItem('shopping-cart', JSON.stringify(state.basket.items))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.basket])


    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { Approvider, AppContext };