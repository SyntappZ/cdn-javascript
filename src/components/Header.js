import React, { Component } from "react";

export default class Header extends Component {
  render() {

    const mainColor = '#da0952'
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
              <a rel="noopener noreferrer" href="https://www.freecodecamp.org/forum/u/biscuitmanz/summary" target="_blank">
                <i className="fab fa-free-code-camp link"></i>
              </a>
              <a rel="noopener noreferrer" href="https://github.com/SyntappZ" target="_blank">
                <i className="fab fa-github-square link"></i>
              </a>
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/martyn-dodds-00b2a319b/" target="_blank">
                <i className="fab fa-linkedin link"></i>
              </a>
              <a rel="noopener noreferrer" href="mailto:syntappz@gmail.com" target="_blank">
                <div className="btn">
                  <i style={{color: mainColor}} className="fas fa-envelope"></i>
                  contact
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
