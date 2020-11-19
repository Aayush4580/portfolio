import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './CustomFlippingCardsStyle.css';

export const CustomFlippingCards = ({ image, headerText }) => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <div className="pointer">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="frontSide" onMouseEnter={() => setFlipped(!isFlipped)}>
          <img src={image} alt="" className="frontSideImage" />
        </div>
        <div className="backSide" onMouseLeave={() => setFlipped(!isFlipped)}>
          <div>
            <img src={image} alt="" className="backSideImage" />

            <div className="backsideText">{headerText}</div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};
