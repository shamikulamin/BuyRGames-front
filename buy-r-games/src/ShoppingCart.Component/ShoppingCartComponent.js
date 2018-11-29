
import React from 'react';
import { connect } from 'react-redux';
import * as navAction from '../Redux/Actions/ShopNav.Action';

export class ShoppingCartComponent extends React.Component {
  render() {
    const {cart, addingToCart} = this.props
    console.log(this.props);
    return (
        <>
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
                {/* {
                  cartList.map(item =>
                    <tr key = {item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.cost}</td>
                    <td>{item.platform}</td>
                    </tr>
                  )
                  } */}
            </tbody>
          </table>
        </div>
        <button onClick= {() =>addingToCart("games")}>rtyuio</button>
        {console.log(cart)}
        </>
 
    )
  }

}
const mapStateToProps = (state) => {
  return {
    cart: state.cartState
  }
}
 
const mapDispatchToProps = {
  addingToCart: navAction.addingToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent)

