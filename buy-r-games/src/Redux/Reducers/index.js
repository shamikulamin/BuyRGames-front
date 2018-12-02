import {combineReducers} from 'redux';
import { shopNavReducer } from './ShopNav.Reducer';
import { itemCompReducer} from './ItemComp.Reducer';
import { loggedInReducer} from './LoggedIn.Reducer';

export const state = combineReducers({
  cartState: shopNavReducer,
  product: itemCompReducer,
  loggedIn: loggedInReducer
})