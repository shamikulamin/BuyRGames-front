import React from 'react';
import GameClient from '../AxiosClients/GameClient';
import { connect } from 'react-redux'
import '../ProductPage.Component/style.css'


export class ProductPageComponent extends React.Component {


    render() {
        console.log(this.props.product.item.name)
        console.log(this.props.product.searchTerm)
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div class="col">
                           <h2>{this.props.product.item.name}</h2>
                     </div>
                        <div className="col-md-auto">
                            Variable width content
                     </div>
                        <div className="col col-lg-2">
                            3 of 3
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}



export default connect(mapStateToProps)(ProductPageComponent)

