import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdbreact";
import { useAgility } from "../../config/AgilityCMSConfig";

//Components
import JumbotronComponent from "../../components/jumbotron/Jumbotron.js";
import CardComponent from "../../components/card/Card.js";

function Home() {
  const agility = useAgility();

  /**
   * Setting the information in state to get data from CMS.
   */

  const [card1, setCard1] = useState({
    imgSrc: "",
    title: "",
    text: "",
    buttonText: "",
  });
  const [card2, setCard2] = useState({
    imgSrc: "",
    title: "",
    text: "",
    buttonText: "",
  });
  const [card3, setCard3] = useState({
    imgSrc: "",
    title: "",
    text: "",
    buttonText: "",
  });

  /**
   * Getting data from CMS.
   */
  useEffect(() => {
    if (agility) {
      agility
        .getContentList({ referenceName: "homecards", languageCode: "en-us" })
        .then((res) => {
          let card1Data = res.items[0].fields,
            card2Data = res.items[1].fields,
            card3Data = res.items[2].fields;

          setCard1({
            imgSrc: card1Data.imageSource.href,
            title: card1Data.title,
            text: card1Data.text,
            buttonText: card1Data.buttonText,
          });

          setCard2({
            imgSrc: card2Data.imageSource.href,
            title: card2Data.title,
            text: card2Data.text,
            buttonText: card2Data.buttonText,
          });

          setCard3({
            imgSrc: card3Data.imageSource.href,
            title: card3Data.title,
            text: card3Data.text,
            buttonText: card3Data.buttonText,
          });
        })
        .catch((error) => error);
    }
  }, [agility]);

  return (
    <MDBContainer>
      <JumbotronComponent />
      <div className="card-deck">
        <CardComponent {...card1} />

        <CardComponent {...card2} />

        <CardComponent {...card3} />
      </div>
    </MDBContainer>
  );
}

export default Home;
