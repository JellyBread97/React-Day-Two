import { Nav } from "react-bootstrap";

const CustomFooter = () => (
  <footer className="bg-dark">
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="#">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="browse">Browse</Nav.Link>
      </Nav.Item>
    </Nav>
  </footer>
);

export default CustomFooter;
