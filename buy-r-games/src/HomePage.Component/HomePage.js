
import React from 'react';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, 
  Mask} from "mdbreact";
import './style.css'
import {Link} from 'react-router-dom';

import {HomeItem} from '../HomeItem.Component/HomeItem';


export class HomePage extends React.Component {


  render() {
    
    return (
      <>
        <div id = "carouselStyle">
          <Carousel activeItem={1} length={4} showControls={true} slide={true} showIndicators={true} className="z-depth-1">
            <CarouselInner>
              <CarouselItem itemId="1">
                <View>
                  <img className="d-block w-100 caroImg" src={require('../img/cod-4-ad.png')} alt="First slide" />
                  <Mask overlay="black-light" />
                </View>
              </CarouselItem>
              <CarouselItem itemId="2">
                <View>
                  <img className="d-block w-100" src={require('../img/three-deal-ad.png')} alt="Second slide" />
                  <Mask overlay="black-strong" />
                </View>
              </CarouselItem>
              <CarouselItem itemId="3">
                <View>
                  <img className="d-block w-100" src={require('../img/d2-forsaken-ad.png')} alt="Third slide" />
                  <Mask overlay="black-slight" />
                </View>
                <CarouselCaption>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem itemId="4">
                <View>
                  <img className="d-block w-100" src={require('../img/ow-ps-ad.png')} alt="Mattonit's item" />
                  <Mask overlay="black-light" />
                </View>
              </CarouselItem>
            </CarouselInner>
          </Carousel>
        </div>
        
        <HomeItem></HomeItem>
      


      </>
    );
  }

}