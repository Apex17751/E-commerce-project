import React from 'react';
import carsone from './cars1.jpg'
import carstwo from './cars2.jpg'
import carsthree from './cars3.jpg'
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
   <div className="caroze">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carsone}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carstwo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carsthree}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   </div>
  );
};

export default MyCarousel;
