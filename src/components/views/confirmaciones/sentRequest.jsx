import { Container,
  Button } from "react-bootstrap/";
import CoderCard from "../cards/CoderCard";

function SentRequest() {
  return (
    <>
    <Container>
      <Container>
        <div>
          Hemos enviado tu solicitud al coder ...
        </div>
        <br />
        <CoderCard />
        <div> Tu numero de seguimiento es el ... </div>
        <div> En breve te enviaremos un e-mail con el detalle de tu solicitud.</div>
      </Container>
      <Button href="#home" variant="primary">Volver a inicio</Button>
      </Container>
    </>
  );
}

export default SentRequest;