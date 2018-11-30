
import React from 'react';
import { connect } from 'react-redux';
import * as navAction from '../Redux/Actions/ShopNav.Action';

export class ShoppingCartComponent extends React.Component {
  render() {
    const {cart} = this.props.cart
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
                  cart.map(item =>
                    
                    <div className="container">
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
                        <div>
                          <button>-</button>
                          <input readOnly value ="12"/>
                          <button>+</button>
                          </div>
    
                        <div className="col" id="priceCol">
                            <h5>Buy <strong>for</strong></h5>
                            <h3><strong>${item.price}</strong></h3>
                        </div>
                    </div>
                </span>
            </div>

                  )
                  }

            </tbody>
          </table>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent)

