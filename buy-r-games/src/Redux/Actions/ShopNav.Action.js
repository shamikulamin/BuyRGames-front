export const shopNavTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_FROM_CART:" DELETE_FROM_CART"
  }

  //action creator that will add an item to our cart
  export const addingToCart = (cartItem) =>{
    return {
      type:shopNavTypes.ADD_TO_CART,
      payload:
      {
        item:cartItem
      }
    }
  }
    export const deletingFromCart = (cartItem) =>{
      return {
        type:shopNavTypes.DELETE_FROM_CART,
        payload:
        {
          item:cartItem
        }
    }
  }
  
