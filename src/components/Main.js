import React, { useState } from "react";
import CardContainer from "./CardContainer";

const Main = () => {
  const [totalResults, setTotal] = useState(0);
  const [searchValue, setSearchValue] = useState('')

  const updateTotal = (total) => {
    setTotal(total);
  }

 const handleSearchInputChange = e => {
  setSearchValue(e.target.value);
  };

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
            <div>
              <i className="fas fa-random"></i>
              <p>random</p>
            </div>
            <div>
              <i className="fas fa-sort"></i>
              <p>sort</p>
            </div>
            <div>
              <i className="fas fa-heart"></i>
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
        <CardContainer searchValue={searchValue} updateTotal={updateTotal} />
      </div>
    </div>
  );
};

export default Main;
