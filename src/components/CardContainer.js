import React, { useState, useEffect } from "react";
import { getCDN } from "../ApiData.js";

import Card from "./Card";

const CardContainer = ({
  searchValue,
  updateTotal,
  isOnFavorites,
  shuffleCards,
  sortCards
}) => {
  const [cards, updateCards] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cardAmount, setCardAmount] = useState(50);
  let amount = cardAmount;

  const addToFavorites = (cardId, isFavorite) => {
    if (isFavorite) {
      let filtered = favorites.filter(x => x !== cardId);
      setFavorites(filtered);
      localStorage.setItem("favorites", JSON.stringify(filtered));
    } else {
      if (!favorites.includes(cardId)) {
        setFavorites([...favorites, cardId]);
        localStorage.setItem(
          "favorites",
          JSON.stringify([...favorites, cardId])
        );
      }
    }
  };

  useEffect(() => {
    let storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    storedFavorites ? setFavorites(storedFavorites) : setFavorites([]);
  }, []);

  const scrollHandler = () => {
    const scrollTarget = document.querySelector(".scrollTarget");
    let height = scrollTarget.offsetTop - 400;
    if (window.scrollY >= height) {
      setCardAmount((amount += 50));
    }
  };

  useEffect(() => {
    getCDN().then(response => {
      setApiData(response);
      updateCards(response);
    });

    window.addEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (isOnFavorites) {
      let faves = cards;
      faves = faves.filter(card => favorites.includes(card.id));
      updateCards(faves);
    } else {
      updateCards(apiData);
    }
  }, [isOnFavorites]);


  const mainWidth = window.innerWidth;

  let sum;
  mainWidth > 600 ? sum = (100 /  6) : sum = (100 / 4)
  
  const width = { width: sum + "%" };
  let myCards = cards;

  if (shuffleCards) {
    myCards.sort(() => Math.random() - 0.5);
  }

  if (sortCards) {
    myCards.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
  }

  const cardArray = myCards

    .filter(card => {
      return card.name.toLowerCase().includes(searchValue);
    })
    .map((card, i) => {
      favorites.includes(card.id)
        ? (card.favorite = true)
        : (card.favorite = false);

      return <Card addToFavorites={addToFavorites} key={i} card={card} />;
    });

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
          {mainWidth > 600 ? (
            <div className="card-section" style={width}>
              <p>Version</p>
            </div>
          ) : null}
          {mainWidth > 600 ? (
            <div className="card-section name-section " style={width}>
              <p>Author</p>
            </div>
          ) : null}
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
