
import './App.css';
import './Include/bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage.Component/HomePage';
import {SearchResultsComponent} from './SearchResults.Component/SearchResultsComponent'
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import ShoppingCartComponent from './ShoppingCart.Component/ShoppingCartComponent';
import SignInComponent from './SignIn.Component/SignInComponent';
import CreateNewAccountComponent from './CreateNewAccount.Component/CreateNewAccountComponent';
import UserProfileComponent from './UserProfile.Component/UserProfileComponent';
import EditLoginComponent from "./EditLogin.Component/EditLoginComponent";
import EditLoginSubComponent from "./EditLogin.Component/EditLoginSubComponent";
import EditAddressesComponent from "./EditAddresses.Component/EditAddressessComponent";
import AppNav from "./Nav.Component/Nav.component.js";
import ProductPageComponent from "./ProductPage.Component/ProductPageComponent"
import  CheckoutComponent  from "./Checkout.Component/CheckoutComponent";
import ProtectedRoute from "./ProtectedRoute.Component/ProtectedRouteComponent";

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
             <Route path ="/checkout" component ={CheckoutComponent}/>
             <Route path="/new-account" component={CreateNewAccountComponent}/>

             <ProtectedRoute path="/profile" component={UserProfileComponent}/>
             <ProtectedRoute path="/edit-login" component={EditLoginComponent}/>
             <ProtectedRoute path="/edit-login-value" component={EditLoginSubComponent}/>
             <ProtectedRoute path="/edit-addresses" component={EditAddressesComponent}/>

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
