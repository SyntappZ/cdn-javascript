import React, { useState, useEffect } from "react";
import { getCDN } from "../ApiData.js";

const CardContainer = () => {
  const [cards, updateCards] = useState([]);

  useEffect(() => {
    getCDN().then(response => {
      updateCards(response);
    });
  }, []);

  const sum = 100 / 6;
  const mainColor = { color: "#da0952" };
  const width = { width: sum + "%" };

  //   cards.filter(card => {

  //   })
  //   .map()
  const cardArray = cards.map((card, i) => <Card key={i} card={card} />);

  return (
    <div className="cards-wrap">
      <div className="title-bar">
        <div className="card-section" style={width}>
          <p>Favorite</p>
        </div>
        <div className="card-section name-section" style={width}>
          <p>Name</p>
        </div>
        <div className="card-section name-section" style={width}>
          <p>Version</p>
        </div>
        <div className="card-section" style={width}>
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
  );
};

const Card = ({ card }) => {
  const sum = 100 / 6;
  const width = { width: sum + "%" };
  console.log(card);
  return (
    <div className="card">
      <div className="card-section" style={width}>
        <i className="far fa-heart heart"></i>
      </div>
      <div className="card-section name-section" style={width}>
        <p className="name">{card.name}</p>
      </div>
      <div className="card-section name-section" style={width}>
        <p>{card.version}</p>
      </div>
      <div className="card-section" style={width}>
        <p>{card.author}</p>
      </div>
      <div className="card-section" style={width}>
        <i class="fas fa-copy"></i>
      </div>
      <div className="card-section" style={width}>
        <i class="fas fa-caret-down"></i>
      </div>
    </div>
  );
};

export default CardContainer;
