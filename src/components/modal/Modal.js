import React from 'react';
import {Modal, Button } from 'react-bootstrap'


/**
 * Reusable Modal Component.
 * @param modalTitle
 * @param modalBody
 * @param modalButtonText
 * @param show
 * @param handleClose
 */
function ModalComponent(props) {

  return (
<Modal show={props.show} onHide={props.onHide}>
  <Modal.Header closeButton>
    <Modal.Title>{props.modalTitle}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>{props.modalBody}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" onClick={props.onHide}>{props.modalButtonText}</Button>
  </Modal.Footer>
</Modal>
  );
}

export default ModalComponent;