import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

/**
 * Reusable Card Component
 * @param {imgSrc} props
 * @param {title} props
 * @param {text} props
 * @param {buttonText} props
 */
function CardComponent(props) {
  return (
    <MDBCard style={{ width: "18rem" }}>
      <MDBCardImage variant="top" src={props.imgSrc} />
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>{props.text}</MDBCardText>
        <MDBBtn variant="primary">{props.buttonText}</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default CardComponent;
