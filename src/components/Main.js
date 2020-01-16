import React, { useState } from "react";
import CardContainer from "./CardContainer";

const Main = () => {
  const [totalResults, setTotal] = useState(0);
  const [searchValue, setSearchValue] = useState('')
  const [isOnFavorites, switchFavorites] = useState(false)
  const [sortCards, setSortCards] = useState(false)
  const [shuffleCards, setShuffleCards] = useState(false)

  const updateTotal = (total) => {
    setTotal(total);
  }

 const handleSearchInputChange = e => {
  setSearchValue(e.target.value);
  };

  const sortHandler = () => {
     setSortCards(true)
     setTimeout(() => {
      setSortCards(false)
    }, 10);
  }

  const randomHandler = () => {
   
    setShuffleCards(true);
    setTimeout(() => {
      setShuffleCards(false)
    }, 10);
    
  }

  const filterFavorites = () => {
  let favoriteSwitch = isOnFavorites
  switchFavorites(favoriteSwitch = !favoriteSwitch)

    
  }

  return (
    <div className="container">
      <div className="main">
        <div className="total">
          <div>
            <h4>Results</h4>
            <p>{ totalResults }</p>
          </div>
        </div>

        <div className="icons">
          <div className="icons-left">
            <div style={{ cursor: "default" }} className="btn outline">
              <i className="fas fa-cubes logo"></i>
              cdn list
            </div>
          </div>
          <div className="icons-right">
            <div onClick={randomHandler}>
              <i className="fas fa-random"></i>
              <p>Shuffle</p>
            </div>
            <div onClick={sortHandler}>
            <i className="fas fa-sort-alpha-down"></i>
              <p>sort</p>
            </div>
            <div onClick={filterFavorites} >
              {isOnFavorites ? <i className="fas fa-heart heart"></i> : 
              <i className="fas fa-heart"></i> }
              
              <p>favorites</p>
            </div>
            <div className="btn dark">
              <i className="fas fa-chevron-down"></i>
              size
            </div>
          </div>
        </div>

        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            onChange={handleSearchInputChange}
            placeholder="Search CDN's"
          />
        </div>
        <CardContainer
         isOnFavorites={isOnFavorites}
          searchValue={searchValue}
           updateTotal={updateTotal}
           sortCards={sortCards}
           shuffleCards={shuffleCards}
            />
      </div>
    </div>
  );
};

export default Main;
