import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="inner-header">
            <div className="title">
              <h2 className="bubble-text">
                <i className="fas fa-cubes logo"></i>
                CDN
              </h2>
              <p>Random</p>
              <p>A-Z</p>
            </div>
            <div className="right-header">
                
              <i className="fab fa-free-code-camp link"></i>
              <i className="fab fa-github-square link"></i>
              <i className="fab fa-linkedin link" ></i>
              <div className="btn">
              <i className="fas fa-envelope"></i>
                contact
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
