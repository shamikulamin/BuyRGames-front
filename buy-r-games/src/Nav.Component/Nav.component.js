import React from "react";
import { Link } from "react-router-dom";
import style from "./style";
import { Button } from 'semantic-ui-react'

export class AppNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({ inputValue: event.target.value })
  }


  render() {
    return (
      <nav
        className="navbar navbar-expand-lg fixed-top p-2"
        style={style.colorPrimary}
      >
        <Link
          to="/home"
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          onClick={e => e.preventDefault()}
        >
          Buy R Games
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div>
          <div className="input-group stylish-input-group">
            <input onChange={this.updateInput}
              className="form-control form-control-dark"
              style={style.searchBar}
              type="text"
              placeholder="Search"
              aria-label="Search"
              id = "searchBox" 
              />
            <span className="input-group-addon form-control form-control-dark">

            <Link to={{pathname: "/search/"+this.state.inputValue, state: "desiredState"}}>
  
                Search
              </Link>

              {/* <button >
                <Link onClick={e => e.preventDefault()} to='/search' className="wrapped-link" id="search" >
                  Search
                </Link>
              </button> */}
            </span>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav-item">
              <Link to="/home" className="unset-anchor nav-link">
                Home
              </Link>
            </div>
            <div className="nav-item">
              <Link
                to="/home"
                className="unset-anchor disabled nav-link"
                onClick={e => e.preventDefault()}
              >
                Settings
              </Link>
            </div>
            <div className="nav-item">
              <Link
                to="/home"
                className="unset-anchor disabled nav-link"
                onClick={e => e.preventDefault()}
              >
                Profile
              </Link>
            </div>
            <div className="nav-item">
              <Link
                to=""
                className="unset-anchor disabled nav-link"
                onClick={e => e.preventDefault()}
              >
                Help
              </Link>
            </div>
          </div>
        </div>

        <div className="float-right">
          {this.signInView()}
          <span className="">
            <button className="btn my-2 my-sm-0">
              <Link to="/sign-in" className="wrapped-link">
                Cart
              </Link>
            </button>
          </span>
        </div>
      </nav>
    );
  }

  signInView() {
    return (
      <span className="my-2 my-lg-0 p-2">
        <button className="btn my-2 my-sm-0">
          {this.props.signedIn === true ? (
            <Link to="/sign-out" className="wrapped-link" id="login">
              Sign Out
            </Link>
          ) : (
              <Link to="/sign-in" className="wrapped-link" id="login">
                Sign In
            </Link>
            )}
        </button>
      </span>
    );
  }
}
