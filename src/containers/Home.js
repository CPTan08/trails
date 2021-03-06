import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="header">I AM A ...</div>

      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/novice.jpg"
              alt="novice"
            />
            <Carousel.Caption>
              <div>Take it easy and immerse in nature</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/adventure.jpg"
              alt="adventureseeker"
            />
            <Carousel.Caption>
              <div>Check out hidden gems on off beaten paths</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              href="https://www.cheekiemonkie.net/2021/02/off-the-beaten-track-hiking-trails-singapore-for-families.html" //NOT WORKING
              src="./images/family.jpg"
              alt="family"
            />
            <Carousel.Caption>
              <div>Spark curiosity with kid-friendly trails</div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h3>Explore more via the Singapore Map</h3>
      </div>
      <div>
        <iframe
          className="alltrails"
          src="https://www.alltrails.com/widget/singapore?u=m"
          title="All Trails Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
