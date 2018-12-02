import { loggedInTypes } from "../Actions/LoggedIn.Action";
const initialState = {
    loggedIn: false
}

export const loggedInReducer = (state = initialState, action) =>{

    switch (action.type) {
        case loggedInTypes.LOG_IN:
            
            return{
                ...state,
                loggedIn: action.payload.loggingIn
            }

            case loggedInTypes.LOG_OUT:
            
            return{
                ...state,
                loggedIn: action.payload.loggingIn
            }

        default:
            break;
    }
    return state;
}