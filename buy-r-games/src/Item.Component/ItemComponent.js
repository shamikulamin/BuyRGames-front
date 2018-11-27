import React from 'react';
import  '../Item.Component/style.css';


export class ItemComponent extends React.PureComponent {

    render() {
        const price = parseFloat(this.props.products.price).toFixed(2); 
        return (

            <div className="container">
                <span >
                    <div id = "superBox" className="row block-example border-top  border-dark">
                        <div class="col">
                        <img  src={this.props.products.product_image_url} alt="Card cap" />
                    </div>
                        <div className="col-6">
                           <h4>{this.props.products.name}</h4>
                    </div>
                        <div className="col" id = "priceCol">
                            <h4>${price}</h4>
                    </div>
                    </div>
                </span>
            </div>
            // <div className="col col-12 col-md-6 col-lg-3 d-flex card__one">   
            //   <div  className="card game-card card-deck" >
            //     <img style = {style.imgStyle} className="card-img-top" src={this.props.products.product_image_url} alt="Card cap" />
            //     <ul className="list-group list-group-flush">
            //       <li className="list-group-item">{this.props.products.name}</li>
            //       <li className="list-group-item flex-row-sb">
            //         <div>${this.props.products.price}</div>
            //       </li>
            //     </ul>
            //   </div>
            // </div>
        )
    }
}