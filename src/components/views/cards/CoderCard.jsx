import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CoderCard() {
  return (
    <>
    <Card style={{ width: '15rem' }}>
    <Card.Header>Coder Name</Card.Header>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGO-vi7hcHF9yzYNnDkM6QXBzWf86zJKDyw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
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