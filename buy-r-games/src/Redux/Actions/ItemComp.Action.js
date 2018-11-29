export const itemCompTypes = {
    SEND_TO_PRODUCT: 'SEND_TO_PRODUCT'
  }

  export const sendToProducts = (productItem, searchQuery) =>{
    
    return {
      type:itemCompTypes.SEND_TO_PRODUCT,
      payload:
      {
        item: productItem,
        searchTerm: searchQuery
      }
    }
  
  }