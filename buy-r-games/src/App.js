import React, { Component } from 'react';

import './App.css';
import './Include/bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CehckoutComponent } from './Checkout.Component/CheckoutComponent';
import { HomePage } from './HomePage.Component/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="main-content-container">
          <Switch>
          <Route path = "/checkout" component={CehckoutComponent} />
          {/* default */}
          <Route component={HomePage} />
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
