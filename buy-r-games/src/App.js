import React, { Component } from 'react';
import './App.css';
import './Include/bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage.Component/HomePage';
import { ShoppingCart } from './ShoppingCart.Component/ShoppingCart';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="main-content-container">
          <Switch>
          <Route path = "/cart" component={ShoppingCart} />
          {/* default */}
          <Route component={HomePage} />
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
