import React from 'react';


export class CompleteOrderComponent extends React.Component {

redirect(){
    setTimeout(()=> {
        this.props.history.push('/home') 
      }, 5000)
}
 
 
  render() {
   
    return (
      <>
        <div id="bigDiv">
          <h1 className="headerStyleCheckout">Order Complete, You are being redirected to the homepage in 5 seconds</h1>         
            {this.redirect()}
        </div>
      </>
    )
  }

}
