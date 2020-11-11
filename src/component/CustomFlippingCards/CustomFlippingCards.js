import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './CustomFlippingCardsStyle';

export const CustomFlippingCards = ({ image, text }) => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <div style={styles.pointer}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          style={styles.frontSide}
          onMouseEnter={() => setFlipped(!isFlipped)}
        >
          <img src={image} alt="" style={styles.frontSideImage} />
        </div>
        <div
          style={styles.backSide}
          onMouseLeave={() => setFlipped(!isFlipped)}
        >
          <div>
            <img src={image} alt="" style={styles.backSideImage} />

            <div>ddd</div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};
