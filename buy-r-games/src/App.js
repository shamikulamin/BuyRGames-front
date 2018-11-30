
import './App.css';
import './Include/bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage.Component/HomePage';
import {SearchResultsComponent} from './SearchResults.Component/SearchResultsComponent'
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import ShoppingCartComponent from './ShoppingCart.Component/ShoppingCartComponent';
import { SignInComponent } from './SignIn.Component/SignInComponent';
import CreateNewAccountComponent from './CreateNewAccount.Component/CreateNewAccountComponent';
import UserProfileComponent from './UserProfile.Component/UserProfileComponent';
import EditLoginComponent from "./EditLogin.Component/EditLoginComponent";
import AppNav from "./Nav.Component/Nav.component.js";
import ProductPageComponent from "./ProductPage.Component/ProductPageComponent"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <>
          <AppNav />
          <div id="main-content-container">
            <Switch>
              <Route path = "/product" component = {ProductPageComponent}/>
             <Route path="/search/:id" exact component={SearchResultsComponent}/>
             <Route path = "/cart" component={ShoppingCartComponent} />
             <Route path = "/sign-in" component={SignInComponent} />
             <Route path="/new-account" component={CreateNewAccountComponent}/>
             <Route path="/profile" component={UserProfileComponent}/>
             <Route path="/edit-login" component={EditLoginComponent}/>

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
