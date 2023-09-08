import { IBasket, IBasketItem, IProduct } from "@/util/constant"

export type StateType = {
    basket: IBasket,
}

export type AddToBasket = {
    type: "ADD_CART",
    payload: IBasket;
}

export type ActionType = AddToBasket;


export function mapProductItemToBasketItem(item: IProduct, quantity = 1): IBasketItem {
    return {
        id: item.id,
        name: item.displayName,
        sku: item.sku,
        price: item.price,
        quantity,
        imageUrl: item.imageUrl,
        category: item.category.id
    }
}

export function addToBasket(item: IProduct, basket: IBasket = {} as IBasket): AddToBasket {
    const itemToAdd: IBasketItem = mapProductItemToBasketItem(item);

    const newBasket = [...basket.items];

    if (newBasket.find(x => x.id === itemToAdd.id) == null) {
        return {
            type: "ADD_CART",
            payload: {
                items: [...newBasket, itemToAdd],
            }
        }
    } else {
        return increaseBasketQuantity(itemToAdd, basket);
    }
}

export function increaseBasketQuantity(item: IBasketItem, basket: IBasket = {} as IBasket): AddToBasket {

    const newBasket = [...basket.items]

    if (basket.items.find(itm => item.id === itm.id) == null) {
        return {
            type: "ADD_CART",
            payload: {
                items: [...newBasket, item]
            }
        }
    } else {
        const newData = newBasket.map(itm => {
            if (itm.id === item.id) {
                return { ...itm, quantity: itm.quantity + 1 }
            } else {
                return itm
            }
        })

        return {
            type: "ADD_CART",
            payload: {
                items: newData
            }
        }
    }
}

export function decreaseBasketQuantity(item: IBasketItem, basket: IBasket = {} as IBasket): AddToBasket {

    const newBasket = [...basket.items];

    newBasket.forEach(itm => {
        if (itm.id === item.id)
            item.quantity -= 1
    })
    return ({ type: 'ADD_CART', payload: { items: newBasket } })
}

export function removeBasketItem(item: IBasketItem, basket: IBasket = {} as IBasket): AddToBasket {

    const newBasket = [...basket.items];

    return {
        type: "ADD_CART",
        payload: {
            items: newBasket.filter(x => x.id !== item.id),
        }
    }
}

export function resetBasket(): AddToBasket {
    return {
        type: "ADD_CART",
        payload: {
            items: [],
        }
    }
}

