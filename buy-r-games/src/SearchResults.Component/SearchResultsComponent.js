
import React from 'react';
import '../SearchResults.Component/style.css';
import GameClient from '../AxiosClients/GameClient';
import { ItemComponent } from '../Item.Component/ItemComponent';
import { SideBarComponent } from '../SideBar.Component/SideBarComponent'

export class SearchResultsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Products: [
                {

                }
            ],
            platformSort:
                [

                ],
            loadCount: 0
        }
    }

    sort() {
        var sorted = {};
        for (var i = 0, max = this.state.Products.length; i < max; i++) {
            if (sorted[this.state.Products[i].platform] == undefined) {
                sorted[this.state.Products[i].platform] = [];
            }
            sorted[this.state.Products[i].platform].push(this.state.Products[i]);
        }
        this.setState({
            ...this.state,
            platformSort: sorted
        });
        // console.log(this.state.platformSort);
    }

    componentDidMount() {

            console.log("i am here")
            GameClient.get('/games/search/Mario')
                .then(resp => {
                    this.setState({
                        Products: resp.data
                    })
                    // console.log(this.state.Products)
                    this.sort();
                })
                .catch(err => {
                    console.log(err);
                });

    }



render() {

    return (
        <>

            <div class="wrapper">

                <nav id="sidebar">
                    <SideBarComponent
                        pSort={this.state}
                        modifyState={this.modifyState} />
                </nav>

                <div id="content">
                    {this.state.Products.map(Products =>
                        <ItemComponent
                            key={Products.product_id}
                            products={Products} />
                    )
                    }
                </div>

            </div>
        </>
    );
}

modifyState = (narrowSearch) => {

    this.setState({
        ...this.state,
        Products: narrowSearch
    })
    console.log(this.state.Products)
}

}