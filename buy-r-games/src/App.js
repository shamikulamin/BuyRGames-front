
<<<<<<< HEAD
import './App.css';
import './Include/bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CehckoutComponent } from './Checkout.Component/CheckoutComponent';
import { HomePage } from './HomePage.Component/HomePage';
import {SearchResultsComponent} from './SearchResults.Component/SearchResultsComponent'
=======
import React, { Component } from "react";

import "./App.css";
import "./Include/bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ShoppingCart } from './ShoppingCart.Component/ShoppingCart';
import { HomePage } from "./HomePage.Component/HomePage";
import { AppNav } from "./Nav.Component/Nav.component.js";
>>>>>>> 13cd88b75116c8eed29205916adf4fd89fadca0e

class App extends Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
        <div id="main-content-container">
          <Switch>
          <Route path = "/checkout" component={CehckoutComponent} />
          <Route path="/search" component={SearchResultsComponent}/>
          {/* default */}
          <Route component={HomePage} />
          </Switch>
        </div>
    </BrowserRouter>
=======
        <>
          <AppNav />
          <div id="main-content-container">
            <Switch>
             <Route path = "/cart" component={ShoppingCart} />
              {/* default */}
              <Route component={HomePage} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
>>>>>>> 13cd88b75116c8eed29205916adf4fd89fadca0e
    );
  }
}

export default App;
