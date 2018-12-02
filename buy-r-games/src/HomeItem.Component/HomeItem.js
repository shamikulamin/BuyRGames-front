
import React from 'react';
import GameClient from '../AxiosClients/GameClient';
import '../HomeItem.Component/style.css'
import  GameCardComponent  from '../GameCardComponent/GameCardComponent';

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
            })
            .catch(err => {
                console.log(err);
            });

        GameClient.get('/games/platform/XOne')
            .then(resp => {
                this.setState({
                    XOneProducts: resp.data
                })
            })
            .catch(err => {
                console.log(err);
            });

        GameClient.get('/games/platform/WiiU')
            .then(resp => {
                this.setState({
                    WiiUProducts: resp.data
                })
            })
            .catch(err => {
                console.log(err);
            });

        GameClient.get('/games/platform/PC')
            .then(resp => {
                this.setState({
                    PCProducts: resp.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        return (
            <>
                <div id="platformTitle">
                    <h1 className="headerStyle mt-1">Playstation 4</h1>
                </div>

                <div className="divStyle mt-5 mb-5 pb-5">

                    <div className="row" >
                        {this.state.PS4Products.map(PS4Products =>
                            <GameCardComponent
                                key={PS4Products.product_id}
                                products={PS4Products} />
                        )
                        }
                    </div>
                </div>
                <div id="platformTitle">
                    <h1 className="headerStyle">Xbox One</h1>
                </div>
                <div className="divStyle mt-5 mb-5 pb-5">
                    <div className="row" >
                        {this.state.XOneProducts.map(XOneProducts =>
                            <GameCardComponent
                                key={XOneProducts.product_id}
                                products={XOneProducts} />
                        )
                        }

                    </div>
                </div>

                <div id="platformTitle">
                    <h1 className="headerStyle">Wii U</h1>
                </div>
                <div className="divStyle mt-5 mb-5 pb-5">
                    <div className="row" >
                        {this.state.WiiUProducts.map(WiiUProducts =>
                            <GameCardComponent
                                key={WiiUProducts.product_id}
                                products={WiiUProducts} />
                        )
                        }

                    </div>
                </div>

                <div id="platformTitle">
                    <h1 className="headerStyle">PC</h1>
                </div>
                <div className="divStyle mt-5 mb-5 pb-5">
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