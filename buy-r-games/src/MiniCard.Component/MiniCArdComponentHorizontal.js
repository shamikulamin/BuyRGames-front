import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as itemAction from '../Redux/Actions/ItemComp.Action';
import '../MiniCard.Component/style.css'


export class MiniCardComponent extends React.PureComponent {


    render() {
        const price = parseFloat(this.props.products.price).toFixed(2);
        return (

            <div className="container containerCard col-sm-2 mx-0 mt-4">
                    <div className="" >
                        <img id="miniCardImg" src={this.props.products.product_image_url} alt="Card cap" />
                    </div>
                    <div className="textInfo mx-0">
                        <div ><h6 className="minih6" onClick={() => this.props.itemProduct(this.props.products, this.props.searchTerm)}> <Link className="link" to='/product'>
                                {this.props.products.name}
                            </Link></h6></div>
                        <div ><h6 className="minih6">${price}</h6></div>
                    </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        search: state.searchTerm
    }
}

const mapDispatchToProps = {
    itemProduct: itemAction.sendToProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCardComponent)