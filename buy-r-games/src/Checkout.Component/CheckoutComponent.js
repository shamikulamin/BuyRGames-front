import React from 'react';


export class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
      return(
        <div className ="container">
          <h2>This is your cart:{this.props.array}</h2>

            </div>
      )
  }
}