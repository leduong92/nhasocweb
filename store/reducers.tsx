import { ActionType, StateType } from "./types";

const reducers = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "ADD_CART":
            break;
        default:
            return state;
    }
}

export default reducers;