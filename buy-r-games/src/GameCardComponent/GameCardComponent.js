import React from 'react';
import style from '../GameCardComponent/style';


export class GameCardComponent extends React.PureComponent {

    render() {
      return (
        <div className="col col-12 col-md-6 col-lg-3 d-flex card__one">   
          <div  className="card game-card card-deck" >
            <img style = {style.imgStyle} className="card-img-top" src={this.props.products.product_image_url} alt="Card cap" />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.products.name}</li>
              <li className="list-group-item flex-row-sb">
                <div>${this.props.products.price}</div>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }