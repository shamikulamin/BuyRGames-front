import React from "react";
import style from "./style";
import { Link } from "react-router-dom";
import GameClient from "../AxiosClients/GameClient";

export class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  passwordChange = e => {
    this.setState({
      ...this.state,
      password: e.target.value
    });
  };

  usernameChange = e => {
    this.setState({
      ...this.state,
      username: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    let cred = this.state;
    GameClient.post("/users/login", JSON.stringify(cred))
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/home");
        }
        sessionStorage.setItem("username", res.data.username);
        sessionStorage.setItem("userId", res.data.userId);
        sessionStorage.setItem("user", JSON.stringify(res.data));
        sessionStorage.setItem("id", res.data.userId)
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <main
          role="main"
          className="col-lg-10 px-4 mx-auto"
          style={style.mainContentStyle}
        >
          <div className="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 mx-auto">Sign In</h1>
            <div className="btn-toolbar mb-2 mb-md-0" />
          </div>

          <form className="form-signin col-md-3 mx-auto" onSubmit={this.submit}>
            <label htmlFor="input-username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="input-username"
              className="form-control"
              placeholder="Username"
              required
              value={this.state.username}
              onChange={this.usernameChange}
            />

            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={this.passwordChange}
            />

            <button className="btn btn-lg btn-warning btn-block" type="submit">
              Sign In
            </button>
            <p>Don't have an account? </p>
            <Link to="new-account">Make One</Link>
          </form>
        </main>
      </>
    );
  }
}
