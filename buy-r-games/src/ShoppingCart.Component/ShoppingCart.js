
import React from 'react';

export class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart :[
        {
          id : 1,
          name : "some game",
          cost : 19.99,
          platform: "Xbone"
        },
        {
          id : 2,
          name : "second game",
          cost : 49.99,
          platform: "PS4"
        },
      ],
      numberOfItems: 0,
      subTotal: 0.0
    }
  }
  render() {
    let cartList = this.state.cart;
    return (

        <div className = "container">
        <h1>Shopping Cart</h1>
        <button>Proceed to Checkout</button>
          <table className = "table">
            <thead className = "thead-dark">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {



                }
            </tbody>
          </table>


        </div>
 
    )
  }

}