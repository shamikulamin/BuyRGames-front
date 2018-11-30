import React, { Component } from "react";
import style from "./style";
import { Link } from "react-router-dom";

class UserProfileComponent extends Component {
  state = {};
  render() {
    return (
      <div style={style.mainStyle} className="container">
        <div class="row">
          <div class="col-sm">
            <Link to="/edit-login">
              <div class="col-sm border rounded">
                <h4>Login Info</h4>
                <div>Edit username, password, and email</div>
              </div>
            </Link>
          </div>

          <div class="col-sm">
            <Link to="/edit-login">
              <div class="col-sm border rounded">
                <h4>Your Address</h4>
                <div>Edit address for delivery orders</div>
              </div>
            </Link>
          </div>

          <div class="col-sm">
            <Link to="/edit-login">
              <div class="col-sm border rounded">
                <h4>Payment Method</h4>
                <div>Edit saved payment option</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileComponent;
