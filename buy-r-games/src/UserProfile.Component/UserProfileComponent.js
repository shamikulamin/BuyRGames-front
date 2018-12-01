import React, { Component } from "react";
import style from "./style";
import GameClient from '../AxiosClients/GameClient';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import MiniCardComponent from "../MiniCard.Component/MiniCArdComponentHorizontal";

class UserProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentlyViewed: []
        }
    }

    componentDidMount() {
        let data = [];
        // console.log(sessionStorage.getItem("userId"));
        GameClient.get('/users/recent/' + sessionStorage.getItem("userId"))
        .then(resp => {
            // console.log(resp.data[0])
            data = resp.data[0];

            let tempRecentlyViewed = [];
            data.forEach( value => {
                if (value !== null) {
                    GameClient.get('/games/' + value)
                    .then(resp => {
                        // console.log(this.state.recentlyViewed.push(tempGame))
                        tempRecentlyViewed.push(resp.data);
                        this.setState({
                            ...this.state,
                            recentlyViewed: tempRecentlyViewed
                        })

                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
            })

        })
        .catch(err => {
            console.log(err);
        });
    }

  state = {};
  render() {
    return (
      <div style={style.mainStyle} className="container">
        <div className="row mb-4">
          <h3>{sessionStorage.getItem("username")}'s</h3>{" "}
          <p>Buy R Games profile</p>{" "}
        </div>
        <div className="row">
          <div className="col-sm">
            <Link to="/edit-login">
              <div className="col-sm border rounded py-2">
                <h4>User Info</h4>
                <div>Edit username, password, and email</div>
              </div>
            </Link>
          </div>

          <div className="col-sm">
            <Link to="/edit-addresses">
              <div className="col-sm border rounded py-2">
                <h4>Your Address</h4>
                <div>Edit address for delivery orders</div>
              </div>
            </Link>
          </div>

          <div className="col-sm">
            {/* <Link to="/edit-login"> */}
              <div className="col-sm border rounded py-2">
                <h4>Payment Method</h4>
                <div>Edit saved payment option</div>
              </div>
            {/* </Link> */}
          </div>
        </div>

        <div className="col-12">
          <div className="">
            <h5 className="pt-5 mt-4"> Recently Viewed </h5>
            <div className="row">

            {this.state.recentlyViewed.map(Products => (
              <MiniCardComponent
                products={Products}
                searchTerm={this.props.product.searchTerm}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}


export default connect(mapStateToProps)(UserProfileComponent)
