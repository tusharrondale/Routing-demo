import { Alert, Col, Container, Row } from "react-bootstrap";

export function About() {
  return (
    <Container>
      <Alert variant="primary">
        <h1>About us</h1>
      </Alert>
      <Row>
        <Col lg={4}>
          <h3>Mission</h3>
        </Col>
        <Col lg={4}>
          <h3>Vission</h3>
        </Col>
        <Col lg={4}>
          <h3>Our Histry</h3>
          <p>
            for function component there are no predefined lifecycle function
            so, to implement lifecycle into the function component we will use
            hook useEffect(callback-fun,dep-list)
          </p>
        </Col>
      </Row>
    </Container>
  );
}
