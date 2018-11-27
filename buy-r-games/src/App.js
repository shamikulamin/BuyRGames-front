
import './App.css';
import './Include/bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage.Component/HomePage';
import {SearchResultsComponent} from './SearchResults.Component/SearchResultsComponent'
import React, { Component } from "react";
import { ShoppingCart } from './ShoppingCart.Component/ShoppingCart';
import { AppNav } from "./Nav.Component/Nav.component.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <AppNav />
          <div id="main-content-container">
            <Switch>
            <Route path="/search" component={SearchResultsComponent}/>
             <Route path = "/cart" component={ShoppingCart} />
              {/* default */}
              <Route component={HomePage} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
