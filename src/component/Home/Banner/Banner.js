import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://image.freepik.com/free-vector/old-man-hospital-room_82574-2898.jpg"
          alt="Visit Us"
        />
        <Carousel.Caption >
          <h2 className="text-warning">Stay Safe Stay Good</h2>
          <h3 className="text-warning">Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://image.freepik.com/free-vector/male-doctor-standing-modern-hospital-building-exterior_48369-18785.jpg"
          alt="Visit Us"
        />

        <Carousel.Caption>
          <h2 className="text-warning">Your Health Our Care</h2>
          <h3 className="text-warning"> ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg"
          alt="Visit Us"
        />

        <Carousel.Caption>
          <h2 className="text-warning">No Musk No Service</h2>
          <h3 className="text-warning">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;