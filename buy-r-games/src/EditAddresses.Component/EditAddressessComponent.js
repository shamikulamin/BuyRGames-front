import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style";
import GameClient from "../AxiosClients/GameClient";

class EditAddressesComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          firstname: "",
          lastname: "",
          address: "",
          zip: "",
          city: "",
          state: "",
          country: ""
        };
      }

      firstnameChange = e => {
        this.setState({
          ...this.state,
          firstname: e.target.value
        });
      };
    
      lastnameChange = e => {
        this.setState({
          ...this.state,
          lastname: e.target.value
        });
      };

      addressChange = e => {
        this.setState({
          ...this.state,
          address: e.target.value
        });
      };

      zipChange = e => {
        this.setState({
          ...this.state,
          zip: e.target.value
        });
      };

      cityChange = e => {
        this.setState({
          ...this.state,
          city: e.target.value
        });
      };

      stateChange = e => {
        this.setState({
          ...this.state,
          state: e.target.value
        });
      };

      countryChange = e => {
        this.setState({
          ...this.state,
          country: e.target.value
        });
      };

  submit = e => {
    e.preventDefault();
    let updateUser = {
        ...this.state,
        userId: sessionStorage.getItem("userId")
    }
    GameClient.post("/users/update/address", JSON.stringify(updateUser))
      .then(res => {
        console.log(res);
        if (res.status === 200) {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            this.props.history.push("/profile")
            // this.setState({
            //     ...this.state,
            //     firstname: "",
            //     lastname: "",
            //     address: "",
            //     zip: "",
            //     city: "",
            //     state: "",
            //     country: ""
            // })
          }
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  exists = (type, value) => {
    let existsArray = [];
    if (JSON.parse(sessionStorage.getItem("user"))[type] !== null) {
      existsArray.push(JSON.parse(sessionStorage.getItem("user"))[type]);
    } else {
      existsArray.push(value);
    }
    return existsArray[0];
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
          <p>Your address</p>
        </div>

        <div className="row mb-3">
          <h4>Edit your address</h4>
        </div>

        <div className="row">
          <form onSubmit={this.submit} className="col-12 px-0">
            <div className="form-group">
              <div htmlFor="example-text-input" className="col-form-label">
                <div className="mx-auto">First Name</div>
              </div>
              <div className="">
                <input
                  class="form-control"
                  type="text"
                  placeholder={this.exists("firstname", "first name")}
                  value={this.state.firstname}
                  onChange={this.firstnameChange}
                  id="example-text-input"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div htmlFor="example-search-input" className="col-form-label">
                Last Name
              </div>
              <div className="">
                <input
                  className="form-control"
                  type="text"
                  placeholder={this.exists("lastname", "last name")}
                  value={this.state.lastname}
                  onChange={this.lastnameChange}
                  id="example-search-input"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div htmlFor="example-email-input" className="col-form-label">
                Street Address
              </div>
              <div className="">
                <input
                  className="form-control"
                  type="text"
                  placeholder={this.exists("address", "street address")}
                  value={this.state.address}
                  onChange={this.addressChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div htmlFor="example-email-input" className="col-form-label">
                Zip Code
              </div>
              <div className="">
                <input
                  className="form-control"
                  type="text"
                  placeholder={this.exists("zip", "zip code")}
                  value={this.state.zip}
                  onChange={this.zipChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div htmlFor="example-email-input" className="col-form-label">
                City
              </div>
              <div className="">
                <input
                  className="form-control"
                  type="text"
                  placeholder={this.exists("city", "city")}
                  value={this.state.city}
                  onChange={this.cityChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div htmlFor="example-email-input" className="col-form-label">
                State
              </div>
              <div className="">
                <input
                  className="form-control"
                  type="text"
                  placeholder={this.exists("state", "state")}
                  value={this.state.state}
                  onChange={this.stateChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div htmlFor="example-email-input" className="col-form-label">
                Country
              </div>
              <div className="">
                <input
                  className="form-control"
                  type="text"
                  placeholder={this.exists("country", "country")}
                  value={this.state.country}
                  onChange={this.countryChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-warning my-2 col-3">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditAddressesComponent;
