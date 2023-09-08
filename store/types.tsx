import { IBasket, IProduct } from "@/util/constant"

export type StateType = {
    theme: string,
    fontSize: number,
    basket: IBasket
}

export type ColorActionType = {
    type: "CHANGE_THEME"
}

export type AddToCart = {
    type: "ADD_CART",
    payload: IProduct;
}


export type ActionType = ColorActionType | AddToCart;
