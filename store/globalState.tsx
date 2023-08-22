import { Dispatch, createContext, useReducer } from "react";

import { ActionType, StateType } from "./types";
import reducers from "./reducers";


const INITIAL_STATE = {
    theme: "dark",
    fontSize: 16
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

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { Approvider, AppContext };