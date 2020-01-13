import React, { useState, useEffect } from "react";
import { getCDN } from "../ApiData.js";

import Card from './Card'

const CardContainer = ({ searchValue, updateTotal }) => {
  const [cards, updateCards] = useState([]);

  const [cardAmount, setCardAmount] = useState(50);
  let amount = cardAmount;

  const scrollHandler = () => {
    const scrollTarget = document.querySelector(".scrollTarget");
    let height = scrollTarget.offsetTop - 400;
    if (window.scrollY >= height) {
      setCardAmount((amount += 50));
    }
  };

  useEffect(() => {
    getCDN().then(response => {
      updateCards(response);
    });
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const sum = 100 / 6;
  const mainColor = { color: "#da0952" };
  const width = { width: sum + "%" };

  const cardArray = cards
    .filter(card => {
      return card.name.toLowerCase().includes(searchValue);
    })
    .map((card, i) => <Card key={i} card={card} />);

  let totalCards = cardArray.length;

  useEffect(() => {
    updateTotal(totalCards);
  }, [updateTotal, totalCards]);
  cardArray.length = cardAmount;

  return (
    <div>
      <div className="cards-wrap">
        <div className="title-bar">
          <div className="card-section" style={width}>
            <p>Favorite</p>
          </div>
          <div className="card-section name-section" style={width}>
            <p>Name</p>
          </div>
          <div className="card-section" style={width}>
            <p>Version</p>
          </div>
          <div className="card-section name-section " style={width}>
            <p>Author</p>
          </div>
          <div className="card-section" style={width}>
            <p>Copy</p>
          </div>
          <div className="card-section" style={width}>
            <p>More</p>
          </div>
        </div>
        
        <div className="cards">{cardArray}</div>

   
      </div>
      <div className="scrollTarget"></div>
    </div>
  );
};



export default CardContainer;
