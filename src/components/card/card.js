import React from 'react';
import {Card, Button } from 'react-bootstrap'

/**
 * Reusable Card Component
 * @param {imgSrc} props 
 * @param {title} props
 * @param {text} props
 * @param {buttonText} props
 */
function CardComponent(props) {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.imgSrc} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.text}
    </Card.Text>
    <Button variant="primary">{props.buttonText}</Button>
  </Card.Body>
</Card>
  );
}

export default CardComponent;