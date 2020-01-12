import React, { Component } from "react";
import CardContainer from './CardContainer'
export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
         
            <div className="total">
              <div>
                <h4>Total</h4>
                <p>0</p>
              </div>
            </div>

            <div className="icons">
              <div className="icons-left">
                <div className="btn outline">
                <i className="fas fa-cubes logo"></i>

                  cdn
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
                  <i class="fas fa-chevron-down"></i>
                  size
                </div>
              </div>
            </div>
            
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search CDN's" />
            </div>
          <CardContainer />
        </div>
      </div>
    );
  }
}
