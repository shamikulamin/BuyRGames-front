
import './App.css';
import './Include/bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage.Component/HomePage';
import {SearchResultsComponent} from './SearchResults.Component/SearchResultsComponent'
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import ShoppingCartComponent from './ShoppingCart.Component/ShoppingCartComponent';
import { AppNav } from "./Nav.Component/Nav.component.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <>
          <AppNav />
          <div id="main-content-container">
            <Switch>
             <Route path="/search/:id" exact component={SearchResultsComponent}/>
             <Route path = "/cart" component={ShoppingCartComponent} />
              {/* default */}
              <Route component={HomePage} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
