import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import './CustomFlippingCardsStyle.css';

export const CustomFlippingCards = ({ image, headerText }) => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <div className="pointer">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="frontSide" onMouseEnter={() => setFlipped(!isFlipped)}>
          <img src={image} alt="" className="frontSideImage" />
          <div className="frontSideText">{headerText}</div>
        </div>
        <div className="backSide" onMouseLeave={() => setFlipped(!isFlipped)}>
          <div>
            <img src={image} alt="" className="backSideImage" />
            <div className="backsideTextButton">
              <div className="backsideText">
                {'check projects'}
                <ArrowForwardIosOutlinedIcon
                  className="iconStyle"
                  style={{ height: 15, width: 15 }}
                />
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};
