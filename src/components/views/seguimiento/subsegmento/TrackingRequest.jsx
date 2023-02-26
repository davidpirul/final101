import { useState } from 'react';
import {
  Col,
  Form,
  Row,
  Container,
  Button
} from 'react-bootstrap'

function TrackingRequest() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Numero de seguimiento" />
            </Col>
            <Col>
              <Form.Control placeholder="Nombre" />
            </Col>
          </Row>
        </Form>
        <br />
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Container>
    </>
  );
}

export default TrackingRequest;