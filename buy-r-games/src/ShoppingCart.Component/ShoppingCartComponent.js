
import React from 'react';
import { connect } from 'react-redux';
import * as cartAction from '../Redux/Actions/ShopNav.Action';
import '../ShoppingCart.Component/style.css'


export class ShoppingCartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reducedCart: [],
      deepCopy: []
    }
  }
  componentDidMount() {
    this.reduceCart();
    //  localStorage.clear();
  }

  reduceCart = () => {
    let deepCopy = JSON.parse(JSON.stringify(this.props.cart.cart));
    console.log(deepCopy);
    let tempCart = deepCopy.map(item => {
      return {
        ...item,
        quantity: 1
      }
    });
    let reducedCart = []
    tempCart = tempCart.forEach(cur => {
      if (!reducedCart.some(item => {
        if (item.id === cur.id) {
          item.quantity++;
          return true;
        }
      })) {
        reducedCart.push(cur);
      }
    })
    this.setState({
      ...this.state,
      reducedCart,
      deepCopy
    })
    // console.log(this.state.reducedCart)
  }

  combineFunctionsAdd = (item) => {
    this.props.addToCart(item)
    this.reduceCart();
  }

  combineFunctionsSubtract = (item) => {
    this.props.reduceFromCart(item)
    this.reduceCart();
  }

  routeToCheckout = (e) => {
    e.preventDefault()
    this.props.routeToCheckout(this.state.reducedCart)
    this.props.history.push("/checkout")

  }
  substractFromCart = () => {
    let deepCopy = JSON.parse(JSON.stringify(this.props.cart.cart));
    console.log(deepCopy);




    let tempCart = deepCopy.map(item => {
      // console.log(item.quantity + "  " + item.name)
      return {
        ...item,
        quantity: item.quantity
      }
    });
    let reducedCart = []

    tempCart = tempCart.forEach(cur => {
      if (!reducedCart.some(item => {
        if (item.id === cur.id) {
          item.quantity--;
          return true;
        }
      })) {
        reducedCart.push(cur);
      }
    })
    this.setState({
      ...this.state,
      reducedCart
    })
  }

  render() {
    const { cart, subTotal } = this.props.cart
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

        <div className="container">
          <div class="row">
            <div class="col-10"><h1 className="shopH1">Shopping Cart</h1></div>
            <div class="col-2"><button className="btn btn-outline-success checkoutBut" onClick={this.routeToCheckout}>Checkout</button></div>
          </div>
          
          
          <h2 align="right" className="text-muted">Subtotal: <strong>${parseFloat(Math.round(subTotal * 100) / 100).toFixed(2)}</strong></h2>
          <div class="row">
            <div class="col1">
              Product
            </div>
            <div class="col2">
              Item Price
            </div>
            <div class="col3">
              Quantity
          </div>
          </div>

          <div className="topDiv">
            {
              this.state.reducedCart.map((item, i) =>
                <div className="container" key={i}>
                  <span >
                    <div id="superBox" className="row block-example border-top  border-dark" >
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
                        {/* product price */}
                        <h3><strong>${parseFloat(Math.round(item.price * 100) / 100).toFixed(2)}</strong></h3>
                      </div>
                      {/*substracting from quantity  */}
                      <button className="quantityBtn" onClick={() => this.combineFunctionsSubtract(item)}>-</button>
                      <span className="col-2">
                        <input readOnly value={item.quantity} className="form-control" />
                      </span>
                      {/* Adding more quantity */}
                      <button className="quantityBtn" onClick={() => this.combineFunctionsAdd(item)}>+</button>
                    </div>
                  </span>
                </div>

              )
            }
          </div>
        </div>
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
  addToCart: cartAction.addingToCart,
  routeToCheckout: cartAction.routeToCheckout,
  reduceFromCart: cartAction.deletingFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent)

