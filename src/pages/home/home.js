import React from "react";
import { CardDeck } from "react-bootstrap";

//Components
import JumbotronComponent from "../../components/jumbotron/jumbotron";
import CardComponent from "../../components/card/card";
import { app } from "firebase";

function Home() {
  const card1 = {
    imgSrc: "",
    title: "Card 1",
    text: "This is the card number 1",
    buttonText: "",
  };
  const card2 = { imgSrc: "", title: "Card 2", text: "", buttonText: "" };
  const card3 = { imgSrc: "", title: "Card 3", text: "", buttonText: "" };

  return (
    <div>
      <JumbotronComponent />
      <CardDeck>
        <CardComponent {...card1} />
        <CardComponent {...card2} />
        <CardComponent {...card3} />
      </CardDeck>
    </div>
  );
}

export default Home;
