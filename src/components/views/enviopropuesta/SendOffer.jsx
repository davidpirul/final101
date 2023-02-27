import { Container } from "react-bootstrap";
import { faker } from '@faker-js/faker';
import CoderCard from "../cards/CoderCard";

function SendOffer() {
  const randomName = faker.name.fullName();
  return (
    <>
      <Container className="text-center">
        <h2> Felicitaciones {randomName} </h2>
        <h5>Nuestro coder {randomName} te ha enviado una propuesta</h5>
        <br />
        <CoderCard />
        <br />
        <Container>
          <h5>Detalles de propuesta</h5>
        </Container>
      </Container>
    </>
  );
}

export default SendOffer;