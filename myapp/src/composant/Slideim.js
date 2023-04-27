import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import iNBA from '../imagess/NBA.jpeg';
import iMaillotNBA from '../imagess/Maillot NBA de Golden State Warriors.jpeg'
import iCasquette from '../imagess/Casquette  NBA Chicago Bulls.jpeg'
const Slideim = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Choisisez une photo</h1>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iNBA}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iMaillotNBA}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iCasquette}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slideim
