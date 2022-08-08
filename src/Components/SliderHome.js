import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SliderHome() {
  return (
    <div tabindex="-1">

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
  src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="First slide"
      height ="438px" width="370px"
    />
    <Carousel.Caption>
      <h3>Bariatric Surgeon</h3>
      <p>YOU DESERVE BETTER HEALTHCARE.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
   src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Second slide"
      height ="438px"
      width="370px"
    />

    <Carousel.Caption>
      <h3>Orthopaedics Practice</h3>
      <p>YOU DESERVE BETTER HEALTHCARE..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src="https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Third slide"
      height ="438px" 
      width="370px"
    />
    <Carousel.Caption>
      <h3> Cancer Surgeon</h3>
      <p>YOU DESERVE BETTER HEALTHCARE. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




    </div>
  )
}
