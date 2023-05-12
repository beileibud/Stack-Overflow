import Card from 'react-bootstrap/Card';

function RightCard() {
  return (
    <>
      <Card style={{ width: '18rem', backgroundColor: 'warning' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Danger Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Warning Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Info Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default RightCard;
