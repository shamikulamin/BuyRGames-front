import { shopNavTypes } from "../Actions/ShopNav.Action";
const initialState = {
    cart:[],
    subTotal:0,
    reducedCart: []
}

export const shopNavReducer = (state = initialState, action) =>{
    let tempCart;
    let tempTotal = 0;
    console.log("FROM REDUCER")
    switch (action.type) {
        case shopNavTypes.EMPTY_TO_CART:
            
            tempCart = []
            return{
                ...state,
                cart: tempCart,
                subTotal: 0
            }
        case shopNavTypes.ADD_TO_CART:
        // console.log(action.payload.item.price);
            tempTotal = 0;

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

            tempTotal = state.subTotal;

            for(let i=0; i<tempCart.length; i++) {
                if (action.payload.item.id === tempCart[i].id) {
                    tempTotal = tempTotal - tempCart[i].price


                    break;
                }
            }

            for(let i=tempCart.length-1; i>=0; i--) {
                if (action.payload.item.id === tempCart[i].id) {
                    console.log( "  tempcart before")
                    console.log(tempCart)
                    let a = tempCart.splice(i, 1);
                    console.log( "  item being removed:")
                    console.log(a);
                    console.log( "  tempcart after")
                    console.log(tempCart)

                    break;
                }
            }

            return{
                ...state,
                cart:tempCart,
                subTotal: tempTotal
            }

        case shopNavTypes.ROUTE_TO_CHECKOUT:
            tempCart = state.cart;
            return{
                ...state,
                reducedCart: tempCart
            }
        default:
            break;
    }
    return state;
}