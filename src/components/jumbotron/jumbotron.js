import React, { useState, useEffect } from "react";
import { MDBJumbotron, MDBBtn } from "mdbreact";
import { useAgility } from "../../config/AgilityCMSConfig";

function JumbotronComponent() {
  const agility = useAgility();
  /**
   * Setting the information in state to get data from CMS.
   */

  const [title, setTitle] = useState(""),
    [body, setBody] = useState(""),
    [button, setButton] = useState(""),
    [imageUrl, setImageUrl] = useState(""),
    styles = {backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}

  /**
   * Getting data from CMS.
   */
  useEffect(() => {
    if (agility) {
      agility
        .getContentItem({ contentID: 24, languageCode: "en-us" })
        .then((res) => {
          let data = res.fields;
          setTitle(data.title);
          setBody(data.body);
          setButton(data.button);
          setImageUrl(data.imageUrl.href)
        })
        .catch((error) => error);
    }
  }, [agility]);

  return (
    <MDBJumbotron style={{backgroundImage: `url(${imageUrl})`, ...styles}}>
      <h1 className="white-text">{title}</h1>
      <p className="white-text">{body}</p>
      <p>
        <MDBBtn variant="primary">{button}</MDBBtn>
      </p>
    </MDBJumbotron>
  );
}

export default JumbotronComponent;
