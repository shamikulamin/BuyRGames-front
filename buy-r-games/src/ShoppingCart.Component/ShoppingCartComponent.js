
import React from 'react';
import { connect } from 'react-redux';
import * as cartAction from '../Redux/Actions/ShopNav.Action';
import '../ShoppingCart.Component/style.css'
import { Link } from "react-router-dom";
import { CheckoutComponent } from '../Checkout.Component/CheckoutComponent';


export class ShoppingCartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reducedCart:[]
    }
}

onlyUnique =(itemInCart,indexOfItem,tempCart) =>{
  console.log( tempCart.indexOf(itemInCart) ===indexOfItem)
  if (itemInCart.copies >=1) {
      itemInCart.copies++;
    } else {
      itemInCart.copies = 1;
    }
  return tempCart.indexOf(itemInCart) === indexOfItem
}

reduceCart = () => {
  let tempCart = this.props.cart.cart.map(item => {
    return {
      ...item,
      quantity: 1
    }
  });
  let reducedCart = []
  tempCart = tempCart.forEach(cur => {
    if(!reducedCart.some(item => {
      if(item.id === cur.id) {
        item.quantity++;
        return true;
      }
    })) {
      reducedCart.push(cur);
    }
  })

  // let tempCart = JSON.parse(JSON.stringify(this.props.cart.cart));
  // console.log(this.props.cart.cart);
  // console.log(tempCart);
  this.setState({
    ...this.state,
    reducedCart
  })
}

combineFunctions = (item) => {
  this.reduceCart();
  this.props.addToCart(item)
}

componentDidMount(){
  this.reduceCart();
}
  render() {
    const {cart,subTotal} = this.props.cart
    const platformMap = {
      "TG16": "TurboGrafx-16",
      "PSP": "Sony Playstation Portable",
      "2600": "Atari 2600",
      "PS4": "Sony Playstation 4",
      "N64": "Nintendo 64",
      "GBA": "Gameboy Advanced",
      "GG": "Game Gear",
      "PSV": "Sony Playstation Vita",
      "XB": "Microsoft Xbox",
      "DC": "Sega Dreamcast",
      "XOne": "Microsoft Xbox One",
      "PS2": "Sony Playstation 2",
      "Wii": "Nintendo Wii",
      "X360": "Microsoft Xbox 360",
      "WiiU": "Nintendo Wii U",
      "PC": "PC",
      "DS": "Nintendo DS",
      "WS": "WonderSwan",
      "2007": "Mega Touch Force 2007",
      "PS3": "Sony Playstation 3",
      "GEN": "Sega Genesis",
      "SNES": "Super Nintendo",
      "NG": "Neo Geo",
      "GB": "Gameboy",
      "PS": "Sony Playstation",
      "SCD": "Sega Mega-CD",
      "3DS": "Nintendo 3DS",
      "3DO": "3DO Interactive Multiplayer",
      "NES": "Nintendo Entertainment System",
      "SAT": "SAT",
      "GC": "Nintendo GameCude"
  }
  const esrbMap = {
      "": "https://www.tidewatergames.com/image/catalog/ratings/nr-rating.png",
      "E": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/6/63/ESRB-ver2013_E.png/160px-ESRB-ver2013_E.png",
      "EC": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ESRB_Early_Childhood.svg/1000px-ESRB_Early_Childhood.svg.png",
      "K-A": "https://upload.wikimedia.org/wikipedia/commons/9/92/ESRB_-_K-A.JPG",
      "T": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/b/bf/ESRB-ver2013_T.png/160px-ESRB-ver2013_T.png",
      "M": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/d/d5/ESRB-ver2013_M.png/160px-ESRB-ver2013_M.png",
      "E10+": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/ESRB_2013_Everyone_10%2B_French.svg/120px-ESRB_2013_Everyone_10%2B_French.svg.png",
      "AO": "https://particlebit.files.wordpress.com/2016/04/esrb_ao.png"
  }
    return (
        <>
        {/* <CheckoutComponent reducedCart ={this.state.reducedCart} /> */}

        <div className = "container">
        <h1>Shopping Cart</h1>
        {/* <div><CheckoutComponent array = {this.state.reducedCart}/></div> */}
        <button><Link to ="/checkout">Proceed to Checkout </Link></button>
          <table className = "table">
            <thead className = "thead-dark">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody></tbody>
            </table>
                {
                  this.state.reducedCart.map((item,i) =>
                    <div className="container" key = {i}>
                <span >
                    <div id="superBox" className="row block-example border-top  border-dark">
                        <div className="col">
                            <img className="imgClass" src={item.product_image_url} alt="Card cap" />
                        </div>
                        <div className="col-6">
                            <h4>{item.name}</h4>
                            <h6 className="text-muted">for <strong>{platformMap[item.platform]}</strong></h6>
                            <h6 className="text-muted">By {item.publisher}</h6>
                            <img className="esrbClass" src={esrbMap[item.esrb_rating]} alt="Card cap" />
                        </div>
                        <div className="col" id="priceCol">
                            <h3><strong>${item.price}</strong></h3>
                        </div>
                            <button className ="quantityBtn">-</button>
                            <span className = "col-2">
                            <input readOnly value ={item.quantity} className="form-control" />
                            </span>
                            <button className="quantityBtn" onClick = {()=> this.combineFunctions(item)}>+</button>
                        <div>
                          <h5>{subTotal}</h5>
                        </div>
                    </div>
                </span>
            </div>

                  )
                  }        </div>
        </>
 
    )
  }

}
//making states in the state store props
const mapStateToProps = (state) => {
  return {
    cart: state.cartState
  }
}
 

const mapDispatchToProps = {
  addToCart: cartAction.addingToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent)

