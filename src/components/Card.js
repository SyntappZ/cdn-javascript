import React, { useState, useEffect } from "react";

const Card = ({ card, addToFavorites }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const copyCDN = cdn => {
    copiedOpacity();
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

  const bounce = (elem, scale, time) => {
    setTimeout(() => {
      elem.style.transform = `scale(${scale})`;
    }, time);
  };

  const copiedOpacity = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const clickAnimation = e => {
    const elem = e.currentTarget.firstChild;

    bounce(elem, 0.8, 0);
    bounce(elem, 1.2, 100);
    bounce(elem, 0.8, 170);
    bounce(elem, 1, 250);
    copyCDN(card.latest);
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
          className="card-section pointer copy-sec"
          onClick={clickAnimation}
          style={width}
        >
          <i className="fas fa-copy copy-icon"></i>
          <p
            style={isCopied ? { opacity: "1" } : { opacity: 0 }}
            className="copied"
          >
            Copied!
          </p>
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
  const copy = () => {
    copyCDN(cardDetails.latest);
  };

  const bounce = (elem, scale, time) => {
    setTimeout(() => {
      elem.style.transform = `scale(${scale})`;
    }, time);
  };

  const clickAnimation = e => {
    const elem = e.currentTarget;
    bounce(elem, 0.9, 0);
    bounce(elem, 1.1, 100);
    bounce(elem, 0.9, 170);
    bounce(elem, 1, 250);
    copy();
  };

  const mainWidth = window.innerWidth;

  return (
    <div className="card-details">
      <p className="description">{cardDetails.desc}</p>
      <p className="cdn" onClick={clickAnimation}>
        {cardDetails.latest}
      </p>
      <a rel="noopener noreferrer" href={cardDetails.repo} target="_">
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
