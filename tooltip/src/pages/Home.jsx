import React, { useState } from "react";

function Home() {
  const [direction, setDirection] = useState(null);
  const handleClick = (dir) => {
    setDirection(dir);
  };
  return (
    <div>
      <div className="direction-container">
        <h1>Click on the below buttons to select the direction of tooltip</h1>
        <div className="button-container">
          <button
            onClick={() => handleClick("left")}
            className={direction === "left" ? "active" : ""}
          >
            Left
          </button>
          <button
            onClick={() => handleClick("right")}
            className={direction === "right" ? "active" : ""}
          >
            Right
          </button>
          <button
            onClick={() => handleClick("top")}
            className={direction === "top" ? "active" : ""}
          >
            Top
          </button>
          <button
            onClick={() => handleClick("bottom")}
            className={direction === "bottom" ? "active" : ""}
          >
            Bottom
          </button>
        </div>
      </div>
      <div className="tooltip-container">
        <h1 className="tooltip">
          Hover over me!
          <span className={`tooltiptext tooltiptext-${direction}`}>
            Hi! I am a tooltip.
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
