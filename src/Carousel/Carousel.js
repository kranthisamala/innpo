import React from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import {Carousel} from 'react-bootstrap';
import classes from './Carousel.css'



const carousel = (props) => {
    return (
        <div>
            <Carousel className = {classes.carouselContainer}>
                <Carousel.Item>
                  <img alt="900x500" src={slide1} />
                  {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="900x500" src={slide2} />
                  {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
}

export default carousel;