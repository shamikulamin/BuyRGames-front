import React from "react";
import { Link, withRouter } from "react-router-dom";
import style from "./style";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import * as $ from "jquery";
import * as logAction from '../Redux/Actions/LoggedIn.Action';

export class AppNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };

    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    $('[data-toggle="dropdown"]').dropdown();
  }

  updateInput(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleKeyPress = target => {
    if (target.charCode === 13) {
      this.props.history.push({
        pathname: "/search/" + this.state.inputValue,
        state: "desiredState"
      });
    }
  };

  logOut = () => {
    this.props.logOut();
    sessionStorage.clear();
    localStorage.clear();
    this.props.history.push("/home");
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-between align-items-center py-0 my-0"
        style={style.colorPrimaryBackground}
      >
        <div>
          <Link to="/home" className="" style={style.white}>
            <div className="p-3">
              <h4 className="my-0"> Buy R Games</h4>
            </div>
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
        </div>

        <div className="px-0">
          <div className="input-group stylish-input-group pt-3 d-flex">
            <div>
              <input
                onChange={this.updateInput}
                className="form-control form-control-dark"
                style={style.searchBar}
                type="text"
                placeholder="Search"
                aria-label="Search"
                id="searchBox"
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div>
              <Link
                to={{
                  pathname: "/search/" + this.state.inputValue,
                  state: "desiredState"
                }}
              >
                <span
                  className="input-group-addon form-control form-control-dark px-3"
                  style={style.colorPrimary}
                >
                  <FaSearch />
                </span>
              </Link>
            </div>
          </div>

          <div
            className="collapse navbar-collapse p-2"
            id="navbarSupportedContent"
          >
            <div className="mx-4">
              <p className="my-auto">
                <Link
                  style={style.white}
                  to={{
                    pathname: "/search/xone",
                    state: "desiredState"
                  }}
                >
                  {" "}
                  Xbox One
                </Link>
              </p>
            </div>
            <div className="mx-4">
              <p className="my-auto">
                <Link
                  style={style.white}
                  to={{
                    pathname: "/search/ps4",
                    state: "desiredState"
                  }}
                >
                  {" "}
                  PS4
                </Link>
              </p>
            </div>
            <div className="mx-4">
              <p className="my-auto">
                <Link
                  style={style.white}
                  to={{
                    pathname: "/search/wiiu",
                    state: "desiredState"
                  }}
                >
                  {" "}
                  Wii U
                </Link>
              </p>
            </div>
            <div className="mx-4">
              <p className="my-auto">
                <Link
                  style={style.white}
                  to={{
                    pathname: "/search/pc",
                    state: "desiredState"
                  }}
                >
                  {" "}
                  PC
                </Link>
              </p>
            </div>
            <div className="mx-4">
              <p className="my-auto">
                <Link
                  style={style.white}
                  to={{
                    pathname: "/search/x360",
                    state: "desiredState"
                  }}
                >
                  {" "}
                  Xbox 360
                </Link>
              </p>
            </div>
            <div className="mx-4">
              <p className="my-auto">
                <Link
                  style={style.white}
                  to={{
                    pathname: "/search/ps3",
                    state: "desiredState"
                  }}
                >
                  {" "}
                  PS3
                </Link>
              </p>
            </div>
            <div className="mx-4">
              <p className="my-auto">
                <Link
                  style={style.white}
                  to={{
                    pathname: "/search/3ds",
                    state: "desiredState"
                  }}
                >
                  {" "}
                  3DS
                </Link>
              </p>
            </div>
            {/* <div className="mx-4">
              <p className="my-auto">
                <Link to="/home" className="" style={style.white}>
                  More <IoMdArrowDropdown />
                </Link>
              </p>
            </div> */}
          </div>
        </div>

        <div className="d-flex">

          <div className="mr-2">
            <div className="dropdown">
              <Button
                color="warning"
                className="btn pr-2"
                type="button"
                data-toggle="dropdown"
              >
                Account
                <IoMdArrowDropdown className="pl-1" />
              </Button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
{this.signInView()}

              </div>
            </div>
          </div>

          <div>
            <Link to="/cart" className="wrapped-link">
              <div className="">
                <button className="btn my-2 my-sm-0" style={style.customWidthBtn}>
                  <span>Cart</span>
                  <span className="badge badge-pill badge-warning ml-1">
                    {this.props.cart.cart.length}
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  signInView() {
    console.log(this.props.loggedIn);
    if (this.props.loggedIn === false) {
      return (
        <>
        <Link to="/new-account" className="">
        <button class="dropdown-item" type="button">
          Create Account
        </button>
        </Link>
        <Link to="/sign-in" className="">
        <button class="dropdown-item" type="button">
        Sign In
        </button>
        </Link>
        </>
      )
    } else {
      return (
        <>
        <Link to="/profile" className="">
        <button class="dropdown-item" type="button">
          View Profile
        </button>
        </Link>
        <Link to="/sign-out" className="">
        <button class="dropdown-item" type="button" onClick={() => this.logOut()}>
        Sign Out
        </button>
        </Link>
        </>
      )
    }
    
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartState,
    loggedIn: state.loggedIn.loggedIn
  };
};

const mapDispatchToProps = {
  logIn: logAction.loggingIn,
  logOut: logAction.loggingOut
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppNav));
