
import React, { Component } from "react";

import "./App.css";
import "./Include/bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ShoppingCart } from './ShoppingCart.Component/ShoppingCart';
import { HomePage } from "./HomePage.Component/HomePage";
import { AppNav } from "./Nav.Component/Nav.component.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
    );
  }
}

export default App;
