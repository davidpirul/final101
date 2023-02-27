import { Card, ListGroup } from 'react-bootstrap';

function CoderCard() {
  return (
    <>
      <Card className='mx-auto' style={{ width: '18rem'}}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGO-vi7hcHF9yzYNnDkM6QXBzWf86zJKDyw&usqp=CAU" />
        <Card.Body>
          <Card.Title>Coder Name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default CoderCard;