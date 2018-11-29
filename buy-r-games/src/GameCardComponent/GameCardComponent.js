import React from 'react';
import style from '../GameCardComponent/style';


export class GameCardComponent extends React.PureComponent {

  render() {
    const price = parseFloat(this.props.products.price).toFixed(2);
    return (

      
      <div class="card-deck col">
        <div class="card">
          <img style={style.imgStyle} class="card-img-top" src={this.props.products.product_image_url} alt="Card cap"/>
          <div class="card-body">
            <h5 class="card-title">{this.props.products.name}</h5>
            <p class="card-text">For: {this.props.products.platform}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">${price}</small>
          </div>
        </div>
      </div>

      
    )
  }
}