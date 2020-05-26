import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

/**
 * Reusable Modal Component.
 * @param modalTitle
 * @param modalBody
 * @param modalButtonText
 * @param isOpen
 * @param toggle
 */
function ModalComponent(props) {
  console.log(props.isOpen)
  return (
    <MDBModal isOpen={props.isOpen} toggle={props.toggle}>
      <MDBModalHeader toggle={props.toggle}>{props.modalTitle}</MDBModalHeader>

      <MDBModalBody>
        <p>{props.modalBody}</p>
      </MDBModalBody>

      <MDBModalFooter>
        <MDBBtn color="primary" onClick={props.toggle}>
          {props.modalButtonText}
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
}

export default ModalComponent;
