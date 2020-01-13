import React, { useState, useEffect } from "react";

const Card = ({ card }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const copyCDN = cdn => {
    console.log(cdn);
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

  const sum = 100 / 6;
  const width = { width: sum + "%" };
  let author;
  card.author
    ? (author = card.author.split(" ", 1).join(""))
    : (author = "No Author");

  return (
    <div className="card">
      <div className="card-top">
        <div className="card-section pointer" style={width}>
          <i className="far fa-heart heart"></i>
        </div>
        <div className="card-section name-section no-wrap" style={width}>
          <p className="name">{card.name}</p>
        </div>
        <div className="card-section" style={width}>
          <p>{card.version}</p>
        </div>
        <div className="card-section no-wrap name-section " style={width}>
          <p>{author}</p>
        </div>
        <div
          className="card-section pointer"
          onClick={() => copyCDN(card.latest)}
          style={width}
        >
          <i className="fas fa-copy"></i>
        </div>
        <div className="card-section pointer" onClick={openMore} style={width}>
          {cardOpen ? (
            <i className="fas fa-caret-up"></i>
          ) : (
            <i className="fas fa-caret-down"></i>
          )}
        </div>
      </div>
      {cardOpen ? <CardDetails cardDetails={card} /> : null}
    </div>
  );
};

const CardDetails = ({cardDetails}) => {
    
  return <div className="card-details">
      <p>{cardDetails.author}</p>
      <p>{cardDetails.desc}</p>
      <p>{cardDetails.latest}</p>
      <a href={cardDetails.repo} target="_"><div className="btn dark">repo</div></a>
  </div>;
};

export default Card;
