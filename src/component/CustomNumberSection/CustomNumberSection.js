import React from 'react';
import AnimatedNumber from 'animated-number-react';
import './CustomNumberSection.css';
const formatValue = (value) => value.toFixed(0);
export const CustomNumberSection = () => {
  return (
    <div className="flexDirectionRow s">
      <div className="numberSubContainer">
        <div className="textStyle">
          <AnimatedNumber
            value={120000}
            formatValue={formatValue}
            duration={1800}
            delay={1000}
          />
        </div>
        <div>lines of code</div>
      </div>
      <div className="numberSubContainer">
        <div className="textStyle">
          <AnimatedNumber
            value={23920000}
            formatValue={formatValue}
            duration={1800}
            delay={1000}
          />
        </div>
        <div>pixels rendered</div>
      </div>
      <div className="numberSubContainer">
        <div className="textStyle">
          <AnimatedNumber
            value={52}
            formatValue={formatValue}
            duration={1800}
            delay={1000}
          />
        </div>
        <div>youtube videos</div>
      </div>
      <div className="numberSubContainer">
        <div className="textStyle">
          <AnimatedNumber
            value={15}
            formatValue={formatValue}
            duration={1800}
            delay={1000}
          />
        </div>
        <div>projects completed</div>
      </div>
    </div>
  );
};
