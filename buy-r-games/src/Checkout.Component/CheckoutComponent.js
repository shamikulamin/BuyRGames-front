import React from 'react';
import { connect } from 'react-redux';
import '../Checkout.Component/style.css'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import * as cartAction from '../Redux/Actions/ShopNav.Action';
import { Link } from 'react-router-dom';



export class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueCart: [],
      paymentStatus: false,
      payment: []
    };
  }

  printDocument = () => {
    const size = (this.state.uniqueCart.length)
    const input = document.getElementById('bigDiv');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'in',
          format: [size * 4, 20]
        });
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("invoice.pdf");
        // pdf.output('dataurlnewwindow');
        setTimeout(() => {
          this.props.emptyCart();
        }, 5000)


      });

  }

  componentDidMount() {


    let deepCopy = JSON.parse(JSON.stringify(this.props.reducedCart.reducedCart));
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
      uniqueCart: reducedCart
    })
  }
  render() {
    const { cart, subTotal } = this.props.cart
    const onSuccess = (payment) => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      this.setState({
        paymentStatus: true,
        payment: payment,
      })
      this.printDocument();
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log('The payment was cancelled!', data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }

    let env = 'sandbox'; // you can set here to 'production' for production
    let currency = 'USD'; // or you can set this value from your props or state
    let total = (parseFloat(Math.round(subTotal * 100) / 100 + Math.round(subTotal * 100) / 100 * 0.0825 + 4.99).toFixed(2)); // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      sandbox: 'AT7ze6LIA_OTlsDV04ryx5rVNKY2EfKutDIzTJMHIqIX-jgmzuhUP6kfuqr8Uegak2Aq7nVO5VMwV1nJ',
      production: 'YOUR-PRODUCTION-APP-ID',
    }
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

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
    console.log(this.state.uniqueCart)
    return (
      <>
        <div id="bigDiv">
          <h1 className="headerStyleCheckout">Buy R Games Checkout</h1>
          {

            this.state.uniqueCart.map((item, i) =>
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
                    </div>

                    <div className="col" id="priceCol">
                      {/* product price */}
                      <h6>Unit Price</h6>
                      <h3><strong>${parseFloat(Math.round(item.price * 100) / 100).toFixed(2)}</strong></h3>
                    </div>
                    {/*substracting from quantity  */}
                    <span className="col-2">
                      <h6>Quantity</h6>
                      <input readOnly value={item.quantity} className="form-control" />
                    </span>
                    {/* Adding more quantity */}
                  </div>
                </span>
              </div>
            )
          }
          <div class="row">
            <div class="col-8"></div>
            <div class="col-4">
              <div className="row">
                <div className="col-6 col-sm-3">
                  <h6>Subtotal: </h6>
                </div>
                <div className="col-6 col-sm-3">
                  <strong>${parseFloat(Math.round(subTotal * 100) / 100).toFixed(2)}</strong>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-sm-3">
                  <h6>Tax: </h6>
                </div>
                <div className="col-6 col-sm-3">
                  <strong>${parseFloat(Math.round(subTotal * 100) / 100 * 0.0825).toFixed(2)}</strong>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-sm-3">
                  <h6>Shipping: </h6>
                </div>
                <div className="col-6 col-sm-3">
                  <strong>$4.99</strong>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-sm-3">
                  <stron><h4>Total: </h4></stron>
                </div>
                <div className="col-6 col-sm-3">
                  <strong>${parseFloat(Math.round(subTotal * 100) / 100 + Math.round(subTotal * 100) / 100 * 0.0825 + 4.99).toFixed(2)}</strong>
                </div>
              </div>
              <div className="row">
                <PaypalExpressBtn
                  env={env}
                  client={client}
                  currency={currency}
                  total={total}
                  onError={onError}
                  onSuccess={onSuccess}
                  onCancel={onCancel} />
              </div>
            </div>
            <div className="row">
              <div className="results">{this.state.paymentStatus ? <><label>Payment Has Succeeded.  PaymentID: {this.state.payment.paymentID}</label> <Link id="redirectLink" to='/home'>
                <h5>Order Successful, please click here to be redirected.</h5>
              </Link></> : null}</div>

            </div>
          </div>
        </div>
      </>
    )
  }

}
//making states in the state store props
const mapStateToProps = (state) => {
  return {
    reducedCart: state.cartState,
    cart: state.cartState,

  }
}


const mapDispatchToProps = {
  emptyCart: cartAction.emptyCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)