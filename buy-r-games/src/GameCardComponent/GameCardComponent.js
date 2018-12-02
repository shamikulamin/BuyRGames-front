import React from 'react';
import style from '../GameCardComponent/style';
import * as itemAction from '../Redux/Actions/ItemComp.Action';
import * as cartAction from '../Redux/Actions/ShopNav.Action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class GameCardComponent extends React.PureComponent {

  render() {
    const { addToCart } = this.props
    const price = parseFloat(this.props.products.price).toFixed(2);
    return (


      <div class="card-deck col">
        <div class="card">
          <img style={style.imgStyle} class="card-img-top" src={this.props.products.product_image_url} alt="Card cap" />
          <div class="card-body">

            <h4 onClick={() => this.props.itemProduct(this.props.products, this.props.products.name)}> <Link className="link" to='/product'>
              <h5 class="card-title">{this.props.products.name}</h5>
            </Link></h4>
            <p class="card-text">For: {this.props.products.platform}</p>
          </div>
          <div class="card-footer">
            <h5 className="text-muted price">${price}</h5> <button className ="btn btn-danger" onClick = {()=>addToCart(this.props.products)}>Add to Cart</button>
          </div>
        </div>
      </div>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    search: state.searchTerm,
    cart: state.cartState
  }
}

const mapDispatchToProps = {
  itemProduct: itemAction.sendToProducts,
  addToCart: cartAction.addingToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCardComponent)