import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = ({ subtitle }) => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
    className="fixed-top"
  >
    <Navbar.Brand href="#home">Books - {subtitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#browse">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNavbar;
