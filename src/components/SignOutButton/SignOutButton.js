import  React from 'react';
import { MDBBtn } from "mdbreact";
import { useAuth } from "../../config/Auth";
 
const SignOutButton = () => {

  /**
   * Get the Auth instance from context
   */

  const auth = useAuth();

  const signOut = () => {
    auth.signOut()
  }


return ( 
    <>
    <MDBBtn type="button" onClick={signOut}>
        Sign Out
    </MDBBtn>
    </>
)
};
 
export default SignOutButton;