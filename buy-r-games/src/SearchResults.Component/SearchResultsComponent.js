
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
            search: ""
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.state === 'desiredState') {
            const { id } = nextProps.match.params
            console.log(nextProps.match.params)
            this.setState({
                ...this.state,
                search: id
            }, function() { GameClient.get('/games/search/' + this.state.search)
            .then(resp => {
                this.setState({
                    Products: resp.data
                })
                // console.log(this.state.Products)
                this.sort();
            })
            .catch(err => {
                console.log(err);
            });})

        }
        
    }

    renderData() {

        console.log(this.state.search)
        GameClient.get('/games/search/' + this.state.search)
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

    componentDidMount() {
        const { id } = this.props.match.params
        this.setState({
            ...this.state,
            search: id
        },this.renderData())
        
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