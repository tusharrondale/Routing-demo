//import { Alert } from "bootstrap";
import { Alert,Container } from "react-bootstrap";

export function Home() {
  return (
    <Container className="mt-5">
    <Alert variant="success">
      <h1>Welcome to Home</h1>
      </Alert>
      <p>
        Lifecycle is containing few operations that will be carried out through
        the entirte lifecycle of a component. mounting stage:first stage
        unmounting stage:last stage
      </p>
      </Container>
  );
}
