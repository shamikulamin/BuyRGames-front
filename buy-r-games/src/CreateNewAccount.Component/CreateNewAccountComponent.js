import React, { Component } from "react";
import style from "./style";
import GameClient from "../AxiosClients/GameClient";

class CreateNewAccountComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: "",
          email: ""
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

      emailChange = e => {
        this.setState({
          ...this.state,
          email: e.target.value
        });
      };

  submit = e => {
    e.preventDefault();
    let newUser = this.state;
    GameClient.post("/users", JSON.stringify(newUser))
      .then(res => {
        if (res.status === 201) {
          this.props.history.push("/home");
        }
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={style.mainStyle} className="">
        <form onSubmit={this.submit} className="col-4 mx-auto border">
        <h4 className="mx-auto py-2">Create account</h4>
          <div className="form-group">
            <div
              htmlFor="example-text-input"
              className="col-form-label"
            >
              <div className="mx-auto">Username</div>
            </div>
            <div className="">
              <input
                class="form-control"
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.usernameChange}
                id="example-text-input"
              />
            </div>
          </div>
          <div className="form-group">
            <div
              htmlFor="example-search-input"
              className="col-form-label"
            >
              Password
            </div>
            <div className="">
              <input
                className="form-control"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.passwordChange}
                id="example-search-input"
              />
            </div>
          </div>
          <div className="form-group">
            <div
              htmlFor="example-email-input"
              className="col-form-label"
            >
              Email
            </div>
            <div className="">
              <input
                className="form-control"
                type="email"
                placeholder="email@example.com"
                value={this.state.email}
                onChange={this.emailChange}
                id="example-email-input"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-warning my-2 col-12">
              Create Account
            </button>
        </form>
      </div>
    );
  }
}

export default CreateNewAccountComponent;
