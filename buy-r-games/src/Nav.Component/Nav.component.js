import React from "react";
import { Link } from "react-router-dom";
import style from "./style";
import { FaSearch } from "react-icons/fa";

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
        className="navbar navbar-expand-lg fixed-top p-0 mx-auto"
        style={style.colorPrimaryBackground}
      >
        <Link
          to="/home"
          className=""
          style={style.white}
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

        <div className="mx-auto px-0">
          <div className="input-group stylish-input-group pt-3">
            <input onChange={this.updateInput}
              className="form-control form-control-dark"
              style={style.searchBar}
              type="text"
              placeholder="Search"
              aria-label="Search"
              id="searchBox"
            />
            <Link to={{ pathname: "/search/" + this.state.inputValue, state: "desiredState" }}>
              <span className="input-group-addon form-control form-control-dark px-3" style={style.colorPrimary}>

                <FaSearch />

              </span>
            </Link>
          </div>

          <div
            className="collapse navbar-collapse p-2"
            id="navbarSupportedContent"
          >
            <div className="nav-item">
              <Link
                to="/home"
                className="unset-anchor nav-link"
                style={style.white}
              >
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
              <Link to="/cart" className="wrapped-link">
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
