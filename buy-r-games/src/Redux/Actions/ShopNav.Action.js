export const shopNavTypes = {
    ADD_TO_CART: 'ADD_TO_CART'
  }

  export const addingToCart = (cartItem) =>{
    return {
      type:shopNavTypes.ADD_TO_CART,
      payload:
      {
        item:cartItem
      }
    }
  
  }