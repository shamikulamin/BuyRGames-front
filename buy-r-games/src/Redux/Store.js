import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { state } from './Reducers';

function saveToStore(state){
  try{
    localStorage.setItem("state", JSON.stringify(state))
  }catch(e){

  }
}

function getStoredState(){
  try{
    const stateData = localStorage.getItem("state");
    if (stateData ===null) return undefined;
    return JSON.parse(stateData);
  }catch(e){
    return undefined;
  }
}


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger, reduxThunk)
)

export const store = createStore(
  state,
  getStoredState(),
  enhancer
);

store.subscribe(() => saveToStore(store.getState()))


