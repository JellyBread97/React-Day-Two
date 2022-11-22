import { Jumbotron, Container } from "react-bootstrap";
const Welcome = ({ subtitle }) => {
  return (
    <Jumbotron fluid>
      {" "}
      <Container>
        {" "}
        <h1>Martin's Books</h1> <p>{subtitle}</p>{" "}
      </Container>{" "}
    </Jumbotron>
  );
};
export default Welcome;
