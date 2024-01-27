import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Carousel from 'react-bootstrap/Carousel';


function App() {

  return (
    <>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=" https://www.hoppingaroundtheglobeinstyle.com/wp-content/uploads/2019/07/Boat-on-Bahia-de-las-Aguilas.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.eb0a481675e5bfbe973e2b0918e97176?rik=%2btuj%2bJ0gG6r4Nw&riu=http%3a%2f%2fhorsetrekn.com%2fresources%2fHomePhoto01-0488x0868.jpg&ehk=Tq3rIs6YbvuMZMM9w0IefLOfQvzfRonyHmPWRqa7dj4%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gonefishing-puntacana.com/info/uploads/images/Ecotour_Barahona_Dominican_Republic_-_San-Rafael-Coast_1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
    </>
  )
}

export default App
