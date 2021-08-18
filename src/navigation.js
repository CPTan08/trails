import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Nav.Link href="https://www.nparks.gov.sg/activities/events-and-workshops">
            Upcoming Events
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Nature Reserves" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Bukit Timah
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Labrador</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Lower Peirce (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  MacRitchie (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Sungei Buloh Wetland (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Upper Peirce (coming soon)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  Upper Seletar (coming soon)
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Parks">Nature Parks</Nav.Link>
              <Nav.Link href="#offbeaten">Off The Beaten</Nav.Link>
              <Nav.Link href="#islands">Islands Hopping</Nav.Link>
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
    </div>
  );
}

export default Navigation;
