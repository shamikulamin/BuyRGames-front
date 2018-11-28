import {combineReducers} from 'redux';
import { shopNavReducer } from './ShopNav.Reducer';

export const state = combineReducers({
  cartState: shopNavReducer
})