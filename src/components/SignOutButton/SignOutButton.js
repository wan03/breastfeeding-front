import  React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalComponent from '../modal/Modal';
import { useAuth } from "../../config/Auth";
 
const SignOutButton = () => {

  /**
   * Get the Auth instance from context
   */

  const auth = useAuth();

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
    auth.signOut();      
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