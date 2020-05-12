import  React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FirebaseContext from '../../config/firebaseContext';
import ModalComponent from '../modal/Modal';
 
const SignOutButton = () => {

  /**
   * Get the Firebase instance from context
   */
  const Firebase = React.useContext(FirebaseContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalData = {
    show:show,
    onHide:handleClose,
    modalTitle: "You have signed out",
    modalBody: "We hope to see you soon!",
    modalButtonText: "Close"
  }

  const signOut = () => {
    Firebase.auth().signOut();       
    handleShow();
  }


return ( 
    <div>
    <ModalComponent {...modalData}/> 
    <Button type="button" onClick={signOut}>
        Sign Out
    </Button>
    </div>
)
};
 
export default SignOutButton;