import {combineReducers} from 'redux';
import { shopNavReducer } from './ShopNav.Reducer';
import { itemCompReducer} from './ItemComp.Reducer';

export const state = combineReducers({
  cartState: shopNavReducer,
  product: itemCompReducer,
})