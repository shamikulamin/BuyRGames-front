import { shopNavTypes } from "../Actions/ShopNav.Action";
const initialState = {
    cart:[],
    subTotal:0
}

export const shopNavReducer = (state = initialState, action) =>{
    let tempCart;
    let tempTotal = 0;
    switch (action.type) {
        case shopNavTypes.ADD_TO_CART:
        // console.log(action.payload.item.price);
            tempCart = state.cart;
            tempCart.push(action.payload.item);
            //adding total
            for(let key in tempCart){
                tempTotal = tempTotal + tempCart[key].price
            }
            return {
                ...state,
                cart: tempCart,
                subTotal: tempTotal
            }
        case shopNavTypes.DELETE_FROM_CART:
            tempCart = state.cart;
            return{
                ...state,
                cart:tempCart
            }
        default:
            break;
    }
    return state;
}