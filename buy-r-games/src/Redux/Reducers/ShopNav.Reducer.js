import { shopNavTypes } from "../Actions/ShopNav.Action";
const initialState = {
    cart:[]
}

export const shopNavReducer = (state = initialState, action) =>{
    switch (action.type) {
        case shopNavTypes.ADD_TO_CART:
        // console.log(action.payload.item);
            let tempCart = state.cart;
            tempCart.push(action.payload.item);
            return {
                ...state,
                cart: tempCart
            } 
        default:
            break;
    }
    return state;
}