import React from "react";
import { MDBJumbotron, MDBBtn } from "mdbreact";

function JumbotronComponent() {
  return (
    <MDBJumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <MDBBtn variant="primary">Learn more</MDBBtn>
      </p>
    </MDBJumbotron>
  );
}

export default JumbotronComponent;
