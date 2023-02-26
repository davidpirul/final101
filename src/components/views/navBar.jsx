import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap'
import { FileEarmarkCodeFill } from 'react-bootstrap-icons'

function Navigator() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <FileEarmarkCodeFill
              color="magenta"
              size={40}
            />{' '}
            freecoders
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#seguimiento">Seguimiento</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigator;