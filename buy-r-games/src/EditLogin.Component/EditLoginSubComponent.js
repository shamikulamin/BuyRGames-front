import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style";
import GameClient from "../AxiosClients/GameClient";

class EditLoginSubComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value: ""
    };
  }

  valueChange = e => {
    this.setState({
      ...this.state,
      value: e.target.value
    });
  };

  whichState = () => {

  }

  submit = e => {
    e.preventDefault();
    let updateUser = null;
    switch(this.props.location.state.type) {
        case "username":
            updateUser = {
                username: this.state.value,
                userId: sessionStorage.getItem("userId")
            }
            break;
        case "password":
            updateUser = {
                password: this.state.value,
                userId: sessionStorage.getItem("userId")
            }
            break;
        case "email":
            updateUser = {
                email: this.state.value,
                userId: sessionStorage.getItem("userId")
            }
            break;
        default:
    }
    GameClient.post("/users/update/profile", JSON.stringify(updateUser))
      .then(res => {
        console.log(res);
        if (res.status === 200) {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            this.props.history.push("/edit-login")
          }
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div style={style.mainStyle} className="container col-md-6">
          <div className="row">
            <p>
              <Link to="/profile" id="blue">
                Your profile
              </Link>
            </p>
            <p>
              <pre> > </pre>
            </p>
            <p>
              <Link to="/edit-login" id="blue">
                User info
              </Link>
            </p>
            <p>
              <pre> > </pre>
            </p>
            <p>Your {this.props.location.state.type}</p>
          </div>

          <div className="row mb-3">
            <h4>Edit your {this.props.location.state.type}</h4>
          </div>

          <div className="row">
            <form onSubmit={this.submit} className="col-12 px-0">
              <div className="form-group">
                <div htmlFor="example-text-input" className="col-form-label">
                  <div className="mx-auto">
                    {this.props.location.state.value}
                  </div>
                </div>
                <div className="">
                  <input
                    class="form-control"
                    type="text"
                    placeholder={
                      JSON.parse(sessionStorage.getItem("user"))[
                        this.props.location.state.type
                      ]
                    }
                    value={this.state.value}
                    onChange={this.valueChange}
                    id="example-text-input"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-warning my-2 col-3">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditLoginSubComponent;
