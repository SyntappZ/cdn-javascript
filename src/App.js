import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let circleAmount = 8;
  let leftArr = [20, 25, 10, 0, 75, 85, 99, 90];
  let circleArray = [];
  for (let i = 0; i < circleAmount; i++) {
    let randomRadius = Math.floor(Math.random() * 101) + 70;
    let randomOpacity = Math.random() * 0.5;
    let positionLeft = leftArr[i];
    let positionTop = Math.floor(Math.random() * 100);
    circleArray.push({
      radius: randomRadius,
      opacity: randomOpacity,
      left: positionLeft,
      top: positionTop
    });
  }

  let circles = circleArray.map((circle, i) => {
    return (
      <Circle
        key={i}
        radius={circle.radius}
        opacity={circle.opacity}
        left={circle.left}
        top={circle.top}
      />
    );
  });

  return (
    <div className="App">
      <Header /> 
      <div className="background">
        {circles}
        
          <div className="welcome-text">
          <i class="fas fa-cubes"></i>
            <h1 className="bubble-text">CDN JavaScript</h1>
            <p>Search the full cdn.js Database for the latest <br></br> cdn version and repo</p>
          </div>
        
      </div>
      <Main />
    </div>
  );
}

export default App;

const Circle = ({ radius, opacity, left, top }) => {
  const circleStyle = {
    width: radius,
    height: radius,
    borderRadius: "50%",
    backgroundColor: "white",
    opacity: opacity,
    position: "absolute",
    left: left + "%",
    top: top + "%"
  };
  return <div style={circleStyle}></div>;
};
