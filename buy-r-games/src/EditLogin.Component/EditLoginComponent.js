import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style";
import GameClient from "../AxiosClients/GameClient";

class EditLoginComponent extends Component {
  state = {};

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
      <div style={style.mainStyle} className="container col-md-6">
        <div className="row">
          <p>
            <Link to="/profile" id="blue">Your profile</Link>
          </p>
          <p>
            <pre> > </pre>
          </p>
          <p>User info</p>
        </div>

        <div className="row mb-3">
          <h4>Edit your user info</h4>
        </div>

        <div className="row">
          <div className="col-12 px-0">
            <form onSubmit={this.submit} className="col-sm border rounded py-2 d-flex justify-content-between align-items-center">
              <div>
                <span>Username:</span>
                <br />
                <span>
                  {JSON.parse(sessionStorage.getItem("user")).username}
                </span>
              </div>
              <div>
                <Link to={{ pathname: "/edit-login-value", state: { type: 'username', value: 'Username'} }}>
                  <span className="">
                    <button className="my-2 my-sm-0">Edit</button>
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12 px-0">
            <div className="col-sm border rounded py-2 d-flex justify-content-between align-items-center">
              <div>
                <span>Email:</span>
                <br />
                <span>{JSON.parse(sessionStorage.getItem("user")).email}</span>
              </div>
              <div>
              <Link to={{ pathname: "/edit-login-value", state: { type: 'email', value: 'Email'} }}>
                  <span className="">
                    <button className="my-2 my-sm-0">Edit</button>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 px-0">
            <div className="col-sm border rounded py-2 d-flex justify-content-between align-items-center">
              <div>
                <span>Password:</span>
                <br />
                <span>
                  ******
                </span>
              </div>
              <div>
              <Link to={{ pathname: "/edit-login-value", state: { type: 'password', value: 'Password'} }}>
                  <span className="">
                    <button className="my-2 my-sm-0">Edit</button>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditLoginComponent;
