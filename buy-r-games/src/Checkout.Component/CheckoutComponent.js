import React from 'react';
import { connect } from 'react-redux';


export class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props.reducedCart.reducedCart)
      return(
        <div className ="container">
          {/* <h2>This is your cart:{this.props.reducedCart}</h2> */}

            </div>
      )
  }
  
}
//making states in the state store props
const mapStateToProps = (state) => {
  return {
    reducedCart: state.cartState

  }
}
 

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)