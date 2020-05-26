import React, { useState } from "react";
import { MDBJumbotron, MDBBtn } from "mdbreact";

function JumbotronComponent() {

  const [title, setTitle] = useState("Hello, world!"),
  [body, setBody] = useState("This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),
  [button, setButton] = useState("Learn more");

  return (
    <MDBJumbotron>
      <h1>{title}</h1>
      <p>
        {body}
      </p>
      <p>
        <MDBBtn variant="primary">{button}</MDBBtn>
      </p>
    </MDBJumbotron>
  );
}

export default JumbotronComponent;
