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
            fullProducts: [
                {

                }
            ],
            platformSort:
                [

                ],
            genreSort:
                [

                ],
            priceSort:
                [

                ],
            search: ""
        }
    }


    sortPlatform() {
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
    }

    sortGenre() {
        var sorted = {};
        for (var i = 0, max = this.state.Products.length; i < max; i++) {
            if (sorted[this.state.Products[i].genre] == undefined) {
                sorted[this.state.Products[i].genre] = [];
            }
            sorted[this.state.Products[i].genre].push(this.state.Products[i]);
        }
        this.setState({
            ...this.state,
            genreSort: sorted
        });
    }

    sortPrice() {

        let underTen = this.state.Products.filter(function (prods) {
            return prods.price < 10;
        })

        let tenToTwenty = this.state.Products.filter(function (prods) {
            return (prods.price >= 10 && prods.price < 20);
        })

        let twentyToThirty = this.state.Products.filter(function (prods) {
            return (prods.price >= 20 && prods.price < 30);
        })

        let thirtyToForty = this.state.Products.filter(function (prods) {
            return (prods.price >= 30 && prods.price < 40);
        })

        let fortyToFifty = this.state.Products.filter(function (prods) {
            return (prods.price >= 40 && prods.price < 50);
        })

        let fiftyToSixty = this.state.Products.filter(function (prods) {
            return (prods.price >= 50 && prods.price < 60);
        })

        let overSixty = this.state.Products.filter(function (prods) {
            return (prods.price >= 60);
        })

        let priceArr = {
            "<$10": underTen,
            "$10 - $19.99": tenToTwenty,
            "$20 - $29.99": twentyToThirty,
            "$30 - $39.99": thirtyToForty,
            "$40 - $49.99": fortyToFifty,
            "$50 - $59.99": fiftyToSixty,
            ">$60": overSixty
        }
        this.setState({
            priceSort: priceArr
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.state === 'desiredState') {
            const { id } = nextProps.match.params
            console.log(nextProps.match.params)
            this.setState({
                ...this.state,
                search: id
            }, function () {
                GameClient.get('/games/search/' + this.state.search)
                    .then(resp => {
                        this.setState({
                            Products: resp.data,
                            fullProducts: resp.data
                        })
                        this.sortPlatform();
                        this.sortGenre();
                        this.sortPrice();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })

        }

    }


    componentDidMount() {
        const { id } = this.props.match.params
        this.setState({
            ...this.state,
            search: id
        }, function () {
            GameClient.get('/games/search/' + this.state.search)
                .then(resp => {
                    this.setState({
                        Products: resp.data,
                        fullProducts: resp.data
                    })
                    this.sortPlatform();
                    this.sortGenre();
                    this.sortPrice();
                })
                .catch(err => {
                    console.log(err);
                });
        })

    }



    render() {
        return (
            <>
                <div class="wrapper">

                    <nav id="sidebar">
                        <SideBarComponent
                            pSort={this.state}
                            modifyState={this.modifyState}
                            removeFilters={this.removeFilters} />
                    </nav>

                    <div id="content">
                        <h2 id ="resultHeader" className="text-muted">{this.state.Products.length} Results for <strong>"{this.state.search}</strong>"</h2>
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

    removeFilters = () => {
        this.setState({
            ...this.state,
            Products: this.state.fullProducts
        })
    }

}