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
          onClick={() => copyCDN(card.latest)}
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
  let author, version;
  if (mainWidth < 600) {
    author = <p>{cardDetails.author}</p>;
    version = <p>{cardDetails.version}</p>;
  } else {
    author = null;
    version = null;
  }

  return (
    <div className="card-details">
      <p className="description">{cardDetails.desc}</p>
      <p className="cdn" onClick={() => copy(cardDetails.latest)}>
        {cardDetails.latest}
      </p>
      <a href={cardDetails.repo} target="_">
        <div className="btn dark repo">
          <i className="fas fa-code-branch"></i>
          repo
        </div>
      </a>
      { version }
       {  author }
    </div>
  );
};

export default Card;
