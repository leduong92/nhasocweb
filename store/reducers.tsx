import { ActionType, StateType } from "./actions";

const reducers = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                basket: action.payload
            };
        default:
            return state;
    }
}

export default reducers;