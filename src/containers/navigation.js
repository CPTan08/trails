import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Weather from "../weather";
import Home from "./home";
import IslandGallery from "../islands";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" className="navbar-text">
          <Container>
            <Nav.Link href="/home">Home</Nav.Link>
            {/* <Nav.Link as={Home} to="/" >Home</Nav.Link> */}
            <Nav.Link href="https://www.nparks.gov.sg/activities/events-and-workshops">
              Upcoming Events
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title="Nature Reserves"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="https://www.alltrails.com/parks/singapore/central/bukit-timah-nature-reserve/walking">
                    Bukit Timah
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Labrador
                  </NavDropdown.Item>
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
                <Nav.Link href="https://www.cheekiemonkie.net/2021/02/off-the-beaten-track-hiking-trails-singapore-for-families.html">
                  Off The Beaten
                </Nav.Link>
                <Nav.Link href="/islands">Islands Hopping</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#checklist">Trail Checklist</Nav.Link>
                <Nav.Link href="/weather">24hr Forecast</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/islands" component={IslandGallery} />
          <Route
            exact
            path="/404"
            render={() => <div>Page Not Found</div>}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
