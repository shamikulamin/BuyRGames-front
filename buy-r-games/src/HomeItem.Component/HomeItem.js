
import React from 'react';
import GameClient from '../AxiosClients/GameClient';
import style from '../HomeItem.Component/style';
import { GameCardComponent } from '../GameCardComponent/GameCardComponent';

export class HomeItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            PS4Products: [
                {

                }
            ],
            XOneProducts: [
                {

                }
            ],

            WiiUProducts: [
                {

                }
            ],
            PCProducts: [
                {

                }
            ],
        }
    }

    componentDidMount() {
        GameClient.get('/games/platform/PS4')
            .then(resp => {
                this.setState({
                    PS4Products: resp.data
                })
                console.log(this.state.PS4Products)
            })
            .catch(err => {
                console.log(err);
            });

        GameClient.get('/games/platform/XOne')
            .then(resp => {
                this.setState({
                    XOneProducts: resp.data
                })
                console.log(this.state.XOneProducts)
            })
            .catch(err => {
                console.log(err);
            });

        GameClient.get('/games/platform/WiiU')
            .then(resp => {
                this.setState({
                    WiiUProducts: resp.data
                })
                console.log(this.state.WiiUProducts)
            })
            .catch(err => {
                console.log(err);
            });

        GameClient.get('/games/platform/PC')
            .then(resp => {
                this.setState({
                    PCProducts: resp.data
                })
                console.log(this.state.PCProducts)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        return (
            <>
                <div id = "platformTitle">
                    <h1 style={style.headerStyle}>Playstation 4</h1>
                </div>
                <div style={style.divStyle} className="container">

                    <div className="row" >
                        {this.state.PS4Products.map(PS4Products =>
                            <GameCardComponent
                                key={PS4Products.product_id}
                                products={PS4Products} />
                        )
                        }

                    </div>
                </div>
                <div id = "platformTitle">
                <h1>Xbox One</h1>
                </div>
                <div style={style.divStyle} className="container">
                    <div className="row" >
                        {this.state.XOneProducts.map(XOneProducts =>
                            <GameCardComponent
                                key={XOneProducts.product_id}
                                products={XOneProducts} />
                        )
                        }

                    </div>
                </div>

               <div id = "platformTitle">
                <h1>Wii U</h1>
                </div>
                <div style={style.divStyle} className="container">
                    <div className="row" >
                        {this.state.WiiUProducts.map(WiiUProducts =>
                            <GameCardComponent
                                key={WiiUProducts.product_id}
                                products={WiiUProducts} />
                        )
                        }

                    </div>
                </div>

               <div id = "platformTitle">
                <h1>PC</h1>
                </div>
                <div style={style.divStyle} className="container">
                    <div className="row" >
                        {this.state.PCProducts.map(PCProducts =>
                            <GameCardComponent
                                key={PCProducts.product_id}
                                products={PCProducts} />
                        )
                        }

                    </div>
                </div>



            </>
        );
    }

}