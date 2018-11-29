import {itemCompTypes} from '../Actions/ItemComp.Action'

const initialState = {
    item: {},
    searchTerm: ""
}

export const itemCompReducer = (state = initialState, action) =>{
    console.log("hello from reducer");
    switch (action.type) {
        case itemCompTypes.SEND_TO_PRODUCT:
           
            return {
                ...state,
                item: action.payload.item,
                searchTerm: action.payload.searchTerm
            } 
        default:
            break;
    }
    return state;
}