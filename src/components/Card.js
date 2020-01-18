import React, { useState, useEffect } from "react";

const Card = ({ card, addToFavorites }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const copyCDN = cdn => {
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = cdn;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };

  const openMore = () => {
    let isOpen = cardOpen;
    setCardOpen((isOpen = !isOpen));
  };

  const favoriteHandler = (cardId, fav) => {
    addToFavorites(cardId, fav);
  };

  const clickAnimation = (e) => {
    const elem = e.target;
    elem.style.transfrom = 'scale(0.4)';

    setTimeout(() => {
      elem.style.transfrom = 'scale(1)';

    }, 100)
    copyCDN(card.latest)
  }

  const mainWidth = window.innerWidth;
  let sum;
  mainWidth > 600 ? (sum = 100 / 6) : (sum = 100 / 4);

  const width = { width: sum + "%" };
  let author;
  card.author
    ? (author = card.author.split(" ", 2).join(" "))
    : (author = "No Author");

  return (
    <div className="card fadeIn">
      <div className="card-top">
        <div
          className="card-section pointer"
          onClick={() => favoriteHandler(card.id, card.favorite)}
          style={width}
        >
          {card.favorite ? (
            <i className="fas fa-heart heart"></i>
          ) : (
            <i className="far fa-heart heart"></i>
          )}
        </div>
        <div className="card-section name-section no-wrap" style={width}>
          <p className="name">{card.name}</p>
        </div>

        {mainWidth > 600 ? (
          <div className="card-section" style={width}>
            <p>{card.version}</p>
          </div>
        ) : null}
        {mainWidth > 600 ? (
          <div className="card-section no-wrap name-section " style={width}>
            <p>{author}</p>
          </div>
        ) : null}

        <div
          className="card-section pointer"
          onClick={clickAnimation}
          style={width}
        >
          <i className="fas fa-copy copy-icon"></i>
        </div>
        <div className="card-section pointer" onClick={openMore} style={width}>
          {cardOpen ? (
            <i className="fas fa-caret-up"></i>
          ) : (
            <i className="fas fa-caret-down"></i>
          )}
        </div>
      </div>
      {cardOpen ? <CardDetails cardDetails={card} copyCDN={copyCDN} /> : null}
    </div>
  );
};

const CardDetails = ({ cardDetails, copyCDN }) => {
  const copy = cdn => {
    copyCDN(cdn);
  };

  const mainWidth = window.innerWidth;

  return (
    <div className="card-details">
      <p className="description">{cardDetails.desc}</p>
      <p className="cdn" onClick={() => copy(cardDetails.latest)}>
        {cardDetails.latest}
      </p>
      <a rel="noopener"  href={cardDetails.repo} target="_">
        <div className="btn dark repo">
          <i className="fas fa-code-branch"></i>
          repo
        </div>
      </a>
    
      <p style={{ fontWeight: "lighter" }}>
        <span style={{ fontWeight: "bold" }}>Version: </span>
        {cardDetails.version}
      </p>
      <p style={{ fontWeight: "lighter" }}>
        <span style={{ fontWeight: "bold" }}>Author: </span>
        {cardDetails.author}
      </p>
    </div>
  );
};

export default Card;
