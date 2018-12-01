import React from 'react';
import GameClient from '../AxiosClients/GameClient';
import axios from 'axios';
import { connect } from 'react-redux'
import '../ProductPage.Component/style.css'
import StarRatings from 'react-star-ratings'
import MiniCardComponent from '../MiniCard.Component/MiniCardComponent';
import YouTube from 'react-youtube';
import ReactStars from 'react-stars'
import * as cartAction from '../Redux/Actions/ShopNav.Action';

export class ProductPageComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgUrl: "",
            esrbRating: "",
            developer: "",
            snippet: "",
            rating: 0,
            relatedProducts: [],
            videos: [],
            reviews: [],
            reviewUsernames: [],
            isHidden: false,
            userRating: 0,
            isButtonDisabled: false,
            submitBtn: "Submit",
            value: ""

        }
    }



    onStarClick(nextValue, prevValue, name) {
        this.setState({ userRating: nextValue });
    }

    componentDidMount() {
        const header_items = { 'Ocp-Apim-Subscription-Key': '810fb63008844c209116444171e1760f' };
        let searchTerm = this.props.product.item.name + " " + this.props.product.item.releaseyear + " cover"
        let videoSearchTerm = this.props.product.item.name + " " + this.props.product.item.releaseyear + " trailer gameplay"
        let webSearchTerm = this.props.product.item.name + " " + this.props.product.item.releaseyear + " imdb"

        axios.get('https://api.cognitive.microsoft.com/bing/v7.0/search?q=' + webSearchTerm, { headers: header_items })
            .then(response => {
                this.setState({
                    snippet: response.data.webPages.value[0].snippet
                })
            })
            .catch((error) => {
                console.log('error ' + error);
            });

        axios.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' + searchTerm, { headers: header_items })
            .then(response => {
                this.setState({
                    imgUrl: response.data.value[0].contentUrl
                })
            })
            .catch((error) => {
                console.log('error ' + error);
            });

        axios.get('https://api.cognitive.microsoft.com/bing/v7.0/videos/search?q=' + videoSearchTerm, { headers: header_items })
            .then(response => {
                let topVids = response.data.value.slice(0, 5)
                let vidList = []
                for (var i in topVids) {
                    let str = topVids[i].contentUrl.substring(topVids[i].contentUrl.indexOf("=") + 1);
                    vidList.push(str)
                }
                this.setState({
                    videos: vidList
                })
            })
            .catch((error) => {
                console.log('error ' + error);
            });



        this.setState({
            rating: this.props.product.item.critic_score
        })


        if (this.props.product.item.esrb_rating === "") {
            this.setState({
                esrbRating: "NR"
            })
        }
        else {
            this.setState({
                esrbRating: this.props.product.item.esrb_rating
            })
        }
        if (this.props.product.item.developer === "") {
            this.setState({
                developer: this.props.product.item.publisher
            })
        }
        else {
            this.setState({
                developer: this.props.product.item.developer
            })
        }

        GameClient.get('/games/searchRelated/' + this.props.product.searchTerm)
            .then(resp => {
                this.setState({
                    relatedProducts: resp.data,
                })

            })
            .catch(err => {
                console.log(err);
            });

        GameClient.get('/games/review/' + this.props.product.item.id)
            .then(resp => {
                this.setState({
                    reviews: resp.data
                })

            })
            .catch(err => {
                console.log(err);
            });


    }

    structurePost() {
        let post = []
        try {
            for (let i = 0; i < this.state.reviews.review.length; i++) {
                post.push(
                    <div id="reviewDiv" className="border-top">
                        <h6 className="text-muted"><strong>{this.state.reviews.review[i].user.username}</strong> Says:</h6>
                        <StarRatings
                            id="starRate"
                            rating={this.state.reviews.review[i].userRating}
                            starRatedColor="yellow"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="3px"
                            name='rating'
                        />

                        <span id="rateSpan">{this.state.reviews.review[i].userRating}/5 </span>
                        <p className="well">{this.state.reviews.review[i].review}</p>
                    </div>

                )
            }
            return post
        }
        catch (err) {
            return
        }


    }

    reviewToggle() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    submitReview = (event) => {
        event.preventDefault();
        if (sessionStorage.getItem("username") === null) {
            this.props.history.push('/sign-in')
        }
        else {



            this.setState({
                isButtonDisabled: true,
                submitBtn: "Review has been submitted",
            });
            let revObj = {
                reviewId: this.state.reviews.review[this.state.reviews.review.length - 1].reviewId + 1,
                userId: sessionStorage.getItem("id"),
                productId: this.props.product.item.id,
                userRating: this.state.userRating,
                review: this.state.value

            }

            GameClient.post('/reviews', revObj)
                .then(res => {

                })
                .catch(err => {
                    console.log(err);
                })

            GameClient.get('/games/review/' + this.props.product.item.id)
                .then(resp => {
                    this.setState({
                        reviews: resp.data
                    })

                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        const scale_rating = (this.state.rating / 20.00);
        const price = parseFloat(this.props.product.item.price).toFixed(2);
        const esrbMap = {
            "": "https://www.tidewatergames.com/image/catalog/ratings/nr-rating.png",
            "E": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/6/63/ESRB-ver2013_E.png/160px-ESRB-ver2013_E.png",
            "EC": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ESRB_Early_Childhood.svg/1000px-ESRB_Early_Childhood.svg.png",
            "K-A": "https://upload.wikimedia.org/wikipedia/commons/9/92/ESRB_-_K-A.JPG",
            "T": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/b/bf/ESRB-ver2013_T.png/160px-ESRB-ver2013_T.png",
            "M": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/d/d5/ESRB-ver2013_M.png/160px-ESRB-ver2013_M.png",
            "E10+": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/ESRB_2013_Everyone_10%2B_French.svg/120px-ESRB_2013_Everyone_10%2B_French.svg.png",
            "AO": "https://particlebit.files.wordpress.com/2016/04/esrb_ao.png"
        }
        const esrbDescriptors = {
            "": "Not Rated: Title has not been rated.",
            "E": "Everyone (6+): Title has content that is generally suitable for all ages. May contain minimal cartoon, fantasy or mild violence and/or infrequent use of mild language.",
            "EC": "Early Childhood (3+): Title has content that may be suitable for ages 3 and older. Contains no material that parents would find inappropriate. ",
            "K-A": "Kids to Adults: Title is suitable for all ages.",
            "T": "Teen (13+): Title has content that is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, simulated gambling, and/or infrequent use of strong language.",
            "M": "Mature (17+): Ttile has content that is generally suitable for persons ages 17 and up. May contain intense violence, blood and gore, sexual content and/or strong language.",
            "E10+": "Everyone 10+ (10+): Title has content that is generally suitable for ages 10 and up. May contain more cartoon, fantasy or mild violence, mild language and/or minimal suggestive themes.",
            "AO": "Adults Only (18+): Title has content that is only suitable for persons ages 17 and up. May contain intense violence, blood and gore, sexual content and/or strong language. "
        }

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        const ratingChanged = (newRating) => {
            this.setState({ userRating: newRating });
            // console.log(newRating)
        }

        const {addToCart} = this.props


        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>{this.props.product.item.name}</h2>
                            <h6 className="productH6"><strong>Developer:</strong> {this.state.developer}</h6>
                            <h6 className="productH6"> <strong>Publisher:</strong> {this.props.product.item.publisher}</h6>
                            <h6 className="productH6"><strong>Release Year:</strong> {this.props.product.item.releaseyear}</h6>
                            <div className="row">
                                <div className="col-md-8 esrbCol" >
                                    <img className="esrbClass" src={esrbMap[this.props.product.item.esrb_rating]} alt="Card cap" />
                                </div>
                                <div className="esrbSCol">
                                    <div className="esrbTags"><strong>ESRB Rating:</strong> {this.state.esrbRating}</div>
                                    <div className="esrbTags">{esrbDescriptors[this.props.product.item.esrb_rating]}</div>
                                </div>

                            </div>
                            <div id="ratingDiv">
                                <StarRatings
                                    id="starRate"
                                    rating={scale_rating}
                                    starRatedColor="yellow"
                                    changeRating={this.changeRating}
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="3px"
                                    name='rating'
                                />

                                <span id="rateSpan">{scale_rating}/5 </span>

                            </div>
                            <img id="gameImg" src={this.state.imgUrl} alt="Card prop" />
                            <div id="synop">
                                <h6>Synopsis: </h6>
                                <h6>{this.state.snippet}</h6>
                            </div>



                        </div>
                        <div className="col-md-auto">
                            <div className="priceInfoCol">
                                <h3>${price}</h3>
                                <button className ="btn btn-danger" onClick = {()=>addToCart(this.props.products)}>Add to Cart</button>
                            </div>
                        </div>
                        <div className="col col-lg-2">
                            <div className="relatedCol">
                                <h5> Related Products </h5>

                                {this.state.relatedProducts.map(Products =>
                                    <MiniCardComponent
                                        products={Products}
                                        searchTerm={this.props.product.searchTerm} />
                                )
                                }

                            </div>
                        </div>
                    </div>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            {/* <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-detail" role="tab" aria-controls="nav-home" aria-selected="true">Details</a> */}
                            <a className="nav-item nav-link active" id="nav-contact-tab" data-toggle="tab" href="#nav-reviews" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-videos" role="tab" aria-controls="nav-profile" aria-selected="false">Videos</a>

                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        {/* <div class="tab-pane fade show active" id="nav-detail" role="tabpanel" aria-labelledby="nav-home-tab">Details</div> */}
                        <div className="tab-pane fade" id="nav-videos" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div id="navVids">
                                {this.state.videos.map(Video =>
                                    <YouTube
                                        videoId={Video}
                                        opts={opts}
                                        onReady={this._onReady} />
                                )}
                            </div>
                        </div>
                        <div class="tab-pane fade show active" id="nav-reviews" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <form className="formStyle">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Review this product!</label>

                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        value={this.state.userRating}
                                        half={false}
                                        size={24}
                                        color2={'#ffd700'} />

                                    <textarea
                                        onChange={this.handleChange.bind(this)} disabled={this.state.isButtonDisabled} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Review" />
                                    <small id="emailHelp" class="form-text text-muted">You will be redirected to the sign-in page if you are not logged in.</small>
                                </div>
                                <button disabled={this.state.isButtonDisabled} onClick={this.submitReview} type="submit" class="btn btn-primary">{this.state.submitBtn}</button>
                            </form>
                            <h3>What Customers are saying about this product</h3>
                            {this.structurePost()}
                        </div>
                    </div>
                </div>

            </>
        );
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}



const mapStateToProps = (state) => {
    return {
        product: state.product,
        cart: state.cartState
    }
}


const mapDispatchToProps = {
    addToCart: cartAction.addingToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageComponent)



