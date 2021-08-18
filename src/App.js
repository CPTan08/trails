import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Nav.Link href="#Events">Upcoming Events</Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Nature Reserves" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Bukit Timah
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Labrador</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Lower Peirce
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  MacRitchie
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Sungei Buloh Wetland
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Upper Peirce
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  Upper Seletar
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Parks">Nature Parks</Nav.Link>
              <Nav.Link href="#offbeaten">Off The Beaten</Nav.Link>
              <Nav.Link href="#offbeaten">Islands Hopping</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#checklist">Trail Checklist</Nav.Link>
              <Nav.Link eventKey={2} href="#weather">
                Weather Forecast
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <div>
        <h1>I AM A ...</h1>
      </div>

      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/novice.jpg"
              alt="novice"
            />
            <Carousel.Caption>
              <div className="captiontxt">
                Take it easy and immerse in nature
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/adventure.jpg"
              href="https://www.cheekiemonkie.net/2021/02/off-the-beaten-track-hiking-trails-singapore-for-families.html"
              alt="adventureseeker"
            />
            <Carousel.Caption>
              <div className="captiontxt">
                Check out hidden gems on off beaten paths
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/family.jpg"
              alt="family"
            />
            <Carousel.Caption>
              <div className="captiontxt">
                Spark curiosity with kid-friendly trails
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>
      <div>
        <h3>Explore more via the Singapore Map</h3>
      </div>
      <div>
        <iframe
          className="alltrails"
          src="https://data.gov.sg/dataset/park-connector-loop/resource/c186e1b5-0e47-4891-8710-f9844b993449/view/514d0738-ffec-43f4-ae21-cd6a36bad111"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
